import { colorChange } from "./color.js";
colorChange();
const starterData = document.querySelector(".starterData");



startNewGame.addEventListener('click', () => {
    const firstPlayer = document.getElementById('player1').value;
    const secondPlayer = document.getElementById('player2').value;
    function changeGame() {
        const startNewGame = document.getElementById('startNewGame');
        let result = document.getElementById('result');
        let game = document.querySelector(".game");
        let boxes = document.querySelectorAll(".box");
        let reset = document.getElementById("reset");

        starterData.classList.add('display');
        result.classList.remove('display');
        reset.classList.remove('display');
        game.classList.remove('display');

        // alert(firstPlayer+secondPlayer)

        let turn = true;

        const winPatterns = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]];

        boxes.forEach(box => {
            box.addEventListener('click', () => {
                if (turn) {
                    box.innerHTML = "O";
                    turn = false;

                } else {
                    box.innerHTML = "X";
                    turn = true;

                }
                box.disabled = true;
                checkWinner();
            })
        });

        function resetGame() {
            boxes.forEach(box => {
                box.innerHTML = "";
                box.disabled = false;
                turn = true;
                document.getElementById('result').innerText = `Result will display here.`;
            });
        }


        reset.addEventListener('click', () => {
            resetGame();
        })
        const checkWinner = () => {
            for (const pattern of winPatterns) {
                let value1 = boxes[pattern[0]].innerHTML;
                let value2 = boxes[pattern[1]].innerHTML;
                let value3 = boxes[pattern[2]].innerHTML;
                if (value1 != "" && value1 != "" && value1 != "") {
                    if (value1 === value2 && value2 === value3) {
                        if (value1 == "O") {
                            value1 = firstPlayer;
                            setTimeout(() => {
                                // document.getElementById('result').innerText = `New game is starting in 3 seconds.`;
                                setTimeout(resetGame, 2000);
                            }, 1000);
                        } else {  
                            value1 = secondPlayer;
                            setTimeout(() => {
                                // document.getElementById('result').innerText = `New game is starting in 3 seconds.`;
                                setTimeout(resetGame, 2000);
                            }, 1000);
                        }
                        document.getElementById('result').innerText = `${value1} is the winner.🥳`;
                    }

                }

            }

        }
    }

    if (firstPlayer != "" && secondPlayer != "") {
        changeGame()
    } else {
        alert(`Please enter valid names.`)
    }



})

