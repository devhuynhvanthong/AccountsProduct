import React from "react"
import style from '../../../styles/style_desktop.module.scss'
export default function LayoutMobile({children}){
    const isShow = true
    return(
        <>
            <div className={style.container}>
                {children}
            </div>
        </>
    )
}