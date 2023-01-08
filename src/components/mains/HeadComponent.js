import Image from 'next/image'
import { useEffect, useState } from 'react'
import stylesGlobal from '../../../styles/globals.module.scss'
import Publics_ from '../../../utils/Publics'
import style from '../../../styles/head.module.scss'
import _style from '../../../styles/_head.module.scss'
import { Dropdown, Modal, ConfigProvider, Skeleton } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { addInfo } from '../../actions/action_info'
export default function HeadComponent(props){
    const publics = Publics_()
    const [dataInfoBasic,setDataInfoBasic] = useState({})
    const router = useRouter()
    const data = useSelector(state => state.info.list)
    const dispatch = useDispatch()
    const [loadingAvatar,setLoadingAvatar] = useState(true)
    useEffect(() => {
      setLoadingAvatar(true)
      if(data.length<=0){
        (async () => {
          publics.api.get(publics.url.URL_GET_PERSONAL_INFO,{
            balance:true
          }).then((data)=>{
            if(data?.status == publics.constant.SUCCESS){
              setDataInfoBasic(data.body.info)
              const action = addInfo(data.body)
              dispatch(action)
              setLoadingAvatar(false)
            }
          })

        })()
      }

    }, [])

    const confirm = () => {
        Modal.confirm({
          title: 'Cảnh báo',
          content: 'Bạn chắt chắn muốn đăng xuất?',
          onOk:(()=>{
            router.push(publics.url.PATH_LOGIN + "?session=expired")
          })
        });
      };

    const handleMenuClick = (e) => {
        switch(e.key){
            case "logout":
                confirm()
                break;
        }
      };

    const items = [
        {
          label: 'Đăng xuất',
          key: 'logout',
          icon: <LogoutOutlined />,
        },
      ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return(
        <>
        {
            !props.isMobile ?
            <ConfigProvider >
                <div className={stylesGlobal.headGroup}>
                    <div className={stylesGlobal.head}>
                      <img src='/images/logo_horizontal.png' className={stylesGlobal.logoHead} />
                      {
                        loadingAvatar &&
                          <Skeleton.Avatar
                            loading={false}
                            active={true}
                            shape={'circle'} />
                      }
                      {
                        !loadingAvatar &&
                        <Dropdown menu={menuProps}>
                          <Image
                            width={40}
                            height={40}
                            fallback={'/images/avatar_default.png'}
                            className={style.avatar}
                            src={dataInfoBasic.avatar?dataInfoBasic.avatar:'/images/avatar_default.png'} />
                        </Dropdown>
                      }
                    </div>
                </div>
            </ConfigProvider>
            :
            <ConfigProvider >
                <div className={stylesGlobal._headGroup}>
                    <div className={stylesGlobal._head}>
                        <img src='/images/logo_horizontal.png' className={stylesGlobal._logoHead} />
                        <div className={_style.moduleRight}>
                        <Dropdown menu={menuProps}>
                            <img className={_style.avatar} src={dataInfoBasic.avatar} />
                        </Dropdown>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        }
        </>
    )
}
