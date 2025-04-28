
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

console.log('combattenti armati: ', fightersArmed);
//  training


let trainingFighters = fightersArmed.map(fighter => {
    const multiplier = Math.floor(Math.random() * 100) + 1
    let treaning = (fighter.power + fighter.weapon.power) * multiplier
    // console.log('fighter: ', fighter.name, 'total power: ', treaning);
    // console.log('fighter power: ', fighter.power, 'weapon power: ', fighter.weapon.power, 'multiplier: ', multiplier);

    return { ...fighter, trainingPower: treaning }
})
console.log('training: ', trainingFighters);

//qualifications

let fightersQualificated = [...trainingFighters]
fightersQualificated = fightersQualificated.filter(fighters => fighters.trainingPower >= 8000)

console.log('qualificated: ', fightersQualificated);

//start fighting

let nextTurnOther = []


if (fightersQualificated.length % 2 != 0) {
    let passTheNextTurn = fightersQualificated[fightersQualificated.length - 1]
    nextTurnOther.push(passTheNextTurn)
    fightersQualificated = fightersQualificated.filter(item => item != passTheNextTurn)
    console.log(nextTurnOther[0] || 'is Empty');

}
console.log('without odd: ', fightersQualificated);

function round(allFigheters, brench) {
    let nextTurn = []
    let loser = []
let panchina = [...brench]
console.log(panchina);
console.log('non è la semifinale: ',allFigheters.length > 4);
console.log('la length dei combattenti è: ',allFigheters.length);
    if (allFigheters.length > 4) {
        for (let i = 0; i < allFigheters.length; i += 2) {
            let fighter1 = allFigheters[i]
            let fighter2 = allFigheters[i + 1]
            console.log('sono nel ciclo for i fighter sono: ', allFigheters);


            console.log('fighter1: ', fighter1.name, 'fighter2: ', fighter2.name);
            // console.log('this', fighter1.trainingPower);


            if (fighter1.trainingPower > fighter2.trainingPower) {
                console.log('1 vince: ', fighter1.name);
                loser.push(fighter2)
                nextTurn.push(fighter1)
            } else {
                console.log('2 vince: ', fighter2.name);
                loser.push(fighter1)
                nextTurn.push(fighter2)
            }
        }
        // console.log('lunghezza: ',nextTurn.length );
        // console.log('panchina piena?: ',panchina.length == 1 );
        // console.log('eliminati: ',loser );
        // console.log('ripescato: ', loser[Math.floor(Math.random() * loser.length )]);
        if(nextTurn.length %2 != 0 && panchina.length == 1){
            nextTurn.push(panchina[0])
            panchina.pop()
        }else if (nextTurn.length %2 != 0) {
            nextTurn.push(loser[Math.floor(Math.random() * loser.length )])
        }
        return round(nextTurn, panchina);
    } else {
        let thirdFourth = []
        let firstSecond = []
        for (let i = 0; i < allFigheters.length; i += 2) {
            let fighter1 = allFigheters[i]
            let fighter2 = allFigheters[i + 1]
            console.log('sono nel ciclo fori fighter sono: ', allFigheters);


            console.log('fighter1: ', fighter1, 'fighter2: ', fighter2);
            console.log('this', fighter1.trainingPower);


            if (fighter1.trainingPower > fighter2.trainingPower) {
                console.log('1 vince: ', fighter1);
                thirdFourth.push(fighter2)
                firstSecond.push(fighter1)
            } else {
                console.log('2 vince: ', fighter2);
                thirdFourth.push(fighter1)
                firstSecond.push(fighter2)
            }
        }
        let first = ''
        let second = ''
        let third = ''
        if (firstSecond[0] >= firstSecond[1]) {
            first = firstSecond[0]
            second = firstSecond[1]
        } else {
            first = firstSecond[1]
            second = firstSecond[0]
        }
        if (thirdFourth[0] >= thirdFourth[1]) {
            third = thirdFourth[0]
        }else{

            third = thirdFourth[1]
        }
        return [`primo classificato:${first.name}, secondo classificato: ${second.name}, terzo classificato: ${third.name}`]
    }

   
}

const firstRound = round(fightersQualificated, nextTurnOther)

console.log('qualificati: ', fightersQualificated);

console.log('vincitori: ',firstRound);




