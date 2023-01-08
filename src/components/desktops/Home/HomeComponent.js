import style from './style.module.scss'
import {Row, Col,Divider} from 'antd'
import {EuroCircleFilled,
    MenuUnfoldOutlined,
    CheckCircleFilled,
    WarningFilled,
    ExclamationCircleFilled} from '@ant-design/icons';
import { Pie, G2 } from '@ant-design/plots';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Public_ from '../../../../utils/Publics'
const Home = (props) => {
    const params = props.params
    const public_ = Public_()
    let balance = useSelector(state => state.info.list)[0]?.balance
    const [dataStatic,setDataStatic] = useState([])
    const G = G2.getEngine('canvas');
    useEffect(()=>{
        if (balance){
            setDataStatic([
                {
                    type: "Số dư khả dụng",
                    value: balance.available
                },
                {
                    type: "Số dư bị khóa",
                    value: balance.locked
                }
            ])
        }
    },[])
    const cfg = {
        appendPadding: 10,
        data:dataStatic,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        legend: false,
        label: {
            type: 'spider',
            labelHeight: 40,
            formatter: (data, mappingData) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'circle',
                    attrs: {
                        x: 0,
                        y: 0,
                        width: 40,
                        height: 50,
                        r: 5,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 10,
                        y: 8,
                        text: `${data.type}`,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 0,
                        y: 25,
                        text: `${public_.library.formatMoney(data.value)} - ${(data.percent * 100).toFixed(2)}%`,
                        fill: 'rgba(0, 0, 0, 0.65)',
                        fontWeight: 700,
                    },
                });
                return group;
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <>
            {
                balance &&
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
                              </div>
                          </Col>
                          <Col span={6}>
                              <div>
                                  <div className={style.labelBalance}>
                                      <ExclamationCircleFilled className={style.iconBalance} />
                                      <span> Số dư hiện có</span>
                                  </div>

                              </div>
                          </Col>
                          <Col span={6}>
                              <div>
                                  <div className={style.labelBalance}>
                                      <CheckCircleFilled className={style.iconBalance} />
                                      <span> Số dư khả dụng</span>
                                  </div>

                              </div>
                          </Col>
                          <Col span={6}>
                              <div>
                                  <div className={style.labelBalance}>
                                      <WarningFilled className={style.iconBalance} />
                                      <span> Bị khóa</span>
                                  </div>

                              </div>
                          </Col>
                      </Row>
                      <Row gutter={24}>
                          <Col span={6}>
                              <div className={style.contentBalance}>{public_.library.formatMoney(balance.total | 0)}</div>
                          </Col>
                          <Col span={6}>
                              <div className={style.contentBalance}>{public_.library.formatMoney(balance.current | 0)}</div>
                          </Col>
                          <Col span={6}>
                              <div className={style.contentBalance}>{public_.library.formatMoney(balance.available | 0)}</div>
                          </Col>
                          <Col span={6}>
                              <div className={style.contentBalance}>{public_.library.formatMoney(balance.locked | 0)}</div>
                          </Col>
                      </Row>
                  </div>


            }
            {
                dataStatic &&
                  <div className={style.groups}>
                      <label className={style.labelChart}>Biểu đồ số dư</label>
                      {/*<Pie {...cfg} />*/}
                  </div>
            }

        </>
    )
}
export default Home