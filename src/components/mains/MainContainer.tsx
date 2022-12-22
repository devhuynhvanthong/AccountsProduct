import { useRouter } from "next/router";
import React,{useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import HeadComponent from "./HeadComponent";
import styleGlobal from '../../../styles/globals.module.scss'
import Container from "react-bootstrap/Container";
import { 
  HomeOutlined, 
  SafetyCertificateOutlined,
  UserOutlined,
  CreditCardOutlined,
  CloudServerOutlined,
  DoubleRightOutlined,
  SketchOutlined,
  WalletOutlined,
  DollarCircleOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { Layout, Menu, Col, Row, Breadcrumb } from 'antd';
import Publics_ from "../../../utils/Publics";
import FooterComponent from "./FooterComponent";

type ParamMenu = {
  children: React.ReactNode,
  title ?: String
}
const MainContainer: React.FC<ParamMenu> = ({children,title}) => {
    const publics = Publics_()
    const router = useRouter()
    const [breadcrumb,setBreadcrumb] = useState(<Breadcrumb.Item>Trang chủ</Breadcrumb.Item>)
    const [active,setActive] = useState(false)
    useEffect(()=>{
      if(!publics.library.checkLogin()){
        router.push(publics.url.PATH_LOGIN)
      }else{
        switch(router.pathname.split('/')[1]){
          case "/":
            setBreadcrumb(<Breadcrumb.Item>Trang chủ</Breadcrumb.Item>)
            break
          case "info":
            setBreadcrumb(<Breadcrumb.Item>Thông tin cá nhân</Breadcrumb.Item>)
            break
          case "policy":
            setBreadcrumb(<Breadcrumb.Item>Bảo mật</Breadcrumb.Item>)
            break
          case "payment":
            let br = <><Breadcrumb.Item>Thanh toán</Breadcrumb.Item> <Breadcrumb.Item>Phương thức thanh toán</Breadcrumb.Item></>
            switch(router.query.page){
              case "withdraw":
                br = <><Breadcrumb.Item>Thanh toán</Breadcrumb.Item> <Breadcrumb.Item>Rút tiền</Breadcrumb.Item></>
                break
              case "deposit":
                br = <><Breadcrumb.Item>Thanh toán</Breadcrumb.Item> <Breadcrumb.Item>Nạp tiền</Breadcrumb.Item></>
                break
              case "history-payment":
                br = <><Breadcrumb.Item>Thanh toán</Breadcrumb.Item> <Breadcrumb.Item>Lịch sử thanh toán</Breadcrumb.Item></>
                break
            }
            setBreadcrumb(br)
            break
          case "packet":
            setBreadcrumb(<Breadcrumb.Item>Các gói dịch vụ</Breadcrumb.Item>)
            break
        }
        if(router.isReady){
          setActive(true)
        }
      }
      
    },[router.query,router.pathname])
    
    const { Sider } = Layout;
    
    const items2 = [
      {
        key: 'home',
        label: <p className={styleGlobal.title}>Trang chủ</p>,
        icon: <HomeOutlined />
      },
      {
        key: 'info',
        label: <p className={styleGlobal.title}>Thông tin cá nhân</p>,
        icon: <UserOutlined />
      },
      {
        key: 'policy',
        label: <p className={styleGlobal.title}>Bảo mật</p>,
        icon: <SafetyCertificateOutlined />
      },
      {
        key: 'payment',
        label: <button className={styleGlobal.titleButton}>Thanh toán</button>,
        icon: <SketchOutlined />,
        children: [
          {
            key: 'method-payment',
            label: <p className={styleGlobal.titleChildren}>Phương thức thanh toán</p>,
            icon: <CreditCardOutlined />
          },
          {
            key: 'withdraw',
            label: <p className={styleGlobal.titleChildren}>Rút tiền</p>,
            icon: <WalletOutlined />
          },
          {
            key: 'deposit',
            label: <p className={styleGlobal.titleChildren}>Nạp tiền</p>,
            icon: <DollarCircleOutlined />
          },
          {
            key: 'history-payment',
            label: <p className={styleGlobal.titleChildren}>Lịch sử giao dịch</p>,
            icon: <FileDoneOutlined />
          }
        ]
      },
      {
        key: 'packet',
        label: <p className={styleGlobal.title}>Các gói dịch vụ</p>,
        icon: <CloudServerOutlined />
      }
      
    ]

    const onSelectMenuListener = (keys: any) =>{

      let path = ""
      switch(keys){
        case "home":
          path = "/"
          break
        case "info":
          path = publics.url.PATH_PERSONAL_INFO
          break
        case "policy":
          path = publics.url.PATH_POLICY
          break
        case "packet":
          path = publics.url.PATH_PACKET
          break
        case "method-payment":
          setChilrendPage(publics.url.PATH_METHOD_PAYMENT_)
          break
        case "withdraw":
          setChilrendPage(publics.url.PATH_WITHDRAW_)
          break
        case "deposit":
          setChilrendPage(publics.url.PATH_DEPOSIT_)
          break
        case "history-payment":
          setChilrendPage(publics.url.PATH_HISTORY_PAYMENT_)
          break
      }

      if(path != ""){
        router.push({
          pathname: path
        })
      }
    }

    const setChilrendPage = (_page:any) => {
      router.push({
          pathname: publics.url.PATH_PAYMENT,
          query:{
              page: _page
          }
      })
  }

  const getKeyPage = () => {

    switch (router.pathname.split('/')[1]) {
      case "/":
        return 'home'
      case "info":
        return 'info'
      case "policy":
        return 'policy'
      case "payment":
        switch(router.query.page){
          case "withdraw":
            return 'withdraw'
          case "deposit":
            return 'deposit'
          case "history-payment":
            return 'history-payment'
          default:
            return 'method-payment'
        }
      case "packet":
        return 'packet'
    }
  }

  return(
      <>
        <HeaderComponent data={{title: title}} />
        {
          active?
            publics.library.checkLogin()?
              <div>
                <HeadComponent isMobile={false}/>
                <Container>
                  <Row>
                    <Col>
                      <Sider width={'15vw'}
                        className={styleGlobal.menuSider}>
                        <Menu
                          onSelect={(key_)=>onSelectMenuListener(key_.key)}
                          mode="inline"
                          defaultOpenKeys={[router.pathname.split('/')[1]]}
                          defaultSelectedKeys={[getKeyPage() || 'home']}
                          items={items2}
                          className={styleGlobal.childrenMenuSider}
                        />
                      </Sider>
                    </Col>
                    <Col>
                    <div className={styleGlobal.container}>
                      <Breadcrumb className={styleGlobal.breadcrumb}>
                        <DoubleRightOutlined className={styleGlobal.iconBreadcrumb} /> 
                        {breadcrumb} 
                      </Breadcrumb>
                      <hr style={{width: '15vw', float:"left"}}/>
                      <div className={styleGlobal.wrapper}>
                        <div className={styleGlobal.body}>
                          {children}
                        </div>
                        <FooterComponent/>
                      </div>
                    </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            :<div/>
          :<div/>
        }
      </>
  )
}

export default MainContainer