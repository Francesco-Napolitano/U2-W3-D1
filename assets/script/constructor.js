const p1 = {
  firstName: 'Arya',
  lastName: 'Stark',
  age: 22,
  job: 'Student',
  showCompleteName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

const Person = function () {
  this.firstName = ''
  this.lastName = ''
  this.age = ''
  this.job = ''
  this.showCompleteName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}

const p2 = new Person('Arya', 'Stark', 22, 'Student')
const p3 = new Person('Bran', 'Stark', 22, 'Student')
const p4 = new Person('Sansa', 'Stark', 22, 'Student')
p2.firstName = 'Arya'
p2.lastName = 'Stark'

class Person2 {
  constructor(_firstName, _lastName, _age, _job) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.job = _job
  }
}

const Mario = new Person2('Mario', 'Mario', 22, 'Student')
const Luigi = new Person2('Luigi', 'Mario', 22, 'Student')
const Peach = new Person2('Peach', 'unknown', 22, 'Student')

class Developer extends Person2 {
  constructor(_firstName, _lastName, _age, _job, _favoriteColor) {
    this._favoriteColor = _favoriteColor
    super(_firstName, _lastName, _age, _job)
  }
}

const yoshi = new Developer('Yoshi', 'Greenway', 22, 'Student', 'Green')

class GameDeveloper extends Developer {
  constructor(
    _firstName,
    _lastName,
    _age,
    _job,
    _favoriteColor,
    _favoriteGame
  ) {
    this._favoriteGame = _favoriteGame
    super(_firstName, _lastName, _age, _job, _favoriteColor)
  }
}

const Wario = new GameDeveloper(
  'Wario',
  'Smith',
  22,
  'Student',
  'Green',
  'Super Mario'
)
