const taskInput = document.querySelector("#task");
const list = document.querySelector("#list");
const task = document.querySelector("list li");
const buttonDOM = document.querySelector("#liveToastBtn");
const toastSuccess = document.querySelector(".toast.success");
const toastError = document.querySelector(".toast.error");

document.querySelectorAll("#list > li").forEach((element) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `x`;
  deleteBtn.classList.add("removeBtn");
  element.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", removeElement);
});

function removeElement() {
  this.parentElement.remove();
}

document.querySelectorAll("#list > li").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("done");
  });
});

function newElement() {
  if (taskInput.value == null || taskInput.value.trim() == "") {
    $(toastError).toast(`show`);
  } else {
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    list.append(newTask);
    $(".success").toast("show");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `x`;
    deleteBtn.classList.add("removeBtn");
    newTask.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement);
    taskInput.value = "";

    newTask.addEventListener("click", () => {
      newTask.classList.toggle("done");
    });
  }
}
