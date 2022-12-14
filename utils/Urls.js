export default function Urls(){
    const BASE_URL = "https://api-account.aigoox.com/"
    // const BASE_URL = "http://127.0.0.1:8000/"
    const BASE_URL_RESOURCES = "https://resources.aigoox.com/";
    const API = BASE_URL + "api/"

    const URL_LOGIN = API + "login"
    const URL_GET_DOMAIN = API + "get_domain"
    const URL_GET_PERSONAL_INFO = API + 'get_personal_info'
    const URL_REGISTER =  API + "register"
    const URL_LOGOUT = API + 'logout'
    const URL_GET_LOGIN_HISTORY = API + 'get_login_history'
    const URL_GET_HISTORY_CHANGE_PASSWORD = API + 'get_history_change_password'
    const URL_CHANGE_PASSWORD = API + 'change_password'


    const PATH_REGISTER = "register"
    const PATH_LOGIN = "login"
    const PATH_HOME = "home"
    const PATH_PERSONAL_INFO = "info"
    const PATH_LOGIN_HISTORY = "login-history"
    const PATH_PERMISSION_PRIMARY = "permission-primary"
    const PATH_SHARED = "shared"
    const PATH_PAYMENT = "payment"
    const PATH_INTRODUCE = "introduce"
    const PATH_POLICY = 'policy'
    const PATH_PACKET = 'packet'
    const PATH_METHOD_PAYMENT = PATH_PAYMENT + '/method-payment'
    const PATH_WITHDRAW = PATH_PAYMENT + '/withdraw'
    const PATH_DEPOSIT = PATH_PAYMENT + '/deposit'
    const PATH_HISTORY_PAYMENT = PATH_PAYMENT + '/history-payment'
    const PATH_METHOD_PAYMENT_ = 'method-payment'
    const PATH_WITHDRAW_ = 'withdraw'
    const PATH_DEPOSIT_ = 'deposit'
    const PATH_HISTORY_PAYMENT_ = 'history-payment'
    return {
        URL_CHANGE_PASSWORD,
        URL_GET_LOGIN_HISTORY,
        PATH_METHOD_PAYMENT_,
        PATH_WITHDRAW_,
        PATH_DEPOSIT_,
        PATH_HISTORY_PAYMENT_,
        PATH_HISTORY_PAYMENT,
        PATH_DEPOSIT,
        PATH_WITHDRAW,
        PATH_METHOD_PAYMENT,
        PATH_POLICY,
        PATH_PACKET,
        BASE_URL,
        URL_LOGIN,
        PATH_REGISTER,
        PATH_LOGIN,
        URL_GET_DOMAIN,
        URL_GET_PERSONAL_INFO,
        BASE_URL_RESOURCES,
        PATH_HOME,
        PATH_PERSONAL_INFO,
        PATH_LOGIN_HISTORY,
        PATH_PERMISSION_PRIMARY,
        PATH_SHARED,
        PATH_PAYMENT,
        PATH_INTRODUCE,
        URL_REGISTER,
        URL_LOGOUT,
        URL_GET_HISTORY_CHANGE_PASSWORD

    }
}
