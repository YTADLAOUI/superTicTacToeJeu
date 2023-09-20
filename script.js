const containerTic= document.querySelector("#gameTic");
const infoTic=document.querySelector("#infoTic");
const borders= Array(20).fill(null).map(()=>Array(20).fill(null));
const container=()=>{
  borders.forEach((border,index)=>{
   const cellElement=document.createElement("div")
    cellElement.classList.add("square");
    containerTic.append(cellElement);

  })
}
container();
