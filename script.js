// Scroll-to-Top Button
window.onscroll = function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dropdown Menu untuk Mobile
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('show');
        }
    });
});

// Submenu toggle
document.querySelectorAll('.dropdown > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    });
  });
  
  // Scroll ke kategori utama
  document.querySelector('.cta-button')?.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#featured-categories').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
document.addEventListener('DOMContentLoaded', function() {
    // Pagination Configuration
    const itemsPerPage = 6;
    let currentPage = 1;
    const filmContainer = document.getElementById('film-container');
    const articles = filmContainer.querySelectorAll('.film-card');
    const pagination = document.getElementById('pagination');
    
    // Show specific page
    function showPage(page) {
        currentPage = page;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Hide all articles first
        articles.forEach(article => {
            article.style.display = 'none';
        });
        
        // Show articles for current page
        for (let i = startIndex; i < endIndex && i < articles.length; i++) {
            if (articles[i]) {
                articles[i].style.display = 'flex';
            }
        }
        
        createPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Create pagination buttons
    function createPagination() {
        const pageCount = Math.ceil(articles.length / itemsPerPage);
        pagination.innerHTML = '';
        
        // Don't show pagination if only 1 page
        if (pageCount <= 1) return;
        
        // Previous Button
        const prevBtn = document.createElement('a');
        prevBtn.href = '#';
        prevBtn.innerHTML = '&laquo;';
        prevBtn.className = currentPage === 1 ? 'disabled' : '';
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) showPage(currentPage - 1);
        });
        pagination.appendChild(prevBtn);
        
        // Page Numbers
        for (let i = 1; i <= pageCount; i++) {
            const pageElement = document.createElement(currentPage === i ? 'span' : 'a');
            pageElement.className = currentPage === i ? 'active' : '';
            pageElement.textContent = i;
            
            if (currentPage !== i) {
                pageElement.href = '#';
                pageElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPage(i);
                });
            }
            
            pagination.appendChild(pageElement);
        }
        
        // Next Button
        const nextBtn = document.createElement('a');
        nextBtn.href = '#';
        nextBtn.innerHTML = '&raquo;';
        nextBtn.className = currentPage === pageCount ? 'disabled' : '';
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < pageCount) showPage(currentPage + 1);
        });
        pagination.appendChild(nextBtn);
    }
    
    // Initialize
    showPage(1);
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Fungsi untuk mengisi sidebar
function isiSidebar() {
    const sidebar = document.querySelector('.auto-sidebar');
    
    // Jika sidebar tidak ada, berhenti
    if (!sidebar) return;

    // Buat konten "Populer"
    sidebar.innerHTML = `
        <div class="featured">
            <h3>🔥 Populer Minggu Ini</h3>
            <a href="${sidebarData.populer.link}">
                <img src="${sidebarData.populer.gambar}" alt="${sidebarData.populer.judul}">
                <h4>${sidebarData.populer.judul}</h4>
                <p>${sidebarData.populer.deskripsi}</p>
            </a>
        </div>

        <div class="latest-articles">
            <h3>💡 Fakta Twist Ending</h3>
            ${sidebarData.terbaru.map(item => `
                <div class="latest-item">
                    <a href="${item.link}">
                        <img src="${item.gambar}" alt="${item.judul}">
                        <h4>${item.judul}</h4>
                        <p>${item.deskripsi}</p>
                    </a>
                </div>
            `).join('')}
        </div>
    `;
}

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', isiSidebar);

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Toggle class CSS (nanti di CSS kamu buat class 'active' untuk menampilkan menu)
    navMenu.classList.toggle('active');

    // Update nilai aria-expanded agar aksesibel
    this.setAttribute('aria-expanded', String(!isExpanded));
});

// Pastikan DOM sudah siap
document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.querySelector(".sidebar");

    if (!sidebarContainer) return;

    // Bagian Populer
    const populer = sidebarData.populer;
    const populerHTML = `
        <div class="sidebar-section popular">
            <h4>🔥 Populer Minggu Ini</h4>
            <a href="${populer.link}" class="sidebar-article">
                <img src="${populer.gambar}" alt="${populer.judul}" loading="lazy">
                <p class="title">${populer.judul}</p>
                <p class="snippet">${populer.deskripsi}</p>
            </a>
        </div>
    `;

    // Bagian Terbaru
    const terbaruHTML = sidebarData.terbaru.map(item => `
        <a href="${item.link}" class="sidebar-article">
            <img src="${item.gambar}" alt="${item.judul}" loading="lazy">
            <p class="title">${item.judul}</p>
            <p class="snippet">${item.deskripsi}</p>
        </a>
    `).join("");

    const terbaruWrapper = `
        <div class="sidebar-section terbaru">
            <h4>🆕 Artikel Terbaru</h4>
            ${terbaruHTML}
        </div>
    `;

    // Masukkan ke dalam sidebar
    sidebarContainer.innerHTML = populerHTML + terbaruWrapper;
});
