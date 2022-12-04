import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'
import HomeComponent from '../src/components/desktops/Home/HomeComponent'

const Home = (props: any) => {
    props.params.setTitle("Trang chủ")
    const public_ = Publics_()
    const router = useRouter()
    
    
    return (
        <>  
            <HomeComponent params={props.params}/>
        </>
    )
}
export default Home