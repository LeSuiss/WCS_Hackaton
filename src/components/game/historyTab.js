import React, { Component } from 'react';

const history = (props) => {
    return (
    {
    0:{
        choice:[],
        hploss:[],
    },
    
    1:{

        choice:[],
        hploss:0,
        idnum : '',
        choice: ["1. Enjoy the game", "2. Don't enjoy but gratz the devs", "3. nevermind the captain's age and procede to the quest"],
        path: [10, 10, 10],
    },
    10: {
        content: `Hello ${props.name}. You are one of the finest demon hunter in the kingdom. You just got summoned by the emperor himself in the throne room.
    "Greetings, ${props.name} I am pleased to see you. The kingdom is in deep need of your skills. A troublesome report just came back, informing me that villagers were found dead in the village of Donzericia. It would seem that all of them exhibited strange stigmas : Two holes in the neck, as if two nails were jammed into their throat. Please investigate and let me know what you discover."`,

        choice: ["1. Go to the Library", "2. Set off to the village of Donzericia", "3. Ask gold from the emperor", "4. Ask the emperor to have a sexual relationship"],
        path: [11, 12, 13, 14],
        hploss: 0,
    },

    11: {content:`The empire possesses an off the scale library. Lost in this multitude of knowledge, your meet the grand meister, who inquires about your goals. After hearing you out, he invites you to follow him and leads you to a small chamber.
    "Here is what you need, young hunter." He gives you an old book named "vampires throughout history: an eternal enemy or the most powerful ally?"
    CONGRATULATIONS !!! YOU HAVE IMPROVED YOUR KNOWLEDGE OF VAMPIRE !!`,

        choice: ["1. Set off to the village of Donzericia", "2. Ask gold from the emperor", "3. Ask the emperor to have a sexual relationship"],
        path: [12,13,14],
        hploss: 0,
    },

    12: {
        content: `You leave the capital of the empire heading to the village. Which way of travelling you want to use ?`,
        choice: ["1. By foot (2days of walk)", "2. Horse, assuming you have gold"],
        path: [1206, 20],
        hploss: 0,
        
    },


    13: {
        content: `Of course, I shall provide your expenses for you journey. Here, take this, it shall cover your needs. CONGRATULATIONS !!! You've earned 10 gold coins`,
        choice: ["1. go to the Library", "2. Set off to the village of DONZERICIA", "3. Ask the emperor to have a sexual relationship"],
        path: [11, 12, 14],
        hploss: 0,
    },

    14: {
        content: `Two things are certains :
        1. You are quite dumb.
        2. If it was supposed to be a touch of humor, it is not to the emperor’s taste.
       
       He places you under arrest and you are hung within the hour. History will remember you as the dumbest hunter in the universe.`,

        choice: ["Play Again ?"],
        path: [10],
        hploss: 999,
    },

    1206: {
        content: 'You encounter an enemy',
        choice: ["Proceed to the next step of your journey after battling Dreadhorde Butcher (-4HP)"],
        path: [20],
        hploss: 4,
        
    },

    20: {
        content: `You arrived in the village at the travellers' station. Where do you want to head next?`,
        choice: ["1. Go to the tavern", "2. Go visit the cemetery", "3. Go to the village central place and find out if you can collect some informations"],
        path: [21, 22, 23],
        hploss: 0,
    },
    21: {
        content: "You enter the tavern and ask for a beer (of course, I'll get some alcohol ! As you start to drink, the man next to you starts to get your attention. He seems pretty drunk and babbles some weird stuff about surnatural events. He especially mentions a nasty castle full of 'fucking blood drinkers' close to the village. You make him talk and get the adress of said castle.)",
        choice: ["1. Go the Castle", "2. Go visit the cemetery"],
        path: [30, 22],
        hploss: 0,
    },


    22: {
        content: `As you get closer to the cemetery, you see strange footprints. By the size of it, it would seem an adult has walked here, but by the depth of the print you'd almost think whoever did this had no weight. At your arrival, you discover what you have started to expect: open coffins with no one in it... No doubt about it, there are VAMPIRES going around the place. It's sad news, but not the first time you have seen this messy stuff. Now, it is time to decide what to do and do it quickly`,
        choice: ["1. Go to the tavern", "2. Explore deeper into the cemetery"],
        path: [21, 221],
        hploss: 0,
    },
    221: {
        content: `Giving a circular look over the cemetery you see a mausoleum, that you decide to inspect. As expected by now, the coffin is empty but the rest of it is intact, especially the items of the fallen warrior that rest by its side even in death. Among them a mythril chainmail; trully a rare item that few fighters are lucky enough to wear. CONGRATULATIONS, you have earned a useful item: THE MYTHRIL CHAINMAIL. Now, it is time to head back to the village`,
        choice: ["1. Go to the tavern", "2. Go back the cemetery", "3. Go in the village's central place and find out if you can collect some informations"],
        path: [21, 222, 23],
        hploss: 0,
    },
    222: {
        content: `There's nothing else here. What did you hope for ?`,
        choice: ["1. Go to the tavern", "2. Go in the village's central place and find out if you can collect some informations"],
        path: [21, 221],
        hploss: 0,
    },
    23: {
        content: `You head toward the main Place. Arrived there, you start to notice the strange looks the villagers give you. They don't seem to like strangers. No one wants -or dares- to talk with you. What do you do next, ${props.name} ?`,
        choice: ["1. Go to the tavern", "2. Go visit the cemetery"],
        path: [21, 22],
        hploss: 0,
    },
    30: {
        content: `As the drunk told you, the castle is accessible by various ways on which your travel will depends. You have to face a choice:`,
        choice: ["1. Reach the Castle by following the river", "2. Cross the moutain", "3. Use the usual roadway"],
        path: [3102, 3204, 3300],
        hploss: 0,
        
    },

    3102: {
        content: `Wisely, you follow the calm river. Although it does not seem to like it much, the only guardian there is a Demoniac Cat. You have to fight it to get through.`, choice: ['1: Fight the Demoniac Cat (-4 HP)'],
        path: [40],
        hploss: 4,
        },

    3204: {
        content: `A corpse blockade stops your advance. You have no choice but to fight it to get through.`, choice: ['1: Fight the corpse blockade (-4 HP)'],
        path: [40],
        hploss: 4,
    },

    3300: {
        content: `A foolish decision ! The quiet roadway suddenly swarms with monsters. You run away, but a Maid Ghoul stops your advance. You have no choice but to fight it to get through.`,
        choice: ['1. Fight the Maid Ghoul (-12 HP)'],
        path: [40],
        hploss: 12,
    },
    40: {
        content: `The castle finally comes into view. You let your suspicions dictate some carefulness, and observe the area around. Not a soul seems to be even living there. You carefully open the massive, ornated door. Inside, cold stones and a slight breeze are the only things to greet you. You start to question the veracity of what the drunk said. Maybe alcohol got to him ?`,
        choice: ['1. Continue through the corridor.', '2. Take a look around.'],
        path: [41, 401],
        hploss: 0,
        
    },
    401: {
        content: `As you keep walking around, everything seems to look the same. After a while, you realise you're back where you started.`, choice: ['1. Continue through the corridor.'],
        path: [41],
        hploss: 0,
    },

    41: {
        content: `You keep going forward. The walls start livening up with tapestries of old heroes, expensive items, and dimmed, strange bulbs emitting light. The more you walk, the more incredible those ornaments of the past become. Their simple existence makes you feel humbled. Another door, held together by two golden, refined wolves head, lies right in front of you. What do you do, ${props.name}?`,
        choice: ['1. Push the door.', '2. Take one of the rich necklaces hanging on the wall.', '3. Take a look around.'],
        path: [50, 42, 401],
        hploss: 0,

    },
    42: {
        content: `Tell me, ${props.name}, my dear child, what made you think you could outwit the master of the place ? Oh, ${props.name}, after going this far, this is too greedy of a choice. As you put the necklace in your bag, your consciousness starts to fade. You go mad, condemned to run aimlessly around the empty castle. A fitting end for a low thief.`,
        choice: ['Start again, foolish human.'],
        path: [10],
        hploss: 999,

    },


    50: {
        content: `The door does not even emit a single creak as it turns. Before you lies a gigantic hall, impressive just for it's sheer size; but the ancient feel that came with it was even more breathtaking. Measuring your steps, you walk in, almost in awe. A voice suddenly resonates : "Welcome, young human. What brings you here ?" Opposite from you, lavishly sitting on a throne of gold incrustated with gems, a tall and threatening man lies. His skin is paler than the stairs of white stone leading up to him, and his presence oppressing. Even from that distance, it seems you can distinguish two pointy teeth in his wide smile.`, 
        choice: ['1. Come closer and see what he has to say', '2. Attack him.'],
        path: [51,5009],
        hploss: 0,
    },


    51: {
        content: `You walk up. "I am ${props.name}, and I am a hunter of evil. Who are you siding with ?" The man before you smiles again, and introduces himself as Alucard, a Vampire Lord who's lived far from human life for decade. The vampire tells you a tale of a much greater evil: the dreadful Apocalypse lord, ruler of Chaos and harbinger of Doom. After seizing control of the Liches and their lords, along with killing and bringing back from the dead the weaker Vampires, he's been wreaking havoc. Good luck, ${props.name}, as your chance of survival are really low.`, 
        choice: ['1. Believe him, save the world and fight the Apocalypse Lord', '2. Call his bluff, and attack him.'],
        path: [6019, 5009],
        hploss: 0,
    },

    5009: {
        content: `Was this really a good choice ? The Vampire stops your blow, a smirk of disdain that you feel towards your entire race on his face.`, 
        choice: ['Fight the lord vampire. Beware his might !'],
        path: [98],
        hploss: 16,
    },

    6019: {
        content: `The Vampire, protecting you and him with his own powers, flies you out to the Northern Mountains; the home of the dreadful Apocalypse lord. Good luck, ${props.name}, as he is the greatest foe to walk this Earth.`, 
        choice: ['1.Save the world and fight the apocalypse lord'],
        path: [99],
        hploss: 20,
    },
    
    98: {
        content: `The Vampire is slain. But you didn't hear his warnings, nor tried to inform yourself; he was the only one able to overcome the unmatchable psychic powers of the Apocalypse lord. Your original mission might be complete.. But you will be a dead man within two months, be it to the hands of the Emperor or the maddened Lord. You could call this a victory, but it is a bitter one.`, 
        choice: ['Die'],
        path: [0],
        hploss: 999,
    },
    99: {
        content: `GAME COMPLETED. CONGRATULATIONS !!!!`, 
        choice: ['Game restart'],
        path: [1],
        hploss: 0,
    },

}
)
}
export default history