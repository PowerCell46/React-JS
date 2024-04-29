import { BASE_SERVER_URL } from "../utils/constants";
import { validateUserData } from "../utils/validator";


export function CreateEdit(props) {
  const view = props.userId === undefined ? "Create" : "Edit";

  const userData = view === "Edit" ? props.users.find(user => user._id === props.userId) : {};

  const hideCreateView = () => {
    props.setHiddenShownComp({...props.hiddenShownComp, createView: false});
    props.setSelectedUser(undefined);
  };

    return (
     <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>{view === "Create" ? "Add User" : "Edit User"}</h2>
            <button onClick={hideCreateView} className="btn close">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
          </header>
          <form onSubmit={ 
            (event) => createEditUserHandler(event, props.setUsers, hideCreateView, props.userId, props.setFilteredUsers)}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="firstName" name="firstName" type="text" defaultValue={view === "Edit" ? userData.firstName : ""}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="lastName" name="lastName" type="text" defaultValue={view === "Edit" ? userData.lastName : ""}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <input id="email" name="email" type="text" defaultValue={view === "Edit" ? userData.email : ""}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={view === "Edit" ? userData.phoneNumber : ""}/>
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span><i className="fa-solid fa-image"></i></span>
                <input id="imageUrl" name="imageUrl" type="text" defaultValue={view === "Edit" ? userData.imageUrl : ""}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="country" name="country" type="text" defaultValue={view === "Edit" ? userData.address.country : ""}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-city"></i></span>
                  <input id="city" name="city" type="text" defaultValue={view === "Edit" ? userData.address.city : ""}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="street" name="street" type="text" defaultValue={view === "Edit" ? userData.address.street : ""}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-house-chimney"></i></span>
                  <input id="streetNumber" name="streetNumber" type="text" defaultValue={view === "Edit" ? userData.address.streetNumber : ""}/>
                </div>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">Save</button>
              <button onClick={hideCreateView}  id="action-cancel" className="btn" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}


function createEditUserHandler(event, setUsers, hideCreateView, userId, setFilteredUsers) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let {firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber} = Object.fromEntries(data);
    firstName = firstName.trim(); lastName = lastName.trim(); email = email.trim(); phoneNumber = phoneNumber.trim();
    imageUrl = imageUrl.trim(); country = country.trim(); city = city.trim(); street = street.trim(); streetNumber = Number(streetNumber);

    const validUserData = validateUserData(firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber);

    if (validUserData !== true) {
      return alert(validUserData);
    }

    if (userId === undefined) {
      fetch(`${BASE_SERVER_URL}/users`, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
        {firstName, lastName, email, imageUrl, phoneNumber, createdAt: new Date(), updatedAt: new Date(), 
        address: {country, city, street, streetNumber}})  
      })
      .then(response => response.json())
      .then(data => {
        setUsers(prevVal => [...prevVal, data]);
        setFilteredUsers(prevVal => [...prevVal, data]);
        hideCreateView()})
      .catch(err => console.error(err));
    
    } else {
      fetch(`${BASE_SERVER_URL}/users/${userId}`, {
        method: "PATCH", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
        {firstName, lastName, email, imageUrl, phoneNumber, updatedAt: new Date(), 
        address: {country, city, street, streetNumber}})  
      })
      .then(response => response.json())
      .then(data => {
        setUsers(prevVal => [...prevVal.filter(u => u._id !== userId), data]);
        setFilteredUsers(prevVal => [...prevVal.filter(u => u._id !== userId), data]);
        hideCreateView();
      })
      .catch(err => console.error(err));
    }
}