var hamb = document.querySelector('#hamb');
var modalRight = document.querySelector('#modal-right');
var modalBg = document.querySelector('#modal-bg');

hamb.addEventListener("click", openModal);
hamb.addEventListener("keydown", (e) => {
    if(e.key === "Enter") openModal();
})

function openModal(){
    modalRight.classList.add("modal");
    modalRight.removeAttribute("hidden");
    modalBg.removeAttribute("hidden");
}

function closeModal(){
    modalRight.classList.remove("modal");
    modalBg.setAttribute("hidden", "true");
    modalRight.setAttribute("hidden", "true");
}
