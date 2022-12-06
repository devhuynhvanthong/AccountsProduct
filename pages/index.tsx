import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'
import HomeComponent from '../src/components/desktops/Home/HomeComponent'

const Home = (props: any) => {
    props.params.setTitle("Trang chủ")
    const publics = Publics_()
    const router = useRouter()
    console.log("COOKIE",publics.cookie.Get(publics.constant.KEY_ACCESS_TOKEN,true))
    
    return (
        <>  
            <HomeComponent params={props.params}/>
        </>
    )
}
export default Home