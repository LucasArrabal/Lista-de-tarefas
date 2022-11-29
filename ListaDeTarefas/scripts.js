const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".task-container");


const validarInput = () =>{
    return inputElement.value.trim().length > 0;
}

const handleAddTask = () => {
    const inputValido = validarInput();

    if(!inputValido){
        return inputElement.classList.add("error");
    }
    
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const p = document.createElement("p");
    p.innerText = inputElement.value; 
    p.addEventListener("click", () => handleClick(p));

    const deleteItem = document.createElement("i")
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () => handleDeleteClick());

    taskItemContainer.appendChild(p);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);
    inputElement.value = " ";
}

const handleClick = (p) =>{
    const task = taskContainer.childNodes;

}

const handleInputChange = () =>{
    const inputValido = validarInput();

    if(inputValido){
        return inputElement.classList.add("error");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());
