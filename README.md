# React Quiz App

Aplikasi kuis interaktif yang dibuat dengan React. Aplikasi ini memungkinkan pengguna untuk mengambil kuis, melihat skor, dan mengelola pertanyaan (menambah, mengedit, dan menghapus).

## Fitur

- Mengambil kuis dengan pertanyaan pilihan ganda
- Melihat hasil dan skor setelah menyelesaikan kuis
- Menambahkan pertanyaan baru
- Mengedit pertanyaan yang ada
- Menghapus pertanyaan
- Mencari pertanyaan berdasarkan teks atau jawaban
- Mengunduh pertanyaan

## Teknologi yang Digunakan

- React 18
- Tailwind CSS untuk styling
- JSON Server untuk backend API
- Axios untuk HTTP requests
- React Toastify untuk notifikasi

## Cara Menjalankan Aplikasi

### Prasyarat

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

### Langkah-langkah Instalasi

1. Clone repositori ini
2. Install dependensi:
   ```
   npm install
   ```
3. Jalankan JSON Server untuk backend:

   ```
   npm run server
   ```

   Server akan berjalan di http://127.0.0.1:3005

4. Jalankan aplikasi React di terminal terpisah:
   ```
   npm start
   ```
   Aplikasi akan berjalan di http://localhost:3000

## Struktur Aplikasi

- `src/components/` - Komponen UI yang dapat digunakan kembali
- `src/pages/` - Halaman utama aplikasi
- `src/API/` - Fungsi untuk berkomunikasi dengan backend
- `db.json` - Database JSON untuk menyimpan pertanyaan

## Penggunaan Aplikasi

1. **Halaman Start**: Halaman awal aplikasi dengan tombol untuk memulai kuis atau mengelola pertanyaan
2. **Halaman Question**: Menampilkan pertanyaan kuis dan opsi jawaban
3. **Halaman Review**: Meninjau jawaban sebelum mengirimkan
4. **Halaman Score**: Menampilkan skor akhir setelah menyelesaikan kuis
5. **Halaman Add Question**: Form untuk menambahkan pertanyaan baru
6. **Halaman Edit Questions**: Mengelola pertanyaan yang ada (edit/hapus)

## Pengembangan Selanjutnya

- Implementasi autentikasi pengguna
- Menambahkan kategori untuk pertanyaan
- Implementasi timer untuk kuis
- Menambahkan statistik dan riwayat kuis

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)
