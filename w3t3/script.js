// // Filtering an Array

// function filterEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);


// // Find the Largest Number

// function filterMaxNumbers(arr) {
//     return Math.max(...arr);
// }

// const arraynumbers = [1, 3, 0, 7, 4, 5];
// const MaxNumbers = filterMaxNumbers(arraynumbers);
// console.log(MaxNumbers);



// // Reverse a String

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log(reversedString); 



// // Remove Duplicates

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const Duplicatesnumbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(Duplicatesnumbers);
// console.log(uniqueNumbers); 







// const person ={
//     name: "ahmed",
//     age: 20, 
//     address: "cairo",

//     text: function(){
//         console.log("hello");
        
//     }
// }

// console.log(person.name);
// person.text();


class person {
    constructor(name , age , address){
        this.name = name;
        this.age = age;
        this.address = address;
    }


    text() {
        console.log(`hello ${this.name}`);
        
    }
}

class man extends person {
    constructor(name , age , address , phone){
        super(name , age , address);
        this.phone = phone;
    }

    box() {
        console.log(`hello ${this.name}`);
        
    }
}


const person1 = new person("ahmed" , 20 , "cairo" , "010");
// const person2 = new person("mohamed" , 28 , "mansoura");

console.log(person1.name);
