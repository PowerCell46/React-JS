import { userDataReq } from "./constants";


export function validateUserData(firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber) {
    if (firstName.length < userDataReq.firstNameMinLen || firstName.length > userDataReq.firstNameMaxLen) {
        return `First Name length must be between ${userDataReq.firstNameMinLen} and ${userDataReq.firstNameMaxLen}!`;
    }

    if (lastName.length < userDataReq.lastNameMinLen || lastName.length > userDataReq.lastNameMaxLen) {
        return `Last Name length must be between ${userDataReq.lastNameMinLen} and ${userDataReq.lastNameMaxLen}!`;
    }

    if (!email.includes("@") || email.length < userDataReq.emailMinLen || email.length > userDataReq.emailMaxLen) {
        return `Email must contain "@" sign and the length must be between ${userDataReq.emailMinLen} and ${userDataReq.emailMaxLen}!`;
    }

    if (phoneNumber.length !== userDataReq.phoneNumberLength || phoneNumber.split("").filter(d => d.charCodeAt(0) >= 48 && d.charCodeAt(0) <= 57).length !== userDataReq.phoneNumberLength) {
        return `Phone Number length must be ${userDataReq.phoneNumberLength} and must consist only of numbers!`;
    } 

    if (!imageUrl.startsWith(userDataReq.imageUrlStart[0]) && !imageUrl.startsWith(userDataReq.imageUrlStart[1])) {
        return `ImageUrl must start either with ${userDataReq.imageUrlStart[0]} either with ${userDataReq.imageUrlStart[1]}!`;
    }

    if (country.length < userDataReq.countryMinLen || country.length > userDataReq.countryMaxLen) {
        return `Country length must be between ${userDataReq.countryMinLen} and ${userDataReq.countryMaxLen}!`;
    }

    if (city.length < userDataReq.cityMinLen || city.length > userDataReq.cityMaxLen) {
        return `City length must be between ${userDataReq.cityMinLen} and ${userDataReq.cityMaxLen}!`;
    }

    if (street.length < userDataReq.streetMinLen || street.length > userDataReq.streetMaxLen) {
        return `Street length must be between ${userDataReq.streetMinLen} and ${userDataReq.streetMaxLen}!`;
    }

    if (streetNumber < userDataReq.streetNumMinVal || streetNumber > userDataReq.streetNumMaxVal) {
        return `StreetNumber must be between ${userDataReq.streetNumMinVal} and ${userDataReq.streetNumMaxVal}!`;
    }

    return true;
}