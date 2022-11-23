import { useRouter } from "next/router";
import React,{useState, useEffect } from "react";
import Library from "../../../utils/Library";
import HeaderComponent from "./HeaderComponent";
import HeadComponent from "./HeadComponent";
import Urls from "../../../utils/Urls";
import styleGlobal from '../../../styles/globals.module.scss'
import Container from "react-bootstrap/Container";
import { HomeOutlined, 
  SafetyCertificateOutlined,
  UserOutlined,
  CreditCardOutlined,
  CloudServerOutlined,
  DoubleRightOutlined
} 
  from '@ant-design/icons';
import { Layout, Menu, Col, Row, Breadcrumb } from 'antd';
import Publics_ from "../../../utils/Publics";
import Home from "../../../pages";
import FooterComponent from "./FooterComponent";

type ParamMenu = {
  tab: "home" | "info" | "policy" | "payment" | "packet",
  title ?: String
}
const MainContainer: React.FC & ParamMenu = ({children,tab, title}) => {
    const publics = Publics_()
    const router = useRouter()
    const [breadcrumb,setBreadcrumb] = useState("Trang chủ")
    const [content,setContent] = useState(null)
    useEffect(()=>{
      if(!publics.library.checkLogin()){
        router.push(publics.url.PATH_LOGIN)
      }else{
        switch(tab){
          case "home":
            setBreadcrumb("Trang chủ")
            break
          case "info":
            setBreadcrumb("Thông tin cá nhân")
            break
          case "policy":
            setBreadcrumb("Bảo mật")
            break
          case "payment":
            setBreadcrumb("Thanh toán")
            break
          case "packet":
            setBreadcrumb("Các gói dịch vụ")
            break
        }
      }
    },[])
    const { Sider } = Layout;

    const items1 = ['1', '2', '3'].map((key) => ({
      key,
      label: `nav ${key}`,
    }));
    
    const items2 = [
      {
        key: 'home',
        label: 'Trang chủ',
        icon: <HomeOutlined />
      },
      {
        key: 'info',
        label: 'Thông tin cá nhân',
        icon: <UserOutlined />
      },
      {
        key: 'policy',
        label: 'Bảo mật',
        icon: <SafetyCertificateOutlined />
      },
      {
        key: 'payment',
        label: 'Thanh toán',
        icon: <CreditCardOutlined />
      },
      {
        key: 'packet',
        label: 'Các gói dịch vụ',
        icon: <CloudServerOutlined />
      }
      
    ]

    const onSelectMenuListener = (keys) =>{
      switch(keys){
        case "home":
          router.push("/")
          break
        case "info":
          router.push(publics.url.PATH_PERSONAL_INFO)
          break
        case "policy":
          router.push(publics.url.PATH_POLICY)
          break
        case "payment":
          router.push(publics.url.PATH_PAYMENT)
          break
        case "packet":
          router.push(publics.url.PATH_PACKET)
          break
      }
    }
    if(title!=undefined){
      title = title + " - "
    }else{
      title = ""
    }
    
    return(
        <>
          <HeaderComponent data={{title: title + "My Account"}} />
          {
            typeof window!= undefined?
              publics.library.checkLogin()?
                <div>
                  <HeadComponent />
                  <Container>
                    <Row>
                      <Col>
                        <Sider width={'15vw'}
                          className={styleGlobal.menuSider}>
                          <Menu
                            onSelect={(key_)=>onSelectMenuListener(key_.key)}
                            mode="inline"
                            defaultSelectedKeys={[tab]}
                            items={items2}
                            className={styleGlobal.childrenMenuSider}
                          />
                        </Sider>
                      </Col>
                      <Col>
                      <div className={styleGlobal.container}>
                        <Breadcrumb className={styleGlobal.breadcrumb}>
                          <Breadcrumb.Item><DoubleRightOutlined className={styleGlobal.breadcrumb} /> {breadcrumb}</Breadcrumb.Item>
                        </Breadcrumb>
                        <hr style={{width: '15vw', float:"left"}}/>
                        <div className={styleGlobal.wrapper}>
                          {children}
                          <FooterComponent/>
                        </div>
                      </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              :""
            : ""
          }
          
        </>
    )
}

export default MainContainer