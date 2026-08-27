function getName() {
  return this.name
}

const user = {
  name: 'HEROPY',
  age: 85,
  getName: getName
}

user.getName() // 'HEROPY'
