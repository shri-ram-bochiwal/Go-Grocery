function searchItem(){
    let query = document.getElementById("groceryItem").value.toLowerCase();

    let items = document.querySelectorAll("#groceryList li");

    items.forEach(function(item){
        let itemName = item.textContent.toLowerCase();
        if(itemName.includes(query)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"][name^="vegItem"]');

    checkBoxes.forEach(function (checkBox) {
        checkBox.addEventListener("change", function () {
            if (this.checked) {
                addToCart(this.parentNode.textContent.trim());
            } else {
                removeFromCart(this.parentNode.textContent.trim());
            }
        });
    });
});

function addToCart(itemName) {
    let newItem = document.createElement("li");
    newItem.textContent = itemName;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    newItem.appendChild(removeButton);

    let addCartList = document.getElementById("addItemCart");
    addCartList.appendChild(newItem);

    removeButton.style.display = "inline-block";

    removeButton.addEventListener("click", function () {
        removeFromCart(itemName);
    });
}

function removeFromCart(itemName) {
    const addCartList = document.getElementById("addItemCart");
    const items = addCartList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === itemName) {
            items[i].remove();
            break;
        }
    }
}


