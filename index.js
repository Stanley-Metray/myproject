class user_details {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}


document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    user = new user_details(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("phone").value);
    axios.post('https://crudcrud.com/api/7628dbbdbca14d36b306f25e149effc9/userAppointments', JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => { console.log(res) })
        .catch((err) => console.log(err));

});


document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/7628dbbdbca14d36b306f25e149effc9/userAppointments')
        .then((res) => {
            const data = Array.from(res.data);
            const table = document.getElementById('table');
            data.forEach((value) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${value.name}</td>
            <td>${value.email}</td>
            <td>${value.phone}</td>
            <td><button name='${value._id}'>Edit</button></td>
            <td><button name='${value._id}'>Delete</button></td>
            `;
                table.appendChild(row);
            });
        })
        .catch((err) => { console.log(err) });

    let linkElement = document.createElement('link');
    linkElement.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('integrity', 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC');
    linkElement.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(linkElement);
});

