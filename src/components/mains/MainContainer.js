import { useRouter } from "next/router";
import Ract,{useRef, useEffect } from "react";
import Library from "../../../utils/Library";
import HeaderComponent from "./HeaderComponent";
import HeadComponent from "./HeadComponent";
import Urls from "../../../utils/Urls";
import styleGlobal from '../../../styles/globals.module.scss'
import Container from "react-bootstrap/Container";
import { HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, Col, Row, Breadcrumb } from 'antd';
export default function MainContainer(props){
    const library = Library()
    const router = useRouter()
    const urls = Urls()
    const breadcrumb = useRef(<Breadcrumb>Trang chủ</Breadcrumb>)
    useEffect(()=>{
      if(!library.checkLogin()){
        router.push(urls.PATH_LOGIN)
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
        icon: <HomeOutlined />
      },
      {
        key: 'policy',
        label: 'Bảo mật',
        icon: <HomeOutlined />
      },
      {
        key: 'payment',
        label: 'Thanh toán',
        icon: <HomeOutlined />
      },
      {
        key: 'packet',
        label: 'Gói thuê bao',
        icon: <HomeOutlined />
      }
      
    ]

    const onSelectMenuListener = (keys) =>{
      switch(keys){
        case "home":
          breadcrumb.current = <Breadcrumb>Trang chủ</Breadcrumb>
          break
        case "info":
          breadcrumb.current = <Breadcrumb>Thông tin cá nhân</Breadcrumb>
          
          break
        case "policy":
          breadcrumb.current = <Breadcrumb>Bảo mật</Breadcrumb>
          break
        case "payment":
          breadcrumb.current = <Breadcrumb>Thanh toán</Breadcrumb>
          break
        case "packet":
          breadcrumb.current = <Breadcrumb>Gói thuê bao</Breadcrumb>
          break
      }
    }
    return(
        <>
          <HeaderComponent data={{title: "My Account"}} />
          
          <div className={styleGlobal.wrapper}>
            <HeadComponent />
            <Container>
              <Row>
                <Col>
                  <Sider width={'15vw'}
                    className={styleGlobal.menuSider}>
                    <Menu
                      onSelect={(key_)=>onSelectMenuListener(key_.key)}
                      mode="inline"
                      defaultSelectedKeys={['home']}
                      items={items2}
                      className={styleGlobal.childrenMenuSider}
                    />
                  </Sider>
                </Col>
                <Col>
                <div className={styleGlobal.container}>
                  {breadcrumb.current}
                  <h1>Hello</h1>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
    )
}