import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import styleGlobals from '../styles/globals.module.scss'
import FooterComponent from '../src/components/mains/FooterComponent'
import { ToastContainer } from 'react-toastify'
import Background from '../src/components/uses/Background';
export default function App({Component, pageProps} : any){
    return (
        <>
            <Background />
            <div className={styleGlobals.screens}>
                
                <div className={styleGlobals.body}>
                    <Component {...pageProps} />
                </div>
                <FooterComponent/>
                <ToastContainer />
            </div>
        </>
        
    )
}