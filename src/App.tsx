import React, { useEffect, useState, useRef } from "react";
import { setupScrollReveal } from "./reveal";

function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="brand brand-logo" aria-label="Home">
        <img src="/logo.png" alt="DESIRE AND ASPIRE INC" />
        <span className="brand-text"><strong>DESIRE & ASPIRE</strong></span>
      </a>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

type HomeSectionProps = { onOpenCard: () => void };

function HomeSection({ onOpenCard }: HomeSectionProps) {
  return (
    <section id="home" className="section home">
      <div className="home-card">
        <div className="home-bg" />
        <div className="home-content" />
        <div className="home-card-overlay" aria-hidden="true" role="button" tabIndex={0}
             onClick={onOpenCard}
             onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenCard(); }} />
      </div>
      <div className="home-cta">
        <a href="#contact" className="btn">Get in touch</a>
      </div>
    </section>
  );
}

function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use Intersection Observer to load video when it becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            // Load video sources when visible
            const sources = video.querySelectorAll("source");
            sources.forEach((source) => {
              if (source.dataset.src) {
                source.src = source.dataset.src;
              }
            });
            video.load();
            setIsVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" } // Start loading 50px before it's visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isVideoLoaded]);

  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-media" aria-hidden="true">
          <video
            ref={videoRef}
            className="about-video"
            poster="/vid-poster.jpg"
            preload="none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source data-src="/vid.webm" type="video/webm" />
            <source data-src="/vid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about-text">
          <h2>About DESIRE & ASPIRE </h2>
          <p>
            We are here to offer you top-quality injection moulding services. Our goal is to provide excellent work while making sure products stay top-notch and delivered on time.
          </p>
          <p>
            We use the latest technology and strict quality checks to ensure high standards in every project. Our team is skilled and committed to delivering precision and quality in everything we do.
          </p>
          <p>
            Time is important, and we understand that. You can trust us to meet your deadlines reliably and efficiently.
          </p>
          <p>
            Whether you need prototyping, small runs or large scale manufacturing, we’ve got you covered. Choose us for injection molding that’s all about quality, precision, and punctuality.
          </p>
          <p>
            Thank you for considering <strong>DESIRE & ASPIRE INC</strong>. We are excited to work with you and exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const machines = [
    { tonnage: "180 TON", dyeBarSize: "20”", opening: "450 MM", minWidth: "9”", maxShotWeight: "300 GM" },
    { tonnage: "280 TON", dyeBarSize: "24”", opening: "600 MM", minWidth: "12” / 10”", maxShotWeight: "700 GM / 650 GM" },
    { tonnage: "450 TON", dyeBarSize: "32”", opening: "1100 MM", minWidth: "17”", maxShotWeight: "1.5 KG" },
    { tonnage: "720 TON", dyeBarSize: "36”", opening: "1000 MM", minWidth: "16”", maxShotWeight: "3.5 KG" }
  ];

  return (
    <section id="services" className="section services">
      <h2>Injection Moulding Capacity</h2>
      <p className="muted center reveal">We operate 5 Programmable Logic Controller (PLC) machines, offering flexibility from prototyping to large-scale manufacturing.</p>

      <div className="cards">
        {machines.map((m, idx) => (
          <div key={idx} className={`card reveal reveal-delay-${(idx % 4) + 1}`}>
            <h3>{m.tonnage}</h3>
            <div className="kv">
              <div><strong>Dye Bar Size</strong><span>: {m.dyeBarSize}</span></div>
              <div><strong>Opening</strong><span>: {m.opening}</span></div>
              <div><strong>Min Width</strong><span>: {m.minWidth}</span></div>
              <div><strong>Max Shot Weight</strong><span>: {m.maxShotWeight}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        <div className="map reveal reveal-delay-1">
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=28.7841053009033,77.0544509887695&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="contact-card reveal reveal-delay-2">
          <div>
            <h3>DESIRE AND ASPIRE INC</h3>
            <p>(AN INJECTION MOULDING UNIT)</p>
            <p>
              G-131, SECTOR 3, BAWANA, DSIDC, BAWANA INDUSTRIAL AREA,<br />
              NEW DELHI - 110039
            </p>
          </div>
          <div className="contact-list">
            <a href="tel:+917529052912">+91 7529052912</a>
            <a href="mailto:info@desireandaspire.com">info@desireandaspire.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>© {new Date().getFullYear()} DESIRE AND ASPIRE INC. All rights reserved.</span>
      </div>
      <div>
        <span>
          Designed by <a href="https://instagram.com/ramneetzz" target="_blank" rel="noreferrer">Ramneet Singh</a>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  useEffect(() => {
    setupScrollReveal();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="reveal">
          <HomeSection onOpenCard={() => setIsCardOpen(true)} />
        </div>
        <div className="reveal">
          <AboutSection />
        </div>
        <section className="reveal">
          <ServicesSection />
        </section>
        <section className="reveal">
          <ContactSection />
        </section>
      </main>
      {isCardOpen && (
        <div className="card-modal" onClick={() => setIsCardOpen(false)}>
          <div className="card-dialog" onClick={(e) => e.stopPropagation()}>
            <img src="/card.jpg" alt="Business Card" className="card-spin-in" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}


