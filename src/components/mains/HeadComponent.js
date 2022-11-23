import Image from 'next/image'
import { useEffect, useState } from 'react'
import stylesGlobal from '../../../styles/globals.module.scss'
import Publics_ from '../../../utils/Publics'
import style from '../../../styles/head.module.scss'
import {Dropdown} from 'antd'
import {LogoutOutlined} from '@ant-design/icons';
export default function HeadComponent(){
    const publics = Publics_()
    const [dataInfoBasic,setDataInfoBasic] = useState({})

    useEffect(() => {
        (async () => {
            publics.api.post(publics.url.URL_GET_PERSONAL_INFO).then((data)=>{
                if(data.status == publics.constant.SUCCESS){
                    setDataInfoBasic(data.data.data[0])
                }
            })

        })()
    }, [])

    const handleMenuClick = (e) => {
        console.log('click', e);
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
            <div className={stylesGlobal.headGroup}>
                <div className={stylesGlobal.head}>
                    <img src='images/logo_horizontal.png' className={stylesGlobal.logoHead} />
                    <div className={style.moduleRight}>
                    <Dropdown menu={menuProps}>
                        <img className={style.avatar} src={dataInfoBasic.avatar} />
                    </Dropdown>
                    </div>
                </div>
            </div>
        </>
    )
}