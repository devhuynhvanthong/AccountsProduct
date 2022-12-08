import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from '../src/components/mains/FooterComponent'
import { ToastContainer } from 'react-toastify'
import {useState,useEffect} from 'react'
import Publics_ from '../utils/Publics';
import LayoutComponnet from '../src/components/mains/LayoutComponent'
import { useRouter } from 'next/router';
export default function App({Component, pageProps} : any){
    const [isMobile,setMobile] = useState(false)
    const [client,setClient] = useState(false)
    const publics = Publics_()
    const Layout = Component.Layout || LayoutComponnet
    const router = useRouter()
    const [title,setTitle] = useState("")

    useEffect(()=>{
        console.log("Login",publics.library.checkLogin())
        if(!publics.library.checkLogin()){
            if(router.pathname!= "/" + publics.url.PATH_REGISTER){
                router.push(publics.url.PATH_LOGIN)
            }
        }else{
            if(Layout === Component.Layout){
                router.push("/")
            }
        }
        setMobile(!publics.library.isMobile())
        publics.library.setSessionStorageByKey("device",isMobile?"mobile":"desktop")
        setClient(true)
    },[])

    return (
        <>
            {
                client &&
                <div>
                    <Layout component={Component.Layout} isMobile={isMobile} title={title}>
                        <Component {...pageProps} params={{
                            isMobile:isMobile,
                            setTitle:setTitle}} />
                    </Layout>
                    <ToastContainer />
                </div>
            }
            
        </>
        
    )
}