import React from "react"
export default function LayoutMobile({children}){

    
    console.log("Mobile")
    return(
        <>
            <main>
            {children}
            </main>
        </>
    )
}