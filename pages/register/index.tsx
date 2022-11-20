import HeaderComponent from "../../src/components/mains/HeaderComponent";
import LayoutDesktop from "../../src/components/mains/LayoutDesktop";
import LayoutMobile from "../../src/components/mains/LayoutMobile";
import Publics_ from "../../utils/Publics";
import RegisterDesktopComponent from '../../src/components/desktops/accounts/Register/RegisterComponent'
import RegisterMobileComponent from '../../src/components/mobiles/accounts/Register/RegisterComponent'
import useWindowDimensions from "../../src/components/uses/WindowDimensions";
export default function Register(){
    const publics = Publics_()
    let {height_,width_} = useWindowDimensions()
    const variables = {}
    return(
        <>
            <HeaderComponent data={{title: "Register"}} />
            {
                publics.library.isMobile() 
                ? 
                <LayoutMobile> 
                    <RegisterMobileComponent
                        screens={{height_:height_, width_:width_}}
                        variables={variables}/>
                </LayoutMobile>
                : 
                <LayoutDesktop>
                    <RegisterDesktopComponent 
                        screens={{height_:height_, width_:width_}}
                        variables={variables}/>
                </LayoutDesktop>    
            }
        </>
    )
}