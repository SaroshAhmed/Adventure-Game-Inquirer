#!/usr/bin/env node
import inquirer from "inquirer";
//CLI BASED ADVENTURE GAME
let startGame = async () => {
    let loop = true;
    let maester = 'HAKALUKAMUKA';
    let town = 'BRAGMOK';
    while (loop) {
        const startMenu = await inquirer.prompt([{
                type: 'list',
                name: 'startChoice',
                message: 'SELECT',
                choices: ['Start Game', 'Exit']
            }]);
        switch (startMenu.startChoice) {
            case 'Exit':
                loop = false;
                break;
            case 'Start Game':
                const playerName = await inquirer.prompt([{
                        type: 'input',
                        name: 'plName',
                        message: 'Enter your name',
                        default: 'PLAYER'
                    }]);
                console.log('***WELCOME ', playerName.plName, ' TO THE LOST SCROLL*** \n THIS IS A CHOOSE YOUR ADVENTURE GAME WHERE YOUR ' +
                    'ULTIMATE GOAL IS TO FIND THE LOST SCROLL \n YOU HAVE TO FIND THE RIGHT PATH THAT' +
                    ' WILL LEAD YOU TO VICTORY');
                const preGame = await inquirer.prompt([{
                        type: 'list',
                        name: 'preGameOption',
                        message: 'ARE YOU READY?',
                        choices: ['YES', 'NO']
                    }]);
                switch (preGame.preGameOption) {
                    case 'NO':
                        console.log("COME BACK WHENEVER :)");
                        loop = false;
                        break;
                    case 'YES':
                        console.log('***Lets begin your journey in the old town of ', town, ' ***\n' +
                            '***It is the medieval ages and there are mythical and magical creatures so be careful ***\n' +
                            'You are a peasant working under the city council GRAND MAESTER', maester, '\n' +
                            'You enter the chambers of grand maester and finds him on the ground with a dagger in this chest \n' +
                            'Seems like someone tried killed the grand maester but was not successful \n' +
                            'You try to rush him to the nurses quarters but the grand maester whispers in your ear \n' +
                            'Grand Maester: LISTEN CLOSELY ' + playerName.plName + ' SOMEONE STOLE THE SCROLL *coughs in blood*\n' +
                            'I DONT HAVE MUCH TIME LEFT YOU MUST RETURN THE SCROLL AS IT CONTAINS THE MOST POWERFUL TOOL IN ALL THE FLAT EARTH \n' +
                            maester, ' dies');
                        const quest1 = await inquirer.prompt([{
                                type: 'list',
                                name: 'q1',
                                message: 'Choose a path to start your journey',
                                choices: ['Go to the King', 'Chase after the murderer']
                            }]);
                        switch (quest1.q1) {
                            case 'Go to the King':
                                console.log('You went to the king and told him about the scroll \n the king replied:' +
                                    'YOU DARE TELL ME THE NEWS THAT THE MOST POWERFUL SCROLL IS LOST? YOU ' + playerName.plName + ' A PEASANT DID NOTHING? \n', 'GUARDS!!! I WANT HIS HEAD\n', 'The king turned out to be mentally insane and you DIED \n', 'XXxGAME OVERxXX \n PLAY AGAIN');
                                break;
                            case 'Chase after the murderer':
                                console.log('You followed the muddy footsteps which lead you to the forbidden jungle');
                                const quest2 = await inquirer.prompt([{
                                        type: 'list',
                                        name: 'q2',
                                        message: 'There are two paths leading inside the jungle, Choose wisely',
                                        choices: ['left', 'Right']
                                    }]);
                                switch (quest2.q2) {
                                    case 'Right':
                                        console.log('You chose the right path but soon starts realising it is not the right path at all *ba dum thsss* \n', 'You are walking down the path when all of sudden *THUDDDDD!!!!, you hear a giant foot step coming your direction');
                                        const rightq3 = await inquirer.prompt([{
                                                type: 'list',
                                                name: 'rq3',
                                                message: 'Its a massive three headed fluffy koala bear charging at you at 1km/hr, What will you do?',
                                                choices: ['Fight the koala', 'Run away']
                                            }]);
                                        switch (rightq3.rq3) {
                                            case 'Fight the koala':
                                                console.log('You rush at the koala with all your might but got crushed underneath its fluffy belly \n' +
                                                    'YOU DIED XXxGAME OVERXXx  \n PLAY AGAIN');
                                                break;
                                            case 'Run away':
                                                console.log('You run away from it but all of a sudden the koala unleashed its massive tongue and catches you \n', 'YOU DIED XXxGAME OVERxXX  \n PLAY AGAIN');
                                                break;
                                        }
                                        break;
                                    case 'left':
                                        console.log('The left path looks safer as it has visible sunlight and less dense trees \n');
                                        const leftq3 = await inquirer.prompt([{
                                                type: 'list',
                                                name: 'lq3',
                                                message: 'You walked to the end of the path and found an old abondoned cabin',
                                                choices: ['Enter the lodge', 'Move passed it']
                                            }]);
                                        switch (leftq3.lq3) {
                                            case 'Enter the lodge':
                                                console.log('You Enter the lodge and found an old Witch with the stolen scroll');
                                                const leftq4 = await inquirer.prompt([{
                                                        type: 'list',
                                                        name: 'lq4',
                                                        message: 'The witch offers you two options, OPTION1: GET THE SCROLL AND SAVE HUMANITY BUT IN RETURN YOU DIE \n OPTION2: LEAVE THE SCROLL TO THE EVIL WITCH AND LIVE AS THE WITCH SLAVE ',
                                                        choices: ['Option1', 'Option2']
                                                    }]);
                                                switch (leftq4.lq4) {
                                                    case 'Option1':
                                                        console.log('You sacrificed your life in order to save humanity and in return you died a hero no one remembers \n', 'CONGRATULATIONS!!!!! YOU GOT ENDING 1: THE NOBLE HERO ENDING \n XXxGAME OVERxxX');
                                                        loop = false;
                                                        break;
                                                    case 'Option2':
                                                        console.log('You chose to be selfish and ended up becoming a slave to the witch who now possesse the ultimate power to rule all of ', town, ' CONGRATULATIONS!!!!!!!!! YOU GOT THE ENDING 2: THE SELFISH ENDING \n XXxGAME OVERxXX');
                                                        loop = false;
                                                        break;
                                                }
                                                break;
                                            case 'Move passed it':
                                                console.log("You move pass the cabin but then suddenly the cabin breaks apart and a giant witch appears \n", 'The Witch is coming at you holding the scroll');
                                                const leftq5 = await inquirer.prompt([{
                                                        type: 'list',
                                                        name: 'lq5',
                                                        message: ['The giant witch challenges you to a Final battle, whoever draws their first attack wins'],
                                                        choices: ['Attack', 'Back down']
                                                    }]);
                                                switch (leftq5.lq5) {
                                                    case 'Back down':
                                                        console.log('You back down from attacking and the witch attacks and kills you \n' +
                                                            'YOU DIED \n XXxGAME OVERxXX  \n PLAY AGAIN');
                                                        break;
                                                    case 'Attack':
                                                        let chance = Math.floor(Math.random() * 2);
                                                        if (chance === 1) {
                                                            console.log('You draw your sword to attack but the witch was faster than you and kills you \n', 'YOU DIED \n XXxGAME OVERxXX \n PLAY AGAIN (this was a random chance maybe you wont loose next time)');
                                                        }
                                                        else {
                                                            console.log('You drew your sword and pierced the heart of the giant witch killing the witch and obtaining the scroll');
                                                            console.log("You now hold the scroll you are eager to read the scroll and unlock the mysteries of the universe");
                                                            const quest6 = await inquirer.prompt([{
                                                                    type: 'list',
                                                                    name: 'q6',
                                                                    message: 'What will you do?',
                                                                    choices: ['Keep the Scroll', 'Return the Scroll']
                                                                }]);
                                                            switch (quest6.q6) {
                                                                case 'Keep the Scroll':
                                                                    console.log('You open the scroll and read it, you cannot believe what lies in it \n' +
                                                                        'It is a recipe to make BAKAR KHANI \n With the knowledge in your hand you return to ', town, ' and set up a bakery selling BAKAR KHANI\n', 'CONGRATULATIONS!!!! YOU GOT THE ENDING 3: ENTRAPREUENUEUEUEUER, \n XXxGAME OVERxXX');
                                                                    loop = false;
                                                                    break;
                                                                case 'Return the Scroll':
                                                                    console.log('You nobely return the scrol to the king and the king in return Knights you, \n', 'the king replies: BECAUSE OF YOUR COURAGE, YOU ARE NOW SIR ', playerName.plName, ' AND WE THANK YOU \n', 'CONGRATULATIONS!!!! YOU GOT THE ENDING 4: KNIGHTED, \n XXxGAME OVERxXX');
                                                                    loop = false;
                                                                    break;
                                                            }
                                                        }
                                                        break;
                                                }
                                                break;
                                        }
                                        break;
                                } //Q2
                                break;
                        } //Q1
                        break;
                } //yes switch
                break;
        } //switch start menu
    } //while loop
}; //function
startGame();
