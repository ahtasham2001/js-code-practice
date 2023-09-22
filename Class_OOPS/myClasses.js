class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const hacK = new User("ahtasham", "ahtasham@gmail.com", "123")

console.log(hacK.encryptPassword());
console.log(hacK.changeUsername());