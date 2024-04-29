export const registerValidator = {
    username: (value) => {
        if (value.length < userRequirements.usernameMinLen) {
            return `Username must be at least ${userRequirements.usernameMinLen} characters!`;
        }

        if (value.length > userRequirements.usernameMaxLen) {
            return `Username can be max ${userRequirements.usernameMaxLen} characters!`;
        }

        return true;
    }, 
    password: (value) => {
        if (value.length < userRequirements.passwordMinLen) {
            return `Password must be at least ${userRequirements.passwordMinLen} characters!`;
        }

        if (value.length > userRequirements.passwordMaxLen) {
            return `Password can be max ${userRequirements.passwordMaxLen} characters!`;
        }

        return true;
    },
    age: (value) => {
        if (value < userRequirements.ageMinVal) {
            return `Age must be at least ${userRequirements.ageMinVal}!`;
        }

        if (value > userRequirements.ageMaxVal) {
            return `Age can be max ${userRequirements.ageMaxVal}!`;
        }

        return true;
    },
    email: (value) => {
        if (!value.includes("@")) {
            return `Email must include "@" sign!`;
        }

        if (value.length < userRequirements.emailMinLen) {
            return `Email length must be at least ${userRequirements.emailMinLen} characters!`;
        }

        if (value.length > userRequirements.emailMaxLen) {
            return `Email length can be max ${userRequirements.emailMaxLen} characters!`;
        }

        return true;
    }
}


const userRequirements = {
    usernameMinLen: 3,
    usernameMaxLen: 20,
    passwordMinLen: 5,
    passwordMaxLen: 20,
    ageMinVal: 0,
    ageMaxVal: 120,
    emailMinLen: 5,
    emailMaxLen: 30
}