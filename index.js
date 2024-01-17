class user_details {
    constructor(username, email, phone) {
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const user = new user_details(username, email, phone);
    const users = JSON.parse(localStorage.getItem("User Details")) || [];
    users.push(user);

    const list = document.getElementById("list");
    list.innerHTML = "";
    users.forEach((value) => {
        const li = document.createElement("li");
        li.innerHTML = value.username + " - " + value.email + " - " + value.phone + "<button class='btn-delete'>X</button><button class='btn-edit'>Edit</button>";
        list.appendChild(li);
    });

    localStorage.setItem("User Details", JSON.stringify(users));

    const btnDelete = document.getElementsByClassName("btn-delete");
    Array.from(btnDelete).forEach((element) => {
        element.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    });

    // Edit Button Functionality
    const btnEdit = document.getElementsByClassName("btn-edit");
    
    Array.from(btnEdit).forEach((element) => {

        element.addEventListener("click", (e) => {
            let name = e.target.parentElement.innerText.split(" ")[0];
            e.target.parentElement.remove();

            let users = JSON.parse(localStorage.getItem("User Details"));
            let index;
            for (index = 0; index < users.length; index++) {
                if (name == users[index].username) {
                    document.getElementById("username").value=users[index].username;
                    document.getElementById("email").value=users[index].email;
                    document.getElementById("phone").value=users[index].phone;
                    break;
                }
            }

            users.splice(index, 1);
            localStorage.removeItem("User Details");
            localStorage.setItem("User Details", JSON.stringify(users));
        });

    });
}