const CONFIG_STORE = {
    waNumber: "6285810287828",
    header: {
        badge: "Simple Digital Store",
        title: "DHIKZX <span class='gradient-text'>STORE</span>",
        sub: "Pilih kategori layanan digital untuk memulai"
    },
    rules: {
        title: "Dhikzx Store Rules",
        icon: "fa-shield-check",
        duration: 5,
        list: [
            "No Refund jika server sudah dibuat",
            "Dilarang melakukan DDoS dari panel",
            "Garansi Full selama masa aktif",
            "Order = Setuju dengan peraturan"
        ]
    },
    // TEMPAT UBAH PRODUK & HARGA
    categories: {
        "panel-bot": { 
            title: "Panel Bot", 
            icon: "fa-server", 
            desc: "Hosting bot 24/7.", 
            products: [
                { name: "Starter Panel", spec: "RAM 2GB | CPU 100%", price: "Rp 5.000", msg: "Halo Dhikzx, order Starter Panel." },
                { name: "Medium Panel", spec: "RAM 4GB | CPU 150%", price: "Rp 10.000", msg: "Bang, order Medium Panel." },
                { name: "Extreme Panel", spec: "RAM UNLIMITED | CPU 200%", price: "Rp 25.000", msg: "Bang, order Extreme Panel." }
            ] 
        },
        "script-bot": { 
            title: "Script Bot", 
            icon: "fa-code", 
            desc: "Script no error.", 
            products: [
                { name: "Script Pushkontak", spec: "Fitur v15 Terbaru", price: "Rp 15.000", msg: "Minat Script Pushkontak v15 bang." },
                { name: "Script Bot RPG", spec: "Full Game & Fitur", price: "Rp 30.000", msg: "Minat Script Bot RPG nya bang." }
            ] 
        },
        "sewa-bot": { 
            title: "Sewa Bot", 
            icon: "fa-robot", 
            desc: "Bot ke grup kamu.", 
            products: [
                { name: "Sewa 1 Bulan", spec: "1 Grup Premium", price: "Rp 10.000", msg: "Sewa bot 1 bulan ya bang." },
                { name: "Sewa Permanen", spec: "Unlimited Time", price: "Rp 35.000", msg: "Order sewa bot permanen bang." }
            ] 
        },
        "jasa-fix": { 
            title: "Jasa Fix", 
            icon: "fa-tools", 
            desc: "Benerin error bot.", 
            products: [
                { name: "Fix Ringan", spec: "Pengerjaan 30 Menit", price: "Rp 5.000", msg: "Ada error ringan di script saya bang." },
                { name: "Fix Logic", spec: "Pengerjaan 1-3 Jam", price: "Rp 15.000", msg: "Fix logic script dong bang." }
            ] 
        }
    },
    // LIST FAQ (BISA TAMBAH SENDIRI)
    faqs: [
        { q: "Berapa lama proses setelah bayar?", a: "Proses kilat sekitar 5-15 menit saja setelah konfirmasi pembayaran diterima admin." },
        { q: "Metode pembayaran apa saja?", a: "Tersedia DANA, GOPAY, OVO, dan QRIS All Payment (bisa scan pakai apa aja)." },
        { q: "Apakah ada garansi?", a: "Tentu! Semua layanan kami bergaransi penuh selama masa aktif berlangganan." },
        { q: "Bisa bantu setup bot?", a: "Bisa banget! Admin akan bantu pandu cara pasang script ke panel sampai bot kamu online." },
        { q: "Panel kena suspend, gimana?", a: "Langsung chat admin. Jika kesalahan sistem, akan kami ganti dengan yang baru (Full Replace)." },
        { q: "Script-nya bisa dijual lagi?", a: "Tergantung jenis script. Untuk paket 'Resell', kamu bebas menjual kembali script tersebut." },
        { q: "Admin jam berapa online?", a: "Admin aktif jam 08:00 - 22:00 WIB. Diluar jam itu slow respon." }
    ]
};
