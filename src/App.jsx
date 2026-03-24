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
      title1: 'Build the Future with',
      title2: 'AI Agents',
      desc: 'NexusForge is a premium digital product agency. We blend futuristic AI integrations with breathtaking UI/UX design to craft scalable web applications and autonomous agents.',
      cta1: 'Start Project',
      cta2: 'View Our Work'
    },
    insights: [
      { metric: 150, suffix: '+', desc: 'Products Launched' },
      { metric: 50, suffix: '+', desc: 'AI Agents Deployed' },
      { metric: 99.9, suffix: '%', desc: 'Uptime Delivery' },
      { metric: 50, suffix: 'M', desc: 'Revenue Generated' }
    ],
    services: {
      label: 'What We Do',
      title: 'Architecting the Modern Web',
      items: [
        {
          icon: '🤖',
          title: 'AI Agents & Workflows',
          desc: 'Custom autonomous agents that handle customer support, data entry, and lead generation. Connects seamlessly with Slack, WhatsApp, and CRM.'
        },
        {
          icon: '❖',
          title: 'Enterprise Web Dev',
          desc: 'High-performance React, Vite, and Next.js applications designed for scale and flawless interactive experiences.'
        },
        {
          icon: '✦',
          title: 'AI Integration',
          desc: 'LLM implementation (OpenAI, LangChain) using GLM Server for cost-efficient, high-performance capabilities.'
        },
        {
          icon: '✧',
          title: 'UI/UX Design',
          desc: 'Conversion-focused interfaces centered around glassmorphism and purposeful micro-animations.'
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
      p1: 'At NexusForge Studio, we believe that the intersection of beautiful design and profound technical architecture is where industry leaders are made.',
      p2: 'Every line of code and every pixel is crafted with intent. We engineer scalable, intelligent platforms that drive real business growth.'
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
      desc: 'We collaborate with ambitious brands to create impactful digital products.',
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
      title1: 'ابنِ المستقبل مع',
      title2: 'عملاء الذكاء الاصطناعي',
      desc: 'نيكسوس فورج هي وكالة منتجات رقمية رائدة. نحن نمزج بين تكاملات الذكاء الاصطناعي المستقبلية وتصميم واجهة المستخدم المذهل لصياغة تطبيقات ويب وعملاء مستقلين.',
      cta1: 'ابدأ المشروع',
      cta2: 'مشاهدة أعمالنا'
    },
    insights: [
      { metric: 150, suffix: '+', desc: 'منتج تم إطلاقه' },
      { metric: 50, suffix: '+', desc: 'عميل ذكاء اصطناعي' },
      { metric: 99.9, suffix: '%', desc: 'جاهزية الخدمة' },
      { metric: 50, suffix: 'M', desc: 'إيرادات محققة' }
    ],
    services: {
      label: 'ماذا نفعل',
      title: 'بناء الويب الحديث',
      items: [
        {
          icon: '🤖',
          title: 'عملاء الذكاء الاصطناعي',
          desc: 'عملاء مستقلون مخصصون يتعاملون مع دعم العملاء، وإدخال البيانات، وجلب العملاء المحتملين.'
        },
        {
          icon: '❖',
          title: 'تطوير ويب للمؤسسات',
          desc: 'تطبيقات React و Vite و Next.js عالية الأداء مصممة للتوسع وتجارب تفاعلية مثالية.'
        },
        {
          icon: '✦',
          title: 'تكامل الذكاء الاصطناعي',
          desc: 'تنفيذ النماذج اللغوية (OpenAI, LangChain) باستخدام خادم GLM للحصول على قدرات عالية الأداء.'
        },
        {
          icon: '✧',
          title: 'تصميم الواجهة',
          desc: 'واجهات تركز على التحويل وتعتمد على أنظمة تصميم Glassmorphism والتحريك الدقيق.'
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
      p2: 'كل سطر من الكود وكل بكسل يتم وضعه بعناية. نحن نهندس منصات ذكية تدفع نمو الأعمال.'
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
        namePlaceholder: 'أحمد محمد',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'ahmad@example.com',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن مشروعك...',
        submit: 'ابدأ المشروع'
      }
    },
    footer: {
      rights: '© ٢٠٢٦ استوديو نيكسوس فورج. جميع الحقوق محفوظة.'
    }
  },
  he: {
    dir: 'rtl',
    nav: {
      insights: 'תובנות',
      services: 'שירותים',
      portfolio: 'תיק עבודות',
      about: 'אודות',
      blog: 'בלוג',
      contact: 'צור קשר',
      startProject: 'התחל פרויקט'
    },
    hero: {
      title1: 'בנו את העתיד עם',
      title2: 'סוכני בינה מלאכותית',
      desc: 'NexusForge היא סוכנות מוצרים דיגיטליים פרימיום. אנו משלבים אינטגרציות AI עתידניות עם עיצוב UI/UX עוצר נשימה ליצירת אפליקציות אינטרנט וסוכנים אוטונומיים.',
      cta1: 'התחל פרויקט',
      cta2: 'צפה בעבודות שלנו'
    },
    insights: [
      { metric: 150, suffix: '+', desc: 'מוצרים שהושקו' },
      { metric: 50, suffix: '+', desc: 'סוכני AI שנפרסו' },
      { metric: 99.9, suffix: '%', desc: 'זמינות מערכת' },
      { metric: 50, suffix: 'M', desc: 'הכנסות שנוצרו' }
    ],
    services: {
      label: 'מה אנחנו עושים',
      title: 'ארכיטקטורה של האינטרנט המודרני',
      items: [
        {
          icon: '🤖',
          title: 'סוכני AI ותהליכי עבודה',
          desc: 'סוכנים אוטונומיים מותאמים אישית המטפלים בשירות לקוחות, הזנת נתונים ויצירת לידים.'
        },
        {
          icon: '❖',
          title: 'פיתוח אינטרנט ארגוני',
          desc: 'אפליקציות React, Vite ו-Next.js עתירות ביצועים המיועדות לקנה מידה רחב.'
        },
        {
          icon: '✦',
          title: 'אינטגרציית AI',
          desc: 'הטמעת מודלי שפה (OpenAI, LangChain) באמצעות שרת GLM ליכולות מתקדמות.'
        },
        {
          icon: '✧',
          title: 'עיצוב UI/UX',
          desc: 'ממשקים ממוקדי המרה המבוססים על מערכות עיצוב Glassmorphism ואנימציות עדינות.'
        }
      ]
    },
    portfolio: {
      label: 'העבודות שלנו',
      title: 'תיק עבודות נבחר',
      items: [
        {
          title: 'Aura E-Commerce',
          desc: 'חנות גלובלית עם עוזר קניות אישי מבוסס AI.',
          img: portDashboard,
          featured: true
        },
        {
          title: 'Vortex Analytics',
          desc: 'לוח בקרה לניתוח נתונים המופעל על ידי תובנות AI בזמן אמת.',
          img: portData
        },
        {
          title: 'Lumina CRM',
          desc: 'מערכת ניהול לקוחות ארגונית המבוססת על ארכיטקטורת React מהירה.',
          gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)'
        }
      ],
      cta: 'התחל פרויקט'
    },
    about: {
      label: 'מאחורי הנקסוס',
      title: 'מונעים על ידי חדשנות. מוגדרים על ידי איכות.',
      p1: 'בסטודיו NexusForge אנו מאמינים כי המפגש בין עיצוב יפה לארכיטקטורה טכנית עמוקה הוא המקום שבו נוצרים מובילי שוק.',
      p2: 'כל שורת קוד וכל פיקסל מעוצבים בכוונה. אנו מהנדסים פלטפורמות חכמות המניעות צמיחה עסקית.'
    },
    blog: {
      label: 'מחשבות אחרונות',
      title: 'הבלוג של נקסוס',
      items: [
        {
          tag: 'טכנולוגיה',
          title: 'עתיד אפליקציות האינטרנט מבוססות ה-AI',
          date: '12 באוקטובר 2026',
          img: blogTech
        },
        {
          tag: 'עיצוב',
          title: 'Glassmorphism בהקשרים ארגוניים',
          date: '28 בספטמבר 2026',
          gradient: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), transparent)'
        },
        {
          tag: 'פיתוח',
          title: 'ארכיטקטורת React Server Components מודרנית',
          date: '15 בספטמבר 2026',
          gradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent)'
        }
      ]
    },
    contact: {
      label: 'צרו קשר',
      title: 'מוכנים לעצב את העתיד הדיגיטלי שלכם?',
      desc: 'אנו משתפים פעולה עם מותגים שאפתניים ליצירת מוצרים דיגיטליים בעלי השפעה.',
      details: {
        email: 'אימייל',
        location: 'מיקום',
        locValue: 'ירדן'
      },
      form: {
        name: 'שם',
        namePlaceholder: 'דוד כהן',
        email: 'אימייל',
        emailPlaceholder: 'david@example.com',
        message: 'הודעה',
        messagePlaceholder: 'ספרו לנו על הפרויקט שלכם...',
        submit: 'התחל פרויקט'
      }
    },
    footer: {
      rights: '© 2026 סטודיו NexusForge. כל הזכויות שמורות.'
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
    <div className={`app-container ${lang !== 'en' ? 'font-rtl' : ''}`}>
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
          
          <div className="lang-switcher-mobile">
            {['en', 'ar', 'he'].map((l) => (
              <button key={l} onClick={() => { setLang(l); setMenuOpen(false); }} className={lang === l ? 'active' : ''}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-actions animate-fade-in-down">
          <div className="lang-switcher-desktop">
            {['en', 'ar', 'he'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? 'active' : ''}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
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
