const createInstructor = (firstN, lastN) =>{
    let firstName = firstN;
    let lastName = lastN;
    return {
        firstName,
        lastName
    }
}

let favNum = 42
let instructor1 = {
    Name : 'Colt',
    [favNum] : "that's my fav num"
}

let instructor2 = {
    firstName: 'Colt',
    sayHi(){
       return 'hi';
    },
    sayBye(){
        return this.firstName + 'says bye!';
    }
}

const createAnimal = (animal, functionName, functionText) => {
    let species = animal;
    return {
        species,
        [functionName](){
            return functionText;
        }
    }
}