function createHeader() {
    document.write(`
    <header>
        <div class="header-container">
            <a href="/index.html" class="logo">RekomFilm</a>
            <button type="button" class="hamburger" id="hamburger" aria-label="Buka navigasi" aria-expanded="false">
                &#9776;<span class="sr-only">Menu</span>
            </button>
            <nav class="nav-menu" id="nav-menu">
                <ul>
                    <li><a href="/index.html">Beranda</a></li>
                    <li><a href="/menu-rekomendasi.html">Rekomendasi</a></li>
                    <li><a href="/menu-fakta-unik.html">Fakta Unik</a></li>
                    <li><a href="/menu-teori-film.html">Teori</a></li>
                    <li><a href="/menu-ulasan-alur.html">Ulasan & Alur</a></li>
                    <li><a href="/halaman/all-post.html">Semua Artikel</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `);
}
createHeader();

// Hamburger functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.style.display = isExpanded ? 'none' : 'block';
        });
    }
});
