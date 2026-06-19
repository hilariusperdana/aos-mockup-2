/* ==========================================================================
   AOS ONLINE CONCEPT REDESIGN - APPLICATION LOGIC
   ========================================================================== */

// 1. CONSTANTS & DATABASES (PARITY WITH REACT SCHEMAS)
const INDUSTRY_OPTIONS = [
    'Pendidikan',
    'FnB',
    'Manufaktur',
    'Retail & Toko',
    'Developer & Kontraktor',
    'Fashion',
    'Klinik'
];

const BUSINESS_CATEGORIES_BY_INDUSTRY = {
    Pendidikan: [
        'Sekolah Dasar (SD)',
        'Sekolah Menengah Pertama (SMP)',
        'Sekolah Menengah Atas (SMA)',
        'Perguruan Tinggi (Universitas / Institut / Politeknik)',
        'Pesantren',
        'Pendidikan Kesetaraan (Paket A/B/C)',
        'Lembaga Kursus dan Pelatihan (LKP/LPK)',
        'Pendidikan Keagamaan Non-Formal',
        'Pendidikan Non-Formal Lainnya'
    ],
    FnB: ['Restoran', 'Warung Makan', 'Cafe'],
    Manufaktur: ['Makanan & Minuman', 'Otomotif', 'Farmasi', 'Tekstil', 'Beauty Manufaktur'],
    'Retail & Toko': [
        'Toko',
        'Toko dengan Ecommerce',
        'Retail',
        'Departemen Store',
        'Supermarket',
        'Toko Kelontong',
        'Indomaret'
    ],
    'Developer & Kontraktor': ['Developer & Kontraktor'],
    Fashion: ['Perusahaan', 'Boutique'],
    Klinik: ['Klinik Kesehatan', 'Klinik Kecantikan']
};

