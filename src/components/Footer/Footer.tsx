export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2023 TPT. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH TPT</div>
          <div className='mt-6'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Phenikaa House, số 07 đường Quang Trung, Phường Yên Nghĩa, Quận Hà Đông Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.tpt.vn
          </div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Trịnh Quốc Tráng - Điện thoại liên hệ: 0399 085 128 (ext 4678)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/10/2023
          </div>
          <div className='mt-2'>© 2023 - Bản quyền thuộc về Công ty TNHH TPT</div>
        </div>
      </div>
    </footer>
  )
}
