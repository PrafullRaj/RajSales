// ============================================
// RAJ SALES — 3D CINEMATIC LANDING PAGE
// Vite + GSAP + Three.js | 2026
// Netflix Intro + Hindi/English + Work Gallery
// ============================================

import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// ===========================
// LANGUAGE DATA
// ===========================
const LANG = {
  en: {
    navHome: 'Home', navProducts: 'Products', navWork: 'Our Work',
    navAbout: 'About', navStats: 'Why Us', navContact: 'Contact',
    heroTagline: "Bihar's Most Trusted Solar & Lighting Partner",
    heroTitle1: 'Solar lights hon ya<br>designer poles,',
    heroHighlight: 'Bihar ke har project<br>ki pehli pasand.',
    heroSubtitle: 'Manufacturing premium Solar Street Lights, Designer Poles, Octagonal Poles & more since 2010',
    btnExplore: 'Explore Products', btnQuote: 'Get Quote',
    scrollText: 'Scroll to explore',
    prodLabel: 'Our Products', prodTitle: 'Engineered for <span class="text-gold">Excellence</span>',
    prodDesc: 'From elegant designer poles to heavy-duty industrial infrastructure — we build the backbone of Bihar\'s modern landscape.',
    prod1Name: 'Designer Poles', prod1Desc: 'Black steel with ornate gold accents. The hallmark of premium urban infrastructure.',
    prod2Name: 'Octagonal Poles', prod2Desc: 'Hot-dip galvanized for century-long durability. Trusted in 50+ government projects.',
    prod3Name: 'Solar Street Lights', prod3Desc: 'Advanced integrated solar lighting systems with automatic dusk-to-dawn operation.',
    prod4Name: 'Foundation Bolts', prod4Desc: 'Heavy-duty anchor bolts engineered for maximum structural integrity.',
    prod5Name: 'Outdoor Gym Equipment', prod5Desc: 'Durable park fitness equipment built for all-weather public use.',
    specRust: 'Rust-Proof', specGold: 'Gold Finish', specCustom: 'Custom Heights',
    specGalv: 'Galvanized', specWind: 'Wind Resistant', specBulk: 'Bulk Supply',
    badgeBest: '★ Bestseller', badgeIndustrial: 'Industrial',
    workLabel: 'Our Work', workTitle: 'Real Projects, <span class="text-gold">Real Impact</span>',
    workDesc: 'See our solar street lights, LED flood lights, and custom poles in action — installed across Bihar, Jharkhand and Uttar Pradesh.',
    work1Cap: 'Solar pole installation in rural Bihar',
    work2Cap: 'Designer Pole — Product Ready',
    work3Cap: 'LED Flood Light — High Power Lighting',
    work4Cap: 'Octagonal poles — Ready for dispatch',
    work5Cap: 'Foundation bolts — Heavy Duty Anchor',
    work6Cap: 'Solar Street Light — Integrated System',
    aboutLabel: 'About Raj Sales', aboutTitle: 'Building Bihar\'s<br><span class="text-gold">Infrastructure</span> Since 2010',
    aboutP1: 'Headquartered in Patna, Raj Sales has established itself as the most trusted name in solar lighting and industrial pole manufacturing across Bihar, Jharkhand, and Uttar Pradesh.',
    aboutP2: 'With a state-of-the-art manufacturing unit in Khagaul, Danapur, we supply Designer Poles, Octagonal Poles, Foundation Bolts, and Outdoor Gym Equipment to government bodies, contractors, and private developers.',
    stat1: 'Active Projects', stat2: 'Years Experience', stat3: 'States Served', stat4: 'Poles Delivered',
    contactLabel: 'Get In Touch', contactTitle: 'Let\'s Build <span class="text-gold">Together</span>',
    contactAddr: 'Visit Our Factory', contactAddrVal: 'At Kothiya, Khagaul<br>Danapur, Patna, Bihar 801105',
    contactCall: 'Call Us', contactHours: 'Working Hours', contactHoursVal: 'Mon - Sat: 9:00 AM - 7:00 PM',
    formTitle: 'Request a Quote', formName: 'Your Name', formPhone: 'Phone Number',
    formSelect: 'Select Product', formDetails: 'Project Details', formSubmit: 'Send Inquiry →',
    footerTag: "Bihar's Premier Solar & Industrial Pole Manufacturer",
    langBtn: 'हिंदी',
  },
  hi: {
    navHome: 'होम', navProducts: 'उत्पाद', navWork: 'हमारा काम',
    navAbout: 'हमारे बारे में', navStats: 'हमें क्यों चुनें', navContact: 'संपर्क करें',
    heroTagline: 'बिहार का सबसे भरोसेमंद सोलर और लाइटिंग पार्टनर',
    heroTitle1: 'सोलर लाइट हो या<br>डिज़ाइनर पोल,',
    heroHighlight: 'बिहार के हर प्रोजेक्ट<br>की पहली पसंद।',
    heroSubtitle: '2010 से प्रीमियम डिजाइनर पोल, ऑक्टागोनल पोल, सोलर स्ट्रीट लाइट और अन्य उत्पादों का निर्माण',
    btnExplore: 'उत्पाद देखें', btnQuote: 'कोटेशन लें',
    scrollText: 'नीचे स्क्रॉल करें',
    prodLabel: 'हमारे उत्पाद', prodTitle: '<span class="text-gold">उत्कृष्टता</span> के लिए डिज़ाइन किया गया',
    prodDesc: 'शानदार डिजाइनर पोल से लेकर हैवी-ड्यूटी इंडस्ट्रियल इंफ्रास्ट्रक्चर तक — हम बिहार के आधुनिक परिदृश्य की रीढ़ बनाते हैं।',
    prod1Name: 'डिजाइनर पोल', prod1Desc: 'सोने की नक़्क़ाशी के साथ ब्लैक स्टील। प्रीमियम शहरी इंफ्रास्ट्रक्चर की पहचान।',
    prod2Name: 'ऑक्टागोनल पोल', prod2Desc: 'सदी भर की मज़बूती के लिए हॉट-डिप गैल्वेनाइज़्ड। 50+ सरकारी प्रोजेक्ट्स में भरोसा।',
    prod3Name: 'सोलर स्ट्रीट लाइट', prod3Desc: 'शाम से सुबह तक ऑटोमैटिक ऑपरेशन वाली एडवांस्ड सोलर लाइटिंग सिस्टम।',
    prod4Name: 'फाउंडेशन बोल्ट', prod4Desc: 'अधिकतम संरचनात्मक मज़बूती के लिए डिज़ाइन किए गए हैवी-ड्यूटी एंकर बोल्ट।',
    prod5Name: 'आउटडोर जिम उपकरण', prod5Desc: 'हर मौसम में उपयोग के लिए बनाए गए टिकाऊ पार्क फिटनेस उपकरण।',
    specRust: 'रस्ट-प्रूफ', specGold: 'गोल्ड फिनिश', specCustom: 'कस्टम ऊँचाई',
    specGalv: 'गैल्वेनाइज़्ड', specWind: 'हवा प्रतिरोधी', specBulk: 'बल्क सप्लाई',
    badgeBest: '★ बेस्टसेलर', badgeIndustrial: 'इंडस्ट्रियल',
    workLabel: 'हमारा काम', workTitle: 'असली प्रोजेक्ट, <span class="text-gold">असली प्रभाव</span>',
    workDesc: 'हमारी सोलर स्ट्रीट लाइट, एलईडी फ्लड लाइट और कस्टम पोल को बिहार, झारखंड और उत्तर प्रदेश में काम करते देखें।',
    work1Cap: 'ग्रामीण बिहार में सोलर पोल इंस्टॉलेशन',
    work2Cap: 'डिजाइनर पोल — प्रॉडक्ट रेडी',
    work3Cap: 'एलईडी फ्लड लाइट — हाई पावर लाइटिंग',
    work4Cap: 'ऑक्टागोनल पोल — डिस्पैच के लिए तैयार',
    work5Cap: 'फाउंडेशन बोल्ट — हैवी ड्यूटी एंकर',
    work6Cap: 'सोलर स्ट्रीट लाइट — इंटीग्रेटेड सिस्टम',
    aboutLabel: 'हमारे बारे में', aboutTitle: '2010 से बिहार का<br><span class="text-gold">इंफ्रास्ट्रक्चर</span> बनाते हुए',
    aboutP1: 'पटना मुख्यालय, राज सेल्स ने बिहार, झारखंड और उत्तर प्रदेश में सोलर लाइटिंग और इंडस्ट्रियल पोल मैन्युफैक्चरिंग में सबसे भरोसेमंद नाम स्थापित किया है।',
    aboutP2: 'खगौल, दानापुर में अत्याधुनिक मैन्युफैक्चरिंग यूनिट के साथ, हम सरकारी निकायों, ठेकेदारों और प्राइवेट डेवलपर्स को डिजाइनर पोल, ऑक्टागोनल पोल, फाउंडेशन बोल्ट और आउटडोर जिम उपकरण सप्लाई करते हैं।',
    stat1: 'सक्रिय प्रोजेक्ट', stat2: 'वर्षों का अनुभव', stat3: 'राज्यों में सेवा', stat4: 'पोल डिलीवर किए',
    contactLabel: 'संपर्क करें', contactTitle: 'आइए <span class="text-gold">साथ मिलकर</span> बनाएं',
    contactAddr: 'हमारी फैक्ट्री', contactAddrVal: 'कोठिया, खगौल<br>दानापुर, पटना, बिहार 801105',
    contactCall: 'फोन करें', contactHours: 'कार्य समय', contactHoursVal: 'सोम - शनि: सुबह 9 - शाम 7',
    formTitle: 'कोटेशन मांगें', formName: 'आपका नाम', formPhone: 'फोन नंबर',
    formSelect: 'उत्पाद चुनें', formDetails: 'प्रोजेक्ट विवरण', formSubmit: 'जानकारी भेजें →',
    footerTag: 'बिहार का प्रमुख सोलर और इंडस्ट्रियल पोल निर्माता',
    langBtn: 'English',
  }
};

