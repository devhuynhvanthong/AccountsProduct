import React from "react"
export default function LayoutMobile({children}){
    const isShow = true
    return(
        <>
            { isShow ?
                alert("Phiên bản chưa hỗ trợ mobile...!!!")
                :
                <main>
                    {children}
                </main>
            }
            
        </>
    )
}