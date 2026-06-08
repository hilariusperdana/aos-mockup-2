# Rencana Implementasi - Penyelarasan Form & Validasi (AOS Online Mockup Redesign)

Rencana ini bertujuan untuk memastikan seluruh form pada seluruh menu di mockup AOS Online ([x:\projects\aos-redesign-mockup](file:///x:/projects/aos-redesign-mockup)) memiliki isi, field, opsi, validasi, dan payload data yang sama persis dengan yang ada di project React ([x:\projects\company-profile-react](file:///x:/projects/company-profile-react)).

> [!IMPORTANT]
> **Komitmen Utama:**
> Kami **tidak akan mengubah alur input form dan cara melihat data** yang sudah ada di project React pada Langkah 6 s/d 14. Modifikasi yang dilakukan hanya berupa **redesain secara visual** agar tampak premium dan menyelaraskan isi kolom/validasi agar sama persis dengan React.

---

## Rincian Perubahan Per Menu

### 1. Data Perusahaan
- **Gender:** Ubah opsi value menjadi lowercase (`pria`, `wanita`) sesuai dengan Zod enum.
- **Provinsi/Kota:** Petakan pilihan nama provinsi dan kota ke ID masing-masing (Jawa Tengah -> ID 33, Cilacap -> ID 3301, DKI Jakarta -> ID 31, Jakarta Selatan -> ID 3174) untuk disimpan di state `companyData`.
- **Validasi Submit Wizard:**
  - Nama Klien & Panggilan: Minimal 3 karakter, hanya huruf & spasi.
  - No WhatsApp: Minimal 10 digit, maks 15 digit, regex `^(\+62|0)\d{9,14}$`.
  - Nama Bisnis & Nama Legal: Minimal 3 karakter, tidak mengandung simbol.
  - Jumlah Cabang & Karyawan: Harus angka positif/non-negatif.
  - Jika Kepemilikan "Syirkah", Jumlah Mitra wajib diisi (> 0).
  - Sosial Media: Minimal 1 akun harus diisi.
  - Produk Lainnya (5 slot): Row ke-1 wajib diisi lengkap (nama, min price, max price). Untuk row 2-5, jika nama diisi, maka min & max price wajib diisi.
  - 3 Masalah Utama: Masing-masing minimal 3 karakter.

### 2. Langkah 01 s/d 05 (Purpose, Positioning, Vision, Mission, Culture)
- **Step 1 (Purpose):** Validasi wajib diisi.
- **Step 2 (Positioning):** Validasi wajib diisi untuk semua bidang, dan generate string positioning secara otomatis.
- **Step 3 (Vision):** Validasi wajib diisi untuk semua bidang, dan generate string visi secara otomatis.
- **Step 4 (Mission):** Validasi wajib mengisi keempat misi (SDM, Ops, Pemasaran, Keuangan).
- **Step 5 (Culture):** Validasi minimal 3 budaya dan maksimal 4 budaya kerja. Masing-masing harus memiliki nama dan deskripsi.

### 3. Langkah 06 (Business Goal)
- **Usaha Baru (Startup):** Menampilkan grid 5 kolom (Tahun 1 s/d Tahun 5) untuk 12 bulan. Pengguna mengisi secara manual, nilai disimpan di `projection_monthly_data` (sesuai alur React).
- **Usaha Berjalan:** Pengguna mengisi data aktual Tahun 1 dan Tahun 2. Proyeksi Tahun 3 s/d 7 (Tahun 1 s/d 5 proyeksi) akan otomatis dihitung secara compound: `Nilai_Proyeksi = Nilai_Tahun_Sebelumnya * (1 + target_growth_pct / 100)`. Pengguna juga bisa mengedit persentase growth untuk memperbarui proyeksi secara otomatis.
- **Hapus Custom Targets:** Menghapus bagian target tambahan non-finansial ("custom_targets") karena fitur tersebut tidak ada di codebase React.

### 4. Langkah 07 (Organization Structure)
- Ubah dropdown opsi Divisi (`finance`, `marketing`, `operation`, `hr`) dan Level (`director`, `general_manager`, `manager`, `supervisor`, `coordinator`, `staff`) agar menggunakan value standar React.
- **Validasi Hirarki:**
  1. **Rank Level Check:** Bawahan harus memiliki index level yang lebih besar (level lebih rendah) dibandingkan atasannya.
  2. **Circular Reference Check:** Deteksi relasi atasan melingkar secara rekursif dan tampilkan alert error jika terdeteksi.
- **Visualisasi Struktur Organisasi (Bagan):**
  - Tambahkan container `#ws-org-chart-preview` di bawah tabel.
  - Implementasikan fungsi `drawOrgChart()` untuk menggambar bagan kotak hirarkis (diagram pohon) secara visual tanpa mengubah alur input tabel.

### 5. Langkah 08 (Key Activities)
- Validasi: Minimal 1 jabatan dikonfigurasikan. Untuk setiap baris, Jabatan dan seluruh 4 Key Activities wajib diisi.

### 6. Langkah 09 (Job Description - Menggunakan Alur Detail Jabatan)
- **Alur Dua Tingkat (Folder Detail):**
  1. **Tingkat 1 (Daftar Jabatan):** Menampilkan tabel seluruh jabatan dari Langkah 7 dengan hitungan jumlah uraian tugas dan tombol *Kelola Uraian Tugas*.
  2. **Tingkat 2 (Detail Kelola Jabatan):** Ketika tombol *Kelola* diklik, tampilkan tabel rincian uraian tugas khusus jabatan tersebut beserta tombol **"← Kembali ke Daftar Jabatan"** di atasnya.
- Validasi Simpan: Minimal 1 rincian job description harus diisi untuk setiap jabatan yang dikonfigurasikan. Seluruh kolom input wajib terisi.

### 7. Langkah 10 (Report)
- Validasi: Seluruh template laporan harus memiliki nama format template dan file simulasi (`file_mockup`) yang diunggah.

### 8. Langkah 11 (KPI Setup)
- Validasi: Minimal 1 KPI wajib dikonfigurasikan. Seluruh kolom (Jabatan, Laporan/Tugas, Satuan, Target KPI, Definisi, Bobot, Arah) wajib diisi.
- Persentase total bobot KPI per jabatan tidak boleh melebihi 100%.

### 9. Langkah 12 (Reward & Punishment)
- **Penyelarasan Payload:** Ubah kunci data `clause` menjadi `warning_clause` pada array `sanctions` di state `punishments` agar sama persis dengan backend React.
- Validasi Reward: Seluruh kolom nama reward, kategori, syarat target, jumlah reward, dan periode wajib diisi.
- Validasi Punishment: Seluruh pasal tindakan pelanggaran dan denda/sanksi pada SP1, SP2, SP3 wajib diisi.

### 10. Langkah 13 (SOP)
- Validasi: Minimal 1 SOP dengan minimal 1 langkah 4M dikonfigurasikan. Seluruh kolom 4M (Metode, Manusia, Mesin, Material) wajib diisi pada setiap baris.

### 11. Langkah 14 (Train The Trainer)
- Validasi: Setiap jabatan yang memiliki aktivitas kunci harus memiliki minimal 1 keterampilan kerja (ASK) yang dikonfigurasikan (tidak boleh kosong).

---

## Proposed Changes

### 1. [index.html](file:///x:/projects/aos-redesign-mockup/index.html)
- Ubah nilai select option gender menjadi `pria` dan `wanita`.
- Hapus tabel dan tombol "Target Kuantitatif Tambahan" (custom targets) pada Step 6.
- Ubah dropdown opsi Divisi dan Level pada Step 7 untuk menggunakan value standar React.

### 2. [app.js](file:///x:/projects/aos-redesign-mockup/app.js)
- **Data Perusahaan:** Tambahkan validasi Zod-parity di `validateCompanyDataForm()` dan fungsionalitas ID wilayah.
- **Step 6:** Implementasikan layout input manual startup dan perhitungan compound growth berjalan. Hapus logic custom targets.
- **Step 7:** Implementasikan level-rank constraint check, circular hierarchy validation, dan tambahkan fungsi `drawOrgChart()` untuk bagan visual.
- **Step 9:** Implementasikan state pelacakan sub-view `currentEditingJobRole` untuk mengganti tampilan tabel flat menjadi alur folder detail (Daftar Jabatan -> Klik Kelola -> Kelola Job Desc Jabatan -> Kembali).
- **Step 12:** Ganti key `.clause` menjadi `.warning_clause` di render dan save logic.
- **Steps 8-14:** Sempurnakan validasi field dan required checks agar seragam dengan React schemas.

---

## Verification Plan

1. **Data Perusahaan:** Coba submit dengan data tidak valid (WhatsApp salah, Syirkah tanpa mitra, baris produk tidak lengkap), pastikan validasi memblokirnya.
2. **Step 6:** Verifikasi input manual startup (12 bln x 5 thn) dan perhitungan otomatis berjalan menggunakan compound growth.
3. **Step 7:** Verifikasi bahwa bagan bagan organisasi visual ter-render di bawah tabel. Buat hirarki salah (atasan level lebih rendah) atau melingkar, verifikasi sistem memblokirnya.
4. **Step 9:** Buka Langkah 9, pastikan yang muncul pertama adalah daftar jabatan. Klik "Kelola" pada salah satu jabatan, isi uraian tugas, klik "Kembali", pastikan jumlah uraian tugas bertambah.
5. **Step 8-14:** Cek pengisian kosong untuk field required di setiap tahapan, pastikan alert peringatan muncul.
