# Setup Guide - Dronixsys Website

**Versi**: 2.0.0 | **Theme**: Dark Premium + Cyan | **Tech**: HTML, CSS, JavaScript

---

## ⚡ Quick Start

```
1. Buka index.html di browser
2. Selesai — website langsung jalan
```

Tidak perlu install apapun. Tidak ada dependencies eksternal.

---

## 📁 Struktur Project

```
DRONIXIS/
├── index.html                  ← Homepage
├── pages/
│   ├── about.html              ← About Us
│   ├── products.html           ← Product Catalog
│   ├── product-detail.html     ← Product Detail
│   └── contact.html            ← Contact Us
├── css/
│   ├── style.css               ← Main stylesheet (dark theme)
│   └── animations.css          ← Scroll & hover animations
├── js/
│   ├── main.js                 ← Core: menu, scroll, animations
│   ├── products.js             ← Product data + filter + search
│   ├── product-detail.js       ← Product detail loader
│   └── contact.js              ← Form validation
└── assets/
    └── images/                 ← Taruh semua gambar di sini
```

---

## 🎨 Design System

### Color Variables (`css/style.css`)

```css
:root {
  --bg-main: #09090B;        /* Background utama */
  --bg-surface: #18181B;     /* Background cards */
  --bg-footer: #000000;      /* Footer */
  --brand-cyan: #00D9FF;     /* Logo, accents, highlights */
  --primary-blue: #1447E6;   /* CTA buttons, links */
  --text-primary: #FFFFFF;   /* Semua teks utama */
  --text-secondary: #A1A1AA; /* Teks deskripsi */
  --text-muted: #52525C;     /* Placeholder, disabled */
  --border: #27272A;         /* Semua border */
  --success: #009588;        /* Success state */
  --error: #E40014;          /* Error state */
}
```

### Cara Ubah Warna Brand

Misalnya mau ganti cyan ke warna lain:
1. Buka `css/style.css`
2. Cari `--brand-cyan: #00D9FF`
3. Ganti hex-nya

Semua komponen yang pakai cyan (logo, badges, accents) otomatis ikut berubah.

---

## 🖼️ Menambah Gambar

### Gambar Produk
1. Siapkan gambar dengan ukuran **400×300px** (rasio 4:3)
2. Simpan di `assets/images/` dengan nama:
   - `product-1.jpg` sampai `product-12.jpg`
3. Gambar akan otomatis muncul di product cards

### Gambar Lainnya
| Gambar | Ukuran | Nama File |
|--------|--------|-----------|
| Hero / Solutions | 800×500px | bebas |
| Why Choose Us | 600×400px | bebas |
| Placeholder fallback | 400×300px | `placeholder.svg` |

> Jika gambar tidak ada, website otomatis pakai `placeholder.svg` sebagai fallback.

---

## 📦 Menambah / Edit Produk

Semua data produk ada di **dua file** (harus sinkron):

### 1. `js/products.js` — untuk tampilan catalog

```javascript
{
    id: 13,                          // ID unik, jangan duplikat
    name: 'Nama Produk',
    category: 'software',            // software | hardware | services | consulting
    description: 'Deskripsi singkat (1 kalimat)',
    image: '../assets/images/product-13.jpg',
    price: '$999/month'
}
```

### 2. `js/product-detail.js` — untuk halaman detail

```javascript
{
    id: 13,
    name: 'Nama Produk',
    category: 'software',
    description: 'Deskripsi singkat',
    fullDescription: 'Deskripsi panjang untuk halaman detail...',
    image: '../assets/images/product-13.jpg',
    images: ['../assets/images/product-13.jpg'],
    price: '$999/month',
    features: [
        'Fitur pertama',
        'Fitur kedua',
    ],
    specifications: {
        'Platform': 'Cloud-based',
        'Support': '24/7',
    }
}
```

> Pastikan `id` di kedua file sama persis.

---

## ✏️ Update Konten

### Teks Hero (Homepage)
Buka `index.html`, cari section `<!-- HERO -->`:
```html
<h1>Innovate. Build. Deliver.</h1>
<p class="hero-subtitle">Advancing Technology...</p>
```

### Info Perusahaan (About)
Buka `pages/about.html`, edit bagian:
- `<!-- COMPANY STORY -->` — cerita perusahaan
- `<!-- VISION & MISSION -->` — visi dan misi
- `<!-- CORE VALUES -->` — nilai-nilai perusahaan

