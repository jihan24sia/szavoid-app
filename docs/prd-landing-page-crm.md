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

Commit PRD v1: `e3fb238` - `docs: add CRM landing page PRD v1`

---

## PRD v2 - Evaluasi Menengah

### Tujuan Evaluasi v2

PRD v2 memperbaiki PRD v1 dengan menambahkan kebutuhan pengelolaan konten landing page oleh admin internal CRM, tanpa membuat dashboard baru yang besar. Fokus tetap pada skema Supabase dan instruksi integrasi React yang sederhana.

### Masalah yang Ditemukan dari v1

- PRD v1 sudah cukup untuk public-read, tetapi belum menjelaskan siapa yang boleh mengelola data.
- Belum ada struktur untuk headline hero, nilai utama, dan statistik ringkas yang tampil di landing page.
- Belum ada rekomendasi indexing untuk data yang sering diurutkan.
- Belum ada arahan audit sederhana untuk perubahan data.

### Scope Tambahan v2

Data tambahan yang perlu dinamis:

- Konten hero landing page
- Highlight/fitur utama pada section tentang kami
- Statistik ringkas seperti jumlah pakaian, user aktif, dan kepuasan
- Audit kolom minimal untuk mengetahui siapa yang terakhir mengubah data

Tidak termasuk:

- Page builder
- Multi-tenant CRM
- Workflow approval konten
- Sistem versioning konten
- Storage upload gambar

### User Story Tambahan

- Sebagai admin CRM, saya ingin mengubah headline hero dan CTA tanpa mengedit file React.
- Sebagai admin CRM, saya ingin mengatur fitur unggulan BrightWash yang tampil di section tentang kami.
- Sebagai admin CRM, saya ingin mengatur statistik ringkas agar sesuai data bisnis terbaru.
- Sebagai developer, saya ingin skema data cukup eksplisit sehingga binding React tidak ambigu.

### Functional Requirements Tambahan

1. Landing page mengambil data hero dari tabel `landing_hero`.
2. Landing page mengambil highlight fitur dari tabel `landing_features`.
3. Landing page mengambil statistik ringkas dari tabel `landing_stats`.
4. Semua data yang tampil ke public harus memiliki `is_active = true`.
5. Data yang memiliki urutan tampil wajib memakai `sort_order`.
6. React tetap menyediakan fallback local untuk setiap section.
7. Tidak perlu membuat UI admin baru jika belum diminta. Data dapat dikelola melalui Supabase Table Editor atau SQL.
8. Jika admin CRUD sudah ada di project, AI Coding Agent boleh memakai pola existing, tetapi tetap tidak boleh redesign landing page.

### Non-Functional Requirements Tambahan

- Query per section boleh dibuat terpisah agar mudah dibaca.
- Hindari query nested kompleks.
- Tidak menggunakan stored procedure kecuali benar-benar dibutuhkan.
- Komponen `GuestPage.jsx` tidak boleh dipecah besar-besaran pada fase ini.
- Jika dibuat helper fetch, cukup satu file kecil misalnya `src/pages/landingPageData.js` atau mengikuti pola existing.

### Desain Skema Database Tambahan v2

#### Tabel `landing_hero`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID hero |
| eyebrow | text | nullable | Label kecil di atas headline |
| headline | text | not null | Headline utama |
| highlighted_headline | text | nullable | Teks highlight |
| description | text | not null | Deskripsi hero |
| primary_cta_label | text | not null default 'BOOK NOW' | Label CTA utama |
| primary_cta_path | text | not null default '/login' | Path CTA utama |
| secondary_cta_label | text | not null default 'EXPLORE NOW' | Label CTA kedua |
| secondary_cta_anchor | text | not null default '#layanan' | Anchor CTA kedua |
| hero_image_url | text | nullable | URL gambar hero |
| price_start_label | text | nullable | Contoh: Rp 7.000 /Kg |
| rating_label | text | nullable | Contoh: 4.9 |
| rating_source_label | text | nullable | Contoh: From 500+ Google Business |
| is_active | boolean | not null default true | Status aktif |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |
| updated_by | uuid | nullable references auth.users(id) | User terakhir update |

#### Tabel `landing_features`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID feature |
| title | text | not null | Judul feature |
| description | text | not null | Deskripsi feature |
| icon_key | text | nullable | Kode icon yang dipetakan di React |
| color_key | text | nullable | Kode warna existing yang dipetakan di React |
| sort_order | integer | not null default 0 | Urutan tampil |
| is_active | boolean | not null default true | Status tampil |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |
| updated_by | uuid | nullable references auth.users(id) | User terakhir update |

#### Tabel `landing_stats`

| Kolom | Tipe Data | Constraint | Keterangan |
| --- | --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() | ID statistik |
| label | text | not null | Label statistik |
| value_label | text | not null | Nilai siap tampil, contoh: 15K+ |
| sort_order | integer | not null default 0 | Urutan tampil |
| is_active | boolean | not null default true | Status tampil |
| created_at | timestamptz | not null default now() | Waktu dibuat |
| updated_at | timestamptz | not null default now() | Waktu update |
| updated_by | uuid | nullable references auth.users(id) | User terakhir update |

### Index v2

Tambahkan index ringan:

- `landing_services (is_active, sort_order)`
- `landing_testimonials (is_active, sort_order)`
- `landing_features (is_active, sort_order)`
- `landing_stats (is_active, sort_order)`
- `landing_hero (is_active)`
- `landing_contact (is_active)`

### Aturan RLS v2

Public visitor:

- `anon` dan `authenticated` boleh `select` data aktif.
- `anon` tidak boleh `insert`, `update`, atau `delete`.

Admin:

- Role admin disarankan ditentukan melalui tabel `profiles` existing jika sudah ada.
- Jika belum ada tabel role existing, gunakan klaim JWT/app metadata Supabase seperti `role = 'admin'`.
- Admin boleh `select`, `insert`, `update`, dan `delete` pada tabel landing page.
- Validasi detail role admin harus mengikuti pola auth yang sudah ada di project.

Contoh policy konseptual:

- Public read: `using (is_active = true)`
- Admin write: `using (auth.jwt() ->> 'role' = 'admin') with check (auth.jwt() ->> 'role' = 'admin')`

Catatan: AI Coding Agent wajib menyesuaikan policy admin dengan pola role existing di project, bukan membuat sistem role baru bila sudah ada.

### Acceptance Criteria v2

- PRD menjelaskan data hero, layanan, feature, stats, testimonial, dan kontak.
- Semua tabel public-read memiliki `is_active`.
- Semua list memiliki `sort_order`.
- Ada aturan admin write yang tetap fleksibel mengikuti pola auth existing.
- React tetap mempertahankan fallback data.
- Tidak ada instruksi redesign.

### Hasil Evaluasi v2

PRD v2 meningkatkan v1 dari sekadar public data binding menjadi rancangan konten landing page yang dapat dikelola admin secara sederhana. Evaluasi ini tetap menjaga batasan agar AI Coding Agent tidak membuat CMS besar atau merombak visual.

### Bukti Commit v2

Akan diisi setelah commit PRD v2 dibuat.
