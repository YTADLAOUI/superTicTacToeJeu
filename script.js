const containerTic = document.querySelector("#gameTic");
const infoTic = document.querySelector("#infoTic");
const borderses = Array(20).fill(null).map(() => Array(20).fill(null));
let marke = "circle";
const container = () => {
    let count = 1;
    borderses.forEach((borders, x) => {
        borders.forEach((border, y) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("square");
            cellElement.id = count;
            containerTic.appendChild(cellElement);
            count++;

            cellElement.addEventListener("click", function (e) {
                if (!borderses[x][y] && !e.target.querySelector(".circle") && !e.target.querySelector(".cross")) {
                    const displayMark = document.createElement("div");
                    displayMark.classList.add(marke);
                    e.target.appendChild(displayMark);
                    borderses[x][y] = marke;
                        marke = marke === "circle" ? "cross" : "circle";
                        infoTic.textContent = `C'est maintenant au tour de ${marke}`;
                    
                }
            });
        });
    });
};

container();
