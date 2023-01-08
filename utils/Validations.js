export default function Validation(){
    const FIELD_REQUIRED = "Trường này là bắt buộc!"
    const FORMAT_LENGHT_PASSWORD = "Mật khẩu không được ngắn hơn 8 kí tự!"
    const LOGIN_SUCCESS = "Đăng nhập thành công!"
    const LOGIN_FAILED = "Đăng nhập thất bại!"
    const FEATURE_NOT_DEVELOP = "Tính năng chưa được phát triển!"
    const REGISTER_SUCCESS = "Đăng ký tài khoản thành công!"
    const REGISTER_FAILED = "Đăng ký thất bại!"
    const ERROR_ENTER_AGAIN_PASSWORD = "Xác nhận mật khẩu không khớp!"
    const ERROR_CURRENT_PASSWORD_INCORRECT = "Mật khẩu hiện tại không đúng!"
    const UPDATE_DATA_SUCCESS = 'Cập nhật dữ liệu thành công!'
    const UPDATE_DATA_FAILED = 'Cập nhật dữ liệu thất bại!'
    return {
        UPDATE_DATA_SUCCESS,
        UPDATE_DATA_FAILED,
        FIELD_REQUIRED,
        FORMAT_LENGHT_PASSWORD,
        LOGIN_SUCCESS,
        LOGIN_FAILED,
        FEATURE_NOT_DEVELOP,
        REGISTER_SUCCESS,
        REGISTER_FAILED,
        ERROR_ENTER_AGAIN_PASSWORD,
        ERROR_CURRENT_PASSWORD_INCORRECT
    }
}