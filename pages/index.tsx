import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import useWindowDimensions from '../src/components/uses/WindowDimensions'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'

export default function Home(){
    let {height_,width_} = useWindowDimensions()
    const public_ = Publics_()
    const router = useRouter()
    useEffect(()=>{
        if(!public_.library.checkLogin()){
            router.push(public_.url.PATH_LOGIN)
        }
    },[])
    return (
        <>  
            <MainContainer screens={{height_:height_,width_:width_}}/>
        </>
    )
}