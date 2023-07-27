// 
// Selecting HTML elements

const todoInput = document.getElementById('todoInput');

const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Adding event listner to the add button
addBtn.addEventListener('click', addTodo);

// Function to add a new Todo
function addTodo(){

  // get the value of the todo input
  const todoText = todoInput.value;

  // create a new list item
  const listItem = document.createElement('li');

  // Add the todo text to the list item Element
  listItem.innerText = todoText;

  // Append the list item element to thedo list
  todoList.appendChild(listItem);

  // clear todo input
  todoInput.value = '';
}
