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

Commit PRD v2: `42dc110` - `docs: expand CRM landing page PRD v2`

---

## PRD v3 - Komplit Landing Page untuk CRM

### Tujuan Evaluasi v3

PRD v3 adalah versi final untuk diberikan kepada AI Coding Agent. Versi ini menyatukan kebutuhan konsep, skema database, RLS, urutan eksekusi, acceptance criteria, dan batasan implementasi React agar landing page BrightWash terhubung ke Supabase tanpa merusak desain existing.

### Ringkasan Produk

BrightWash adalah landing page untuk CRM layanan laundry premium. Landing page berfungsi sebagai halaman publik untuk calon pelanggan, sedangkan data kontennya disiapkan dari Supabase agar admin dapat memperbarui informasi bisnis tanpa mengedit file React.

Halaman existing yang menjadi target:

- File utama: `src/pages/GuestPage.jsx`
- Route utama: `/`
- Supabase client: `src/pages/supabaseClient.js`
- Pola visual: dark premium landing page dengan section hero, layanan, testimonial, kontak, dan footer.

### Sasaran Bisnis

- Membuat landing page lebih mudah dipelihara.
- Mengurangi hardcoded content untuk data bisnis yang sering berubah.
- Menyiapkan struktur database yang aman untuk public-read.
- Memberikan instruksi jelas agar AI Coding Agent mengeksekusi SQL terlebih dahulu sebelum binding React.

### Sasaran Pengguna

- Visitor publik: melihat informasi layanan, harga, testimonial, kontak, dan CTA login/order.
- Admin CRM: mengelola konten landing page melalui Supabase Table Editor atau mekanisme admin existing.
- Developer/AI Coding Agent: mengintegrasikan data Supabase ke React dengan perubahan minimal.

### Prinsip Implementasi

- Keep it simple.
- Jangan membuat CMS baru kecuali diminta.
- Jangan mengubah desain visual existing.
- Jangan memecah komponen besar jika tidak perlu.
- Gunakan fallback data agar halaman tetap hidup saat Supabase belum siap.
- Gunakan query Supabase yang eksplisit dan mudah dibaca.
- Mapping icon dan warna dilakukan di React dengan whitelist key sederhana, bukan menyimpan JSX di database.

### Scope Final v3

Section yang harus bisa membaca data dari Supabase:

1. Hero
2. Guarantee banner
3. About/feature cards
4. Operational pillars
5. Statistics
6. Services/pricing
7. Testimonials/reviews
8. Contact and operational hours
9. Footer legal/short copy

### Out of Scope v3

- Pembuatan dashboard admin baru.
- Sistem approval konten.
- Upload file ke Supabase Storage.
- Payment gateway.
- Order tracking realtime.
- Refactor UI.
- Migrasi seluruh CRM ke Supabase.

### Functional Requirements Final

1. AI Coding Agent harus membuat SQL DDL dan RLS terlebih dahulu.
2. AI Coding Agent harus menjalankan SQL tersebut di Supabase sebelum menulis kode React.
3. React mengambil data landing page dari Supabase.
4. React tetap menggunakan fallback data existing jika:
   - tabel belum ada,
   - data kosong,
   - koneksi Supabase gagal,
   - policy RLS belum benar.
5. Semua list harus diurutkan berdasarkan `sort_order` ascending.
6. Semua data publik harus difilter `is_active = true`.
7. Gambar boleh tetap memakai asset lokal existing jika `image_url` kosong.
8. Icon harus dipilih dari mapping `icon_key` yang aman di React.
9. Warna harus dipilih dari mapping `color_key` yang aman di React.
10. CTA tetap mengarah ke route existing seperti `/login` atau anchor section existing.
11. Tidak boleh mengganti route `/`.
12. Tidak boleh mengubah copywriting besar jika data Supabase kosong.

### Data Fetching Requirements

Query minimal:

