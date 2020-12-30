function fetchFromApi() {
  const data = fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((response) => response.json());
  return data;
}

let counter = 0;

async function createRows() {
  const data = await fetchFromApi();
  for (let i = 0; i < 5; i++) {
    let userId = data[i].userId;
    let id = data[i].id;
    let title = data[i].title;
    let completed = data[i].completed;
    setNewRow(userId, id, title, completed, data);
  }
  console.log(data);
  counter = data.length;
  return data;
}

createRows();

let userIdInput = document.getElementById("userIdInput");
let idInput = document.getElementById("idInput");
let titleInput = document.getElementById("titleInput");
let completedInput = document.getElementById("completedInput");
let editDiv = document.getElementById("editDiv");

async function setNewRow(userId, id, title, completed) {
  const data = await fetchFromApi();

  let newRow = document.createElement("tr");

  let newUserId = document.createElement("td");
  if (userId) {
    newUserId.innerHTML = userId;
  } else {
    newUserId.innerHTML = userIdInput.value;
  }

  let newId = document.createElement("td");
  if (id) {
    newId.innerHTML = id;
  } else {
    counter++;
    newId.innerHTML = counter;
  }

  let newTitle = document.createElement("td");
  if (title) {
    newTitle.innerHTML = title;
  } else {
    newTitle.innerHTML = titleInput.value;
  }

  let newCompleted = document.createElement("td");
  if (completed) {
    newCompleted.innerHTML = completed;
  } else {
    newCompleted.innerHTML = completedInput.value;
  }

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-times'></i>";
  deleteButton.onclick = () => {
    if (confirm("Are you sure you want to delete this user?")) {
      newRow.remove();
    }
  };

  let editButton = document.createElement("button");
  editButton.innerHTML = "<i class='far fa-edit'></i>";
  editButton.style.display = "inline-block";
  editButton.onclick = () => {
    editButton.style.display = "none";
    confirmButton.style.display = "inline-block";

    let div = document.createElement("div");

    let labelName = document.createElement("label");
    labelName.innerHTML = "Edit Name";
    let inputName = document.createElement("input");
    inputName.value = newUserId.innerHTML;

    div.appendChild(labelName);
    div.appendChild(inputName);
    document.getElementById("editDiv").appendChild(div);
  };

  let confirmButton = document.createElement("button");
  confirmButton.innerHTML = "<i class='fas fa-check'></i>";
  confirmButton.onclick = () => {
    confirmButton.style.display = "none";
    editButton.style.display = "inline-block";
    newUserId.innerHTML = editDiv.querySelectorAll("div input")[0].value;

    editDiv.removeChild(editDiv.lastChild);
  };
  confirmButton.style.display = "none";

  newRow.appendChild(newUserId);
  newRow.appendChild(newId);
  newRow.appendChild(newTitle);
  newRow.appendChild(newCompleted);

  newRow.appendChild(editButton);
  newRow.appendChild(confirmButton);
  newRow.appendChild(deleteButton);
  document.getElementById("addressBookRows").appendChild(newRow);

  console.log(data.map((x) => x.id).some((x) => x === Number(newId.innerHTML)));
  console.log(Number(newId.innerHTML));
  if (!data.map((x) => x.id).some((x) => x === Number(newId.innerHTML))) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: newUserId.innerHTML,
        id: newId.innerHTML,
        title: newTitle.innerHTML,
        completed: completedInput.checked,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  userIdInput.value = "";
  titleInput.value = "";
  completedInput.value = "";
}

document.getElementById("submitForm").addEventListener("click", () => {
  event.preventDefault();
  setNewRow();
});
