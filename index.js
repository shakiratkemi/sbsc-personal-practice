let userItems = [];

const showLists = () => {
  let addItems = document.getElementById("list-items");
  if (addItems) {
    addItems.innerHTML = "";
    userItems.forEach((item) => {
      let listItems = document.createElement("li");
      listItems.textContent = item;
      addItems.appendChild(listItems);
    });
  }
};

const showUserItems = () => {
  let userInput = document.getElementById("user-input");
  let newItem = userInput.value.trim();
  if (newItem === "") return;
  if (userItems.includes(newItem)) {
    alert("This item is already on your list!");
    userInput.value = "";
    return;
  }
  userItems.push(newItem);
  showLists();
  userInput.value = "";
};

const removeFirstBtn = document.getElementById("remove-first");
const removeLastBtn = document.getElementById("remove-last");

removeFirstBtn.addEventListener("click", () => {
  if (userItems.length > 0) {
    userItems.shift();
    showLists();
  } else {
    alert("Nothing left to remove");
  }
});

removeLastBtn.addEventListener("click", () => {
  if (userItems.length > 0) {
    userItems.pop();
    showLists();
  } else {
    alert("Already empty");
  }
});
showUserItems();


