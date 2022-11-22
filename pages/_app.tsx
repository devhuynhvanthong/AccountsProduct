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
export default function App({Component, pageProps} : any){
    const [isMobile,setMobile] = useState(false)
    const publics = Publics_()
    useEffect(()=>{
        setMobile(publics.library.isMobile())
        publics.library.setSessionStorageByKey("device",isMobile?"mobile":"desktop")
    },[])
    const Layout = Component.Layout || MainContainer
    return (
        <>
            <Background />
            <div className={styleGlobals.screens}>
                
                <div className={styleGlobals.body}>
                        {
                            isMobile?
                            <LayoutMobile>
                                <Component {...pageProps} />
                            </LayoutMobile>
                            :
                            <LayoutDesktop>
                                <Component {...pageProps} />
                            </LayoutDesktop>
                        }
                    
                </div>
                <FooterComponent/>
                <ToastContainer />
            </div>
        </>
        
    )
}