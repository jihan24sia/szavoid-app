# Product Requirements Document: Landing Page CRM BrightWash

Dokumen ini disusun untuk AI Coding Agent agar dapat mengerjakan integrasi backend/Supabase pada landing page CRM BrightWash secara bertahap, sederhana, dan sesuai pola kode React yang sudah ada.

## Safety Rules untuk AI Coding Agent

- Dilarang over-engineering. Gunakan logika paling sederhana, mudah dibaca, dan tidak membuat abstraksi rumit.
- Wajib mengikuti code style, penamaan variabel, struktur komponen React, dan pola file yang sudah ada.
- Dilarang menyentuh file, komponen, fungsi, atau layout di luar cakupan integrasi landing page dan Supabase.
- Dilarang mengganti desain visual, susunan section, warna, copywriting utama, dan layout yang sudah ada kecuali dibutuhkan untuk binding data.
- Fokus pekerjaan adalah integrasi backend dan logika Supabase.
- Jangan refactor struktur UI existing secara sepihak.

---

## PRD v1 - Dasar

### Tujuan Produk

Membuat landing page BrightWash tetap tampil seperti desain existing, tetapi data penting dapat dikelola dari Supabase agar halaman tidak sepenuhnya hardcoded.

### Latar Belakang

Landing page saat ini berada di `src/pages/GuestPage.jsx` dan sudah memiliki section utama:

- Navbar
- Hero
- Garansi layanan
- Tentang kami
- Layanan dan harga
- Testimonial
- Kontak
- Footer

Pada PRD v1, fokus hanya memindahkan data yang paling sering berubah ke database.

### Scope v1

Data yang perlu dinamis:

- Daftar layanan dan harga
- Testimonial pelanggan
- Informasi kontak utama

Tidak termasuk:

- Redesign landing page
- Sistem admin CRUD lengkap
- Auth role kompleks
- Upload gambar
- Payment integration
- Tracking order realtime

### User Story

- Sebagai calon pelanggan, saya ingin melihat daftar layanan dan harga terbaru di landing page.
- Sebagai calon pelanggan, saya ingin melihat testimonial pelanggan lain.
- Sebagai calon pelanggan, saya ingin melihat kontak WhatsApp, email, dan alamat workshop.
- Sebagai admin, saya ingin data landing page bisa disiapkan di database Supabase sebelum React mengambil data.

### Functional Requirements

1. Landing page tetap menggunakan route `/`.
2. React mengambil data layanan dari tabel `landing_services`.
3. React mengambil data testimonial dari tabel `landing_testimonials`.
4. React mengambil data kontak dari tabel `landing_contact`.
5. Jika fetch gagal, halaman tetap menampilkan data fallback yang sudah ada agar landing page tidak kosong.
6. Loading state cukup sederhana dan tidak mengubah desain besar halaman.
7. Data hanya dibaca oleh public visitor pada v1.

### Non-Functional Requirements

- Implementasi harus sederhana dan mudah dibaca.
- Query Supabase dibuat langsung di `GuestPage.jsx` atau helper kecil bila sudah ada pola existing.
- Tidak menambah state management global.
- Tidak menambah library baru.
- Tidak mengubah routing.
- Tidak mengubah desain visual secara sepihak.

### Desain Skema Database v1

#### Tabel `landing_services`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID layanan |
| slug | text | unique not null | Kode layanan |
| name | text | not null | Nama layanan |
| description | text | not null | Deskripsi singkat |
| price_label | text | not null | Contoh: Rp 10.000 /Kg |
| duration_label | text | not null | Contoh: 2-3 Hari |
| badge_label | text | nullable | Label badge |
| image_url | text | nullable | URL gambar |
| sort_order | integer | not null default 0 | Urutan tampil |
| is_active | boolean | not null default true | Status tampil |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |

#### Tabel `landing_testimonials`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID testimonial |
| customer_name | text | not null | Nama pelanggan |
| customer_role | text | nullable | Label peran pelanggan |
| message | text | not null | Isi review |
| rating | integer | not null check rating between 1 and 5 | Rating |
| sort_order | integer | not null default 0 | Urutan tampil |
| is_active | boolean | not null default true | Status tampil |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |

#### Tabel `landing_contact`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID kontak |
| whatsapp_number | text | not null | Nomor WhatsApp |
| email | text | not null | Email support |
| address | text | not null | Alamat workshop |
| operational_weekday | text | nullable | Jam kerja Senin-Sabtu |
| operational_holiday | text | nullable | Jam libur |
| is_active | boolean | not null default true | Status kontak aktif |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |

### Aturan RLS v1

Semua tabel landing page bersifat public read, tetapi tidak boleh public write.

Policy:

- Enable RLS untuk semua tabel.
- Allow `select` untuk role `anon` dan `authenticated` ketika `is_active = true`.
- Tidak membuat policy insert/update/delete untuk `anon`.
- Operasi tulis dilakukan lewat SQL editor/Supabase service role, bukan dari landing page.

### Acceptance Criteria v1

- Landing page tetap dapat dibuka di `/`.
- Data layanan tampil dari Supabase jika tersedia.
- Data testimonial tampil dari Supabase jika tersedia.
- Data kontak tampil dari Supabase jika tersedia.
- Fallback data existing tampil jika Supabase error atau tabel kosong.
- Tidak ada perubahan visual besar.

### Hasil Evaluasi v1

PRD v1 menghasilkan baseline kebutuhan integrasi data public-read untuk landing page CRM BrightWash. Scope sengaja dibatasi agar AI Coding Agent dapat mengeksekusi perubahan backend terlebih dahulu tanpa mengubah desain.

### Bukti Commit v1

Akan diisi setelah commit PRD v1 dibuat.

