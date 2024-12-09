
    //     function sayHello(){alert("Hello world")}
    //  document.write('<h1>This is my javascript Page</h1>');
    //  var pi=3.14;
    //  var person="Are you God!?";
    //  var answer='Yes I am';
    //  document.write(pi+"<br>");
    //  document.write(person+"<br>");
    //  document.write(answer+"<br>");
    // function myFunction()
    // {
    //     var carname="Welcome";
    //     document.getElementById("demo").innerHTML=carname;
//}
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Archana Singh";
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));
// var companyName='Google';
// //number
// var pi=3.14;
// var year=2013;
// //boolean
// var flag=true;
// var FALSE=false;
// //function
// var sayHello=function(){
//     alert("Hello world");
// }
// //array
// var numberArray=[1,2,3];
// var animals = new Array("cat","dog","mouse","lion");
// //object
// var person={
//     name:'Barack Hussein Obama II',
//     age:'51',
//     title:'44th President of the United States'
// }
// console.log(companyName);
// console.log(pi);
// console.log(year);
// console.log(flag);
// console.log(FALSE);
// console.log(sayHello);
// console.log(numberArray);
// console.log(animals);
// console.log(person);

//Create an Object
var person={
    firstName:"John",
    lastName:"Doe",
    id :5566,
    //accesss multiple properties of objects.
    getinfo : function(){
        return this.firstName+""+this.lastName;
    }
    };
    //Display data from the object:
    document.getElementById("demo").innerHTML=person.getinfo();
