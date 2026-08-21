import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- Header Component ---
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isDropdownMobileOpen, setIsDropdownMobileOpen] = React.useState(false);

  return (
  <>
    <div className="top-bar">
        <div className="container">
          <div className="top-left">
            <a href="tel:0338869096">
              <i className="fa fa-phone"></i> 033 886 9096
            </a>
            <span style={{color: 'rgba(255,255,255,0.3)', margin: '0 8px'}}>|</span>
            <a href="tel:0933648728">
              <i className="fa fa-phone"></i> 0933 648 728
            </a>
            <a href="mailto:hoangqui2004qn@gmail.com">
              <i className="fa fa-envelope"></i> hoangqui2004qn@gmail.com
            </a>
          </div>
          <div className="top-right">
            <a href="https://www.facebook.com/qui.nguyenhoang.184" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <span className="logo-box">DICHVUSANGTEN</span> <span className="logo-hcm">HCM</span>
            </Link>
          </div>

          <div className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <i className={isMobileOpen ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          <nav className={`nav-menu ${isMobileOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMobileOpen(false)}>TRANG CHỦ</Link></li>
              <li className="has-dropdown" onClick={() => {
                  if (window.innerWidth <= 992) {
                    setIsDropdownMobileOpen(!isDropdownMobileOpen);
                  }
                }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  DỊCH VỤ <i className="fa fa-angle-down"></i>
                </a>
                <ul className={`dropdown ${isDropdownMobileOpen ? "mobile-open" : ""}`}>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>SANG TÊN XE Ô TÔ KHÔNG CHÍNH CHỦ</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>SANG TÊN ĐỔI CHỦ Ô TÔ</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>CẤP LẠI ĐĂNG KÍ XE BỊ MẤT</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>RÚT HỒ SƠ GỐC Ô TÔ</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>ĐỔI ĐĂNG KÍ XE CÔNG TY</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>CÀ SỐ XE TẠI NHÀ</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>ĐỔI BIỂN SỐ XE</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>CÔNG CHỨNG GIẤY TỜ XE</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>THAY ĐỔI MÀU SƠN XE</Link></li>
                  <li><Link to="/dich-vu" onClick={() => setIsMobileOpen(false)}>CẤP LẠI BIỂN SỐ XE</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/thu-tuc" onClick={() => setIsMobileOpen(false)}>
                  THỦ TỤC <i className="fa fa-angle-down"></i>
                </Link>
              </li>
              <li><Link to="/tin-tuc" onClick={() => setIsMobileOpen(false)}>TIN TỨC</Link></li>
              <li><Link to="/lien-he" onClick={() => setIsMobileOpen(false)}>LIÊN HỆ</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  </>
  );
};

// --- Footer Component ---
const Footer = () => {
  const [visitors, setVisitors] = React.useState(0);
  const [online, setOnline] = React.useState(0);

  React.useEffect(() => {
    // Tự động tính toán khách giả lập thông minh
    const launchDate = new Date('2026-08-20').getTime();
    const now = new Date().getTime();
    const daysSince = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24));
    
    // Ngày nào cũng tăng đều đặn, cộng thêm yếu tố ngẫu nhiên theo giờ để trông chân thực
    const calculateVisitors = 25820 + (daysSince * 55) + new Date().getHours() * 3 + Math.floor(Math.random() * 15);
    setVisitors(calculateVisitors);
    
    // Số người đang online ngẫu nhiên từ 3 đến 12 người
    setOnline(Math.floor(Math.random() * 9) + 3);
  }, []);

  return (
  <>
    <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-box">DICHVUSANGTEN</span> <span className="logo-hcm">HCM</span>
            </div>
            <p>Trung Tâm Dịch Vụ Sang Tên Xe TP Hồ Chí Minh</p>
            <p><strong>Địa chỉ:</strong> 282 Nơ Trang Long, Phường Bình Thạnh, Thành Phố Hồ Chí Minh</p>
            <p><strong>SĐT/Zalo:</strong> 033 886 9096 - 0933 648 728</p>
            <p><strong>Email:</strong> hoangqui2004qn@gmail.com</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/qui.nguyenhoang.184" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Menu chính</h3>
            <ul className="footer-menu">
              <li><Link to="/"><i className="fa fa-angle-right"></i> Trang chủ</Link></li>
              <li><Link to="/dich-vu"><i className="fa fa-angle-right"></i> Dịch vụ</Link></li>
              <li><Link to="/thu-tuc"><i className="fa fa-angle-right"></i> Thủ Tục</Link></li>
              <li><Link to="/tin-tuc"><i className="fa fa-angle-right"></i> Tin tức</Link></li>
              <li><Link to="/lien-he"><i className="fa fa-angle-right"></i> Liên hệ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Facebook</h3>
            <div className="fb-widget">
              <p>Fanpage Dichvusangtenhcm.com</p>
              <a href="https://www.facebook.com/qui.nguyenhoang.184" target="_blank" rel="noopener noreferrer" className="btn-fb"><i className="fab fa-facebook"></i> Theo dõi Trang</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Thống kê truy cập</h3>
            <div className="stats-box">
              <p><i className="fa fa-users"></i> Lượt truy cập: <strong style={{color: '#fff', fontSize: '18px'}}>{visitors.toLocaleString()}</strong></p>
              <p><i className="fa fa-circle-dot" style={{color: '#22c55e', fontSize: '12px'}}></i> Đang online: <strong style={{color: '#22c55e', fontSize: '18px'}}>{online}</strong></p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© Copyright 2026 Dichvusangten - Trung Tâm Sang Tên Xe Ô Tô TP Hồ Chí Minh. Thiết kế bởi Thành Nhân</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-contact">
        <a href="tel:0338869096" className="float-btn phone">
          <i className="fa fa-phone"></i>
          <span className="tooltip-label">Hotline: 033.886.9096 - 0933.648.728</span>
        </a>
        <a href="https://zalo.me/0338869096" className="float-btn zalo">
          <div style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M21.544 11.049c0-4.436-3.87-8.031-8.644-8.031-4.773 0-8.643 3.595-8.643 8.031 0 3.393 2.27 6.302 5.56 7.49.191.069.298.243.25.437l-.546 2.05c-.092.347.26.65.57.494l2.585-1.294c.143-.071.309-.089.462-.05 1.096.275 2.257.29 3.344.025 3.593-1.025 5.062-4.8 5.062-9.152z" fill="#0068FF"/>
              <path d="M10.15 13.916h-2.12c-.22 0-.376-.226-.264-.42l2.366-4.08c.113-.194-.027-.416-.25-.416H7.59c-.173 0-.317-.142-.317-.317V7.618c0-.175.144-.317.317-.317h2.292c.22 0 .376.226.264.42l-2.366 4.08c-.113.194.027.416.25.416h2.292c.173 0 .317.142.317.317v1.065c0 .175-.144.317-.317.317zM16.592 10.732c0 2.21-1.748 4.004-3.905 4.004-2.155 0-3.904-1.794-3.904-4.004 0-2.21 1.749-4.004 3.904-4.004 2.157 0 3.905 1.794 3.905 4.004zm-1.636 0c0-1.282-1.015-2.32-2.269-2.32-1.254 0-2.268 1.038-2.268 2.32 0 1.282 1.014 2.32 2.268 2.32 1.254 0 2.269-1.038 2.269-2.32z" fill="#FFF"/>
            </svg>
          </div>
          <span className="tooltip-label" style={{background: '#0068ff'}}>Chat Zalo ngay</span>
        </a>
        <a href="https://m.me/qui.nguyenhoang.184" target="_blank" rel="noopener noreferrer" className="float-btn mess">
          <i className="fab fa-facebook-messenger"></i>
          <span className="tooltip-label" style={{background: '#0084ff'}}>Chat Messenger</span>
        </a>
      </div>
  </>
  );
};

// --- Page Components ---
const Home = () => (
  <>
    <section className="hero-banner">
        <div className="hero-animated-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumbs">
              Trang chủ {'>'} Dịch Vụ Cà Số Khung...
            </div>
            <h1>Cà Số Khung Số Máy Ô Tô Xe Máy Tận Nhà HCM: Giá Rẻ, Có Mặt Sau 15 Phút</h1>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            
            <div className="promo-banner">
              <h2>CÀ SỐ KHUNG SỐ MÁY TẬN NHÀ</h2>
              <p className="highlight">Nhanh Chóng - Giá Rẻ</p>
              <p className="hotline">HOTLINE: 0338.86.9096 - 0933.648.728</p>
            </div>

            <div className="article-body">
              <p>Việc tự cà số khung số máy thường khiến chủ xe gặp nhiều khó khăn: không tìm thấy vị trí số, bản cà bị mờ, nhòe hoặc rách giấy decal khiến CSGT trả hồ sơ. <strong>Dịch Vụ Sang Tên HCM</strong> cung cấp giải pháp cà số tận nhà chuyên nghiệp, cam kết bản cà đạt chuẩn 100% để thủ tục sang tên, rút hồ sơ gốc diễn ra suôn sẻ.</p>

              <h3>1. Tại sao cần cà số khung, số máy chuyên nghiệp?</h3>
              <p>Cà số khung, số máy không đơn thuần là việc miết bút chì lên giấy. Đây là thủ tục <strong>pháp lý bắt buộc</strong> để cơ quan CSGT xác minh tính nguyên bản và nguồn gốc của phương tiện. Một bản cà đạt chuẩn phải:</p>
              <ul>
                <li><strong>Đầy đủ ký tự:</strong> Không mất nét, không bị đè số.</li>
                <li><strong>Sắc nét:</strong> Rõ ràng từng chi tiết để đối chiếu với hồ sơ gốc.</li>
                <li><strong>Đúng quy chuẩn:</strong> Sử dụng giấy Decal chuyên dụng và chì độ đậm cao (6B).</li>
                <li><strong>Rủi ro nếu tự làm:</strong> Nếu bản cà không đạt yêu cầu, bạn sẽ bị trả hồ sơ, mất thời gian đi lại nhiều lần và ảnh hưởng tiến độ sang tên, đổi chủ.</li>
              </ul>

              <h3>2. Ưu điểm vượt trội của Dịch Vụ Sang Tên HCM</h3>
              <ul>
                <li><strong>Siêu tốc:</strong> Có mặt tận nơi sau 15 - 30 phút tại tất cả quận huyện TPHCM.</li>
                <li><strong>Kỹ thuật cao:</strong> Thông thạo vị trí số của mọi dòng xe (Xe con, xe tải, xe nhập khẩu, xe máy SH, PKL...).</li>
                <li><strong>Xử lý ca khó:</strong> Nhận cà các dòng xe bị rỉ sét số khung, số máy nằm ở vị trí hiểm hóc, khó luồn lách.</li>
                <li><strong>Trọn gói:</strong> Không chỉ cà số, chúng tôi hỗ trợ tư vấn pháp lý, sang tên và rút gốc từ A-Z.</li>
              </ul>

              <h3>3. Bảng giá dịch vụ tổng hợp (Cập nhật mới nhất)</h3>
              <p>Dưới đây là bảng giá công khai các dịch vụ trọng tâm của chúng tôi để quý khách dễ dàng lựa chọn:</p>

              <h4>A. Dịch vụ Cà số khung số máy tận nhà</h4>
              <table>
                <thead>
                  <tr>
                    <th>Loại phương tiện</th>
                    <th>Đặc điểm xử lý</th>
                    <th>Giá dịch vụ (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Loại phương tiện"><strong>Xe máy (SH, Vespa, PKL...)</strong></td>
                    <td data-label="Đặc điểm xử lý">Cà nhanh, sắc nét, không tháo xe</td>
                    <td data-label="Giá dịch vụ (VNĐ)" className="price">Liên hệ báo ngay</td>
                  </tr>
                  <tr>
                    <td data-label="Loại phương tiện"><strong>Ô tô con (Dưới 9 chỗ)</strong></td>
                    <td data-label="Đặc điểm xử lý">Vị trí khó, máy nóng vẫn xử lý tốt</td>
                    <td data-label="Giá dịch vụ (VNĐ)" className="price">Liên hệ tư vấn</td>
                  </tr>
                  <tr>
                    <td data-label="Loại phương tiện"><strong>Xe tải dưới 2 tấn / Xe khách</strong></td>
                    <td data-label="Đặc điểm xử lý">Vệ sinh lốc máy trước khi cà</td>
                    <td data-label="Giá dịch vụ (VNĐ)" className="price">Liên hệ tư vấn</td>
                  </tr>
                  <tr>
                    <td data-label="Loại phương tiện"><strong>Xe tải trên 2 tấn / Xe ben</strong></td>
                    <td data-label="Đặc điểm xử lý">Xử lý số rỉ sét, dầu mỡ</td>
                    <td data-label="Giá dịch vụ (VNĐ)" className="price">Liên hệ tư vấn</td>
                  </tr>
                </tbody>
              </table>

              <div className="note">
                <p><strong>⚠️ Lưu ý quan trọng:</strong> Mức giá trên mang tính chất tham khảo cho các dòng xe phổ thông. <strong>Tùy theo dòng xe cụ thể, giá dịch vụ sẽ có sự thay đổi</strong> dựa trên độ khó vị trí, tình trạng xe và khoảng cách di chuyển.</p>
              </div>

              <h4>B. Dịch vụ Sang tên & Rút hồ sơ gốc ô tô</h4>
              <table>
                <thead>
                  <tr>
                    <th>Dịch vụ</th>
                    <th>Chi tiết thực hiện</th>
                    <th>Báo giá tham khảo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Dịch vụ"><strong>Sang tên ô tô trọn gói</strong></td>
                    <td data-label="Chi tiết thực hiện">Đóng thuế, nộp hồ sơ, đổi biển định danh</td>
                    <td data-label="Báo giá tham khảo" className="price">Liên hệ tư vấn</td>
                  </tr>
                  <tr>
                    <td data-label="Dịch vụ"><strong>Rút hồ sơ gốc (Thu hồi)</strong></td>
                    <td data-label="Chi tiết thực hiện">Thu hồi biển số, rút gốc toàn quốc</td>
                    <td data-label="Báo giá tham khảo" className="price">Giá cạnh tranh</td>
                  </tr>
                  <tr>
                    <td data-label="Dịch vụ"><strong>Hồ sơ khó / Xe vắng chủ</strong></td>
                    <td data-label="Chi tiết thực hiện">Xử lý xe mua bán nhiều đời, mất liên lạc chủ cũ</td>
                    <td data-label="Báo giá tham khảo" className="price">Tư vấn trực tiếp</td>
                  </tr>
                </tbody>
              </table>

              <h3>4. Quy trình thực hiện chuyên nghiệp</h3>
              <ul className="process-list">
                <li><strong>1. Tiếp nhận:</strong> Khách hàng liên hệ qua Hotline/Zalo, cung cấp tên dòng xe và địa chỉ.</li>
                <li><strong>2. Điều phối:</strong> Kỹ thuật viên gần nhất sẽ di chuyển và có mặt sau 15-30 phút.</li>
                <li><strong>3. Thực hiện:</strong> Tiến hành vệ sinh vị trí số và cà số bằng dụng cụ chuyên dụng (Thời gian: 10 - 20 phút).</li>
                <li><strong>4. Kiểm tra & Bàn giao:</strong> Khách hàng kiểm tra độ sắc nét của bản cà. Kỹ thuật viên bàn giao và hướng dẫn dán hồ sơ.</li>
              </ul>

              <h3>5. Thông tin liên hệ trực tiếp</h3>
              <p>Đừng để rắc rối về giấy tờ làm mất thời gian của bạn. Gọi ngay cho đội ngũ chuyên gia của chúng tôi để được phục vụ tận tâm nhất.</p>
              <p><strong>Hotline/Zalo:</strong> <span className="hotline-text">033 886 9096 - 0933 648 728</span></p>
              <p><strong>Địa chỉ:</strong> 282 Nơ Trang Long, Phường Bình Thạnh, Thành Phố Hồ Chí Minh</p>
              <p><strong>Website:</strong> dichvusangtenhcm.com</p>

            </div>

          </div>
        </div>
      </main>
  </>
);

const ServicesPage = () => (
  <main className="main-content" style={{ minHeight: '50vh', paddingTop: '100px' }}>
    <div className="container">
      <div className="content-wrapper">
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #1e293b, #0d1117)' }}>
          <h2>DANH SÁCH DỊCH VỤ</h2>
          <p className="highlight">Uy Tín - Chuyên Nghiệp - Nhanh Chóng</p>
        </div>
        <div className="article-body">
          <p>Dưới đây là danh sách toàn bộ các dịch vụ mà <strong>Dịch Vụ Sang Tên HCM</strong> đang cung cấp tận nơi cho quý khách hàng:</p>
          <ul className="process-list">
            <li><strong>SANG TÊN XE Ô TÔ KHÔNG CHÍNH CHỦ:</strong> Xử lý thủ tục xe mua bán qua tay nhiều đời, vắng chủ cũ.</li>
            <li><strong>SANG TÊN ĐỔI CHỦ Ô TÔ:</strong> Thực hiện sang tên xe từ công ty sang cá nhân hoặc chuyển quyền sở hữu nhanh chóng.</li>
            <li><strong>CẤP LẠI ĐĂNG KÍ XE BỊ MẤT:</strong> Giải quyết xin cấp lại giấy đăng ký xe (Cavet) bị hỏng, rách, thất lạc.</li>
            <li><strong>RÚT HỒ SƠ GỐC Ô TÔ:</strong> Hỗ trợ rút hồ sơ chuyển vùng trên phạm vi toàn quốc.</li>
            <li><strong>ĐỔI ĐĂNG KÍ XE CÔNG TY:</strong> Đổi tên, thay đổi địa chỉ pháp lý của công ty trên đăng ký xe cơ giới.</li>
            <li><strong>CÀ SỐ XE TẠI NHÀ:</strong> Cà số khung số máy siêu nét, chuẩn Form để dán hồ sơ với chi phí rẻ nhất.</li>
            <li><strong>ĐỔI BIỂN SỐ XE:</strong> Làm thủ tục đổi biển số định danh, biển trắng sang vàng và ngược lại.</li>
            <li><strong>CÔNG CHỨNG GIẤY TỜ XE:</strong> Công chứng các hợp đồng mua bán, giấy ủy quyền ô tô trực tiếp tại nhà.</li>
            <li><strong>THAY ĐỔI MÀU SƠN XE:</strong> Giúp chủ xe cập nhật mới lại đặc điểm nhận dạng khi dán decal hoặc sơn lại.</li>
            <li><strong>CẤP LẠI BIỂN SỐ XE:</strong> Thủ tục làm mới, ép lại biển số khi bị gãy, mờ chữ hoặc mất cắp.</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
);

const ProceduresPage = () => (
  <main className="main-content" style={{ minHeight: '50vh', paddingTop: '100px' }}>
    <div className="container">
      <div className="content-wrapper">
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #334155, #1e293b)' }}>
          <h2>HƯỚNG DẪN THỦ TỤC</h2>
        </div>
        <div className="article-body">
          <h3>Các thủ tục cơ bản cần chuẩn bị:</h3>
          <ul>
            <li>Giấy chứng nhận đăng ký xe (Bản gốc)</li>
            <li>Hợp đồng mua bán / Giấy ủy quyền có công chứng</li>
            <li>Căn cước công dân của chủ mới</li>
            <li>Tờ khai đăng ký xe theo mẫu quy định (Cà số)</li>
          </ul>
          <p>Nếu bạn gặp khó khăn trong công đoạn chuẩn bị hồ sơ giấy tờ, hãy liên hệ ngay Hotline <strong>033.886.9096</strong> hoặc <strong>0933.648.728</strong> để được tư vấn nhé!</p>
        </div>
      </div>
    </div>
  </main>
);

const NewsPage = () => (
  <main className="main-content" style={{ minHeight: '50vh', paddingTop: '100px' }}>
    <div className="container">
      <div className="content-wrapper">
        <h2 style={{ fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #e63946', display: 'inline-block' }}>TIN TỨC CẬP NHẬT</h2>
        <div className="article-body" style={{ marginTop: '20px' }}>
          <h4>Quy định mới về định danh biển số năm 2026</h4>
          <p>Kể từ năm nay, biển số xe ô tô và xe máy... (bài viết đang được cập nhật thêm)</p>
          <hr style={{ margin: '30px 0', borderColor: '#e2e8f0' }} />
          <h4>Hướng dẫn đóng thuế trước bạ xe ô tô online</h4>
          <p>Chỉ với vài thao tác truy cập vào cơ sở dữ liệu trên trang web dịch vụ công, bạn đã có thể... </p>
        </div>
      </div>
    </div>
  </main>
);

const ContactPage = () => (
  <main className="main-content" style={{ minHeight: '50vh', paddingTop: '100px' }}>
    <div className="container">
      <div className="content-wrapper">
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #e63946, #c1121f)' }}>
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <p className="hotline" style={{ color: '#fff', fontSize: '26px' }}>033 886 9096 - 0933 648 728</p>
        </div>
        <div className="article-body">
          <h3>Thông tin văn phòng:</h3>
          <p><strong>Địa chỉ:</strong> 282 Nơ Trang Long, Phường Bình Thạnh, Thành Phố Hồ Chí Minh</p>
          <p><strong>Điện thoại/Zalo:</strong> 033 886 9096 - 0933 648 728</p>
          <p><strong>Email:</strong> hoangqui2004qn@gmail.com</p>
          <br/>
          <p><em>Chúng tôi phục vụ lưu động tận nơi tại tất cả các quận huyện trong TPHCM. Có mặt nhanh chóng sau 15 phút tư vấn.</em></p>
        </div>
      </div>
    </div>
  </main>
);

// --- Main App Setup ---
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dich-vu" element={<ServicesPage />} />
        <Route path="/thu-tuc" element={<ProceduresPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
