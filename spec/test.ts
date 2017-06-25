/// <reference path="../src/script.ts" />

describe("Person FullName", function () {
    let person;

    beforeEach(function () {
        person = new Person();
        person.setFirstName("Joe");
        person.setLastName("Smith");
    });

    it("should concatenate first and last names", function () {
        expect(person.getFullName()).toBe("Joe, Smith");
    });
});