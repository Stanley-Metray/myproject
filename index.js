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
    axios.post('https://crudcrud.com/api/b8c59779557248b1ab68fc0795163943/userAppointments', JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => { console.log(res) })
        .catch((err) => console.log(err));

});


document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/b8c59779557248b1ab68fc0795163943/userAppointments')
        .then((res) => {
            const data = Array.from(res.data);
            const table = document.getElementById('table');
            data.forEach((value) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${value.name}</td>
            <td>${value.email}</td>
            <td>${value.phone}</td>
            <td><button onclick='handleEdit(event)' name='${value._id}'>Edit</button></td>
            <td><button onclick='handleDelete(event)' name='${value._id}'>Delete</button></td>
            `;
                table.appendChild(row);
            });
        })
        .catch((err) => { console.log(err) });
});

function handleDelete(event)
{
    const _id = event.target.name;
    axios.delete(`https://crudcrud.com/api/b8c59779557248b1ab68fc0795163943/userAppointments/${_id}`)
    .then((res)=> {
        event.target.parentElement.parentElement.remove();
        console.log(res);
    })
    .catch((err)=> console.log(err));
}