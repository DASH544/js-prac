const todo = document.querySelector("#input-text");
const todosLi = document.querySelector("#list-container");
function addTodo() {
  if (todo.value == "") {
    alert("Enter A Todo");
  } else {
    let li = document.createElement("li");
    li.textContent = todo.value;
    todosLi.append(li);
    let del = document.createElement("button");
    del.innerHTML = "x";
    del.setAttribute("onclick", "delTodo(this)");
    li.append(del);
  }
  todo.value = "";
}
todosLi.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
    if (e.target.tagName == "BUTTON") {
      e.target.parentElement.remove();
    }
  },
  false
);
