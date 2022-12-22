import style from './style.module.scss'
import {Row, Col,Divider} from 'antd'
import {EuroCircleFilled,
    MenuUnfoldOutlined,
    CheckCircleFilled,
    WarningFilled,
    ExclamationCircleFilled} from '@ant-design/icons';
const Home = (props) => {
    const params = props.params
    return (
        <>
            <div className={style.contentSpace}>
                <div className={style.borderBalances}>
                    <div className={style.borderTitleModule}>
                        <span className={style.titleModule}>
                            <MenuUnfoldOutlined /> Thông tin số dư nạp vào
                        </span>
                        <Divider className={style.divider}/>
                        </div>
                            <Row gutter={24}>
                                <Col span={6}>
                                    <div>
                                        <div className={style.labelBalance}>
                                            <EuroCircleFilled className={style.iconBalance} />
                                            <span> Tổng số dư</span></div>
                                        <div className={style.contentBalance}>1000$</div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div>
                                        <div className={style.labelBalance}>
                                            <ExclamationCircleFilled className={style.iconBalance} />
                                            <span> Số dư hiện có</span>    
                                        </div>
                                        <div className={style.contentBalance}>1000$</div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div>
                                        <div className={style.labelBalance}>
                                            <CheckCircleFilled className={style.iconBalance} />
                                            <span> Số dư khả dụng</span>    
                                        </div>
                                        <div className={style.contentBalance}>1000$</div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div>
                                        <div className={style.labelBalance}>
                                            <WarningFilled className={style.iconBalance} />
                                            <span> Bị khóa</span>
                                        </div>
                                        <div className={style.contentBalance}>1000$</div>
                                    </div>
                                </Col>
                            </Row>
                        <div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home