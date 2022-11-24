import React from "react"
import style from '../../../styles/style_desktop.module.scss'
export default function LayoutDesktop({children}) {

    return(
        <>
            <div className={style.container}>
                {children}
            </div>
        </>
    )
}