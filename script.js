/* ============================================
   Portfolio Script — Trần Thành Đạt
   ============================================ */

// ---- i18n ----
const translations = {
  vi: {
    navAbout: 'Giới thiệu',
    navProjects: 'Dự án',
    navRecognition: 'Ghi nhận',
    headerCta: 'Liên hệ',
    availability: 'Sẵn sàng cho vị trí AI Engineer & Quant Researcher',
    heroTitle: 'AI Engineer.<br><em>Tư duy định lượng.</em>',
    heroDescription: 'Tốt nghiệp kép Toán – Tin (GPA 9.14) và Quản trị Kinh doanh (GPA 3.55) tại VNUHCM-US & NEU. Tôi xây hệ thống AI end-to-end — từ kiến trúc LLM, RAG pipeline, đến Multi-Agent workflows — và đọc được ngôn ngữ của cả dữ liệu lẫn quyết định kinh doanh.',
    metricGpa: 'GPA Toán – Tin',
    metricRank: 'Toàn khóa, 3 kỳ',
    metricProjects: 'Hệ thống AI & Định lượng đã ship',
    metricDegrees: 'Bằng cử nhân',
    viewProjects: 'Xem dự án',
    viewMore: 'Xem thêm dự án',
    scroll: 'Khám phá thêm',
    aboutLabel: 'Về tôi',
    aboutHeading: 'Nơi toán học<br><span>gặp trí tuệ nhân tạo.</span>',
    aboutText1: 'Tôi tốt nghiệp song song Toán – Khoa học máy tính và Quản trị Kinh doanh — không phải để ghi thêm bằng cấp, mà để có thể đọc cùng lúc ngôn ngữ của dữ liệu, của thuật toán, và của quyết định kinh doanh.',
    aboutText2: 'Hướng phát triển của tôi là AI Engineer và Quantitative Researcher: xây hệ thống LLM có kiến trúc rõ ràng, pipeline RAG đáng tin cậy, và Multi-Agent workflows giải quyết bài toán thật — không dừng lại ở demo.',
    statAgents: 'Agent chuyên biệt — TripMate',
    statDimensions: 'Chiều phân tích JD tự động',
    statBba: 'GPA Quản trị KD / 4.00',
    statLlms: 'LLM platforms tích hợp',
    educationLabel: 'Học vấn & kinh nghiệm',
    consultingOrg: 'VinaSoftware Co., Ltd. (VNS)',
    roleConsulting: 'Software Consulting Intern',
    consultingText: 'Tham gia tư vấn phần mềm cho enterprise websites, landing pages và business management systems. Phân tích yêu cầu, đặc tả chức năng, và kết nối nhu cầu kinh doanh với giải pháp kỹ thuật trong toàn bộ vòng đời sản phẩm.',
    present: 'NAY',
    degreeCs: 'Cử nhân Toán học & Khoa học máy tính',
    vnuhcm: 'ĐH Khoa học Tự nhiên – ĐHQG TP.HCM',
    vnuhcmText: 'Nơi giúp tôi phát triển nền tảng toán học và AI vững chắc',
    vnuhcmCourse1: 'Cấu trúc dữ liệu & Giải thuật',
    vnuhcmCourse2: 'Cơ sở dữ liệu & Lập trình Web',
    vnuhcmCourse3: 'Khai thác dữ liệu và ứng dụng',
    vnuhcmCourse4: 'Machine Learning & Deep Learning',
    degreeBba: 'Cử nhân Quản trị Kinh doanh',
    neu: 'Đại học Kinh tế Quốc dân',
    neuText: 'Góc nhìn kinh doanh giúp tôi định hình sản phẩm AI theo hướng tạo giá trị thực, không chỉ kỹ thuật.',
    neuCourse1: 'Toán cho các nhà kinh tế',
    neuCourse2: 'Thống kê trong kinh doanh',
    neuCourse3: 'Kinh tế vi mô & vĩ mô',
    neuCourse4: 'Quản trị kinh doanh',
    workLabel: 'Dự án chọn lọc',
    projectHeading: 'Dự án <span>AI & Định lượng</span>',
    catQuant: 'Quantitative Research',
    discuss: 'Cùng trao đổi',
    project1: 'Trợ lý y tế thông minh dùng LangGraph StateGraph để điều phối đa luồng hội thoại (RAG, Symptom, Planner, Chat). Tích hợp voice TTS, persistent memory bằng vector embeddings, REST API endpoint và evaluation scripts đo latency & độ tin cậy.',
    project2: 'Pipeline trích xuất 9+ chiều yêu cầu từ JD thô bằng few-shot prompting và schema-guided outputs. Đối sánh CV, tạo hướng dẫn phỏng vấn, soạn cover letter — toàn bộ end-to-end trong Streamlit với hỗ trợ PDF/DOCX/TXT và đa ngôn ngữ.',
    project3: 'Hệ thống lập kế hoạch du lịch biến natural-language request thành lịch trình cá nhân hóa qua LangGraph workflow. Các agent chuyên biệt xử lý flight search, hotel, itinerary; tích hợp Groq, Tavily, AviationStack API real-time. State được persist trên PostgreSQL (Render).',
    project4: 'Framework backtest chiến lược Golden/Death Cross với vectorized engine, transaction cost modeling, walk-forward validation, và sensitivity analysis. Pipeline từ raw OHLCV → signals → Sharpe, CAGR, Max Drawdown → dashboard Streamlit trực quan từng regime.',
    project5: 'Trợ lý tài chính song ngữ với hybrid architecture: 3 đường xử lý (Market Data real-time, Knowledge RAG, Combined analysis). Query router tự động phân luồng khái niệm / dữ liệu số / phân tích tổng hợp. ETL pipeline nạp báo cáo tài chính, tích hợp vnstock · Yahoo Finance · EcoData macro.',
    project6: 'Pipeline end-to-end phát hiện anomaly trên dữ liệu sensor bán dẫn (UCI SECOM) — bài toán unsupervised áp dụng cho risk / fraud detection. So sánh Isolation Forest, One-Class SVM, Autoencoder PyTorch. SHAP giải thích feature nào đẩy điểm vào vùng bất thường.',
    viewMore: 'Xem thêm dự án',
    recognitionLabel: 'Ghi nhận',
    recognitionHeading: 'Ghi nhận<br>&amp; <span>nền tảng</span>',
    awardLabel: 'Học bổng',
    academicLabel: 'Học thuật',
    award1: 'Mitsubishi UFJ Scholarship',
    award1sub: 'Ghi nhận thành tích học tập và tiềm năng phát triển',
    award2: 'Talent Minds Agency Scholarship',
    award2sub: 'Ghi nhận thái độ học tập và định hướng nghề nghiệp',
    award3: 'Học bổng Khuyến khích Học tập Xuất sắc',
    award3sub: 'Top 5% toàn khóa · 3 học kỳ',
    contactEyebrow: 'AI Engineer · Quant Researcher · Open to opportunities',
    contactHeading: 'Hãy cùng nhau<br><em>chia sẻ những ý tưởng tuyệt vời.</em>',
    backToTop: 'Lên đầu trang ↑',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navRecognition: 'Recognition',
    headerCta: "Let's talk",
    availability: 'Available for AI Engineer & Quant Researcher roles',
    heroTitle: 'AI Engineer.<br><em>Quantitative mindset.</em>',
    heroDescription: 'Double-degree graduate in Mathematics & CS (GPA 9.14) and Business Administration (GPA 3.55) from VNUHCM-US & NEU. I build end-to-end AI systems — LLM architecture, RAG pipelines, Multi-Agent workflows — and speak both the language of data and business decisions.',
    metricGpa: 'Math & CS GPA',
    metricRank: 'Of cohort, 3 terms',
    metricProjects: 'AI & Quant systems shipped',
    metricDegrees: 'Bachelor degrees',
    viewProjects: 'View projects',
    viewMore: 'View all projects',
    scroll: 'Scroll to explore',
    aboutLabel: 'About me',
    aboutHeading: 'Where mathematics<br><span>meets intelligence.</span>',
    aboutText1: 'I graduated with a double degree in Mathematics & CS (GPA 9.14/10) and Business Administration — not to stack credentials, but to read the language of data, algorithms, and business decisions simultaneously.',
    aboutText2: 'My trajectory is AI Engineer and Quantitative Researcher: building LLM systems with clear architecture, reliable RAG pipelines, and Multi-Agent workflows that solve real problems — not just demos.',
    statAgents: 'Specialized agents — TripMate',
    statDimensions: 'JD requirement dimensions',
    statBba: 'Business Admin GPA / 4.00',
    statLlms: 'LLM platforms integrated',
    educationLabel: 'Education & experience',
    consultingOrg: 'VinaSoftware Co., Ltd. (VNS)',
    roleConsulting: 'Software Consulting Intern',
    consultingText: 'Participated in software consulting for enterprise websites, landing pages, and business management systems. Analyzed requirements, wrote functional specs, and connected business needs to technical solutions across the full product lifecycle.',
    present: 'PRESENT',
    degreeCs: 'B.S. Mathematics & Computer Science',
    vnuhcm: 'VNUHCM – University of Science',
    vnuhcmText: 'Where I built a solid foundation in mathematics and AI',
    vnuhcmCourse1: 'Data Structures & Algorithms',
    vnuhcmCourse2: 'Database Systems & Web Programming',
    vnuhcmCourse3: 'Data Mining & Applications',
    vnuhcmCourse4: 'Machine Learning & Deep Learning',
    degreeBba: 'Bachelor of Business Administration',
    neu: 'National Economics University',
    neuText: 'The business perspective sharpens how I frame AI products toward real value creation, not just technical output.',
    neuCourse1: 'Mathematics for Economists',
    neuCourse2: 'Business Statistics',
    neuCourse3: 'Micro & Macroeconomics',
    neuCourse4: 'Business Administration',
    workLabel: 'Selected work',
    projectHeading: 'Featured <span>AI & Quant projects</span>',
    catQuant: 'Quantitative Research',
    discuss: "Let's discuss",
    project1: 'Intelligent healthcare assistant using LangGraph StateGraph to orchestrate multi-branch conversations (RAG, Symptom, Planner, Chat). Integrated voice TTS, persistent memory via vector embeddings, REST API endpoints, and evaluation scripts measuring latency and reliability.',
    project2: 'Pipeline extracting 9+ requirement dimensions from raw JDs using few-shot prompting and schema-guided outputs. CV matching, interview guidance, cover letter drafting — fully end-to-end in Streamlit with PDF/DOCX/TXT support and multilingual reporting.',
    project3: 'Travel planning system that transforms natural-language requests into personalized itineraries via LangGraph workflow. Specialized agents handle flight search, hotels, and itinerary planning, integrating Groq, Tavily, and AviationStack APIs. State persisted on PostgreSQL (Render).',
    project4: 'Backtesting framework for Golden/Death Cross strategies with a vectorized engine, transaction cost modeling, walk-forward validation, and sensitivity analysis. Full pipeline from raw OHLCV → signals → Sharpe, CAGR, Max Drawdown → Streamlit dashboard by market regime.',
    project5: 'Bilingual financial assistant with hybrid architecture: 3 processing paths (real-time Market Data, Knowledge RAG, Combined analysis). Query router auto-routes concept / numeric / synthesis requests. ETL pipeline ingests financial reports, structured citations, vnstock · Yahoo Finance · EcoData macro.',
    project6: 'End-to-end anomaly detection pipeline on semiconductor sensor data (UCI SECOM) — an unsupervised approach applicable to risk and fraud detection in finance. Compares Isolation Forest, One-Class SVM, and PyTorch Autoencoder. SHAP explains which features push a sample into the anomaly region.',
    viewMore: 'View all projects',
    recognitionLabel: 'Recognition',
    recognitionHeading: 'Awards<br>&amp; <span>foundation</span>',
    awardLabel: 'Scholarship',
    academicLabel: 'Academic',
    award1: 'Mitsubishi UFJ Scholarship',
    award1sub: 'Recognized for academic performance and development potential',
    award2: 'Talent Minds Agency Scholarship',
    award2sub: 'Recognized for learning attitude and career orientation',
    award3: 'Excellent Academic Encouragement Scholarship',
    award3sub: 'Top 5% of cohort · 3 semesters',
    contactEyebrow: 'AI Engineer · Quant Researcher · Open to opportunities',
    contactHeading: "Let's connect and<br><em>share great ideas together.</em>",
    backToTop: 'Back to top ↑',
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('portfolio-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) =>
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
);
setLanguage(localStorage.getItem('portfolio-lang') || 'vi');

// ---- Cursor glow ----
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// ---- Navigation scroll state ----
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---- Back to top ----
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Canvas background: mathematical grid + particles ----
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W, H, particles, animId;
  const GRID = 60;
  const PARTICLE_COUNT = 55;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function drawGrid() {
    ctx.strokeStyle = 'rgba(0,212,170,0.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += GRID) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += GRID) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // Accent dots at grid intersections (sparse)
    ctx.fillStyle = 'rgba(0,212,170,0.08)';
    for (let x = 0; x <= W; x += GRID * 3) {
      for (let y = 0; y <= H; y += GRID * 3) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawParticles() {
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,170,${p.alpha})`;
      ctx.fill();
    });
  }

  function drawConnections() {
    const MAX_DIST = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.strokeStyle = `rgba(0,212,170,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    if (!reduced) {
      drawConnections();
      drawParticles();
      update();
    } else {
      drawParticles();
    }
    animId = requestAnimationFrame(render);
  }

  resize();
  initParticles();
  render();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    initParticles();
    render();
  }, { passive: true });
})();