let currentLang = localStorage.getItem('rajsales-lang') || 'en';

function t(key) { return LANG[currentLang][key] || key; }

// ===========================
// 1. THREE.JS 3D BACKGROUND
// ===========================
function initThreeBackground() {
  const canvas = document.getElementById('three-bg');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particleCount = 800;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    const isGold = Math.random() > 0.7;
    colors[i * 3] = isGold ? 0.83 : 0.4;
    colors[i * 3 + 1] = isGold ? 0.63 : 0.4;
    colors[i * 3 + 2] = isGold ? 0.09 : 0.55;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.04, vertexColors: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  const sphereGeometry = new THREE.IcosahedronGeometry(4, 1);
  const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xd4a017, wireframe: true, transparent: true, opacity: 0.04 });
  const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
  sphere.position.set(5, 0, -8);
  scene.add(sphere);

  camera.position.z = 8;
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => { mouseX = (e.clientX / window.innerWidth - 0.5) * 2; mouseY = (e.clientY / window.innerHeight - 0.5) * 2; });
  let scrollProgress = 0;
  window.addEventListener('scroll', () => { scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight); });
  window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.03;
    camera.position.z = 8 - scrollProgress * 6;
    particles.rotation.z = scrollProgress * 0.5;
    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.005;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();
}

