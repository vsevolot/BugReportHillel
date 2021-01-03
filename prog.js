window.addEventListener("load", () => {
    var addButton = document.querySelector("#add");
    var list = document.querySelector("#list");
    addButton.addEventListener("click", () => {
        var item = document.querySelector("#item1");
        var list = document.querySelector("#list");
        var li = document.createElement("tbody");
        li.innerText = item.value;
        item.value = "";
        td1.appendChild(li);
        var item = document.querySelector("#item2");
        var list = document.querySelector("#list");
        var li = document.createElement("tbody");
        li.innerText = item.value;
        item.value = "";
        td2.appendChild(li);
        var item = document.querySelector("#item3");
        var list = document.querySelector("#list");
        var li = document.createElement("tbody");
        li.innerText = item.value;
        item.value = "";
        td3.appendChild(li);
        var item = document.querySelector("#item4");
        var list = document.querySelector("#list");
        var li = document.createElement("tbody");
        li.innerText = item.value;
        item.value = "";
        td4.appendChild(li);
    });
});

