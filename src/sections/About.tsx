

const HoverText = ({ text }: { text: string }) => (
  <>
    {text.split('').map((char, i) => (
      <span key={i} className="hover-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid-new">
        {/* Left Column */}
        <div className="about-text-col reveal">
          <div className="about-intro">
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px', letterSpacing: '0.15em' }}>Tentang Saya</span>
            <h2 className="interactive-title">
              <span className="line"><HoverText text="Saya " /><em><HoverText text="membangun" /></em></span>
              <span className="line"><HoverText text="sistem yang " /></span>
              <span className="line"><em><HoverText text="bekerja " /></em><HoverText text="untukmu." /></span>
            </h2>
            <p>
              Saya Aldy, builder di Sokara, studio digital solutions berbasis AI. Latar belakang saya ekonomi dan analisis data, jadi sebelum saya bangun sesuatu, saya pelajari dulu metrik bisnisnya seperti risiko, proyeksi, dan potensinya. Setelah itu barulah saya eksekusi menjadi sistem nyata, mengandalkan AI Agent sebagai tim teknis andalan saya.
            </p>
            <br/>
            <p>
              Saya juga pernah memegang sendiri bisnis F&B dari nol di tahun 2019, jadi saya sangat mengerti rasanya menjadi pemilik usaha yang harus memikirkan beban operasional, bukan sekadar sudut pandang developer yang hanya menerima requirements. Pengalaman itu yang membuat saya paham mengapa UMKM sering ragu beralih ke ranah digital. Bukan karena mereka enggan, melainkan karena selama ini solusi yang ada terasa terlalu rumit atau kurang menjawab kebutuhan asli di lapangan.
            </p>
            <br/>
            <p>
              Melalui Sokara, saya telah membangun berbagai solusi. Mulai dari sistem kasir untuk apotek yang keamanannya terjamin dari manipulasi data, hingga portal belajar interaktif yang hemat biaya operasional namun tetap terasa premium. Intinya, saya hadir untuk memberikan sistem digital sekelas agensi yang bisa dieksekusi secara mandiri. Hasilnya jelas lebih cepat, efisien, dan tetap akurat secara hitungan bisnis.
            </p>
            <br/>
            <p>
              AI itu salah satu hal yang paling bikin aku nagih buat dioprek. Dari nyusun system prompt, ngetes berbagai skenario, sampe iterasi berkali-kali cuma buat nyari versi yang paling pas itu semua prosesnya justru yang bikin seru, bukan cuma hasil akhirnya.
            </p>
          </div>
          
          <hr className="about-divider" />
          
          <div className="about-title-row">
            <h3>/ Aldy Alfarisy</h3>
            <span>DIGITAL SOLUTIONS BUILDER</span>
          </div>
          
          <div className="about-timeline-section">
            <h4 className="timeline-heading">PERJALANAN KARIR</h4>
            <ul className="timeline-list">
              <li>
                <span className="timeline-year">'20</span>
                <span className="timeline-desc">Memulai karir sebagai Web Designer</span>
              </li>
              <li>
                <span className="timeline-year">'22</span>
                <span className="timeline-desc">Fokus ke Front-End Development & UI/UX</span>
              </li>
              <li>
                <span className="timeline-year">'24</span>
                <span className="timeline-desc">Menjadi Freelancer Penuh Waktu</span>
              </li>
            </ul>
          </div>
          
          <div className="about-footer-text">
            <span>* Lebih dari 4 tahun pengalaman</span>
            <span>* Terbuka untuk role senior / spesialis</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-visual-col reveal" style={{ transitionDelay: '0.1s' }}>
          <img src="/portrait.jpg" alt="Yudha - Web Designer" className="about-portrait" />
          
          <div className="vitals-section">
            <div className="vitals-header">
              <h3>Data Diri</h3>
              <span>VOL. 04 · '24</span>
            </div>
            
            <div className="vital-row">
              <div className="vital-label">SAAT INI</div>
              <div className="vital-content">
                <h4>Freelance Web Designer & Developer</h4>
                <p>UI/UX Design · Frontend · Web Animations</p>
              </div>
            </div>
            
            <div className="vital-row">
              <div className="vital-label">SEBELUMNYA</div>
              <div className="vital-content">
                <h4>UI/UX Designer</h4>
                <p>Berbagai Digital Agency · Mendesain puluhan landing page</p>
              </div>
            </div>
            
            <div className="vital-row">
              <div className="vital-label">LOKASI</div>
              <div className="vital-content">
                <h4>Jakarta, Indonesia</h4>
                <p>WIB (UTC+7)</p>
              </div>
            </div>
            
            <div className="vital-row">
              <div className="vital-label">TERBUKA UNTUK</div>
              <div className="vital-content">
                <h4>Proyek Freelance & Kolaborasi</h4>
                <p>Tim yang berorientasi pada produk berkualitas tinggi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
