document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const header = document.querySelector('header');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const location = document.getElementById('location').value;
        const propertyType = document.getElementById('property-type').value;
        const priceRange = document.getElementById('price-range').value;
        
        // Normalde burada bir API'ye istek yapılır, ancak bu örnekte sadece console'a yazdırıyoruz
        console.log('Arama yapılıyor:', { location, propertyType, priceRange });
        
        alert(`Arama yapıldı:\nKonum: ${location}\nEmlak Tipi: ${propertyType}\nFiyat Aralığı: ${priceRange}`);
    });

    // Scroll olayını dinle ve header'ı güncelle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Sayfa yüklendiğinde animasyonları başlat
    animateListings();
});

function animateListings() {
    const listings = document.querySelectorAll('.listing-card');
    listings.forEach((listing, index) => {
        listing.style.animationDelay = `${index * 0.1}s`;
        listing.classList.add('animate');
    });
}