export function authenticationHandler(event: React.FormEvent<HTMLFormElement>, fields: any, view: string) {
    event.preventDefault();

    let {email, password} = fields;
    email = email.trim(); password = password.trim();

    if (!email || !password) {
        return alert("All fields are required!");
    }
    
    if (view === "Register") {
        let repeatPassword: string = fields["re-password"];
        repeatPassword = repeatPassword.trim();

        if (!repeatPassword) {
            return alert("All fields are required!");

        } else if (repeatPassword !== password) {
            return alert("Password and Repeat Password must match!");
        }
    }


}
