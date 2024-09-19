var open_btn = document.getElementById("open-btn");
var close_btn = document.getElementById("close-btn");
var back_links = document.getElementById("containing-links"); 

open_btn.addEventListener('click', () =>{
    open_btn.style.display = "none";
    close_btn.style.display = "block";
    back_links.classList.add("show");
})

close_btn.addEventListener('click', ()=>{
    open_btn.style.display = "block";
    close_btn.style.display = "none";
    back_links.classList.remove("show");
    
})