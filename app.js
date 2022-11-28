let count=0;
function increment(){
   count+=1;
   document.getElementById("Count-El").innerText=count;
}
//let saveEl=document.getElementById("save-el");
function save(){
    let both=" "+count+" - ";
    document.getElementById("save-el").textContent += both;
    document.getElementById("Count-El").innerText=0;
    count=0;
    //console.log(count);
}

