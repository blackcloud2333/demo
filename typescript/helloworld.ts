class Student {
    fullName:String;
    constructor(public firstName, public middleInitial,public lastName) {
        this,this.fullName = firstName +''+middleInitial + ''+lastName;
    }
}
interface Person {
    firstName:string;
    lastName:string;
}
function greter(person:Person) {
    return 'hello,'+ person.firstName+''+person.lastName;
}
let user = new Student('Jane','M','user');
document.body.innerHTML= greeter(user);

