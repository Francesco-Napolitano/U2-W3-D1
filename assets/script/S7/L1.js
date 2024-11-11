class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  isOlderThan(otherUser) {
    if (this.age > otherUser.age) {
      return 'user1 is older than user2'
    } else {
      return 'user2 is older than user1'
    }
  }
}

const user1 = new User('Mario', 'Rossi', 22, 'Milano')
const user2 = new User('Luigi', 'Rossi', 30, 'Milano')
console.log(user1.isOlderThan(user2))

const firstNameInput = document.getElementById('firstName')
const petOwner = document.getElementById('petOwner')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const myForm = document.getElementById('user-form')

class formUser {
  constructor(_firstName, _petOwner, _species, _breed) {
    this.firstName = _firstName
    this.petOwner = _petOwner
    this.species = _species
    this.breed = _breed
  }

  isSameOwner(otherPet) {
    if (this.petOwner === otherPet.petOwner) {
      return true
    } else {
      return false
    }
  }
}

const userForm1 = new formUser('Fluffy', 'Mario', 'Cane', 'Labrador')
const userForm2 = new formUser('Batuffolo', 'Mario', 'Gatto', 'Persiano')
console.log(userForm1.isSameOwner(userForm2))

myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const utente = new formUser(
    firstNameInput.value,
    petOwner.value,
    species.value,
    breed.value
  )

  console.log('UTENTE CREATO', utente)
})
