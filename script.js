const containerTic= document.querySelector("#gameTic");
const infoTic=document.querySelector("#infoTic");
const borderses= Array(20).fill(null).map(()=>Array(20).fill(null));
let marke="circle"
const container=()=>{
let count=0;
  borderses.forEach((borders,index)=>{
        borders.forEach((border,index)=>{
          const cellElement=document.createElement("div");
          cellElement.classList.add("square");
          cellElement.id=count;
          containerTic.append(cellElement);
          count++
          cellElement.addEventListener("click",addMark);
          
        })
      })

}
container();

function addMark(e){
const displayMark=document.createElement("div");
displayMark.classList.add(marke);
e.target.append(displayMark);
marke = marke==="circle"? "cross": "circle";
  infoTic.textContent=`maintenant est ${marke}`;
}
