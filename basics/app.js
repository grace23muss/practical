console.log("hi there!");
// third way of using javascript is the inline style in the html that u call with a function
//  because you want to reuse IDBTransaction.apply
// a function is used to pass arguments
function printName(first, last) {
    console.log(first + ' ' + last);
    alert(first + ' ' + last);
}
// everything in programming is an action that triggers a reaction
// javascript concepts
//1. variables
let name = "grace"; // can be re assigned 
// var name = "grace";  // can be re assigned 
// const name = "grace"; //cannot be reassigned

//2. operators (for operations +,-,x,%)
let x = 5;
x+= 10; // x=5+10 or x= x+10

//3.Numbers
let age= 22;
//4. arrays are used when you have a list 
let list=[1, 2, 3, 4 ,"moris"];
console.log(list[4]);
//4. objects are entities that hold values and methods
// let user= {
//     firstName ="patrick",
//     username="gracemuss",
//     favoriteMovies= ["spiderman", "balck panther"],
//     age= 24,
//     BirthPlace : function(){
//         return 'toronto'
//     },
//     objectA:{
//         objectB:245
//     }
// }
// console.log(user.age);
//5. boolean means true or false 
console.log(10<2);// the result will be "false"
//6. control flow used for logic
if (age>21){ //if is a statement
    console.log('user can drink')
}else{
    console.log('sorry! you underage')
}
// statement vs expressions
console.log(20>10 ? "yes":"no");// 20 is greater than one and if it true return yes , otherwise retun no
console.log(10>0 ?  true: false); // second way of writing it 
//7. functions are reusable codes like the data speeding up the coding process
 function Company(name, addresse) {
     console.log(name,+ ' '+ addresse );
     return name,+ ' '+ addresse
 }
 Company("DHL", 1220);// i can reuse those code like as much as possible
 Company("RBC", 120);
 Company("uber", 3028);
 //8. loops are repeatable codes
 for(let i=1; i<11; i++){
     console.log( `${Company("uber", 3028)} ${i}`);
 }

 //9. Null means empty
let car= null;
let bottle; // will give you the same result as null , but will say undefined 
console.log(car);