### Info Kontak
Buka `pages/contact.html`, cari `<!-- Left: Info -->`:
- Alamat, nomor telepon, email, jam kerja

### Footer Links
Semua halaman punya footer yang sama. Edit di masing-masing file HTML, cari `<!-- FOOTER -->`.

---

## 🧩 Struktur Halaman

### Homepage — 9 Sections
| # | Section | Keterangan |
|---|---------|------------|
| 1 | Navbar | Logo cyan, menu, CTA button |
| 2 | Hero | Headline besar, 2 CTA buttons |
| 3 | About Preview | Deskripsi singkat perusahaan |
| 4 | Solutions | 3 cards alternating (image + text) |
| 5 | Features Grid | 8 item, 4 kolom |
| 6 | Why Choose Us | Image + 6 badges |
| 7 | Tagline CTA | Statement singkat |
| 8 | Contact Form | Form + stats counter |
| 9 | Footer | 4 kolom + social links |

### Product Catalog
- Search real-time dengan debounce
- Filter by category (dropdown)
- 6 produk per halaman
- Pagination otomatis
- Empty state jika tidak ada hasil

### Product Detail
- URL: `product-detail.html?id=1`
- Data dimuat dari `product-detail.js` berdasarkan `id`
- Gallery thumbnail bisa diklik
- Related products otomatis dari kategori yang sama

---

## 🔧 Kustomisasi Komponen

### Ubah Jumlah Produk per Halaman
Buka `js/products.js`, cari:
```javascript
const itemsPerPage = 6;
```
Ganti angkanya sesuai kebutuhan.

### Ubah Kategori Filter
Buka `pages/products.html`, cari `<select id="categoryFilter">`:
```html
<option value="software">Software</option>
<option value="hardware">Hardware</option>
```
Tambah atau hapus option sesuai kategori produk Anda.

### Ubah Stats di Homepage
Buka `index.html`, cari `<!-- CONTACT FORM -->`, bagian `contact-stats`:
```html
<span class="stat-number">500+</span>
<span class="stat-label">Clients Served</span>
```

### Ubah Badges "Why Choose Us"
Buka `index.html`, cari `<!-- WHY CHOOSE US -->`, bagian `badges-wrap`:
```html
<span class="badge"><span class="badge-dot"></span>AI-Driven Technology</span>
```

---

## 📱 Responsive Breakpoints

| Device | Width | Perubahan |
|--------|-------|-----------|
| Mobile | < 480px | 1 kolom, padding 16px, H1 32px |
| Tablet | 480–768px | 2 kolom, padding 24px, H1 40px |
| Desktop | 769–1440px | Full grid, padding 40px, H1 60px |
| Large | > 1440px | Max-width 1280px, center-aligned |

---

## 🧪 Testing Checklist

### Sebelum Deploy
- [ ] Buka semua 5 halaman, tidak ada error di console
- [ ] Search produk berfungsi
- [ ] Filter kategori berfungsi
- [ ] Klik product card → masuk ke detail page
- [ ] Form contact tervalidasi (coba submit kosong)
- [ ] Mobile menu buka/tutup dengan benar
- [ ] Scroll-to-top button muncul saat scroll ke bawah
- [ ] Semua gambar tampil (atau placeholder muncul)
- [ ] Test di mobile (375px) dan tablet (768px)

### Browser yang Didukung
- Chrome, Firefox, Safari, Edge (versi terbaru)
- Mobile: iOS Safari, Chrome Android

---

## 🚀 Deploy

1. Upload **semua file dan folder** ke web server
2. Jaga struktur folder tetap sama
3. Pastikan `assets/images/` ikut ter-upload
4. Buka URL di browser dan test ulang

> Tidak perlu build step. Upload langsung jalan.

---

## ❓ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Produk tidak muncul | Buka DevTools → Console, cek error JS |
| Gambar tidak tampil | Pastikan nama file sesuai path di `products.js` |
| Form tidak submit | Cek apakah semua field required sudah diisi |
| Mobile menu tidak jalan | Pastikan `js/main.js` ter-load di halaman |
| Warna tidak berubah | Hard refresh browser (Ctrl+Shift+R) |
| Animasi tidak jalan | Cek apakah `css/animations.css` ter-link di HTML |

---

## 🔗 Integrasi Backend (Opsional)

Form kontak saat ini simulasi. Untuk kirim email sungguhan, update fungsi `submitForm()` di `js/contact.js`:

```javascript
async function submitForm(formData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    return response.json();
}
```

---

**Last Updated**: May 29, 2026 | **Version**: 2.0.0
