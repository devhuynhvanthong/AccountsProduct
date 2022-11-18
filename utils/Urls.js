export default function Urls(){
    const BASE_URL = "https://devaccounts.aigoox.com"
    const BASE_URL_RESOURCES = "https://resources.aigoox.com/";
    const API = BASE_URL + "/backend/api/"

    const URL_LOGIN = API + "login"
    const URL_GET_DOMAIN = API + "get_domain"
    const URL_GET_PERSONAL_INFO = API + 'get_personal_info'

    const PATH_REGISTER = "register"
    const PATH_LOGIN = "login"
    const PATH_HOME = "home"
    const PATH_PERSONAL_INFO = "personal-info"
    const PATH_LOGIN_HISTORY = "login-history"
    const PATH_PERMISSION_PRIMARY = "permission-primary"
    const PATH_SHARED = "shared"
    const PATH_PAYMENT_METHODS = "payment-methods"
    const PATH_PAYMENT_HISTORY = "payment-history"
    const PATH_INTRODUCE = "introduce"
    
    return {
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
        PATH_PAYMENT_METHODS,
        PATH_PAYMENT_HISTORY,
        PATH_INTRODUCE
        
    }
}