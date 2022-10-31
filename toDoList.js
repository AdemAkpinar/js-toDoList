let btnAdd = document.getElementById("btnAdd");
let toDoContainer = document.getElementById("toDoContainer");
let textInput = document.getElementById("textInput");
let btnClear = document.getElementById("btnClear");

btnAdd.addEventListener("click", function () {
    let paragraf = document.createElement("p");
    paragraf.classList.add("paragraf-styling");
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML = textInput.value;
    textInput.value = "";

    paragraf.addEventListener("click", function () {
        paragraf.style.textDecoration = "line-through";
    });

    paragraf.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraf);
    });

    btnClear.addEventListener("click", function () {
        paragraf.remove();
    });

})








