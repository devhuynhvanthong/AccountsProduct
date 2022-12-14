import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import LoginDesktopComponent from '../../src/components/desktops/accounts/Login/LoginComponent'
import LoginMobileComponent from '../../src/components/mobiles/accounts/Login/LoginComponent'
import HeaderComponent from '../../src/components/mains/HeaderComponent'
import Publics_ from '../../utils/Publics'
import DefaultLayout from '../../src/components/mains/DefaultLayoutComponent'

export default function Login(props: any){
    const params = props.params
    params.setTitle("Đăng nhập")
    const publics = Publics_()
    const router = useRouter()
    const [errorPassword,setErrorPassword] = useState(publics.validation.FIELD_REQUIRED)
    const [errorUsername,setErrorUsername] = useState(publics.validation.FIELD_REQUIRED)
    const [isShowErrorPassword,setShowErrorPassword] = useState(false)
    const [isShowErrorUsername,setShowErrorUsername] = useState(false)
    const [isClickLogin,setClickLogin] = useState(true)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    // let domain: string | string[] | undefined = undefined
    //
    // useEffect(()=> {
    //     domain = router.query.domain
    //   },[])
    useEffect(()=>{

        if (router.isReady){
            const session = router.query.session
            if (session=='expired'){
                handleLogout()
            }
        }
    },[router.isReady])
    function handleLogout() {
        publics.api.post(publics.url.URL_LOGOUT,).then(response=>{
            if (response){
                if (response.status!=publics.constant.SUCCESS){

                    publics.library.createNotification(publics.constant.ERROR,"Đăng xuất thất bại!")
                }else{
                    publics.cookie.Remove(publics.constant.KEY_ACCESS_TOKEN)
                }
            }
        })
    }
    const tranferPageBeforLogin = async () => {
        const domain = router.query.domain
        if(domain != undefined){
            try{
                const query = await publics.api.get(publics.url.URL_GET_DOMAIN,{
                    code_service: domain
                })
                if(query.status==publics.constant.SUCCESS){
                    publics.library.startPageUrl(query.body)
                }else{
                    router.push("/")
                }
            }catch(e){
                router.push("/")
            }
          }else{
            router.push("/")
          }
    }

    const handleLogin = () => {
        if(isClickLogin){
            let browserName;

            if(navigator.userAgent.match(/chrome|chromium|crios/i)){
                browserName = "chrome";
            }else if(navigator.userAgent.match(/firefox|fxios/i)){
                browserName = "firefox";
            }  else if(navigator.userAgent.match(/safari/i)){
                browserName = "safari";
            }else if(navigator.userAgent.match(/opr\//i)){
                browserName = "opera";
            } else if(navigator.userAgent.match(/edg/i)){
                browserName = "edge";
            }else{
                browserName="none";
            }
            const username_ = document.getElementsByTagName('input')[0].value
            const password_ = document.getElementsByTagName('input')[1].value
            if (password_.toString().length > 0 && username_.toString().length > 0) {
                let body = {
                    username: username_,
                    password: password_,
                    browser: browserName,
                }
                setClickLogin(false)
                publics.api.post(publics.url.URL_LOGIN, body).then(data=>{

                    if(data?.status==publics.constant.SUCCESS){
                        if(data.category == publics.constant.VALIDATE){
                            publics.library.createNotification(publics.constant.ERROR,data.data)
                        }else{
                            publics.library.createNotification(publics.constant.SUCCESS,publics.validation.LOGIN_SUCCESS)
                        }
                        let data_ = {
                            accsessToken : data.body.accsess_token,
                            date: publics.library.getDateTime()
                        }
                        const keys = publics.constant.KEY_ACCESS_TOKEN
                        publics.cookie.Set(keys,data_)
                        tranferPageBeforLogin()
                    }else{
                        setPassword("")
                        if(data.category == publics.constant.VALIDATE){
                            publics.library.createNotification(publics.constant.ERROR,data.message)
                        }else{
                            publics.library.createNotification(publics.constant.ERROR,publics.validation.LOGIN_FAILED)
                        }
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
                .finally(() => setClickLogin(true))

            }else{
                if (username.toString().length <= 0) {
                    setShowErrorUsername(true)
                }

                if (password.toString().length <= 0) {
                    setShowErrorPassword(true)
                }
            }
        }
    }

    const handleEnterPassword = (event_: any) => {
        setPassword(event_.target.value.trim())
        setShowErrorPassword(false)
    }

    const handleEnterUsername = (event_: any) => {
        setUsername(event_.target.value.trim())
        setShowErrorUsername(false)
    }

    const handleForgotPassword = () => {
        publics.library.createNotification(publics.constant.WARNING,publics.validation.FEATURE_NOT_DEVELOP)
    }

    const handleRegister = () => {
        router.push(publics.url.PATH_REGISTER)
    }

    const handleEnterLogin = (event: any) => {
        if(event.key == 'Enter'){
            handleLogin()
        }
    }
    const variables = {
        password: password,
        setPassword: setPassword,
        username: username,
        setUsername: setUsername,
        setShowErrorUsername: setShowErrorUsername,
        setShowErrorPassword: setShowErrorPassword,
        errorPassword: errorPassword,
        errorUsername: errorUsername,
        setErrorUsername: setErrorUsername,
        setErrorPassword: setErrorPassword,
        setClickLogin: setClickLogin,
        isClickLogin:isClickLogin,
        isShowErrorPassword: isShowErrorPassword,
        isShowErrorUsername: isShowErrorUsername,
        handleLogin: handleLogin,
        handleEnterPassword: handleEnterPassword,
        handleEnterUsername: handleEnterUsername,
        handleForgotPassword: handleForgotPassword,
        handleRegister: handleRegister,
        handleEnterLogin: handleEnterLogin
    }
    return(
        <>
            <HeaderComponent data={{title: "Login"}} />
            {
                params.isMobile?
                <LoginMobileComponent
                    variables={variables}/>
                :
                <LoginDesktopComponent
                    variables={variables}/>
            }
        </>
    )
}

Login.Layout = DefaultLayout
