var list = [""];
const todoInput = document.querySelector("#todoInput");
const section = document.querySelector("section");

document.querySelector("#todoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    list.push(todoInput.value);
    const template = list
    section.innerHTML = template.join('<br>');
    document.getElementById("todoForm").reset();
})