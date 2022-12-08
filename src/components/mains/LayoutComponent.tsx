import React from "react"
import styleGlobals from '../../../styles/globals.module.scss'
import MainDesktopContainer from '../../../src/components/mains/MainContainer';
import MainMobileContainer from '../../../src/components/mains/_MainContainer';
type Params = {
    children: React.ReactNode,
    title ?: String,
    isMobile: boolean
  }
const LayoutComponent  : React.FC<Params>  = ({children,isMobile,title}) =>{

    return(
        <>
            {
                !isMobile ?
                    <div className={styleGlobals.screens}>
                        <div className={styleGlobals.body}>
                            <MainDesktopContainer title={title}>
                                {children}
                            </MainDesktopContainer>
                        </div>
                    </div> :
                    <div className={styleGlobals.screens_}>
                        <div className={styleGlobals.body_}>
                            <MainMobileContainer title={title}>
                                {children}
                            </MainMobileContainer>
                        </div>
                    </div>
            }
        </>
    )
}

export default LayoutComponent