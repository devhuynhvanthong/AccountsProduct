import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import { useEffect,useState } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'
import HomeDesktopComponent from '../src/components/desktops/Home/HomeComponent'
import HomeMobileComponent from '../src/components/mobiles/Home/HomeComponent'
import { useSelector } from 'react-redux'

const Home = (props: any) => {
    const params = props.params
    params.setTitle("Trang chủ")
    return (
        <>
        {
            !params.isMobile ?
            <HomeDesktopComponent
              params={props.params}/>:
            <HomeMobileComponent
              params={props.params} />
        }

        </>
    )
}
export default Home
