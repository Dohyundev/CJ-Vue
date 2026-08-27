function getName() {
  return this.name
}

const user = {
  name: 'HEROPY',
  age: 85,
  getName: getName
}

user.getName() // 'HEROPY'


const nums = [1,2,3,4]
for (let i = 0; i < 10; i += 1) {}
for (const item of 배열) {}
for (const item in 객체) {}
