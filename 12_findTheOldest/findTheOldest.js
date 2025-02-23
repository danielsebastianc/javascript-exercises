const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    const peopleWithAge = people
        .map((person) => {
            if (!person.yearOfDeath) {
                person["age"] = currentYear - person.yearOfBirth;
            } else {
                person["age"] = person.yearOfDeath - person.yearOfBirth;
            }
            return person;
        })
        .reduce((oldestPerson, currentPerson) => {
            return oldestPerson.age < currentPerson.age
                ? currentPerson
                : oldestPerson;
        });
    return peopleWithAge;
};

// Do not edit below this line
module.exports = findTheOldest;
