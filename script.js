const cards = document.getElementById('cards')
const box = document.getElementById('box')

let users = []
const apiUrl = "https://randomuser.me/api/?results=100"

async function fetchUsers() {
    try {
        box.style.display = 'block'
        const response = await fetch(apiUrl)
        const data = await response.json()
        users = data.results
        displayUsers(users)
    } catch (error) {
        console.log(error)
    } finally {
        box.style.display = "none"
    }
}

function displayUsers(users) {
    cards.innerHTML = `` 
    users.forEach(user => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${user.picture.medium}" alt="User Image">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p><strong>Age:</strong> ${user.dob.age}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `
        cards.appendChild(card)
    })
}

fetchUsers()
