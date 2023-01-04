let grades = [[20, 10], [15, 20], [13, 18]];
let sum = 0;
let average = 0;
let totalGradesNumber = 0;
for ( grade of grades ){
    for (subgrade of grade)
    {
        sum = sum + subgrade;
    }
    totalGradesNumber = totalGradesNumber + grades.length;
}
average = sum / totalGradesNumber;
console.log(average);