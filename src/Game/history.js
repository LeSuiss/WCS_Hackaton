import React, { Component, useState, useEffect } from 'react';
import { isTemplateElement } from '@babel/types';
// Set the name of the User

const StoryViewer = () => {
    const [hp, setHP] = useState(100)
    const [name, setName] = useState("Player One");
    const [idnum, setIdnum] = useState(10);
    const historyTab = {
        
        10: {
            content: `Hello ${name}. You are one of the finest demon hunter in the kingdom. You just got summoned by the emperor himself in the throne room.
        "Greetings, ${name} I am pleased to see you. The kingdom is in deep need of your skills. A troublesome report just came back, informing me that villagers were found dead in the village of Donzericia. It would seem that all of them exhibited strange stigmas : Two holes in the neck, as if two nails were jammed into their throat. Please investigate and let me know what you discover."`,

            choice: ["1. go to the Library", "2. Set off to the village of DONZERICIA", "3. Ask gold from the emperor", "4. Ask the emperor to have a sexual relationship"],

            alive: true
        },

        11: {
            content: `The empire possesses an off the scale library. Lost in this multitude of knowledge, your meet the grand meister, who inquires about your goals. After hearing you out, he invites you to follow him and leads you to a small chamber.
        "Here is what you need, young hunter." He gives you an old book named "vampires throughout history: an eternal enemy or the most powerful ally?"
        CONGRATULATIONS !!! YOU HAVE IMPROVED YOUR KNOWLEDGE OF VAMPIRE !!` ,

            choice: ["1. Set off to the village of DONZERICIA"],
            alive: true,
        },

        12: {
            content: `You leave the capital of the empire heading to the village. Which way of travelling you want to use ?`,

            choice: ["1. By foot (2days of walk)", "2. Horse, assuming you have gold"],
            alive: true
        },


        13: {
            content: `Of course, I shall provide your expenses for you journey. Here, take this, it shall cover your needs. CONGRATULATIONS !!! You've earned 10 gold coins`,

            choice: [], alive: true
        },

        14: {
            content: `Two things are certains :
            1. You are quite dumb.
            2. If it was supposed to be a touch of humor, it is not to the emperor’s taste.
           
           He places you under arrest and you are hung within the hour. History will remember you as the dumbest hunter in the universe.`,

            choice: [],
            alive: false
        },

        '12M': {
            content: 'you encounter an enemy',
            choice: ["proceed to the next step of your journey"]
        },

        20: {
            content: `You arrived in the village at the travellers' station. Where do you want to head next?`,
            choice: ["1. Go to the tavern", "2. Go visit the cemetery", "3. Go to the village central place and find out if you can collect some informations"]
        },
        21: {
            content: "You enter the tavern and ask for a beer (of course, I'll get some alcohol ! As you start to drink, the man next to you starts to get your attention. He seems pretty drunk and babbles some weird stuff about surnatural events. He especially mentions a nasty castle full of 'fucking blood drinkers' close to the village. You make him talk and get the adress of said castle.)",
            choice: ["1. Go the Castle", "2. Go visit the cemetary"]
        },


        22: {
            content: `As you get closer to the cemetery, you see strange footprints. By the size of it, it would seem an adult has walked here, but by the depth of the print you'd almost think whoever did this had no weight. At your arrival, you discover what you have started to expect: open coffins with no one in it... No doubt about it, there are VAMPIRES going around the place. It's sad news, but not the first time you have seen this messy stuff. Now, it is time to decide what to do and do it quickly`,
            choice: ["1. Go to the tavern", "2. Explore deeper into the cemetery"]
        },
        221: {
            content: `Giving a circular look over the cemetery you see a mausoleum, that you decide to inspect. As expected by now, the coffin is empty but the rest of it is intact, especially the items of the fallen warrior that rest by its side even in death. Among them a mythril chainmail; trully a rare item that few fighters are lucky enough to wear. CONGRATULATIONS, you have earned a useful item: THE MYTHRIL CHAINMAIL. Now, it is time to head back to the village`,

            choice: ["1. Go to the tavern", "2. Go visit the cemetery", "3. Go in the village's central place and find out if you can collect some informations"]
        },
        23: {
            content: `You head toward the main Place. Arrived there, you start to notice the strange looks the villagers give you. They don't seem to like strangers. No one wants -or dares- to talk with you. What do you do next, ${name} ?`,
            choice: ["1. Go to the tavern", "2. Go visit the cemetery"]
        },
        30: {
            content: `As the drunk told you, the castle is accessible by various ways on which your travel will depends. You have to face a choice:`,
            choice: ["1. Reach the Castle by following the river", "2. cross the moutain", "3 use the usual roadway"]
        },

        '31M': {
            content: `Wisely, you follow the calm river. Although it does not seem to like it much, the only guardian there is a Demoniac Cat. You have to fight it to get through.`, choice: ['1: Fight the Demoniac Cat (-4 HP)']
        },

        '32M': {
            content: `A corpse blockade stops your advance. You have no choice but to fight it to get through.`, choice: ['1: Fight the corpse blockade (-4 HP)']
        },

        '33M': {
            content: `A foolish decision ! The quiet roadway suddenly swarms with monsters. You run away, but a Maid Ghoul stops your advance. You have no choice but to fight it to get through.`, choice:['1: Fight the Maid Ghoul (-12 HP)']
        },
        '40': {
            content: `The castle finally comes into view. You let your suspicions dictate some carefulness, and observe the area around. Not a soul seems to be even living there. You carefully open the massive, ornated door.`, choice: ['1: Fight the Maid Ghoul (-12 HP)'],
            path : [fonction1, fonction2, fonction3]
        },
        '33M': {
            content: `A foolish decision ! The quiet roadway suddenly swarms with monsters. You run away, but a Maid Ghoul stops your advance. You have no choice but to fight it to get through.`, choice: ['1: Fight the Maid Ghoul (-12 HP)']
        },
        '33M': {
            content: `A foolish decision ! The quiet roadway suddenly swarms with monsters. You run away, but a Maid Ghoul stops your advance. You have no choice but to fight it to get through.`, choice: ['1: Fight the Maid Ghoul (-12 HP)'], hploss:[12]
        },


    }

    const historyContent = () => {
        return historyTab[idnum].content
    }

    const viewer = () => {
        return (
            <>
                <div>{historyContent()}</div>
                <button onClick={() => setIdnum(path[0], setHP(HP-historyTab[idnum].hploss[0]) )}> {historyTab[idnum].choice[0]}</button>
                <button onClick={() => setIdnum(idnum + 2)}> {historyTab[idnum].choice[1]}</button>
                <button onClick={() => setIdnum(idnum + 3)}> {historyTab[idnum].choice[2]}</button>
            </>
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