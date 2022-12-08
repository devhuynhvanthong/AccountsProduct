import style from './style.module.scss'
import {Row, Col,Divider,Image, Skeleton, Avatar} from 'antd'
import {EuroCircleFilled,
    MenuUnfoldOutlined,
    UserOutlined,
    CheckCircleFilled,
    WarningFilled,
    ExclamationCircleFilled} from '@ant-design/icons';
const Home = (props) => {
    const params = props.params
    const data = props.data
    return (
        <>
            <div className={style.contentSpace}>
                <div>
                    <div className={style.avatarGroup}>
                        <Avatar  
                            className={style.avatar} 
                            src={data.avatar} />
                        <div className={style.labelWelcome}>Xin chào!</div>
                        <div className={style.txtName}>
                            <Skeleton 
                                className={style.skeleton} 
                                loading={data.name!=undefined?false:true}>
                                {data.name}
                            </Skeleton>
                        </div>
                    </div>
                </div>

                <div className={style.borderBalances}>
                    <div className={style.borderTitleModule}>
                        <span className={style.titleModule}>
                            <MenuUnfoldOutlined /> Thông tin số dư nạp vào
                        </span>
                        
                    </div>
                    <Divider className={style.divider}/>
                    <div className={style.childrenBorder}>
                        <Row gutter={24}>
                            <Col span={12}>
                                <div className={style.itemBalance}>
                                    <div className={style.labelBalance}>
                                        
                                        <span> Tổng số dư</span></div>
                                    <div className={style.contentBalance}><EuroCircleFilled className={style.iconBalance} /> 1000$</div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={style.itemBalance}>
                                    <div className={style.labelBalance}>
                                        
                                        <span>Số dư hiện có</span>    
                                    </div>
                                    <div className={style.contentBalance}><ExclamationCircleFilled className={style.iconBalance} /> 1000$</div>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row gutter={24}>
                            <Col span={12}>
                                <div className={style.itemBalance}>
                                    <div className={style.labelBalance}>
                                        
                                        <span> Số dư khả dụng</span>    
                                    </div>
                                    <div className={style.contentBalance}><CheckCircleFilled className={style.iconBalance} /> 1000$</div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={style.itemBalance}>
                                    <div className={style.labelBalance}>
                                        
                                        <span> Bị khóa</span>
                                    </div>
                                    <div className={style.contentBalance}><WarningFilled className={style.iconBalance} /> 1000$</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={style.chartGroup}>
                    <label className={style.labelChart}>
                        Biểu đồ thành phần
                    </label>
                    <div>
                        Chart
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home