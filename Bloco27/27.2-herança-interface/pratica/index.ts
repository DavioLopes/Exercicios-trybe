import Employee from "./interface";
import Person from "./Person";
import Students from "./student";

const jose = new Person('jose', new Date('1999/01/01'));
const pedro = new Person('pedro', new Date('2000/01/02'));
const carolina = new Students('Carolina da Silva', new Date('2005/03/17'));

const testInterfaceEmployee: Employee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    }
}

carolina.examsGrades = [26, 23, 29, 20];
console.log(testInterfaceEmployee);
console.log(jose);
console.log(pedro);
console.log(carolina.sumGrades());
console.log(carolina.sumAverageGrade());

