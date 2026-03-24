import React, { useEffect, useState } from 'react';
import './App.css';
import LogoIcon from './LogoIcon';
import heroAbstract from './assets/hero-abstract.png';
import portDashboard from './assets/portfolio-dashboard.png';
import portData from './assets/portfolio-data.png';
import blogTech from './assets/blog-tech.png';

const translations = {
  en: {
    dir: 'ltr',
    nav: {
      insights: 'Insights',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      startProject: 'Start Project'
    },
    hero: {
      title1: 'Architecting the',
      title2: 'Modern Web',
      desc: 'NexusForge is a premium digital product agency. We blend futuristic AI integrations with breathtaking UI/UX design to craft scalable web applications that redefine the industry standard.',
      cta1: 'Start Project',
      cta2: 'View Our Work'
    },
    insights: [
      { metric: 150, suffix: '+', desc: 'Products Launched' },
      { metric: 5, suffix: '+', desc: 'Years in Deep AI' },
      { metric: 99.9, suffix: '%', desc: 'Uptime Delivery' },
      { metric: 50, suffix: 'M', desc: 'Revenue Generated' }
    ],
    services: {
      label: 'What We Do',
      title: 'Architecting the Modern Web',
      items: [
        {
          icon: '✦',
          title: 'AI Integration',
          desc: 'We empower your web applications natively using the revolutionary GLM Server, integrating cost-efficient, high-performance LLM capabilities.'
        },
        {
          icon: '❖',
          title: 'Enterprise Web Dev',
          desc: 'High-performance React & Vite applications designed for scale, blazing fast speed, and flawless interactive experiences.'
        },
        {
          icon: '✧',
          title: 'UI/UX Design',
          desc: 'Bespoke design systems centered around glassmorphism, fluid typography, and purposeful micro-animations that captivate users.'
        }
      ]
    },
    portfolio: {
      label: 'Our Work',
      title: 'Selected Portfolios',
      items: [
        {
          title: 'Aura E-Commerce',
          desc: 'Global storefront with integrated AI personal shopper.',
          img: portDashboard,
          featured: true
        },
        {
          title: 'Vortex Analytics',
          desc: 'Data visualization dashboard powered by real-time LLM insights.',
          img: portData
        },
        {
          title: 'Lumina CRM',
          desc: 'Enterprise customer CRM utilizing hyper-fast React architectures.',
          gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)'
        }
      ],
      cta: 'Start Project'
    },
    about: {
      label: 'Behind The Forge',
      title: 'Driven by Innovation. Defined by Quality.',
      p1: 'At NexusForge Studio, we believe that the intersection of beautiful design and profound technical architecture is where industry leaders are made. We are a specialized collective of engineers and designers committed to pushing the boundaries of what the web can be.',
      p2: 'Every line of code and every pixel is crafted with intent. We don\'t just build websites; we engineer scalable, intelligent platforms that drive real business growth.'
    },
    blog: {
      label: 'Latest Thoughts',
      title: 'The Nexus Blog',
      items: [
        {
          tag: 'Technology',
          title: 'The Future of AI-Driven Web Applications',
          date: 'Oct 12, 2026',
          img: blogTech
        },
        {
          tag: 'Design',
          title: 'Glassmorphism in Enterprise Contexts',
          date: 'Sep 28, 2026',
          gradient: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), transparent)'
        },
        {
          tag: 'Development',
          title: 'React Server Components Architecture',
          date: 'Sep 15, 2026',
          gradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent)'
        }
      ]
    },
    contact: {
      label: 'Get in Touch',
      title: 'Ready to forge your digital future?',
      desc: 'We collaborate with ambitious brands to create impactful digital products. Whether you have a fully formed RFP or just an idea, let\'s build something exceptional.',
      details: {
        email: 'Email',
        location: 'Location',
        locValue: 'Jordan'
      },
      form: {
        name: 'Name',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'john@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project...',
        submit: 'Start Project'
      }
    },
    footer: {
      rights: '© 2026 NexusForge Studio. All rights reserved.'
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      insights: 'رؤى',
      services: 'خدمات',
      portfolio: 'أعمالنا',
      about: 'حول',
      blog: 'مدونة',
      contact: 'اتصل',
      startProject: 'ابدأ المشروع'
    },
    hero: {
      title1: 'هندسة',
      title2: 'الويب الحديث',
      desc: 'نيكسوس فورج هي وكالة منتجات رقمية رائدة. نحن نمزج بين تكاملات الذكاء الاصطناعي المستقبلية وتصميم واجهة المستخدم المذهل لصياغة تطبيقات ويب قابلة للتوسع تعيد تعريف معايير الصناعة.',
      cta1: 'ابدأ المشروع',
      cta2: 'مشاهدة أعمالنا'
    },
    insights: [
      { metric: 150, suffix: '+', desc: 'منتج تم إطلاقه' },
      { metric: 5, suffix: '+', desc: 'سنوات في الذكاء الاصطناعي' },
      { metric: 99.9, suffix: '%', desc: 'جاهزية الخدمة' },
      { metric: 50, suffix: 'M', desc: 'إيرادات محققة' }
    ],
    services: {
      label: 'ماذا نفعل',
      title: 'بناء الويب الحديث',
      items: [
        {
          icon: '✦',
          title: 'تكامل الذكاء الاصطناعي',
          desc: 'نشحن تطبيقات الويب الخاصة بك بقدرات الذكاء الاصطناعي باستخدام GLM Server الثوري.'
        },
        {
          icon: '❖',
          title: 'تطوير الويب للمؤسسات',
          desc: 'تطبيقات React و Vite عالية الأداء مصممة خصيصاً للتوسع والسرعة.'
        },
        {
          icon: '✧',
          title: 'تصميم الواجهة',
          desc: 'أنظمة تصميم مخصصة تركز على Glassmorphism والتحريك الدقيق الهادف.'
        }
      ]
    },
    portfolio: {
      label: 'أعمالنا',
      title: 'مشاريع مختارة',
      items: [
        {
          title: 'أورا للتجارة الإلكترونية',
          desc: 'واجهة متجر عالمية مع متسوق شخصي متكامل بالذكاء الاصطناعي.',
          img: portDashboard,
          featured: true
        },
        {
          title: 'فورتكس للتحليلات',
          desc: 'لوحة بيانات لتحليل البيانات مدعومة بالذكاء الاصطناعي في الوقت الفعلي.',
          img: portData
        },
        {
          title: 'لومينا لإدارة العملاء',
          desc: 'نظام إدارة عملاء للمؤسسات يعتمد على هندسة React فائقة السرعة.',
          gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)'
        }
      ],
      cta: 'ابدأ المشروع'
    },
    about: {
      label: 'خلف نيكسوس',
      title: 'مدفوعون بالابتكار. معرفون بالجودة.',
      p1: 'في استوديو نيكسوس فورج، نؤمن أن تقاطع التصميم الجميل والهندسة التقنية العميقة هو المكان الذي يُصنع فيه قادة الصناعة.',
      p2: 'نحن لا نبني مواقع ويب فحسب؛ بل نهندس منصات ذكية وقابلة للتوسع تدفع نمو الأعمال الحقيقي.'
    },
    blog: {
      label: 'أحدث الخواطر',
      title: 'مدونة نيكسوس',
      items: [
        {
          tag: 'تكنولوجيا',
          title: 'مستقبل تطبيقات الويب المدفوعة بالذكاء الاصطناعي',
          date: '١٢ أكتوبر ٢٠٢٦',
          img: blogTech
        },
        {
          tag: 'تصميم',
          title: 'Glassmorphism في سياق المؤسسات',
          date: '٢٨ سبتمبر ٢٠٢٦',
          gradient: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), transparent)'
        },
        {
          tag: 'تطوير',
          title: 'هندسة مكونات خادم React الحديثة',
          date: '١٥ سبتمبر ٢٠٢٦',
          gradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent)'
        }
      ]
    },
    contact: {
      label: 'تواصل معنا',
      title: 'هل أنت مستعد لصياغة مستقبلك الرقمي؟',
      desc: 'نحن نتعاون مع علامات تجارية طموحة لإنشاء منتجات رقمية مؤثرة.',
      details: {
        email: 'البريد الإلكتروني',
        location: 'الموقع',
        locValue: 'الأردن'
      },
      form: {
        name: 'الاسم',
        namePlaceholder: 'جون دو',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'john@example.com',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن مشروعك...',
        submit: 'ابدأ المشروع'
      }
    },
    footer: {
      rights: '© ٢٠٢٦ استوديو نيكسوس فورج. جميع الحقوق محفوظة.'
    }
  }
};

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = parseFloat(value);
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, value]);

  return (
    <div ref={setRef} className="insight-metric">
      {count % 1 === 0 ? count : count.toFixed(1)}{suffix}
    </div>
  );
};

