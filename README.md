🎮 Tic-Tac-Toe Game with Canvas
A fun Tic-Tac-Toe (3 in a row) game for two players, built using JavaScript and <canvas>. Includes a start menu and a dynamic board where circles and Xs alternate with each turn.

🕹️ How to Play
When the page loads, a "Start Game" button appears in a menu.

Click to begin the game.

<img width="1919" height="894" alt="Image" src="https://github.com/user-attachments/assets/54249ee4-0531-4032-9c79-97d8b2f3bfcf" />

Each player takes turns clicking on a board square:

Player 1 draws a circle (O).

Player 2 draws a cross (X).

The game detects when a player wins or if it's a tie.

<img width="1915" height="901" alt="Image" src="https://github.com/user-attachments/assets/91224b72-eb18-4ec1-a7e4-b377adeddf88" />

After a winner is announced via alert, the board resets for a new game.

📁 Project Structure
cpp
Copy
Edit
project-root/
├── index.html
├── script.js      ← main JavaScript logic
├── styles.css     ← optional styles
└── README.md
index.html: contains two <canvas> elements – one for the start menu, one for the game board.

script.js: holds the game logic, drawing, player turns, and win detection.

styles.css: optional styles for layout or buttons.

⚙️ Features & Code Overview
Uses 'use strict'; for cleaner code execution.

Two dynamic <canvas> elements sized to the window:

#menu: used for the start screen.

#board: used for the main game.

Game board state is stored in a 3x3 structure:

js
Copy
Edit
let board = { x: [0,0,0], y: [0,0,0], z: [0,0,0] };
Core functions:

drawMenu(): shows start screen.

getStartGame(): initializes the board, listens for clicks.

getClickPos(e): handles user clicks, checks for empty spots, draws shapes.

checkwins(): checks for 3 in a row.

resetGame(): resets the board state and drawing.

✅ Rules & Behavior
Clicks are only valid on empty cells.

If a player clicks a filled cell, an alert appears: “Already clicked”.

The board automatically resizes to fit the window.

Winning combinations are detected for all directions: rows, columns, and diagonals.

The game resets automatically after a win.

🚀 How to Run
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/tic-tac-toe-canvas.git
cd tic-tac-toe-canvas
Open index.html in your browser.

No installation, server, or build tools needed.

🌟 Future Improvements (Optional Ideas)
Add animation for moves or a visual effect on winning line.

Show player turn indicator.

Include a score counter or best-of series.

Handle ties (if all cells are filled and no winner).

Make it mobile-friendly and responsive.
