 //1
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "CountryName"
    }
};

console.log("Initial person object:", person);

//2
person.age = 31;  
person.address.country = "NewCountryName";

console.log("After updating age and country:", person);

// 3

person.email = "john.doe@example.com";

console.log("After adding email:", person);

// 4
delete person.address.country;

console.log("After deleting country:", person);
