'use strict'
import fetch from 'node-fetch'
import _ from 'lodash'
export function fetchApi (url, opt) {
  var headers = new fetch.Headers()
  headers.append('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
  headers.append('accept', 'application/json, application/xml, text/plain, text/html, *.*')
  return fetch(`http://127.0.0.1:8008/${url}`, {
    method: 'post',
    headers: headers,
    body: optKey(opt),
    mode: 'cors'
  })
}

function optKey (opt) {
  let bodyText = ''
  if (_.isEmpty(opt)) {
    return bodyText
  }
  _.forEach(opt, (value, key) => {
    bodyText += `${key}=${value}&`
  })
  return bodyText.replace(/&$/g, '')
}