// ===========================
// 2. NETFLIX INTRO
// ===========================
function showNetflixIntro() {
  return new Promise((resolve) => {
    // Only show once per session
    if (sessionStorage.getItem('rajsales-intro-seen')) {
      resolve();
      return;
    }

    const intro = document.createElement('div');
    intro.id = 'netflix-intro';
    intro.innerHTML = `
      <div class="intro-bg"></div>
      <div class="intro-logo-container">
        <div class="intro-logo">
          <span class="intro-raj">RAJ</span>
          <span class="intro-sales">SALES</span>
        </div>
        <div class="intro-tagline">${currentLang === 'hi' ? 'बिहार का सबसे भरोसेमंद इंफ्रास्ट्रक्चर पार्टनर' : "Bihar's Most Trusted Infrastructure Partner"}</div>
      </div>
    `;
    document.body.prepend(intro);

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('rajsales-intro-seen', 'true');
        gsap.to(intro, {
          opacity: 0, duration: 0.6, ease: 'power2.in',
          onComplete: () => { intro.remove(); resolve(); }
        });
      }
    });

    // Netflix-style animation
    tl.set('.intro-raj, .intro-sales', { opacity: 0, scale: 0.3, y: 20 })
      .set('.intro-tagline', { opacity: 0, y: 20 })
      .to('.intro-bg', { opacity: 1, duration: 0.5 })
      .to('.intro-raj', { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power4.out' })
      .to('.intro-sales', { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.8')
      .to('.intro-logo', { scale: 1.15, duration: 0.6, ease: 'power2.inOut' }, '-=0.3')
      .to('.intro-logo', { scale: 1, duration: 0.4, ease: 'power2.inOut' })
      .to('.intro-tagline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to({}, { duration: 1.2 }); // Hold
  });
}

// ===========================
// 3. BUILD THE DOM
// ===========================
function buildPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- NAVBAR -->
    <nav class="navbar" id="navbar">
      <a href="#" class="nav-logo">
        <span class="logo-raj">RAJ</span><span class="logo-sales">SALES</span>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#hero" data-lang="navHome">${t('navHome')}</a>
        <a href="#products" data-lang="navProducts">${t('navProducts')}</a>
        <a href="#work" data-lang="navWork">${t('navWork')}</a>
        <a href="#about" data-lang="navAbout">${t('navAbout')}</a>
        <a href="#stats" data-lang="navStats">${t('navStats')}</a>
        <a href="#contact" data-lang="navContact">${t('navContact')}</a>
      </div>
      <div class="nav-right">
        <button class="lang-toggle" id="langToggle" title="Switch Language">
          <span class="lang-icon">🌐</span>
          <span data-lang="langBtn">${t('langBtn')}</span>
        </button>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-bg-img"><img src="/assets/hero-bg.png" alt="Smart City"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-tagline" data-anim="fade-up" data-lang="heroTagline">${t('heroTagline')}</p>
        <h1 class="hero-title" data-anim="fade-up">
          <span data-lang-html="heroTitle1">${t('heroTitle1')}</span>
          <span class="hero-highlight" data-lang-html="heroHighlight">${t('heroHighlight')}</span>
        </h1>
        <p class="hero-subtitle" data-anim="fade-up" data-lang="heroSubtitle">${t('heroSubtitle')}</p>
        <div class="hero-cta" data-anim="fade-up">
          <a href="#products" class="btn btn-primary" data-lang="btnExplore">${t('btnExplore')}</a>
          <a href="#contact" class="btn btn-outline" data-lang="btnQuote">${t('btnQuote')}</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span data-lang="scrollText">${t('scrollText')}</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- VIDEO SHOWCASE SECTION -->
    <section class="video-showcase-section" id="solar-story" aria-label="Our Video Gallery">
      <div class="video-showcase-wrapper">
        <!-- Section Header -->
        <div class="section-header" data-anim="fade-up">
          <span class="section-label">✦ Our Impact</span>
          <h2 class="section-title">Real Stories, <span class="text-gold">Real Impact</span></h2>
          <p class="section-desc">Watch how Raj Sales solar solutions bring light and life to villages across Bihar.</p>
        </div>

        <!-- Video Grid -->
        <div class="video-showcase-grid">

          <!-- VIDEO 1: Solar Transformation (Hero — full width) -->
          <div class="vc-card vc-hero" data-anim="fade-up">
            <div class="vc-badge">⭐ Featured Story</div>
            <div class="vc-frame" id="vcFrame1">
              <video
                id="solarVideo"
                class="vc-video"
                src="/assets/solar-story.mp4"
                autoplay muted loop playsinline preload="metadata"
                aria-label="Solar transformation story video"
              ></video>
              <div class="vc-overlay" id="svOverlay">
                <div class="vc-caption-bar">
                  <span class="vc-caption" id="svCaption">🌑 Dark village — no electricity</span>
                </div>
              </div>
              <button class="vc-play-btn" id="svPlayBtn" aria-label="Play or pause">
                <span class="vc-play-icon" id="svPlayIcon">⏸</span>
              </button>
              <div class="vc-corner vc-tl"></div>
              <div class="vc-corner vc-tr"></div>
              <div class="vc-corner vc-bl"></div>
              <div class="vc-corner vc-br"></div>
              <div class="vc-watermark">Raj Sales · Bihar</div>
            </div>
            <div class="vc-meta">
              <div class="vc-meta-left">
                <h3 class="vc-title">Solar Village Transformation</h3>
                <p class="vc-desc">From complete darkness to fully illuminated — see how one solar pole changes everything for a rural community.</p>
              </div>
              <div class="vc-timeline" id="svTimeline">
                <div class="vc-tl-dot active" data-label="Dark Village"></div>
                <div class="vc-tl-line"></div>
                <div class="vc-tl-dot" data-label="Pole Up"></div>
                <div class="vc-tl-line"></div>
                <div class="vc-tl-dot" data-label="Charging"></div>
                <div class="vc-tl-line"></div>
                <div class="vc-tl-dot" data-label="Lights On"></div>
                <div class="vc-tl-line"></div>
                <div class="vc-tl-dot" data-label="Happy!"></div>
              </div>
            </div>
          </div>

          <!-- VIDEO 2: Roadside Installation -->
          <div class="vc-card" data-anim="fade-up">
            <div class="vc-badge vc-badge-steel">🚧 Field Installation</div>
            <div class="vc-frame" id="vcFrame2">
              <video
                id="roadsideVideo"
                class="vc-video"
                src="/assets/roadside-installation.mp4"
                muted loop playsinline preload="none"
                aria-label="Roadside installation video"
              ></video>
              <div class="vc-overlay">
                <div class="vc-caption-bar">
                  <span class="vc-caption" id="rvCaption">🚧 Roadside solar pole installation</span>
                </div>
              </div>
              <button class="vc-play-btn" id="rvPlayBtn" aria-label="Play or pause">
                <span class="vc-play-icon" id="rvPlayIcon">▶</span>
              </button>
              <div class="vc-corner vc-tl"></div>
              <div class="vc-corner vc-tr"></div>
              <div class="vc-corner vc-bl"></div>
              <div class="vc-corner vc-br"></div>
              <div class="vc-watermark">Raj Sales · Bihar</div>
            </div>
            <div class="vc-meta">
              <div class="vc-meta-left">
                <h3 class="vc-title">Roadside Installation</h3>
                <p class="vc-desc">Our expert team installs solar street lights along highways and village roads — reliable, fast, and built to last.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section class="section" id="products">
      <div class="section-container">
        <div class="section-header" data-anim="fade-up">
          <span class="section-label" data-lang="prodLabel">${t('prodLabel')}</span>
          <h2 class="section-title" data-lang-html="prodTitle">${t('prodTitle')}</h2>
          <p class="section-desc" data-lang="prodDesc">${t('prodDesc')}</p>
        </div>
        <div class="products-grid">
          <div class="product-card product-featured" data-anim="fade-up">
            <div class="product-badge" data-lang="badgeBest">${t('badgeBest')}</div>
            <div class="product-image-wrap">
              <img src="/assets/designer-pole.png" alt="Designer Pole" class="product-img">
              <div class="product-glow"></div>
            </div>
            <div class="product-info">
              <h3 class="product-name" data-lang="prod1Name">${t('prod1Name')}</h3>
              <p class="product-desc" data-lang="prod1Desc">${t('prod1Desc')}</p>
              <ul class="product-specs">
                <li data-lang="specRust">${t('specRust')}</li>
                <li data-lang="specGold">${t('specGold')}</li>
                <li data-lang="specCustom">${t('specCustom')}</li>
              </ul>
            </div>
          </div>
          <div class="product-card product-featured" data-anim="fade-up">
            <div class="product-badge badge-steel" data-lang="badgeIndustrial">${t('badgeIndustrial')}</div>
            <div class="product-image-wrap">
              <img src="/assets/octagonal-poles.png" alt="Octagonal Poles" class="product-img">
              <div class="product-glow glow-steel"></div>
            </div>
            <div class="product-info">
              <h3 class="product-name" data-lang="prod2Name">${t('prod2Name')}</h3>
              <p class="product-desc" data-lang="prod2Desc">${t('prod2Desc')}</p>
              <ul class="product-specs">
                <li data-lang="specGalv">${t('specGalv')}</li>
                <li data-lang="specWind">${t('specWind')}</li>
                <li data-lang="specBulk">${t('specBulk')}</li>
              </ul>
            </div>
          </div>
          <div class="product-card" data-anim="fade-up">
            <div class="product-image-wrap"><img src="/assets/solar-light.png" alt="Solar Light" class="product-img"></div>
            <div class="product-info">
              <h3 class="product-name" data-lang="prod3Name">${t('prod3Name')}</h3>
              <p class="product-desc" data-lang="prod3Desc">${t('prod3Desc')}</p>
            </div>
          </div>
          <div class="product-card" data-anim="fade-up">
            <div class="product-image-wrap"><img src="/assets/foundation-bolts.png" alt="Foundation Bolts" class="product-img"></div>
            <div class="product-info">
              <h3 class="product-name" data-lang="prod4Name">${t('prod4Name')}</h3>
              <p class="product-desc" data-lang="prod4Desc">${t('prod4Desc')}</p>
            </div>
          </div>
          <div class="product-card" data-anim="fade-up">
            <div class="product-image-wrap"><img src="/assets/outdoor-gym.png" alt="Outdoor Gym" class="product-img"></div>
            <div class="product-info">
              <h3 class="product-name" data-lang="prod5Name">${t('prod5Name')}</h3>
              <p class="product-desc" data-lang="prod5Desc">${t('prod5Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR WORK GALLERY -->
    <section class="section" id="work">
      <div class="section-container">
        <div class="section-header" data-anim="fade-up">
          <span class="section-label" data-lang="workLabel">${t('workLabel')}</span>
          <h2 class="section-title" data-lang-html="workTitle">${t('workTitle')}</h2>
          <p class="section-desc" data-lang="workDesc">${t('workDesc')}</p>
        </div>
        <div class="work-gallery">
          <div class="work-item work-tall" data-anim="fade-up">
            <img src="/assets/work-installation.png" alt="Installation" loading="lazy">
            <div class="work-caption"><span data-lang="work1Cap">${t('work1Cap')}</span></div>
          </div>
          <div class="work-item" data-anim="fade-up">
            <img src="/assets/designer-pole.png" alt="Designer Pole" loading="lazy">
            <div class="work-caption"><span data-lang="work2Cap">${t('work2Cap')}</span></div>
          </div>
          <div class="work-item" data-anim="fade-up">
            <img src="/assets/led-flood-light.png" alt="LED Flood Light" loading="lazy">
            <div class="work-caption"><span data-lang="work3Cap">${t('work3Cap')}</span></div>
          </div>
          <div class="work-item work-tall" data-anim="fade-up">
            <img src="/assets/octagonal-poles.png" alt="Octagonal Poles" loading="lazy">
            <div class="work-caption"><span data-lang="work4Cap">${t('work4Cap')}</span></div>
          </div>
          <div class="work-item" data-anim="fade-up">
            <img src="/assets/foundation-bolts.png" alt="Foundation Bolts" loading="lazy">
            <div class="work-caption"><span data-lang="work5Cap">${t('work5Cap')}</span></div>
          </div>
          <div class="work-item" data-anim="fade-up">
            <img src="/assets/solar-street-light.png" alt="Solar Street Light" loading="lazy">
            <div class="work-caption"><span data-lang="work6Cap">${t('work6Cap')}</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="section-container about-grid">
        <div class="about-text" data-anim="fade-right">
          <span class="section-label" data-lang="aboutLabel">${t('aboutLabel')}</span>
          <h2 class="section-title" data-lang-html="aboutTitle">${t('aboutTitle')}</h2>
          <p class="about-description" data-lang="aboutP1">${t('aboutP1')}</p>
          <p class="about-description" data-lang="aboutP2">${t('aboutP2')}</p>
          <div class="about-brands">
            <div class="brand-tag">TowerGlo<sup>®</sup></div>
            <div class="brand-tag">groTRONICS<sup>®</sup></div>
          </div>
        </div>
        <div class="about-visual" data-anim="fade-left">
          <div class="about-image-wrap"><img src="/assets/hero-bg.png" alt="Raj Sales" class="about-img"></div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section stats-section" id="stats">
      <div class="section-container">
        <div class="stats-grid">
          <div class="stat-card" data-anim="fade-up">
            <h3 class="stat-number" data-count="50">0</h3><span class="stat-plus">+</span>
            <p class="stat-label" data-lang="stat1">${t('stat1')}</p>
          </div>
          <div class="stat-card" data-anim="fade-up">
            <h3 class="stat-number" data-count="15">0</h3><span class="stat-plus">+</span>
            <p class="stat-label" data-lang="stat2">${t('stat2')}</p>
          </div>
          <div class="stat-card" data-anim="fade-up">
            <h3 class="stat-number" data-count="3">0</h3>
            <p class="stat-label" data-lang="stat3">${t('stat3')}</p>
          </div>
          <div class="stat-card" data-anim="fade-up">
            <h3 class="stat-number" data-count="1000">0</h3><span class="stat-plus">+</span>
            <p class="stat-label" data-lang="stat4">${t('stat4')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="contact">
      <div class="section-container">
        <div class="section-header" data-anim="fade-up">
          <span class="section-label" data-lang="contactLabel">${t('contactLabel')}</span>
          <h2 class="section-title" data-lang-html="contactTitle">${t('contactTitle')}</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-info-card" data-anim="fade-right">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div><h4 data-lang="contactAddr">${t('contactAddr')}</h4><p data-lang-html="contactAddrVal">${t('contactAddrVal')}</p></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div><h4 data-lang="contactCall">${t('contactCall')}</h4><p><a href="tel:+919835049628">+91 98350 49628</a></p><p><a href="tel:+919939678454">+91 99396 78454</a></p></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕐</div>
              <div><h4 data-lang="contactHours">${t('contactHours')}</h4><p data-lang="contactHoursVal">${t('contactHoursVal')}</p></div>
            </div>
          </div>
          <div class="contact-form-card" data-anim="fade-left">
            <h3 data-lang="formTitle">${t('formTitle')}</h3>
            <form id="contactForm">
              <input type="text" placeholder="${t('formName')}" data-lang-placeholder="formName" required>
              <input type="tel" placeholder="${t('formPhone')}" data-lang-placeholder="formPhone" required>
              <select><option value="" data-lang="formSelect">${t('formSelect')}</option>
                <option data-lang="prod1Name">${t('prod1Name')}</option>
                <option data-lang="prod2Name">${t('prod2Name')}</option>
                <option data-lang="prod3Name">${t('prod3Name')}</option>
                <option data-lang="prod4Name">${t('prod4Name')}</option>
                <option data-lang="prod5Name">${t('prod5Name')}</option>
                <option>Other</option>
              </select>
              <textarea placeholder="${t('formDetails')}" data-lang-placeholder="formDetails" rows="4"></textarea>
              <button type="submit" class="btn btn-primary btn-full" data-lang="formSubmit">${t('formSubmit')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="section-container footer-content">
        <div class="footer-brand">
          <span class="logo-raj" style="font-family:Montserrat;font-weight:900;font-size:1.2rem;">RAJ</span><span class="logo-sales" style="font-family:Montserrat;font-weight:900;font-size:1.2rem;">SALES</span>
          <p data-lang="footerTag">${t('footerTag')}</p>
        </div>
        <div class="footer-links">
          <a href="#products" data-lang="navProducts">${t('navProducts')}</a>
          <a href="#about" data-lang="navAbout">${t('navAbout')}</a>
          <a href="#contact" data-lang="navContact">${t('navContact')}</a>
        </div>
        <div class="footer-copy">
          <p>© 2026 Raj Sales, Patna, Bihar. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- WHATSAPP FLOATING BUTTON -->
    <a
      href="https://wa.me/919835049628?text=Hello%20Raj%20Sales%2C%20I%20am%20interested%20in%20your%20solar%20lighting%20products.%20Please%20share%20details."
      class="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28"><path fill="#25d366" d="M4.9 43.3l2.7-9.9C5.9 30.6 5 27.3 5 24 5 13.5 13.5 5 24 5s19 8.5 19 19-8.5 19-19 19c-3.1 0-6.1-.8-8.7-2.2l-10.4 2.5z"/><path fill="#fff" d="M33.5 28.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.7-.2-1 .2s-1.1 1.2-1.4 1.5c-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.3-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-.9-.8h-.8c-.3 0-.7.1-1 .4-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.2 6.7 5.9 4 1.7 4 1.1 4.7 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"/></svg>
      <span class="whatsapp-label">WhatsApp</span>
    </a>

        <p class="footer-copy">&copy; 2026 Raj Sales. All Rights Reserved.</p>
      </div>
    </footer>

    <!-- LIGHTBOX -->
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightboxClose">&times;</button>
      <img src="" alt="" id="lightboxImg">
    </div>
  `;
}

// ===========================
// 4. LANGUAGE TOGGLE
// ===========================
function switchLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('rajsales-lang', currentLang);

  // Update text content
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.dataset.lang;
    if (LANG[currentLang][key]) el.textContent = LANG[currentLang][key];
  });

  // Update innerHTML content (those with HTML tags like <br> or <span>)
  document.querySelectorAll('[data-lang-html]').forEach(el => {
    const key = el.dataset.langHtml;
    if (LANG[currentLang][key]) el.innerHTML = LANG[currentLang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.dataset.langPlaceholder;
    if (LANG[currentLang][key]) el.placeholder = LANG[currentLang][key];
  });
}

// ===========================
// 5. GSAP ANIMATIONS
// ===========================
function initAnimations() {
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      const navbar = document.getElementById('navbar');
      if (self.direction === 1 && self.progress > 0) navbar.classList.add('scrolled');
      else if (self.progress === 0) navbar.classList.remove('scrolled');
    },
  });

  // Hero entrance (delayed to play after intro)
  const heroElements = document.querySelectorAll('.hero-content [data-anim]');
  gsap.from(heroElements, { y: 60, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.3 });

  // Scroll-triggered
  document.querySelectorAll('[data-anim]').forEach((el) => {
    if (el.closest('.hero-content')) return;
    const animType = el.dataset.anim;
    const from = {};
    switch (animType) {
      case 'fade-up': from.y = 60; from.opacity = 0; break;
      case 'fade-right': from.x = -80; from.opacity = 0; break;
      case 'fade-left': from.x = 80; from.opacity = 0; break;
      default: from.y = 40; from.opacity = 0;
    }
    gsap.from(el, { ...from, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } });
  });

  // Product cards
  gsap.from('.product-card', { y: 40, opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.products-grid', start: 'top 80%' } });

  // Work gallery items
  gsap.from('.work-item', { y: 30, opacity: 0, scale: 0.97, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.work-gallery', start: 'top 85%' } });

  // Stats counter
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.dataset.count);
    ScrollTrigger.create({
      trigger: el, start: 'top 85%',
      onEnter: () => {
        gsap.to(el, { innerText: target, duration: 2, ease: 'power2.out', snap: { innerText: 1 }, onUpdate() { el.textContent = Math.round(parseFloat(el.textContent)); } });
      }, once: true,
    });
  });

  // Parallax hero
  gsap.to('.hero-bg-img img', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

// ===========================
// 6.5. SOLAR STORY ANIMATION
// ===========================
function initSolarStoryAnimation() {
  const stage = document.getElementById('solarStage');
  if (!stage) return;

  // Generate random stars
  const starsContainer = document.getElementById('ssStars');
  if (starsContainer) {
    for (let i = 0; i < 40; i++) {
      const star = document.createElement('div');
      star.className = 'ss-star';
      const size = Math.random() * 2.5 + 1;
      star.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        animation-delay:${Math.random() * 3}s;
        animation-duration:${1.5 + Math.random() * 2}s;
        opacity:${Math.random() * 0.6 + 0.2};
      `;
      starsContainer.appendChild(star);
    }
  }

  const scenes = [
    { scene: 1, caption: '🌑  Dark village — no electricity', dur: 1000 },
    { scene: 2, caption: '🪧  Solar pole rises from the ground', dur: 1000 },
    { scene: 3, caption: '☀️  Solar panel installed — sun charging', dur: 1000 },
    { scene: 4, caption: '💡  Lights on — area illuminated!', dur: 1000 },
    { scene: 5, caption: '🎉  Happy village — powered by Raj Sales!', dur: 1500 },
  ];

  const caption = document.getElementById('ssCaption');
  const progress = document.getElementById('ssProgress');
  const dots = document.querySelectorAll('.ss-dot');

  let currentTimer = null;
  let animRunning = false;
  let sceneIdx = 0;

  function setScene(idx) {
    const s = scenes[idx];
    stage.dataset.scene = s.scene;
    if (caption) caption.textContent = s.caption;

    // Update dots
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));

    // Animate progress bar
    if (progress) {
      const pct = ((idx + 1) / scenes.length) * 100;
      progress.style.transition = `width ${s.dur}ms linear`;
      progress.style.width = pct + '%';
    }
  }

  function runAnimation() {
    if (animRunning) return;
    animRunning = true;
    sceneIdx = 0;

    // Reset
    if (progress) { progress.style.transition = 'none'; progress.style.width = '0%'; }
    stage.dataset.scene = '1';

    function nextScene() {
      setScene(sceneIdx);
      if (sceneIdx < scenes.length - 1) {
        sceneIdx++;
        currentTimer = setTimeout(nextScene, scenes[sceneIdx - 1].dur);
      } else {
        // Finished — loop after 2.5s pause
        currentTimer = setTimeout(() => {
          animRunning = false;
          runAnimation();
        }, 2500);
      }
    }

    // Small delay to let CSS reset settle
    requestAnimationFrame(() => requestAnimationFrame(nextScene));
  }

  function restartAnimation() {
    clearTimeout(currentTimer);
    animRunning = false;
    if (progress) { progress.style.transition = 'none'; progress.style.width = '0%'; }
    stage.dataset.scene = '1';
    if (caption) caption.textContent = scenes[0].caption;
    dots.forEach((d, i) => d.classList.toggle('active', i === 0));
    setTimeout(runAnimation, 100);
  }

  // Tap / click to replay
  stage.addEventListener('click', restartAnimation);
  stage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') restartAnimation();
  });

  // Dot clicks — jump to scene
  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      clearTimeout(currentTimer);
      animRunning = false;
      sceneIdx = i;
      if (progress) { progress.style.transition = 'none'; progress.style.width = (((i + 1) / scenes.length) * 100) + '%'; }
      setScene(i);
    });
  });

  // IntersectionObserver — play when visible, pause when off-screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animRunning) {
        runAnimation();
      } else if (!entry.isIntersecting) {
        clearTimeout(currentTimer);
        animRunning = false;
      }
    });
  }, { threshold: 0.3 });

  observer.observe(stage);
}

