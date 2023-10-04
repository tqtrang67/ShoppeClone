// import { describe, expect, test } from 'vitest'
// import App from './App'
// import { render, screen, waitFor } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import matchers from '@testing-library/jest-dom/matchers'
// import userEvent from '@testing-library/user-event'
// expect.extend(matchers)
// describe('App', () => {
//   test('App render và chuyển trang', async () => {
//     render(<App />, {
//       wrapper: BrowserRouter
//     })
//     const user = userEvent.setup()
//     /**
//      * waitFor sẽ run callback 1 vài lần
//      * cho đến khi hết timeout
//      * số lần run phụ thuộc vào timeout và interval
//      * mặc định: timeout = 1000ms và interval = 50ms
//      */
//     // Verify vào đúng trang chủ
//     await waitFor(() => {
//       expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
//     })
//     //verify chuyển sang trang login
//     await user.click(screen.getByText(/Đăng nhập/i))
//     await waitFor(() => {
//       expect(screen.queryByText('Bạn chưa có tài khoản?')).toBe('Đăng nhập | Shopee Clone')
//     })
//     await waitFor(() => {
//       expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
//     })
//     screen.debug(document.body.parentElement as HTMLElement, 99999999)
//   })
// })
