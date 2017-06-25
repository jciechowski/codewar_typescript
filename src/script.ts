class Person {
    private firstname: string;
    private lastname: string;

    setFirstName(firstname: string):void {
        this.firstname = firstname;
    }

    setLastName(lastname: string): void {
        this.lastname = lastname;
    }

    getFullName(): string{
    	return this.firstname + ', ' + this.lastname;
    }
}