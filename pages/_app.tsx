import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import styleGlobals from '../styles/globals.module.scss'
import FooterComponent from '../src/components/mains/FooterComponent'
import { ToastContainer } from 'react-toastify'
import Background from '../src/components/uses/Background';
import {useState,useEffect} from 'react'
import LayoutMobile from '../src/components/mains/LayoutMobile';
import LayoutDesktop from '../src/components/mains/LayoutDesktop';
import Publics_ from '../utils/Publics';
import MainContainer from '../src/components/mains/MainContainer';
import { useRouter } from 'next/router';
import DefaultLayout from '../src/components/mains/DefaultLayoutComponent'
export default function App({Component, pageProps} : any){
    const [isMobile,setMobile] = useState(false)
    const [client,setClient] = useState(false)
    const publics = Publics_()
    const Layout = Component.Layout || MainContainer;
    const router = useRouter()
    const [title,setTitle] = useState("")
    useEffect(()=>{
        if(!publics.library.checkLogin()){
            router.push(publics.url.PATH_LOGIN)
        }
        setMobile(publics.library.isMobile())
        publics.library.setSessionStorageByKey("device",isMobile?"mobile":"desktop")
        setClient(true)
    },[])
    return (
        <>
            {
                client &&
                <div>
                    {/* <Background /> */}
                    <div className={styleGlobals.screens}>
                        <div className={styleGlobals.body}>
                            <Layout title={title}>
                                <Component {...pageProps} params={{
                                    isMobile:isMobile,
                                    setTitle:setTitle}} />
                            </Layout>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            }
            
        </>
        
    )
}