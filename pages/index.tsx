import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'
import HomeComponent from '../src/components/desktops/Home/HomeComponent'
export default function Home(){
    const public_ = Publics_()
    const router = useRouter()
    useEffect(()=>{
        if(!public_.library.checkLogin()){
            router.push(public_.url.PATH_LOGIN)
        }
    },[])
    return (
        <>  
            <MainContainer 
                tab={"home"} title={"Trang chủ"}>
                <HomeComponent />
            </MainContainer>
        </>
    )
}