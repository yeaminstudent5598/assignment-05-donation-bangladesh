// donate card 
const cardBtn = document.querySelectorAll(".btn");
for(let btn of cardBtn){
    btn.addEventListener("click", function(){
        card(btn);
    })
}