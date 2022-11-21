import { useRouter } from "next/router";
import { useEffect } from "react";
import Library from "../../../utils/Library";
import HeaderComponent from "./HeaderComponent";
import HeadComponent from "./HeadComponent";
import LayoutDesktop from './LayoutDesktop'
import LayoutMobile from './LayoutMobile'
import Login from "../../../pages/login";
import Urls from "../../../utils/Urls";
import styleGlobal from '../../../styles/globals.module.scss'
import Head from "next/head";
export default function MainContainer(props){
    const library = Library()
    const router = useRouter()
    const urls = Urls()
    useEffect(()=>{
      if(!library.checkLogin()){
        router.push(urls.PATH_LOGIN)
      }
    },[])
    return(
        <>
          <HeaderComponent data={{title: "My Account"}} />
          
          <div className={styleGlobal.wrapper}>
            <HeadComponent />
            <div>
              Content
            </div>
          </div>
        </>
    )
}