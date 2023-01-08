import React from "react"
import styleGlobals from '../../../styles/globals.module.scss'
import MainDesktopContainer from '../../../src/components/mains/MainContainer';
import MainMobileContainer from '../../../src/components/mains/_MainContainer';
import { Provider } from 'react-redux'
import store from '../../store'
type Params = {
    children: React.ReactNode,
    title ?: String,
    isMobile: boolean
  }
const LayoutComponent  : React.FC<Params>  = ({children,isMobile,title}) =>{

    return(
        <>
            <Provider store={store}>
                {
                    !isMobile ?
                      <div className={styleGlobals.screens}>
                        <MainDesktopContainer title={title}>
                          {children}
                        </MainDesktopContainer>
                      </div> :
                      <div className={styleGlobals.screens_}>
                          <div className={styleGlobals.body_}>
                              <MainMobileContainer title={title}>
                                  {children}
                              </MainMobileContainer>
                          </div>
                      </div>
                }
            </Provider>
        </>
    )
}

export default LayoutComponent