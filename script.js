const containerTic = document.querySelector("#gameTic");
const infoTic = document.querySelector("#infoTic");
const rest = document.querySelector("#rest");
const o = document.querySelector('#o');
const xx = document.querySelector('#x');
const egale = document.querySelector('#equal');
const borderses = Array(20).fill(null).map(() => Array(20).fill(null));
console.log(borderses)
let marke = "circle";
let equal = 0;
let circle = 0;
let cross = 0;
let gameOver = false;
// arr=[];
function chickenDinner(marke) {
    //  horizantal
    for (let i = 0; i < 20; i++) {
        let count = 0;
        for (let j = 0; j < 20; j++) {
            if (borderses[i][j] === marke) {
                // arr.push([i,j]);
                count++
                // console.log(arr)
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
const container = () => {
    let count = 1;
    borderses.forEach((borders, x) => {
        borders.forEach((border, y) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("square");
            // cellElement.id = count;
            containerTic.appendChild(cellElement);
            // count++;
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
                        } else {
                            cross++
                            xx.textContent = cross;
                            console.log(x);
                        }
                        gameOver = true;
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
// console.log(borderses)