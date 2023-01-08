import axios from 'axios'
import Constants from './Constants'
import Cookies from './Cookies'
import Publics_ from './Publics'
import { useRouter } from 'next/router'
import Urls from './Urls'

export default function CallApi(){
  const router = useRouter()
  const cookie = Cookies()
  const constants = Constants()
  const urls = Urls()
  const put = async (endpoint, body = null) => {
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    return axios({
      method: 'PUT',
      url: endpoint,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        if (res.data){
          if (res.data.category == constants.AUTHENTICATION){
            cookie.Remove(publics.constant.KEY_ACCESS_TOKEN)
            router.push(publics.url.PATH_LOGIN)
          }}
        return res.data;
      })
      .catch((err) => {
        if (err.response.data.category === constants.AUTHENTICATION){
          cookie.Remove(constants.KEY_ACCESS_TOKEN)
          router.push(urls.PATH_LOGIN)
        }
        else {
          return err.response.data.message
        }
      });
  };
  const deleteApi = async (endpoint, body = null) => {

    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    return axios({
      method: 'DELETE',
      url: endpoint,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        if (res.data){
          if (res.data.category == constants.AUTHENTICATION){
            cookie.Remove(publics.constant.KEY_ACCESS_TOKEN)
            router.push(publics.url.PATH_LOGIN)
          }}
        return res.data;
      })
      .catch((err) => {
        if (err.response.data.category === constants.AUTHENTICATION){
          cookie.Remove(constants.KEY_ACCESS_TOKEN)
          router.push(urls.PATH_LOGIN)
        }
        else {
          return err.response.data.message
        }
      });
  };
  const get = async (endpoint, params = {}, header_ = "") => {
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }

    return axios({
      method: 'GET',
      url: endpoint,
      params: params,
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: true,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.data.category === constants.AUTHENTICATION){
          cookie.Remove(constants.KEY_ACCESS_TOKEN)
          router.push(urls.PATH_LOGIN)
        }
        else {
          return err.response.data.message
        }
      });
  };

  const post = async (endpoint, body = {},header_ = "") => {
    if (cookie.Get(constants.KEY_ACCESS_TOKEN,false)!=null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.Get(constants.KEY_ACCESS_TOKEN,true).accsessToken}`;
    }
    return axios({
      method: 'POST',
      url: endpoint,
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.data){
          if (res.data.category == constants.AUTHENTICATION){
            cookie.Remove(publics.constant.KEY_ACCESS_TOKEN)
            router.push(publics.url.PATH_LOGIN)
          }}
        return res.data;
      })
      .catch((err) => {
        if (err.response.data.category === constants.AUTHENTICATION){
          cookie.Remove(constants.KEY_ACCESS_TOKEN)
          router.push(urls.PATH_LOGIN)
        }
        else {
          return err.response.data.message
        }
      });
  };

  const upload = async (endpoint, body = null, id) => {
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
        url: endpoint,
        data,
      });
      return res;
    } catch (err) {
      if (err.response.data.category === constants.AUTHENTICATION){
        cookie.Remove(constants.KEY_ACCESS_TOKEN)
        router.push(urls.PATH_LOGIN)
      }
      else {
        return err.response.data.message
      }
    }
  };

  return(
    {
      post, get, put, deleteApi, upload
    }
  )
}
