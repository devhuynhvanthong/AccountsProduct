import style from './style.module.scss'
import styleGlobals from '../../../../../styles/globals.module.scss'
import { Input, Spin } from 'antd'
export default function LoginMobileComponents(props){
    const variables = props.variables
    return(
      <div className={style.wrapper}>
        <div className={style.formContent}>
          <div className={style.formContentChild}>
            <Spin
              style={{width: '100%'}}
              tip={"Đang tải..."}
              spinning={!variables.isClickLogin} >
              <div>
                <img
                  src="/images/logo.png"
                  className={style.logo}
                  alt={"Logo account aigoox"}/>
              </div>
              <div className={style.titileContent}>
                <span className={style.labelFrom}>Đăng nhập</span>
              </div>
              <div className={style.descriptionContent}>
                <span>Sử dụng tài khoản AiGooX của bạn!</span>
              </div>
              <div className={style.inputGroup}>
                <label className={style.label}>Tài khoản</label>
                <Input
                  className={style.input}
                  onKeyUp={variables.handleEnterLogin}
                  value={variables.username} onChange={(e) => variables.handleEnterUsername(e)}
                  placeholder="Nhập tài khoản của bạn..."
                  required
                  autoFocus/>
              </div>
              <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorUsername}>
                <p className={style.labelError}>{variables.errorUsername}</p>
              </div>
              <div className={style.inputGroup}>
                <label className={style.label}>Mật khẩu</label>
                <Input.Password
                  className={style.input}
                  onKeyUp={variables.handleEnterLogin}
                  value={variables.password}
                  onChange={(e) => variables.handleEnterPassword(e)}
                  placeholder="Nhập mật khẩu của bạn..." required />
              </div>
              <div className={style.labelNotificationGroup} hidden={!variables.isShowErrorPassword}>
                <p className={style.labelError}>{variables.errorPassword}</p>
              </div>
              <div className={style.buttonText}>
                <button className={style.buttonForgotPassword} onClick={()=> variables.handleForgotPassword()}>Quên mật khẩu</button>
              </div>

              <div className={style.buttonGroups}>
                <div className={style.buttonGroup}>
                  <button onClick={()=> variables.handleRegister()} className={`${style.labelButtonV1} ${style.labelButton}`}>
                    Đăng ký
                  </button>
                </div>

                <div className={style.buttonGroup}>
                  <button className={`${style.labelButtonV2} ${style.labelButtonV2}`} onClick={(e) => variables.handleLogin(e)}>
                    Đăng nhập
                  </button>
                </div>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    )
}
