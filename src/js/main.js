let menuDatabase = {};

// Menampilkan indikator loading saat mengambil data dari API
function renderLoadingState(container) {
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
            <p style="font-size: 1.1rem; color: #64748b;">⏳ Mengambil data menu dari server...</p>
        </div>
    `;
}

// Menampilkan pesan error jika fetch API gagal
function renderErrorState(container, message) {
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px;">
            <p style="font-size: 1.1rem; color: #dc2626; font-weight: bold;">⚠️ Gagal Memuat Data</p>
            <p style="color: #4b5563;">${message}</p>
            <button onclick="fetchMenuItems()" style="margin-top: 10px; padding: 8px 16px; background: #dc2626; color: white; border: none; border-radius: 6px; cursor: pointer;">Coba Lagi</button>
        </div>
    `;
}

// Task 01 & 02: Fetch API & Render Data ke DOM
async function fetchMenuItems() {
    const container = document.getElementById('menu-container');
    if (!container) return;

    renderLoadingState(container);

    try {
        // Mengirim GET Request ke Endpoint API (atau local JSON)
        const response = await fetch('./public/menu.json');

        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const data = await response.json();
        container.innerHTML = ''; // Clear loading state

        if (data.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">Tidak ada menu tersedia.</p>';
            return;
        }

        // Simpan data ke object global & Render ke DOM
        data.forEach(item => {
            menuDatabase[item.key] = item;

            const card = `
                <article class="food-card" data-name="${item.title.toLowerCase()}" data-category="${item.category}">
                    <div class="food-image">
                        <img src="${item.img}" alt="${item.title}">
                        <span class="food-badge">${item.category.replace('-', ' ').toUpperCase()}</span>
                    </div>
                    <div class="food-details">
                        <h4>${item.title}</h4>
                        <div class="stand-name">${item.stand}</div>
                        <div class="food-pricing">
                            <span class="price">${item.price}</span>
                            <span class="stock">Stok: ${item.stock}</span>
                        </div>
                    </div>
                    <div class="food-actions">
                        <a href="src/html/detailMakanan.html?menu=${item.key}" class="btn-detail">Detail</a>
                        <button type="button" class="btn-cart" onclick="addToCart('${item.key}')">+ Keranjang</button>
                    </div>
                </article>
            `;
            container.innerHTML += card;
        });

        setupFilterListeners();

    } catch (error) {
        console.error("Fetch API Error:", error);
        renderErrorState(container, "Terjadi kesalahan saat terhubung ke API server.");
    }
}

// Fitur Filter Search & Kategori
function setupFilterListeners() {
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const emptyMessage = document.getElementById('empty-message');

    function filterMenu() {
        const query = searchInput.value.toLowerCase().trim();
        const selectedCategory = categorySelect.value;
        const foodCards = document.querySelectorAll('.food-card');
        let visibleCount = 0;

        foodCards.forEach(card => {
            const foodName = card.getAttribute('data-name');
            const foodCategory = card.getAttribute('data-category');
            if (foodName.includes(query) && (selectedCategory === "" || foodCategory === selectedCategory)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (emptyMessage) {
            emptyMessage.style.display = (visibleCount === 0) ? 'block' : 'none';
        }
    }

    if (searchInput) searchInput.addEventListener('keyup', filterMenu);
    if (categorySelect) categorySelect.addEventListener('change', filterMenu);
}

// Manajemen Keranjang (Local Storage)
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('tapest_cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartLink = document.getElementById('cart-link');
    if (cartLink) cartLink.textContent = `Keranjang (${totalItems})`;
}

function addToCart(menuKey) {
    let cart = JSON.parse(localStorage.getItem('tapest_cart')) || [];
    let item = cart.find(i => i.key === menuKey);
    
    if (item) { 
        item.qty += 1; 
    } else if (menuDatabase[menuKey]) {
        cart.push({
            key: menuKey,
            title: menuDatabase[menuKey].title,
            stand: menuDatabase[menuKey].stand,
            priceNum: menuDatabase[menuKey].priceNum,
            price: menuDatabase[menuKey].price,
            qty: 1
        });
    }

    localStorage.setItem('tapest_cart', JSON.stringify(cart));
    updateCartBadge();

    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    fetchMenuItems();
});