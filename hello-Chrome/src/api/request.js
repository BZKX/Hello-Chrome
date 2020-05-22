import http from './axios/http'

// const host = process.env.NODE_ENV === 'development' ? '' : 'http://127.0.0.1:8080'; //平台后端=
const host = 'http://127.0.0.1:8080'; //平台后端=

export const onlineRequest = {
    getBingWeekImg:params=>http.get(host+'/hellowChrome/getBingWeekImg')

}