const STEP_DATABASE = {
    1: {
        title: "Langkah 0: Purpose (Tujuan Fundamental)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Purpose Penting?</strong></p>
            <p>Purpose adalah alasan dasar mengapa bisnis Anda didirikan di luar sekadar mencari keuntungan finansial. Ini merumuskan kontribusi jangka panjang bagi dunia.</p>
            <p><strong>Tips Pengisian:</strong></p>
            <ul>
                <li>Gunakan bahasa yang inspiratif dan berfokus pada dampak sosial/solusi masalah.</li>
                <li>Tuliskan apa nilai abadi yang ingin Anda bangun hingga 100 tahun ke depan.</li>
            </ul>
        `
    },
    2: {
        title: "Langkah 0: Brand Positioning (Posisi Pasar)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Brand Positioning Penting?</strong></p>
            <p>Menentukan posisi unik merek Anda di benak konsumen ideal. Menjawab bagaimana bisnis Anda berbeda dan lebih baik dibanding kompetitor.</p>
            <p><strong>Rumus Otomatis:</strong></p>
            <p>Positioning akan di-generate otomatis dengan format:</p>
            <p><em>[Perusahaan] adalah [Kategori] yang menjual [DNA] yang [Core Value] dan [Add Value].</em></p>
        `
    },
    3: {
        title: "Langkah 1: Business Vision (Visi Perusahaan)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Visi Penting?</strong></p>
            <p>Visi adalah impian jangka panjang (5-10 tahun) yang ingin dicapai bersama oleh seluruh jajaran organisasi.</p>
            <p><strong>Rumus Otomatis:</strong></p>
            <p>Visi akan di-generate otomatis dengan format:</p>
            <p><em>Menjadi [Kategori] [DNA] [Core Value] di [Wilayah] pada tahun [Target Tahun].</em></p>
        `
    },
    4: {
        title: "Langkah 2: Business Mission (Peta Jalan Misi)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Misi Penting?</strong></p>
            <p>Misi memetakan langkah-langkah harian untuk merealisasikan visi jangka panjang berdasarkan 4 pilar utama bisnis:</p>
            <ul>
                <li><strong>Misi SDM:</strong> Terkait tim kerja.</li>
                <li><strong>Misi Operasional:</strong> Proses internal.</li>
                <li><strong>Misi Marketing:</strong> Pelayanan & penjualan.</li>
                <li><strong>Misi Finance:</strong> Pertumbuhan finansial.</li>
            </ul>
        `
    },
    5: {
        title: "Langkah 3: Core Values & Culture (Budaya Kerja)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Budaya Kerja Penting?</strong></p>
            <p>Pilar nilai perilaku utama yang disepakati bersama untuk diterapkan sehari-hari.</p>
            <p><strong>Aturan Pengisian:</strong></p>
            <ul>
                <li>Minimal 3 budaya kerja dan maksimal 4 budaya kerja harus diisi lengkap.</li>
                <li>Sertakan nama budaya dan deskripsi singkatnya.</li>
            </ul>
        `
    },
    6: {
        title: "Langkah 4: Business Goal (Sasaran Keuangan)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Business Goal Penting?</strong></p>
            <p>Penjabaran sasaran kuantitatif finansial dan non-finansial perusahaan.</p>
            <p><strong>Panduan Proyeksi:</strong></p>
            <ul>
                <li>Untuk usaha berjalan, masukkan data real tahun 1 dan 2. Sistem akan menghitung rata-rata pertumbuhan otomatis.</li>
                <li>Isi tabel proyeksi untuk 5 tahun ke depan berdasarkan target growth.</li>
            </ul>
        `
    },
    7: {
        title: "Langkah 5: Organization Structure (Struktur Fungsional)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Struktur Organisasi Penting?</strong></p>
            <p>Mendesain bagan kerja berdasarkan fungsi-fungsi kunci, bukan nama orang, untuk menghindari tumpang tindih tanggung jawab.</p>
            <p><strong>Aturan Atasan:</strong></p>
            <ul>
                <li>Level Direktur diposisikan paling atas tanpa atasan.</li>
                <li>Setiap jabatan lain harus memiliki atasan yang levelnya di atasnya.</li>
            </ul>
        `
    },
    8: {
        title: "Langkah 6: Key Activities (Aktivitas Inti)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Key Activities Penting?</strong></p>
            <p>Menentukan aktivitas operasional utama yang wajib berjalan tanpa cela di setiap posisi (maksimal 4 aktivitas inti per jabatan).</p>
        `
    },
    9: {
        title: "Langkah 7: Job Description (Deskripsi Jabatan)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Job Description Penting?</strong></p>
            <p>Menyusun uraian tugas rinci berdasarkan key activities dari setiap jabatan, lengkap dengan frekuensi kerja dan laporannya.</p>
        `
    },
    10: {
        title: "Langkah 8: Reporting System (Sistem Pelaporan)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Reporting System Penting?</strong></p>
            <p>Merancang format laporan berkala dan mekanisme rapat koordinasi rutin agar masalah operasional terdeteksi sedini mungkin.</p>
        `
    },
    11: {
        title: "Langkah 9: KPI Setup (Indikator Kinerja Utama)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa KPI Setup Penting?</strong></p>
            <p>Menetapkan parameter kuantitatif objektif untuk menilai performa kontribusi setiap individu karyawan.</p>
            <p><strong>Aturan Bobot:</strong></p>
            <ul>
                <li>Total bobot KPI dari semua item untuk satu jabatan tidak boleh melebihi 100%.</li>
            </ul>
        `
    },
    12: {
        title: "Langkah 10: Reward & Punishment (Penghargaan & Sanksi)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Reward & Punishment Penting?</strong></p>
            <p>Reward memotivasi tim berprestasi, sedangkan Punishment menegakkan kedisiplinan operasional secara adil (SP1, SP2, SP3).</p>
        `
    },
    13: {
        title: "Langkah 11: Standar Operasional Prosedur (SOP)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa SOP Penting?</strong></p>
            <p>Menyusun panduan langkah kerja prosedural per job description menggunakan metode 4M (Metode, Manusia, Mesin, Material).</p>
        `
    },
    14: {
        title: "Langkah 12: Train The Trainer (Kaderisasi Staf)",
        videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tips: `
            <p><strong>Kenapa Train The Trainer Penting?</strong></p>
            <p>Menyusun checklist pelatihan kaderisasi staf menggunakan matriks kompetensi ASK (Attitude, Skill, Knowledge).</p>
        `
    }
};

// 2. STATE MANAGEMENT
let companyData = {
    client_name: "",
    client_nickname: "",
    owner_phone: "",
    province_id: "",
    province_name: "",
    regency_id: "",
    regency_name: "",
    owner_gender: "",
    business_condition_position: "",
    business_name: "",
    legal_entity: "",
    business_legal_name: "",
    industry: "",
    business_category: "",
    business_category_other: "",
    business_age_years: 0,
    branch_count: 0,
    ownership_status: "",
    partnership_count: 0,
    status_usaha: "",
    total_employees: 0,
    business_scale: "",
    business_province_id: "",
    business_province_name: "",
    business_regency_id: "",
    business_regency_name: "",
    has_financial_report: "",
    product_services_primary: "",
    social_media_marketplaces: [],
    other_product_services: [
        { product_service_name: "", estimated_price_min: "", estimated_price_max: "" },
        { product_service_name: "", estimated_price_min: "", estimated_price_max: "" },
        { product_service_name: "", estimated_price_min: "", estimated_price_max: "" },
        { product_service_name: "", estimated_price_min: "", estimated_price_max: "" },
        { product_service_name: "", estimated_price_min: "", estimated_price_max: "" }
    ],
    main_problem_1: "",
    main_problem_2: "",
    main_problem_3: ""
};

let stepsData = {
    1: { purpose: "" },
    2: { company: "", category: "", dna: "", core_value: "", add_value: "", positioning: "" },
    3: { category: "", dna: "", area: "", target: "", vision: "" },
    4: { human_resources: "", operation: "", marketing: "", finance: "" },
    5: {
        cultures: [
            { budaya: "", deskripsi: "" },
            { budaya: "", deskripsi: "" },
            { budaya: "", deskripsi: "" }
        ]
    },
    6: {
        business_type: "",
        target_type: "",
        monthly_data: [
            { month: 1, revenue_year1: 0, revenue_year2: 0 },
            { month: 2, revenue_year1: 0, revenue_year2: 0 },
            { month: 3, revenue_year1: 0, revenue_year2: 0 },
            { month: 4, revenue_year1: 0, revenue_year2: 0 },
            { month: 5, revenue_year1: 0, revenue_year2: 0 },
            { month: 6, revenue_year1: 0, revenue_year2: 0 },
            { month: 7, revenue_year1: 0, revenue_year2: 0 },
            { month: 8, revenue_year1: 0, revenue_year2: 0 },
            { month: 9, revenue_year1: 0, revenue_year2: 0 },
            { month: 10, revenue_year1: 0, revenue_year2: 0 },
            { month: 11, revenue_year1: 0, revenue_year2: 0 },
            { month: 12, revenue_year1: 0, revenue_year2: 0 }
        ],
        projection_kinerja_pct: 0,
        projection_years: [],
        projection_monthly_data: []
    },
    7: {
        roles: []
    },
    8: {
        activities: []
    },
    9: {
        tasks: []
    },
    10: {
        reports: []
    },
    11: {
        kpis: []
    },
    12: {
        rewards: [],
        punishments: []
    },
    13: {
        sops: []
    },
    14: {
        trainings: []
    }
};


// CHECKLIST SYSTEM DATA DEFINITIONS
const CHECKLIST_SECTIONS = [
    { id: 1, name: "Kickoff Implementasi AOS", description: "Persiapan awal dan sosialisasi program kerja AOS" },
    { id: 2, name: "Internalisasi Pondasi Perusahaan", description: "Internalisasi Purpose, Vision, Mission, Culture, dan Struktur Organisasi" },
    { id: 3, name: "Implementasi AOS", description: "Pelatihan dokumen AOS jabatan dan sosialisasi sasaran target" },
    { id: 4, name: "Dokumen Pendukung SDM", description: "Penyusunan tata tertib, aturan kehadiran, dan kontrak kerja karyawan" }
];

const CHECKLIST_TASKS = [
    { id: 1, section_id: 1, text: "Mengunduh Dokumen AOS seluruh Jabatan di menu Download Dokumen AOS", time: "Hari 1", ref: "1. Download dokumen AOS.png" },
    { id: 2, section_id: 1, text: "Mengunggah dan menyimpan softcopy Dokumen AOS seluruh Jabatan ke Google Drive milik perusahaan", time: "Hari 1", ref: "2. Google Drive Perusahaan.png" },
    { id: 3, section_id: 1, text: "Mencetak Dokumen AOS seluruh Jabatan dalam bentuk hardcopy", time: "Hari 1", ref: "3. Cetak dokumen AOS.png" },
    { id: 4, section_id: 1, text: "Memasukkan hardcopy Dokumen AOS dalam business file per Jabatan. Disarankan business file yang digunakan memiliki warna sesuai dengan warna Brand Identity perusahaan", time: "Hari 2", ref: "4. Business file dokumen AOS.png" },
    { id: 5, section_id: 1, text: "Menempatkan Dokumen AOS seluruh Jabatan di rak arsip milik Bagian SDM", time: "Hari 2", ref: "5. Memasukkan business file ke lemari arsip.png" },
    { id: 6, section_id: 1, text: "Menerbitkan Surat Keputusan (SK) Tim Implementasi AOS", time: "Hari 3", ref: "6. SK Penunjukan Penanggungjawab Implementasi AOS.pdf" },
    { id: 7, section_id: 1, text: "Mewajibkan Tim Implementasi AOS melihat video cara menggunakan Dokumen AOS", time: "Hari 4", ref: "7. Video Cara Menggunakan Dokumen AOS.mp4" },
    { id: 8, section_id: 1, text: "Melakukan sosialisasi Implementasi AOS kepada seluruh karyawan oleh Tim Implementasi AOS", time: "Hari 5", ref: "8. Sosialisasi IMplementasi AOS.png" },
    { id: 9, section_id: 1, text: "Melakukan penandatanganan Pakta Integritas oleh seluruh karyawan perusahaan (kickoff program Implementasi AOS)", time: "Hari 6", ref: "9. Pakta Integritas Implementasi AOS.pdf" },

    { id: 10, section_id: 2, text: "Membuat desain Poster Purpose, Vision, Mission, Culture, dan Struktur Organisasi Perusahaan", time: "Hari 7", ref: "Poster Purpose, Vision, Mission, Culture, Structure Organization.pdf" },
    { id: 11, section_id: 2, text: "Mencetak dan membingkai Poster Purpose, Vision, Mission, Culture, dan Struktur Organisasi Perusahaan", time: "Hari 8,9,10", ref: "Poster Purpose, Vision, Mission, Culture, Structure Organization.pdf" },
    { id: 12, section_id: 2, text: "Memasang Poster Purpose, Vision, Mission, Culture, dan Struktur Organisasi Perusahaan di tempat strategis perusahaan", time: "Hari 10", ref: "Poster Purpose, Vision, Mission, Culture, Structure Organization.pdf" },
    { id: 13, section_id: 2, text: "Membaca Purpose, Vision, Mission, dan Culture Perusahaan bersama seluruh tim pada saat briefing pagi", time: "Hari 11", ref: "13. Membaca Purpose, Vision, Mission, dan Culture Perusahaan bersama seluruh tim pada saat briefing pagi.png" },

    { id: 14, section_id: 3, text: "Menyusun jadwal pelatihan Dokumen AOS setiap Jabatan terkait", time: "Hari 11", ref: "14. Jadwal Training SOP.pdf" },
    { id: 15, section_id: 3, text: "Mencetak salinan Dokumen AOS setiap Jabatan (fotocopy) untuk proses pelatihan", time: "Hari 12", ref: "15. Fotokopian dokumen AOS.png" },
    { id: 16, section_id: 3, text: "Memberikan salinan Dokumen AOS kepada setiap Jabatan", time: "Hari 13", ref: "16. penyerahan fotokopian dokumen AOS.png" },
    { id: 17, section_id: 3, text: "Melaksanakan pelatihan Dokumen AOS yang dilakukan oleh atasan setiap Jabatan", time: "Hari 13-20", ref: "17. Pelatihan Dokumen AOS.png" },
    { id: 18, section_id: 3, text: "Membuat desain Business Goal (AOS #4)", time: "Hari 21", ref: "18. Poster target omset.png" },
    { id: 19, section_id: 3, text: "Mencetak dan membingkai poster Business Goals", time: "Hari 22-23", ref: "19. Mencetak Membingkai Memasang Business Goals.png" },
    { id: 20, section_id: 3, text: "Memasang poster Business Goal di Ruang Kerja Pimpinan Perusahaan", time: "Hari 24", ref: "19. Mencetak Membingkai Memasang Business Goals.png" },

    { id: 21, section_id: 4, text: "Menyusun Tata Tertib Perusahaan dan melakukan sosialisasi", time: "Hari 25-26", ref: "Contoh Tata Tertib Perusahaan.pdf" },
    { id: 22, section_id: 4, text: "Menyusun Tabel Ketentuan Kehadiran, Izin, dan Cuti dan melakukan sosialisasi", time: "Hari 27-28", ref: "Contoh Tabel Ketentuan Kehadiran.pdf" },
    { id: 23, section_id: 4, text: "Menyusun dan menandatangani Addendum Kontrak Kerja setiap karyawan", time: "Hari 29-30", ref: "Kontrak Kerja Staf Masak Bakso Fedas.pdf" },
    { id: 24, section_id: 4, text: "Menerapkan atribut identitas karyawan sesuai dengan standar perusahaan (Lanyard, ID Card, Seragam)", time: "Hari 31-33", ref: "ID Card Karyawan Bakso Fedas.png, Poster Grooming Karyawan Bakso Fedas.png" }
];

// Initialize stepsData.checklist with seeding
if (!stepsData.checklist) {
    const savedChecklist = localStorage.getItem("aos_checklist_data");
    if (savedChecklist) {
        try {
            stepsData.checklist = JSON.parse(savedChecklist);
        } catch (e) {
            stepsData.checklist = [];
        }
    }
    if (!stepsData.checklist || stepsData.checklist.length !== 24) {
        stepsData.checklist = CHECKLIST_TASKS.map(t => ({
            id: t.id,
            section_id: t.section_id,
            status: "Tertunda",
            notes: "",
            media: []
        }));
    }
}

let activeMediaTaskId = null;
let activeMediaTab = "documents";
let expandedSections = new Set([1]); // Default section 1 open

let stepStatus = {
    1: 'locked', 2: 'locked', 3: 'locked', 4: 'locked', 5: 'locked',
    6: 'locked', 7: 'locked', 8: 'locked', 9: 'locked', 10: 'locked',
    11: 'locked', 12: 'locked', 13: 'locked', 14: 'locked',
    'profil': 'locked', 'checklist': 'locked'
};

let currentActiveStepId = 1;
let currentEditingJobRole = null;
let currentEditingKpiRole = null;

function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function parseDaysFromTime(timeStr) {
    if (!timeStr) return 0;
    const matches = timeStr.match(/\d+/g);
    if (!matches || matches.length === 0) return 0;
    const numbers = matches.map(n => parseInt(n, 10));
    return Math.max(...numbers);
}

function formatDateIndo(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const d = date.getDate().toString().padStart(2, '0');
    const m = months[date.getMonth()];
    const y = date.getFullYear();
    return `${d} ${m} ${y}`;
}

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // AUTO EXPAND TEXTAREA LOGIC
    window.initAutoExpand = function() {
        setTimeout(() => {
            document.querySelectorAll('textarea.auto-expand').forEach(el => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
            });
        }, 50);
    };

    document.addEventListener('input', function (event) {
        if (event.target.tagName.toLowerCase() === 'textarea' && event.target.classList.contains('auto-expand')) {
            event.target.style.height = 'auto';
            event.target.style.height = (event.target.scrollHeight) + 'px';
        }
    }, false);

    function syncStep10Reports() {
        const tasks = stepsData[9].tasks || [];
        let reports = stepsData[10].reports || [];
        const reportsMap = new Map(reports.map(r => [`${(r.role_name || '').trim()}||${(r.task_name || '').trim()}`, r]));
        
        const updatedReports = [];
        tasks.forEach(t => {
            if (!t.role_name || !t.description) return;
            const key = `${t.role_name.trim()}||${t.description.trim()}`;
            const existing = reportsMap.get(key);
            updatedReports.push({
                role_name: t.role_name,
                task_name: t.description,
                report_template: existing ? existing.report_template : "",
                frequency: t.frequency || "Harian",
                file_mockup: existing ? existing.file_mockup : null
            });
        });
        stepsData[10].reports = updatedReports;
        initAutoExpand();
    }

    function syncStep13Sops() {
        const tasks = stepsData[9].tasks || [];
        let sops = stepsData[13].sops || [];
        const sopsMap = new Map(sops.map(s => [`${(s.role_name || '').trim()}||${(s.task_name || '').trim()}`, s]));
        
        const updatedSops = [];
        tasks.forEach(t => {
            if (!t.role_name || !t.description) return;
            const key = `${t.role_name.trim()}||${t.description.trim()}`;
            const existing = sopsMap.get(key);
            updatedSops.push({
                role_name: t.role_name,
                task_name: t.description,
                sop_name: existing ? existing.sop_name : "",
                steps: existing ? existing.steps : [{ method: "", man: "", machine: "", material: "" }]
            });
        });
        stepsData[13].sops = updatedSops;
        initAutoExpand();
    }

    function syncStep14Trainings() {
        const keyActivities = stepsData[8].activities || [];
        let trainings = stepsData[14].trainings || [];
        const trainingsMap = new Map(trainings.map(t => [(t.role_name || '').trim(), t]));
        
        const updatedTrainings = [];
        keyActivities.forEach(ka => {
            if (!ka.role_name) return;
            const existingTraining = trainingsMap.get(ka.role_name.trim());
            const skillsArr = [];
            
            const activitiesList = [ka.ka1, ka.ka2, ka.ka3, ka.ka4].filter(act => act && act.trim());
            activitiesList.forEach(act => {
                let existingSkill = null;
                if (existingTraining && existingTraining.skills) {
                    existingSkill = existingTraining.skills.find(s => s.key_activity.trim() === act.trim());
                }
                skillsArr.push({
                    key_activity: act,
                    list: existingSkill ? existingSkill.list : [""]
                });
            });
            
            updatedTrainings.push({
                role_name: ka.role_name,
                skills: skillsArr
            });
        });
        stepsData[14].trainings = updatedTrainings;
        initAutoExpand();
    }

    function renderDownloadDocumentPanel() {
        const tblBody = document.querySelector("#ws-download-roles-table tbody");
        if (!tblBody) return;
        tblBody.innerHTML = "";
        
        const rolesList = stepsData[7].roles || [];
        if (rolesList.length === 0) {
            tblBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:15px;">Belum ada jabatan yang dikonfigurasikan di Langkah 7.</td></tr>`;
            return;
        }
        
        const levelLabelMap = {
            director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
            supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
        };
        
        rolesList.forEach(r => {
            if (!r.name) return;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${escapeHtml(r.name)}</strong></td>
                <td><span class="badge-legal">${escapeHtml(r.division_key ? r.division_key.toUpperCase() : 'GENERAL')}</span></td>
                <td>${escapeHtml(levelLabelMap[r.level_key] || r.level_key || 'Staff')}</td>
                <td style="text-align:center;">
                    <button class="btn btn-outline" style="font-size:10px; padding:4px 10px; display:inline-flex; align-items:center; gap:4px; pointer-events: none; opacity: 0.7;">
                        <svg style="width:12px; height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Unduh
                    </button>
                </td>
            `;
            tblBody.appendChild(row);
        });
    }

    // Theme Toggle
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme", !isDark);
        
        const logoImg = document.getElementById("sidebar-logo-img");
        if (logoImg) {
            logoImg.src = isDark ? "AOS Logo bw.png" : "AOS Logo.png";
        }
    });

    // Collapsible Tips Sidebar Logic
    const btnToggleTips = document.getElementById("btn-toggle-tips");
    const wsLayout = document.querySelector(".worksheet-layout");
    if (btnToggleTips && wsLayout) {
        btnToggleTips.addEventListener("click", function () {
            wsLayout.classList.toggle("tips-collapsed");
            const isCollapsed = wsLayout.classList.contains("tips-collapsed");
            const textEl = btnToggleTips.querySelector(".toggle-tips-text");
            const iconEl = btnToggleTips.querySelector(".toggle-tips-icon");
            if (isCollapsed) {
                if (textEl) textEl.textContent = "Tampilkan Panduan";
                if (iconEl) iconEl.style.transform = "rotate(180deg)";
            } else {
                if (textEl) textEl.textContent = "Sembunyikan Panduan";
                if (iconEl) iconEl.style.transform = "rotate(0deg)";
            }
        });
    }

    // Demo Mode Unlock Button click listener
    const btnUnlockDemo = document.getElementById("btn-unlock-all-demo");
    if (btnUnlockDemo) {
        btnUnlockDemo.addEventListener("click", function () {
            // Unlock all steps
            for (let i = 1; i <= 14; i++) {
                stepStatus[i] = 'completed';
            }
            stepStatus['profil'] = 'unlocked';
            stepStatus['checklist'] = 'unlocked';
            
            const navProfil = document.getElementById("nav-profil");
            if (navProfil) navProfil.classList.remove("locked");
            const navChecklist = document.getElementById("nav-aos-checklist");
            if (navChecklist) navChecklist.classList.remove("locked");
            const navDownload = document.getElementById("nav-download-document");
            if (navDownload) navDownload.classList.remove("locked");
            
            if (stepsData.checklist) {
                stepsData.checklist.forEach(task => {
                    task.status = "Selesai";
                });
                saveChecklistData();
            }
            if (typeof renderChecklistPanel === "function") {
                renderChecklistPanel();
            }
            updateStepTimelineDashboard();
            // updateStepTimelineModal(); // Function does not exist
            // updateSidebarNavStatus(); // Function does not exist

            // === POPULATE DEMO DATA ===
            const setValAndTrigger = (id, val) => {
                const el = document.getElementById(id);
                if (el) {
                    el.value = val;
                    el.dispatchEvent(new Event('input', { bubbles: true }));
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }
            };

            setValAndTrigger("owner-fullname", "Budi Santoso");
            setValAndTrigger("owner-nickname", "Budi");
            setValAndTrigger("owner-whatsapp", "+6281234567890");
            setValAndTrigger("owner-province", "DKI Jakarta");
            setValAndTrigger("owner-city", "Jakarta Selatan");
            setValAndTrigger("owner-gender", "Pria");

            const communityContainer = document.getElementById("community-input-group");
            if (communityContainer) {
                communityContainer.innerHTML = ""; // Clear existing
                const addCommunity = (name) => {
                    const div = document.createElement('div');
                    div.className = 'dynamic-input-item';
                    div.style.cssText = 'display:flex; gap:8px;';
                    div.innerHTML = `
                        <input type="text" class="form-control" placeholder="Nama komunitas baru..." value="${name}">
                        <button type="button" class="btn btn-outline" style="padding: 0 12px; color: var(--danger); border-color: rgba(239,68,68,0.2);" onclick="this.parentElement.remove()" title="Hapus">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
                        </button>
                    `;
                    communityContainer.appendChild(div);
                };
                addCommunity("HIPMI");
                addCommunity("TDA");
            }

            setValAndTrigger("company-brand", "Harta Putera (HPE)");
            setValAndTrigger("company-entity", "PT");
            setValAndTrigger("company-legal", "PT Harta Putera Epik");
            setValAndTrigger("company-industry", "Manufaktur");
            setValAndTrigger("company-category", "Makanan & Minuman");
            setValAndTrigger("company-age", "3");
            setValAndTrigger("company-branches", "2");
            setValAndTrigger("company-ownership", "Syirkah");
            setValAndTrigger("company-partners-count", "2");
            setValAndTrigger("company-status", "Pusat");
            setValAndTrigger("company-employees", "25");
            setValAndTrigger("company-revenue", "Kecil (300 Jt - 2.5 M)");
            setValAndTrigger("company-psak", "Belum");
            setValAndTrigger("company-province", "DKI Jakarta");
            setValAndTrigger("company-city", "Jakarta Selatan");
            setValAndTrigger("company-phone", "021-88992211");
            setValAndTrigger("sales-website", "https://hartaputera.id");
            setValAndTrigger("company-address", "South Quarter Tower A, Lt. 12, Cilandak, Jakarta Selatan");
            
            setValAndTrigger("company-issue-1", "Ketergantungan operasional pada founder tinggi");
            setValAndTrigger("company-issue-2", "Belum memiliki SOP tertulis yang terstandarisasi");
            setValAndTrigger("company-issue-3", "Pencatatan keuangan masih manual & belum PSAK");
            
            setValAndTrigger("product-primary", "Aplikasi SaaS Manajemen Keuangan");
            
            const socialContainer = document.getElementById("social-media-rows-container");
            if (socialContainer) {
                socialContainer.innerHTML = ""; // Clear existing
                const addSocialRow = (platform, username) => {
                    const div = document.createElement("div");
                    div.className = "social-media-row";
                    div.style.display = "flex";
                    div.style.gap = "10px";
                    div.style.marginBottom = "8px";
                    div.innerHTML = `
                        <select class="form-control social-platform" style="width: 35%;">
                            <option value="Instagram" ${platform === 'Instagram' ? 'selected' : ''}>Instagram</option>
                            <option value="Facebook" ${platform === 'Facebook' ? 'selected' : ''}>Facebook</option>
                            <option value="TikTok" ${platform === 'TikTok' ? 'selected' : ''}>TikTok</option>
                            <option value="Shopee" ${platform === 'Shopee' ? 'selected' : ''}>Shopee</option>
                            <option value="Tokopedia" ${platform === 'Tokopedia' ? 'selected' : ''}>Tokopedia</option>
                            <option value="Lainnya" ${platform === 'Lainnya' ? 'selected' : ''}>Lainnya</option>
                        </select>
                        <input type="text" class="form-control social-username" placeholder="@akun / link" value="${username}">
                        <button type="button" class="btn btn-outline btn-remove-social" style="padding: 10px; border-color: #fca5a5; color: #ef4444;">&times;</button>
                    `;
                    div.querySelector(".btn-remove-social").addEventListener("click", () => {
                        div.remove();
                        syncValuesToLiveCard();
                    });
                    div.querySelectorAll("input, select").forEach(input => {
                        input.addEventListener("input", syncValuesToLiveCard);
                        input.addEventListener("change", syncValuesToLiveCard);
                    });
                    socialContainer.appendChild(div);
                };
                addSocialRow("Instagram", "@hartaputera.id");
            }

            const prodRows = document.querySelectorAll(".product-price-grid .price-row");
            prodRows.forEach((row, idx) => {
                const inputs = row.querySelectorAll("input");
                if (inputs.length >= 3) {
                    if (idx === 0) {
                        inputs[0].value = "Paket Premium";
                        inputs[1].value = "500000";
                        inputs[2].value = "1500000";
                    } else if (idx === 1) {
                        inputs[0].value = "Paket Starter";
                        inputs[1].value = "150000";
                        inputs[2].value = "450000";
                    } else {
                        inputs[0].value = "";
                        inputs[1].value = "";
                        inputs[2].value = "";
                    }
                    inputs.forEach(inp => inp.dispatchEvent(new Event('input', { bubbles: true })));
                }
            });

            // POPULATE COMPANYDATA SO PROFILE RENDERS CORRECTLY
            companyData.client_name = "Budi Santoso";
            companyData.client_nickname = "Budi";
            companyData.owner_phone = "+6281234567890";
            companyData.owner_gender = "Pria";
            companyData.business_condition_position = "HIPMI, TDA";
            companyData.province_name = "DKI Jakarta";
            companyData.regency_name = "Jakarta Selatan";
            companyData.province_id = "31";
            companyData.regency_id = "3174";

            companyData.business_name = "Harta Putera (HPE)";
            companyData.legal_entity = "PT";
            companyData.business_legal_name = "PT Harta Putera Epik";
            companyData.industry = "Manufaktur";
            companyData.business_category = "Makanan & Minuman";
            companyData.business_age_years = 3;
            companyData.branch_count = 2;
            companyData.ownership_status = "Syirkah";
            companyData.partnership_count = 2;
            companyData.status_usaha = "Pusat";
            companyData.total_employees = 25;
            companyData.business_scale = "Kecil (300 Jt - 2.5 M)";
            companyData.has_financial_report = "Belum";
            companyData.business_province_name = "DKI Jakarta";
            companyData.business_regency_name = "Jakarta Selatan";
            companyData.business_province_id = "31";
            companyData.business_regency_id = "3174";
            companyData.product_services_primary = "Aplikasi SaaS Manajemen Keuangan";
            
            companyData.main_problem_1 = "Ketergantungan operasional pada founder tinggi";
            companyData.main_problem_2 = "Belum memiliki SOP tertulis yang terstandarisasi";
            companyData.main_problem_3 = "Pencatatan keuangan masih manual & belum PSAK";

            companyData.social_media_marketplaces = [{ social_media_marketplace: "Instagram", account_name: "@hartaputera.id" }];
            companyData.other_product_services = [
                { product_service_name: "Paket Premium", estimated_price_min: "500000", estimated_price_max: "1500000" },
                { product_service_name: "Paket Starter", estimated_price_min: "150000", estimated_price_max: "450000" }
            ];

            // === POPULATE WIZARD STEPS 1-14 ===
            stepsData[1] = {
                purpose: "Membangun ekosistem teknologi keuangan yang transparan, mudah diakses, dan andal bagi pelaku usaha mikro, kecil, dan menengah (UMKM) untuk mendorong pertumbuhan ekonomi yang inklusif dan berkelanjutan."
            };

            stepsData[2] = {
                company: "Harta Putera (HPE)",
                category: "Aplikasi Keuangan",
                dna: "SaaS Akuntansi UMKM",
                core_value: "Terstandarisasi Akuntansi standar PSAK",
                add_value: "Tampilan dashboard ramah pemula",
                positioning: "Harta Putera (HPE) adalah Aplikasi Keuangan yang menjual SaaS Akuntansi UMKM yang Terstandarisasi Akuntansi standar PSAK dan Tampilan dashboard ramah pemula."
            };

            stepsData[3] = {
                category: "Aplikasi Keuangan",
                dna: "SaaS Akuntansi UMKM",
                area: "Indonesia",
                target: "2030",
                vision: "Menjadi Aplikasi Keuangan SaaS Akuntansi UMKM di Indonesia pada tahun 2030."
            };

            stepsData[4] = {
                human_resources: "Membangun tim kerja yang kompeten, loyal, berintegritas tinggi, serta berakhlak mulia untuk mendukung pertumbuhan berkelanjutan.",
                operation: "Mengembangkan sistem kerja operasional berbasis digital yang efisien, aman, serta terstandarisasi secara internasional.",
                marketing: "Menjadi mitra terpercaya bagi UMKM lewat edukasi keuangan bisnis secara aktif dan penyediaan solusi pemasaran digital.",
                finance: "Menjaga stabilitas keuangan perusahaan yang sehat, profitabel, serta transparan bagi semua pemangku kepentingan."
            };

            stepsData[5] = {
                cultures: [
                    { budaya: "Inovatif", deskripsi: "Selalu mencari cara baru yang lebih efektif untuk memecahkan masalah klien." },
                    { budaya: "Integritas", deskripsi: "Menjaga transparansi dan kejujuran dalam setiap tindakan dan pelaporan keuangan." },
                    { budaya: "Kolaboratif", deskripsi: "Bekerja sama lintas divisi untuk menghasilkan solusi terbaik bagi pengguna." }
                ]
            };

            stepsData[6] = {
                business_type: "berjalan",
                target_type: "rupiah",
                monthly_data: [
                    { month: 1, revenue_year1: 20000000, revenue_year2: 25000000 },
                    { month: 2, revenue_year1: 22000000, revenue_year2: 27000000 },
                    { month: 3, revenue_year1: 25000000, revenue_year2: 30000000 },
                    { month: 4, revenue_year1: 24000000, revenue_year2: 29000000 },
                    { month: 5, revenue_year1: 26000000, revenue_year2: 32000000 },
                    { month: 6, revenue_year1: 30000000, revenue_year2: 38000000 },
                    { month: 7, revenue_year1: 28000000, revenue_year2: 35000000 },
                    { month: 8, revenue_year1: 31000000, revenue_year2: 40000000 },
                    { month: 9, revenue_year1: 33000000, revenue_year2: 42000000 },
                    { month: 10, revenue_year1: 32000000, revenue_year2: 41000000 },
                    { month: 11, revenue_year1: 35000000, revenue_year2: 45000000 },
                    { month: 12, revenue_year1: 40000000, revenue_year2: 50000000 }
                ],
                projection_kinerja_pct: 25,
                projection_years: [2026, 2027, 2028, 2029, 2030],
                projection_monthly_data: Array.from({ length: 12 }, (_, idx) => ({
                    month: idx + 1,
                    values: [
                        Math.round(40000000 * (1 + 0.25 * 1)),
                        Math.round(40000000 * (1 + 0.25 * 2)),
                        Math.round(40000000 * (1 + 0.25 * 3)),
                        Math.round(40000000 * (1 + 0.25 * 4)),
                        Math.round(40000000 * (1 + 0.25 * 5))
                    ]
                }))
            };

            stepsData[7] = {
                roles: [
                    { name: "Direktur Utama", division_key: "hr", level_key: "director", description: "Memimpin perusahaan dan menetapkan arah strategis bisnis.", parent_key: "" },
                    { name: "Manager Operasional", division_key: "operation", level_key: "manager", description: "Mengawasi jalannya operasional harian dan implementasi sistem.", parent_key: "Direktur Utama" },
                    { name: "Manager Pemasaran", division_key: "marketing", level_key: "manager", description: "Merencanakan dan mengeksekusi strategi marketing serta akuisisi pelanggan.", parent_key: "Direktur Utama" },
                    { name: "Manager Keuangan", division_key: "finance", level_key: "manager", description: "Mengelola arus kas, anggaran, dan pelaporan keuangan perusahaan.", parent_key: "Direktur Utama" },
                    { name: "Staff Customer Service", division_key: "operation", level_key: "staff", description: "Melayani keluhan pelanggan dan membantu aktivasi akun pengguna.", parent_key: "Manager Operasional" }
                ]
            };

            stepsData[8] = {
                activities: [
                    { role_name: "Direktur Utama", ka1: "Rapat direksi bulanan", ka2: "Meninjau laporan keuangan bulanan", ka3: "Penyusunan rencana kerja tahunan", ka4: "Pengawasan kinerja manager" },
                    { role_name: "Manager Operasional", ka1: "Penyusunan jadwal kerja divisi", ka2: "Monitoring uptime server & aplikasi", ka3: "Penyusunan SOP operasional", ka4: "Pemberian feedback kinerja staff" },
                    { role_name: "Manager Pemasaran", ka1: "Perencanaan kampanye digital", ka2: "Analisis conversion rate ads", ka3: "Manajemen sosial media perusahaan", ka4: "Evaluasi program promosi bulanan" },
                    { role_name: "Manager Keuangan", ka1: "Verifikasi transaksi harian", ka2: "Penyusunan laporan laba rugi", ka3: "Pembayaran pajak & payroll", ka4: "Rekonsiliasi bank akhir bulan" },
                    { role_name: "Staff Customer Service", ka1: "Menjawab keluhan klien", ka2: "Panduan onboarding pengguna baru", ka3: "Pencatatan feedback keluhan error", ka4: "Pembuatan FAQ mingguan" }
                ]
            };

            stepsData[9] = {
                tasks: [
                    { role_name: "Manager Keuangan", key_activity: "Verifikasi transaksi harian", description: "Melakukan audit dan pencocokan invoice masuk dengan rekening koran bank", frequency: "Harian", report: "Buku kas harian dan mutasi bank" },
                    { role_name: "Manager Keuangan", key_activity: "Penyusunan laporan laba rugi", description: "Menyusun dan mengevaluasi laporan keuangan berkala perusahaan", frequency: "Bulanan", report: "Laporan laba rugi, neraca, dan arus kas" },
                    { role_name: "Staff Customer Service", key_activity: "Menjawab keluhan klien", description: "Membalas tiket keluhan dan masalah yang masuk dari customer di chat/email", frequency: "Harian", report: "Log tiket CS dan rating kepuasan" }
                ]
            };

            stepsData[10] = {
                reports: [
                    { role_name: "Manager Keuangan", task_name: "Melakukan audit dan pencocokan invoice masuk dengan rekening koran bank", report_template: "Template Rekonsiliasi Kas & Bank Bulanan", frequency: "Harian", file_mockup: null },
                    { role_name: "Manager Keuangan", task_name: "Menyusun dan mengevaluasi laporan keuangan berkala perusahaan", report_template: "Template Laporan Laba-Rugi Standard", frequency: "Bulanan", file_mockup: null },
                    { role_name: "Staff Customer Service", task_name: "Membalas tiket keluhan dan masalah yang masuk dari customer di chat/email", report_template: "Dashboard Log Tiket Hubspot", frequency: "Harian", file_mockup: null }
                ]
            };

            stepsData[11] = {
                kpis: [
                    { role_name: "Manager Keuangan", task_name: "Menyusun dan mengevaluasi laporan keuangan berkala perusahaan", bobot: 50, satuan: "persen", target_kpi: 100, realisasi: 100, definisi_target: "Ketepatan penyusunan laporan sebelum tanggal 5 setiap bulan", arah: "lebih besar lebih baik" },
                    { role_name: "Manager Keuangan", task_name: "Melakukan audit dan pencocokan invoice masuk dengan rekening koran bank", bobot: 50, satuan: "persen", target_kpi: 100, realisasi: 98, definisi_target: "Persentase kecocokan data transaksi buku kas dengan bank", arah: "lebih besar lebih baik" },
                    { role_name: "Staff Customer Service", task_name: "Membalas tiket keluhan dan masalah yang masuk dari customer di chat/email", bobot: 100, satuan: "persen", target_kpi: 95, realisasi: 96, definisi_target: "Persentase kepuasan pelanggan (rating bintang 4-5)", arah: "lebih besar lebih baik" }
                ]
            };

            stepsData[12] = {
                rewards: [
                    { bonus_name: "Bonus Omset Bulanan", category: "level_perusahaan", org_chart_node_id: "", bonus_target: "Tercapainya target omset bulanan 100%", bonus_amount: "5% dari gaji pokok", bonus_period: "Bulanan" },
                    { bonus_name: "Bonus Kinerja CS Terbaik", category: "level_jabatan", org_chart_node_id: "Staff Customer Service", bonus_target: "Rating kepuasan CS bulanan rata-rata > 98%", bonus_amount: "Rp 500.000", bonus_period: "Bulanan" }
                ],
                punishments: [
                    {
                        severity: "SP1",
                        sanctions: [
                            { warning_clause: "Terlambat masuk kerja tanpa izin tertulis > 3 kali dalam sebulan", fee: "Surat Peringatan 1 & Teguran Lisan" },
                            { warning_clause: "Tidak menggunakan seragam lengkap / ID Card / Lanyard", fee: "Denda kas Rp 20.000 per pelanggaran" }
                        ]
                    },
                    {
                        severity: "SP2",
                        sanctions: [
                            { warning_clause: "Mangkir kerja tanpa kabar selama 2 hari berturut-turut", fee: "Surat Peringatan 2 & Potong Tunjangan Harian" },
                            { warning_clause: "Melakukan kelalaian kerja yang menyebabkan complain tertulis dari klien", fee: "Pemotongan insentif kinerja bulan berjalan" }
                        ]
                    },
                    {
                        severity: "SP3",
                        sanctions: [
                            { warning_clause: "Membocorkan data sensitif/source code/kredensial perusahaan kepada pihak ketiga", fee: "Pemutusan Hubungan Kerja (PHK) seketika" },
                            { warning_clause: "Terbukti melakukan tindakan kecurangan, penipuan, atau pencurian kas perusahaan", fee: "PHK langsung & Pelaporan ke Pihak Berwajib" }
                        ]
                    }
                ]
            };

            stepsData[13] = {
                sops: [
                    {
                        role_name: "Manager Keuangan",
                        task_name: "Melakukan audit dan pencocokan invoice masuk dengan rekening koran bank",
                        sop_name: "SOP Rekonsiliasi Bank Bulanan",
                        steps: [
                            { method: "Unduh mutasi bank dan file rekap invoice dari sistem.", man: "Manager Keuangan", machine: "Laptop & Web Browser", material: "Internet & Akses Internet Banking" },
                            { method: "Cocokkan nominal di mutasi dengan nominal invoice.", man: "Manager Keuangan", machine: "Spreadsheet", material: "Data Mutasi Kas & Invoice" },
                            { method: "Tandai transaksi cocok dan laporkan selisih jika ada.", man: "Manager Keuangan", machine: "Spreadsheet", material: "Form Rekonsiliasi" }
                        ]
                    }
                ]
            };

            stepsData[14] = {
                trainings: [
                    {
                        role_name: "Staff Customer Service",
                        skills: [
                            {
                                key_activity: "Menjawab keluhan klien",
                                list: [
                                    "SOP Komunikasi Ramah & Profesional",
                                    "Tata Cara Resolusi Tiket Masalah",
                                    "Penggunaan Software Helpdesk Hubspot"
                                ]
                            }
                        ]
                    }
                ]
            };

            setTimeout(() => {
                if (typeof syncValuesToLiveCard === 'function') syncValuesToLiveCard();
                if (typeof generateProfileDashboard === 'function') generateProfileDashboard();
            }, 100);
            // ==========================

            alert("Mode Demo diaktifkan! Data Perusahaan terisi otomatis, semua tahapan AOS (1-14) telah terbuka dan checklist selesai.");
        });
    }

    // SPA SWITCH TAB BINDING
    window.switchTab = function (tabId) {
        // Toggle view panels
        document.querySelectorAll(".view-panel").forEach(panel => {
            panel.classList.remove("active-panel");
        });
        const targetPanel = document.getElementById(`panel-${tabId}`);
        if (targetPanel) {
            targetPanel.classList.add("active-panel");
        }

        // Toggle sidebar active state
        document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
            item.classList.remove("active");
            item.classList.remove("active-step");
            if (item.getAttribute("data-tab") === tabId) {
                item.classList.add("active");
            }
        });

        // Set Breadcrumb Title
        const currentPageTitle = document.querySelector(".current-page-title");
        let title = "Dashboard";
        if (tabId === "worksheet") {
            title = "";
        } else if (tabId === "dashboard") {
            title = "Dashboard";
            updateStepTimelineDashboard();
            updateDashboardChecklistProgress();
        } else if (tabId === "data-perusahaan") {
            title = "Data Perusahaan";
        } else if (tabId === "profil") {
            title = "Profil Tenant";
            generateProfileDashboard();
        } else if (tabId === "diskusi") {
            title = "Diskusi Tim";
        } else if (tabId === "panduan") {
            title = "Panduan Aplikasi";
        } else if (tabId === "download-document") {
            title = "Download AOS Document";
            renderDownloadDocumentPanel();
        } else if (tabId === "aos-checklist") {
            title = "Implementasi AOS";
            renderChecklistPanel();
        }

        if (currentPageTitle) currentPageTitle.textContent = title;
    };

    // Sidebar Items Click Events
    document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
        item.addEventListener("click", function () {
            if (item.classList.contains("locked")) {
                alert("Tahapan ini masih terkunci! Harap isi data dan ikuti langkah berurutan.");
                return;
            }

            const tabId = item.getAttribute("data-tab");
            const stepId = item.getAttribute("data-step");

            if (tabId) {
                switchTab(tabId);
            } else if (stepId) {
                loadStepWorksheet(parseInt(stepId));
            }
        });
    });

    // Hook Up Wizard Step Indicators Clicking
    document.querySelectorAll(".wizard-step").forEach(stepEl => {
        stepEl.addEventListener("click", () => {
            const stepNum = stepEl.getAttribute("data-step-indicator");
            if (stepNum) goToWizardStep(parseInt(stepNum));
        });
    });

    // 4. DATA PERUSAHAAN WIZARD CONTROLS & DYNAMIC OPTIONS
    const wizardForm = document.getElementById("company-wizard-form");
    const wizardSteps = document.querySelectorAll(".wizard-steps-indicator .wizard-step");
    const formPages = document.querySelectorAll(".wizard-form-page");
    const btnNexts = document.querySelectorAll(".btn-next-wizard");
    const btnPrevs = document.querySelectorAll(".btn-prev-wizard");

    function goToWizardStep(stepNum) {
        formPages.forEach(page => {
            page.classList.remove("active-form-page");
        });
        const targetPage = document.querySelector(`[data-form-page="${stepNum}"]`);
        if (targetPage) targetPage.classList.add("active-form-page");

        wizardSteps.forEach((step, idx) => {
            step.classList.remove("active-step-indicator");
            if (idx + 1 <= stepNum) {
                step.classList.add("active-step-indicator");
            }
        });
    }

    btnNexts.forEach(btn => {
        btn.addEventListener("click", function () {
            const nextStep = btn.getAttribute("data-target-step");
            goToWizardStep(parseInt(nextStep));
        });
    });

    btnPrevs.forEach(btn => {
        btn.addEventListener("click", function () {
            const prevStep = btn.getAttribute("data-target-step");
            goToWizardStep(parseInt(prevStep));
        });
    });

    // Populate Kategori dropdown dynamically based on Industry choice
    const industrySelect = document.getElementById("company-industry");
    const categorySelect = document.getElementById("company-category");
    const categoryOtherWrapper = document.getElementById("company-category-other-wrapper");
    const categoryOtherInput = document.getElementById("company-category-other");

    function populateCategories(industryVal) {
        if (!categorySelect) return;
        categorySelect.innerHTML = "";
        const list = BUSINESS_CATEGORIES_BY_INDUSTRY[industryVal] || [];
        list.forEach(cat => {
            const opt = document.createElement("option");
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
        });

        // Trigger change for category other visibility check
        categorySelect.dispatchEvent(new Event("change"));
    }

    if (industrySelect) {
        industrySelect.addEventListener("change", function () {
            populateCategories(industrySelect.value);
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener("change", function () {
            if (categorySelect.value === "Pendidikan Non-Formal Lainnya") {
                if (categoryOtherWrapper) categoryOtherWrapper.style.display = "block";
            } else {
                if (categoryOtherWrapper) {
                    categoryOtherWrapper.style.display = "none";
                    if (categoryOtherInput) categoryOtherInput.value = "";
                }
            }
        });
    }

    // Toggle partnership count based on ownership status
    const ownershipSelect = document.getElementById("company-ownership");
    const partnersWrapper = document.getElementById("company-partners-count-wrapper");
    const partnersInput = document.getElementById("company-partners-count");

    if (ownershipSelect) {
        ownershipSelect.addEventListener("change", function () {
            if (ownershipSelect.value === "Syirkah") {
                if (partnersWrapper) partnersWrapper.style.display = "block";
            } else {
                if (partnersWrapper) {
                    partnersWrapper.style.display = "none";
                    if (partnersInput) partnersInput.value = "0";
                }
            }
        });
    }

    function validateCompanyDataForm() {
        return true; // Bypassed for mockup testing
        const alphabetWithSpaces = /^[a-zA-Z\s.,']+$/;
        const noSymbols = /^[^!@#$%^*()+=[\]{};'"\\|<>?/~`]+$/; // allowed: & - . , :
        const phoneRegex = /^(\+62|0)[0-9\s-]{9,18}$/;

        const clientName = document.getElementById("owner-fullname").value.trim();
        const clientNickname = document.getElementById("owner-nickname").value.trim();
        const ownerPhone = document.getElementById("owner-whatsapp").value.trim();

        if (!clientName) {
            alert("Nama Lengkap Pemilik wajib diisi!");
            return false;
        }
        if (!alphabetWithSpaces.test(clientName)) {
            alert("Nama Lengkap Pemilik hanya boleh berisi huruf dan spasi!");
            return false;
        }
        if (clientName.length < 3) {
            alert("Nama Lengkap Pemilik minimal 3 karakter!");
            return false;
        }

        if (!clientNickname) {
            alert("Nama Panggilan Pemilik wajib diisi!");
            return false;
        }
        if (!alphabetWithSpaces.test(clientNickname)) {
            alert("Nama Panggilan Pemilik hanya boleh berisi huruf dan spasi!");
            return false;
        }
        if (clientNickname.length < 3) {
            alert("Nama Panggilan Pemilik minimal 3 karakter!");
            return false;
        }

        if (!ownerPhone) {
            alert("Nomor WhatsApp wajib diisi!");
            return false;
        }
        if (!phoneRegex.test(ownerPhone)) {
            alert("Format nomor WhatsApp tidak valid (gunakan +62 atau 0 dan minimal 10-15 digit)!");
            return false;
        }

        const businessName = document.getElementById("company-brand").value.trim();
        const businessLegalName = document.getElementById("company-legal").value.trim();
        const category = document.getElementById("company-category").value;
        const age = parseInt(document.getElementById("company-age").value);
        const branches = parseInt(document.getElementById("company-branches").value);
        const ownership = document.getElementById("company-ownership").value;
        const employees = parseInt(document.getElementById("company-employees").value);

        if (!businessName) {
            alert("Nama Bisnis (Brand) wajib diisi!");
            return false;
        }
        if (!noSymbols.test(businessName)) {
            alert("Nama Bisnis tidak boleh mengandung simbol!");
            return false;
        }
        if (businessName.length < 3) {
            alert("Nama Bisnis minimal 3 karakter!");
            return false;
        }

        if (!businessLegalName) {
            alert("Nama Legal Bisnis wajib diisi!");
            return false;
        }
        if (!noSymbols.test(businessLegalName)) {
            alert("Nama Legal Bisnis tidak boleh mengandung simbol!");
            return false;
        }
        if (businessLegalName.length < 3) {
            alert("Nama Legal Bisnis minimal 3 karakter!");
            return false;
        }

        if (isNaN(age) || age <= 0) {
            alert("Lama usaha harus berupa angka positif!");
            return false;
        }

        if (isNaN(branches) || branches < 0) {
            alert("Jumlah cabang tidak boleh negatif!");
            return false;
        }

        if (ownership === "Syirkah") {
            const partners = partnersInput ? parseInt(partnersInput.value) : 0;
            if (isNaN(partners) || partners <= 0) {
                alert("Jumlah mitra wajib diisi dan harus lebih besar dari 0 jika status kepemilikan Syirkah!");
                return false;
            }
        }

        if (isNaN(employees) || employees <= 0) {
            alert("Jumlah karyawan harus berupa angka positif!");
            return false;
        }

        if (category === "Pendidikan Non-Formal Lainnya") {
            const otherInput = document.getElementById("company-category-other");
            if (!otherInput || !otherInput.value.trim()) {
                alert("Keterangan Nama Produk/Layanan Utama wajib diisi jika kategori Pendidikan Non-Formal Lainnya!");
                return false;
            }
        }

        // Masalah Utama
        const issue1 = document.getElementById("company-issue-1").value.trim();

        if (issue1.length < 3) {
            alert("Minimal 1 Masalah Utama wajib diisi dengan minimal 3 karakter!");
            return false;
        }

        // Socials check (min 1) - Removed because it's optional
        let socialCount = 0;
        document.querySelectorAll("#social-media-rows-container .social-media-row").forEach(row => {
            const username = row.querySelector(".social-username").value.trim();
            if (username) socialCount++;
        });

        // Other products 5-slot check
        const priceRows = document.querySelectorAll(".product-price-grid .price-row");

        for (let i = 0; i < priceRows.length; i++) {
            const row = priceRows[i];
            const name = row.querySelector(".prod-cat-name").value.trim();
            const min = row.querySelector(".prod-price-min").value.trim();
            const max = row.querySelector(".prod-price-max").value.trim();

            if (name && (!min || !max)) {
                alert(`Harap lengkapi harga minimum dan maksimum untuk produk slot ke-${i + 1} ("${name}")!`);
                return false;
            }
        }

        return true;
    }

    // Save Data Perusahaan handler
    if (wizardForm) {
        wizardForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Validate fields first
            if (!validateCompanyDataForm()) {
                return;
            }

            // Mappings for Province/Regency IDs
            const provinceIdMap = {
                "JAWA TENGAH": "33",
                "JAWA BARAT": "32",
                "JAWA TIMUR": "35",
                "DKI JAKARTA": "31",
                "DI YOGYAKARTA": "34"
            };
            const regencyIdMap = {
                "KABUPATEN CILACAP": "3301",
                "KOTA SEMARANG": "3374",
                "KABUPATEN BANYUMAS": "3302",
                "KOTA SURAKARTA": "3372",
                "JAKARTA SELATAN": "3174",
                "KOTA YOGYAKARTA": "3471",
                "KABUPATEN SLEMAN": "3404"
            };

            // Store form data into state
            companyData.client_name = document.getElementById("owner-fullname").value;
            companyData.client_nickname = document.getElementById("owner-nickname").value;
            companyData.owner_phone = document.getElementById("owner-whatsapp").value;
            companyData.owner_gender = document.getElementById("owner-gender").value;
            // Collect communities dynamically
            const communities = [];
            const communityContainer = document.getElementById("community-input-group");
            if (communityContainer) {
                communityContainer.querySelectorAll("input").forEach(input => {
                    const val = input.value.trim();
                    if (val) {
                        communities.push(val);
                    }
                });
            }
            companyData.business_condition_position = communities.join(", ");

            // Map owner province/regency names to IDs
            const ownerProvName = document.getElementById("owner-province").value;
            const ownerCityName = document.getElementById("owner-city").value;
            companyData.province_name = ownerProvName;
            companyData.province_id = provinceIdMap[ownerProvName ? ownerProvName.toUpperCase() : ""] || "";
            companyData.regency_name = ownerCityName;
            companyData.regency_id = regencyIdMap[ownerCityName ? ownerCityName.toUpperCase() : ""] || "";

            companyData.business_name = document.getElementById("company-brand").value;
            companyData.legal_entity = document.getElementById("company-entity").value;
            companyData.business_legal_name = document.getElementById("company-legal").value;
            companyData.industry = document.getElementById("company-industry").value;
            companyData.business_category = document.getElementById("company-category").value;
            companyData.business_category_other = categoryOtherInput ? categoryOtherInput.value : "";
            companyData.business_age_years = parseInt(document.getElementById("company-age").value) || 0;
            companyData.branch_count = parseInt(document.getElementById("company-branches").value) || 0;
            companyData.ownership_status = document.getElementById("company-ownership").value;
            companyData.partnership_count = partnersInput ? (parseInt(partnersInput.value) || 0) : 0;
            companyData.status_usaha = document.getElementById("company-status").value;
            companyData.total_employees = parseInt(document.getElementById("company-employees").value) || 0;
            companyData.business_scale = document.getElementById("company-revenue").value;
            companyData.has_financial_report = document.getElementById("company-psak").value;

            // Map business province/regency names to IDs
            const bizProvName = document.getElementById("company-province").value;
            const bizCityName = document.getElementById("company-city").value;
            companyData.business_province_name = bizProvName;
            companyData.business_province_id = provinceIdMap[bizProvName ? bizProvName.toUpperCase() : ""] || "";
            companyData.business_regency_name = bizCityName;
            companyData.business_regency_id = regencyIdMap[bizCityName ? bizCityName.toUpperCase() : ""] || "";

            companyData.product_services_primary = document.getElementById("product-primary").value;

            // Masalah Utama
            companyData.main_problem_1 = document.getElementById("company-issue-1").value;
            companyData.main_problem_2 = document.getElementById("company-issue-2").value;
            companyData.main_problem_3 = document.getElementById("company-issue-3").value;

            // Dynamic socials
            companyData.social_media_marketplaces = [];
            document.querySelectorAll("#social-media-rows-container .social-media-row").forEach(row => {
                const platform = row.querySelector(".social-platform").value;
                const username = row.querySelector(".social-username").value.trim();
                if (username) {
                    companyData.social_media_marketplaces.push({
                        social_media_marketplace: platform,
                        account_name: username
                    });
                }
            });

            // Product prices
            companyData.other_product_services = [];
            document.querySelectorAll(".product-price-grid .price-row").forEach(row => {
                const name = row.querySelector(".prod-cat-name").value.trim();
                const min = row.querySelector(".prod-price-min").value;
                const max = row.querySelector(".prod-price-max").value;
                companyData.other_product_services.push({
                    product_service_name: name,
                    estimated_price_min: min,
                    estimated_price_max: max
                });
            });

            // Unlock Profil & Step 1 (Purpose)
            stepStatus['profil'] = 'unlocked';
            stepStatus[1] = 'unlocked';

            document.getElementById("nav-profil").classList.remove("locked");
            document.getElementById("nav-step-1").classList.remove("locked");

            // Update step database values
            updateStepTimelineDashboard();

            // Alert user success
            alert("Data Perusahaan Berhasil Disimpan! Profil dan Langkah 0 (Purpose) kini telah terbuka.");

            // Redirect to Profil tab
            switchTab("profil");
        });
    }

    // Dynamic Social media row controls in Data Perusahaan
    const btnAddSocial = document.getElementById("btn-add-social");
    const socialContainer = document.getElementById("social-media-rows-container");

    if (btnAddSocial && socialContainer) {
        btnAddSocial.addEventListener("click", function () {
            const newRow = document.createElement("div");
            newRow.className = "social-media-row";
            newRow.style.display = "flex";
            newRow.style.gap = "10px";
            newRow.style.marginBottom = "8px";
            newRow.innerHTML = `
                <select class="form-control social-platform" style="width: 35%;">
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Shopee">Shopee</option>
                    <option value="Tokopedia">Tokopedia</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
                <input type="text" class="form-control social-username" placeholder="@akun / link">
                <button type="button" class="btn btn-outline btn-remove-social" style="padding: 10px; border-color: #fca5a5; color: #ef4444;">&times;</button>
            `;
            socialContainer.appendChild(newRow);

            newRow.querySelector(".btn-remove-social").addEventListener("click", () => {
                newRow.remove();
                syncValuesToLiveCard();
            });

            newRow.querySelectorAll("input, select").forEach(input => {
                input.addEventListener("input", syncValuesToLiveCard);
            });
        });
    }

    // Remove buttons bindings for initial row
    document.querySelectorAll(".btn-remove-social").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const row = e.target.closest(".social-media-row");
            if (row) {
                row.remove();
                syncValuesToLiveCard();
            }
        });
    });

    // 5. LIVE PREVIEW KARTU HIDUP REAL-TIME SYNC
    function syncValuesToLiveCard() {
        const pBrand = document.getElementById("card-brand-preview");
        const pIndustry = document.getElementById("card-industry-preview");
        const pCategory = document.getElementById("card-category-preview");
        const pEntity = document.getElementById("card-entity-preview");
        const pOwner = document.getElementById("card-owner-preview");
        const pWA = document.getElementById("card-owner-wa-preview");
        const pDom = document.getElementById("card-owner-city-preview");
        const pLegal = document.getElementById("card-legal-preview");
        const pAge = document.getElementById("card-age-preview");
        const pBranch = document.getElementById("card-branches-preview");
        const pEmp = document.getElementById("card-employees-preview");
        const pRev = document.getElementById("card-revenue-preview");
        const pOwn = document.getElementById("card-ownership-preview");
        const pPsak = document.getElementById("card-psak-preview");
        const pLoc = document.getElementById("card-loc-preview");
        const pPhoneWeb = document.getElementById("card-phone-web-preview");
        const pAddr = document.getElementById("card-address-preview");
        const pProd = document.getElementById("card-product-preview");

        const elBrand = document.getElementById("company-brand");
        const elIndustry = document.getElementById("company-industry");
        const elCategory = document.getElementById("company-category");
        const elEntity = document.getElementById("company-entity");
        const elOwner = document.getElementById("owner-fullname");
        const elWA = document.getElementById("owner-whatsapp");
        const elCity = document.getElementById("owner-city");
        const elLegal = document.getElementById("company-legal");
        const elAge = document.getElementById("company-age");
        const elBranch = document.getElementById("company-branches");
        const elEmp = document.getElementById("company-employees");
        const elRev = document.getElementById("company-revenue");
        const elOwn = document.getElementById("company-ownership");
        const elPartners = document.getElementById("company-partners-count");
        const elPsak = document.getElementById("company-psak");
        const elCityUsaha = document.getElementById("company-city");
        const elProvUsaha = document.getElementById("company-province");
        const elPhone = document.getElementById("company-phone");
        const elWeb = document.getElementById("sales-website");
        const elAddr = document.getElementById("company-address");
        const elProd = document.getElementById("product-primary");

        if (pBrand && elBrand) pBrand.textContent = elBrand.value || "-";
        if (pIndustry && elIndustry) pIndustry.textContent = elIndustry.value || "-";
        if (pCategory && elCategory) pCategory.textContent = elCategory.value || "-";
        if (pEntity && elEntity) pEntity.textContent = elEntity.value || "-";
        if (pOwner && elOwner) pOwner.textContent = elOwner.value || "-";
        if (pWA && elWA) pWA.textContent = elWA.value || "-";
        if (pDom && elCity) pDom.textContent = elCity.value || "-";
        if (pLegal && elLegal) pLegal.textContent = elLegal.value || "-";
        if (pAge && elAge) pAge.textContent = (elAge.value || "0") + " Tahun";
        if (pBranch && elBranch) pBranch.textContent = (elBranch.value || "0") + " Cabang";
        if (pEmp && elEmp) pEmp.textContent = (elEmp.value || "0") + " Orang";
        if (pRev && elRev) pRev.textContent = elRev.value || "-";

        if (pOwn && elOwn) {
            let text = elOwn.value || "-";
            if (elOwn.value === "Syirkah" && elPartners) {
                text += ` (${elPartners.value || 0} Mitra)`;
            }
            pOwn.textContent = text;
        }

        if (pPsak && elPsak) pPsak.textContent = elPsak.value || "-";
        if (pLoc && elCityUsaha && elProvUsaha) pLoc.textContent = `${elCityUsaha.value}, ${elProvUsaha.value}`;
        if (pPhoneWeb && elPhone && elWeb) pPhoneWeb.textContent = `${elPhone.value || "-"} / ${elWeb.value || "-"}`;
        if (pAddr && elAddr) pAddr.textContent = elAddr.value || "-";
        if (pProd && elProd) pProd.textContent = elProd.value || "-";

        // Sync issues
        const issue1 = document.getElementById("company-issue-1");
        const issue2 = document.getElementById("company-issue-2");
        const issue3 = document.getElementById("company-issue-3");
        const pIssue1 = document.getElementById("card-issue-1-preview");
        const pIssue2 = document.getElementById("card-issue-2-preview");
        const pIssue3 = document.getElementById("card-issue-3-preview");

        if (pIssue1 && issue1) pIssue1.textContent = issue1.value || "-";
        if (pIssue2 && issue2) pIssue2.textContent = issue2.value || "-";
        if (pIssue3 && issue3) pIssue3.textContent = issue3.value || "-";

        // Sync socials
        const socialsPreview = document.getElementById("card-socials-preview");
        if (socialsPreview && socialContainer) {
            socialsPreview.innerHTML = "";
            const rows = socialContainer.querySelectorAll(".social-media-row");
            rows.forEach(row => {
                const plat = row.querySelector(".social-platform").value;
                const user = row.querySelector(".social-username").value.trim();
                if (user) {
                    const badge = document.createElement("span");
                    badge.className = "social-badge";
                    badge.textContent = `${plat}: ${user}`;
                    socialsPreview.appendChild(badge);
                }
            });
            if (socialsPreview.children.length === 0) {
                socialsPreview.innerHTML = "<span style='font-size: 12.5px; opacity: 0.6;'>Belum ada media sosial</span>";
            }
        }

        // Sync product price grid
        const pricesPreview = document.getElementById("card-prices-preview");
        if (pricesPreview) {
            pricesPreview.innerHTML = "";
            document.querySelectorAll(".product-price-grid .price-row").forEach(row => {
                const name = row.querySelector(".prod-cat-name").value.trim();
                const min = row.querySelector(".prod-price-min").value;
                const max = row.querySelector(".prod-price-max").value;
                if (name) {
                    const rowDiv = document.createElement("div");
                    rowDiv.className = "price-row-preview";
                    const minInt = parseInt(min) || 0;
                    const maxInt = parseInt(max) || 0;
                    rowDiv.innerHTML = `
                        <span>${name}</span>
                        <span>Rp ${minInt.toLocaleString("id-ID")} - Rp ${maxInt.toLocaleString("id-ID")}</span>
                    `;
                    pricesPreview.appendChild(rowDiv);
                }
            });
            if (pricesPreview.children.length === 0) {
                pricesPreview.innerHTML = "<span style='font-size: 12.5px; opacity: 0.6;'>Belum ada kategori produk</span>";
            }
        }
    }

    // Attach listeners to Data Perusahaan form fields
    document.querySelectorAll("#company-wizard-form input, #company-wizard-form select, #company-wizard-form textarea").forEach(el => {
        el.addEventListener("input", syncValuesToLiveCard);
        el.addEventListener("change", syncValuesToLiveCard);
    });

    // Run initial dynamic category populator
    if (industrySelect) {
        populateCategories(industrySelect.value);
    }
    syncValuesToLiveCard();

    // 6. GENERATE PROFILE VIEW
    function generateProfileDashboard() {
        document.getElementById("profile-brand-name").textContent = companyData.business_name || "-";
        document.getElementById("profile-brand-legal").textContent = companyData.business_legal_name || "-";
        document.getElementById("profile-brand-industry").textContent = companyData.industry || "-";

        document.getElementById("profile-owner-name").textContent = companyData.client_name || "-";
        document.getElementById("profile-owner-nickname").textContent = companyData.client_nickname || "-";
        document.getElementById("profile-owner-phone").textContent = companyData.owner_phone || "-";
        document.getElementById("profile-owner-gender").textContent = companyData.owner_gender || "-";
        document.getElementById("profile-owner-city").textContent = companyData.regency_name || "-";
        document.getElementById("profile-owner-community").textContent = companyData.business_condition_position || "-";

        document.getElementById("profile-business-entity").textContent = companyData.legal_entity || "-";
        document.getElementById("profile-business-age").textContent = (companyData.business_age_years || "0") + " Tahun";
        document.getElementById("profile-business-branches").textContent = (companyData.branch_count || "0") + " Cabang";

        let ownStr = companyData.ownership_status || "-";
        if (companyData.ownership_status === "Syirkah") {
            ownStr += ` (${companyData.partnership_count} Mitra)`;
        }
        document.getElementById("profile-business-ownership").textContent = ownStr;

        document.getElementById("profile-business-employees").textContent = (companyData.total_employees || "0") + " Orang";
        document.getElementById("profile-business-scale").textContent = companyData.business_scale || "-";
        document.getElementById("profile-business-province").textContent = companyData.business_province_name || "-";
        document.getElementById("profile-business-city").textContent = companyData.business_regency_name || "-";
        document.getElementById("profile-business-psak").textContent = companyData.has_financial_report || "-";

        document.getElementById("profile-product-primary").textContent = companyData.product_services_primary || "-";

        // populate price categories list
        const pricePreviewList = document.getElementById("profile-prices-preview");
        if (pricePreviewList) {
            pricePreviewList.innerHTML = "";
            let emptyCount = 0;
            companyData.other_product_services.forEach(item => {
                if (item.product_service_name) {
                    const div = document.createElement("div");
                    div.className = "profile-price-row";
                    const minInt = parseInt(item.estimated_price_min) || 0;
                    const maxInt = parseInt(item.estimated_price_max) || 0;
                    div.innerHTML = `
                        <strong>${item.product_service_name}</strong>
                        <span>Rp ${minInt.toLocaleString("id-ID")} - Rp ${maxInt.toLocaleString("id-ID")}</span>
                    `;
                    pricePreviewList.appendChild(div);
                } else {
                    emptyCount++;
                }
            });
            if (pricePreviewList.children.length === 0) {
                pricePreviewList.innerHTML = "<em style='color:var(--text-muted); font-size:12.5px;'>Belum ada kategori produk tambahan</em>";
            }
        }

        // populate social media badges
        const socialPreviewBadges = document.getElementById("profile-socials-preview");
        if (socialPreviewBadges) {
            socialPreviewBadges.innerHTML = "";
            companyData.social_media_marketplaces.forEach(item => {
                const badge = document.createElement("span");
                badge.className = "profile-social-badge";
                badge.textContent = `${item.social_media_marketplace}: ${item.account_name}`;
                socialPreviewBadges.appendChild(badge);
            });
            if (socialPreviewBadges.children.length === 0) {
                socialPreviewBadges.innerHTML = "<em style='color:var(--text-muted); font-size:12.5px;'>Belum ada akun sosial media</em>";
            }
        }

        // populate issues
        const issuesPreviewList = document.getElementById("profile-issues-preview");
        if (issuesPreviewList) {
            issuesPreviewList.innerHTML = "";
            if (companyData.main_problem_1) issuesPreviewList.appendChild(createIssueCard(companyData.main_problem_1));
            if (companyData.main_problem_2) issuesPreviewList.appendChild(createIssueCard(companyData.main_problem_2));
            if (companyData.main_problem_3) issuesPreviewList.appendChild(createIssueCard(companyData.main_problem_3));
        }
    }

    function createIssueCard(text) {
        const div = document.createElement("div");
        div.className = "profile-issue-card";
        div.textContent = text;
        return div;
    }

    // 7. DASHBOARD AND STEP TIMELINE HANDLERS
    const timelineNodes = document.querySelectorAll(".horizontal-timeline-container .step-node");

    function updateStepTimelineDashboard() {
        let completedCount = 0;
        let activeIndex = -1;

        // Steps 1 to 14
        for (let i = 1; i <= 14; i++) {
            const node = document.querySelector(`.horizontal-timeline-container [data-step="${i}"]`);
            const nav = document.getElementById(`nav-step-${i}`);

            if (stepStatus[i] === 'completed') {
                completedCount++;
                if (node) {
                    node.className = "step-node completed";
                    let displayNum = (i <= 2) ? 0 : (i - 2);
                    node.querySelector(".node-circle").innerHTML = displayNum;
                    node.querySelector(".node-circle").style.boxShadow = "";
                    node.querySelector(".node-circle").style.backgroundColor = "";
                    node.querySelector(".node-circle").style.color = "";
                    
                    let nodeCheck = node.querySelector(".node-check");
                    if (nodeCheck) nodeCheck.remove();
                    
                    if (!node.querySelector(".badge-check")) {
                        let check = document.createElement("span");
                        check.className = "badge-check";
                        check.innerHTML = "✅";
                        node.querySelector(".node-circle").appendChild(check);
                    }
                }
                if (nav) {
                    nav.className = "nav-item step-item completed";
                    let displayNum = (i <= 2) ? 0 : (i - 2);
                    nav.querySelector(".step-num").innerHTML = displayNum;
                    nav.querySelector(".step-num").style.backgroundColor = "";
                    nav.querySelector(".step-num").style.color = "";
                    nav.querySelector(".step-num").style.boxShadow = "";
                    
                    let existingCheck = nav.querySelector(".step-check");
                    if (existingCheck) existingCheck.remove();
                }
            } else if (stepStatus[i] === 'unlocked') {
                let displayNum = (i <= 2) ? 0 : (i - 2);
                if (node) {
                    node.className = "step-node in-progress";
                    node.querySelector(".node-circle").innerHTML = displayNum;
                    node.querySelector(".node-circle").style.boxShadow = "";
                    node.querySelector(".node-circle").style.backgroundColor = "";
                    node.querySelector(".node-circle").style.color = "";
                    
                    let check = node.querySelector(".badge-check");
                    if (check) check.remove();
                    let nodeCheck = node.querySelector(".node-check");
                    if (nodeCheck) nodeCheck.remove();
                }
                if (nav) {
                    nav.className = "nav-item step-item active-step";
                    nav.querySelector(".step-num").innerHTML = displayNum;
                    nav.querySelector(".step-num").style.backgroundColor = "";
                    nav.querySelector(".step-num").style.color = "";
                    nav.querySelector(".step-num").style.boxShadow = "";
                    
                    let existingCheck = nav.querySelector(".step-check");
                    if (existingCheck) existingCheck.remove();
                }
                if (activeIndex === -1) activeIndex = i;
            } else {
                let displayNum = (i <= 2) ? 0 : (i - 2);
                if (node) {
                    node.className = "step-node locked";
                    node.querySelector(".node-circle").innerHTML = displayNum;
                    node.querySelector(".node-circle").style.boxShadow = "";
                    node.querySelector(".node-circle").style.backgroundColor = "";
                    node.querySelector(".node-circle").style.color = "";
                    
                    let check = node.querySelector(".badge-check");
                    if (check) check.remove();
                    let nodeCheck = node.querySelector(".node-check");
                    if (nodeCheck) nodeCheck.remove();
                }
                if (nav) {
                    nav.className = "nav-item step-item locked";
                    nav.querySelector(".step-num").innerHTML = displayNum;
                    nav.querySelector(".step-num").style.backgroundColor = "";
                    nav.querySelector(".step-num").style.color = "";
                    nav.querySelector(".step-num").style.boxShadow = "";
                    
                    let existingCheck = nav.querySelector(".step-check");
                    if (existingCheck) existingCheck.remove();
                }
            }
        }

        // Progress text and multi-segment bar
        const pctText = document.querySelector(".progress-bar-section .progress-pct-text");
        const segmentOrange = document.querySelector(".progress-bar-segment.segment-orange");
        const segmentBlue = document.querySelector(".progress-bar-segment.segment-blue");
        const segmentGray = document.querySelector(".progress-bar-segment.segment-gray");
        const progressDesc = document.querySelector(".progress-desc-text");

        const completedPct = Math.round((completedCount / 14) * 100);

        if (pctText) pctText.textContent = `${completedPct}% Selesai`;
        if (progressDesc) progressDesc.textContent = `${completedCount} dari 14 langkah selesai`;

        if (segmentOrange) segmentOrange.style.width = `${completedPct}%`;

        let inProgressPct = 0;
        if (completedCount < 14) inProgressPct = Math.round((1 / 14) * 100);
        if (segmentBlue) segmentBlue.style.width = `${inProgressPct}%`;

        let lockedPct = 100 - completedPct - inProgressPct;
        if (segmentGray) segmentGray.style.width = `${lockedPct}%`;

        // Check checklist unlock
        if (completedCount === 14) {
            stepStatus['checklist'] = 'unlocked';
            const navChecklist = document.getElementById("nav-aos-checklist");
            if (navChecklist) navChecklist.classList.remove("locked");
            const navDownload = document.getElementById("nav-download-document");
            if (navDownload) navDownload.classList.remove("locked");
        }
    }

    timelineNodes.forEach(node => {
        node.addEventListener("click", () => {
            const stepId = parseInt(node.getAttribute("data-step"));
            if (stepStatus[stepId] === 'locked') {
                alert("Tahapan ini masih terkunci! Selesaikan tahapan sebelumnya terlebih dahulu.");
                return;
            }
            loadStepWorksheet(stepId);
        });
    });

    // 8. DYNAMIC STEP FORM LOADER AND INJECTOR
    window.loadStepWorksheet = function (stepId) {
        currentActiveStepId = stepId;

        // Reset tips collapse state
        const wsLayout = document.querySelector(".worksheet-layout");
        const btnToggleTips = document.getElementById("btn-toggle-tips");
        if (wsLayout && wsLayout.classList.contains("tips-collapsed")) {
            wsLayout.classList.remove("tips-collapsed");
            if (btnToggleTips) {
                const textEl = btnToggleTips.querySelector(".toggle-tips-text");
                const iconEl = btnToggleTips.querySelector(".toggle-tips-icon");
                if (textEl) textEl.textContent = "Sembunyikan Panduan";
                if (iconEl) iconEl.style.transform = "rotate(0deg)";
            }
        }

        // Show worksheet panel in viewport
        switchTab("worksheet");

        // Toggle active-step in sidebar
        document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
            item.classList.remove("active");
            item.classList.remove("active-step");
            if (parseInt(item.getAttribute("data-step")) === stepId) {
                item.classList.add("active-step");
            }
        });

        // Set Breadcrumb ws-current title
        const stepNameText = STEP_DATABASE[stepId].title;
        document.getElementById("ws-step-title").textContent = stepNameText;

        // Ingest tips and video link
        document.getElementById("worksheet-tips-content").innerHTML = STEP_DATABASE[stepId].tips;

        // Video button handler
        const btnPlayVideo = document.getElementById("btn-play-video");
        const videoLink = STEP_DATABASE[stepId].videoLink;
        if (btnPlayVideo) {
            btnPlayVideo.onclick = () => {
                openVideoGuideModal(videoLink, stepNameText);
            };
        }

        // Dynamic synchronization based on stepId
        if (stepId === 10) {
            syncStep10Reports();
        } else if (stepId === 13) {
            syncStep13Sops();
        } else if (stepId === 14) {
            syncStep14Trainings();
        }

        // Render target form content dynamically
        renderStepForm(stepId);
    };

    function renderStepForm(stepId) {
        const container = document.getElementById("worksheet-form-container");
        if (!container) return;
        container.innerHTML = "";

        // Form Card Wrapper
        const card = document.createElement("div");
        card.className = "form-card";

        const formBody = document.createElement("div");

        // Populate custom form markup based on step
        switch (stepId) {
            case 1: // Purpose
                formBody.innerHTML = `
                    <div class="form-group">
                        <label for="ws-purpose">Tujuan Perusahaan *</label>
                        <textarea id="ws-purpose" class="form-control auto-expand" rows="8" placeholder="Masukkan tujuan jangka panjang (Why) perusahaan Anda...">${stepsData[1].purpose || ''}</textarea>
                    </div>
                `;
                break;

            case 2: // Positioning
                formBody.innerHTML = `
                    <div class="form-grid-2">
                        <div class="form-group">
                            <label for="ws-company">Nama Perusahaan *</label>
                            <input type="text" id="ws-company" class="form-control" value="${stepsData[2].company || companyData.business_name}">
                        </div>
                        <div class="form-group">
                            <label for="ws-category">Kategori Bisnis *</label>
                            <input type="text" id="ws-category" class="form-control" value="${stepsData[2].category || companyData.business_category}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ws-dna">DNA / Produk / Jasa *</label>
                        <input type="text" id="ws-dna" class="form-control" placeholder="Contoh: Aplikasi SaaS Keuangan" value="${stepsData[2].dna || ''}">
                    </div>
                    <div class="form-group">
                        <label for="ws-core-value">Core Value *</label>
                        <textarea id="ws-core-value" class="form-control auto-expand" rows="3" placeholder="Contoh: Terstandarisasi Akuntansi standar PSAK">${stepsData[2].core_value || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="ws-add-value">Add Value *</label>
                        <textarea id="ws-add-value" class="form-control auto-expand" rows="3" placeholder="Contoh: Tampilan dashboard ramah pemula">${stepsData[2].add_value || ''}</textarea>
                    </div>
                    <div class="form-group" style="margin-top:20px; border-top:1px dashed var(--border-color); padding-top:16px;">
                        <label for="ws-positioning">Pernyataan Positioning Strategis (Auto-Generated) *</label>
                        <textarea id="ws-positioning" class="form-control auto-expand" rows="3" readonly style="background-color:#f1f5f9; color:#475569; font-weight:500;">${stepsData[2].positioning || ''}</textarea>
                    </div>
                `;
                break;

            case 3: // Vision
                formBody.innerHTML = `
                    <div class="form-grid-2">
                        <div class="form-group">
                            <label for="ws-category-vis">Category *</label>
                            <input type="text" id="ws-category-vis" class="form-control" value="${stepsData[3].category || stepsData[2].category || companyData.business_category}">
                        </div>
                        <div class="form-group">
                            <label for="ws-dna-vis">DNA *</label>
                            <input type="text" id="ws-dna-vis" class="form-control" value="${stepsData[3].dna || stepsData[2].dna || ''}">
                        </div>
                    </div>
                    <div class="form-grid-2">
                        <div class="form-group">
                            <label for="ws-area">Wilayah Target *</label>
                            <input type="text" id="ws-area" class="form-control" placeholder="Contoh: Indonesia, Asia Tenggara" value="${stepsData[3].area || ''}">
                        </div>
                        <div class="form-group">
                            <label for="ws-target">Target Tahun *</label>
                            <input type="text" id="ws-target" class="form-control" placeholder="Contoh: 2030" value="${stepsData[3].target || ''}">
                        </div>
                    </div>
                    <div class="form-group" style="margin-top:20px; border-top:1px dashed var(--border-color); padding-top:16px;">
                        <label for="ws-vision">Visi Perusahaan (Auto-Generated) *</label>
                        <textarea id="ws-vision" class="form-control auto-expand" rows="3" readonly style="background-color:#f1f5f9; color:#475569; font-weight:500;">${stepsData[3].vision || ''}</textarea>
                    </div>
                `;
                break;

            case 4: // Mission
                formBody.innerHTML = `
                    <div class="form-group">
                        <label for="ws-m-hr">Misi Sumber Daya Manusia (SDM) *</label>
                        <textarea id="ws-m-hr" class="form-control auto-expand" rows="3" placeholder="Contoh: Membangun tim kerja yang kompeten, loyal, dan berakhlak mulia...">${stepsData[4].human_resources || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="ws-m-ops">Misi Operasional *</label>
                        <textarea id="ws-m-ops" class="form-control auto-expand" rows="3" placeholder="Contoh: Mengembangkan sistem kerja operasional berbasis digital yang efisien...">${stepsData[4].operation || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="ws-m-mkt">Misi Pemasaran / Marketing *</label>
                        <textarea id="ws-m-mkt" class="form-control auto-expand" rows="3" placeholder="Contoh: Menjadi mitra terpercaya bagi UMKM lewat edukasi bisnis berkelanjutan...">${stepsData[4].marketing || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="ws-m-fin">Misi Keuangan / Finance *</label>
                        <textarea id="ws-m-fin" class="form-control auto-expand" rows="3" placeholder="Contoh: Menjaga stabilitas keuangan perusahaan yang profitabel dan sehat...">${stepsData[4].finance || ''}</textarea>
                    </div>
                `;
                break;

            case 5: // Culture
                formBody.innerHTML = `
                    <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:15px;">Daftar nilai budaya perusahaan (Harus diisi minimal 3 dan maksimal 4 budaya).</p>
                    <div id="ws-cultures-container" style="display:flex; flex-direction:column; gap:12px;">
                        <!-- Dynamic rows populated below -->
                    </div>
                    <div style="margin-top:16px;">
                        <button type="button" class="btn btn-outline" id="btn-ws-add-culture">+ Tambah Budaya</button>
                    </div>
                `;
                break;

            case 6: // Business Goal
                formBody.innerHTML = `
                    <div class="form-grid-2" style="margin-bottom:20px;">
                        <div class="form-group">
                            <label for="ws-bg-type">Tipe Usaha *</label>
                            <select id="ws-bg-type" class="form-control">
                                <option value="berjalan" ${stepsData[6].business_type === 'berjalan' ? 'selected' : ''}>Usaha Berjalan</option>
                                <option value="baru" ${stepsData[6].business_type === 'baru' ? 'selected' : ''}>Usaha Baru (Startup)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ws-bg-target-type">Target dalam satuan *</label>
                            <select id="ws-bg-target-type" class="form-control">
                                <option value="rupiah" ${stepsData[6].target_type === 'rupiah' ? 'selected' : ''}>Rupiah (Rp)</option>
                                <option value="volume" ${stepsData[6].target_type === 'volume' ? 'selected' : ''}>Volume / Unit Sales</option>
                            </select>
                        </div>
                    </div>
                    
                    <div id="ws-bg-running-section">
                        <h4 style="font-size:13px; font-weight:700; color:var(--brand-royal); margin-bottom:10px;">Tabel Kinerja Historis & Rata-rata Pertumbuhan</h4>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-bg-running-table" style="min-width:500px;">
                                <thead>
                                    <tr>
                                        <th>Bulan</th>
                                        <th>Tahun 1 (Lalu)</th>
                                        <th>Tahun 2 (Kini)</th>
                                        <th>Growth %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated in loadStepWorksheet -->
                                </tbody>
                            </table>
                        </div>
                        <div class="form-grid-2" style="margin-top:20px; margin-bottom: 20px;">
                            <div class="form-group">
                                <label for="ws-bg-growth-pct">Target Growth Keuangan (%) *</label>
                                <input type="number" id="ws-bg-growth-pct" class="form-control" value="${stepsData[6].projection_kinerja_pct || 0}">
                            </div>
                        </div>

                        <h4 style="font-size:13px; font-weight:700; color:var(--brand-royal); margin-bottom:10px;">Proyeksi Target Keuangan (5 Tahun Ke Depan)</h4>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-bg-running-projection-table" style="min-width:600px;">
                                <thead>
                                    <tr>
                                        <th>Bulan</th>
                                        <!-- Will populate years dynamically -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Will populate dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="ws-bg-startup-section" style="display:none;">
                        <h4 style="font-size:13px; font-weight:700; color:var(--brand-royal); margin-bottom:10px;">Proyeksi Keuangan Bulanan (Tahun 1 s/d Tahun 5)</h4>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-bg-startup-table" style="min-width:600px;">
                                <thead>
                                    <tr>
                                        <th>Bulan</th>
                                        <th>Tahun 1</th>
                                        <th>Tahun 2</th>
                                        <th>Tahun 3</th>
                                        <th>Tahun 4</th>
                                        <th>Tahun 5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated dynamically -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
                break;

            case 7: // Org Structure
                formBody.innerHTML = `
                    <div style="overflow-x:auto;">
                        <table class="table-form" id="ws-org-table" style="min-width:600px;">
                            <thead>
                                <tr>
                                    <th>Nama Jabatan *</th>
                                    <th>Departemen *</th>
                                    <th>Level *</th>
                                    <th>Atasan Langsung</th>
                                    <th style="width:50px;">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                    <button type="button" class="btn btn-outline" id="btn-add-org-row" style="margin-top:12px; margin-bottom:20px;">+ Tambah Jabatan</button>
                    
                    <div id="ws-org-chart-preview" class="org-chart-preview-container">
                        <h4 style="font-size: 14px; font-weight: 700; color: var(--brand-royal); margin-bottom: 15px;">Bagan Struktur Organisasi</h4>
                        <div class="org-chart-tree">
                            <!-- Populated by drawOrgChart() -->
                        </div>
                    </div>
                `;
                break;

            case 8: // Key Activities
                formBody.innerHTML = `
                    <div style="overflow-x:auto;">
                        <table class="table-form" id="ws-ka-table" style="min-width:700px;">
                            <thead>
                                <tr>
                                    <th>Jabatan *</th>
                                    <th>Key Activity 1 *</th>
                                    <th>Key Activity 2 *</th>
                                    <th>Key Activity 3 *</th>
                                    <th>Key Activity 4 *</th>
                                    <th style="width:50px;">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                    <button type="button" class="btn btn-outline" id="btn-add-ka-row" style="margin-top:12px;">+ Tambah Baris</button>
                `;
                break;

            case 9: // Job Description (Two-Level flow)
                if (!currentEditingJobRole) {
                    // Level 1: Position List with counts
                    formBody.innerHTML = `
                        <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:15px;">Daftar jabatan fungsional. Klik <strong>"Kelola"</strong> pada jabatan terkait untuk mendefinisikan rincian tugas (Job Description) masing-masing.</p>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-job-roles-list-table" style="min-width:600px;">
                                <thead>
                                    <tr>
                                        <th>Nama Jabatan</th>
                                        <th>Departemen</th>
                                        <th>Level</th>
                                        <th style="width:150px; text-align:center;">Jumlah Job Desc</th>
                                        <th style="width:120px; text-align:center;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated dynamically -->
                                </tbody>
                            </table>
                        </div>
                    `;
                } else {
                    // Level 2: Manage Job Descriptions for selected role
                    const levelLabelMap = {
                        director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
                        supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
                    };
                    const roleData = (stepsData[7].roles || []).find(r => r.name === currentEditingJobRole) || { level_key: "", division_key: "" };
                    const lvlLabel = levelLabelMap[roleData.level_key] || roleData.level_key || "Staff";

                    formBody.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; background:var(--muted-bg); padding:10px 15px; border-radius:6px; border:1px solid var(--border-color);">
                            <div>
                                <button type="button" class="btn btn-outline" id="btn-back-to-roles-list" style="font-size:11px; padding:6px 12px;">
                                    ← Kembali ke Daftar Jabatan
                                </button>
                            </div>
                            <div style="text-align:right;">
                                <strong style="color:var(--brand-royal); font-size:14px;">${escapeHtml(currentEditingJobRole)}</strong>
                                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">${escapeHtml(lvlLabel)} | Departemen: ${escapeHtml(roleData.division_key.toUpperCase())}</div>
                            </div>
                        </div>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-job-tasks-table" style="min-width:950px;">
                                <thead>
                                    <tr>
                                        <th>Aktivitas Utama (Key Activity) *</th>
                                        <th>Rincian Uraian Tugas *</th>
                                        <th>Frekuensi *</th>
                                        <th>Pelaporan Hasil Kerja *</th>
                                        <th style="width:50px;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated dynamically -->
                                </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-outline" id="btn-add-job-task-row" style="margin-top:12px;">+ Tambah Uraian Tugas</button>
                    `;
                }
                break;

            case 10: // Report
                formBody.innerHTML = `
                    <div style="overflow-x:auto;">
                        <table class="table-form" id="ws-report-table" style="min-width:650px;">
                            <thead>
                                <tr>
                                    <th>Jabatan</th>
                                    <th>Uraian Tugas</th>
                                    <th>Format Template Laporan *</th>
                                    <th>Frekuensi</th>
                                    <th>Upload Template File *</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                `;
                break;

            case 11: // KPI
                if (!currentEditingKpiRole) {
                    formBody.innerHTML = `
                        <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:15px;">Daftar Jabatan. Klik <strong>"Kelola KPI"</strong> pada jabatan terkait untuk merumuskan Key Performance Indicators (KPI) masing-masing.</p>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-kpi-roles-list-table" style="min-width:600px;">
                                <thead>
                                    <tr>
                                        <th>Nama Jabatan</th>
                                        <th>Departemen</th>
                                        <th>Level</th>
                                        <th style="width:150px; text-align:center;">Jumlah KPI</th>
                                        <th style="width:150px; text-align:center;">Total Bobot (%)</th>
                                        <th style="width:120px; text-align:center;">Total Score</th>
                                        <th style="width:120px; text-align:center;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated dynamically -->
                                </tbody>
                            </table>
                        </div>
                    `;
                } else {
                    const levelLabelMap = {
                        director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
                        supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
                    };
                    const roleData = (stepsData[7].roles || []).find(r => r.name === currentEditingKpiRole) || { level_key: "", division_key: "" };
                    const lvlLabel = levelLabelMap[roleData.level_key] || roleData.level_key || "Staff";

                    formBody.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; background:var(--muted-bg); padding:10px 15px; border-radius:6px; border:1px solid var(--border-color);">
                            <div>
                                <button type="button" class="btn btn-outline" id="btn-back-to-kpi-roles-list" style="font-size:11px; padding:6px 12px;">
                                    ← Kembali ke Daftar Jabatan
                                </button>
                            </div>
                            <div style="text-align:right;">
                                <strong style="color:var(--brand-royal); font-size:14px;">${escapeHtml(currentEditingKpiRole)}</strong>
                                <div style="font-size:11px; color:var(--text-muted); font-weight:600;">${escapeHtml(lvlLabel)} | Departemen: ${escapeHtml(roleData.division_key.toUpperCase())}</div>
                            </div>
                        </div>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-kpi-detail-table" style="min-width:1350px;">
                                <thead>
                                    <tr>
                                        <th style="width:40px;">No</th>
                                        <th style="width:240px;">Report/Tugas *</th>
                                        <th style="width:80px;">Bobot % *</th>
                                        <th style="width:100px;">Satuan *</th>
                                        <th style="width:120px;">Angka Target *</th>
                                        <th style="width:200px;">Definisi Target KPI *</th>
                                        <th style="width:180px;">Arah Target *</th>
                                        <th style="width:120px;">Target</th>
                                        <th style="width:100px;">Realisasi</th>
                                        <th style="width:80px; text-align:center;">Pencapaian %</th>
                                        <th style="width:80px; text-align:center;">Score</th>
                                        <th style="width:50px;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Populated dynamically -->
                                </tbody>
                            </table>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
                            <button type="button" class="btn btn-outline" id="btn-add-kpi-detail-row">+ Tambah KPI</button>
                            <div style="display:flex; gap:20px; font-weight:700; font-size:13px; color:var(--brand-royal);">
                                <span id="kpi-total-bobot-indicator">Total Bobot: 0%</span>
                                <span id="kpi-total-score-indicator">Total Score: 0</span>
                            </div>
                        </div>
                    `;
                }
                break;

            case 12: // Reward & Punishment
                formBody.innerHTML = `
                    <!-- Inner Tab Navigation -->
                    <div style="display:flex; gap:10px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
                        <button type="button" class="btn btn-primary" id="btn-inner-reward">🏆 Skema Bonus/Reward</button>
                        <button type="button" class="btn btn-outline" id="btn-inner-punishment">⚠️ Kedisiplinan & SP/Punishment</button>
                    </div>

                    <!-- Reward Content -->
                    <div id="inner-reward-section">
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-reward-table" style="min-width:850px;">
                                <thead>
                                    <tr>
                                        <th>Nama Bonus/Reward *</th>
                                        <th>Kategori *</th>
                                        <th>Jabatan (Jika Kategori Jabatan)</th>
                                        <th>Syarat Pencapaian *</th>
                                        <th>Nominal/Jumlah Reward *</th>
                                        <th>Periode *</th>
                                        <th style="width:50px;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Dynamic reward rows -->
                                </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-outline" id="btn-add-reward-row" style="margin-top:12px;">+ Tambah Reward</button>
                    </div>

                    <!-- Punishment Content -->
                    <div id="inner-punishment-section" style="display:none;">
                        <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:15px;">Daftar sanksi administratif dan denda kas berdasarkan tingkat keparahan pelanggaran SP1, SP2, SP3.</p>
                        <div style="overflow-x:auto;">
                            <table class="table-form" id="ws-punishment-table" style="min-width:850px;">
                                <thead>
                                    <tr>
                                        <th>Jenis Peringatan</th>
                                        <th>Definisi Peringatan</th>
                                        <th>Masa Berlakunya Sanksi</th>
                                        <th>Bentuk/Tindakan Pelanggaran</th>
                                        <th>Sanksi / Denda</th>
                                        <th style="width:80px; text-align:center;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Dynamic SP rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Punishment Edit Modal -->
                    <div class="modal-backdrop" id="punishment-modal" style="display:none;">
                        <div class="modal-card" style="max-width:700px;">
                            <div class="modal-header">
                                <h3 class="modal-title" id="punishment-modal-title">Kelola Sanksi SP</h3>
                                <button type="button" class="modal-close-btn" id="btn-close-punishment-modal">&times;</button>
                            </div>
                            <div class="modal-body" style="max-height:60vh;">
                                <table class="table-form" id="punishment-modal-table">
                                    <thead>
                                        <tr>
                                            <th>Tindakan Pelanggaran *</th>
                                            <th>Sanksi / Denda *</th>
                                            <th style="width:50px;">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- Sanction rows -->
                                    </tbody>
                                </table>
                                <button type="button" class="btn btn-outline" id="btn-add-sanction-row" style="margin-top:10px;">+ Tambah Pasal</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline" id="btn-cancel-punishment-modal">Batal</button>
                                <button type="button" class="btn btn-primary" id="btn-save-punishment-modal">Simpan</button>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 13: // SOP
                formBody.innerHTML = `
                    <div style="overflow-x:auto;">
                        <table class="table-form" id="ws-sop-table" style="min-width:650px;">
                            <thead>
                                <tr>
                                    <th>Jabatan</th>
                                    <th>Uraian Tugas</th>
                                    <th>Nama SOP *</th>
                                    <th>Konfigurasi 4M *</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>

                    <!-- SOP 4M Edit Modal (Mock) -->
                    <div class="modal-backdrop" id="sop-4m-modal">
                        <div class="modal-card" style="max-width:700px;">
                            <div class="modal-header">
                                <h3 class="modal-title" id="sop-modal-title">Edit SOP 4M</h3>
                                <button type="button" class="modal-close-btn" id="btn-close-sop-modal">&times;</button>
                            </div>
                            <div class="modal-body" style="max-height:60vh;">
                                <div style="margin-bottom:14px;"><strong id="sop-modal-desc-title">Job Desc: ...</strong></div>
                                <table class="table-form" id="sop-modal-table">
                                    <thead>
                                        <tr>
                                            <th>Metode (What)</th>
                                            <th>Manusia (Who)</th>
                                            <th>Mesin/Alat</th>
                                            <th>Material/Bahan</th>
                                            <th style="width:50px;">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- SOP Rows -->
                                    </tbody>
                                </table>
                                <button type="button" class="btn btn-outline" id="btn-add-sop-step-row" style="margin-top:10px;">+ Tambah Baris</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline" id="btn-cancel-sop-modal">Batal</button>
                                <button type="button" class="btn btn-primary" id="btn-save-sop-modal">Simpan SOP 4M</button>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 14: // Train The Trainer
                formBody.innerHTML = `
                    <div style="overflow-x:auto;">
                        <table class="table-form" id="ws-train-table" style="min-width:950px;">
                            <thead>
                                <tr>
                                    <th style="width:40px; text-align:center;">No</th>
                                    <th style="width:130px;">Jabatan</th>
                                    <th style="width:180px;">Culture</th>
                                    <th>Skills</th>
                                    <th style="width:230px;">Knowledge Organization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                `;
                break;
        }

        card.appendChild(formBody);
        container.appendChild(card);

        // Call binding helper for active step
        bindStepFormLogic(stepId);
        if (stepId === 5) renderCultures(); // Re-trigger initial render
        initAutoExpand();
    }

    // 9. BINDING LOGIC PER STEP FORM
    function bindStepFormLogic(stepId) {
        switch (stepId) {
            case 2: // Positioning real-time generation
                const cInput = document.getElementById("ws-company");
                const catInput = document.getElementById("ws-category");
                const dnaInput = document.getElementById("ws-dna");
                const cvInput = document.getElementById("ws-core-value");
                const avInput = document.getElementById("ws-add-value");
                const posInput = document.getElementById("ws-positioning");

                function generatePositioning() {
                    if (posInput) {
                        const c = cInput.value || "[Perusahaan]";
                        const cat = catInput.value || "[Kategori]";
                        const d = dnaInput.value || "[DNA/Produk]";
                        const cv = cvInput.value || "[Core Value]";
                        const av = avInput.value || "[Add Value]";
                        posInput.value = `${c} adalah ${cat} yang menjual ${d} yang ${cv} dan ${av}`;
                    }
                }
                [cInput, catInput, dnaInput, cvInput, avInput].forEach(el => {
                    el.addEventListener("input", generatePositioning);
                });
                generatePositioning();
                break;

            case 3: // Vision real-time generation
                const vCat = document.getElementById("ws-category-vis");
                const vDna = document.getElementById("ws-dna-vis");
                const vArea = document.getElementById("ws-area");
                const vTarget = document.getElementById("ws-target");
                const vVision = document.getElementById("ws-vision");

                function generateVision() {
                    if (vVision) {
                        const cat = vCat.value || "[Category]";
                        const dna = vDna.value || "[DNA]";
                        const area = vArea.value || "[Wilayah]";
                        const t = vTarget.value || "[Tahun]";
                        vVision.value = `Menjadi ${cat} ${dna} terpercaya di ${area} pada tahun ${t}`;
                    }
                }
                [vCat, vDna, vArea, vTarget].forEach(el => {
                    el.addEventListener("input", generateVision);
                });
                generateVision();
                break;

            case 5: // Culture array logic
                const cultureCont = document.getElementById("ws-cultures-container");
                const addCultureBtn = document.getElementById("btn-ws-add-culture");

                const list = stepsData[5].cultures || [];

                window.renderCultures = function() {
                    cultureCont.innerHTML = "";
                    list.forEach((item, index) => {
                        const row = document.createElement("div");
                        row.style.display = "flex";
                        row.style.gap = "10px";
                        row.style.alignItems = "center";
                        row.innerHTML = `
                            <span style="font-family:'Outfit'; font-weight:700; font-size:12px; color:var(--brand-royal); width:20px;">0${index + 1}</span>
                            <textarea class="form-control cult-name auto-expand" style="width:30%; font-weight:600;" placeholder="Budaya" rows="1">${item.budaya}</textarea>
                            <textarea class="form-control cult-desc auto-expand" placeholder="Deskripsi Budaya Kerja" rows="1">${item.deskripsi}</textarea>
                            ${list.length > 3 ? `<button type="button" class="btn-delete-row cult-remove">&times;</button>` : `<div style="width:28px;"></div>`}
                        `;
                        cultureCont.appendChild(row);

                        row.querySelectorAll("textarea").forEach(inp => {
                            inp.addEventListener("input", () => {
                                item.budaya = row.querySelector(".cult-name").value;
                                item.deskripsi = row.querySelector(".cult-desc").value;
                            });
                        });

                        const delBtn = row.querySelector(".cult-remove");
                        if (delBtn) {
                            delBtn.addEventListener("click", () => {
                                list.splice(index, 1);
                                renderCultures();
                            });
                        }
                    });

                    if (addCultureBtn) {
                        if (list.length >= 4) addCultureBtn.style.display = "none";
                        else addCultureBtn.style.display = "inline-flex";
                    }
                    initAutoExpand();
                }

                if (addCultureBtn) {
                    addCultureBtn.addEventListener("click", () => {
                        list.push({ budaya: "", deskripsi: "" });
                        renderCultures();
                    });
                }
                renderCultures();
                break;

            case 6: // Business Goal calculations
                const bgType = document.getElementById("ws-bg-type");
                const bgTargetType = document.getElementById("ws-bg-target-type");
                const runningSec = document.getElementById("ws-bg-running-section");
                const startupSec = document.getElementById("ws-bg-startup-section");
                const growthInput = document.getElementById("ws-bg-growth-pct");

                function toggleBGSections() {
                    if (bgType.value === "berjalan") {
                        runningSec.style.display = "block";
                        startupSec.style.display = "none";
                    } else {
                        runningSec.style.display = "none";
                        startupSec.style.display = "block";
                    }
                }

                bgType.addEventListener("change", () => {
                    stepsData[6].business_type = bgType.value;
                    toggleBGSections();
                });
                toggleBGSections();

                // Populate running tables (Months Jan-Dec)
                const runTableBody = document.querySelector("#ws-bg-running-table tbody");
                const monthsName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

                function populateRunningTable() {
                    runTableBody.innerHTML = "";
                    let totalY1 = 0;
                    let totalY2 = 0;

                    monthsName.forEach((m, idx) => {
                        const mData = stepsData[6].monthly_data[idx] || { revenue_year1: 0, revenue_year2: 0 };
                        totalY1 += parseInt(mData.revenue_year1) || 0;
                        totalY2 += parseInt(mData.revenue_year2) || 0;

                        const row = document.createElement("tr");
                        const y1Val = mData.revenue_year1 || 0;
                        const y2Val = mData.revenue_year2 || 0;
                        const growth = y1Val > 0 ? Math.round(((y2Val - y1Val) / y1Val) * 100) : 0;

                        row.innerHTML = `
                            <td><strong>${m}</strong></td>
                            <td><input type="number" class="form-control y1-val text-sm" value="${y1Val}"></td>
                            <td><input type="number" class="form-control y2-val text-sm" value="${y2Val}"></td>
                            <td><span class="growth-cell font-bold ${growth >= 0 ? 'text-orange' : 'text-red'}">${growth}%</span></td>
                        `;
                        runTableBody.appendChild(row);

                        row.querySelectorAll("input").forEach(input => {
                            input.addEventListener("input", () => {
                                mData.revenue_year1 = parseInt(row.querySelector(".y1-val").value) || 0;
                                mData.revenue_year2 = parseInt(row.querySelector(".y2-val").value) || 0;
                                recalculateRunningTableTotals();
                            });
                        });
                    });

                    // Add total row
                    const totalRow = document.createElement("tr");
                    totalRow.style.backgroundColor = "#f8fafc";
                    totalRow.style.fontWeight = "700";
                    totalRow.innerHTML = `
                        <td>TOTAL</td>
                        <td id="run-total-y1">Rp 0</td>
                        <td id="run-total-y2">Rp 0</td>
                        <td id="run-avg-growth">0%</td>
                    `;
                    runTableBody.appendChild(totalRow);
                    recalculateRunningTableTotals();
                }

                function recalculateRunningTableTotals() {
                    let totalY1 = 0;
                    let totalY2 = 0;
                    const rows = runTableBody.querySelectorAll("tr");
                    const isVolume = bgTargetType.value === "volume";

                    monthsName.forEach((m, idx) => {
                        const mData = stepsData[6].monthly_data[idx];
                        if (mData) {
                            totalY1 += mData.revenue_year1 || 0;
                            totalY2 += mData.revenue_year2 || 0;
                            const growth = mData.revenue_year1 > 0 ? Math.round(((mData.revenue_year2 - mData.revenue_year1) / mData.revenue_year1) * 100) : 0;
                            const span = rows[idx].querySelector(".growth-cell");
                            if (span) {
                                span.textContent = `${growth}%`;
                                span.className = `growth-cell font-bold ${growth >= 0 ? 'text-orange' : 'text-red'}`;
                            }
                        }
                    });

                    const formatVal = (val) => {
                        return isVolume ? `${val.toLocaleString("id-ID")} unit` : `Rp ${val.toLocaleString("id-ID")}`;
                    };

                    document.getElementById("run-total-y1").textContent = formatVal(totalY1);
                    document.getElementById("run-total-y2").textContent = formatVal(totalY2);
                    const avgGrowth = totalY1 > 0 ? Math.round(((totalY2 - totalY1) / totalY1) * 100) : 0;
                    document.getElementById("run-avg-growth").textContent = `${avgGrowth}%`;

                    // Set default Target Growth if not manually set
                    if (growthInput && (!parseFloat(growthInput.value) || parseFloat(growthInput.value) === 0)) {
                        growthInput.value = avgGrowth;
                        stepsData[6].projection_kinerja_pct = avgGrowth;
                    }

                    recalculateRunningProjections();
                }

                function recalculateRunningProjections() {
                    const runProjTable = document.getElementById("ws-bg-running-projection-table");
                    if (!runProjTable) return;

                    const thead = runProjTable.querySelector("thead tr");
                    const tbody = runProjTable.querySelector("tbody");
                    if (!thead || !tbody) return;

                    const years = stepsData[6].projection_years || [2026, 2027, 2028, 2029, 2030];
                    const growthPct = parseFloat(growthInput.value) || 0;
                    const isVolume = bgTargetType.value === "volume";

                    // Render headers
                    thead.innerHTML = `<th>Bulan</th>` + years.map(y => `<th class="text-center">Target ${isVolume ? 'Sales' : 'Revenue'} ${y} (${growthPct}%)</th>`).join("");

                    // Calculate projection for each month and year
                    tbody.innerHTML = "";

                    const monthlyProjections = Array.from({ length: 12 }, () => []);

                    monthsName.forEach((m, mIdx) => {
                        const mData = stepsData[6].monthly_data[mIdx] || { revenue_year1: 0, revenue_year2: 0 };
                        let base = mData.revenue_year2 || 0;

                        const row = document.createElement("tr");
                        let rowHTML = `<td><strong>${m}</strong></td>`;

                        years.forEach((y, yIdx) => {
                            base = Math.round(base * (1 + growthPct / 100));
                            monthlyProjections[mIdx].push(base);
                            const valFormatted = isVolume ? `${base.toLocaleString("id-ID")} unit` : base.toLocaleString("id-ID");
                            rowHTML += `<td class="text-center">${valFormatted}</td>`;
                        });
                        row.innerHTML = rowHTML;
                        tbody.appendChild(row);
                    });

                    // Add Total Row
                    const totalRow = document.createElement("tr");
                    totalRow.style.backgroundColor = "#f8fafc";
                    totalRow.style.fontWeight = "700";

                    let totalRowHTML = `<td>TOTAL</td>`;
                    years.forEach((y, yIdx) => {
                        let totalYearRevenue = 0;
                        monthsName.forEach((_, mIdx) => {
                            totalYearRevenue += monthlyProjections[mIdx][yIdx] || 0;
                        });
                        const totalFormatted = isVolume ? `${totalYearRevenue.toLocaleString("id-ID")} unit` : `Rp ${totalYearRevenue.toLocaleString("id-ID")}`;
                        totalRowHTML += `<td class="text-center">${totalFormatted}</td>`;
                    });
                    totalRow.innerHTML = totalRowHTML;
                    tbody.appendChild(totalRow);
                }

                growthInput.addEventListener("input", () => {
                    stepsData[6].projection_kinerja_pct = parseFloat(growthInput.value) || 0;
                    recalculateRunningProjections();
                });

                bgTargetType.addEventListener("change", () => {
                    stepsData[6].target_type = bgTargetType.value;
                    recalculateRunningTableTotals();
                });

                // Populate startup table
                const startupTableBody = document.querySelector("#ws-bg-startup-table tbody");

                function populateStartupTable() {
                    startupTableBody.innerHTML = "";

                    if (!stepsData[6].projection_monthly_data || stepsData[6].projection_monthly_data.length === 0) {
                        stepsData[6].projection_monthly_data = Array.from({ length: 12 }, (_, i) => ({
                            month: i + 1,
                            values: [0, 0, 0, 0, 0]
                        }));
                    }

                    monthsName.forEach((m, idx) => {
                        const row = document.createElement("tr");
                        const mData = stepsData[6].projection_monthly_data[idx] || { month: idx + 1, values: [0, 0, 0, 0, 0] };

                        row.innerHTML = `
                            <td><strong>${m}</strong></td>
                            <td><input type="number" class="form-control start-y1 text-sm" value="${mData.values[0] || 0}"></td>
                            <td><input type="number" class="form-control start-y2 text-sm" value="${mData.values[1] || 0}"></td>
                            <td><input type="number" class="form-control start-y3 text-sm" value="${mData.values[2] || 0}"></td>
                            <td><input type="number" class="form-control start-y4 text-sm" value="${mData.values[3] || 0}"></td>
                            <td><input type="number" class="form-control start-y5 text-sm" value="${mData.values[4] || 0}"></td>
                        `;
                        startupTableBody.appendChild(row);

                        row.querySelectorAll("input").forEach((input, yIdx) => {
                            input.addEventListener("input", () => {
                                mData.values[yIdx] = parseInt(input.value) || 0;
                            });
                        });
                    });
                }

                populateRunningTable();
                populateStartupTable();
                break;

            case 7: // Organization Structure table
                const orgTableBody = document.querySelector("#ws-org-table tbody");
                const addOrgBtn = document.getElementById("btn-add-org-row");
                const orgList = stepsData[7].roles || [];

                function drawOrgChart() {
                    const previewContainer = document.querySelector("#ws-org-chart-preview .org-chart-tree");
                    if (!previewContainer) return;
                    previewContainer.innerHTML = "";

                    const activeRoles = orgList.filter(r => r.name && r.name.trim());
                    if (activeRoles.length === 0) {
                        previewContainer.innerHTML = `<p style="color:var(--text-muted); font-size:12px; padding:10px;">Belum ada jabatan untuk digambar.</p>`;
                        return;
                    }

                    // Map roles by name
                    const byName = new Map();
                    activeRoles.forEach(r => {
                        byName.set(r.name.trim(), { ...r, children: [] });
                    });

                    const roots = [];
                    byName.forEach(node => {
                        const parentName = node.parent_key ? node.parent_key.trim() : "";
                        if (parentName && byName.has(parentName)) {
                            byName.get(parentName).children.push(node);
                        } else {
                            roots.push(node);
                        }
                    });

                    if (roots.length === 0 && activeRoles.length > 0) {
                        // fallback to avoid freeze
                        activeRoles.forEach(r => {
                            roots.push({ ...r, children: [] });
                        });
                    }

                    function buildHtmlTree(node) {
                        const li = document.createElement("li");

                        const levelLabelMap = {
                            director: 'Direktur',
                            general_manager: 'General Manager',
                            manager: 'Manager',
                            supervisor: 'Supervisor',
                            coordinator: 'Koordinator',
                            staff: 'Staff'
                        };
                        const levelText = levelLabelMap[node.level_key] || node.level_key || 'Staff';
                        const divisionText = node.division_key ? node.division_key.toUpperCase() : 'GENERAL';

                        li.innerHTML = `
                            <div class="org-chart-node-card">
                                <div class="node-name">${escapeHtml(node.name)}</div>
                                <div class="node-lvl">${escapeHtml(levelText)}</div>
                                <div class="node-div">${escapeHtml(divisionText)}</div>
                            </div>
                        `;

                        if (node.children && node.children.length > 0) {
                            const ul = document.createElement("ul");
                            node.children.forEach(child => {
                                ul.appendChild(buildHtmlTree(child));
                            });
                            li.appendChild(ul);
                        }
                        return li;
                    }

                    const mainUl = document.createElement("ul");
                    roots.forEach(root => {
                        mainUl.appendChild(buildHtmlTree(root));
                    });
                    previewContainer.appendChild(mainUl);
                }

                function renderOrgTable() {
                    orgTableBody.innerHTML = "";
                    orgList.forEach((item, index) => {
                        const row = document.createElement("tr");

                        // Options for Atasan
                        let atasanOptions = `<option value="">-- Tanpa Atasan (Direktur) --</option>`;
                        orgList.forEach((opt, oIdx) => {
                            if (oIdx !== index && opt.name) {
                                atasanOptions += `<option value="${opt.name}" ${item.parent_key === opt.name ? 'selected' : ''}>${opt.name}</option>`;
                            }
                        });

                        row.innerHTML = `
                            <td><textarea class="form-control org-name auto-expand" placeholder="Nama Jabatan" rows="1">${item.name || ''}</textarea></td>
                            <td>
                                <select class="form-control org-div">
                                    <option value="finance" ${item.division_key === 'finance' ? 'selected' : ''}>Finance</option>
                                    <option value="marketing" ${item.division_key === 'marketing' ? 'selected' : ''}>Marketing</option>
                                    <option value="operation" ${item.division_key === 'operation' ? 'selected' : ''}>Operation</option>
                                    <option value="hr" ${item.division_key === 'hr' ? 'selected' : ''}>HR</option>
                                </select>
                            </td>
                            <td>
                                <select class="form-control org-lvl">
                                    <option value="director" ${item.level_key === 'director' ? 'selected' : ''}>Direktur</option>
                                    <option value="general_manager" ${item.level_key === 'general_manager' ? 'selected' : ''}>General Manager</option>
                                    <option value="manager" ${item.level_key === 'manager' ? 'selected' : ''}>Manager</option>
                                    <option value="supervisor" ${item.level_key === 'supervisor' ? 'selected' : ''}>Supervisor</option>
                                    <option value="coordinator" ${item.level_key === 'coordinator' ? 'selected' : ''}>Koordinator</option>
                                    <option value="staff" ${item.level_key === 'staff' ? 'selected' : ''}>Staff</option>
                                </select>
                            </td>
                            <td><select class="form-control org-parent">${atasanOptions}</select></td>
                            <td><button type="button" class="btn-delete-row org-remove">&times;</button></td>
                        `;
                        orgTableBody.appendChild(row);

                        const nameInp = row.querySelector(".org-name");
                        const divSelect = row.querySelector(".org-div");
                        const lvlSelect = row.querySelector(".org-lvl");
                        const parentSelect = row.querySelector(".org-parent");

                        [nameInp, divSelect, lvlSelect, parentSelect].forEach(inp => {
                            inp.addEventListener("change", () => {
                                syncRowData();
                                drawOrgChart();
                            });
                            inp.addEventListener("input", () => {
                                syncRowData();
                                drawOrgChart();
                            });
                        });

                        let previousName = item.name || '';
                        function syncRowData() {
                            const newName = nameInp.value;
                            let nameChanged = false;
                            
                            if (previousName !== newName) {
                                nameChanged = true;
                                if (previousName && previousName.trim() !== "") {
                                    orgList.forEach(child => {
                                        if (child.parent_key === previousName) {
                                            child.parent_key = newName;
                                        }
                                    });
                                }
                                previousName = newName;
                            }
                            
                            item.name = newName;
                            item.division_key = divSelect.value;
                            item.level_key = lvlSelect.value;
                            item.parent_key = parentSelect.value;
                            
                            if (nameChanged) {
                                const allRows = orgTableBody.querySelectorAll("tr");
                                allRows.forEach((r, idx) => {
                                    const pSelect = r.querySelector(".org-parent");
                                    if (pSelect && orgList[idx]) {
                                        const currentParentKey = orgList[idx].parent_key;
                                        let optionsHtml = '<option value="">-- Tanpa Atasan (Direktur) --</option>';
                                        orgList.forEach((opt, oIdx) => {
                                            if (oIdx !== idx && opt.name && opt.name.trim() !== "") {
                                                const isSelected = currentParentKey === opt.name ? 'selected' : '';
                                                optionsHtml += `<option value="${opt.name.replace(/"/g, '&quot;')}" ${isSelected}>${escapeHtml(opt.name)}</option>`;
                                            }
                                        });
                                        pSelect.innerHTML = optionsHtml;
                                    }
                                });
                            }
                        }

                        row.querySelector(".org-remove").addEventListener("click", () => {
                            orgList.splice(index, 1);
                            renderOrgTable();
                            drawOrgChart();
                        });
                    });
                    drawOrgChart();
                    initAutoExpand();
                }

                if (addOrgBtn) {
                    addOrgBtn.onclick = () => {
                        orgList.push({ name: "", division_key: "operation", level_key: "staff", description: "", parent_key: "" });
                        renderOrgTable();
                        drawOrgChart();
                    };
                }
                renderOrgTable();
                break;

            case 8: // Key Activities table
                const kaTableBody = document.querySelector("#ws-ka-table tbody");
                const addKaBtn = document.getElementById("btn-add-ka-row");
                const kaList = stepsData[8].activities || [];
                const rolesList = stepsData[7].roles || [];

                function renderKaTable() {
                    kaTableBody.innerHTML = "";
                    kaList.forEach((item, index) => {
                        const row = document.createElement("tr");

                        let roleOpts = `<option value="">-- Pilih Jabatan --</option>`;
                        rolesList.forEach(r => {
                            if (r.name) {
                                roleOpts += `<option value="${r.name}" ${item.role_name === r.name ? 'selected' : ''}>${r.name}</option>`;
                            }
                        });

                        row.innerHTML = `
                            <td><select class="form-control ka-role">${roleOpts}</select></td>
                            <td><textarea class="form-control ka-1 auto-expand" placeholder="Aktivitas 1" rows="1">${item.ka1}</textarea></td>
                            <td><textarea class="form-control ka-2 auto-expand" placeholder="Aktivitas 2" rows="1">${item.ka2}</textarea></td>
                            <td><textarea class="form-control ka-3 auto-expand" placeholder="Aktivitas 3" rows="1">${item.ka3}</textarea></td>
                            <td><textarea class="form-control ka-4 auto-expand" placeholder="Aktivitas 4" rows="1">${item.ka4}</textarea></td>
                            <td><button type="button" class="btn-delete-row ka-remove">&times;</button></td>
                        `;
                        kaTableBody.appendChild(row);

                        row.querySelectorAll("input, select").forEach(inp => {
                            inp.addEventListener("input", () => {
                                item.role_name = row.querySelector(".ka-role").value;
                                item.ka1 = row.querySelector(".ka-1").value;
                                item.ka2 = row.querySelector(".ka-2").value;
                                item.ka3 = row.querySelector(".ka-3").value;
                                item.ka4 = row.querySelector(".ka-4").value;
                            });
                        });

                        row.querySelector(".ka-remove").addEventListener("click", () => {
                            kaList.splice(index, 1);
                            renderKaTable();
                        });
                    });
                    initAutoExpand();
                }

                if (addKaBtn) {
                    addKaBtn.addEventListener("click", () => {
                        kaList.push({ role_name: "", ka1: "", ka2: "", ka3: "", ka4: "" });
                        renderKaTable();
                    });
                }
                renderKaTable();
                break;

            case 9: // Job Description (Two-Level flow)
                if (!currentEditingJobRole) {
                    const rolesTableBody = document.querySelector("#ws-job-roles-list-table tbody");
                    if (!rolesTableBody) break;

                    rolesTableBody.innerHTML = "";
                    const roles = stepsData[7].roles || [];
                    const tasks = stepsData[9].tasks || [];

                    if (roles.length === 0) {
                        rolesTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:15px;">Belum ada jabatan. Silakan isi Langkah 7 terlebih dahulu!</td></tr>`;
                        break;
                    }

                    const levelLabelMap = {
                        director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
                        supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
                    };

                    roles.forEach((r, index) => {
                        if (!r.name) return;
                        const jobDescCount = tasks.filter(t => t.role_name === r.name).length;

                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><strong>${escapeHtml(r.name)}</strong></td>
                            <td><span class="badge-legal">${escapeHtml(r.division_key.toUpperCase())}</span></td>
                            <td>${escapeHtml(levelLabelMap[r.level_key] || r.level_key)}</td>
                            <td style="text-align:center;"><span class="badge-legal" style="background-color:var(--blue-progress-bg); color:var(--blue-progress); font-weight:700;">${jobDescCount} Uraian</span></td>
                            <td style="text-align:center;"><button type="button" class="btn btn-outline btn-kelola-job" style="font-size:10px; padding:4px 10px;">Kelola</button></td>
                        `;
                        rolesTableBody.appendChild(row);

                        row.querySelector(".btn-kelola-job").addEventListener("click", () => {
                            currentEditingJobRole = r.name;
                            renderStepForm(9);
                        });
                    });
                } else {
                    // Level 2: Manage Job Descriptions for selected role
                    const tasksTableBody = document.querySelector("#ws-job-tasks-table tbody");
                    const backBtn = document.getElementById("btn-back-to-roles-list");
                    const addTaskBtn = document.getElementById("btn-add-job-task-row");

                    if (!tasksTableBody) break;

                    // Filter tasks for the current role
                    if (!stepsData[9].tasks) stepsData[9].tasks = [];
                    const tasksList = stepsData[9].tasks;

                    // Back button handler
                    if (backBtn) {
                        backBtn.onclick = () => {
                            currentEditingJobRole = null;
                            renderStepForm(9);
                        };
                    }

                    // Find key activities of this role from Step 8
                    const kaSource = stepsData[8].activities || [];
                    const roleKa = kaSource.find(ka => ka.role_name === currentEditingJobRole) || { ka1: "", ka2: "", ka3: "", ka4: "" };

                    function renderTasksTable() {
                        tasksTableBody.innerHTML = "";

                        // Filter roles tasks
                        const roleTasksIndices = [];
                        tasksList.forEach((t, idx) => {
                            if (t.role_name === currentEditingJobRole) {
                                roleTasksIndices.push(idx);
                            }
                        });

                        if (roleTasksIndices.length === 0) {
                            tasksTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:15px;">Belum ada uraian tugas untuk jabatan ini. Klik "+ Tambah Uraian Tugas" di bawah.</td></tr>`;
                            return;
                        }

                        roleTasksIndices.forEach((taskIdx) => {
                            const item = tasksList[taskIdx];
                            const row = document.createElement("tr");

                            // Cascading select options for activity
                            let actOpts = `<option value="">-- Pilih Aktivitas --</option>`;
                            if (roleKa.ka1) actOpts += `<option value="${roleKa.ka1}" ${item.key_activity === roleKa.ka1 ? 'selected' : ''}>${roleKa.ka1}</option>`;
                            if (roleKa.ka2) actOpts += `<option value="${roleKa.ka2}" ${item.key_activity === roleKa.ka2 ? 'selected' : ''}>${roleKa.ka2}</option>`;
                            if (roleKa.ka3) actOpts += `<option value="${roleKa.ka3}" ${item.key_activity === roleKa.ka3 ? 'selected' : ''}>${roleKa.ka3}</option>`;
                            if (roleKa.ka4) actOpts += `<option value="${roleKa.ka4}" ${item.key_activity === roleKa.ka4 ? 'selected' : ''}>${roleKa.ka4}</option>`;

                            row.innerHTML = `
                                <td><select class="form-control job-act">${actOpts}</select></td>
                                <td><textarea class="form-control job-desc auto-expand" placeholder="Uraian Tugas Rinci" rows="1">${item.description || ''}</textarea></td>
                                <td>
                                    <select class="form-control job-freq">
                                        <option value="Harian" ${item.frequency === 'Harian' ? 'selected' : ''}>Harian</option>
                                        <option value="Mingguan" ${item.frequency === 'Mingguan' ? 'selected' : ''}>Mingguan</option>
                                        <option value="Bulanan" ${item.frequency === 'Bulanan' ? 'selected' : ''}>Bulanan</option>
                                        <option value="Tahunan" ${item.frequency === 'Tahunan' ? 'selected' : ''}>Tahunan</option>
                                        <option value="Insidentil" ${item.frequency === 'Insidentil' ? 'selected' : ''}>Insidentil</option>
                                    </select>
                                </td>
                                <td><textarea class="form-control job-rep auto-expand" placeholder="Format Laporan Hasil Kerja" rows="1">${item.report || ''}</textarea></td>
                                <td><button type="button" class="btn-delete-row job-task-remove">&times;</button></td>
                            `;
                            tasksTableBody.appendChild(row);

                            const actSelect = row.querySelector(".job-act");
                            const descInput = row.querySelector(".job-desc");
                            const freqSelect = row.querySelector(".job-freq");
                            const repInput = row.querySelector(".job-rep");

                            [actSelect, descInput, freqSelect, repInput].forEach(inp => {
                                inp.addEventListener("input", () => {
                                    item.key_activity = actSelect.value;
                                    item.description = descInput.value;
                                    item.frequency = freqSelect.value;
                                    item.report = repInput.value;
                                });
                                inp.addEventListener("change", () => {
                                    item.key_activity = actSelect.value;
                                    item.description = descInput.value;
                                    item.frequency = freqSelect.value;
                                    item.report = repInput.value;
                                });
                            });

                            row.querySelector(".job-task-remove").addEventListener("click", () => {
                                tasksList.splice(taskIdx, 1);
                                renderTasksTable();
                            });
                        });
                        initAutoExpand();
                    }

                    if (addTaskBtn) {
                        addTaskBtn.onclick = () => {
                            tasksList.push({
                                role_name: currentEditingJobRole,
                                key_activity: "",
                                description: "",
                                frequency: "Harian",
                                report: ""
                            });
                            renderTasksTable();
                        };
                    }

                    renderTasksTable();
                }
                break;

            case 10: // Report table (drawn from job list tasks)
                const repTableBody = document.querySelector("#ws-report-table tbody");
                const jobTasksSource = stepsData[9].tasks || [];
                const reportTemplates = stepsData[10].reports || [];

                // Re-sync reports list
                if (reportTemplates.length === 0 && jobTasksSource.length > 0) {
                    jobTasksSource.forEach(task => {
                        reportTemplates.push({
                            role_name: task.role_name,
                            task_name: task.description,
                            report_template: task.report || "",
                            frequency: task.frequency || "Harian",
                            file_mockup: ""
                        });
                    });
                    stepsData[10].reports = reportTemplates;
                }

                function renderReportTable() {
                    repTableBody.innerHTML = "";
                    if (reportTemplates.length === 0) {
                        repTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Lengkapi Langkah 9 terlebih dahulu!</td></tr>`;
                        return;
                    }
                    reportTemplates.forEach((item, index) => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><strong>${item.role_name}</strong></td>
                            <td>${item.task_name}</td>
                            <td><textarea class="form-control rep-temp auto-expand" placeholder="Format Template Laporan" rows="1">${item.report_template}</textarea></td>
                            <td><span class="badge-legal">${item.frequency}</span></td>
                            <td>
                                <div style="display:flex; gap:6px; align-items:center;">
                                    <input type="file" style="display:none;" class="rep-file-picker">
                                    <button type="button" class="btn btn-outline btn-upload-rep" style="font-size:12px; padding:4px 10px;">Upload</button>
                                    <span class="file-name-label" style="font-size:12px; color:var(--text-muted); max-width:120px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.file_mockup || 'Belum ada file'}</span>
                                </div>
                            </td>
                        `;
                        repTableBody.appendChild(row);

                        const tempInput = row.querySelector(".rep-temp");
                        tempInput.addEventListener("input", () => {
                            item.report_template = tempInput.value;
                        });

                        // File picker logic
                        const filePicker = row.querySelector(".rep-file-picker");
                        const uploadBtn = row.querySelector(".btn-upload-rep");
                        const fileLabel = row.querySelector(".file-name-label");

                        uploadBtn.addEventListener("click", () => filePicker.click());
                        filePicker.addEventListener("change", (e) => {
                            if (e.target.files.length > 0) {
                                const fName = e.target.files[0].name;
                                item.file_mockup = fName;
                                fileLabel.textContent = fName;
                            }
                        });
                    });
                    initAutoExpand();
                }
                renderReportTable();
                break;

            case 11: {
                function formatThousandSeparator(value) {
                    if (value === null || value === undefined || value === "") return "";
                    const num = String(value).replace(/\D/g, "");
                    if (!num) return "";
                    return parseInt(num, 10).toLocaleString("id-ID");
                }

                function stripThousandSeparator(value) {
                    return String(value || '').replace(/\D/g, "");
                }

                const kList = stepsData[11].kpis || [];
                const jTasks = stepsData[9].tasks || [];
                const allRolesFromList = stepsData[7].roles || [];

                if (!currentEditingKpiRole) {
                    // Level 1: Role list view
                    const rolesTableBody = document.querySelector("#ws-kpi-roles-list-table tbody");
                    if (rolesTableBody) {
                        rolesTableBody.innerHTML = "";
                        if (allRolesFromList.length === 0) {
                            rolesTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding:15px;">Belum ada jabatan. Silakan isi Langkah 7 terlebih dahulu!</td></tr>`;
                        } else {
                            const levelLabelMap = {
                                director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
                                supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
                            };

                            allRolesFromList.forEach(r => {
                                if (!r.name) return;
                                const roleKpis = kList.filter(k => k.role_name === r.name);
                                const totalBobot = roleKpis.reduce((sum, k) => sum + (k.bobot || 0), 0);
                                const totalScore = roleKpis.reduce((sum, k) => {
                                    // calculate pencapaian first
                                    let pencapaian = 0;
                                    const targetVal = parseFloat(k.target_kpi) || 0;
                                    const realisasiVal = parseFloat(k.realisasi) || 0;
                                    if (k.satuan === 'tanggal') {
                                        if (k.target_kpi && k.realisasi) {
                                            const targetDate = new Date(k.target_kpi);
                                            const realDate = new Date(k.realisasi);
                                            if (!isNaN(targetDate) && !isNaN(realDate)) {
                                                if (realDate <= targetDate) {
                                                    pencapaian = 100;
                                                } else {
                                                    const diffTime = realDate - targetDate;
                                                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                    pencapaian = Math.max(0, 100 - (diffDays * 10));
                                                }
                                            }
                                        }
                                    } else {
                                        if (targetVal > 0) {
                                            if (k.arah === 'lebih besar lebih baik') {
                                                pencapaian = (realisasiVal / targetVal) * 100;
                                            } else {
                                                pencapaian = realisasiVal > 0 ? (targetVal / realisasiVal) * 100 : 0;
                                            }
                                        }
                                    }
                                    const score = (pencapaian * (k.bobot || 0)) / 100;
                                    return sum + score;
                                }, 0);

                                const row = document.createElement("tr");
                                row.innerHTML = `
                                    <td><strong>${escapeHtml(r.name)}</strong></td>
                                    <td><span class="badge-legal">${escapeHtml(r.division_key.toUpperCase())}</span></td>
                                    <td>${escapeHtml(levelLabelMap[r.level_key] || r.level_key)}</td>
                                    <td style="text-align:center;"><span class="badge-legal" style="background-color:var(--blue-progress-bg); color:var(--blue-progress);">${roleKpis.length} KPI</span></td>
                                    <td style="text-align:center; font-weight:700; color:${totalBobot > 100 ? '#ef4444' : 'inherit'};">${totalBobot}%</td>
                                    <td style="text-align:center; font-weight:700; color:var(--brand-royal);">${Math.round(totalScore)}</td>
                                    <td style="text-align:center;"><button type="button" class="btn btn-outline btn-kelola-kpi" style="font-size:10px; padding:4px 10px;">Kelola KPI</button></td>
                                `;
                                rolesTableBody.appendChild(row);

                                row.querySelector(".btn-kelola-kpi").onclick = () => {
                                    currentEditingKpiRole = r.name;
                                    renderStepForm(11);
                                };
                            });
                        }
                    }
                } else {
                    // Level 2: Detail table edit view for currentEditingKpiRole
                    const detailTableBody = document.querySelector("#ws-kpi-detail-table tbody");
                    const backBtn = document.getElementById("btn-back-to-kpi-roles-list");
                    const addKpiBtn = document.getElementById("btn-add-kpi-detail-row");
                    const bobotIndicator = document.getElementById("kpi-total-bobot-indicator");
                    const scoreIndicator = document.getElementById("kpi-total-score-indicator");

                    if (backBtn) {
                        backBtn.onclick = () => {
                            currentEditingKpiRole = null;
                            renderStepForm(11);
                        };
                    }

                    function renderKpiDetailTable() {
                        detailTableBody.innerHTML = "";
                        const roleKpis = kList.filter(k => k.role_name === currentEditingKpiRole);

                        if (roleKpis.length === 0) {
                            detailTableBody.innerHTML = `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:15px;">Belum ada KPI. Silakan klik "+ Tambah KPI" di bawah.</td></tr>`;
                            if (bobotIndicator) bobotIndicator.textContent = "Total Bobot: 0%";
                            if (scoreIndicator) scoreIndicator.textContent = "Total Score: 0";
                            initAutoExpand();
                            return;
                        }

                        // Filtered roles job descriptions
                        const roleTasks = jTasks.filter(t => t.role_name === currentEditingKpiRole);

                        let totalBobot = 0;
                        let totalScore = 0;

                        roleKpis.forEach((item, index) => {
                            let taskOpts = `<option value="">-- Pilih Uraian Tugas --</option>`;
                            roleTasks.forEach(t => {
                                taskOpts += `<option value="${escapeHtml(t.description)}" ${item.task_name === t.description ? 'selected' : ''}>${escapeHtml(t.description)}</option>`;
                            });

                            let targetInputHTML = "";
                            if (item.satuan === 'tanggal') {
                                targetInputHTML = `<input type="date" class="form-control kpi-tgt-val" value="${item.target_kpi || ''}">`;
                            } else if (item.satuan === 'rupiah') {
                                targetInputHTML = `<input type="text" class="form-control kpi-tgt-val" value="${formatThousandSeparator(item.target_kpi)}" placeholder="Target (Rp)">`;
                            } else {
                                targetInputHTML = `<input type="number" class="form-control kpi-tgt-val" value="${item.target_kpi || 0}" placeholder="Target">`;
                            }

                            let realisasiInputHTML = "";
                            if (item.satuan === 'tanggal') {
                                realisasiInputHTML = `<input type="date" class="form-control kpi-real-val" value="${item.realisasi || ''}">`;
                            } else if (item.satuan === 'rupiah') {
                                realisasiInputHTML = `<input type="text" class="form-control kpi-real-val" value="${formatThousandSeparator(item.realisasi)}" placeholder="Realisasi (Rp)">`;
                            } else {
                                realisasiInputHTML = `<input type="number" class="form-control kpi-real-val" value="${item.realisasi || 0}" placeholder="Realisasi">`;
                            }

                            // Calculate pencapaian and score
                            let pencapaian = 0;
                            const targetVal = parseFloat(item.target_kpi) || 0;
                            const realisasiVal = parseFloat(item.realisasi) || 0;
                            if (item.satuan === 'tanggal') {
                                if (item.target_kpi && item.realisasi) {
                                    const targetDate = new Date(item.target_kpi);
                                    const realDate = new Date(item.realisasi);
                                    if (!isNaN(targetDate) && !isNaN(realDate)) {
                                        if (realDate <= targetDate) {
                                            pencapaian = 100;
                                        } else {
                                            const diffTime = realDate - targetDate;
                                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                            pencapaian = Math.max(0, 100 - (diffDays * 10));
                                        }
                                    }
                                }
                            } else {
                                if (targetVal > 0) {
                                    if (item.arah === 'lebih besar lebih baik') {
                                        pencapaian = (realisasiVal / targetVal) * 100;
                                    } else {
                                        pencapaian = realisasiVal > 0 ? (targetVal / realisasiVal) * 100 : 0;
                                    }
                                }
                            }
                            pencapaian = Math.round(pencapaian * 100) / 100; // round to 2 decimals
                            const score = Math.round(((pencapaian * (item.bobot || 0)) / 100) * 100) / 100;

                            totalBobot += item.bobot || 0;
                            totalScore += score;

                            // Display target string
                            let targetDisplay = "";
                            if (item.satuan === 'rupiah') {
                                targetDisplay = `Rp ${formatThousandSeparator(item.target_kpi)}`;
                            } else if (item.satuan === 'persen') {
                                targetDisplay = `${item.target_kpi}%`;
                            } else {
                                targetDisplay = item.target_kpi;
                            }

                            const row = document.createElement("tr");
                            row.innerHTML = `
                                <td>${index + 1}</td>
                                <td><select class="form-control kpi-task-sel">${taskOpts}</select></td>
                                <td><input type="number" class="form-control kpi-weight-inp" style="width:65px;" value="${item.bobot || 0}"></td>
                                <td>
                                    <select class="form-control kpi-satuan-sel">
                                        <option value="rupiah" ${item.satuan === 'rupiah' ? 'selected' : ''}>Rupiah</option>
                                        <option value="tanggal" ${item.satuan === 'tanggal' ? 'selected' : ''}>Tanggal</option>
                                        <option value="persen" ${item.satuan === 'persen' ? 'selected' : ''}>Persen</option>
                                        <option value="volume" ${item.satuan === 'volume' ? 'selected' : ''}>Volume</option>
                                    </select>
                                </td>
                                <td>${targetInputHTML}</td>
                                <td><textarea class="form-control kpi-def-inp auto-expand" placeholder="Definisi" rows="1">${escapeHtml(item.definisi_target || '')}</textarea></td>
                                <td>
                                    <select class="form-control kpi-arah-sel">
                                        <option value="lebih besar lebih baik" ${item.arah === 'lebih besar lebih baik' ? 'selected' : ''}>Lebih Besar Lebih Baik</option>
                                        <option value="lebih kecil lebih baik" ${item.arah === 'lebih kecil lebih baik' ? 'selected' : ''}>Lebih Kecil Lebih Baik</option>
                                    </select>
                                </td>
                                <td style="font-weight:600;">${targetDisplay}</td>
                                <td>${realisasiInputHTML}</td>
                                <td style="text-align:center; font-weight:700;">${pencapaian}%</td>
                                <td style="text-align:center; font-weight:700; color:var(--brand-royal);">${score}</td>
                                <td><button type="button" class="btn-delete-row kpi-detail-remove">&times;</button></td>
                            `;
                            detailTableBody.appendChild(row);

                            const taskSel = row.querySelector(".kpi-task-sel");
                            const weightInp = row.querySelector(".kpi-weight-inp");
                            const satuanSel = row.querySelector(".kpi-satuan-sel");
                            const targetValInp = row.querySelector(".kpi-tgt-val");
                            const defInp = row.querySelector(".kpi-def-inp");
                            const arahSel = row.querySelector(".kpi-arah-sel");
                            const realValInp = row.querySelector(".kpi-real-val");

                            const syncRowData = () => {
                                item.task_name = taskSel.value;
                                item.bobot = parseInt(weightInp.value) || 0;
                                item.satuan = satuanSel.value;
                                if (item.satuan === 'rupiah') {
                                    item.target_kpi = stripThousandSeparator(targetValInp.value);
                                    item.realisasi = stripThousandSeparator(realValInp.value);
                                } else {
                                    item.target_kpi = targetValInp.value;
                                    item.realisasi = realValInp.value;
                                }
                                item.definisi_target = defInp.value;
                                item.arah = arahSel.value;
                            };

                            const updateValues = () => {
                                syncRowData();
                                renderKpiDetailTable();
                            };

                            satuanSel.onchange = () => {
                                item.satuan = satuanSel.value;
                                item.target_kpi = item.satuan === 'rupiah' ? '' : '0';
                                item.realisasi = '';
                                renderKpiDetailTable();
                            };

                            [taskSel, weightInp, defInp, arahSel].forEach(el => {
                                el.addEventListener("change", updateValues);
                            });

                            [targetValInp, realValInp].forEach(el => {
                                el.addEventListener("change", updateValues);
                                if (item.satuan === 'rupiah') {
                                    el.addEventListener("input", (e) => {
                                        const cursor = e.target.selectionStart;
                                        const originalLen = e.target.value.length;
                                        e.target.value = formatThousandSeparator(stripThousandSeparator(e.target.value));
                                        const newLen = e.target.value.length;
                                        e.target.setSelectionRange(cursor + (newLen - originalLen), cursor + (newLen - originalLen));
                                        syncRowData();
                                    });
                                }
                            });

                            row.querySelector(".kpi-detail-remove").onclick = () => {
                                const originalIndex = kList.findIndex(k => k === item);
                                if (originalIndex !== -1) {
                                    kList.splice(originalIndex, 1);
                                    renderKpiDetailTable();
                                }
                            };
                        });

                        // Update summary indicators
                        if (bobotIndicator) {
                            bobotIndicator.textContent = `Total Bobot: ${totalBobot}%`;
                            bobotIndicator.style.color = totalBobot > 100 ? '#ef4444' : 'var(--brand-royal)';
                        }
                        if (scoreIndicator) {
                            scoreIndicator.textContent = `Total Score: ${Math.round(totalScore)}`;
                        }
                        initAutoExpand();
                    }

                    if (addKpiBtn) {
                        addKpiBtn.onclick = () => {
                            kList.push({
                                role_name: currentEditingKpiRole,
                                task_name: "",
                                satuan: "volume",
                                target_kpi: "0",
                                definisi_target: "",
                                bobot: 0,
                                arah: "lebih besar lebih baik",
                                realisasi: ""
                            });
                            renderKpiDetailTable();
                        };
                    }

                    renderKpiDetailTable();
                }
                break;
            }

            case 12: {
                const btnReward = document.getElementById("btn-inner-reward");
                const btnPunishment = document.getElementById("btn-inner-punishment");
                const rewardSec = document.getElementById("inner-reward-section");
                const punishmentSec = document.getElementById("inner-punishment-section");

                if (btnReward && btnPunishment && rewardSec && punishmentSec) {
                    btnReward.onclick = () => {
                        btnReward.className = "btn btn-primary";
                        btnPunishment.className = "btn btn-outline";
                        rewardSec.style.display = "block";
                        punishmentSec.style.display = "none";
                        initAutoExpand();
                    };

                    btnPunishment.onclick = () => {
                        btnReward.className = "btn btn-outline";
                        btnPunishment.className = "btn btn-primary";
                        rewardSec.style.display = "none";
                        punishmentSec.style.display = "block";
                        initAutoExpand();
                    };
                }

                // Populate rewards
                const rewTableBody = document.querySelector("#ws-reward-table tbody");
                const addRewBtn = document.getElementById("btn-add-reward-row");
                const rewList = stepsData[12].rewards || [];
                const allRoles = stepsData[7].roles || [];

                function renderRewardTable() {
                    if (!rewTableBody) return;
                    rewTableBody.innerHTML = "";
                    rewList.forEach((item, index) => {
                        let catSelectHTML = `
                            <select class="form-control r-cat">
                                <option value="level_perusahaan" ${item.category === 'level_perusahaan' ? 'selected' : ''}>Perusahaan</option>
                                <option value="level_jabatan" ${item.category === 'level_jabatan' ? 'selected' : ''}>Jabatan</option>
                            </select>
                        `;

                        let roleSelectHTML = `<select class="form-control r-role" ${item.category === 'level_perusahaan' ? 'disabled' : ''}>`;
                        roleSelectHTML += `<option value="">-- Pilih Jabatan --</option>`;
                        allRoles.forEach(r => {
                            if (r.name) {
                                roleSelectHTML += `<option value="${escapeHtml(r.name)}" ${item.org_chart_node_id === r.name ? 'selected' : ''}>${escapeHtml(r.name)}</option>`;
                            }
                        });
                        roleSelectHTML += `</select>`;

                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><textarea class="form-control r-name auto-expand" placeholder="Contoh: Bonus Tahunan" rows="1">${escapeHtml(item.bonus_name || '')}</textarea></td>
                            <td>${catSelectHTML}</td>
                            <td>${roleSelectHTML}</td>
                            <td><textarea class="form-control r-tgt auto-expand" placeholder="Syarat Target" rows="1">${escapeHtml(item.bonus_target || '')}</textarea></td>
                            <td><textarea class="form-control r-amt auto-expand" placeholder="Jumlah Reward" rows="1">${escapeHtml(item.bonus_amount || '')}</textarea></td>
                            <td><textarea class="form-control r-per auto-expand" placeholder="Contoh: Bulanan" rows="1">${escapeHtml(item.bonus_period || '')}</textarea></td>
                            <td><button type="button" class="btn-delete-row rew-remove">&times;</button></td>
                        `;
                        rewTableBody.appendChild(row);

                        const nameInp = row.querySelector(".r-name");
                        const catSel = row.querySelector(".r-cat");
                        const roleSel = row.querySelector(".r-role");
                        const tgtInp = row.querySelector(".r-tgt");
                        const amtInp = row.querySelector(".r-amt");
                        const perInp = row.querySelector(".r-per");

                        const syncData = () => {
                            item.bonus_name = nameInp.value;
                            item.category = catSel.value;
                            item.org_chart_node_id = item.category === 'level_perusahaan' ? "" : roleSel.value;
                            item.bonus_target = tgtInp.value;
                            item.bonus_amount = amtInp.value;
                            item.bonus_period = perInp.value;
                        };

                        catSel.addEventListener("change", () => {
                            syncData();
                            renderRewardTable();
                        });

                        [nameInp, roleSel, tgtInp, amtInp, perInp].forEach(el => {
                            el.addEventListener("input", syncData);
                            el.addEventListener("change", syncData);
                        });

                        row.querySelector(".rew-remove").addEventListener("click", () => {
                            rewList.splice(index, 1);
                            renderRewardTable();
                        });
                    });
                    initAutoExpand();
                }

                if (addRewBtn) {
                    addRewBtn.onclick = () => {
                        rewList.push({ bonus_name: "", category: "level_perusahaan", org_chart_node_id: "", bonus_target: "", bonus_amount: "", bonus_period: "" });
                        renderRewardTable();
                    };
                }

                // Populate punishments in SP table
                const punTableBody = document.querySelector("#ws-punishment-table tbody");
                const punishmentDB = stepsData[12].punishments || [];

                function renderPunishments() {
                    if (!punTableBody) return;
                    punTableBody.innerHTML = "";
                    punishmentDB.forEach((item, index) => {
                        let definisihmtl = "";
                        let masasearch = "";
                        if (item.severity === 'SP1') {
                            definisihmtl = "Ringan, mengganggu operasional.";
                            masasearch = "3 Bulan.";
                        } else if (item.severity === 'SP2') {
                            definisihmtl = "Sedang, mengganggu kinerja & rugi material.";
                            masasearch = "3 Bulan.";
                        } else if (item.severity === 'SP3') {
                            definisihmtl = "Berat, merusak kinerja & terbukti merugikan.";
                            masasearch = "Langsung dikeluarkan.";
                        }

                        let clausesList = "<ul>";
                        let feesList = "<ul>";
                        (item.sanctions || []).forEach(s => {
                            if (s.warning_clause) {
                                clausesList += `<li>${escapeHtml(s.warning_clause)}</li>`;
                                feesList += `<li>${escapeHtml(s.fee)}</li>`;
                            }
                        });
                        clausesList += "</ul>";
                        feesList += "</ul>";

                        if (!item.sanctions || item.sanctions.length === 0) {
                            clausesList = `<span style="color:var(--text-muted); font-size:11.5px;">Belum ada pasal</span>`;
                            feesList = `-`;
                        }

                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><strong>${escapeHtml(item.severity)}</strong></td>
                            <td style="font-size:11.5px; max-width:200px; white-space:normal; overflow-wrap:break-word;">${definisihmtl}</td>
                            <td style="font-size:11.5px;">${masasearch}</td>
                            <td style="max-width:300px; white-space:normal; overflow-wrap:break-word; font-size:11.5px;">${clausesList}</td>
                            <td style="max-width:200px; white-space:normal; overflow-wrap:break-word; font-size:11.5px;">${feesList}</td>
                            <td style="text-align:center;"><button type="button" class="btn btn-outline btn-kelola-sp" style="font-size:10px; padding:4px 8px;">Kelola</button></td>
                        `;
                        punTableBody.appendChild(row);

                        row.querySelector(".btn-kelola-sp").onclick = () => {
                            openPunishmentModal(item, index);
                        };
                    });
                }

                // Modal references
                const punModal = document.getElementById("punishment-modal");
                const closePunModalBtn = document.getElementById("btn-close-punishment-modal");
                const cancelPunModalBtn = document.getElementById("btn-cancel-punishment-modal");
                const savePunModalBtn = document.getElementById("btn-save-punishment-modal");
                const addSanctionBtn = document.getElementById("btn-add-sanction-row");
                const punModalTableBody = document.querySelector("#punishment-modal-table tbody");

                let activeEditingSpIndex = -1;
                let activeSanctionsTemp = [];

                function openPunishmentModal(spItem, spIdx) {
                    activeEditingSpIndex = spIdx;
                    document.getElementById("punishment-modal-title").textContent = `Kelola Sanksi ${spItem.severity}`;
                    activeSanctionsTemp = JSON.parse(JSON.stringify(spItem.sanctions || []));
                    renderPunishmentModalTable();
                    if (punModal) punModal.style.display = "flex";
                }

                function renderPunishmentModalTable() {
                    if (!punModalTableBody) return;
                    punModalTableBody.innerHTML = "";
                    if (activeSanctionsTemp.length === 0) {
                        punModalTableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:10px 0;">Belum ada pasal. Klik "+ Tambah Pasal" di bawah.</td></tr>`;
                        initAutoExpand();
                        return;
                    }

                    activeSanctionsTemp.forEach((s, idx) => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><textarea class="form-control s-clause-inp auto-expand" placeholder="Tindakan Pelanggaran" rows="1">${escapeHtml(s.warning_clause || '')}</textarea></td>
                            <td><textarea class="form-control s-fee-inp auto-expand" placeholder="Denda / Sanksi" rows="1">${escapeHtml(s.fee || '')}</textarea></td>
                            <td><button type="button" class="btn-delete-row s-detail-remove">&times;</button></td>
                        `;
                        punModalTableBody.appendChild(row);

                        const clauseInp = row.querySelector(".s-clause-inp");
                        const feeInp = row.querySelector(".s-fee-inp");

                        [clauseInp, feeInp].forEach(el => {
                            el.addEventListener("input", () => {
                                s.warning_clause = clauseInp.value;
                                s.fee = feeInp.value;
                            });
                        });

                        row.querySelector(".s-detail-remove").onclick = () => {
                            activeSanctionsTemp.splice(idx, 1);
                            renderPunishmentModalTable();
                        };
                    });
                    initAutoExpand();
                }

                if (addSanctionBtn) {
                    addSanctionBtn.onclick = () => {
                        activeSanctionsTemp.push({ warning_clause: "", fee: "" });
                        renderPunishmentModalTable();
                    };
                }

                const closeSpModal = () => {
                    if (punModal) punModal.style.display = "none";
                    activeEditingSpIndex = -1;
                    activeSanctionsTemp = [];
                };

                if (closePunModalBtn) closePunModalBtn.onclick = closeSpModal;
                if (cancelPunModalBtn) cancelPunModalBtn.onclick = closeSpModal;

                if (savePunModalBtn) {
                    savePunModalBtn.onclick = () => {
                        if (activeEditingSpIndex !== -1) {
                            punishmentDB[activeEditingSpIndex].sanctions = activeSanctionsTemp;
                            renderPunishments();
                            closeSpModal();
                        }
                    };
                }

                renderRewardTable();
                renderPunishments();
                break;
            }

            case 13: { // SOP with inner 4M Modal
                const sopTableBody = document.querySelector("#ws-sop-table tbody");
                const sopDB = stepsData[13].sops || [];

                let activeEditingSopIndex = -1;

                function renderSopTable() {
                    if (!sopTableBody) return;
                    sopTableBody.innerHTML = "";
                    if (sopDB.length === 0) {
                        sopTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Lengkapi Langkah 9 terlebih dahulu!</td></tr>`;
                        return;
                    }

                    sopDB.forEach((item, index) => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><strong>${escapeHtml(item.role_name || '')}</strong></td>
                            <td>${escapeHtml(item.task_name || '')}</td>
                            <td><textarea class="form-control s-name auto-expand" placeholder="Contoh: SOP Rekonsiliasi Bank" rows="1">${escapeHtml(item.sop_name || '')}</textarea></td>
                            <td>
                                <button type="button" class="btn btn-outline btn-configure-4m" style="font-size:11px; padding:6px 12px;">
                                    Configure 4M (${(item.steps || []).length} Baris)
                                </button>
                            </td>
                        `;
                        sopTableBody.appendChild(row);

                        const sNameInput = row.querySelector(".s-name");
                        sNameInput.addEventListener("input", () => {
                            item.sop_name = sNameInput.value;
                        });

                        row.querySelector(".btn-configure-4m").addEventListener("click", () => {
                            activeEditingSopIndex = index;
                            openSop4mModal(item);
                        });
                    });
                }

                const sopModal = document.getElementById("sop-4m-modal");
                const closeSopModalBtn = document.getElementById("btn-close-sop-modal");
                const cancelSopModalBtn = document.getElementById("btn-cancel-sop-modal");
                const saveSopModalBtn = document.getElementById("btn-save-sop-modal");
                const addSopStepBtn = document.getElementById("btn-add-sop-step-row");
                const sopModalTableBody = document.querySelector("#sop-modal-table tbody");

                function openSop4mModal(sopItem) {
                    if (!sopModal) return;
                    document.getElementById("sop-modal-title").textContent = `Configure SOP 4M: ${sopItem.sop_name || 'Tanpa Nama'}`;
                    document.getElementById("sop-modal-desc-title").textContent = `Jabatan: ${sopItem.role_name} | Tugas: ${sopItem.task_name}`;

                    renderSopModalTable(sopItem.steps);
                    sopModal.style.display = "flex";
                }

                function renderSopModalTable(stepsArray) {
                    if (!sopModalTableBody) return;
                    sopModalTableBody.innerHTML = "";
                    stepsArray.forEach((step, idx) => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td><textarea class="form-control sm-method auto-expand" placeholder="Metode" rows="1">${escapeHtml(step.method || '')}</textarea></td>
                            <td><textarea class="form-control sm-man auto-expand" placeholder="Manusia" rows="1">${escapeHtml(step.man || '')}</textarea></td>
                            <td><textarea class="form-control sm-machine auto-expand" placeholder="Mesin/Alat" rows="1">${escapeHtml(step.machine || '')}</textarea></td>
                            <td><textarea class="form-control sm-material auto-expand" placeholder="Material" rows="1">${escapeHtml(step.material || '')}</textarea></td>
                            <td><button type="button" class="btn-delete-row sm-remove">&times;</button></td>
                        `;
                        sopModalTableBody.appendChild(row);

                        const methodInp = row.querySelector(".sm-method");
                        const manInp = row.querySelector(".sm-man");
                        const machineInp = row.querySelector(".sm-machine");
                        const materialInp = row.querySelector(".sm-material");

                        [methodInp, manInp, machineInp, materialInp].forEach(inp => {
                            inp.addEventListener("input", () => {
                                step.method = methodInp.value;
                                step.man = manInp.value;
                                step.machine = machineInp.value;
                                step.material = materialInp.value;
                            });
                        });

                        row.querySelector(".sm-remove").addEventListener("click", () => {
                            stepsArray.splice(idx, 1);
                            renderSopModalTable(stepsArray);
                        });
                    });

                    if (stepsArray.length === 0) {
                        sopModalTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:15px 0;">Belum ada langkah. Klik "+ Tambah Baris" untuk memulai.</td></tr>`;
                    }
                }

                if (addSopStepBtn) {
                    addSopStepBtn.onclick = () => {
                        if (activeEditingSopIndex !== -1) {
                            if (!sopDB[activeEditingSopIndex].steps) sopDB[activeEditingSopIndex].steps = [];
                            const steps = sopDB[activeEditingSopIndex].steps;
                            steps.push({ method: "", man: "", machine: "", material: "" });
                            renderSopModalTable(steps);
                        }
                    };
                }

                function closeSopModal() {
                    if (sopModal) sopModal.style.display = "none";
                    activeEditingSopIndex = -1;
                }

                if (closeSopModalBtn) closeSopModalBtn.onclick = closeSopModal;
                if (cancelSopModalBtn) cancelSopModalBtn.onclick = closeSopModal;

                if (saveSopModalBtn) {
                    saveSopModalBtn.onclick = () => {
                        closeSopModal();
                        renderSopTable();
                    };
                }

                renderSopTable();
                break;
            }

            case 14: { // Train The Trainer
                const trainTableBody = document.querySelector("#ws-train-table tbody");
                const trainDB = stepsData[14].trainings || [];

                function renderTrainTable() {
                    if (!trainTableBody) return;
                    trainTableBody.innerHTML = "";
                    if (trainDB.length === 0) {
                        trainTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Lengkapi Langkah 8 terlebih dahulu!</td></tr>`;
                        return;
                    }

                    const cultures = stepsData[5].cultures || [];
                    let cultureHTML = `<ul class="culture-bullet-list">`;
                    if (cultures.length === 0) {
                        cultureHTML += `<li>-</li>`;
                    } else {
                        cultures.forEach(c => {
                            if (c.budaya && c.budaya.trim()) {
                                cultureHTML += `<li>${escapeHtml(c.budaya.trim())}</li>`;
                            }
                        });
                    }
                    cultureHTML += `</ul>`;

                    const knowledgeHTML = `
                        <ul class="culture-bullet-list">
                            <li>AOS#1-6</li>
                            <li>Doc. Job Desc</li>
                            <li>Do vs Don't</li>
                            <li>Reward & Punishment</li>
                        </ul>
                    `;

                    trainDB.forEach((item, index) => {
                        const skillsList = item.skills || [];
                        const headersHTML = skillsList.map(s => `<th>${escapeHtml(s.key_activity || '')}</th>`).join('');
                        
                        const maxRows = Math.max(...skillsList.map(s => (s.list || []).length), 1);
                        let bodyRowsHTML = "";
                        for (let r = 0; r < maxRows; r++) {
                            let cellsHTML = "";
                            skillsList.forEach((skillItem, c) => {
                                const list = skillItem.list || [];
                                const skillVal = list[r];
                                if (r < list.length) {
                                    cellsHTML += `
                                        <td>
                                            <div class="inner-skill-input-container">
                                                <input type="text" 
                                                       class="inner-skill-input" 
                                                       data-role-idx="${index}" 
                                                       data-col-idx="${c}" 
                                                       data-row-idx="${r}" 
                                                       value="${escapeHtml(skillVal || '')}" 
                                                       placeholder="Nama skill">
                                                <button type="button" 
                                                        class="btn-remove-skill-inner" 
                                                        data-role-idx="${index}" 
                                                        data-col-idx="${c}" 
                                                        data-row-idx="${r}" 
                                                        title="Hapus skill">&times;</button>
                                            </div>
                                        </td>
                                    `;
                                } else {
                                    cellsHTML += `<td></td>`;
                                }
                            });
                            bodyRowsHTML += `<tr>${cellsHTML}</tr>`;
                        }

                        let plusRowHTML = "<tr>";
                        skillsList.forEach((skillItem, c) => {
                            plusRowHTML += `
                                <td style="text-align: center; background-color: #f8fafc; border: 1px solid var(--border-color) !important;">
                                    <button type="button" 
                                            class="btn-add-skill-inner" 
                                            data-role-idx="${index}" 
                                            data-col-idx="${c}">+ Skill</button>
                                </td>
                            `;
                        });
                        plusRowHTML += "</tr>";

                        const nestedTableHTML = `
                            <table class="inner-skills-table">
                                <thead>
                                    <tr>${headersHTML}</tr>
                                </thead>
                                <tbody>
                                    ${bodyRowsHTML}
                                    ${plusRowHTML}
                                </tbody>
                            </table>
                        `;

                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td style="text-align:center; font-weight:600;">${index + 1}</td>
                            <td><strong>${escapeHtml(item.role_name || '')}</strong></td>
                            <td>${cultureHTML}</td>
                            <td>${nestedTableHTML}</td>
                            <td>${knowledgeHTML}</td>
                        `;
                        trainTableBody.appendChild(row);
                    });

                    // Attach change event listeners to inputs
                    const inputs = trainTableBody.querySelectorAll(".inner-skill-input");
                    inputs.forEach(inputEl => {
                        const rIdx = parseInt(inputEl.getAttribute("data-role-idx"));
                        const cIdx = parseInt(inputEl.getAttribute("data-col-idx"));
                        const sIdx = parseInt(inputEl.getAttribute("data-row-idx"));
                        
                        inputEl.addEventListener("input", () => {
                            trainDB[rIdx].skills[cIdx].list[sIdx] = inputEl.value;
                        });
                    });

                    // Attach click event listeners to remove buttons
                    const removeBtns = trainTableBody.querySelectorAll(".btn-remove-skill-inner");
                    removeBtns.forEach(btn => {
                        const rIdx = parseInt(btn.getAttribute("data-role-idx"));
                        const cIdx = parseInt(btn.getAttribute("data-col-idx"));
                        const sIdx = parseInt(btn.getAttribute("data-row-idx"));
                        
                        btn.onclick = () => {
                            trainDB[rIdx].skills[cIdx].list.splice(sIdx, 1);
                            renderTrainTable();
                        };
                    });

                    // Attach click event listeners to add buttons
                    const addBtns = trainTableBody.querySelectorAll(".btn-add-skill-inner");
                    addBtns.forEach(btn => {
                        const rIdx = parseInt(btn.getAttribute("data-role-idx"));
                        const cIdx = parseInt(btn.getAttribute("data-col-idx"));
                        
                        btn.onclick = () => {
                            if (!trainDB[rIdx].skills[cIdx].list) {
                                trainDB[rIdx].skills[cIdx].list = [];
                            }
                            trainDB[rIdx].skills[cIdx].list.push("");
                            renderTrainTable();
                        };
                    });
                }
                renderTrainTable();
                break;
            }
        }
    }

    // 10. SAVE STEP & SEQUENCE ADVANCING
    const btnSaveStep = document.getElementById("btn-save-step");
    if (btnSaveStep) {
        btnSaveStep.onclick = () => {
            // Validate step before saving
            const isValid = validateStepFields(currentActiveStepId);
            if (!isValid) return;

            // Save active step as completed
            stepStatus[currentActiveStepId] = 'completed';

            // Mark step on timeline dashboard & update sidebar locks
            updateStepTimelineDashboard();

            // Advance sequence
            if (currentActiveStepId === 14) {
                // Unlock AOS Checklist and redirect
                stepStatus['checklist'] = 'unlocked';
                updateStepTimelineDashboard();

                // Launch celebration popup
                showCelebrationPopup();
            } else {
                const nextStep = currentActiveStepId + 1;
                stepStatus[nextStep] = 'unlocked';
                updateStepTimelineDashboard();

                alert(`Langkah ${currentActiveStepId < 10 ? '0' + currentActiveStepId : currentActiveStepId} Berhasil Disimpan! Langkah berikutnya terbuka.`);

                // Redirect to next step worksheet
                loadStepWorksheet(nextStep);
            }
        };
    }

    function validateStepFields(stepId) {
        return true; // Bypassed for mockup testing
        switch (stepId) {
            case 1:
                const purpose = document.getElementById("ws-purpose").value.trim();
                if (!purpose) {
                    alert("Tujuan Perusahaan wajib diisi!");
                    return false;
                }
                stepsData[1].purpose = purpose;
                break;

            case 2:
                const company = document.getElementById("ws-company").value.trim();
                const category = document.getElementById("ws-category").value.trim();
                const dna = document.getElementById("ws-dna").value.trim();
                const cv = document.getElementById("ws-core-value").value.trim();
                const av = document.getElementById("ws-add-value").value.trim();
                const pos = document.getElementById("ws-positioning").value.trim();

                if (!company || !category || !dna || !cv || !av) {
                    alert("Seluruh kolom wajib diisi!");
                    return false;
                }
                stepsData[2] = { company, category, dna, core_value: cv, add_value: av, positioning: pos };
                break;

            case 3:
                const vCat = document.getElementById("ws-category-vis").value.trim();
                const vDna = document.getElementById("ws-dna-vis").value.trim();
                const vArea = document.getElementById("ws-area").value.trim();
                const vTarget = document.getElementById("ws-target").value.trim();
                const vVision = document.getElementById("ws-vision").value.trim();

                if (!vCat || !vDna || !vArea || !vTarget) {
                    alert("Seluruh kolom wajib diisi!");
                    return false;
                }
                stepsData[3] = { category: vCat, dna: vDna, area: vArea, target: vTarget, vision: vVision };
                break;

            case 4:
                const mHr = document.getElementById("ws-m-hr").value.trim();
                const mOps = document.getElementById("ws-m-ops").value.trim();
                const mMkt = document.getElementById("ws-m-mkt").value.trim();
                const mFin = document.getElementById("ws-m-fin").value.trim();

                if (!mHr || !mOps || !mMkt || !mFin) {
                    alert("Seluruh misi abadi bisnis wajib diisi!");
                    return false;
                }
                stepsData[4] = { human_resources: mHr, operation: mOps, marketing: mMkt, finance: mFin };
                break;

            case 5:
                const cList = stepsData[5].cultures || [];
                if (cList.length < 3 || cList.length > 4) {
                    alert("Harus diisi antara 3 s/d 4 budaya kerja!");
                    return false;
                }
                for (let i = 0; i < cList.length; i++) {
                    if (!cList[i].budaya.trim() || !cList[i].deskripsi.trim()) {
                        alert("Seluruh kolom nama dan deskripsi budaya wajib diisi!");
                        return false;
                    }
                }
                break;

            case 6:
                const bgType = document.getElementById("ws-bg-type").value;
                const targetVal = parseFloat(document.getElementById("ws-bg-growth-pct").value) || 0;

                if (bgType === "berjalan") {
                    if (targetVal <= 0) {
                        alert("Target growth keuangan (%) harus positif!");
                        return false;
                    }
                    stepsData[6].projection_kinerja_pct = targetVal;
                    stepsData[6].business_type = "berjalan";
                    stepsData[6].target_type = document.getElementById("ws-bg-target-type").value;
                } else {
                    // Startup mode validation
                    const startupProjData = stepsData[6].projection_monthly_data || [];
                    if (startupProjData.length === 0) {
                        alert("Proyeksi keuangan bulanan startup wajib dikonfigurasikan!");
                        return false;
                    }
                    stepsData[6].business_type = "baru";
                    stepsData[6].target_type = document.getElementById("ws-bg-target-type").value;
                }
                break;

            case 7:
                const rolesList = stepsData[7].roles || [];
                if (rolesList.length === 0) {
                    alert("Minimal 1 jabatan struktur organisasi harus diisi!");
                    return false;
                }

                const levelRank = ["director", "general_manager", "manager", "supervisor", "coordinator", "staff"];
                const rolesMap = new Map(rolesList.map(r => [r.name.trim(), r]));

                for (let i = 0; i < rolesList.length; i++) {
                    const r = rolesList[i];
                    if (!r.name.trim()) {
                        alert("Nama jabatan wajib diisi pada setiap baris!");
                        return false;
                    }
                    if (!r.division_key) {
                        alert(`Departemen wajib dipilih untuk "${r.name}"!`);
                        return false;
                    }
                    if (!r.level_key) {
                        alert(`Level wajib dipilih untuk "${r.name}"!`);
                        return false;
                    }
                    if (r.parent_key) {
                        const parent = rolesMap.get(r.parent_key.trim());
                        if (!parent) {
                            alert(`Atasan "${r.parent_key}" tidak valid untuk "${r.name}"!`);
                            return false;
                        }
                        if (parent.name.trim() === r.name.trim()) {
                            alert(`"${r.name}" tidak boleh menjadi atasannya sendiri!`);
                            return false;
                        }

                        const childRankIdx = levelRank.indexOf(r.level_key);
                        const parentRankIdx = levelRank.indexOf(parent.level_key);
                        if (childRankIdx <= parentRankIdx) {
                            const levelLabelMap = {
                                director: 'Direktur', general_manager: 'General Manager', manager: 'Manager',
                                supervisor: 'Supervisor', coordinator: 'Koordinator', staff: 'Staff'
                            };
                            const childLvlLabel = levelLabelMap[r.level_key] || r.level_key;
                            const parentLvlLabel = levelLabelMap[parent.level_key] || parent.level_key;
                            alert(`Level "${r.name}" (${childLvlLabel}) harus di bawah level atasannya "${parent.name}" (${parentLvlLabel})!`);
                            return false;
                        }
                    }
                }

                // Circular reference check
                for (let i = 0; i < rolesList.length; i++) {
                    let cur = rolesList[i];
                    const seen = new Set();
                    while (cur && cur.parent_key) {
                        if (seen.has(cur.name.trim())) {
                            alert("Struktur memiliki atasan yang melingkar!");
                            return false;
                        }
                        seen.add(cur.name.trim());
                        cur = rolesMap.get(cur.parent_key.trim());
                    }
                }
                break;

            case 8:
                const kaList = stepsData[8].activities || [];
                if (kaList.length === 0) {
                    alert("Lengkapi minimal 1 jabatan dengan key activities!");
                    return false;
                }
                for (let i = 0; i < kaList.length; i++) {
                    if (!kaList[i].role_name || !kaList[i].ka1.trim() || !kaList[i].ka2.trim() || !kaList[i].ka3.trim() || !kaList[i].ka4.trim()) {
                        alert("Jabatan dan seluruh 4 Key Activities wajib diisi!");
                        return false;
                    }
                }
                break;

            case 9:
                const rolesList9 = stepsData[7].roles || [];
                const tasksList9 = stepsData[9].tasks || [];

                if (rolesList9.length === 0) {
                    alert("Silakan lengkapi Langkah 7 terlebih dahulu!");
                    return false;
                }

                for (let i = 0; i < rolesList9.length; i++) {
                    const role = rolesList9[i];
                    if (!role.name) continue;

                    const roleTasks = tasksList9.filter(t => t.role_name === role.name);
                    if (roleTasks.length === 0) {
                        alert(`Jabatan "${role.name}" wajib memiliki minimal 1 Job Description!`);
                        return false;
                    }

                    for (let j = 0; j < roleTasks.length; j++) {
                        const t = roleTasks[j];
                        if (!t.key_activity) {
                            alert(`Aktivitas Utama wajib diisi untuk Job Description ke-${j + 1} di jabatan "${role.name}"!`);
                            return false;
                        }
                        if (!t.description.trim()) {
                            alert(`Rincian Uraian Tugas wajib diisi untuk Job Description ke-${j + 1} di jabatan "${role.name}"!`);
                            return false;
                        }
                        if (!t.report.trim()) {
                            alert(`Pelaporan Hasil Kerja wajib diisi untuk Job Description ke-${j + 1} di jabatan "${role.name}"!`);
                            return false;
                        }
                    }
                }

                currentEditingJobRole = null; // reset state after save
                break;

            case 10:
                const reportTemplates = stepsData[10].reports || [];
                for (let i = 0; i < reportTemplates.length; i++) {
                    if (!reportTemplates[i].report_template.trim() || !reportTemplates[i].file_mockup) {
                        alert(`Harap lengkapi format template laporan dan upload file untuk tugas "${reportTemplates[i].task_name}"!`);
                        return false;
                    }
                }
                break;

            case 11: {
                const kpiList = stepsData[11].kpis || [];
                if (kpiList.length === 0) {
                    alert("Minimal 1 KPI wajib dikonfigurasikan!");
                    return false;
                }
                const bobotMap = {};
                for (let i = 0; i < kpiList.length; i++) {
                    const item = kpiList[i];
                    if (!item.role_name || !item.task_name || !String(item.target_kpi ?? '').trim() || !String(item.definisi_target ?? '').trim() || item.bobot <= 0) {
                        alert("Seluruh kolom input KPI wajib diisi!");
                        return false;
                    }
                    bobotMap[item.role_name] = (bobotMap[item.role_name] || 0) + item.bobot;
                }

                for (const role in bobotMap) {
                    if (bobotMap[role] > 100) {
                        alert(`Total persentase bobot KPI untuk jabatan "${role}" adalah ${bobotMap[role]}%, melebihi batas maksimal 100%!`);
                        return false;
                    }
                }
                break;
            }

            case 12: {
                const rewList = stepsData[12].rewards || [];
                for (let i = 0; i < rewList.length; i++) {
                    const rew = rewList[i];
                    if (!String(rew.bonus_name ?? '').trim() || !String(rew.category ?? '').trim() || !String(rew.bonus_target ?? '').trim() || !String(rew.bonus_amount ?? '').trim() || !String(rew.bonus_period ?? '').trim()) {
                        alert("Seluruh kolom reward/bonus wajib diisi!");
                        return false;
                    }
                    if (rew.category === 'level_jabatan' && !String(rew.org_chart_node_id ?? '').trim()) {
                        alert(`Harap tentukan Jabatan untuk reward "${rew.bonus_name}"!`);
                        return false;
                    }
                }
                const punList = stepsData[12].punishments || [];
                for (let i = 0; i < punList.length; i++) {
                    const sp = punList[i];
                    for (let j = 0; j < (sp.sanctions || []).length; j++) {
                        if (!String(sp.sanctions[j].warning_clause ?? '').trim() || !String(sp.sanctions[j].fee ?? '').trim()) {
                            alert(`Pelanggaran dan Sanksi/Denda di tingkatan "${sp.severity}" wajib diisi!`);
                            return false;
                        }
                    }
                }
                break;
            }

            case 13:
                const sopsList = stepsData[13].sops || [];
                if (sopsList.length === 0) {
                    alert("Minimal 1 SOP wajib dikonfigurasikan!");
                    return false;
                }
                for (let i = 0; i < sopsList.length; i++) {
                    const sop = sopsList[i];
                    if (!sop.sop_name.trim()) {
                        alert(`Nama SOP wajib diisi untuk "${sop.task_name}"!`);
                        return false;
                    }
                    if (sop.sop_name.trim().length < 3) {
                        alert(`Nama SOP untuk "${sop.task_name}" minimal harus terdiri dari 3 karakter!`);
                        return false;
                    }
                    if (sop.sop_name.trim().length > 150) {
                        alert(`Nama SOP untuk "${sop.task_name}" tidak boleh lebih dari 150 karakter!`);
                        return false;
                    }
                    if (sop.steps.length === 0) {
                        alert(`Minimal 1 baris Metode SOP (4M) wajib diisi untuk "${sop.sop_name}"!`);
                        return false;
                    }
                    for (let j = 0; j < sop.steps.length; j++) {
                        const step = sop.steps[j];
                        if (!step.method.trim() || !step.man.trim() || !step.machine.trim() || !step.material.trim()) {
                            alert(`Harap lengkapi semua kolom 4M (Metode, Manusia, Mesin, Material) di SOP "${sop.sop_name}"!`);
                            return false;
                        }
                        if (step.method.length > 255 || step.man.length > 255 || step.machine.length > 255 || step.material.length > 255) {
                            alert(`Setiap kolom Metode SOP di "${sop.sop_name}" maksimal 255 karakter!`);
                            return false;
                        }
                    }
                }
                break;

            case 14:
                const trainsList = stepsData[14].trainings || [];
                if (trainsList.length === 0) {
                    alert("Minimal 1 data training kaderisasi wajib dikonfigurasikan!");
                    return false;
                }
                for (let i = 0; i < trainsList.length; i++) {
                    const tr = trainsList[i];
                    for (let j = 0; j < tr.skills.length; j++) {
                        const sk = tr.skills[j];
                        const nonBlankSkills = sk.list.filter(val => val.trim() !== "");
                        if (nonBlankSkills.length === 0) {
                            alert(`Matriks Keterampilan / ASK wajib diisi minimal 1 skill untuk aktivitas "${sk.key_activity}"!`);
                            return false;
                        }
                        sk.list = nonBlankSkills; // clean list
                    }
                }
                break;
        }
        return true;
    }

    // 11. RENDER INTERACTIVE CHECKLIST PANEL
    function saveChecklistData() {
        localStorage.setItem("aos_checklist_data", JSON.stringify(stepsData.checklist));
        updateOverallChecklistProgress();
    }

    function updateOverallChecklistProgress() {
        const items = stepsData.checklist || [];
        const completedCount = items.filter(item => item.status === "Selesai").length;
        const overallPct = Math.round((completedCount / 24) * 100);
        
        const progressRatioEl = document.getElementById("checklist-progress-ratio");
        const progressBarEl = document.getElementById("checklist-progress-bar");
        const progressPctEl = document.getElementById("checklist-progress-pct");
        
        if (progressRatioEl) progressRatioEl.textContent = `${completedCount} / 24`;
        if (progressBarEl) progressBarEl.style.width = `${overallPct}%`;
        if (progressPctEl) progressPctEl.textContent = `${overallPct}%`;
        
        // Update section headers
        CHECKLIST_SECTIONS.forEach(sec => {
            const secItems = CHECKLIST_TASKS.filter(t => t.section_id === sec.id);
            const secResponses = items.filter(item => item.section_id === sec.id);
            const secCompleted = secResponses.filter(item => item.status === "Selesai").length;
            const secPct = secItems.length === 0 ? 0 : Math.round((secCompleted / secItems.length) * 100);
            
            const secPctEl = document.getElementById(`sec-pct-${sec.id}`);
            const secBarEl = document.getElementById(`sec-bar-fill-${sec.id}`);
            const secCountEl = document.getElementById(`sec-count-${sec.id}`);
            
            if (secPctEl) secPctEl.textContent = `${secPct}%`;
            if (secBarEl) secBarEl.style.width = `${secPct}%`;
            if (secCountEl) secCountEl.textContent = `${secCompleted} / ${secItems.length}`;
        });
        updateDashboardChecklistProgress();
    }

    function updateDashboardChecklistProgress() {
        const items = stepsData.checklist || [];
        const completedCount = items.filter(item => item.status === "Selesai").length;
        const overallPct = Math.round((completedCount / 24) * 100);

        // Calculate current day
        let currentDay = 0;
        const aosStartDate = localStorage.getItem("aos_checklist_start_date") || "";
        if (aosStartDate) {
            const startD = new Date(aosStartDate);
            startD.setHours(0, 0, 0, 0);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const diffInMs = today - startD;
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            currentDay = Math.max(0, diffInDays);
        } else {
            // Find max day among completed checklist items
            const completedTaskIds = items.filter(item => item.status === "Selesai").map(item => item.id);
            if (completedTaskIds.length > 0) {
                const dayOffsets = completedTaskIds.map(id => {
                    const task = CHECKLIST_TASKS.find(t => t.id === id);
                    return task ? parseDaysFromTime(task.time) : 0;
                });
                currentDay = Math.max(...dayOffsets);
            }
        }

        // Cap day at 33
        if (currentDay > 33) currentDay = 33;
        currentDay = 16; // Hardcoded for mockup

        // Determine Stage Name based on currentDay
        let stageName = "Persiapan & Sosialisasi";
        if (currentDay >= 1 && currentDay <= 6) {
            stageName = "Kickoff Implementasi AOS";
        } else if (currentDay >= 7 && currentDay <= 11) {
            stageName = "Internalisasi Pondasi Perusahaan";
        } else if (currentDay >= 12 && currentDay <= 24) {
            stageName = "Implementasi AOS";
        } else if (currentDay >= 25) {
            stageName = "Dokumen Pendukung SDM";
        }

        // Update DOM elements on Dashboard
        const titleEl = document.getElementById("dashboard-impl-title");
        const descEl = document.getElementById("dashboard-impl-desc");
        const fillEl = document.getElementById("dashboard-impl-fill");
        const markerEl = document.getElementById("dashboard-impl-marker");
        const pctEl = document.getElementById("dashboard-impl-pct");

        if (titleEl) {
            titleEl.textContent = `Hari ke-${currentDay} dari 33 hari`;
        }
        if (descEl) {
            descEl.textContent = `Tahap: ${stageName}`;
        }
        if (pctEl) {
            pctEl.textContent = `${overallPct}% Selesai`;
        }

        
        
        // Generate dots if not exists
        const dotsContainer = document.getElementById('impl-timeline-dots');
        if (dotsContainer && dotsContainer.children.length === 0) {
            let dotsHtml = '';
            for (let i = 0; i <= 33; i++) {
                dotsHtml += '<div class="impl-dot" data-day="' + i + '"></div>';
            }
            dotsContainer.innerHTML = dotsHtml;
        }

        // Update dots colors

        const dots = document.querySelectorAll('.impl-dot');
        dots.forEach((dot, index) => {
            if (index < currentDay) {
                dot.style.backgroundColor = '#071753';
                dot.style.borderColor = '#071753';
            } else if (index === currentDay) {
                dot.style.backgroundColor = 'transparent';
                dot.style.borderColor = 'transparent';
            } else if (false) {
                dot.style.backgroundColor = '#071753';
                dot.style.borderColor = '#071753';
            } else {
                dot.style.backgroundColor = '#ffffff';
                dot.style.borderColor = '#e2e8f0';
            }
        });
// Timeline visualization: position is (currentDay / 33) * 100%
        const dayPct = Math.round((currentDay / 33) * 100);
        if (fillEl) {
            fillEl.style.width = `${dayPct}%`;
        }
        if (markerEl) {
            markerEl.style.left = `${dayPct}%`;
            markerEl.innerHTML = `<span class='impl-tooltip'>HARI KE-${currentDay}</span>`;
        }
    }

    function updateMediaCountBadge(taskId) {
        const btn = document.getElementById(`btn-media-${taskId}`);
        if (!btn) return;
        
        const taskResponse = stepsData.checklist.find(t => t.id === taskId);
        const count = taskResponse ? taskResponse.media.length : 0;
        
        // Remove existing badge
        const oldBadge = btn.querySelector(".checklist-media-badge");
        if (oldBadge) oldBadge.remove();
        
        if (count > 0) {
            const badge = document.createElement("span");
            badge.className = "checklist-media-badge";
            badge.textContent = count;
            btn.appendChild(badge);
        }
    }

    function renderMediaList() {
        if (activeMediaTaskId === null) return;
        
        const taskResponse = stepsData.checklist.find(t => t.id === activeMediaTaskId);
        if (!taskResponse) return;
        
        const docList = document.getElementById("chk-doc-list");
        const imgList = document.getElementById("chk-img-list");
        const linkList = document.getElementById("chk-link-list");
        
        if (activeMediaTab === "documents" && docList) {
            docList.innerHTML = "";
            const docs = taskResponse.media.filter(m => m.type === "document");
            if (docs.length === 0) {
                docList.innerHTML = `<span style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0; width:100%;">Belum ada dokumen terlampir</span>`;
            } else {
                docs.forEach((d) => {
                    const item = document.createElement("div");
                    item.className = "media-list-item";
                    item.style.display = "flex";
                    item.style.justifyContent = "space-between";
                    item.style.alignItems = "center";
                    item.style.background = "#f8fafc";
                    item.style.border = "1px solid var(--border-color)";
                    item.style.borderRadius = "6px";
                    item.style.padding = "8px 12px";
                    item.style.fontSize = "12.5px";
                    item.innerHTML = `
                        <div class="media-list-item-info" style="display:flex; align-items:center; gap:8px;">
                            <svg style="width:16px; height:16px; color:var(--brand-royal); flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                            <span title="${escapeHtml(d.name)}" style="overflow:hidden; text-overflow:ellipsis; max-width:180px; white-space:nowrap;">${escapeHtml(d.name)}</span>
                            <span style="font-size:10px; color:var(--text-muted);">(${escapeHtml(d.value)})</span>
                        </div>
                        <div class="media-list-item-actions" style="display:flex; align-items:center; gap:8px;">
                            <button class="media-list-item-btn btn-download" title="Unduh File" style="background:none; border:none; cursor:pointer; padding:4px; color:var(--brand-ocean);" onclick="alert('File simulasi berhasil diunduh!')">
                                <svg style="width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </button>
                            <button class="media-list-item-btn btn-delete" title="Hapus File" style="background:none; border:none; cursor:pointer; padding:4px; color:#ef4444;" data-media-idx="${taskResponse.media.indexOf(d)}">
                                <svg style="width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    `;
                    docList.appendChild(item);
                });
            }
        } else if (activeMediaTab === "images" && imgList) {
            imgList.innerHTML = "";
            const imgs = taskResponse.media.filter(m => m.type === "image");
            if (imgs.length === 0) {
                imgList.innerHTML = `<span style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0; width:100%;">Belum ada gambar/video terlampir</span>`;
            } else {
                imgs.forEach((im) => {
                    const item = document.createElement("div");
                    item.className = "media-list-item";
                    item.style.display = "flex";
                    item.style.justifyContent = "space-between";
                    item.style.alignItems = "center";
                    item.style.background = "#f8fafc";
                    item.style.border = "1px solid var(--border-color)";
                    item.style.borderRadius = "6px";
                    item.style.padding = "8px 12px";
                    item.style.fontSize = "12.5px";
                    item.innerHTML = `
                        <div class="media-list-item-info" style="display:flex; align-items:center; gap:8px;">
                            <svg style="width:16px; height:16px; color:var(--brand-royal); flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span title="${escapeHtml(im.name)}" style="overflow:hidden; text-overflow:ellipsis; max-width:180px; white-space:nowrap;">${escapeHtml(im.name)}</span>
                            <span style="font-size:10px; color:var(--text-muted);">(${escapeHtml(im.value)})</span>
                        </div>
                        <div class="media-list-item-actions" style="display:flex; align-items:center; gap:8px;">
                            <button class="media-list-item-btn btn-download" title="Unduh File" style="background:none; border:none; cursor:pointer; padding:4px; color:var(--brand-ocean);" onclick="alert('File simulasi berhasil diunduh!')">
                                <svg style="width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </button>
                            <button class="media-list-item-btn btn-delete" title="Hapus File" style="background:none; border:none; cursor:pointer; padding:4px; color:#ef4444;" data-media-idx="${taskResponse.media.indexOf(im)}">
                                <svg style="width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    `;
                    imgList.appendChild(item);
                });
            }
        } else if (activeMediaTab === "links" && linkList) {
            linkList.innerHTML = "";
            const lnks = taskResponse.media.filter(m => m.type === "link");
            if (lnks.length === 0) {
                linkList.innerHTML = `<span style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0; width:100%;">Belum ada link URL terlampir</span>`;
            } else {
                lnks.forEach((l) => {
                    const item = document.createElement("div");
                    item.className = "media-list-item";
                    item.style.display = "flex";
                    item.style.justifyContent = "space-between";
                    item.style.alignItems = "center";
                    item.style.background = "#f8fafc";
                    item.style.border = "1px solid var(--border-color)";
                    item.style.borderRadius = "6px";
                    item.style.padding = "8px 12px";
                    item.style.fontSize = "12.5px";
                    item.innerHTML = `
                        <div class="media-list-item-info" style="display:flex; align-items:center; gap:8px;">
                            <svg style="width:16px; height:16px; color:var(--brand-royal); flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            <a href="${escapeHtml(l.value)}" target="_blank" title="${escapeHtml(l.name)}" style="overflow:hidden; text-overflow:ellipsis; max-width:260px; text-decoration:none; color:var(--brand-ocean); font-weight:500; white-space:nowrap;">${escapeHtml(l.name)}</a>
                        </div>
                        <div class="media-list-item-actions">
                            <button class="media-list-item-btn btn-delete" title="Hapus Link" style="background:none; border:none; cursor:pointer; padding:4px; color:#ef4444;" data-media-idx="${taskResponse.media.indexOf(l)}">
                                <svg style="width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    `;
                    linkList.appendChild(item);
                });
            }
        }

        // Bind delete click actions
        document.querySelectorAll(".media-list-item-btn.btn-delete").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-media-idx"));
                if (taskResponse.media[idx]) {
                    taskResponse.media.splice(idx, 1);
                    saveChecklistData();
                    renderMediaList();
                    updateMediaCountBadge(activeMediaTaskId);
                }
            };
        });
    }

    function openMediaModal(taskId) {
        activeMediaTaskId = taskId;
        const task = CHECKLIST_TASKS.find(t => t.id === taskId);
        if (!task) return;
        
        const taskTitleEl = document.getElementById("chk-modal-task-title");
        if (taskTitleEl) taskTitleEl.textContent = `Lampiran: ${task.text}`;
        
        // Reset modal tabs
        document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
        const defaultTab = document.querySelector('[data-media-tab="documents"]');
        if (defaultTab) defaultTab.classList.add("active");
        activeMediaTab = "documents";
        
        document.querySelectorAll(".media-tab-content").forEach(tc => tc.style.display = "none");
        const docTabContent = document.getElementById("media-tab-documents");
        if (docTabContent) docTabContent.style.display = "block";
        
        const linkErr = document.getElementById("chk-link-error");
        const inputLink = document.getElementById("chk-link-url-input");
        if (linkErr) linkErr.style.display = "none";
        if (inputLink) inputLink.value = "";
        
        renderMediaList();
        
        const chkModal = document.getElementById("checklist-media-modal");
        if (chkModal) chkModal.style.display = "flex";
    }

    // Bind Media Modal Tabs & Close events (do this once on load)
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeMediaTab = btn.getAttribute("data-media-tab");
            
            document.querySelectorAll(".media-tab-content").forEach(tc => tc.style.display = "none");
            document.getElementById(`media-tab-${activeMediaTab}`).style.display = "block";
            
            renderMediaList();
        });
    });

    const closeChkModal = () => {
        const chkModal = document.getElementById("checklist-media-modal");
        if (chkModal) chkModal.style.display = "none";
        activeMediaTaskId = null;
    };
    const btnCloseChk = document.getElementById("btn-close-chk-modal");
    const btnCloseChkBack = document.getElementById("btn-chk-modal-close-back");
    if (btnCloseChk) btnCloseChk.onclick = closeChkModal;
    if (btnCloseChkBack) btnCloseChkBack.onclick = closeChkModal;

    // Trigger Upload inputs
    const btnTriggerDoc = document.getElementById("btn-trigger-doc-upload");
    const btnTriggerImg = document.getElementById("btn-trigger-img-upload");
    const inputDoc = document.getElementById("chk-doc-file-input");
    const inputImg = document.getElementById("chk-img-file-input");
    
    if (btnTriggerDoc && inputDoc) btnTriggerDoc.onclick = () => inputDoc.click();
    if (btnTriggerImg && inputImg) btnTriggerImg.onclick = () => inputImg.click();

    // Document File input change
    if (inputDoc) {
        inputDoc.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (activeMediaTaskId !== null) {
                const taskResponse = stepsData.checklist.find(t => t.id === activeMediaTaskId);
                if (taskResponse) {
                    const fileSizeKb = Math.round(file.size / 1024);
                    taskResponse.media.push({
                        type: "document",
                        name: file.name,
                        value: `${fileSizeKb} KB`
                    });
                    saveChecklistData();
                    renderMediaList();
                    updateMediaCountBadge(activeMediaTaskId);
                }
            }
            inputDoc.value = "";
        });
    }

    // Image File input change
    if (inputImg) {
        inputImg.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (activeMediaTaskId !== null) {
                const taskResponse = stepsData.checklist.find(t => t.id === activeMediaTaskId);
                if (taskResponse) {
                    const fileSizeKb = Math.round(file.size / 1024);
                    taskResponse.media.push({
                        type: "image",
                        name: file.name,
                        value: `${fileSizeKb} KB`
                    });
                    saveChecklistData();
                    renderMediaList();
                    updateMediaCountBadge(activeMediaTaskId);
                }
            }
            inputImg.value = "";
        });
    }

    // Add Link
    const btnAddLink = document.getElementById("btn-chk-add-link");
    const inputLink = document.getElementById("chk-link-url-input");
    const linkErr = document.getElementById("chk-link-error");
    if (btnAddLink && inputLink) {
        btnAddLink.onclick = () => {
            const url = inputLink.value.trim();
            if (!url) return;
            
            const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
            if (!urlPattern.test(url)) {
                if (linkErr) linkErr.style.display = "block";
                return;
            }
            if (linkErr) linkErr.style.display = "none";
            
            if (activeMediaTaskId !== null) {
                const taskResponse = stepsData.checklist.find(t => t.id === activeMediaTaskId);
                if (taskResponse) {
                    taskResponse.media.push({
                        type: "link",
                        name: url,
                        value: url.indexOf("://") === -1 ? "https://" + url : url
                    });
                    saveChecklistData();
                    renderMediaList();
                    updateMediaCountBadge(activeMediaTaskId);
                }
            }
            inputLink.value = "";
        };
    }

    function updateStartDateUI(aosStartDate) {
        const inputStartDate = document.getElementById("aos-start-date");
        const btnReset = document.getElementById("btn-reset-start-date");
        const btnSet = document.getElementById("btn-set-start-date");
        const badgeStatus = document.getElementById("start-date-status-badge");
        const infoText = document.getElementById("start-date-info-text");

        if (!inputStartDate) return;

        if (aosStartDate) {
            inputStartDate.value = aosStartDate;
            if (btnReset) btnReset.style.display = "inline-flex";
            if (btnSet) btnSet.textContent = "Ubah";
            
            // Format Indo
            const dateObj = new Date(aosStartDate);
            const formatted = formatDateIndo(dateObj);
            
            if (badgeStatus) {
                badgeStatus.innerHTML = `<span style="width:8px; height:8px; border-radius:50%; background-color:var(--success); display:inline-block;"></span> Berjalan`;
                badgeStatus.style.backgroundColor = "var(--success-bg)";
                badgeStatus.style.borderColor = "rgba(254, 141, 22, 0.2)";
                badgeStatus.style.color = "var(--success)";
            }
            if (infoText) {
                infoText.innerHTML = `Dimulai sejak <strong>${formatted}</strong>. Batas waktu otomatis dihasilkan.`;
            }
        } else {
            inputStartDate.value = "";
            if (btnReset) btnReset.style.display = "none";
            if (btnSet) btnSet.textContent = "Mulai";
            if (badgeStatus) {
                badgeStatus.innerHTML = `<span style="width:8px; height:8px; border-radius:50%; background-color:var(--text-muted); display:inline-block;"></span> Belum Mulai`;
                badgeStatus.style.backgroundColor = "var(--muted-bg)";
                badgeStatus.style.borderColor = "var(--border-color)";
                badgeStatus.style.color = "var(--text-muted)";
            }
            if (infoText) {
                infoText.textContent = "Pilih tanggal di samping untuk menjadwalkan batas waktu otomatis.";
            }
        }
    }

    function renderChecklistPanel() {
        const container = document.getElementById("checklist-sections-container");
        if (!container) return;
        container.innerHTML = "";

        const aosStartDate = localStorage.getItem("aos_checklist_start_date") || "";
        updateStartDateUI(aosStartDate);

        CHECKLIST_SECTIONS.forEach(sec => {
            const isExpanded = expandedSections.has(sec.id);
            const sectionTasks = CHECKLIST_TASKS.filter(t => t.section_id === sec.id);
            const sectionResponses = (stepsData.checklist || []).filter(r => r.section_id === sec.id);
            const completedCount = sectionResponses.filter(r => r.status === "Selesai").length;
            const pct = sectionTasks.length === 0 ? 0 : Math.round((completedCount / sectionTasks.length) * 100);

            const card = document.createElement("div");
            card.className = `checklist-section-card ${isExpanded ? 'expanded' : ''}`;
            card.id = `checklist-section-${sec.id}`;
            card.innerHTML = `
                <button class="checklist-section-header" data-section-id="${sec.id}">
                    <div class="checklist-section-title-area">
                        <svg class="checklist-section-chevron" style="width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:2;" viewBox="0 0 24 24">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <div>
                            <div class="checklist-section-name">${sec.id}. ${escapeHtml(sec.name)}</div>
                            <div class="checklist-section-desc">${escapeHtml(sec.description)}</div>
                        </div>
                    </div>
                    <div class="checklist-section-progress-area">
                        <span class="checklist-section-pct" id="sec-pct-${sec.id}">${pct}%</span>
                        <div class="checklist-section-bar-bg">
                            <div class="checklist-section-bar-fill" id="sec-bar-fill-${sec.id}" style="width:${pct}%;"></div>
                        </div>
                        <span style="font-size:11.5px; font-weight:600; color:var(--text-muted);" id="sec-count-${sec.id}">${completedCount} / ${sectionTasks.length}</span>
                    </div>
                </button>
                <div class="checklist-section-content">
                    <div class="checklist-table-wrapper">
                        <table class="checklist-table">
                            <thead>
                                <tr>
                                    <th style="width:50px; text-align:center;">No</th>
                                    <th>Uraian Tugas</th>
                                    <th style="width:120px;">Batas Waktu</th>
                                    <th style="width:180px;">Status</th>
                                    <th>Keterangan</th>
                                    <th style="width:120px; text-align:center;">Media</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

            const tbody = card.querySelector(".checklist-table tbody");
            sectionTasks.forEach(task => {
                const response = stepsData.checklist.find(r => r.id === task.id) || { status: "Tertunda", notes: "", media: [] };
                const isCompleted = response.status === "Selesai";
                const mediaCount = response.media ? response.media.length : 0;
                
                // BATAS WAKTU CALCULATION (Start Date is Day 0)
                let deadlineHtml = '';
                if (aosStartDate) {
                    const maxDays = parseDaysFromTime(task.time);
                    if (maxDays > 0) {
                        const startD = new Date(aosStartDate);
                        startD.setDate(startD.getDate() + maxDays);
                        const formatted = formatDateIndo(startD);
                        deadlineHtml = `
                            <div style="display:flex; flex-direction:column; gap:2px;">
                                <span class="badge-industry" style="font-size:11px; padding:3px 8px; border-radius:4px; font-weight:600; background-color:var(--success-bg); color:var(--success); border:1px solid rgba(254, 141, 22, 0.2); width:fit-content;">${formatted}</span>
                                <span style="font-size:10px; color:var(--text-muted); font-weight:500; margin-left:2px;">${escapeHtml(task.time)}</span>
                            </div>
                        `;
                    } else {
                        deadlineHtml = `<span class="badge-industry" style="font-size:11px; padding:3px 8px; border-radius:4px; font-weight:600;">${escapeHtml(task.time)}</span>`;
                    }
                } else {
                    deadlineHtml = `<span class="badge-industry" style="font-size:11px; padding:3px 8px; border-radius:4px; font-weight:600;">${escapeHtml(task.time)}</span>`;
                }

                const tr = document.createElement("tr");
                tr.id = `checklist-row-${task.id}`;
                if (isCompleted) tr.className = "row-completed";
                
                tr.innerHTML = `
                    <td style="text-align:center; font-weight:600;">${task.id}</td>
                    <td>
                        <div style="font-weight:600; color:var(--text-main); font-size:13px; line-height:1.4;">${escapeHtml(task.text)}</div>
                        <div style="font-size:11px; color:var(--text-muted); margin-top:4px; display:inline-flex; align-items:center; gap:4px;">
                            <svg style="width:12px; height:12px;" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            Referensi: ${escapeHtml(task.ref)}
                        </div>
                    </td>
                    <td>${deadlineHtml}</td>
                    <td>
                        <select class="checklist-status-select" data-task-id="${task.id}">
                            <option value="Tertunda" ${response.status === 'Tertunda' ? 'selected' : ''}>Tertunda</option>
                            <option value="Sedang dikerjakan" ${response.status === 'Sedang dikerjakan' ? 'selected' : ''}>Sedang dikerjakan</option>
                            <option value="Siap direview" ${response.status === 'Siap direview' ? 'selected' : ''}>Siap direview</option>
                            <option value="Selesai" ${response.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" class="checklist-notes-input" data-task-id="${task.id}" value="${escapeHtml(response.notes)}" placeholder="Tambahkan catatan...">
                    </td>
                    <td style="text-align:center;">
                        <button class="checklist-media-btn" id="btn-media-${task.id}" data-task-id="${task.id}" style="position:relative;">
                            <svg style="width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:2;" viewBox="0 0 24 24">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                            ${mediaCount > 0 ? `<span class="checklist-media-badge">${mediaCount}</span>` : ''}
                        </button>
                    </td>
                `;
                
                // Bind select status change
                const selectEl = tr.querySelector(".checklist-status-select");
                selectEl.addEventListener("change", (e) => {
                    const newStatus = e.target.value;
                    response.status = newStatus;
                    if (newStatus === "Selesai") {
                        tr.className = "row-completed";
                    } else {
                        tr.className = "";
                    }
                    saveChecklistData();
                });
                
                // Bind notes input change
                const notesInputEl = tr.querySelector(".checklist-notes-input");
                notesInputEl.addEventListener("change", (e) => {
                    response.notes = e.target.value;
                    saveChecklistData();
                });

                // Bind media button click
                const mediaBtnEl = tr.querySelector(".checklist-media-btn");
                mediaBtnEl.addEventListener("click", () => {
                    openMediaModal(task.id);
                });

                tbody.appendChild(tr);
            });

            // Bind accordion toggle click
            const headerBtn = card.querySelector(".checklist-section-header");
            headerBtn.addEventListener("click", () => {
                const secId = parseInt(headerBtn.getAttribute("data-section-id"));
                if (expandedSections.has(secId)) {
                    expandedSections.delete(secId);
                    card.classList.remove("expanded");
                } else {
                    expandedSections.add(secId);
                    card.classList.add("expanded");
                }
            });

            container.appendChild(card);
        });

        updateOverallChecklistProgress();
    }

    // 12. POPUP MODALS LOGIC (VIDEO GUIDE AND CELEBRATION)
    // Dynamic overlay injector
    function openVideoGuideModal(embedUrl, stepTitle) {
        let modal = document.getElementById("video-guide-modal-dynamic");
        if (!modal) {
            modal = document.createElement("div");
            modal.className = "modal-backdrop";
            modal.id = "video-guide-modal-dynamic";
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-card" style="max-width: 600px;">
                <div class="modal-header">
                    <h3 class="modal-title">Panduan Video: ${stepTitle}</h3>
                    <button class="modal-close-btn" id="btn-close-video-modal">&times;</button>
                </div>
                <div class="modal-body" style="padding:0;">
                    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
                        <iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" src="${embedUrl}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline" id="btn-dismiss-video-modal">Tutup</button>
                </div>
            </div>
        `;

        modal.style.display = "flex";

        const closeBtn = modal.querySelector("#btn-close-video-modal");
        const dismissBtn = modal.querySelector("#btn-dismiss-video-modal");

        const closeModal = () => modal.style.display = "none";
        closeBtn.onclick = closeModal;
        dismissBtn.onclick = closeModal;
    }

    function showCelebrationPopup() {
        let modal = document.getElementById("celebration-modal-dynamic");
        if (!modal) {
            modal = document.createElement("div");
            modal.className = "modal-backdrop";
            modal.id = "celebration-modal-dynamic";
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-card" style="max-width: 480px;">
                <div class="modal-header" style="border:none;">
                    <button class="modal-close-btn" id="btn-close-celebration">&times;</button>
                </div>
                <div class="modal-body celebration-modal">
                    <div class="celebration-icon">🎉</div>
                    <h2 class="celebration-title">Selamat, Perancangan AOS Selesai!</h2>
                    <p class="celebration-desc">Seluruh 14 langkah perancangan sistem bisnis Anda telah selesai diisi dan disimpan secara runtut. Menu <strong>AOS Checklist</strong> kini telah aktif dan terbuka.</p>
                    <button class="btn btn-success" id="btn-view-checklist" style="width:100%; justify-content:center;">Lihat AOS Checklist</button>
                </div>
            </div>
        `;

        modal.style.display = "flex";

        modal.querySelector("#btn-close-celebration").onclick = () => modal.style.display = "none";
        modal.querySelector("#btn-view-checklist").onclick = () => {
            modal.style.display = "none";
            switchTab("aos-checklist");
        };
    }

    // Start Date Picker Event Listeners
    const btnSetStartDate = document.getElementById("btn-set-start-date");
    const btnResetStartDate = document.getElementById("btn-reset-start-date");
    const inputStartDate = document.getElementById("aos-start-date");

    if (btnSetStartDate && inputStartDate) {
        btnSetStartDate.addEventListener("click", function () {
            const chosenVal = inputStartDate.value;
            if (!chosenVal) {
                alert("Silakan pilih tanggal mulai terlebih dahulu.");
                return;
            }
            localStorage.setItem("aos_checklist_start_date", chosenVal);
            renderChecklistPanel();
        });
    }

    if (btnResetStartDate) {
        btnResetStartDate.addEventListener("click", function () {
            if (confirm("Apakah Anda yakin ingin mereset tanggal mulai dan seluruh progres checklist ke kondisi default?")) {
                localStorage.removeItem("aos_checklist_start_date");
                
                // Reset checklist tasks to default pending status
                stepsData.checklist = CHECKLIST_TASKS.map(t => ({
                    id: t.id,
                    section_id: t.section_id,
                    status: "Tertunda",
                    notes: "",
                    media: []
                }));
                localStorage.setItem("aos_checklist_data", JSON.stringify(stepsData.checklist));
                
                renderChecklistPanel();
            }
        });
    }

    // Run initial timeline and locks check
    updateStepTimelineDashboard();
    updateDashboardChecklistProgress();
});






