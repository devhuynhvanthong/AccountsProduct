import CallApi from './CallApi'
import Colors from './Colors'
import Urls from './Urls'
import Constants from './Constants'
import Library from './Library'
import Validations from './Validations'
import Cookies from './Cookies'
export default function Publics_(){
    const api = CallApi()
    const url = Urls()
    const constant = Constants()
    const library = Library()
    const validation = Validations()
    const color = Colors()
    const cookie = Cookies()
    return(
        {
            api,
            url,
            constant,
            library,
            validation,
            color,
            cookie
        }
    )
}