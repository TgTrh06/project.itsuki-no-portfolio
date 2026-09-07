import { useState } from 'react'
import Header from './components/Header'
import Arrow from './components/Arrow'
import Project from './components/Project'
import { practices, profile, projects } from './data/portfolio'
import useMotion from './hooks/useMotion'

export default function App() {
  const { reduced, systemReduction, toggleReduction } = useMotion()
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('success')
    } catch {
      setCopyState('error')
    }
  }

  return (
    <>
      <a className="skip-link" href="#noi-dung">Bỏ qua điều hướng</a>
      <Header />
      <main id="noi-dung" tabIndex={-1}>
        <section className="hero container" id="dau-trang" data-section aria-labelledby="hero-title">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow hero-intro"><span className="intro-rule" />TÙNG TRỊNH / BACKEND DEVELOPER</p>
              <h1 id="hero-title">Vững từ gốc.<br />Chạm đến<br /><em>trải nghiệm.</em></h1>
              <p className="hero-description">Mình là Tùng — một backend developer yêu những hệ thống rõ ràng và những trải nghiệm dễ dùng. Mình xây ứng dụng web, từ luồng dữ liệu đến chi tiết trên màn hình.</p>
              <div className="hero-actions"><a className="button-primary" href="#du-an">Khám phá dự án<Arrow down /></a><a className="text-link" href="#gioi-thieu">Một chút về mình<Arrow /></a></div>
            </div>
            <figure className="hero-art">
              <div className="art-topline"><span>THE ART OF BUILDING</span><span>01 — ∞</span></div>
              <div className="landscape-window"><img src={profile.landscape} alt="Núi Phú Sĩ dưới bầu trời xanh, trong tranh phong cảnh tông màu trầm từ hồ sơ GitHub của Tùng." width="2400" height="700" fetchPriority="high" /><span className="art-side-label" aria-hidden="true">WITH PATIENCE & INTENTION</span></div>
              <figcaption><span><span className="japanese-note" lang="ja">静かに、着実に。</span><span className="art-quote">Quietly, steadily.</span></span><span className="art-caption">Từng chi tiết nhỏ.<br />Từng bước vững vàng.</span></figcaption>
            </figure>
          </div>
          <div className="hero-foot"><span>BACKEND MIND. PRODUCT HEART.</span><a href="#du-an">Cuộn để khám phá<Arrow down /></a><span>PORTFOLIO / 2026</span></div>
        </section>

        <section className="work-section container" id="du-an" data-section tabIndex={-1} aria-labelledby="work-title">
          <div className="section-heading forest-heading" data-reveal><div><p className="eyebrow section-eyebrow">01 / ITSUMORI — NHỮNG DỰ ÁN CỦA MÌNH</p><h2 id="work-title"><span className="forest-name">Itsumori.</span>Khu rừng mình<br /><em>gây dựng.</em></h2></div><div className="section-description"><p>Itsumori là nơi mình tập hợp những sản phẩm đang xây và nuôi dưỡng. Mỗi dự án bắt đầu từ một điều mình muốn tìm hiểu, một nhu cầu muốn giải quyết — rồi lớn dần qua từng quyết định, từng lần sửa và từng trải nghiệm thực tế.</p><a className="text-link" href={profile.repositories} target="_blank" rel="noreferrer">Khám phá các repository<span className="sr-only"> (mở tab mới)</span><Arrow diagonal /></a></div></div>
          <div className="projects">{projects.map((project) => <Project key={project.id} project={project} />)}</div>
        </section>

        <section className="about-section" id="gioi-thieu" data-section tabIndex={-1} aria-labelledby="about-title">
          <div className="container about-inner">
            <div className="about-statement" data-reveal><p className="eyebrow section-eyebrow">02 / CON NGƯỜI SAU DÒNG CODE</p><h2 id="about-title">Chậm một chút<br />để hiểu sâu.<br /><em>Chắc một chút<br />để đi xa.</em></h2><div className="signature">Tùng Trịnh<span>Backend Developer &<br />Full-stack Web Builder</span></div></div>
            <div className="about-content" data-reveal><p className="about-lead">Mình thích cảm giác khi những phần phức tạp bên trong kết nối thành một trải nghiệm đơn giản bên ngoài.</p><p>Từ du lịch, thương mại đến những quy trình đời thường, mình quan tâm đến backend dễ bảo trì, luồng dữ liệu rõ ràng và việc kiểm tra đầu vào cẩn thận. Mỗi quyết định về sản phẩm nên tôn trọng thời gian của người dùng.</p><p>Sự tĩnh lặng và tập trung của một khu rừng là nguồn cảm hứng cho cách mình làm việc: kiên nhẫn xây dựng, phát triển có chủ ý. Itsumori là cách mình gọi khu rừng những dự án ấy.</p><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Gặp mình trên GitHub<span className="sr-only"> (mở tab mới)</span><Arrow diagonal /></a><div className="next-season"><p className="japanese-note" lang="ja">次の季節</p><h3>Mùa tiếp theo</h3><p>Mình muốn đào sâu system design, kiến trúc API và xác thực an toàn; xây những sản phẩm giúp việc khám phá, lên kế hoạch và công việc hằng ngày đơn giản hơn. Mình cũng hướng đến đóng góp open source và trưởng thành qua những cộng tác kỹ thuật có ý nghĩa.</p></div></div>
            <div className="practices">{practices.map((practice) => <div className="practice" key={practice.number} data-reveal><span className="practice-number">/{practice.number}</span><div><h3>{practice.title}</h3><p>{practice.description}</p><span className="practice-tools">{practice.tools}</span></div></div>)}</div>
          </div>
        </section>

        <section className="contact-section container" id="lien-he" data-section tabIndex={-1} aria-labelledby="contact-title">
          <div className="contact-top" data-reveal><p className="eyebrow section-eyebrow">03 / MỘT CUỘC TRÒ CHUYỆN MỚI</p><span className="contact-note">Ý tưởng, công việc, hay đơn giản là lời chào.</span></div>
          <div className="contact-main" data-reveal><h2 id="contact-title">Điều hay ho tiếp theo,<br /><em>bắt đầu từ lời chào.</em></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label={`Gửi email cho Tùng tại ${profile.email}`}><Arrow diagonal /></a></div>
          <div className="contact-bottom"><div className="email-group"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-button" onClick={copyEmail} aria-label="Sao chép địa chỉ email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.5" /></svg></button><p className="copy-status" role="status">{copyState === 'success' ? 'Đã sao chép địa chỉ email.' : copyState === 'error' ? 'Chưa sao chép được. Bạn có thể chọn và sao chép địa chỉ email ở trên.' : ''}</p></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub / TgTrh06<span className="sr-only"> (mở tab mới)</span><Arrow diagonal /></a></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container forest-signoff"><p lang="ja">焦らず築き、意志をもって育つ。</p><p>Kiên nhẫn gây dựng, lớn lên với chủ ý.</p></div><div className="container footer-inner"><a href="#dau-trang" className="wordmark" aria-label="Itsuki — về đầu trang">itsuki<span>.</span></a><span className="footer-credit">© {new Date().getFullYear()} Tùng Trịnh · Built with intention.</span><div className="footer-tools"><button className="motion-toggle" aria-pressed={reduced} disabled={systemReduction} onClick={toggleReduction}><span className="motion-indicator" aria-hidden="true" />{systemReduction ? 'Đã giảm chuyển động theo hệ thống' : 'Giảm chuyển động'}</button><a href="#dau-trang" className="back-to-top" aria-label="Về đầu trang"><Arrow down /></a></div></div></footer>
    </>
  )
}
