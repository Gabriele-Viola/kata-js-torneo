
const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];
// assegnazione armi
let choosenWeapons = [...weapons]
let choosenWeapon = ''

let fightersArmed = fighters.map(fighter => {

    choosenWeapon = choosenWeapons[Math.floor(Math.random() * choosenWeapons.length)]

    choosenWeapons = choosenWeapons.filter(weapon => weapon.name !== choosenWeapon.name)
    return { ...fighter, weapon: choosenWeapon }


}
)

console.log(fightersArmed);
//  training


let trainingFighters = fightersArmed.map(fighter => {
    const multiplier = Math.floor(Math.random() * 100) + 1
    let treaning = (fighter.power + fighter.weapon.power) * multiplier
    console.log('fighter: ', fighter.name, 'total power: ', treaning);
    console.log('fighter power: ', fighter.power, 'weapon power: ', fighter.weapon.power, 'multiplier: ', multiplier);


    return { ...fighter, trainingPower: treaning }
})
console.log(trainingFighters);

//qualifications

let fightersQualificated = [...trainingFighters]
fightersQualificated = fightersQualificated.filter(fighters => fighters.trainingPower >= 8000)

console.log(fightersQualificated);

//start fighting

let nextTurnOther = []

if (fightersQualificated.length % 2 !== 0) {

    nextTurnOther.push(fightersQualificated[fightersQualificated.length - 1])
    fightersQualificated.filter(item => item != nextTurnOther[0])
}

console.log(nextTurnOther[0] || 'is Empty');

function round(figheters) {
    let nextTurn = []
    for (let i = 0; i < figheters.length; i += 2) {
        let fighter1 = figheters[i]
        let fighter2 = figheters[i + 1]
        console.log('sono nel ciclo for');


        console.log('fighter1: ', figheters[i], 'fighter2: ', figheters[i + 1]);
        console.log('this', figheters[i].trainingPower);


        if (figheters[i].trainingPower > figheters[i + 1].trainingPower) {
            console.log('1 vince');

            nextTurn.push(figheters[i])
        } else {
            console.log('2 vince');
            nextTurn.push(figheters[i + 1])
        }

        console.log('prossimo turno: ', nextTurn);
    }
    return nextTurn
}

// for (let i = 0; i < fightersQualificated.length; i += 2) {
//     let fighter1 = fightersQualificated[i]
//     let fighter2 = fightersQualificated[i + 1]
//     console.log('sono nel ciclo for');


//     console.log('fighter1: ', fighter1, 'fighter2: ', fighter2);

//     if (fighter1.trainingPower > fighter2.trainingPower) {
//         nextTurn.push(fighter1)
//     } else {
//         nextTurn.push(fighter2)
//     }
//     console.log('qualificati al primo turno: ', nextTurn);

// }
console.log(round(fightersQualificated));

// console.log('primo round: ', firstRound);
// console.log('secondo round: '.secondRound);



// console.log(
//     round(fightersQualificated)

// );