// ===========================
// 7. INTERACTIVITY
// ===========================
function initInteractivity() {
  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('active')));
  }

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', switchLanguage);

  // Contact form → Real WhatsApp inquiry
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll('input, select, textarea');
      const name    = inputs[0]?.value?.trim() || '';
      const phone   = inputs[1]?.value?.trim() || '';
      const product = inputs[2]?.value?.trim() || 'Not specified';
      const details = inputs[3]?.value?.trim() || '';

      // Build WhatsApp message
      const msg = [
        '🙏 *New Inquiry — Raj Sales Website*',
        '',
        `👤 *Name:* ${name}`,
        `📞 *Phone:* ${phone}`,
        `📦 *Product:* ${product}`,
        details ? `📝 *Details:* ${details}` : '',
        '',
        '_Sent from rajsales.in_'
      ].filter(Boolean).join('\n');

      const waUrl = `https://wa.me/919835049628?text=${encodeURIComponent(msg)}`;

      // Open WhatsApp
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Show success state
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '✓ Opening WhatsApp…';
      btn.style.background = 'linear-gradient(135deg, #25d366, #128c7e)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // 3D tilt on product cards
  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0) perspective(800px) rotateX(0deg) rotateY(0deg)'; });
  });

  // Lightbox for work gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.work-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });
}

