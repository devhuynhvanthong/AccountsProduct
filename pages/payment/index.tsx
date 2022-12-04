import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainContainer from "../../src/components/mains/MainContainer";
import Publics_ from "../../utils/Publics";
import MethodPayment from "./method-payment/MethodPayment";
import Withdraw from "./withdraw/withdraw";

const Payment = (props: any) => {
    const publics = Publics_()
    const router = useRouter()
    const pages = router.query
    const params = props.params
    useEffect(()=>{
        if(pages.page===undefined && router.isReady){
            router.push({
                query:{
                    page: publics.url.PATH_METHOD_PAYMENT_
                }
            })
        }
        switch(pages.page){
            case publics.url.PATH_WITHDRAW_:
                params.setTitle("Rút tiền")
                break;
            case publics.url.PATH_DEPOSIT_:
                params.setTitle("Nạp tiền")
                break;
            case publics.url.PATH_HISTORY_PAYMENT_:
                params.setTitle("Lịch sử thanh toán")
                break;
            default:
                params.setTitle("Phương thức thanh toán")
                break;
        }
    },[pages])

    return (
        <>
            {
                pages.page===publics.url.PATH_WITHDRAW_?
                <Withdraw/>:
                <MethodPayment/>
            }
        </>
    )
}
Payment.Layout = MainContainer
export default Payment