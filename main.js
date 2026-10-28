
const students = [
    {name:'Ruslan', age:20, score:85, isActive:true},
    {name:'Asema', age:17, score:92, isActive:true},
    {name:'Samir', age:22, score:45, isActive:false},
    {name:'Adilet', age:19, score:70, isActive:true}
];

students[0].age = 21;
students[2].score = 65;
students[2].isActive = true;
students.push({name:'Meerim', age:18, score:95, isActive:true});

let sum = 0, passed = 0;

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);

    if (students[i].score >= 80) console.log('Отлично');
    else if (students[i].score >= 60) console.log('Хорошо');
    else if (students[i].score >= 40) console.log('Удовлетворительно');
    else console.log('Не сдал');

    if (students[i].score >= 60) passed++;
    sum += students[i].score;
}

function getAverageScore(students) {
    return sum / students.length;
}

console.log('Сдали:', passed);
console.log('Средний балл:', getAverageScore(students));
