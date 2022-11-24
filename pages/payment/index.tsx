import { useRouter } from "next/router";
import MainContainer from "../../src/components/mains/MainContainer";

export default function Info(){
    const router = useRouter()
    return (
        <>
        <MainContainer tab={"payment"} title={"Thanh toán"}>
            <span>Thanh toán</span>
        </MainContainer>
        </>
    )
}