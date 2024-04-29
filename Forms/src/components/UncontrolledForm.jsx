export default function UncontrolledForm() {
    function submitHandler(event) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const {username, password, age} = Object.fromEntries(data);

        console.log(username, password, age);
    }

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={submitHandler}>
            
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age"/>
                </div>

                <button>Register</button>

            </form>
        </>
    )
}