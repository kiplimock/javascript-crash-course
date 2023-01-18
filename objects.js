var carInfo = {make: 'Toyota', 
               year: '1990', 
               model: 'camry'
};

var myNewObject = {a: "hello", 
                   b: [1,2,3], 
                   c: {inside: ['a', 'b']}
}

// iterate through an object
for (const key in carInfo) {
    console.log(key)
    console.log(carInfo[key])
    // carInfor.key didn't work here
}

var simple = {
    prop: "Hello",
    myMethod: function () {
        console.log("My method was called.")
    }
}

var myObj = {
    name: "Jose",
    greet: function() {
        console.log("Hello " + this.name)
    }
}

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,

    nameLength: function() {
        console.log("Name is " + this.name.length + " characters long.");
    },

    employeeAlert: function() {
        alert("Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age);
    },

    lastName: function() {
        console.log("Last name is " + this.name.split(' ')[1]);
    }
}