// ---- Projects carousel ----
(function initCarousel() {
  const carousel = document.getElementById('projectsCarousel');
  const track = document.getElementById('projectsTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  if (!carousel || !track) return;

  const cards = Array.from(track.children);
  let currentIndex = 0;
  let autoPlayTimer = null;
  let isExpanded = false;
  const AUTO_INTERVAL = 3800;

  // ---- dots ----
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', String(i === 0));
    dot.setAttribute('aria-label', 'Dự án ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = () => dotsContainer.querySelectorAll('.carousel-dot');

  function getCardWidth() {
    const card = cards[0];
    if (!card) return 320;
    return card.getBoundingClientRect().width + 24; // width + gap
  }

  function updateTrack() {
    if (isExpanded) return;
    track.style.transform = `translateX(${-currentIndex * getCardWidth()}px)`;
    dots().forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
      d.setAttribute('aria-selected', String(i === currentIndex));
    });
  }

  function goTo(index) {
    currentIndex = ((index % cards.length) + cards.length) % cards.length;
    updateTrack();
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  function startAuto() {
    stopAuto();
    autoPlayTimer = setInterval(next, AUTO_INTERVAL);
  }

  function stopAuto() {
    clearInterval(autoPlayTimer);
  }

  prevBtn?.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn?.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  // pause on hover
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', () => { if (!isExpanded) startAuto(); });

  // touch/swipe support
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
  }, { passive: true });

  // view more / collapse
  viewMoreBtn?.addEventListener('click', () => {
    isExpanded = !isExpanded;
    carousel.classList.toggle('expanded', isExpanded);
    viewMoreBtn.classList.toggle('active', isExpanded);

    const textEl = viewMoreBtn.querySelector('.view-more-text');
    if (textEl) {
      const lang = localStorage.getItem('portfolio-lang') || 'vi';
      textEl.textContent = isExpanded
        ? (lang === 'vi' ? 'Thu gọn' : 'Collapse')
        : (lang === 'vi' ? 'Xem thêm dự án' : 'View all projects');
    }

    if (isExpanded) {
      stopAuto();
      track.style.transform = '';
    } else {
      updateTrack();
      startAuto();
    }
  });

  // recalc on resize
  window.addEventListener('resize', () => { if (!isExpanded) updateTrack(); }, { passive: true });

  updateTrack();
  startAuto();
})();