- `landing_hero`: ambil 1 row aktif terbaru.
- `landing_guarantee`: ambil 1 row aktif.
- `landing_features`: ambil rows aktif order by `sort_order`.
- `landing_pillars`: ambil rows aktif order by `sort_order`.
- `landing_stats`: ambil rows aktif order by `sort_order`.
- `landing_services`: ambil rows aktif order by `sort_order`.
- `landing_testimonials`: ambil rows aktif order by `sort_order`.
- `landing_contact`: ambil 1 row aktif.
- `landing_footer`: ambil 1 row aktif.

Error handling:

- Gunakan `try/catch` atau pengecekan `{ error }`.
- Log error secukupnya dengan `console.error`.
- Jangan tampilkan error teknis ke visitor.
- Jangan membuat loading blocking full page bila fallback sudah tersedia.

### Desain Skema Database Final v3

#### Tabel `landing_hero`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| eyebrow | text | nullable |
| headline | text | not null |
| highlighted_headline | text | nullable |
| description | text | not null |
| primary_cta_label | text | not null default 'BOOK NOW' |
| primary_cta_path | text | not null default '/login' |
| secondary_cta_label | text | not null default 'EXPLORE NOW' |
| secondary_cta_anchor | text | not null default '#layanan' |
| hero_image_url | text | nullable |
| price_start_label | text | nullable |
| rating_label | text | nullable |
| rating_source_label | text | nullable |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_guarantee`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| title | text | not null |
| description | text | not null |
| cta_label | text | not null default 'Order Sekarang' |
| cta_path | text | not null default '/login' |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_features`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| title | text | not null |
| description | text | not null |
| icon_key | text | nullable |
| color_key | text | nullable |
| sort_order | integer | not null default 0 |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_pillars`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| title | text | not null |
| description | text | not null |
| icon_key | text | nullable |
| color_key | text | nullable |
| sort_order | integer | not null default 0 |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_stats`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| label | text | not null |
| value_label | text | not null |
| sort_order | integer | not null default 0 |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_services`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| slug | text | unique not null |
| name | text | not null |
| description | text | not null |
| price_label | text | not null |
| duration_label | text | not null |
| badge_label | text | nullable |
| image_url | text | nullable |
| color_key | text | nullable |
| sort_order | integer | not null default 0 |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_testimonials`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| customer_name | text | not null |
| customer_role | text | nullable |
| message | text | not null |
| rating | integer | not null check (rating between 1 and 5) |
| sort_order | integer | not null default 0 |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_contact`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| whatsapp_number | text | not null |
| whatsapp_url | text | nullable |
| email | text | not null |
| address | text | not null |
| operational_weekday | text | nullable |
| operational_holiday | text | nullable |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

#### Tabel `landing_footer`

| Kolom | Tipe Data | Constraint |
| --- | --- | --- |
| id | uuid | primary key default gen_random_uuid() |
| brand_name | text | not null default 'BRIGHTWASH' |
| description | text | not null |
| security_note | text | nullable |
| copyright_label | text | nullable |
| privacy_label | text | nullable default 'Privacy Policy' |
| terms_label | text | nullable default 'Terms of Service' |
| is_active | boolean | not null default true |
| created_at | timestamptz | not null default now() |
| updated_at | timestamptz | not null default now() |
| updated_by | uuid | nullable references auth.users(id) |

### SQL DDL Konseptual

AI Coding Agent wajib menghasilkan SQL final sendiri berdasarkan skema di atas. SQL harus mencakup:

- `create extension if not exists pgcrypto;`
- `create table if not exists ...`
- `alter table ... enable row level security;`
- index untuk `is_active` dan `sort_order`
- policy public select
- policy admin write
- trigger `updated_at` bila diperlukan
- seed data minimal sesuai konten existing agar halaman langsung terisi

### RLS Final

Untuk setiap tabel landing:

Public select:

```sql
create policy "Public can read active landing content"
on <table_name>
for select
to anon, authenticated
using (is_active = true);
```

Admin write:

```sql
create policy "Admin can manage landing content"
on <table_name>
for all
to authenticated
using (auth.jwt() ->> 'role' = 'admin')
with check (auth.jwt() ->> 'role' = 'admin');
```

Catatan penting:

- Jika project sudah memakai tabel role/profile, policy admin harus menyesuaikan pola existing.
- Jika belum ada role admin, jangan membuat auth system baru di React hanya untuk PRD ini.
- Jangan memberi write access ke `anon`.
- Jangan memakai service role key di frontend.

### Seed Data Minimal

AI Coding Agent harus membuat seed minimal untuk:

- 1 row `landing_hero`
- 1 row `landing_guarantee`
- 4 row `landing_features`
- 3 row `landing_stats`
- 6 row `landing_services`
- 10 row `landing_testimonials`
- 1 row `landing_contact`
- 1 row `landing_footer`

Isi seed boleh mengacu pada konten existing di `GuestPage.jsx` agar visual dan pesan tetap konsisten.

### Panduan Implementasi React

1. Import `supabase` dari `src/pages/supabaseClient.js`.
2. Tambahkan state lokal untuk data landing page, memakai fallback dari data existing.
3. Gunakan `useEffect` untuk fetch data saat halaman dimount.
4. Fetch data section secara sederhana.
5. Mapping hasil Supabase ke format yang sudah dipakai render existing.
6. Gunakan `image_url || assetLokal`.
7. Gunakan `icon_key` dan `color_key` melalui object mapping lokal.
8. Jangan mengubah struktur visual section kecuali mengganti value hardcoded menjadi variabel.
9. Jangan menghapus CTA existing.
10. Jalankan lint/build setelah implementasi.

### Acceptance Criteria Final

- SQL DDL berhasil dieksekusi di Supabase.
- RLS aktif untuk semua tabel.
- Public visitor hanya bisa membaca data aktif.
- Public visitor tidak bisa menulis data.
- Admin authenticated dapat mengelola data sesuai policy project.
- Landing page tetap tampil jika Supabase error.
- Landing page menggunakan data Supabase jika tersedia.
- Tidak ada perubahan layout besar.
- Tidak ada service role key di frontend.
- Build React berhasil.

### Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| RLS terlalu ketat | Data tidak tampil | Wajib fallback dan cek policy select |
| RLS terlalu longgar | Public bisa edit data | Tidak ada policy write untuk anon |
| Tabel kosong | Section kosong | Seed data minimal dan fallback |
| Icon key tidak valid | UI rusak | Mapping icon dengan default icon |
| URL gambar kosong | Gambar tidak tampil | Gunakan asset lokal existing |
| Role admin belum ada | Admin write gagal | Sesuaikan dengan auth pattern existing |

### Hasil Evaluasi v3

PRD v3 menjadi dokumen final yang siap diberikan ke AI Coding Agent. Versi ini memuat kebutuhan konseptual, batasan strict, skema database lengkap, RLS, seed data, instruksi eksekusi SQL, dan panduan React yang tetap menjaga desain landing page CRM BrightWash.

### Bukti Commit v3

Akan diisi setelah commit PRD v3 dibuat.

---

## Instruksi Khusus untuk Qoder / AI Coding Agent

Sebelum menulis atau mengubah kode React, Qoder wajib:

1. Membaca PRD ini sampai selesai.
2. Menghasilkan SQL DDL lengkap berdasarkan skema database PRD v3.
3. Menghasilkan SQL RLS lengkap untuk semua tabel landing page.
4. Mengeksekusi SQL DDL dan RLS tersebut di Supabase terlebih dahulu.
5. Menambahkan seed data minimal agar landing page memiliki data awal.
6. Memverifikasi bahwa query `select` public terhadap data aktif berhasil.
7. Baru setelah database siap, menyesuaikan kode React di `GuestPage.jsx` agar membaca data dari skema tersebut.
8. Menjaga desain visual existing dan hanya mengganti hardcoded data menjadi data binding Supabase.
9. Menjalankan lint/build setelah perubahan React.
10. Melaporkan hasil eksekusi SQL, hasil build, dan file yang diubah.
