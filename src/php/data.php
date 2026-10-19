<?php
// 1. PHP Variable & Data Array (Task 01 & 02)
$appInfo = [
    "appName" => "TapEat",
    "tagline" => "Smart Campus Canteen System",
    "canteenLocation" => "Kantin Utama UMM",
    "statusSystem" => "active"
];

// Array Data Menu Makanan (Server-Side Data Source)
$menuItems = [
    [
        "key" => "nasi-goreng",
        "title" => "Nasi Goreng Ayam",
        "stand" => "Kantin Ibu Siti - Stand 01",
        "priceNum" => 12000,
        "stock" => 15,
        "category" => "makanan-berat",
        "img" => "Assets/images/nasiGoreng.jpg",
        "isAvailable" => true
    ],
    [
        "key" => "mie-ayam",
        "title" => "Mie Ayam Spesial",
        "stand" => "Kantin Mie Sedap - Stand 02",
        "priceNum" => 10000,
        "stock" => 0, // Out of stock untuk pengujian Conditional
        "category" => "makanan-berat",
        "img" => "Assets/images/nasiKuning.jpg",
        "isAvailable" => false
    ],
    [
        "key" => "ayam-geprek",
        "title" => "Ayam Geprek Sambal Matah",
        "stand" => "Kantin Mbak Rini - Stand 03",
        "priceNum" => 15000,
        "stock" => 20,
        "category" => "makanan-berat",
        "img" => "Assets/images/nasiAyamKatsu.jpg",
        "isAvailable" => true
    ],
    [
        "key" => "jus-buah",
        "title" => "Jus Alpukat / Mangga",
        "stand" => "Depot Juice Segar - Stand 07",
        "priceNum" => 8000,
        "stock" => 30,
        "category" => "minuman",
        "img" => "Assets/images/EstehManis.jpg",
        "isAvailable" => true
    ]
];

// 2. PHP Function Helper (Task 02 & Checklist)
function formatRupiah($angka) {
    return "Rp " . number_format($angka, 0, ',', '.');
}

function renderStockBadge($stock, $isAvailable) {
    // PHP Conditional
    if (!$isAvailable || $stock <= 0) {
        return '<span class="stock" style="background:#fee2e2; color:#dc2626;">Stok Habis</span>';
    }
    
    if ($stock < 5) {
        return '<span class="stock" style="background:#fef3c7; color:#d97706;">Stok Menipis (' . $stock . ')</span>';
    }

    return '<span class="stock">Stok: ' . $stock . '</span>';
}
?>