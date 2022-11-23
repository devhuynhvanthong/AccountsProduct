import {useEffect } from "react"
import { Spin } from "antd"
import style from './style.module.scss'
import styleGlobals from '../../../../../styles/globals.module.scss'
import Publics_ from "../../../../../utils/Publics"
import RedStar from '../../../../components/uses/RedStar'
export default function RegisterDesktopComponent(props){
    useEffect(()=>{
    },[])
    const publics = Publics_()
    const variables= props.variables
    return(
        <>
            <div className={style.wrapper}>
                <div className={style.formContent}>
                    <div className={style.formContentChild}>
                        <Spin 
                            tip={"Đang tải..."} 
                            spinning={!variables.isClickRegister} >
                                <div>
                                    <img src="images/logo_horizontal.png" className={style.logo}/>
                                </div>
                                
                                <div className={styleGlobals.titileContent}>
                                    <span>Tạo Tài khoản AiGooX</span>
                                </div>
                                <div className={style.inputGroup}>
                                    <label className={style.label}>Tài khoản <RedStar /></label>
                                    <input className={style.input} value={variables.username} onChange={(e) => variables.handleEnterUsername(e)} placeholder="Nhập tài khoản..." required />
                                </div>
                                <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorUsername}>
                                    <p className={style.labelError}>{variables.errorUsername}</p>
                                </div>
                                <div className={style.inputGroup}>
                                    <label className={style.label}>Mật khẩu <RedStar /></label>
                                    <input className={style.input} value={variables.password} onChange={(e) => variables.handleEnterPassword(e)} type='password' placeholder="Nhập mật khẩu..." required />
                                </div>
                                <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorPassword}>
                                    <p className={style.labelError}>{variables.errorPassword}</p>
                                </div>
                                <div className={style.inputGroup}>
                                    <label className={style.label}>Xác nhận mật khẩu <RedStar /></label>
                                    <input className={style.input} value={variables.againPassword} onChange={(e) => variables.handleEnterAgainPassword(e)} type='password' placeholder="Nhập lại mật khẩu vừa nhập..." required />
                                </div>
                                <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorAgainPassword}>
                                    <p className={style.labelError}>{variables.errorAgainPassword}</p>
                                </div>
                                <div className={style.buttonGroups}>
                                    <div className={style.buttonGroup}>
                                        <button onClick={()=> variables.handleLogin()} className={`${style.labelButtonV1} ${style.labelButton}`}>
                                            Đăng nhập
                                        </button>
                                    </div>

                                    <div className={style.buttonGroup}>
                                        <button className={`${style.labelButtonV2} ${style.labelButton}`} onClick={(e) => variables.handleRegister(e)}>
                                            Đăng ký
                                        </button>
                                        
                                    </div>
                                </div>
                        </Spin>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}