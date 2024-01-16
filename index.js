
document.getElementsByTagName("form")[0].addEventListener("submit", (e)=>{
    e.preventDefault();
    const fruit = document.getElementById("fruit-to-add").value;
    const li = document.createElement("li");
    li.innerHTML=fruit+'<button class="delete-btn btn-delete">x</button><button class="edit-btn">Edit</button>';
    li.classList.add("fruit");
    document.getElementsByClassName("fruits")[0].appendChild(li);

    // here I am adding event listener on this newly created list item

    const btnDelete = document.getElementsByClassName("btn-delete");

    Array.from(btnDelete).forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
    });
});
});

const btnDelete = document.getElementsByClassName("delete-btn");

Array.from(btnDelete).forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
    });
});