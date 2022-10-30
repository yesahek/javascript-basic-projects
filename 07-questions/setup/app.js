//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');
//const question = document.querySelectorAll('.question');

//btn.addEventListener("click", function(){
    // if(question.classList.contains("show-text")){
    //     question.classList.remove("show-text");
    // }else{
    //     question.classList.add("show-text");
    // }
    //question.classList.toggle("show-text");
//});

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
const question = e.currentTarget.parentElement.parentElement;
question.classList.toggle("show-text");
});
});