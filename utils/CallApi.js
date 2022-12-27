import axios from 'axios';
import Constants from './Constants';
import Cookies from './Cookies';

export default function CallApi(){
  const API_URL = process.env.REACT_APP_API_URL;

  const put = async (endpoint, body = null) => {
    const cookie = Cookies()
    const constants = Constants()
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    return axios({
      method: 'PUT',
      url: `${API_URL}/${endpoint}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteApi = async (endpoint, body = null) => {
    const cookie = Cookies()
    const constants = Constants()
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    return axios({
      method: 'DELETE',
      url: `${API_URL}/${endpoint}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const get = async (endpoint, body = {}, header_ = "") => {
    const cookie = Cookies()
    const constants = Constants()
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }

    let url = endpoint
    return axios({
      method: 'GET',
      url: `${url}`,
      params: body,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const post = async (endpoint, body = {},header_ = "") => {
    const cookie = Cookies()
    const constants = Constants()
    console.log("COOKIE",cookie.Get(constants.KEY_ACCESS_TOKEN,true))
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    let url = endpoint
    return axios({
      method: 'POST',
      url: `${url}`,
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err
      });
  };

  const upload = async (endpoint, body = null, id) => {
    const cookie = Cookies()
    const constants = Constants()
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,false)}`;
    }
    const data = new FormData();
    data.append('file', body.originFileObj);
    if (id) {
      data.append('id', id);
    }
    try {
      const res = await axios({
        method: 'POST',
        url: `${API_URL}/${endpoint}`,
        data,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return(
    {
      post, get, put, deleteApi, upload
    }
  )
}
