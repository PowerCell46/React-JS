export const userDataReq = {
    firstNameMinLen: 3,
    firstNameMaxLen: 25,
    lastNameMinLen: 3,
    lastNameMaxLen: 30,
    emailMinLen: 5,
    emailMaxLen: 35,
    phoneNumberLength: 10,
    imageUrlStart: ['http://', 'https://'],
    countryMinLen: 3,
    countryMaxLen: 20,
    cityMinLen: 1,
    cityMaxLen: 30,
    streetMinLen: 3,
    streetMaxLen: 20,
    streetNumMinVal: 0,
    streetNumMaxVal: 200
}


export const BASE_SERVER_URL = `http://localhost:3030/jsonstore`;