import style from './style.module.scss'
import {Row, Col,Divider,Image, Skeleton, Avatar} from 'antd'
import React, { useState, useEffect } from 'react';
import {EuroCircleFilled,
    MenuUnfoldOutlined,
    UserOutlined,
    CheckCircleFilled,
    WarningFilled,
    ExclamationCircleFilled} from '@ant-design/icons';
import PieChart from '../../mains/PieChart'
import { useRouter } from 'next/router';
const Home = (props) => {
    const router = useRouter()
    const params = props.params
    const data = props.data
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        if(data!=undefined && router.isReady){
            setLoading(false)
        }else{
            setLoading(true)
        }
    },[data])
    return (
        <>
            <div className={style.contentSpace}>
                <div>
                    <div className={style.avatarGroup}>
                        <Skeleton
                        round={100}
                        avatar
                        active
                        style={{
                            position: 'relative',
                            left: '50vw',
                            transform: 'translateX(-50%)',
                            width:'20vw', 
                            height:'20vw'}}
                        loading={loading}>
                                <Avatar 
                                 
                            className={style.avatar} 
                            src={data.avatar} />
                            <div className={style.labelWelcome}>Xin chào!</div>
                            <div className={style.txtName}>
                                {data.name}
                            </div>
                        </Skeleton>
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
                        {
                            loading?
                            <Skeleton.Avatar
                            active
                            style={{
                                width:'35vw', 
                                height:'35vw',
                                marginTop: '3vh'}}
                                />
                            :
                            data.balanceStatistics?
                            <PieChart data={data.balanceStatistics} />:
                            <Skeleton.Avatar
                            active
                            style={{
                                width:'35vw', 
                                height:'35vw',
                                marginTop: '3vh'}}
                                />
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home