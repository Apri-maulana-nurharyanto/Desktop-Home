const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        function cariGoogle() {
            const query = searchInput.value.trim();
            if (query !== "") {
                const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.open(url, '_blank');
            }
        }

        // Jalankan saat icon search diklik
        searchBtn.addEventListener('click', cariGoogle);

        // Opsional: Jalankan juga saat menekan tombol Enter
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                cariGoogle();
            }
        });