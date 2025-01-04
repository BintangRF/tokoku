# Digital Product Marketplace

Aplikasi web berbasis React yang menampilkan produk dengan fitur pencarian dan carousel, terintegrasi dengan ChatGPT untuk pertanyaan melalui WhatsApp. Aplikasi ini memiliki tiga halaman: **Home**, **Products**, dan **About**.

## Fitur

- **Halaman Home**: Pengenalan dan navigasi ke halaman lainnya.
- **Halaman Products**:
  - Mengambil data produk dari [FakeStore API](https://fakestoreapi.com).
  - Terdapat **search bar** untuk menyaring produk berdasarkan judul.
  - Menampilkan produk dalam format **carousel** menggunakan Swiper.js.
  - Setiap produk memiliki tautan ke **halaman detail** dengan informasi lebih lanjut.
- **Halaman About**:
  - Memiliki fitur **FAQ** yang terhubung ke WhatsApp ChatGPT untuk menjawab pertanyaan pengguna.

## Teknologi yang Digunakan

- **React** untuk membangun antarmuka pengguna.
- **Swiper.js** untuk fungsionalitas carousel produk.
- **FakeStore API** untuk mengambil data produk.
- **Tailwind CSS** untuk styling.
- **React Router** untuk navigasi halaman.
- **FontAwesome** untuk ikon spinner.

## Halaman-halaman

### 1. Halaman Home

Halaman utama berisi navigasi dasar ke halaman **Products** dan **About**. Halaman ini berfungsi sebagai pengenalan ke situs web.

### 2. Halaman Products

- Menampilkan daftar produk yang diambil dari FakeStore API.
- **Search Bar**: Memungkinkan pengguna untuk mencari produk berdasarkan judul.
- **Product Carousel**: Menampilkan produk dalam bentuk carousel dengan pagination.
- **Halaman Detail Produk**: Mengklik produk akan membuka halaman detail yang menunjukkan informasi lebih lanjut tentang produk.

### 3. Halaman About

- Berisi fitur **FAQ** yang terhubung ke WhatsApp ChatGPT untuk membantu menjawab pertanyaan pengguna.

## Instruksi Setup

### Prasyarat

- Pastikan Anda memiliki **Node.js** dan **npm** yang terinstal di mesin Anda. Anda dapat memeriksa dengan menjalankan:
  ```bash
  node -v
  npm -v
  ```
