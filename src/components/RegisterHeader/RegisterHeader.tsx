import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='ml-10 py-5'>
      <div className='container flex flex-row justify-between '>
        <nav className='flex items-end '>
          <Link to='/' className='col-span-2 text-3xl font-bold text-oranges'>
            TPT SHOP
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
        <Link to='/' className='flex items-center text-oranges'>
          Bạn cần giúp đỡ ?
        </Link>
      </div>
    </header>
  )
}
