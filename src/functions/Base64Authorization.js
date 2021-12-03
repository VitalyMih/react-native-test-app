import { Base64 } from "js-base64"

export const getBase64Authorization = (mail, password) => {
  return `Basic ${Base64.encode(mail.toLowerCase() + ':' + password)}`
}
