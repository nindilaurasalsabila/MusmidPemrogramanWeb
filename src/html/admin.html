<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise Command Center - TapEat Admin</title>
    <style>
        :root { 
            --primary: #dc2626; 
            --primary-hover: #b91c1c; 
            --bg-body: #f1f5f9; 
            --surface: #ffffff; 
            --text-main: #0f172a; 
            --text-muted: #64748b; 
            --border: #e2e8f0;
            --success: #10b981;
            --warning: #f59e0b;
        }

        body { 
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; 
            background-color: var(--bg-body); 
            color: var(--text-main); 
            margin: 0; 
            padding: 0; 
            display: flex; 
            min-height: 100vh; 
        }
        
        /* Sidebar Enterprise Modern */
        aside { 
            width: 280px; 
            background: var(--surface); 
            border-right: 1px solid var(--border); 
            display: flex; 
            flex-direction: column; 
            padding: 28px; 
            position: fixed; 
            height: 100%; 
            box-sizing: border-box; 
            z-index: 50;
        }
        .brand-box { display: flex; align-items: center; gap: 12px; margin-bottom: 36px; }
        .brand-logo { background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; }
        .brand-title h2 { color: var(--text-main); font-size: 1.2rem; font-weight: 700; margin: 0; }
        .brand-title span { font-size: 0.75rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }

        aside nav a { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
            padding: 12px 16px; 
            color: var(--text-muted); 
            text-decoration: none; 
            font-weight: 600; 
            font-size: 0.95rem;
            border-radius: 10px; 
            margin-bottom: 6px; 
            transition: all 0.2s ease; 
        }
        aside nav a.active, aside nav a:hover { background-color: #fef2f2; color: var(--primary); }
        aside .sidebar-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border); }

        /* Main Content Workspace */
        .main-content { margin-left: 280px; flex: 1; padding: 36px 48px; box-sizing: border-box; }
        
        /* Top Navigation Header */
        .top-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; background: var(--surface); padding: 18px 28px; border-radius: 14px; border: 1px solid var(--border); box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .top-header h1 { font-size: 1.4rem; font-weight: 700; margin: 0; color: var(--text-main); }
        .top-header p { color: var(--text-muted); margin: 2px 0 0 0; font-size: 0.88rem; }
        
        .admin-profile-badge { display: flex; align-items: center; gap: 12px; background: #f8fafc; padding: 6px 14px 6px 6px; border-radius: 30px; border: 1px solid var(--border); }
        .admin-avatar { width: 34px; height: 34px; background: #cbd5e1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #475569; font-size: 0.9rem; }
        .admin-info span { display: block; font-size: 0.85rem; font-weight: 600; line-height: 1.2; }
        .admin-info small { color: var(--text-muted); font-size: 0.75rem; }

        /* Advanced Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 32px; }
        .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 22px; box-shadow: 0 2px 4px rgba(0,0,0,0.01); position: relative; overflow: hidden; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--primary); }
        .stat-card.success::before { background: var(--success); }
        .stat-card.warning::before { background: var(--warning); }
        
        .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .stat-header h4 { margin: 0; color: var(--text-muted); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .stat-badge { font-size: 0.75rem; padding: 2px 8px; border-radius: 20px; font-weight: 600; background: #dcfce7; color: #166534; }
        .stat-card p { margin: 0; font-size: 1.7rem; font-weight: 800; color: var(--text-main); }
        .stat-footer { margin-top: 8px; font-size: 0.8rem; color: var(--text-muted); }

        /* Card Box & Enterprise Tables */
        .card-box { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; box-shadow: 0 2px 6px rgba(0,0,0,0.01); margin-bottom: 28px; }
        .card-header-flex { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .card-box h3 { margin: 0; font-size: 1.1rem; font-weight: 700; color: var(--text-main); }
        
        .data-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem; }
        .data-table th { background-color: #f8fafc; padding: 14px 18px; border-bottom: 2px solid var(--border); font-weight: 600; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .data-table td { padding: 16px 18px; border-bottom: 1px solid var(--border); color: var(--text-main); vertical-align: middle; }
        .data-table tr:hover { background-color: #f8fafc; }

        /* Badges & Buttons */
        .status-badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 0.78rem; font-weight: 600; }
        .status-badge.pending { background: #fef3c7; color: #92400e; }
        .status-badge.active { background: #dcfce7; color: #166534; }
        .status-badge.role { background: #e0f2fe; color: #0369a1; }

        .btn-action { padding: 6px 14px; border-radius: 8px; font-weight: 600; font-size: 0.85rem; cursor: pointer; border: none; transition: filter 0.2s; }
        .btn-action:hover { filter: brightness(0.9); }
        .btn-acc { background-color: var(--success); color: white; margin-right: 6px; }
        .btn-reject { background-color: var(--primary); color: white; }

        /* Toast Notification */
        #toast-notification { visibility: hidden; min-width: 280px; background-color: #0f172a; color: #fff; text-align: center; border-radius: 10px; padding: 14px 22px; position: fixed; z-index: 1000; right: 30px; bottom: 30px; font-size: 0.92rem; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border-left: 4px solid var(--success); }
        #toast-notification.show { visibility: visible; animation: fadein 0.3s, fadeout 0.3s 2.2s; }
        @keyframes fadein { from {bottom: 0; opacity: 0;} to {bottom: 30px; opacity: 1;} }
        @keyframes fadeout { from {bottom: 30px; opacity: 1;} to {bottom: 0; opacity: 0;} }
    </style>
</head>
<body>

    <!-- Sidebar Enterprise -->
    <aside>
        <div class="brand-box">
            <div class="brand-logo">TE</div>
            <div class="brand-title">
                <h2>TapEat</h2>
                <span>Enterprise Admin</span>
            </div>
        </div>
        <nav>
            <a href="admin.html" class="active">🛡️ Command Center</a>
            <a href="admin.html">📊 Monitoring Server</a>
            <a href="admin.html">⚙️ Pengaturan Sistem</a>
        </nav>
        <div class="sidebar-footer">
            <a href="login.html" style="color: var(--primary);">🚪 Keluar Akun</a>
        </div>
    </aside>

    <!-- Workspace Utama Admin -->
    <main class="main-content">

        <!-- Top Header Banner -->
        <div class="top-header">
            <div>
                <h1>Command Center Administrator</h1>
                <p>Sistem Pemantauan Terpadu Ekosistem Pre-Order Kantin Kampus UMM</p>
            </div>
            <div class="admin-profile-badge">
                <div class="admin-avatar">AD</div>
                <div class="admin-info">
                    <span>Super Administrator</span>
                    <small style="color: var(--success);">● Live & Secure</small>
                </div>
            </div>
        </div>

        <!-- Metrik Statistik Berstandar Dashboard Korporat -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <h4>Total Pengguna Aktif</h4>
                    <span class="stat-badge">+12% minggu ini</span>
                </div>
                <p>128 Akun</p>
                <div class="stat-footer">120 Mahasiswa Pembeli | 8 Mitra Stand</div>
            </div>
            <div class="stat-card success">
                <div class="stat-header">
                    <h4>Volume Transaksi Harian</h4>
                    <span class="stat-badge">Normal</span>
                </div>
                <p>Rp 1.450.000</p>
                <div class="stat-footer">Tercatat melalui Server Gateway</div>
            </div>
            <div class="stat-card warning">
                <div class="stat-header">
                    <h4>Antrean Verifikasi</h4>
                    <span class="stat-badge" style="background: #fef3c7; color: #92400e;">Butuh Aksi</span>
                </div>
                <p>2 Item</p>
                <div class="stat-footer">1 Menu Baru & 1 Pengajuan Stand</div>
            </div>
        </div>

        <!-- Kelola Permintaan Penjual (Acc / Tolak) dengan Desain Tabel Profesional -->
        <div class="card-box">
            <div class="card-header-flex">
                <h3>Kelola Permintaan Penjual (Menu & Stand Baru)</h3>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Menunggu Persetujuan Anda</span>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Pemohon / Mitra Stand</th>
                            <th>Jenis Permintaan</th>
                            <th>Detail Pengajuan Sistem</th>
                            <th>Status Pengajuan</th>
                            <th>Aksi Verifikasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 600;">Stand 02 (Endyul)</td>
                            <td>Tambah Menu Baru</td>
                            <td>Es Jeruk Manis (Rp 5.000 | Stok: 30)</td>
                            <td><span class="status-badge pending">Menunggu Acc</span></td>
                            <td>
                                <button class="btn-action btn-acc" onclick="showToast('✓ Menu baru berhasil di-Acc & dipublikasikan!')">Acc</button>
                                <button class="btn-action btn-reject" onclick="showToast('Permintaan menu ditolak.')">Tolak</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600;">Nindi Laura (Pembeli)</td>
                            <td>Pengajuan Buka Stand</td>
                            <td>Kantin Fakultas Teknik (Stand 06)</td>
                            <td><span class="status-badge pending">Menunggu Verifikasi</span></td>
                            <td>
                                <button class="btn-action btn-acc" onclick="showToast('✓ Stand baru berhasil di-Acc & role diperbarui!')">Acc</button>
                                <button class="btn-action btn-reject" onclick="showToast('Pengajuan stand ditolak.')">Tolak</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Manajemen Akses Seluruh Pengguna -->
        <div class="card-box">
            <div class="card-header-flex">
                <h3>Manajemen Akses & Kontrol Pengguna</h3>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Database Pengguna Terenkripsi</span>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ID User</th>
                            <th>Nama Lengkap</th>
                            <th>Peran Sistem</th>
                            <th>Status Akun</th>
                            <th>Aksi Kontrol Keamanan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#USR-20241</td>
                            <td style="font-weight: 600;">Nindi Laura Salsabila</td>
                            <td><span class="status-badge role">Pembeli (Mahasiswa)</span></td>
                            <td><span class="status-badge active">Aktif</span></td>
                            <td><button class="btn-action btn-reject" onclick="showToast('Akun berhasil diblokir dari sistem!')">Blokir Akses</button></td>
                        </tr>
                        <tr>
                            <td>#USR-20242</td>
                            <td style="font-weight: 600;">Ibu Siti</td>
                            <td><span class="status-badge role" style="background: #fef2f2; color: #dc2626;">Penjual (Stand 01)</span></td>
                            <td><span class="status-badge active">Aktif</span></td>
                            <td><button class="btn-action btn-reject" onclick="showToast('Mitra stand berhasil ditangguhkan!')">Blokir Akses</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </main>

    <!-- Elemen Toast Notifikasi Modern -->
    <div id="toast-notification">Notifikasi Sistem Berhasil</div>

    <script>
        function showToast(message) {
            const toast = document.getElementById('toast-notification');
            toast.textContent = message;
            toast.className = "show";
            setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2200);
        }
    </script>
</body>
</html>