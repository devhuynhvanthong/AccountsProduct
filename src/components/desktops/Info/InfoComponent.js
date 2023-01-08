import MainContainer from "../../mains/MainContainer";
import { Card, Col, Row, Space,Divider } from 'antd';
import Publics_ from "../../../../utils/Publics";
import { useEffect, useState } from "react";
import style from './style.module.scss'
import styleGlobal from '../../../../styles/globals.module.scss'
import {RightOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux'
import Image from 'next/image'
export default function InfoComponent(props){
    const publics = Publics_()
    const dataInfoBasic = useSelector(state => state.info.list)[0]
    console.log("DAta",dataInfoBasic)
    return (
        <>
            {
                dataInfoBasic &&
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
                                      <Col className={style.elementV1} span={4}>
                                          Ảnh đại diện
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          Một bức ảnh giúp cá nhân hóa tài khoản của bạn
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <Image
                                            className={style.avatarSmall}
                                            width={30}
                                            height={30}
                                            fallback={'/images/avatar_default.png'}
                                            src={dataInfoBasic.avatar?dataInfoBasic.avatar:'/images/avatar_default.png'} />

                                      </Col>
                                  </Row>
                                  <Divider />
                                  <Row>
                                      <Col className={style.elementV1} span={4}>
                                          Họ và Tên
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.name}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <RightOutlined />
                                      </Col>
                                  </Row>
                                  <Divider />
                                  <Row>
                                      <Col className={style.elementV1} span={4}>
                                          Ngày sinh
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.birth_day!=null?dataInfoBasic.info.birth_day:"--/--/----"}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <RightOutlined />
                                      </Col>
                                  </Row>
                                  <Divider />
                                  <Row>
                                      <Col className={style.elementV1} span={4}>
                                          Giới tính
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.gender?"Nam":"Nữ"}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
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
                                      <Col className={style.elementV1} span={4}>
                                          Email
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.email}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <RightOutlined />
                                      </Col>
                                  </Row>
                                  <Divider />
                                  <Row>
                                      <Col className={style.elementV1} span={4}>
                                          Số điện thoại
                                      </Col>
                                      <Col className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.number_phone!=null?dataInfoBasic.info.number_phone:"---- --- ---"}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <RightOutlined />
                                      </Col>
                                  </Row>
                                  <Divider />
                                  <Row>
                                      <Col className={style.elementV1} span={4}>
                                          Địa chỉ
                                      </Col>
                                      <Col style={{
                                          justifyContent: 'center'
                                      }} className={style.elementV2} span={17}>
                                          {dataInfoBasic.info.address}
                                      </Col>
                                      <Col className={style.ellipseV3} span={3}>
                                          <RightOutlined />
                                      </Col>
                                  </Row>
                              </div>
                          </Card>
                      </Space>
                  </div>
            }
        </>
    )
}
