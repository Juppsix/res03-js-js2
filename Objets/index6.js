let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0,
};
student.name = "test";
student.average = (12 + 14 + 8) / 3; // sinon c'est juste la somme de ses notes ^^ 
console.log(student.name)
console.log(student.average)
