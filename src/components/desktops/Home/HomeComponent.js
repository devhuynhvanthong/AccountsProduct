import style from './style.module.scss'
import {Row, Col} from 'antd'
import {EuroCircleFilled,
    CheckCircleFilled,
    WarningFilled,
    ExclamationCircleFilled} from '@ant-design/icons';
export default function Home(){
    return (
        <>
            <div className={style.contentSpace}>
                <div className={style.borderBalances}>
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
                </div>
            </div>
        </>
    )
}