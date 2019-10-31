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
    const [armor, setArmor] = useState(false);
    
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
    const displayArmor=()=> {
        if (idnum === 221 && armor===false){return(setArmor(true)
            )
        };
        console.log(armor) 
        if (armor===true){return(<div></div>)}
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

<h4>{displayArmor()}</h4>
                <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
                <h4>{displayHp()}</h4>
                {armor===true?<img className="armor" alt='' src="https://comps.canstockphoto.com/plate-armor-icon-in-black-style-isolated-drawing_csp41631891.jpg"></img>:""
                }
                <img className="imgHp" alt='' src="https://images.emojiterra.com/google/android-10/128px/2764.png"></img>
                <Row>
                    <Col id="monsterImg" sm="8"  >Image</Col>
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