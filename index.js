'use strict';

// Menu
const menu = document.getElementById("menu");
const ctx1 = menu.getContext("2d");
menu.width = window.innerWidth;
menu.height = window.innerHeight;


const game = document.getElementById("board");
const ctx = game.getContext("2d");
game.width = window.innerWidth;
game.height = window.innerHeight;


let play = false;

let turn = 0;

let board = {
    x: [0,0,0],
    y: [0,0,0],
    z: [0,0,0],
}


function drawMenu() {
    ctx1.clearRect(0, 0, menu.width, menu.height); // Clear entire menu canvas
    if (!play) {
        ctx1.beginPath();
        ctx1.rect(300, 300, 500, 250);
        ctx1.fillStyle = 'white';  // Fill with white
        ctx1.fill();
        ctx1.strokeStyle = "black"; // Change stroke to black
        ctx1.stroke();

        ctx1.fillStyle = 'black';
        ctx1.font = "bold 4rem Arial";
        ctx1.textAlign = 'center';
        ctx1.textBaseline = 'middle';
        ctx1.fillText('Start Game', 550, 425);
        ctx1.font = "2rem Arial";
        ctx1.fillText('Click to Start', 550, 480);
    }
}


menu.addEventListener('click', getStartGame,false);

drawMenu();

function getClickPos (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log('x: ', x, ' y: ', y);
    console.log(board)
    console.log("Board Size: ", game.width, game.height);

    if(turn === 0){
        turn = 1;

        // First row
        if( x > 400 && x < 475 && y > 400 && y < 475) { 
            if(board.x[0] === 0 ){
                board.x[0] = 1;
                // Draw the ellipse
                ctx.beginPath();
                ctx.ellipse(435, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
                ctx.stroke();
            }else if (board.x[0] !== 0){
                alert('Already clicked')
            }
        }
        if( x > 475 && x < 550 && y > 400 && y < 475) { 
            if(board.x[1] === 0 ){
                board.x[1] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(510, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.x[1] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 550 && x < 620 && y > 400 && y < 475) { 
            if(board.x[2] === 0 ){
                board.x[2] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(585, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.x[2] !== 0){
            alert('Already clicked')
        }
        }
    
        // Second Row
        if( x > 400 && x < 475 && y > 475 && y < 550) { 
            if(board.y[0] === 0 ){
                board.y[0] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(435, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.y[0] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 475 && x < 550 && y > 475 && y < 550) { 
            if(board.y[1] === 0 ){
                board.y[1] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(510, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.y[1] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 550 && x < 620 && y > 475 && y < 550) { 
            if(board.y[2] === 0 ){
                board.y[2] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(585, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.y[2] !== 0){
            alert('Already clicked')
        }
        }
    
        // Third Row
        if( x > 400 && x < 475 && y > 550 && y < 625) { 
            if(board.z[0] === 0 ){
                board.z[0] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(435, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.z[0] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 475 && x < 550 && y > 550 && y < 625) { 
            if(board.z[1] === 0 ){
                board.z[1] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(510, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.z[1] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 550 && x < 620 && y > 550 && y < 625) { 
            if(board.z[2] === 0 ){
                board.z[2] = 1;
            // Draw the ellipse
            ctx.beginPath();
            ctx.ellipse(585, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
            ctx.stroke();
        }else if (board.z[2] !== 0){
            alert('Already clicked')
        }
        }

    }
    else if (turn === 1){
        turn = 0

        if( x > 400 && x < 475 && y > 400 && y < 475) {
            if(board.x[0] === 0 ){
                board.x[0] = 2; 
                // Draw the ellipse
                ctx.beginPath();
                ctx.moveTo(410,410)
                ctx.lineTo(470,470)
                ctx.moveTo(470,410)
                ctx.lineTo(410,470)
                ctx.stroke();
            }else if (board.x[0] !== 0){
                alert('Already clicked')
            }
        }
        if( x > 475 && x < 550 && y > 400 && y < 475) { 
            if(board.x[1] === 0 ){
                board.x[1] = 2; 
                // Draw the ellipse
                ctx.beginPath();
                ctx.moveTo(480,410)
                ctx.lineTo(540,470)
                ctx.moveTo(480,470)
                ctx.lineTo(540,410)
                ctx.stroke();
            }else if (board.x[0] !== 0){
                alert('Already clicked')
            } 
        }
        if( x > 550 && x < 620 && y > 400 && y < 475) { 
            if(board.x[2] === 0 ){
                board.x[2] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(560,410)
            ctx.lineTo(620,470)
            ctx.moveTo(560,470)
            ctx.lineTo(620,410)
            ctx.stroke();
        }else if (board.x[0] !== 0){
            alert('Already clicked')
        }
        }
    
        // Second Row
        if( x > 400 && x < 475 && y > 475 && y < 550) { 
            if(board.y[0] === 0 ){
                board.y[0] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(410,485)
            ctx.lineTo(470,545)
            ctx.moveTo(410,545)
            ctx.lineTo(470,485)
            ctx.stroke();
        }else if (board.y[0] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 475 && x < 550 && y > 475 && y < 550) { 
            if(board.y[1] === 0 ){
                board.y[1] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(480,485)
            ctx.lineTo(540,545)
            ctx.moveTo(480,545)
            ctx.lineTo(540,485)
            ctx.stroke();
        }else if (board.y[1] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 550 && x < 620 && y > 475 && y < 550) { 
            if(board.y[2] === 0 ){
                board.y[2] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(560,485)
            ctx.lineTo(620,545)
            ctx.moveTo(560,545)
            ctx.lineTo(620,485)
            ctx.stroke();
        }else if (board.y[2] !== 0){
            alert('Already clicked')
        }
        }
    
        // Third Row
        if( x > 400 && x < 475 && y > 550 && y < 625) { 
            if(board.z[0] === 0 ){
                board.z[0] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(410,560)
            ctx.lineTo(470,620)
            ctx.moveTo(410,620)
            ctx.lineTo(470,560)
            ctx.stroke();
        }else if (board.z[0] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 475 && x < 550 && y > 550 && y < 625) { 
            if(board.z[1] === 0 ){
                board.z[1] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(480,560)
            ctx.lineTo(540,620)
            ctx.moveTo(480,620)
            ctx.lineTo(540,560)
            ctx.stroke();
        }else if (board.z[1] !== 0){
            alert('Already clicked')
        }
        }
        if( x > 550 && x < 620 && y > 550 && y < 625) { 
            if(board.z[2] === 0 ){
                board.z[2] = 2;
            // Draw the ellipse
            ctx.beginPath();
            ctx.moveTo(560,560)
            ctx.lineTo(620,620)
            ctx.moveTo(560,620)
            ctx.lineTo(620,560)
            ctx.stroke();
        }else if (board.z[2] !== 0){
            alert('Already clicked')
        }
        }
    }
    checkwins()
        
}


function getStartGame() {
    menu.style.display = 'none'; // Hide menu
    game.style.display = 'block'; // Ensure board is visible
    console.log("Game Started");

    // Ensure the canvas is not transparent or too small
    game.width = window.innerWidth;
    game.height = window.innerHeight;
    ctx.clearRect(0, 0, game.width, game.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, game.width, game.height); // Ensure it's not blank due to transparency

    // Draw Tic-Tac-Toe grid
    ctx.beginPath();
    ctx.moveTo(400, 475);
    ctx.lineTo(625, 475);
    ctx.moveTo(400, 550);
    ctx.lineTo(625, 550);
    ctx.moveTo(475, 400);
    ctx.lineTo(475, 625);
    ctx.moveTo(550, 400);
    ctx.lineTo(550, 625);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();

    console.log("Board drawn!");

    game.removeEventListener('click', getClickPos);
    game.addEventListener('click', getClickPos, false);
    console.log("Click event added.");
}

function checkwins() {
    if (
        [...board.x].every(x => x === 1) ||
        [...board.y].every(y => y === 1) ||
        [...board.z].every(z => z === 1) ||
        [board.x[0], board.y[1], board.z[2]].every(j => j === 1) ||
        [board.x[0], board.y[0], board.z[0]].every(j => j === 1) ||
        [board.x[1], board.y[1], board.z[1]].every(j => j === 1) ||
        [board.x[2], board.y[2], board.z[2]].every(j => j === 1) ||
        [board.x[2], board.y[1], board.z[0]].every(k => k === 1)
    ) {
        alert('Player 1: Win!!');
        resetGame();
    } else if (
        [...board.x].every(x => x === 2) ||
        [...board.y].every(y => y === 2) ||
        [...board.z].every(z => z === 2) ||
        [board.x[0], board.y[1], board.z[2]].every(j => j === 2) ||
        [board.x[2], board.y[1], board.z[0]].every(k => k === 2)
    ) {
        alert('Player 2: Win!!');
        resetGame();
    }
}

function resetGame() {
    board = {
        x: [0, 0, 0],
        y: [0, 0, 0],
        z: [0, 0, 0],
    };
    play = false;
    turn = 0; // Reset turn

    // Ensure canvases are cleared
    ctx.clearRect(0, 0, game.width, game.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, game.width, game.height); // Ensure the board is filled white

    // Remove event listener to stop clicks
    game.removeEventListener('click', getClickPos);
    menu.style.display = 'block'; // Hide menu
    game.style.display = 'none'; // Ensure board is visible
    drawMenu()
}

// 1.0V

// 'use strict';

// // Shape
// const menu = document.getElementById("menu");
// const ctx1 = menu.getContext("2d");
// menu.width = window.innerWidth;
// menu.height = window.innerHeight;
// // menu.requestFullscreen();

// const game = document.getElementById("board");
// const ctx = game.getContext("2d");
// game.width = window.innerWidth;
// game.height = window.innerHeight;
// // game.requestFullscreen();

// let menustart = false;

// let players = [
//     {
//         Player: 1,
//         Shape: 'Circle',
//     },
//     {
//         Player: 2,
//         Shape: 'Cross',
//     }
// ]

// let turn = 0;

// let board = {
//         x:  [0,0,0],
//         x1: [0,0,0],
//         x2: [0,0,0],
// }


// // click event coordinates
// menu.addEventListener('click', getClickPosmenu, false);
// game.addEventListener('click', getClickPosgame, false);


// function getClickPosmenu (e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('x: ', x, ' y: ', y);
// }

// function getClickPosgame (e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('x: ', x, ' y: ', y);
// }

// function getStartGame () {
//     menustart = true;
//     menu.style.display = 'none';
//     game.style.display = 'flex';
//     drawBoard();
// }

// function drawMenu() {
//     ctx.clearRect(300, 300, 500, 500);
//     if(menustart === false){
//         ctx.clearRect(300, 300, 500, 500);
//         ctx1.beginPath();
//         ctx1.moveTo(100, 100);
//         ctx1.rect(300,300,500,250)
//         ctx1.strokeStyle = "white";
//         ctx1.fill();
//         ctx1.stroke();
//         // ctx1.moveTo(400,400);
//         ctx1.fillStyle = 'black';
//         ctx1.font = "bold 4rem Arial";
//         ctx1.textAlign = 'center';
//         ctx1.textBaseline = 'middle';
//         ctx1.strokeText('Start Game', 550, 425);
//         ctx1.font = "2rem Arial";
//         ctx1.textAlign = 'center';
//         ctx1.textBaseline = 'middle';
//         ctx1.strokeText('Click to Start', 550, 480);
//         menu.addEventListener('click', getStartGame,false);
//     }
// }

// drawMenu();

// function drawBoard() {
//     board.x[0] = 0
//     board.x[1] = 0
//     board.x[2] = 0
//     board.x1[0] = 0
//     board.x1[1] = 0
//     board.x1[2] = 0
//     board.x2[0] = 0
//     board.x2[1] = 0
//     board.x2[2] = 0
//     console.log(board)
//     ctx.clearRect(300, 300, 500, 500);
//     ctx.beginPath();
//     ctx.moveTo(400, 475);
//     ctx.lineTo(625, 475);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     //         x   y
//     ctx.moveTo(400, 550);
//     ctx.lineTo(625, 550);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     ctx.moveTo(475, 400);
//     ctx.lineTo(475, 625);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     ctx.moveTo(550, 400);
//     ctx.lineTo(550, 625);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     // click event coordinates
//     game.addEventListener('click', getClickPos, false);

// //     let board = {
// //         x:  [0,0,0],
// //         x1: [0,0,0],
// //         x2: [0,0,0],
// // }



// function getClickPos (e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('x: ', x, ' y: ', y);
//     console.log(board)
    
//     // do{
        
//         // Win Player 1
//         let win0 = board.x[0] === 1 && board.x[1] === 1 && board.x[2] === 1 ? true : false;
//         let win1 = board.x1[0] === 1 && board.x1[1] === 1 && board.x1[2] === 1 ? true : false;
//         let win2 = board.x2[0] === 1 && board.x2[1] === 1 && board.x2[2] === 1 ? true : false;
        
//         let win3 = board.x[0] === 1 && board.x1[1] === 1 && board.x2[2] === 1 ? true : false;
//         let win4 = board.x2[0] === 1 && board.x1[1] === 1 && board.x[2] === 1 ? true : false;
        
//         let win5 = board.x[0] === 1 && board.x1[0] === 1 && board.x2[0] === 1 ? true : false;
//         let win6 = board.x[1] === 1 && board.x1[1] === 1 && board.x2[1] === 1 ? true : false;
//         let win7 = board.x[2] === 1 && board.x1[2] === 1 && board.x2[2] === 1 ? true : false;
        
//         // Win Player 2
        
//         let win8 = board.x[0] === 2 && board.x[1] === 2 && board.x[2] === 2 ? true : false;
//         let win9 = board.x1[0] === 2 && board.x1[1] === 2 && board.x1[2] === 2 ? true : false;
//         let win10 = board.x2[0] === 2 && board.x2[1] === 2 && board.x2[2] === 2 ? true : false;
        
//         let win11 = board.x[0] === 2 && board.x1[1] === 2 && board.x2[2] === 2 ? true : false;
//         let win12 = board.x2[0] === 2 && board.x1[1] === 2 && board.x[2] === 2 ? true : false;
        
//         let win13 = board.x[0] === 2 && board.x1[0] === 2 && board.x2[0] === 2 ? true : false;
//         let win14 = board.x[1] === 2 && board.x1[1] === 2 && board.x2[1] === 2 ? true : false;
//         let win15 = board.x[2] === 2 && board.x1[2] === 2 && board.x2[2] === 2 ? true : false;

//         if(win0 === true || win1 === true || win2 === true || win3 === true || win4 === true || win5 === true || win6 === true || win7 === true) {
//             win0 = false;
//             win1 = false;
//             win2 = false;
//             win3 = false;
//             win4 = false;
//             win5 = false;
//             win6 = false;
//             win7 = false;
//             console.log(board)
//             menu.style.display = 'flex';
//             game.style.display = 'none';
//             menustart = false
//             alert('Player 1 Win!! \n Player 2 Lose');
//             drawMenu()
//         }else if (win8 === true || win9 === true || win10 === true || win11 === true || win12 === true || win13 === true || win14 === true || win15 === true){
//             win8 = false;
//             win9 = false;
//             win10 = false;
//             win11 = false;
//             win12 = false;
//             win13 = false;
//             win14 = false;
//             win15 = false;
//             console.log(board)
//             menu.style.display = 'flex';
//             game.style.display = 'none';
//             menustart = false
//             alert('Player 2 Win!! \n Player 1 Lose');
//             drawMenu()
//         }else if ([...board.x, ...board.x1, ...board.x2].every(cell => cell !== 0) && 
//         [win0, win1, win2, win3, win4, win5, win6, win7, win8, win9, win10, win11, win12, win13, win14, win15].every(win => win === false))  {
//             win0 = false;
//             win1 = false;
//             win2 = false;
//             win3 = false;
//             win4 = false;
//             win5 = false;
//             win6 = false;
//             win7 = false;
//             win8 = false;
//             win9 = false;
//             win10 = false;
//             win11 = false;
//             win12 = false;
//             win13 = false;
//             win14 = false;
//             win15 = false;
//             console.log(board)
//             menu.style.display = 'flex';
//             game.style.display = 'none';
//             menustart = false
//             alert('Draw!!');
//             drawMenu()
//         }



        
//     if(turn === 0){
//         turn = 1;

//         // First row
//         if( x > 400 && x < 475 && y > 400 && y < 475) { 
//             if(board.x[0] === 0 ){
//                 board.x[0] = 1;
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.ellipse(435, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             }
//         }
//         if( x > 475 && x < 550 && y > 400 && y < 475) { 
//             if(board.x[1] === 0 ){
//                 board.x[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 400 && y < 475) { 
//             if(board.x[2] === 0 ){
//                 board.x[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Second Row
//         if( x > 400 && x < 475 && y > 475 && y < 550) { 
//             if(board.x1[0] === 0 ){
//                 board.x1[0] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(435, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 475 && y < 550) { 
//             if(board.x1[1] === 0 ){
//                 board.x1[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 475 && y < 550) { 
//             if(board.x1[2] === 0 ){
//                 board.x1[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Third Row
//         if( x > 400 && x < 475 && y > 550 && y < 625) { 
//             if(board.x2[0] === 0 ){
//                 board.x2[0] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(435, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 550 && y < 625) { 
//             if(board.x2[1] === 0 ){
//                 board.x2[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 550 && y < 625) { 
//             if(board.x2[2] === 0 ){
//                 board.x2[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[2] !== 0){
//             alert('Already clicked')
//         }
//         }

//     }
//     else if (turn === 1){
//         turn = 0

//         if( x > 400 && x < 475 && y > 400 && y < 475) {
//             if(board.x[0] === 0 ){
//                 board.x[0] = 2; 
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.moveTo(410,410)
//                 ctx.lineTo(470,470)
//                 ctx.moveTo(470,410)
//                 ctx.lineTo(410,470)
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             }
//         }
//         if( x > 475 && x < 550 && y > 400 && y < 475) { 
//             if(board.x[1] === 0 ){
//                 board.x[1] = 2; 
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.moveTo(480,410)
//                 ctx.lineTo(540,470)
//                 ctx.moveTo(480,470)
//                 ctx.lineTo(540,410)
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             } 
//         }
//         if( x > 550 && x < 620 && y > 400 && y < 475) { 
//             if(board.x[2] === 0 ){
//                 board.x[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,410)
//             ctx.lineTo(620,470)
//             ctx.moveTo(560,470)
//             ctx.lineTo(620,410)
//             ctx.stroke();
//         }else if (board.x[0] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Second Row
//         if( x > 400 && x < 475 && y > 475 && y < 550) { 
//             if(board.x1[0] === 0 ){
//                 board.x1[0] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(410,485)
//             ctx.lineTo(470,545)
//             ctx.moveTo(410,545)
//             ctx.lineTo(470,485)
//             ctx.stroke();
//         }else if (board.x1[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 475 && y < 550) { 
//             if(board.x1[1] === 0 ){
//                 board.x1[1] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(480,485)
//             ctx.lineTo(540,545)
//             ctx.moveTo(480,545)
//             ctx.lineTo(540,485)
//             ctx.stroke();
//         }else if (board.x1[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 475 && y < 550) { 
//             if(board.x1[2] === 0 ){
//                 board.x1[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,485)
//             ctx.lineTo(620,545)
//             ctx.moveTo(560,545)
//             ctx.lineTo(620,485)
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Third Row
//         if( x > 400 && x < 475 && y > 550 && y < 625) { 
//             if(board.x2[0] === 0 ){
//                 board.x2[0] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(410,560)
//             ctx.lineTo(470,620)
//             ctx.moveTo(410,620)
//             ctx.lineTo(470,560)
//             ctx.stroke();
//         }else if (board.x2[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 550 && y < 625) { 
//             if(board.x2[1] === 0 ){
//                 board.x2[1] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(480,560)
//             ctx.lineTo(540,620)
//             ctx.moveTo(480,620)
//             ctx.lineTo(540,560)
//             ctx.stroke();
//         }else if (board.x2[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 550 && y < 625) { 
//             if(board.x2[2] === 0 ){
//                 board.x2[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,560)
//             ctx.lineTo(620,620)
//             ctx.moveTo(560,620)
//             ctx.lineTo(620,560)
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
//     }


        
//     // }while(menustart === true);

// }
// }

/////////////////////////////////////////


// 2.0V

// 'use strict';

// // Menu to Game

// let play = false;

// let turn = 0;

// let board = {
//     x: [0,0,0],
//     y: [0,0,0],
//     z: [0,0,0],
// }

// function getClickPos () {
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log('x: ', x, ' y: ', y);
//     console.log(board)

//     if(turn === 0){
//         turn = 1;

//         // First row
//         if( x > 400 && x < 475 && y > 400 && y < 475) { 
//             if(board.x[0] === 0 ){
//                 board.x[0] = 1;
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.ellipse(435, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             }
//         }
//         if( x > 475 && x < 550 && y > 400 && y < 475) { 
//             if(board.x[1] === 0 ){
//                 board.x[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 400 && y < 475) { 
//             if(board.x[2] === 0 ){
//                 board.x[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 435, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Second Row
//         if( x > 400 && x < 475 && y > 475 && y < 550) { 
//             if(board.x1[0] === 0 ){
//                 board.x1[0] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(435, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 475 && y < 550) { 
//             if(board.x1[1] === 0 ){
//                 board.x1[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 475 && y < 550) { 
//             if(board.x1[2] === 0 ){
//                 board.x1[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 510, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Third Row
//         if( x > 400 && x < 475 && y > 550 && y < 625) { 
//             if(board.x2[0] === 0 ){
//                 board.x2[0] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(435, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 550 && y < 625) { 
//             if(board.x2[1] === 0 ){
//                 board.x2[1] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(510, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 550 && y < 625) { 
//             if(board.x2[2] === 0 ){
//                 board.x2[2] = 1;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.ellipse(585, 585, 25, 25, Math.PI / 1, 0, 2 * Math.PI);
//             ctx.stroke();
//         }else if (board.x2[2] !== 0){
//             alert('Already clicked')
//         }
//         }

//     }
//     else if (turn === 1){
//         turn = 0

//         if( x > 400 && x < 475 && y > 400 && y < 475) {
//             if(board.x[0] === 0 ){
//                 board.x[0] = 2; 
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.moveTo(410,410)
//                 ctx.lineTo(470,470)
//                 ctx.moveTo(470,410)
//                 ctx.lineTo(410,470)
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             }
//         }
//         if( x > 475 && x < 550 && y > 400 && y < 475) { 
//             if(board.x[1] === 0 ){
//                 board.x[1] = 2; 
//                 // Draw the ellipse
//                 ctx.beginPath();
//                 ctx.moveTo(480,410)
//                 ctx.lineTo(540,470)
//                 ctx.moveTo(480,470)
//                 ctx.lineTo(540,410)
//                 ctx.stroke();
//             }else if (board.x[0] !== 0){
//                 alert('Already clicked')
//             } 
//         }
//         if( x > 550 && x < 620 && y > 400 && y < 475) { 
//             if(board.x[2] === 0 ){
//                 board.x[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,410)
//             ctx.lineTo(620,470)
//             ctx.moveTo(560,470)
//             ctx.lineTo(620,410)
//             ctx.stroke();
//         }else if (board.x[0] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Second Row
//         if( x > 400 && x < 475 && y > 475 && y < 550) { 
//             if(board.x1[0] === 0 ){
//                 board.x1[0] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(410,485)
//             ctx.lineTo(470,545)
//             ctx.moveTo(410,545)
//             ctx.lineTo(470,485)
//             ctx.stroke();
//         }else if (board.x1[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 475 && y < 550) { 
//             if(board.x1[1] === 0 ){
//                 board.x1[1] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(480,485)
//             ctx.lineTo(540,545)
//             ctx.moveTo(480,545)
//             ctx.lineTo(540,485)
//             ctx.stroke();
//         }else if (board.x1[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 475 && y < 550) { 
//             if(board.x1[2] === 0 ){
//                 board.x1[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,485)
//             ctx.lineTo(620,545)
//             ctx.moveTo(560,545)
//             ctx.lineTo(620,485)
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
    
//         // Third Row
//         if( x > 400 && x < 475 && y > 550 && y < 625) { 
//             if(board.x2[0] === 0 ){
//                 board.x2[0] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(410,560)
//             ctx.lineTo(470,620)
//             ctx.moveTo(410,620)
//             ctx.lineTo(470,560)
//             ctx.stroke();
//         }else if (board.x2[0] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 475 && x < 550 && y > 550 && y < 625) { 
//             if(board.x2[1] === 0 ){
//                 board.x2[1] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(480,560)
//             ctx.lineTo(540,620)
//             ctx.moveTo(480,620)
//             ctx.lineTo(540,560)
//             ctx.stroke();
//         }else if (board.x2[1] !== 0){
//             alert('Already clicked')
//         }
//         }
//         if( x > 550 && x < 620 && y > 550 && y < 625) { 
//             if(board.x2[2] === 0 ){
//                 board.x2[2] = 2;
//             // Draw the ellipse
//             ctx.beginPath();
//             ctx.moveTo(560,560)
//             ctx.lineTo(620,620)
//             ctx.moveTo(560,620)
//             ctx.lineTo(620,560)
//             ctx.stroke();
//         }else if (board.x1[2] !== 0){
//             alert('Already clicked')
//         }
//         }
//     }

        
// }

// function getStartGame () {
//     ctx.clearRect(300, 300, 500, 500);
//     ctx.beginPath();
//     ctx.moveTo(400, 475);
//     ctx.lineTo(625, 475);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     //         x   y
//     ctx.moveTo(400, 550);
//     ctx.lineTo(625, 550);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     ctx.moveTo(475, 400);
//     ctx.lineTo(475, 625);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     ctx.moveTo(550, 400);
//     ctx.lineTo(550, 625);
//     ctx.strokeStyle = "black";
//     ctx.stroke();

//     do{
//         game.addEventListener('click', getClickPos, false);
//         checkWins();
//     }while(play === true)

// }

// function checkwins(){
//     if(
//         [...board.x].every(x => x === 1) ||
//         [...board.y].every(y => y === 1) ||
//         [...board.z].every(z => z === 1) ||
//         [board.x[0], board.y[1], board.z[2].every(j => j === 1)] ||
//         [board.x[2], board.y[1], board.z[0].every(k => k === 1)]
//     ){
//         alert('Player 1: Win!!');
//         board = {
//             x: [0,0,0],
//             y: [0,0,0],
//             z: [0,0,0],
//         }
//         play = false;
//     }else if(
//         [...board.x].every(x => x === 2) ||
//         [...board.y].every(y => y === 2) ||
//         [...board.z].every(z => z === 2) ||
//         [board.x[0], board.y[1], board.z[2].every(j => j === 2)] ||
//         [board.x[2], board.y[1], board.z[0].every(k => k === 2)]
//     ){
//         alert('Player 2: Win!!');
//         board = {
//             x: [0,0,0],
//             y: [0,0,0],
//             z: [0,0,0],
//         }
//         play = false;
//     }
//     else if(
//         [...board.x, ...board.y, ...board.z].every(x => x != 0)
//     ){
//         alert('Draw!!')
//         board = {
//             x: [0,0,0],
//             y: [0,0,0],
//             z: [0,0,0],
//         }
//         play = false;
//     }
// }

// function drawMenu(){

//     // Menu
//     const menu = document.getElementById("menu");
//     const ctx1 = menu.getContext("2d");
//     menu.width = 700px;
//     menu.height = 700px;

//     ctx.clearRect(300, 300, 500, 500);
//     if(play === false){
//         play = true;
//         ctx.clearRect(300, 300, 500, 500);
//         ctx1.beginPath();
//         ctx1.moveTo(100, 100);
//         ctx1.rect(300,300,500,250)
//         ctx1.strokeStyle = "white";
//         ctx1.fill();
//         ctx1.stroke();
//         // ctx1.moveTo(400,400);
//         ctx1.fillStyle = 'black';
//         ctx1.font = "bold 4rem Arial";
//         ctx1.textAlign = 'center';
//         ctx1.textBaseline = 'middle';
//         ctx1.strokeText('Start Game', 550, 425);
//         ctx1.font = "2rem Arial";
//         ctx1.textAlign = 'center';
//         ctx1.textBaseline = 'middle';
//         ctx1.strokeText('Click to Start', 550, 480);
//         menu.addEventListener('click', getStartGame,false);
//     }
// }

// drawMenu();