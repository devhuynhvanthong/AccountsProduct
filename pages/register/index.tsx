import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import HeaderComponent from "../../src/components/mains/HeaderComponent";
import Publics_ from "../../utils/Publics";
import RegisterDesktopComponent from '../../src/components/desktops/accounts/Register/RegisterComponent'
import RegisterMobileComponent from '../../src/components/mobiles/accounts/Register/RegisterComponent'
export default function Register(){
    
    const [isMobile,setMobile] = useState(true)
    const publics = Publics_()
    const router = useRouter()
    const [errorPassword,setErrorPassword] = useState(publics.validation.FIELD_REQUIRED)
    const [errorUsername,setErrorUsername] = useState(publics.validation.FIELD_REQUIRED)
    const [errorAgainPassword,setErrorAgainPassword] = useState(publics.validation.ERROR_ENTER_AGAIN_PASSWORD)
    const [isShowErrorPassword,setShowErrorPassword] = useState(false)
    const [isShowErrorUsername,setShowErrorUsername] = useState(false)
    const [isShowErrorAgainPassword, setShowErrorAgainPassword] = useState(false)
    const [isClickRegister,setClickRegister] = useState(true)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [againPassword,setAgainPassword] = useState("")
    useEffect(()=> {
        if(publics.library.checkLogin()){
            router.push('/')
        }else{
            setMobile(publics.isMobile())
        }
      },[])

    const handleRegister = async (event_: Event) => {
        if(isClickRegister){
            
            if (password.length > 0 && username.length > 0 && againPassword.length > 0 && password === againPassword) {
                let body = {
                    username: username,
                    password: password
                }
                setClickRegister(false)
                let data = await publics.api.post(publics.url.URL_REGISTER, body)
                if(data.status==publics.constant.SUCCESS){
                    publics.library.createNotification(publics.constant.SUCCESS,publics.validation.REGISTER_SUCCESS)
                    router.push(publics.url.PATH_LOGIN)
                }else{
                    setClickRegister(true)
                    setPassword("")
                    setAgainPassword("")
                    if(data.category === publics.constant.VALIDATE){
                        publics.library.createNotification(publics.constant.ERROR,data.data)
                    }else{
                        publics.library.createNotification(publics.constant.ERROR,publics.validation.REGISTER_FAILED)
                    }
                }
            }else{
                if (username.length <= 0) {
                    setShowErrorUsername(true)
                }
        
                if (password.length <= 0) {
                    setShowErrorPassword(true)
                }
                else{
                    if(password!=againPassword){
                        setShowErrorAgainPassword(true)
                    }
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

    const handleEnterAgainPassword = (event_: any) => {
        setAgainPassword(event_.target.value.trim())
        setShowErrorAgainPassword(false)
    }

    const handleLogin = () => {
        router.push(publics.url.PATH_LOGIN)
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
        setClickRegister: setClickRegister,
        isClickRegister:isClickRegister,
        isShowErrorPassword: isShowErrorPassword,
        isShowErrorUsername: isShowErrorUsername,
        handleEnterPassword: handleEnterPassword,
        handleEnterUsername: handleEnterUsername,
        handleRegister: handleRegister,
        errorAgainPassword: errorAgainPassword,
        setErrorAgainPassword: setErrorAgainPassword,
        isShowErrorAgainPassword: isShowErrorAgainPassword,
        setShowErrorAgainPassword: setShowErrorAgainPassword,
        againPassword: againPassword,
        setAgainPassword: setAgainPassword,
        handleEnterAgainPassword: handleEnterAgainPassword,
        handleLogin: handleLogin

    }
    return(
        <>
            <HeaderComponent data={{title: "Register"}} />
            {
                isMobile 
                ? 
                <RegisterMobileComponent
                    variables={variables}/>
                : 
                <RegisterDesktopComponent
                    variables={variables}/>  
            }
        </>
    )
}