function App() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

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
  }, [lang]);

  return (
    <div className={`app-container ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* NAVBAR */}
      <nav className="navbar container">
        <div className="logo animate-fade-in-down">
          <LogoIcon />
          <span>NexusForge</span>
        </div>
        
        <div className={`nav-links animate-fade-in-down ${menuOpen ? 'active' : ''}`}>
          <a href="#insights" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.insights}</a>
          <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.portfolio}</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href="#blog" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.blog}</a>
          <button onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMenuOpen(false); }} className="lang-toggle-mobile">
            {lang === 'en' ? 'Arabic' : 'English'}
          </button>
        </div>

        <div className="nav-actions animate-fade-in-down">
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="lang-toggle-desktop">
            {lang === 'en' ? 'EN | AR' : 'AR | EN'}
          </button>
          <a href="#contact" className="cta-button primary-cta">{t.nav.startProject}</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-glow-1 animate-pulse-slow"></div>
        <div className="hero-glow-2 animate-pulse-delayed"></div>
        <div className="container">
          <div className="hero-content animate-slide-up">
            <h1>{t.hero.title1}<br /><span className="text-gradient">{t.hero.title2}</span></h1>
            <p>{t.hero.desc}</p>
            <div className="hero-buttons">
              <a href="#contact" className="primary-btn button-scale">{t.hero.cta1}</a>
              <a href="#portfolio" className="secondary-btn button-scale">{t.hero.cta2}</a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-slide-up reveal-delay-2">
            <div className="hero-image-glass">
              <img src={heroAbstract} alt="NexusForge Heritage" className="floating-shape" />
            </div>
          </div>
        </div>
      </header>

      {/* INSIGHTS SECTION */}
      <section id="insights" className="insights-section">
        <div className="container">
          <div className="insights-grid reveal">
            {t.insights.map((item, idx) => (
              <div key={idx} className="insight-card pop-hover">
                <Counter value={item.metric} suffix={item.suffix} />
                <p className="insight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t.services.label}</span>
            <h2>{t.services.title}</h2>
          </div>
          <div className="services-grid reveal">
            {t.services.items.map((item, idx) => (
              <div key={idx} className={`glass-card service-card pop-hover reveal-delay-${idx + 1}`}>
                <div className="service-icon">{item.icon}</div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t.portfolio.label}</span>
            <h2>{t.portfolio.title}</h2>
          </div>
          <div className="portfolio-grid reveal">
            {t.portfolio.items.map((item, idx) => (
              <div key={idx} className={`portfolio-card ${item.featured ? 'featured-card' : ''} reveal-delay-${idx + 1}`}>
                <div className="portfolio-img-container">
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="portfolio-img" style={{ backgroundImage: item.img ? `url(${item.img})` : item.gradient, backgroundSize: 'cover' }}></div>
                  </div>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-cta-wrapper reveal">
            <a href="#contact" className="secondary-btn button-scale cta-portfolio">{t.portfolio.cta}</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-glow"></div>
        <div className="container">
          <div className="about-content reveal">
            <span className="section-label">{t.about.label}</span>
            <h2>{t.about.title}</h2>
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t.blog.label}</span>
            <h2>{t.blog.title}</h2>
          </div>
          <div className="blog-grid reveal">
            {t.blog.items.map((item, idx) => (
              <div key={idx} className={`glass-card blog-card pop-hover reveal-delay-${idx + 1}`}>
                <div className="blog-img" style={{ background: item.img ? `url(${item.img}) center/cover` : item.gradient }}></div>
                <div className="blog-content">
                  <span className="blog-tag">{item.tag}</span>
                  <a href="#"><h3 className="blog-title">{item.title}</h3></a>
                  <span className="blog-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="section-label">{t.contact.label}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.desc}</p>
              <div className="contact-details">
                <p><strong>{t.contact.details.email}:</strong> labusaleem@vytal.website</p>
                <p><strong>{t.contact.details.location}:</strong> {t.contact.details.locValue}</p>
              </div>
            </div>
            <div className="contact-form-wrapper reveal reveal-delay-2">
              <form className="contact-form glass-card">
                <div className="input-group">
                  <label htmlFor="name">{t.contact.form.name}</label>
                  <input type="text" id="name" className="smooth-input" placeholder={t.contact.form.namePlaceholder} />
                </div>
                <div className="input-group">
                  <label htmlFor="email">{t.contact.form.email}</label>
                  <input type="email" id="email" className="smooth-input" placeholder={t.contact.form.emailPlaceholder} />
                </div>
                <div className="input-group">
                  <label htmlFor="message">{t.contact.form.message}</label>
                  <textarea id="message" rows="4" className="smooth-input" placeholder={t.contact.form.messagePlaceholder}></textarea>
                </div>
                <button type="submit" className="primary-btn button-scale submit-btn">{t.contact.form.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container reveal">
        <div className="logo footer-logo">
          <LogoIcon />
          <span>NexusForge</span>
        </div>
        <div className="footer-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#portfolio">{t.nav.portfolio}</a>
          <a href="#blog">{t.nav.blog}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <p className="copyright">{t.footer.rights}</p>
      </footer>
    </div>
  );
}

export default App;
