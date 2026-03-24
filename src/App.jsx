import React, { useEffect } from 'react';
import './App.css';
import LogoIcon from './LogoIcon';
import heroAbstract from './assets/hero-abstract.png';
import portDashboard from './assets/portfolio-dashboard.png';
import portData from './assets/portfolio-data.png';
import blogTech from './assets/blog-tech.png';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar container">
        <div className="logo animate-fade-in-down" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon />
          NexusForge
        </div>
        <div className="nav-links animate-fade-in-down">
          <a href="#insights" className="nav-link">Insights</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="animate-fade-in-down">
          <a href="#contact" className="cta-button primary-cta">Start Project</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-glow-1 animate-pulse-slow"></div>
        <div className="hero-glow-2 animate-pulse-delayed"></div>
        <div className="container">
          <div className="hero-content animate-slide-up">
            <h1>We Forge<br /><span className="text-gradient">Digital Futures</span></h1>
            <p>
              NexusForge is a premium digital product agency.
              We blend futuristic AI integrations with breathtaking UI/UX design
              to craft scalable web applications that redefine the industry standard.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="primary-btn button-scale">Start Project</a>
              <a href="#portfolio" className="secondary-btn button-scale">View Our Work</a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-slide-up reveal-delay-2">
            <div className="hero-image-glass">
              <img src={heroAbstract} alt="NexusForge Abstract 3D Hero" className="floating" />
            </div>
          </div>
        </div>
      </header>

      {/* INSIGHTS SECTION (Metrics) */}
      <section id="insights" className="insights-section">
        <div className="container">
          <div className="insights-grid reveal">
            <div className="insight-card pop-hover">
              <div className="insight-metric">150+</div>
              <p className="insight-desc">Digital Products Launched</p>
            </div>
            <div className="insight-card pop-hover">
              <div className="insight-metric">5+</div>
              <p className="insight-desc">Years Specializing in Deep AI</p>
            </div>
            <div className="insight-card pop-hover">
              <div className="insight-metric">99.9%</div>
              <p className="insight-desc">Guaranteed Uptime Deliverability</p>
            </div>
            <div className="insight-card pop-hover">
              <div className="insight-metric">$50M</div>
              <p className="insight-desc">Client Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Do</span>
            <h2>Architecting the Modern Web</h2>
          </div>
          <div className="services-grid reveal">
            <div className="glass-card pop-hover reveal-delay-1">
              <div className="service-icon">✦</div>
              <h3 className="service-title">AI Integration</h3>
              <p className="service-desc">
                We empower your web applications natively using the revolutionary GLM Server, integrating cost-efficient, high-performance LLM capabilities.
              </p>
            </div>
            <div className="glass-card pop-hover reveal-delay-2">
              <div className="service-icon">❖</div>
              <h3 className="service-title">Enterprise Web Dev</h3>
              <p className="service-desc">
                High-performance React & Vite applications designed for scale,
                blazing fast speed, and flawless interactive experiences.
              </p>
            </div>
            <div className="glass-card pop-hover reveal-delay-3">
              <div className="service-icon">✧</div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-desc">
                Bespoke design systems centered around glassmorphism, fluid typography,
                and purposeful micro-animations that captivate users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Work</span>
            <h2>Selected Portfolios</h2>
          </div>
          <div className="portfolio-grid reveal">
            <div className="portfolio-card featured-card reveal-delay-1">
              <div className="portfolio-img" style={{ backgroundImage: `url(${portDashboard})` }}></div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Aura E-Commerce</h3>
                  <p>Global storefront with integrated AI personal shopper.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-card reveal-delay-2">
              <div className="portfolio-img" style={{ backgroundImage: `url(${portData})` }}></div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Vortex Analytics</h3>
                  <p>Data visualization dashboard powered by real-time LLM insights.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-card reveal-delay-3">
              <div className="portfolio-img" style={{ backgroundImage: 'linear-gradient(135deg, #831843, #701a75)' }}></div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Lumina CRM</h3>
                  <p>Enterprise customer CRM utilizing hyper-fast React architectures.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-cta-wrapper reveal">
            <a href="#contact" className="secondary-btn button-scale cta-portfolio">Start Project</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-glow"></div>
        <div className="container">
          <div className="about-content reveal">
            <span className="section-label">Behind The Forge</span>
            <h2>Driven by Innovation. Defined by Quality.</h2>
            <div className="about-text">
              <p>
                At NexusForge Studio, we believe that the intersection of beautiful design and profound technical architecture is where industry leaders are made. We are a specialized collective of engineers and designers committed to pushing the boundaries of what the web can be.
              </p>
              <p>
                Every line of code and every pixel is crafted with intent. We don't just build websites; we engineer scalable, intelligent platforms that drive real business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Latest Thoughts</span>
            <h2>The Nexus Blog</h2>
          </div>
          <div className="blog-grid reveal">
            <div className="glass-card blog-card pop-hover reveal-delay-1">
              <div className="blog-img" style={{ backgroundImage: `url(${blogTech})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="blog-content">
                <span className="blog-tag">Technology</span>
                <a href="#"><h3 className="blog-title">The Future of AI-Driven Web Applications</h3></a>
                <span className="blog-date">Oct 12, 2026</span>
              </div>
            </div>
            <div className="glass-card blog-card pop-hover reveal-delay-2">
              <div className="blog-img" style={{ background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent)' }}></div>
              <div className="blog-content">
                <span className="blog-tag">Design</span>
                <a href="#"><h3 className="blog-title">Glassmorphism in Enterprise Contexts</h3></a>
                <span className="blog-date">Sep 28, 2026</span>
              </div>
            </div>
            <div className="glass-card blog-card pop-hover reveal-delay-3">
              <div className="blog-img" style={{ background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.2), transparent)' }}></div>
              <div className="blog-content">
                <span className="blog-tag">Development</span>
                <a href="#"><h3 className="blog-title">React Server Components Architecture</h3></a>
                <span className="blog-date">Sep 15, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="section-label">Get in Touch</span>
              <h2>Ready to forge<br />your digital future?</h2>
              <p>
                We collaborate with ambitious brands to create impactful digital products.
                Whether you have a fully formed RFP or just an idea, let's build something exceptional.
              </p>
              <div className="contact-details">
                <p><strong>Email:</strong> labusaleem@vytal.website</p>
                <p><strong>Location:</strong> Jordan</p>
              </div>
            </div>
            <div className="contact-form-wrapper reveal reveal-delay-2">
              <form className="contact-form glass-card">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="smooth-input" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="smooth-input" placeholder="john@example.com" />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" className="smooth-input" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="primary-btn button-scale submit-btn">Start Project</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container reveal">
        <div className="logo footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon />
          NexusForge
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">© 2026 NexusForge Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
