import React, { Component, useState, useEffect } from 'react';
import { isTemplateElement } from '@babel/types';
import history from './historyTab';
import {Container, Col, Row} from 'reactstrap';
import './history.css'

// Set the name of the User
const StoryViewer = () => {
    const [hp, setHP] = useState(30)
    const [name, setName] = useState("Player One");
    const [idnum, setIdnum] = useState(1);
    const historyTab=history({name})

    const handleChangeName=(e)=>{ setName(e.target.value)
    }    

    useEffect( () =>{
     const hpHandler = ()=> {
     setHP(hp-historyTab[idnum].hploss)
    }
    hpHandler()
    },[idnum]
    )


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
        ;

    return (
        <>
            {viewer()}
        </>
    )


}
export default StoryViewer;