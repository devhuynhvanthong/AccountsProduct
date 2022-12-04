import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Publics_ from "../../utils/Publics";

export default function Info(){
    const publics = Publics_()
    const router = useRouter()
    const [isMobile,setMobile] = useState(true)
    useEffect(()=> {
        setMobile(publics.isMobile())
      },[])
    const paymentDefault = () =>{
        router.push(publics.url.PATH_METHOD_PAYMENT)
    }
    return (
        <>
        {isMobile?"":paymentDefault()}
        </>
    )
}