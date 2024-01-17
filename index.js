class user_details {
    constructor(username, email, phone) {
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}

function handleFormSubmit(event){
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const user = new user_details(username, email, phone);
    const users = JSON.parse(localStorage.getItem("User Details")) || [];
    users.push(user);

    const list = document.getElementById("list");
    list.innerHTML = "";
    users.forEach((value)=>{
        const li = document.createElement("li");
        li.innerText = value.username+" - "+value.email+" - "+value.phone;
        list.appendChild(li);
    });

    localStorage.setItem("User Details", JSON.stringify(users));
}