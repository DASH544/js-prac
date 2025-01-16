let todo = [
    {
        title: "Go to Gym",
        id: 1
    },
    {
        title: "Run a mile",
        id: 2
    }
];
const root = document.querySelector("#root");
const input = document.querySelector("#input");

function addtodo() {
    const todosTitle = input.value;
    todo.push({
        title: todosTitle
    });
    input.value = ""; 
    change(); 
}

function change() {
    root.innerHTML = "";
    todo.forEach(item => {
        render(item.title);
    });
}

function todoComponent(todoTitle) {
    const component = document.createElement("div");
    component.innerHTML = `${todoTitle}`;
    return component;
}

function render(todoTitle) {
    const elem = todoComponent(todoTitle);
    root.appendChild(elem);
}


