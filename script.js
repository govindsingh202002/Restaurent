let bar=document.getElementById("icon") ;
const bar1=document.querySelector(".icon1");
const bar2=document.querySelector(".icon2");
let t=true;
bar1.addEventListener('click',()=>{
     if(t==true){
         t=false;
    bar2.style.display="flex";
    bar2.addEventListener('click',()=>{
        if(t==false){
            bar2.style.display="none";
            t=true ;
        }
    })
}else{  
    t=true;
    bar2.style.display="none";
}
})