//#region visibilt
function visibility(do1, dn2,btn) {

    const d1 = document.querySelector(do1);
    const d2 = document.querySelector(dn2);
    var btn = document.querySelector(btn);
    btn.addEventListener("click",()=>{
        d1.classList.toggle("d-none");
        d2.classList.toggle("d-none");

    })
  
}

// use function 
visibility(".tag1", ".tag2",".clickVSort1");
visibility(".tag1", ".tag2",".clickVSort2");
//#endregion