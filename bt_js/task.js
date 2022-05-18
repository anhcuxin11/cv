let btnAdd = document.querySelector('button')
let taskNameEL = document.querySelector('#content')

btnAdd.addEventListener('click', function(){
    if(!taskNameEL.value){
        alert("nhap lai")
        return false;
    }

    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

    tasks.push({name: taskNameEL.value})

    taskNameEL.value = ''
    localStorage.setItem('tasks', JSON.stringify(tasks))

    renderTasks(tasks)
})
function renderTasks(tasks = []){
    let content = '<ul>'
    tasks.forEach((task) => {
        content += `<li>
            <div class="task-name">${task.name}</div>
            <a href="#">Sua</a>
            <a href="#">Xoa</a>
        </li>`
    })

    content += '</ul>'

    document.querySelector('#result').innerHTML = content
}

// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const todo = document.getElementById("todo");
// let todoList = [];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   addTodo();
// });

// function addTodo() {
//   // get input
//   const newTodo = input.value;
//   // return if nothing was entered
//   if (!newTodo) return;
//   // add the new task to todo list
//   todoList.push({
//     text: newTodo,
//     completed: false,
//   });
//   // add the todo list to localstorage
//   localStorage.setItem("todos", JSON.stringify(todoList));
//   // render todo list
//   render();
// }
// function render() {
//     // clear the list
//     todo.innerHTML = null;
  
//     // get the todo list from localstorage
//     const todos = localStorage.getItem("todos");
//     todoList = JSON.parse(todos) || [];
  
//     for (let i = 0; i < todoList.length; i++) {
  
//       const item = document.createElement("li");
  
//       // create checkbox to update completed state
//       const checkbox = document.createElement("input");
  
//       checkbox.type = "checkbox";
  
//       checkbox.addEventListener("click", function (e) {
//         todoList[i].completed = e.target.checked;
//         localStorage.setItem("todos", JSON.stringify(todoList));
  
//           // check if todo item is completed and add appropriate class
//           if (todoList[i].completed) {
//              item.classList.add("completed");
//              item.classList.remove("uncompleted");
//             checkbox.checked = todoList[i].completed;
//          } else {
//            item.classList.add("uncompleted");
//            item.classList.remove("completed");
//            checkbox.checked = todoList[i].completed;
//         }
  
//       });
  
//     }
//   }
// // create text node
// const text = document.createElement("p");
// text.innerText = todoList[i].text;

// // create delete button
// const button = document.createElement("button");
// button.innerText = "X";
// button.addEventListener("click", function () {
//   todoList.splice(i, 1);
//   localStorage.setItem("todos", JSON.stringify(todoList));
//   render();
// });
// item.appendChild(checkbox);
// item.appendChild(text);
// item.appendChild(button);
// todo.appendChild(item);
// input.value = null;  