import React, { Component, useState, useEffect } from 'react';
import history from './historyTab';
import { Container, Col, Row } from 'reactstrap';
import './history.css'
import axios from 'axios'
// Set the name of the User
const StoryViewer = () => {
    //HOOKS
    const [hp, setHP] = useState(30)
    const [name, setName] = useState("Player One");
    const [idnum, setIdnum] = useState(1);
    const historyTab = history({ name })
    const [armor, setArmor] = useState(false);
    const [gold, setGold] = useState(false);
    const [book, setBook] = useState(false);
    const [api, setAPI] = useState([])

    useEffect(() => {
        const APIfetch = async () => {
            const result = await axios(`https://hackathon-wild-hackoween.herokuapp.com/monsters`);
            setAPI(result.data)
        }
        APIfetch();
        const hpHandler = () => {
            if (armor === true) { setHP(hp - historyTab[idnum].hploss * 0.8) }
            else { setHP(hp - historyTab[idnum].hploss) }
        }
        hpHandler();

    }, [historyTab[idnum].hploss]
    )
    //Handling events


    const handleChangeName = (e) => { setName(e.target.value) }

    // Fonctions de display
    const displayHp = () => {
        return (
            <>{hp}

            </>
        )
    };

    const displayGold = () => {
        if (idnum === 13 && gold === false) {
            return (setGold(true)
            )
        };
        if (gold === true) {
            return <img className="gold" alt='' src="https://previews.123rf.com/images/viktorijareut/viktorijareut1610/viktorijareut161000203/67827499-vector-illustration-bourse-m%C3%A9di%C3%A9vale-sac-d-or-et-de-pile-de-pi%C3%A8ces-d-or-sac-en-cuir-marron-ic%C3%B4ne.jpg"></img>
        }

    }
    const displayArmor = () => {
        if (idnum === 221 && armor === false) {
            return (setArmor(true)
            )
        };
        if (armor === true) {
            return <img className="armor" alt='' src="https://comps.canstockphoto.com/plate-armor-icon-in-black-style-isolated-drawing_csp41631891.jpg"></img>
        }
    }
    const displayBook = () => {
        if (idnum === 11 && book === false) {
            return (setBook(true)
            )
        };
        if (book === true) {
            return <img className="book" alt='' src="https://www.clipartwiki.com/clipimg/detail/299-2995739_book-stack-clipart-black-and-white.png"></img>
        }
    }
    const displayImage = () => {
        if (idnum > 1000) {
            let ida = idnum % 100
            return (
                <>
                    <img alt="" src={api.monsters[ida].picture} />
                </>
            )

        }
    }
    const setReset = () => {setIdnum(1);
        setHP(30)}
    const displaySound = () => {
        if (idnum > 1000) {
            let ida = idnum % 100
            return (
                <>
                    <audio autoPlay={true}
                        controls={true} id="audioPlayer" src="http://superacro.free.fr/Site/Musiques/10%20-%20Fighting.mp3">
                    </audio>
                </>
            )

        }
    }
    const displaySentence = () => {

        if (idnum > 1000) {
            let ida = idnum % 100
            return (
                <p>{api.monsters[ida].description}</p>
            )
        }
    }

    const historyContent = () => {

        if (idnum === 1) {

            return (
                <form>
                    <input type="text" value={name} onChange={handleChangeName} />
                    <button type="submit" onClick={() => setIdnum(10)}>
                        Let's get started
                            </button>
                </form>)
        }

        else {
            if (idnum === 0) {
                return (
                    <>
                    <p>You died, {name}... Maybe try to collect a few more souls, next time. </p>
                    <button className="buttonReset" onClick={() => setReset()} >Restart</button>
                    </>
                )
            }
            else {
                return (historyTab[idnum].content
                )
            }

        }

    }

    const displayButtons = () => {
        return (
            historyTab[idnum].choice.map(eachChoice => {
                const indexEachChoice = historyTab[idnum].choice.indexOf(eachChoice)
                return (
                    <button key={indexEachChoice} onClick={
                    () => {
                        if (hp <= 0) {
                                setIdnum(0)
                            }
                        else {
                                setIdnum(historyTab[idnum].path[indexEachChoice])
                            }
                            }
                            }>
    { historyTab[idnum].choice[indexEachChoice] }
                    </button >
                )}
            )
        )
    }
//render
const viewer = () => {
    return (
        <Container className="contain">
            {displaySound()}
            <div className="items"> {displayArmor()} {displayBook()} {displayGold()}</div>
            <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
            <h4>{displayHp()}</h4>
            <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
            <Row>
                <Col id="monsterImg" sm="8"  >{displayImage()}</Col>
                <Col id="monsterPhrase" sm="8">{displaySentence()}</Col>
            </Row>

            <Row className="content">
                {historyContent()}
            </Row>

            <Row className="buttons">
                {displayButtons()}
            </Row>
        </Container>
    )
}

    ;

return (
    <>
        {viewer()}
    </>
)


}
export default StoryViewer
