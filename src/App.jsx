import { useState } from 'react'
import './App.css'

const gallery = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  image: `/images/gallery/cut${index + 1}.PNG`,
  title: `City View Cuts — Look ${String(index + 1).padStart(2, '0')}`,
}))

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
]

const services = [
  {
    number: '01',
    label: 'THE SIGNATURE EXPERIENCE',
    title: 'PRIVATE HAIRCUT',
    description: 'A personalized haircut and precision lineup, delivered to the comfort of your own space.',
    price: '$100',
    priceLabel: 'STARTING AT',
    featured: true,
  },
  {
    number: '02',
    label: 'ADDITIONAL GROOMING',
    title: 'BEARD DETAILING',
    description: 'Beard trimming and detailing to complement your haircut. Available for an additional charge.',
    price: 'CUSTOM',
    priceLabel: 'ADDITIONAL CHARGE',
    featured: false,
  },
  {
    number: '03',
    label: 'PERSONALIZED SERVICE',
    title: 'SPECIALTY CUTS',
    description: 'Detailed or more complex haircut styles tailored to your preferences. Additional charges may apply.',
    price: 'CUSTOM',
    priceLabel: 'PRICING',
    featured: false,
  },
]

const bookingSteps = [
  { number: '01', title: 'GET IN TOUCH', description: 'Call or text Giovanni to request an appointment.' },
  { number: '02', title: 'CONFIRM THE DETAILS', description: 'Discuss your haircut, location, preferred time, and final price.' },
  { number: '03', title: 'ENJOY YOUR EXPERIENCE', description: 'Giovanni comes to your location for your private grooming appointment.' },
]

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="website">
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="/images/branding/city-view-cuts-logo.jpeg" alt="City View Cuts logo" />
          <span className="brand-text">
            <span className="brand-name">CITY VIEW CUTS</span>
            <span className="brand-year">EST. 2010</span>
          </span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={menuOpen ? 'navigation open' : 'navigation'}>
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-book-button" href="#book-now" onClick={() => setMenuOpen(false)}>BOOK NOW</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-background"></div>
          <div className="hero-shade"></div>
          <div className="hero-content">
            <p className="eyebrow">JERSEY CITY · PRIVATE GROOMING</p>
            <h1>YOUR BARBER.<br />YOUR SPACE.<br /><em>YOUR EXPERIENCE.</em></h1>
            <p className="hero-description">Elevating men's grooming with a personalized barber experience delivered to the comfort of your own space.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#book-now">BOOK YOUR EXPERIENCE <span>→</span></a>
              <a className="secondary-button" href="#gallery">EXPLORE THE WORK <span>→</span></a>
            </div>
            <div className="hero-features">
              <div className="hero-feature"><span className="feature-icon">⌖</span><span>PRIVATE<br />GROOMING</span></div>
              <div className="hero-feature"><span className="feature-icon">✂</span><span>PRECISION<br />CUTS</span></div>
              <div className="hero-feature"><span className="feature-icon">♛</span><span>PREMIUM<br />EXPERIENCE</span></div>
            </div>
            <p className="hero-tagline">STYLE · CONFIDENCE · ON YOUR TERMS</p>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="about-layout">
            <div className="about-image-column">
              <div className="about-image-frame">
                <img src="/images/branding/giovanni-about.png" alt="Giovanni providing a private grooming experience" className="about-image" />
              </div>
              <div className="about-image-caption"><span>THE MAN BEHIND THE CRAFT</span><span>EST. 2010</span></div>
            </div>
            <div className="about-content">
              <p className="section-label">01 / MEET THE BARBER</p>
              <h2>MEET<br /><em>GIOVANNI.</em></h2>
              <div className="about-gold-line"></div>
              <p className="about-intro">More than a barber. A craftsman dedicated to precision, personal service, and making every client look and feel their best.</p>
              <p className="about-paragraph">Since 2010, Giovanni has been building City View Cuts around a simple belief: exceptional grooming should be personal, convenient, and tailored to the individual.</p>
              <p className="about-paragraph">Whether you're preparing for an important occasion or maintaining your signature look, Giovanni brings his skills and attention to detail directly to you. No crowded waiting rooms. No rushed appointments. Just a personalized grooming experience in the comfort of your own space.</p>
              <div className="about-highlights">
                <div className="about-highlight"><strong>2010</strong><span>ESTABLISHED</span></div>
                <div className="about-highlight"><strong>PRIVATE</strong><span>GROOMING</span></div>
                <div className="about-highlight"><strong>JERSEY CITY</strong><span>& SURROUNDING AREAS</span></div>
              </div>
              <a className="primary-button about-button" href="#book-now">BOOK WITH GIOVANNI <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="services-heading">
            <p className="section-label">02 / THE EXPERIENCE</p>
            <h2>EXCEPTIONAL GROOMING.<br /><em>ON YOUR TERMS.</em></h2>
            <p className="services-intro">Private grooming tailored to your style, your schedule, and your location. Every appointment is designed around quality, precision, and convenience.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.number} className={service.featured ? 'luxury-service-card featured-service' : 'luxury-service-card'}>
                <div className="service-card-top">
                  <span className="luxury-service-number">{service.number}</span>
                  {service.featured && <span className="featured-badge">SIGNATURE SERVICE</span>}
                </div>
                <p className="luxury-service-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p className="luxury-service-description">{service.description}</p>
                <div className="luxury-service-bottom">
                  <div className="luxury-service-pricing">
                    <span>{service.priceLabel}</span>
                    <strong>{service.price}</strong>
                  </div>
                  <a href="#book-now">INQUIRE NOW <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="services-pricing-note">
            <span className="pricing-note-icon">✦</span>
            <p>Regular haircuts start at $100 and include a lineup. Beard grooming is an additional charge. Final pricing may vary based on haircut complexity and travel distance. All pricing is confirmed before your appointment.</p>
          </div>
        </section>

        <section className="gallery-section section" id="gallery">
          <div className="gallery-heading">
            <div><p className="section-label">03 / THE PORTFOLIO</p><h2>THE ART OF<br /><em>THE CUT.</em></h2></div>
            <p>Every detail matters. Explore real work, real clients, and the craftsmanship behind City View Cuts.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <button className="gallery-card" key={item.id} type="button" onClick={() => setSelectedImage(item)} aria-label={`View ${item.title}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-overlay"><span>{item.title}</span><span>VIEW ↗</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="booking-section section" id="book-now">
          <div className="booking-inner">
            <p className="section-label">04 / PRIVATE APPOINTMENTS</p>
            <h2>YOUR STYLE.<br /><em>YOUR SCHEDULE.</em></h2>
            <p className="booking-lead">Luxury grooming comes to you. Contact Giovanni directly to discuss your haircut, location, availability, and final pricing.</p>
            <div className="booking-steps">
              {bookingSteps.map((step) => (
                <div className="booking-step" key={step.number}>
                  <span className="booking-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="booking-contact-card">
              <p className="booking-contact-label">READY FOR YOUR NEXT CUT?</p>
              <h3>BOOK DIRECTLY WITH GIOVANNI</h3>
              <a className="booking-phone" href="tel:+12017056506">(201) 705-6506</a>
              <div className="booking-actions">
                <a className="primary-button" href="tel:+12017056506">CALL GIOVANNI <span>↗</span></a>
                <a className="secondary-button" href="sms:+12017056506">TEXT GIOVANNI <span>↗</span></a>
              </div>
              <a className="booking-email" href="mailto:cityviewcuts@gmail.com">cityviewcuts@gmail.com</a>
              <p className="booking-confirmation">Appointments are confirmed directly by Giovanni. Sending a message does not guarantee a booking.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>CITY VIEW CUTS © {new Date().getFullYear()}</span>
        <span>EST. 2010 · JERSEY CITY, NJ</span>
        <span>WEBSITE BY R&L ASSEMBLED TECHNOLOGIES</span>
      </footer>

      {selectedImage && (
        <div className="lightbox" role="presentation" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close image">✕</button>
          <img src={selectedImage.image} alt={selectedImage.title} onClick={(event) => event.stopPropagation()} />
          <p>{selectedImage.title}</p>
        </div>
      )}
    </div>
  )
}

export default App
