
import InfoDesktopComponent from "../../src/components/desktops/Info/InfoComponent";
import { useEffect, useState } from "react";
import Publics_ from "../../utils/Publics";
import { useRouter } from "next/router";
export default function Info(props: any){
    const params = props.params
    params.setTitle("Thông tin cá nhân")
    const publics = Publics_()
    const router = useRouter()
    const variables = {
    }
    return (
        <>
            {
                params.isMobile? 
                ""
                : 
                <InfoDesktopComponent variables={variables} />
            }
        
        </>
    )
}