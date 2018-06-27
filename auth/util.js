isAuthenticUser = (email, password) => {
    const user = {
        email: "example@example.com",
        password: "123"
    }

    if(email === user.email && password === user.password){
        return true
    }

    return false
}

module.exports = {
    isAuthenticUser
}