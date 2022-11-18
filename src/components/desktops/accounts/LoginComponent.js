
export default function LoginComponents(){
    return(
        <>
            <div 
            style={
                {
                    overflow: 'auto',
                    height: height_,
                    width: width_
                }
            }
                className="content-center">
                <div className='boderForm'>
                    <div className='form-group-child'>
                        <div>
                            <img src="images/logo.png" className='logo-150'/>
                        </div>
                        <div className='title'>
                            <span>Đăng nhập</span>
                        </div>
                        <div className='message'>
                            <span>Sử dụng tài khoản AiGooX của bạn!</span>
                        </div>
                        <div className='form-group'>
                            <input className='input' onChange={(e) => handleEnterUsername(e)} id='username' required />
                            <label className='label-input'>Tài khoản</label>
                        </div>
                        <div id='label-error-username' className='label-notification-group' hidden={isShowErrorUsername}>
                            <p className='label-error'>{errorUsername}</p>
                        </div>
                        <div className='form-group'>
                            <input className='input' onChange={(e) => handleEnterPassword(e)} type='password' id='password' required />
                            <label className='label-input'>Mật khẩu</label>
                        </div>
                        <div id='label-error-password' className='label-notification-group' hidden={isShowErrorPassword}>
                            <p className='label-error'>{errorPassword}</p>
                        </div>
                        <div className='forgot-password'>
                            <a onClick={()=>handleForgotPassword()}>Quên mật khẩu</a>
                        </div>

                        <div className='button-groups'>
                            <div className='button-group'>
                                <button className='label-button label-button-v1'>
                                    Đăng ký
                                </button>
                            </div>

                            <div className='button-group'>
                                <button className='label-button label-button-v2' onClick={(e) => handleLogin(e)}>Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                    {/* <LoadingForm isShow={isClickLogin} /> */}
                </div>
            </div>
        </>
    )
}