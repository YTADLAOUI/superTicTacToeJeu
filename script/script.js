// import JSConfetti from 'js-confetti'
const containerTic = document.querySelector("#gameTic");
const infoTic = document.querySelector("#infoTic");
const rest = document.querySelector("#rest");
const o = document.querySelector('#o');
const xx = document.querySelector('#x');
const egale = document.querySelector('#equal');
const playerO = document.querySelector('#playerO');
const playerX = document.querySelector('#playerX');
const start = document.querySelector('.button-85');
const errorr = document.querySelector('.error');
const principal = document.querySelector("#principal");
const lock = document.querySelector("#lock");
const joureO = document.querySelector(".joureO")
const joureX = document.querySelector(".joureX")
const resetBtn = document.querySelector('#resetBtn');
const borderses = Array(20).fill(null).map(() => Array(20).fill(null));
let marke = "circle";
let equal = 0;
let circle = 0;
let cross = 0;
let gameOver = false;

function chickenDinner(marke) {
    //  horizantal
    for (let i = 0; i < 20; i++) {
        let count = 0;
        for (let j = 0; j < 20; j++) {
            if (borderses[i][j] === marke) {
                count++
                if (count === 5) return true;
            } else {
                count = 0;
            }
        }
    }
    //virticale
    for (let i = 0; i < 20; i++) {
        let count = 0;
        for (let j = 0; j < 20; j++) {
            if (borderses[j][i] === marke) {

                count++
                if (count === 5) return true;
            } else {
                count = 0
            }
        }
    }
    // diagonal-gouchDroit
    for (let i = 0; i < 20; i++) {
        let count = 0;
        for (let j = 0; j < 20; j++) {
            for (let k = 0; k < 5; k++) {
                if (i + k < 20 && j + k < 20 && borderses[i + k][j + k] === marke) {
                    count++;
                    if (count === 5) return true;
                } else {
                    count = 0;
                    break
                }
            }
        }
    }
    // diagonal-droitGouche
    for (let i = 0; i < 20; i++) {
        let count = 0;
        for (let j = 0; j < 20; j++) {
            for (let k = 0; k < 20; k++) {
                if (i + k < 20 && j - k > 0 && borderses[i + k][j - k] === marke) {
                    count++
                    if (count === 5) return true;
                } else {
                    count = 0;
                    break
                }
            }
        }
    }
    return false
}
const jsConfetti = new JSConfetti();

function function1(name) {
    swal("le joueur qui gagne c'est " + name[0]);
}
const container = () => {
    let count = 1;
    borderses.forEach((borders, x) => {
        borders.forEach((border, y) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("square");
            containerTic.appendChild(cellElement);
            cellElement.addEventListener("click", function(e) {
                if (!gameOver && !borderses[x][y] && !e.target.querySelector(".circle") && !e.target.querySelector(".cross")) {
                    const displayMark = document.createElement("div");
                    displayMark.classList.add(marke);
                    e.target.appendChild(displayMark);
                    borderses[x][y] = marke
                    equal++
                    if (chickenDinner(marke)) {
                        infoTic.textContent = `Le joueur ${marke} a gagné !`;
                        if (marke == "circle") {
                            circle++
                            o.textContent = circle;
                            const userArray = [playerO.value, circle];
                            localStorage.setItem('user', JSON.stringify(userArray));
                        } else {
                            cross++
                            xx.textContent = cross;
                            const userArray = [playerX.value, cross];
                            localStorage.setItem('user', JSON.stringify(userArray));
                        }
                        let store = JSON.parse(localStorage.getItem('user'));
                        gameOver = true;
                        jsConfetti.addConfetti();
                        function1(store);
                    } else if (equal == 400) {
                        infoTic.textContent = `égalité`;
                        equal++
                        egale.textContent = equal;
                    } else {
                        marke = marke === "circle" ? "cross" : "circle";
                        infoTic.textContent = `C'est maintenant au tour de ${marke}`;
                    }
                }
            });
        });
    });
};
rest.addEventListener("click", () => {
    let cellCircle = document.querySelectorAll(".circle");
    let cellCroiss = document.querySelectorAll(".cross");
    cellCircle.forEach(el => el.classList.remove('circle'));
    cellCroiss.forEach(el => el.classList.remove('cross'));
    borderses.forEach((borders, x) => {
        borders.forEach(
            (border, y) => {
                borderses[x][y] = null;
            }
        )
    })
    gameOver = false;
    marke = "circle";
});

container();
const pass = function() {
    if (playerO.value.trim() === "" || playerX.value.trim() === "") {
        errorr.textContent = "Veuillez remplir le champ "
    } else {
        principal.classList.add("dispa");
        lock.classList.remove("dispa");
        containerTic.classList.remove("dispa");
        resetBtn.classList.remove("dispo");
        resetBtn.classList.add("afficher");
        joureO.textContent = playerO.value;
        joureX.textContent = playerX.value;
    }
}
start.addEventListener("click", pass);