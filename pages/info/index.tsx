
import InfoComponent from "../../src/components/desktops/Info/InfoComponent";
import { useEffect, useState } from "react";
import Publics_ from "../../utils/Publics";
import { useRouter } from "next/router";
export default function Info(){

    const [isMobile,setMobile] = useState(true)
    const publics = Publics_()
    const router = useRouter()
    useEffect(()=> {
        setMobile(publics.isMobile())
      },[])
    const variables = {
    }
    return (
        <>
            {
                isMobile? 
                ""
                : 
                <InfoComponent variables={variables} />
            }
        
        </>
    )
}