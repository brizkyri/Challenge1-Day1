window.onload = () => {
    var form = document.querySelector("#addForm");

    var items = document.getElementById("items");

    form.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);

    var todoList = JSON.parse(localStorage.getItem("todoList"));

    var items = document.getElementById("items");
    items.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        renderTodo(todoList[i], i + 1);
    }
};

// Function for add todo
function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById("item").value;

    if (newItem.trim() === "" || newItem.trim() === null) {
        return false;
    } else {
        document.getElementById("item").value = "";

        var todoList = localStorage.getItem("todoList");

        if (todoList === null) {
            var data = [newItem];
            localStorage.setItem("todoList", JSON.stringify(data));
            renderTodo(newItem, 1);
        } else {
            var newData = [...JSON.parse(todoList), newItem];
            localStorage.setItem("todoList", JSON.stringify(newData));

            var items = document.getElementById("items");
            items.innerHTML = "";

            for (let i = 0; i < newData.length; i++) {
                renderTodo(newData[i], i + 1);
            }
        }
    }
}

// Function for remove todo
function removeItem(e) {
    e.preventDefault();

    var itemIndex = getNodeIndex(e);

    var todoList = JSON.parse(localStorage.getItem("todoList"));

    if (itemIndex > -1) {
        todoList.splice(itemIndex, 1);
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));

    var items = document.getElementById("items");
    items.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        renderTodo(todoList[i], i + 1);
    }
}

// Function for button submit
function toggleButton(_, btnID) {
    document.getElementById(btnID).disabled = false;
}

// Function for display todo
function renderTodo(value, id) {
    var li = document.createElement("li");
    li.id = "item-" + id;
    li.className = "list-group-item";

    var deleteButton = document.createElement("button");

    deleteButton.className = "btn-danger btn btn-sm float-right delete";
    deleteButton.style.margin = "0 8px";

    deleteButton.appendChild(document.createTextNode("Delete"));

    li.appendChild(document.createTextNode(value));
    li.appendChild(deleteButton);

    items.appendChild(li);
}

// Function for get index todo
function getNodeIndex(elm) {
    var itemId = elm.target.parentNode.id;
    var nodes = Array.prototype.slice.call(
        document.getElementById("items").children
    );

    var itemIndex;

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id === itemId) {
            itemIndex = i;
        }
    }

    return itemIndex;
}

