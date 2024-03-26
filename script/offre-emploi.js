const compInput = document.querySelector("#competence");
const compBtn = document.querySelector("#btn-ajout-localisation")
const competencesUI = document.querySelector("#competences-ui");
const competences = [];

const softInput = document.querySelector("#soft");
const softBtn = document.querySelector("#btn-ajout-soft")
const softUI = document.querySelector("#softs-ui");
const softs = [];

function removeComp(comp) {
    competences.splice(competences.indexOf(comp), 1);

}

function addSoft(comp) {
    softs.push(comp);
    softInput.value = "";
    softUI.innerHTML += `<div class="rounded-full px-2 bg-lightprimary">${comp}</div>`;
}

softInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addSoft(softInput.value);
    }
})

softBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addSoft(softInput.value);
})

softBtn.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
        addSoft(softInput.value);
    }
})

function addComp(comp) {
    competences.push(comp);
    compInput.value = "";
    competencesUI.innerHTML += `<div class="rounded-full px-2 bg-lightPrimary">${comp}</div>`;
}

compInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addComp(compInput.value);
    }
})

compBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addComp(compInput.value);
})

compBtn.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
        addComp(compInput.value);
    }
})
