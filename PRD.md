# Product Requirements Document (PRD) - AOS Online Redesign Mockup

---

## 1. Metadata Dokumen
| Detail | Deskripsi |
| :--- | :--- |
| **Nama Proyek** | AOS Online Redesign Mockup |
| **Versi** | 1.0.0 |
| **Tanggal** | 9 Juni 2026 |
| **Status** | Approved / Final Draft |
| **Penulis** | Antigravity AI |
| **Teknologi** | Vanilla HTML5, CSS3, JavaScript (ES6+), SVGs |

---

## 2. Ringkasan Eksekutif & Latar Belakang
**AOS Online** adalah platform digital yang membantu pemilik bisnis dan usaha kecil-menengah (UMKM) dalam merancang dan mengimplementasikan sistem operasional bisnis mereka secara terstruktur menggunakan metodologi **12 Langkah Perancangan AOS (Autonomous Organisation System)**.

### Masalah Utama Pada Versi Sebelumnya:
1. **Navigasi & Hirarki Visual**: Kurang intuitif, menyulitkan pengguna dalam melacak progres pengisian langkah-langkah perancangan.
2. **Pengisian Data Form**: Form terasa kaku dan monoton. Input list dinamis (seperti komunitas bisnis) masih menggunakan textarea sederhana yang kurang profesional.
3. **Live Preview (Kartu Hidup)**: Kurangnya visualisasi real-time yang memvisualisasikan data perusahaan dengan estetika premium secara instan.
4. **Desain & Estetika**: Tampilan terkesan standar dan kurang modern (kurang dinamis, belum mendukung dark mode secara seamless).

### Solusi Redesain:
Proyek redesain ini berfokus pada peningkatan User Experience (UX) dan User Interface (UI) dengan menerapkan desain modern bernuansa premium ("Bright System" yang didominasi warna biru royal, laut, dan biru muda), integrasi live preview real-time ("Kartu Hidup") satu kolom yang responsif, input dinamis interaktif, panel diskusi kolaboratif, serta dukungan tema gelap/terang (Dark/Light mode).

---

## 3. Tujuan Proyek & Indikator Kinerja Utama (KPI)
* **Visual Excellence**: Memberikan visualisasi data yang premium dan nyaman dipandang agar pengguna betah berlama-lama menyusun sistem operasional perusahaan mereka.
* **Real-time Feedback**: Sinkronisasi instan antara input formulir dengan pratinjau "Kartu Hidup".
* **User Engagement**: Meningkatkan kejelasan langkah-langkah terstruktur dari Pra-AOS hingga implementasi lengkap.
* **Responsiveness**: Layout yang adaptif untuk berbagai ukuran resolusi layar laptop/desktop standar.

---

## 4. Arsitektur & Teknologi (Tech Stack)
Aplikasi ini dikembangkan menggunakan pendekatan **Zero-Dependency Modern Web Development**:
1. **Core**: HTML5 semantik untuk struktur konten.
2. **Styling**: Vanilla CSS3 menggunakan CSS Custom Properties (Variables) untuk manajemen tema, transisi halus, dan flexbox/grid layout yang bersih.
3. **Logic**: JavaScript Vanilla (ES6+) untuk manipulasi DOM, manajemen tema, rendering list dinamis, dan sinkronisasi data real-time.
4. **Ikonografi**: SVG inline yang bersih berbasis pustaka *Lucide Icons* untuk menjamin kecepatan load time dan konsistensi visual.
5. **Tipografi**: Google Fonts (*Montserrat* untuk heading dan aksen modern, *Outfit* untuk teks konten/data).

---

## 5. Spesifikasi Fitur Utama

### 5.1. Sidebar Navigation (Navigasi Kiri)
* **Deskripsi**: Menyediakan akses terstruktur ke seluruh modul AOS.
* **Hirarki Menu**:
  * **Pra AOS**: Data Perusahaan (Aktif), Profil (Terkunci), Diskusi (Aktif dengan badge notifikasi).
  * **Perancangan AOS 12 Langkah**: Langkah 01 (Purpose) sampai Langkah 14 (Train The Trainer).
  * **Implementasi AOS**: Download Dokumen, AOS Checklist.
  * **Panduan**: Panduan Implementasi.
* **Spesifikasi Teknis UI/UX**:
  * Efek visual hover dengan transisi warna halus.
  * Item menu yang terkunci memiliki ikon gembok kecil dan penanda status `locked`.
  * Ukuran teks menu dioptimalkan agar mudah dibaca dengan font Montserrat yang tegas.
  * Badge notifikasi interaktif pada menu "Diskusi" yang menampilkan jumlah pesan baru (misal: "3").

