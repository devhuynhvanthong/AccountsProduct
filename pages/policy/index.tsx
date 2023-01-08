import MainContainer from "../../src/components/mains/MainContainer";
import { useEffect, useState } from 'react'
import Publics_ from '../../utils/Publics'
import style from '../../src/components/desktops/Info/style.module.scss'
import { Card, Col, Divider, Empty, Input, Modal, Row, Skeleton, Space, Spin, Table, Tooltip } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import styleGlobals from '../../styles/globals.module.scss'

export default function Info(props: any){
    props.params.setTitle("Bảo mật")
    const publics = Publics_()
    const [selectPage,setSelectPage] = useState(1)
    const [dataLoginHistory,setDataLoginHistory] = useState([])
    const [totalPage,setTotalPage] = useState(1)
    const [loadingLoginHistory,setLoadingLoginHistory] = useState(false)
    const [lastTimeChangePassword,setLastTimeChangePassword] = useState("")
    const [openModalChangePassword,setOpenModalChangePassword] = useState(false)
    const [loadingChangePassword,setLoadingChangePassword] = useState(false)
    const [inputCurrentPassword,setInputCurrentPassword] = useState("")
    const [inputNewPassword,setInputNewPassword] = useState("")
    const [inputAgainNewPassword,setInputAgainNewPassword] = useState("")
    const [errorNewPassword,setErrorNewPassword] = useState("")
    const [errorAgainNewPassword,setErrorAgainNewPassword] = useState("")
    useEffect(()=>{
        setLoadingLoginHistory(true)
        publics.api.get(publics.url.URL_GET_LOGIN_HISTORY,{
            page_offet: selectPage
        }).then(data=>{
            if (data?.status == publics.constant.SUCCESS){
                setDataLoginHistory(data.body.data)
                setTotalPage(data.body.total_page)
            }
            setLoadingLoginHistory(false)
        }).catch(()=>{
            setLoadingLoginHistory(false)
        })
    },[selectPage])

    useEffect(()=>{
      loadingDataLoginHistory()
    },[])
    function loadingDataLoginHistory() {
      setLastTimeChangePassword("")
      publics.api.get(publics.url.URL_GET_HISTORY_CHANGE_PASSWORD)
        .then(data => {
          if (data?.status == publics.constant.SUCCESS){
            setLastTimeChangePassword(data?.body[0])
          }
        })
    }
    const columns: any[] = [
      {
        title: '#',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        render: (_:any, __: any, index: number) => index + 1
      },
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'key',
            align: 'center',
            render: (value: any) => {
              return (<p>{value}</p>)
            }
        },
        {
            title: 'Trình duyệt',
            dataIndex: 'browser',
            key: 'browser',
            align: 'center',
            render: (value: any) => {
                switch (value){
                    case 'chrome':
                        return (
                          <Tooltip title={'Chrome'}>
                            <img
                              style={{cursor: 'help'}}
                              width={'20px'}
                              src={'images/icon_chrome.png'}
                              alt='Chrome' />
                          </Tooltip>
                        )
                    case 'firefox':
                      return (
                        <Tooltip title={'Firefox'}>
                          <img
                            style={{cursor: 'help'}}
                            width={'20px'}
                            src={'images/icon_firefox.png'}
                            alt='Chrome' />
                        </Tooltip>
                      )
                    case 'safari':
                      return (
                        <Tooltip title={'Safari'}>
                          <img
                            style={{cursor: 'help'}}
                            width={'20px'}
                            src={'images/icon_safari.png'}
                            alt='Chrome' />
                        </Tooltip>
                      )
                    case 'opera':
                      return (
                        <Tooltip title={'Opera'}>
                          <img
                            style={{cursor: 'help'}}
                            width={'20px'}
                            src={'images/icon_opera.png'}
                            alt='Chrome' />
                        </Tooltip>
                      )
                    case 'edge':
                      return (
                        <Tooltip title={'Edge'}>
                          <img
                            style={{cursor: 'help'}}
                            width={'20px'}
                            src={'images/icon_edge.png'}
                            alt='Chrome' />
                        </Tooltip>
                      )
                    case 'none':
                      return (
                        <Tooltip title={'Trình duyệt không xác định'}>
                          <img
                            style={{cursor: 'help'}}
                            width={'20px'}
                            src={'images/icon_browser_unknown.png'}
                            alt='Chrome' />
                        </Tooltip>
                      )

                }
            }
        },
        {
            title: 'Thiết bị',
            dataIndex: 'device',
            key: 'device',
            align: 'center',
            render: (value: any) => {
                switch (value){
                    case 'window':
                        return (
                          <Tooltip title={'Máy tính'}>
                            <img
                              style={{cursor: 'help'}}
                              width={'20px'}
                              src={'images/icon_window.png'}
                              alt='Chrome' />
                          </Tooltip>
                        )
                    case 'mobile':
                        return (
                          <Tooltip title={'Điện thoại'}>
                            <img
                              style={{cursor: 'help'}}
                              width={'20px'}
                              src={'images/icon_mobile.png'}
                              alt='Chrome' />
                          </Tooltip>
                        )
                    default:
                        return (
                          <Tooltip title={'Thiết bị không xác định'}>
                            <img
                              style={{cursor: 'help'}}
                              width={'20px'}
                              src={'images/icon_device_unknown.png'}
                              alt='Chrome' />
                          </Tooltip>
                        )

                }
            }
        },
        {
            title: 'Thời gian',
            dataIndex: 'time_login',
            key: 'time_login',
            align: 'center',
            render: (value: any) => {
              return (<p>{value}</p>)
            }
        }
    ]

    function handleChangePaginationLoginHistory(item: any) {
        setSelectPage(item)
    }

  function handleChangePassword() {
    if (inputCurrentPassword.trim().length < 8){
      publics.library.createNotification(
        publics.constant.ERROR,
        publics.validation.ERROR_CURRENT_PASSWORD_INCORRECT
      )
      return
    }

    if (inputNewPassword.trim().length < 8){
      setErrorNewPassword(publics.validation.FORMAT_LENGHT_PASSWORD)
      return
    }

    if (inputNewPassword.trim() != inputAgainNewPassword.trim()){
      setErrorAgainNewPassword(publics.validation.ERROR_ENTER_AGAIN_PASSWORD)
      return
    }

    setLoadingChangePassword(true)
    publics.api.post(publics.url.URL_CHANGE_PASSWORD,{
      old: publics.library.base64Encode(inputCurrentPassword),
      new: publics.library.base64Encode(inputNewPassword)
    }).then(response =>{

      if (response.status == publics.constant.SUCCESS){
        loadingDataLoginHistory()
        publics.library.createNotification(
          publics.constant.SUCCESS,
          publics.validation.UPDATE_DATA_SUCCESS
        )
        setErrorAgainNewPassword("")
        setErrorNewPassword("")
        setInputCurrentPassword("")
        setInputNewPassword("")
        setInputAgainNewPassword("")
        setOpenModalChangePassword(false)
      }else {
        publics.library.createNotification(
          publics.constant.ERROR,
          response.message
        )
      }
      setLoadingChangePassword(false)
    }).catch(e =>{
      console.log("Error",e)
      setLoadingChangePassword(false)
    })
  }

  function handleOpenChangePassword() {
    setOpenModalChangePassword(true)
  }

  return (
        <>
            <div className={style.contentSpace}>
                <Space
                  direction="vertical"
                  size="middle">
                    <Card
                      className={style.card}
                      title={<span className={style.title}>Đăng Nhập</span>}>
                      <Row>
                        <Col className={style.elementV1} span={4}>
                          Mật khẩu
                        </Col>
                        <Col style={{textAlign:'center'}} className={style.elementV2} span={17}>
                          {lastTimeChangePassword?
                            <i style={{
                              color: '#9a9a9a'
                            }}>Thay đổi gần đây nhất: <strong>{publics.library.getDateTime(new Date(lastTimeChangePassword),false)}</strong> </i>:
                            <Skeleton.Button
                              active={true}
                              size={'small'}
                              shape={'round'}
                              block={true} />
                            }
                        </Col>
                        <Col onClick={handleOpenChangePassword} className={style.ellipseV3} span={3}>
                          <RightOutlined/>
                        </Col>
                      </Row>
                    </Card>
                    <Card
                      className={style.card}
                      title={<span className={style.title}>Lịch sử đăng nhập</span>}
                      >
                        <div>
                            <Row>
                                <Col className={style.elementV1} span={24}>
                                    {
                                        dataLoginHistory &&
                                          <Spin spinning={loadingLoginHistory} tip={'Đang tải...'}>
                                              <Table
                                                style={{padding:0}}
                                                dataSource={dataLoginHistory}
                                                columns={columns}
                                                pagination={
                                                    {
                                                        showTitle: false,
                                                        total:totalPage*10,
                                                        showSizeChanger: false,
                                                        showQuickJumper: false,
                                                        onChange: handleChangePaginationLoginHistory
                                                    }
                                                }
                                              />
                                          </Spin>
                                    }
                                    {
                                        !dataLoginHistory &&
                                          <Empty/>
                                    }
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Space>
            </div>
            <Modal
              closable={false}
              title={'Đổi mật khẩu'}
              onCancel={()=>{
                if (!loadingChangePassword){
                  setErrorAgainNewPassword("")
                  setErrorNewPassword("")
                  setInputCurrentPassword("")
                  setInputNewPassword("")
                  setInputAgainNewPassword("")
                  setOpenModalChangePassword(false)
                }
              }}
              open={openModalChangePassword}
              footer={
                <>
                  <button
                    disabled={loadingChangePassword}
                    onClick={()=>setOpenModalChangePassword(false)}
                    className={styleGlobals.buttonModalCancel}>
                    Thoát
                  </button>
                  <button
                    disabled={loadingChangePassword}
                    onClick={()=>handleChangePassword()}
                    className={styleGlobals.buttonModalApply}>
                    Cập nhật
                  </button>
                </>
              }
            >
              <Spin
                tip={"Làm ơn chờ..."}
                spinning={loadingChangePassword}
              >
                <div>
                  <Row
                    align={'middle'}
                    style={{width: '100%', marginTop:'25px'}}
                    gutter={24}>
                    <Col span={8} style={{textAlign:'right'}}>
                      Mật khẩu hiện tại :
                    </Col>
                    <Col span={16}>
                      <Input.Password
                        onPressEnter={handleChangePassword}
                        value={inputCurrentPassword}
                        onChange={(e)=>setInputCurrentPassword(e.target.value)}
                        placeholder={'Nhập mật khẩu hiện tại'}
                      />
                    </Col>
                  </Row>
                  <Row
                    align={'middle'}
                    style={{width: '100%', marginTop: '10px'}}
                    gutter={24}>
                    <Col span={8} style={{textAlign:'right'}}>
                      Mật khẩu mới :
                    </Col>
                    <Col span={16}>
                      <div>
                        <Input.Password
                          onPressEnter={handleChangePassword}
                          value={inputNewPassword}
                          status={errorNewPassword == "" ? undefined : "error"}
                          onChange={(e)=>{
                            setInputNewPassword(e.target.value)
                            setErrorNewPassword("")
                          }}
                          placeholder={'Nhập mật khẩu mới'}
                        />
                      </div>
                      <span
                        style={{
                          color: 'red',
                          fontStyle: 'italic'
                        }}
                      >{errorNewPassword?errorNewPassword:""}</span>
                    </Col>
                  </Row>
                  <Row
                    align={'middle'}
                    style={{width: '100%', marginTop: '10px'}}
                    gutter={24}>
                    <Col span={8} style={{textAlign:'right'}}>
                      Nhập lại mật khẩu :
                    </Col>
                    <Col span={16}>
                      <div>
                        <Input.Password
                          onPressEnter={handleChangePassword}
                          value={inputAgainNewPassword}
                          status={errorAgainNewPassword == "" ? undefined : "error"}
                          onChange={(e) => {
                            setInputAgainNewPassword(e.target.value)
                            setErrorAgainNewPassword("")
                          }}
                          placeholder={'Nhập lại mật khẩu mới'}
                        />
                      </div>
                      <span
                        style={{
                          color: 'red',
                          fontStyle: 'italic'
                        }}
                      >{errorAgainNewPassword?errorAgainNewPassword:""}</span>
                    </Col>
                  </Row>
                  <Divider/>
                </div>
              </Spin>
            </Modal>
        </>
    )
}