// ===========================
// VIDEO SHOWCASE PLAYER
// ===========================
function initVideoShowcase() {

  // Generic helper — sets up one video card
  function setupVideoCard({ videoId, playBtnId, playIconId, captionId, timelineSelector, cues, autoplay }) {
    const video = document.getElementById(videoId);
    if (!video) return;

    const playBtn  = document.getElementById(playBtnId);
    const playIcon = document.getElementById(playIconId);
    const caption  = document.getElementById(captionId);
    const dots     = timelineSelector ? document.querySelectorAll(timelineSelector) : [];

    let lastCueIdx = 0;

    // Update caption & dot based on video currentTime
    if (cues && cues.length) {
      video.addEventListener('timeupdate', () => {
        const t = video.currentTime;
        let idx = 0;
        for (let i = cues.length - 1; i >= 0; i--) {
          if (t >= cues[i].time) { idx = i; break; }
        }
        if (idx !== lastCueIdx) {
          lastCueIdx = idx;
          if (caption) {
            caption.style.opacity = '0';
            setTimeout(() => {
              caption.textContent = cues[idx].text;
              caption.style.opacity = '1';
            }, 280);
          }
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }
      });
      video.addEventListener('ended', () => { lastCueIdx = 0; });
    }

    // Play / Pause toggle
    function togglePlay() {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }

    video.addEventListener('play',  () => { if (playIcon) playIcon.textContent = '⏸'; });
    video.addEventListener('pause', () => { if (playIcon) playIcon.textContent = '▶'; });

    if (playBtn) playBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });

    // Click anywhere on frame to toggle
    const frame = video.closest('.vc-frame');
    if (frame) frame.addEventListener('click', togglePlay);

    // IntersectionObserver — autoplay when visible, pause off-screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (autoplay) video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    observer.observe(video);
  }

  // ---- VIDEO 1: Solar Transformation ----
  setupVideoCard({
    videoId:          'solarVideo',
    playBtnId:        'svPlayBtn',
    playIconId:       'svPlayIcon',
    captionId:        'svCaption',
    timelineSelector: '#svTimeline .vc-tl-dot',
    autoplay: true,
    cues: [
      { time: 0,    text: '🌑  Dark village — no electricity' },
      { time: 1.5,  text: '🪧  Solar pole rises from the ground' },
      { time: 3,    text: '☀️  Solar panel installed — charging' },
      { time: 4.5,  text: '💡  Lights on — area illuminated!' },
      { time: 6,    text: '🎉  Happy village — powered by Raj Sales!' },
    ],
  });

  // ---- VIDEO 2: Roadside Installation ----
  setupVideoCard({
    videoId:          'roadsideVideo',
    playBtnId:        'rvPlayBtn',
    playIconId:       'rvPlayIcon',
    captionId:        'rvCaption',
    timelineSelector: null,
    autoplay: false,   // User taps to play
    cues: [
      { time: 0,   text: '🚧  Roadside solar pole installation' },
      { time: 2,   text: '🔩  Foundation and fixing work' },
      { time: 4,   text: '🏗️  Pole erection in progress' },
      { time: 6,   text: '💡  Installation complete — lights on!' },
    ],
  });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', async () => {
  buildPage();
  initThreeBackground();
  await showNetflixIntro();
  initAnimations();
  initInteractivity();
  initVideoShowcase();
});


