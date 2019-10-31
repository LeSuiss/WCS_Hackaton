import React, { Component, useState, useEffect } from 'react';
import { isTemplateElement } from '@babel/types';
import history from './historyTab';
import {Container, Col, Row} from 'reactstrap';
import './history.css'

// Set the name of the User
const StoryViewer = () => {
    //HOOKS
    const [hp, setHP] = useState(30)
    const [name, setName] = useState("Player One");
    const [idnum, setIdnum] = useState(1);
    const historyTab=history({name})
<<<<<<< HEAD

    const handleChangeName=(e)=>{ setName(e.target.value)
    }    

    useEffect( () =>{
     const hpHandler = ()=> {
     setHP(hp-historyTab[idnum].hploss)
    }
    hpHandler()
    },[idnum]
    )
=======
    const [armor, setArmor] = useState(false);
    const [gold, setGold] = useState(false);
    const [book, setBook] = useState(false);
   
    //Handling events
    
    const hpHandler= () => setHP(hp-historyTab[idnum].hploss)
    const handleChangeName=(e)=>{ setName(e.target.value)
    }
    // Fonctions de display
    const displayHp=()=> {
        return(
            <>{hp}

            </>
        )
    };
    const displayGold=()=>{
        if (idnum === 13 && gold===false){return(setGold(true)
            )
        };
        if (gold===true){return <img className="gold" alt='' src="https://previews.123rf.com/images/viktorijareut/viktorijareut1610/viktorijareut161000203/67827499-vector-illustration-bourse-m%C3%A9di%C3%A9vale-sac-d-or-et-de-pile-de-pi%C3%A8ces-d-or-sac-en-cuir-marron-ic%C3%B4ne.jpg"></img>
            }
>>>>>>> b57ae66d98d8659679ee6202205707cbc64cd7cf

    }
    const displayArmor=()=> {
        if (idnum === 221 && armor===false){return(setArmor(true)
            )
        };
        if (armor===true){return<img className="armor" alt='' src="https://comps.canstockphoto.com/plate-armor-icon-in-black-style-isolated-drawing_csp41631891.jpg"></img>
            }
    }
    const displayBook=()=> {
        if (idnum === 11 && book===false){return(setBook(true)
            )
        };
        if (book===true){return<img className="book" alt='' src="https://www.clipartwiki.com/clipimg/detail/299-2995739_book-stack-clipart-black-and-white.png"></img>
            }
    }
    
    const displayImage=()=>{

    }
    const historyContent = () => {if (idnum ===1)
        {            
                return(
                    <form>
                        <input type="text" value={name} onChange={handleChangeName} />
                            <button type="submit" onClick={() =>setIdnum(10)}>
                                Let's get started
                            </button>
                    </form>)}
                    else{
                        return( historyTab[idnum].content
                            )                
                    }
    }
<<<<<<< HEAD

    
            const viewer = () => {
        return (
            <Container>

                <Row>
                    <Col id="monsterImg" sm="8">Image</Col>
                    <Col id="monsterPhrase" sm="8">Phrase de prest</Col>
                </Row>

                <Row>
                    {historyContent()}
                </Row>

                <Row>
                    {displayButtons()}
                </Row>
                <div>{hp}</div>
            </Container>
        )
    }

=======
>>>>>>> b57ae66d98d8659679ee6202205707cbc64cd7cf
    const displayButtons = () => { 
        return (
            historyTab[idnum].choice.map(eachChoice => {
                const indexEachChoice = historyTab[idnum].choice.indexOf(eachChoice)
                return (
                    <button key={indexEachChoice} onClick={() =>
                        setIdnum(historyTab[idnum].path[indexEachChoice])}>
                        {historyTab[idnum].choice[indexEachChoice]}
                    </button>
                )}
            )
        )
    }
    //render
    const viewer = () => {
        return (
    <Container className="contain">
            <div className="items"> {displayArmor()} {displayBook()}  {displayGold()}</div>
                <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
                <h4>{displayHp()}</h4>
                    <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
                <Row>
                    <Col id="monsterImg" sm="8"  >fffff</Col>
                    <Col id="monsterPhrase" sm="8">Phrase de prest</Col>
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
export default StoryViewer; 