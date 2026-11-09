import Scales from "@/components/Scales";
import { profile as p } from "@/content/profile";

const nav = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#egitim", label: "Eğitim" },
  { href: "#sertifikalar", label: "Sertifikalar" },
  { href: "#iletisim", label: "İletişim" },
];

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <header className="section-head">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      <span className="section-rule" aria-hidden="true" />
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5.5" width="18" height="13" />
      <path d="M3 5.5l9 7 9-7M3 18.5l6.8-6.6M21 18.5l-6.8-6.6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.45h-4v-5.72c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02v5.82h-4z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#hakkimda">
        İçeriğe geç
      </a>

      <nav className="topbar" aria-label="Ana menü">
        <div className="topbar-inner">
          <a href="#" className="brand">
            <Scales className="brand-mark" />
            <span>{p.nameUpper}</span>
          </a>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Kartvizitin yüz tasarımı: sol tarafta terazi ve dikey hat, sağda isim */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-emblem" aria-hidden="true">
            <span className="hero-line top" />
            <Scales className="hero-scales" />
            <span className="hero-line bottom" />
          </div>
          <div className="hero-text">
            <h1>{p.nameUpper}</h1>
            <p className="hero-title">{p.title.toLocaleUpperCase("tr-TR")}</p>
            <p className="hero-lead">
              İstanbul Üniversitesi Hukuk Fakültesi mezunu. Dava ve icra süreçlerinde dilekçe
              hazırlama, dosya takibi ve adliye işlemlerinde uygulamalı deneyim.
            </p>
            <ul className="hero-contact">
              <li>
                <PhoneIcon />
                <a href={p.phoneHref}>{p.phone}</a>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <main>
        <section id="hakkimda" className="section light">
          <div className="container">
            <SectionHead index="I" title="Hakkımda" />
            <div className="about-grid">
              <div className="about-text">
                {p.about.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <dl className="highlights">
                {p.highlights.map((h) => (
                  <div key={h.label}>
                    <dt>{h.value}</dt>
                    <dd>{h.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="deneyim" className="section light alt">
          <div className="container">
            <SectionHead index="II" title="Mesleki Deneyim" />
            <div className="firm">
              <h3>{p.experience.firm}</h3>
              <p className="muted">{p.experience.place}</p>
            </div>
            <ol className="timeline">
              {p.experience.roles.map((r) => (
                <li key={r.period}>
                  <div className="timeline-meta">
                    <span className="period">{r.period}</span>
                    <span className="role">{r.role}</span>
                  </div>
                  <div className="timeline-body">
                    <p>{r.text}</p>
                    <ul className="tags" aria-label="Çalışılan alanlar">
                      {r.areas.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="egitim" className="section dark">
          <div className="container">
            <SectionHead index="III" title="Eğitim" />
            <div className="edu-card">
              <div>
                <p className="edu-period">{p.education.period}</p>
                <h3>{p.education.school}</h3>
                <p className="edu-faculty">
                  {p.education.faculty} · {p.education.degree}
                </p>
              </div>
              <div className="edu-gpa">
                <span className="gpa-value">{p.education.gpa}</span>
                <span className="gpa-label">Genel Not Ortalaması</span>
                <span className="gpa-honor">{p.education.honor}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sertifikalar" className="section light">
          <div className="container">
            <SectionHead index="IV" title="Sertifikalar" />
            <ul className="cert-grid">
              {p.certificates.map((c) => (
                <li key={c.title}>
                  <span className="cert-date">{c.date}</span>
                  <h3>{c.title}</h3>
                  <span className="cert-issuer">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section light alt">
          <div className="container">
            <SectionHead index="V" title="Yetkinlikler" />
            <div className="three-col">
              <div className="panel">
                <h3>Yetenekler</h3>
                <ul className="plain-list">
                  {p.skills.map((s) => (
                    <li key={s.name}>
                      {s.name}
                      {s.level && <span className="muted"> · {s.level}</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3>Yabancı Dil</h3>
                {p.languages.map((l) => (
                  <div key={l.name}>
                    <p className="lang">
                      {l.name} <span className="badge">{l.level}</span>
                    </p>
                    <ul className="plain-list small">
                      {l.courses.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="panel">
                <h3>Kulüp ve Organizasyon</h3>
                <p className="club-name">{p.club.name}</p>
                <p className="muted small">{p.club.unit}</p>
                <p className="small">{p.club.text}</p>
                <ul className="tags">
                  {p.club.gains.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section dark contact">
          <div className="container">
            <SectionHead index="VI" title="İletişim" />
            <ul className="contact-grid">
              <li>
                <PhoneIcon />
                <span className="contact-label">Telefon</span>
                <a href={p.phoneHref}>{p.phone}</a>
              </li>
              <li>
                <MailIcon />
                <span className="contact-label">E-posta</span>
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </li>
              <li>
                <LinkedInIcon />
                <span className="contact-label">LinkedIn</span>
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                  {p.linkedinLabel}
                </a>
              </li>
              <li>
                <PinIcon />
                <span className="contact-label">Konum</span>
                <span>{p.location}</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Scales className="footer-mark" />
        <p>
          © {new Date().getFullYear()} {p.name} · {p.title}
        </p>
        <p className="footer-note">
          Bu site yalnızca tanıtım ve bilgilendirme amaçlıdır; hukuki danışmanlık teklifi niteliği
          taşımaz.
        </p>
      </footer>
    </>
  );
}
