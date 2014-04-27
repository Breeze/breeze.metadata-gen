/**
 * Made up samples
 */
(function(test){

    test.person = [
        {
            "id": 2,
            "firstName": "Fred",
            "lastName": "Jones",
            "dob": (new Date(2010,1,1)).toJSON(),
            "heightInInches": 69,
            "hourlyRate": 25,
            "coolness": 5,
            "factor": 1,
            "comments": "How do you like me"
        },
        // Comments looks like a number; make sure it stays "string"
        {
            "id": 3,
            "firstName": "Sally",
            "lastName": "Smith",
            "dob": (new Date(1955, 10, 4)).toJSON(),
            "heightInInches": 65.5,
            "hourlyRate": 215.3,
            "coolness": 0,
            "factor": 1.24,
            "comments": "1.2"
        },
        // Comments missing, therefore nullable
        // Factor goes to 3rd decimal, therefore assume is double, not decimal
        {
            "id": 4,
            "firstName": "Charlie",
            "lastName": "Brown",
            "dob": (new Date(1965, 11, 9)).toJSON(),
            "heightInInches": 72,
            "hourlyRate": 10.35,
            "coolness": 3,
            "factor": 1.245
         },
        // Factor is null, therefore nullable
        {
            "id": 4,
            "firstName": "Peter",
            "lastName": "Parker",
            "dob": (new Date(1935, 8, 9)).toJSON(),
            "heightInInches": 70,
            "hourlyRate": 50,
            "coolness": 4,
            "factor": null,
            "comments": "Does whatever a spider can"
        }
    ];

})(module.exports);

