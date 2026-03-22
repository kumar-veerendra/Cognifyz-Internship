// ─── Image data ───
    const images = [
      { src: "assets/L3T1_img1.jpg", caption: 'Writing Code', label: 'Development' },
      { src: 'assets/L3T1_img2.jpg', caption: 'Terminal & Code Editor', label: 'Workflow' },
      { src: 'assets/L3T1_img3.jpg', caption: 'Laptop Workspace', label: 'Remote Work' },
      { src: 'assets/L3T1_img4.jpg', caption: 'Tech Setup', label: 'Hardware' },
      { src: 'assets/L3T1_img5.jpg', caption: 'Data & Analytics', label: 'Data Science' },
      { src: 'assets/L3T1_img6.jpg', caption: 'Team Collaboration', label: 'Teamwork' },
    ];

    // ─── Build gallery ───
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');

    images.forEach((img, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.innerHTML = `
        <img src="${img.src}" alt="${img.caption}" loading="lazy"/>
        <div class="overlay">🔍</div>
      `;
      thumb.addEventListener('click', () => {
        lbImg.src = img.src;
        lbCaption.textContent = img.caption;
        lightbox.classList.add('active');
      });
      gallery.appendChild(thumb);
    });

    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('active'); });

    // ─── Build slideshow ───
    const slideshow = document.getElementById('slideshow');
    const dotsContainer = document.getElementById('dots');
    const progressBar = document.getElementById('progress-bar');
    let current = 0;
    const slides = [];
    const dots = [];

    images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      slide.innerHTML = `
        <img src="${img.src}" alt="${img.caption}" loading="lazy"/>
        <div class="slide-caption">
          <h3>${img.caption}</h3>
          <p>${img.label}</p>
        </div>
      `;
      slideshow.appendChild(slide);
      slides.push(slide);

      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    function goTo(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      // restart progress bar
      progressBar.style.animation = 'none';
      progressBar.offsetHeight; // reflow
      progressBar.style.animation = 'progress 4s linear infinite';
    }

    // Auto-advance every 4 seconds
    setInterval(() => goTo(current + 1), 4000);