### 5.2. Wizard Form & Data Perusahaan (Sisi Kiri Konten)
* **Deskripsi**: Formulir multi-step/wizard untuk memasukkan data profil bisnis secara bertahap.
* **Komponen Input Form**:
  * **Identitas Utama**: Nama Perusahaan, Bidang Usaha.
  * **Legalitas & Pendirian**: Legalitas (PT, CV, dll), Tahun Berdiri.
  * **Kapasitas Internal**: Jumlah Karyawan, Omset Bulanan.
  * **Ekosistem Bisnis**: 
    * Bidang Komunitas Bisnis (Menggunakan input dinamis yang dapat ditambah/dihapus secara interaktif dengan tombol `+ Tambah Komunitas` dan `Hapus` pada masing-masing field).
    * Target Market.
* **Spesifikasi UX**:
  * Input field memiliki status `:focus` dengan border glow biru premium.
  * Validasi visual instan untuk meminimalkan kesalahan pengguna.

### 5.3. "Kartu Hidup" (Live Preview - Sisi Kanan Konten)
* **Deskripsi**: Representasi visual real-time dari data perusahaan yang sedang diisi oleh pengguna pada form.
* **Spesifikasi Teknis UI/UX**:
  * **Layout 1 Kolom**: Dirancang menjadi 1 kolom vertikal agar data terpusat, tulisan dapat diperbesar, dan layout terlihat sangat rapi.
  * **Tipografi Data**: Font size dioptimalkan (Header/Label 11px semi-bold dengan warna muted, Value/Isi Data 13px bold dengan warna solid) untuk keterbacaan tingkat tinggi.
  * **Penyelarasan Titik Dua (Colon)**: Penyelarasan tanda titik dua `:` menggunakan pseudo-element CSS `::after` dengan lebar statis agar posisi titik dua sejajar rapi dari atas ke bawah tanpa menggunakan tabel manual yang merusak responsivitas.
  * **Efek Glassmorphism**: Background kartu semi-transparan dengan efek blur halus (`backdrop-filter: blur()`) untuk tampilan futuristik dan premium.
  * **Sinkronisasi Instan**: Setiap ketukan tombol pada form kiri langsung mengubah teks di Kartu Hidup tanpa jeda waktu.

### 5.4. Fitur Diskusi & Chat Fasilitator
* **Deskripsi**: Tab komunikasi terintegrasi antara klien dengan fasilitator pendamping AOS.
* **Spesifikasi Fitur**:
  * UI berbentuk chat room dengan list chat di sebelah kiri dan detail percakapan di sebelah kanan.
  * Bubble chat yang membedakan pengirim (klien - biru) dan penerima (fasilitator - abu-abu).
  * Input area untuk mengirim pesan baru dengan tombol kirim berikon SVG.

### 5.5. Tema Terang & Gelap (Theme Toggle Switch)
* **Deskripsi**: Memungkinkan pengguna beralih antara tema terang (Clean, Professional Bright) dan tema gelap (Modern Dark) melalui tombol toggle di area header.
* **Spesifikasi Teknis**:
  * Menggunakan CSS Custom Properties (`--bg-primary`, `--text-primary`, `--accent-color`, dll) untuk transisi halus 0.3s saat berganti tema.
  * Status tema disimpan di state aplikasi agar konsisten di seluruh halaman mockup.

---

## 6. Desain Sistem & Panduan Estetika (Design System)

### 6.1. Palet Warna (Bright System)
* **Primary (Royal Blue)**: `#1E40AF` - Digunakan untuk elemen utama, tombol primer, dan navigasi aktif.
* **Secondary (Ocean Blue)**: `#0284C7` - Digunakan untuk gradasi, aksen, dan border aktif.
* **Accent (Baby Blue)**: `#E0F2FE` - Digunakan untuk background hover, chip, dan badge.
* **Neutral Light**: `#F8FAFC` - Background utama untuk Light Mode.
* **Neutral Dark**: `#0F172A` - Background utama untuk Dark Mode.

### 6.2. Tipografi
* **Header & Navigasi**: Montserrat (Bold, Semi-Bold, Regular).
* **Body & Data Content**: Outfit (Medium, Regular) - dipilih karena karakternya yang bulat, modern, dan sangat nyaman dibaca dalam ukuran kecil.

---

## 7. Rencana Verifikasi & Validasi
Untuk memastikan implementasi redesain ini berjalan dengan baik, uji coba dilakukan pada aspek-aspek berikut:
1. **Responsiveness Test**: Memastikan layout dashboard, form wizard, dan kartu hidup tetap proporsional pada resolusi 1280x720, 1366x768, hingga 1920x1080.
2. **Dynamic Input Test**: Memastikan fungsi tambah-hapus baris komunitas bisnis bekerja tanpa bug duplikasi index.
3. **Data Binding Test**: Memverifikasi tidak adanya delay antara input karakter pada formulir dengan pembaruan teks di Kartu Hidup.
4. **Theme Consistency**: Memastikan warna teks di tema gelap tetap memiliki kontras tinggi (memenuhi standar WCAG AA).

---

*Dokumen ini merupakan panduan resmi untuk tahap pengembangan frontend lanjutan dari AOS Online.*
