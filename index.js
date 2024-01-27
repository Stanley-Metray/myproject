class user_details {
    constructor(username, email, phone) {
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}


document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    user = new user_details(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("email").value);
    axios.post('https://crudcrud.com/api/7628dbbdbca14d36b306f25e149effc9/appointmentData', JSON.stringify(user),{
        headers:{
            'Content-Type': 'application/json',
        }})
        .then((res) => { console.log(res) })
        .catch((err) => console.log(err));

});


