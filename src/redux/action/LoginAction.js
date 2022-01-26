export const inputUsernameLogin = (username) => {
    return {
        type : 'USERNAME_LOGIN',
        payload : username
    }
}

export const inputPasswordLogin = (password) => {
    return{
        type : 'PASSWORD_LOGIN',
        payload : password
    }
} 