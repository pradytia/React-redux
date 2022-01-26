const INITIAL_STATE = {
    username : '',
    password : '',
    loading :  false
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case 'USERNAME_LOGIN' :
            return { ...state, username :  action.payload}
        case 'PASSWORD_LOGIN' :
            return { ...state, password :  action.payload}
        case 'LOGIN_SUCCESS' :
            return INITIAL_STATE

            default :
                return state
    }
}