import { useRouter } from "next/router";
import React,{useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import style from '../../../styles/_head.module.scss'
import Container from "react-bootstrap/Container";
import { Layout, Menu, Col, Row, Breadcrumb } from 'antd';
import Publics_ from "../../../utils/Publics";
import icHome from '../../assets/images/icon_home.png'
import icInfo from '../../assets/images/icon_info.png'
import icPayment from '../../assets/images/icon_payment.png'
import icPolicy from '../../assets/images/icon_policy.png'
import icPacket from '../../assets/images/icon_packet.png'
import Image from "next/image";
import styleGlobal from '../../../styles/globals.module.scss'
import FooterComponent from "./FooterComponent";

type ParamMenu = {
  children: React.ReactNode,
  title ?: String
}
const MainContainer: React.FC<ParamMenu> = ({children,title}) => {
    const publics = Publics_()
    const router = useRouter()
    const [selected,setSelected] = useState('home')
    const [active,setActive] = useState(false)
    useEffect(()=>{
      
      if(!publics.library.checkLogin()){
        router.push(publics.url.PATH_LOGIN)
      }else{
        if(router.pathname.split('/')[1]==""){
          setSelected('home')
        }else{
          setSelected(router.pathname.split('/')[1])
        }
        if(router.isReady){
          setActive(true)
        }
      }
      
    },[router.query,router.pathname])
    const { Sider } = Layout;

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
        case "payment":
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
                <Container>
                  <Row>
                    <Col>
                      <Sider className={style.siderHeader} width={'100vw'}>
                          <Menu
                            onSelect={(key_)=>onSelectMenuListener(key_.key)}
                            mode="horizontal"
                            defaultOpenKeys={[router.pathname.split('/')[1]]}
                            defaultSelectedKeys={[getKeyPage() || 'home']}
                            className={style.childrenMenuSider}
                          >
                            <Menu.Item key={'home'} >
                              <div className={style.itemMenu}>
                                <div className={style.iconItemMenuGroup}>
                                  <Image className={style.iconItemMenu} alt="page home" src={icHome} />
                                </div>
                                <div>
                                  <span className={style.labelItemMenu}>Trang chủ</span>
                                </div>
                                {
                                  selected=='home' &&
                                  <div className={style.inlineSelected}/>
                                }
                              </div>
                            </Menu.Item>

                            <Menu.Item className={style.item} key={'info'} title={false}>
                              <div className={style.itemMenu}>
                                <div className={style.iconItemMenuGroup}>
                                  <Image className={style.iconItemMenu} alt="page home" src={icInfo} />
                                </div>
                                <div>
                                  <span className={style.labelItemMenu}>Thông tin cá nhân</span>
                                </div>
                                {
                                  selected=='info'&&
                                  <div className={style.inlineSelected}/>
                                }
                              </div>
                            </Menu.Item>

                            <Menu.Item key={'policy'}>
                              <div className={style.itemMenu}>
                                <div className={style.iconItemMenuGroup}>
                                  <Image className={style.iconItemMenu} alt="page home" src={icPolicy} />
                                </div>
                                <div>
                                  <span className={style.labelItemMenu}>Bảo mật</span>
                                </div>
                                {
                                  selected=='policy'&&
                                  <div className={style.inlineSelected}/>
                                }
                              </div>
                            </Menu.Item>

                            <Menu.Item key={'payment'}>
                              <div className={style.itemMenu}>
                                <div className={style.iconItemMenuGroup}>
                                  <Image className={style.iconItemMenu} alt="page home" src={icPayment} />
                                </div>
                                <div>
                                  <span className={style.labelItemMenu}>Thanh toán</span>
                                </div>
                                {
                                  selected=='payment'&&
                                  <div className={style.inlineSelected}/>
                                }
                              </div>
                            </Menu.Item>

                            <Menu.Item key={'packet'}>
                              <div className={style.itemMenu}>
                                <div className={style.iconItemMenuGroup}>
                                  <Image className={style.iconItemMenu} alt="page home" src={icPacket} />
                                </div>
                                <div>
                                  <span className={style.labelItemMenu}>Các gói dịch vụ</span>
                                </div>
                                {
                                  selected=='packet'&&
                                  <div className={style.inlineSelected}/>
                                }
                              </div>
                            </Menu.Item>

                          </Menu>
                      </Sider>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div className={styleGlobal._container}>
                      <div className={styleGlobal._wrapper}>
                        <div className={styleGlobal._body}>
                          {children}
                        </div>
                        {/* <FooterComponent/> */}
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