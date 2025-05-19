function createHeader() {
    // Hitung level kedalaman folder saat ini
    const pathDepth = window.location.pathname.split('/').filter(Boolean).length - 1;
    const rootPath = pathDepth > 0 ? '../'.repeat(pathDepth) : './';

    document.write(`
    <header>
        <div class="header-container">
            <a href="${rootPath}index.html" class="logo">RekomFilm</a>
            <!-- ... (tombol hamburger sama seperti di atas) ... -->
            <nav class="nav-menu" id="nav-menu">
                <ul>
                    <li><a href="${rootPath}index.html">Beranda</a></li>
                    <li><a href="${rootPath}menu-rekomendasi.html">Rekomendasi</a></li>
                    <li><a href="${rootPath}menu-fakta-unik.html">Fakta Unik</a></li>
                    <li><a href="${rootPath}menu-teori-film.html">Teori</a></li>
                    <li><a href="${rootPath}menu-ulasan-alur.html">Ulasan & Alur</a></li>
                    <li><a href="${rootPath}halaman/all-post.html">Semua Artikel</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `);
}
createHeader();
