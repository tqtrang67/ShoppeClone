import { describe, expect, it } from 'vitest'
import http from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

describe('http axios', () => {
  it('Gọi API', async () => {
    const res = await http.get('products')
    console.log(res)
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  // it('Auth Request', async () => {
  //   await http.post('login', {
  //     email: 'trangtrinh000000@gmail.com',
  //     password: '000000'
  //   })
  //   const res = await http.get('me')
  //   expect(res.status).toBe(HttpStatusCode.Ok)
  // })
})
