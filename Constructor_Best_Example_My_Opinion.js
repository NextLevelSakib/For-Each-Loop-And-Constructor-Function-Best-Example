function GetEmployee(Name, age, experience){
    this.Name = Name
    this.Age = age
    this.Experience = experience
}

let Employee1 = new GetEmployee("Sakib", 11, 1.5)
console.log(Employee1)

let Employee2 = new GetEmployee("Jack", 22, 4)
console.log(Employee2)


let Employee3 = new GetEmployee("Ronaldo", 39, 16)
console.log(Employee3)


let Employee4 = new GetEmployee("Messi", 39, 11)
console.log(Employee4)


let Employee5 = new GetEmployee("Neymar", 35, 5)
console.log(Employee5)