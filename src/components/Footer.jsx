export default function Footer() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/politechs-uk', icon: 'bi bi-linkedin' },
    { name: 'Facebook', url: 'https://www.facebook.com/politechs.uk', icon: 'bi bi-facebook' },
    { name: 'X (Twitter)', url: 'https://x.com/politechs_uk', icon: 'bi bi-twitter-x' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <span className="brand-footer">PoliTechs.uk</span>
            <p className="footer-tagline mb-0">Connecting politics &amp; technology for a better society.</p>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="social-links">
              {socials.map(({ name, url, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="social-link">
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="footer-copy mb-0">© {new Date().getFullYear()} PoliTechs.uk</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
