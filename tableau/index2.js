
let animals_even = ["Dog", "Cat", "Spider"];
for(let i = 0; i < animals_even.length; i++)
if(i % 2 === 0)
{
    console.log(animals_even[i]);
}



let animals_odd = ["Bat", "Snake", "Bear"];

animals_odd.push("Mouse");
for(let i = 0; i < animals_odd.length; i++)
if (i % 2 !== 0)
{
    console.log(animals_odd[i]);
}
