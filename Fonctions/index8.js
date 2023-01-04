function add(nb1, nb2)
{
    return nb1 + nb2;
    
}
function sub(value1, value2)
{
    return value1 - value2;
    
}
function mult(value1, value2)
{
    return value1 ** value2;
    
}
function div(value1, value2)
{
    return value1 / value2;
    
}
function mod(value1, value2)
{
    return value1  % value2;
    
}
console.log(add(21, 21)); 
console.log(sub(55, 13)); 
console.log(mult(21, 2)); 
console.log(div(84, 2)); 
console.log(mod(42, 2)); 

function askUserOperation()
{
   let operateur = ["+", "-", "**", "/", "%"];
    operateur=window.prompt("quelle opération voulez-vous faire");
    return operateur;
}
function askUserFirstNumber(){
    let firstnumber= "";
    firstnumber= window.prompt("premier chiffre")
    return firstnumber;
    
}
function askUserSecondNumber()
{
    let secondnumber ="";
    secondnumber=window.prompt("deuxième chiffre")
    return secondnumber;
}
function calculator()
{
    let operation = askUserOperation(); // et du coup il faut changer le nom de ta variable, là tu veux récupérer un opérateur donc possiblement let operation =
    let firstnumber = askUserFirstNumber(); // ici let firstNumber =
    let secondnumber = askUserSecondNumber(); 
    
   if  (operation === "+") {
       console.log(add(21, 21)); // vu que tu as récupéré les nombres de l'utilisateur c'est ceux là qu'il faut envoyer
   }
   else if (operation === "-") {
       console.log(sub(55, 13));
   }
    else if (operation === "**") {
       console.log(mult(21, 2));
   }
    else if (operation === "/") {
       console.log(div(84, 2));
   }
    else if (operation === "%") {
       console.log(mod(42,2));
   }
   console.log(mod(42,2));
   return 
    // je dois récupérer mon opérateur => comment je fais ça ? let value = nomDeLaFonction();
    // je dois récupérer le premier nombre
    // je dois récupérer le second nombre
    
    // si mon opérateur c'est + j'apelle add
    // sinon si mon opérateur c'est - j'apelle sub
    // sinon si...
    
    // et à la fin je retourne mon résultat
}