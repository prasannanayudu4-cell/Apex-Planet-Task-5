// ---------------- TO-DO ----------------
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = task + 
        " <button onclick='deleteTask(" + index + ")'>X</button>";
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") return;

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();


// ---------------- PRODUCTS ----------------
let products = [
    {name: "Phone", price: 10000},
    {name: "Headphones", price: 400},
    {name: "Shoes", price: 800},
    {name: "Watch", price: 300}
];

function displayProducts(list) {
    let ul = document.getElementById("productList");
    ul.innerHTML = "";

    list.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p.name + " - ₹" + p.price;
        ul.appendChild(li);
    });
}

function filterProducts(type) {
    if (type === "low") {
        displayProducts(products.filter(p => p.price < 500));
    } else if (type === "high") {
        displayProducts(products.filter(p => p.price >= 500));
    } else {
        displayProducts(products);
    }
}

function sortProducts() {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
}

displayProducts(products);
