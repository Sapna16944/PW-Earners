const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const formBtn = document.querySelector("#form-btn");
const taskCount = document.querySelector("#task-count");
const completeCount = document.querySelector("#complete-count");

// "Go to gym", "Revision web dev", "Take class"
let todos = [
  { id: Date.now() + 1, text: "Go to gym", isCompleted: false },
  { id: Date.now() + 2, text: "Revision web dev", isCompleted: false },
  { id: Date.now() + 3, text: "Take class", isCompleted: false },
];

let editTodoId = null;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  if (!todoValue) {
    return;
  }
  //todos.push(todoValue);
  console.log({ editTodoId, todoValue });

  if (editTodoId) {
    //editing
    todos = todos.map((todo) => {
      if (todo.id === Number(editTodoId)) {
        return {
          ...todo,
          text: todoValue,
        };
      }
      return todo;
    });
  } else {
    //adding
    let newTodo = {
      id: Date.now(),
      text: todoValue,
      isCompleted: false,
    };
    todos.push(newTodo);
  }
  todoInput.value = "";
  formBtn.textContent = "Add";
  //addTodo(newTodo);
  renderTodo(); //jb koi naya todo add hoga first updated todos render ho jayenge
});

function renderTodo() {
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    addTodo(todo);
  });

  taskCount.textContent=`TASKS (${todos.length})`;
  completeCount.textContent=`COMPLETED : (${todos.filter((todo)=>todo.isCompleted).length})`
}

renderTodo(); //jb first time file execute hogi, tb existing todos render ho jayenge

function addTodo(todo) {
  const li = document.createElement("li"); // <li></li>
  //li.textContent = todo.text; // <li> {Actual todo} </li>
  li.dataset.id = todo.id;

  li.className = `flex gap-2 border border-slate-300 p-3 rounded-xl `;
  li.innerHTML = `
          <input data-action="toggle"  data-id=${todo.id} ${todo.isCompleted === true ? "checked" : ""} type="checkbox">
          <p class="flex-1 ${todo.isCompleted ? "line-through text-red-500" : ""}">${todo.text}</p>
          <div class="flex gap-2">
            <button data-action="edit" data-id=${todo.id}>Edit</button>
            <button data-action="delete" data-id=${todo.id}>Delete</button>
          </div>
          
        `;

  todoList.append(li); // ul->li
}

/*==============EVENT DELEGATION==================== */

todoList.addEventListener("click", (e) => {
  let element = e.target.closest("[data-action]");
  let action = element?.dataset.action;
  let id = element?.dataset?.id;
  // let checkbox = e.target.closest('input[type="checkbox"]');
  // console.log(checkbox);

  //edit wala part
  if (action === "edit") {
    startEditTodo(e, id);
  }

  //delete wala part
  if (action === "delete") {
    deleteTodo(e, id);
  }

  
  if (action==="toggle") {
    
    todos = todos.map((todo) => {
      if (todo.id === Number(id)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    renderTodo();
  }
});

/*=============DELETE TODO =================== */

function deleteTodo(e, id) {
  e.target.closest("li").remove();

  todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todo;
    }
  });
  console.log(todos);
  //renderTodo();
}

/*=============EDIT TODO =================== */

function startEditTodo(e, id) {
  editTodoId = id;
  let currentTodo = todos.find((todo) => {
    if (todo.id === Number(id)) {
      return todo;
    }
  });
  todoInput.value = currentTodo.text;
  formBtn.textContent = "Update";
}
