interface Teacher {
    readonly firstName: string,
    readonly lastName: string
    fullTimeEmployee?: boolean,
    yearsOfExperience: number,
    location: string,
    [propName: string]: any;
};

interface Directors extends Teacher {
    numberofReports: number;
};

interface printFunctions {
    (firstName: string, lastName: string): string;
};

const printTeacher: printFunctions = (firstName, lastName) => {
    return `${firstName[0]. ${lastName}}`
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    WorkOnHomeWork(): string {
        return 'Currently working'
    };

    displayName(): string {
        return this.firstName
    };
};