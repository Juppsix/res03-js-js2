let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];
for(let i = 0; i < students.length; i++)
{
    console.log(`${students[i].name}`)
    console.log(`${students[i].age}`)
    console.log(`${students[i].average}`)
    // la logique est bonne il ne reste plus qu'à utiliser la syntaxe console.log(`${students[i].name}`) c ok jcrois que j'ai compris
}

// c'est un tableau d'objets, tu peux donc le parcourir comme un tableau :)