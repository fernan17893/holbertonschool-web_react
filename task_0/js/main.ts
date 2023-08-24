interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Fern",
    lastName: "Fern",
    age: 30,
    location: "Earth"
}

const student2: Student = {
    firstName: "Cooler",
    lastName: "Cooler",
    age: 300,
    location: "Planet Frieza 113"
}

const studentsList: Array<Student> = [student1, student2];

const tabelBody: HTMLElement = document.querySelector('tbody');
