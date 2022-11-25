import MainContainer from "../../mains/MainContainer";
import { Card, Col, Row, Space,Divider } from 'antd';
import Publics_ from "../../../../utils/Publics";
import { useEffect, useState } from "react";
import style from './style.module.scss'
import styleGlobal from '../../../../styles/globals.module.scss'
import {RightOutlined} from '@ant-design/icons';
export default function InfoComponent(props){
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
    return (
        <>
           <MainContainer tab={"info"} title={"Trang cá nhân"}>
            <div className={style.contentSpace}>
                <Space
                    direction="vertical"
                    size="middle">
                    <Card
                        className={style.card}
                        title={<><p className={style.title}>Thông tin cơ bản</p><p className={style.description}>Một số thông tin có thể hiển thị cho những người khác đang sử dụng dịch vụ của AiGooX</p></>} 
                        size='large'>
                        
                        <div>
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Ảnh đại diện
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    Một bức ảnh giúp cá nhân hóa tài khoản của bạn
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <img className={style.avatarSmall} src={dataInfoBasic.avatar} />
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Họ và Tên
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.name}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Ngày sinh
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.birth_day!=null?dataInfoBasic.birth_day:"--/--/----"}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Giới tính
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.gender?"Nam":"Nữ"}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <Card 
                        className={style.card}
                        title={<p className={style.title}>Thông tin liên hệ</p>}
                        direction="vertical"
                        size="middle">
                        <div>
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Email
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.email}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Số điện thoại
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.number_phone!=null?dataInfoBasic.number_phone:"---- --- ---"}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col className={style.elementV1} span={8}>
                                    Giới tính
                                </Col>
                                <Col className={style.elementV2} span={8}>
                                    {dataInfoBasic.gender?"Nam":"Nữ"}
                                </Col>
                                <Col className={style.ellipseV3} span={8}>
                                    <RightOutlined />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Space>
            </div>
            </MainContainer>
        </>
    )
}