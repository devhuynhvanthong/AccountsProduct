import { useRouter } from 'next/router'
import { useEffect,useState,useMemo } from 'react'
import useWindowDimensions from '../../src/components/uses/WindowDimensions'
import LoginDesktopComponent from '../../src/components/desktops/accounts/Login/LoginComponent'
import LoginMobileComponent from '../../src/components/mobiles/accounts/Login/LoginComponent'
import HeaderComponent from '../../src/components/mains/HeaderComponent'
import LayoutMobile from '../../src/components/mains/LayoutMobile'
import LayoutDesktop from '../../src/components/mains/LayoutDesktop'
import Publics_ from '../../utils/Publics'

export default function Login(){

    const publics = Publics_()
    const router = useRouter()
    const [errorPassword,setErrorPassword] = useState(publics.validation.FIELD_REQUIRED)
    const [errorUsername,setErrorUsername] = useState(publics.validation.FIELD_REQUIRED)
    const [isShowErrorPassword,setShowErrorPassword] = useState(false)
    const [isShowErrorUsername,setShowErrorUsername] = useState(false)
    const [isClickLogin,setClickLogin] = useState(true)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    let domain: string | string[] | undefined = undefined
    let {height_,width_} = useWindowDimensions()
    useEffect(()=> {
        if(publics.library.checkLogin()){
          router.push('/')
        }
        domain = router.query.domain
      },[])

      const tranferPageBeforLogin = async (event_:Event) => {
        if(domain != undefined){
            try{
                const query = await publics.api.post(publics.url.URL_GET_DOMAIN,{
                    code_service: domain
                },"")
                if(query.status==publics.constant.SUCCESS){
                    publics.library.startPageUrl(query.data)
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

    const handleLogin = async (event_: Event) => {
        if(isClickLogin){
            if (username.length <= 0) {
                setShowErrorUsername(true)
            }
    
            if (password.length <= 0) {
                setShowErrorPassword(true)
            }

            if (password.length > 0 && username.length > 0) {
                let body = {
                    username: username,
                    password: password
                }
                setClickLogin(false)
                let data = await publics.api.post(publics.url.URL_LOGIN, body)
                if(data.status==publics.constant.SUCCESS){
                    publics.library.createNotification(publics.constant.SUCCESS,publics.validation.LOGIN_SUCCES)
                    let data_ = {
                        accsessToken : data.data.data.accsess_token,
                        date: publics.library.getDateTime()
                    }
                    const keys = publics.constant.KEY_ACCESS_TOKEN
                    publics.cookie.Set(keys,data_)
                    tranferPageBeforLogin(event_)
                }else{
                    setClickLogin(true)
                    setPassword("")
                    publics.library.createNotification(publics.constant.ERROR,publics.validation.LOGIN_FAILED) 
                }
            }
        }        
    }

    const handleEnterPassword = (event_: any) => {
        setPassword(event_.target.value)
        setShowErrorPassword(false)
    }

    const handleEnterUsername = (event_: any) => {
        setUsername(event_.target.value)
        setShowErrorUsername(false)
    }

    const handleForgotPassword = () => {
        publics.library.createNotification(publics.constant.WARNING,publics.validation.FEATURE_NOT_DEVELOP)
    }
    
    const handleRegister = () => {
        router.push(publics.url.PATH_REGISTER)
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
        handleRegister: handleRegister
    }

    return(
        <>
            <HeaderComponent data={{title: "Login"}} />
            {
                publics.library.isMobile() 
                ? 
                <LayoutMobile> 
                    <LoginMobileComponent 
                        screens={{height_:height_, width_:width_}}
                        variables={variables}/>
                </LayoutMobile>
                : 
                <LayoutDesktop>
                    <LoginDesktopComponent 
                        screens={{height_:height_, width_:width_}}
                        variables={variables}/>
                </LayoutDesktop>    
            }
        </>
    )
}