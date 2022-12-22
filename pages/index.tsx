import styleGlobals from '../styles/globals.module.scss'
import MainContainer from '../src/components/mains/MainContainer'
import FooterComponent from '../src/components/mains/FooterComponent'
import { useEffect,useState } from "react";
import { useRouter } from 'next/router';
import Publics_ from '../utils/Publics'
import HomeDesktopComponent from '../src/components/desktops/Home/HomeComponent'
import HomeMobileComponent from '../src/components/mobiles/Home/HomeComponent'

const Home = (props: any) => {
    const params = props.params
    params.setTitle("Trang chủ")
    const publics = Publics_()
    const [dataInfoBasic,setDataInfoBasic] = useState({})
    useEffect(()=>{
        (async () => {
            publics.api.post(publics.url.URL_GET_PERSONAL_INFO,
                {
                    balance:true
                }
                ).then((data)=>{
                if(data.status == publics.constant.SUCCESS){
                    setDataInfoBasic(data.data.data[0])
                }
            })
        })()
    },[])
    return (
        <>  
        {
            !params.isMobile ?
            <HomeDesktopComponent params={props.params}/>:
            <HomeMobileComponent 
                data={dataInfoBasic} 
                params={props.params} />
        }
            
        </>
    )
}
export default Home