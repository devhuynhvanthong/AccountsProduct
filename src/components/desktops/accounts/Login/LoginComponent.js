import {useEffect } from "react"
import style from './style.module.scss'
import styleGlobals from '../../../../../styles/globals.module.scss'
import {Spin } from 'antd';
import Publics_ from "../../../../../utils/Publics"
export default function LoginDesktopComponents(props){
    useEffect(()=>{
    },[])
    const publics = Publics_()
    const variables= props.variables
    return(
        <>
            <div className={styleGlobals.wrapper}>
                <div className={style.formContent}>
                    <div className={style.formContentChild}>
                        <Spin 
                            tip={"Đang tải..."} 
                            spinning={!variables.isClickLogin} >
                                <div>
                                    <img src="images/logo.png" className={style.logo}/>
                                </div>
                                <div className={styleGlobals.titileContent}>
                                    <span>Đăng nhập</span>
                                </div>
                                <div className={styleGlobals.descriptionContent}>
                                    <span>Sử dụng tài khoản AiGooX của bạn!</span>
                                </div>
                                <div className={style.inputGroup}>
                                    <label className={style.label}>Tài khoản</label>
                                    <input className={style.input} onKeyUp={variables.handleEnterLogin} value={variables.username} onChange={(e) => variables.handleEnterUsername(e)} placeholder="Nhập tài khoản của bạn..." required />
                                </div>
                                <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorUsername}>
                                    <p className={style.labelError}>{variables.errorUsername}</p>
                                </div>
                                <div className={style.inputGroup}>
                                    <label className={style.label}>Mật khẩu</label>
                                    <input className={style.input} onKeyUp={variables.handleEnterLogin} value={variables.password} onChange={(e) => variables.handleEnterPassword(e)} type='password' placeholder="Nhập mật khẩu của bạn..." required />
                                </div>
                                <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorPassword}>
                                    <p className={style.labelError}>{variables.errorPassword}</p>
                                </div>
                                <div className={`${styleGlobals.buttonText} ${style.buttonForgotPassword}`}>
                                    <span onClick={()=> variables.handleForgotPassword()}>Quên mật khẩu</span>
                                </div>

                                <div className={style.buttonGroups}>
                                    <div className={style.buttonGroup}>
                                        <button onClick={()=> variables.handleRegister()} className={`${style.labelButtonV1} ${style.labelButton}`}>
                                            Đăng ký
                                        </button>
                                    </div>

                                    <div className={style.buttonGroup}>
                                        <button className={`${style.labelButtonV2} ${style.labelButton}`} onClick={(e) => variables.handleLogin(e)}>
                                            Đăng nhập
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