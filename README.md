# DARL — laman web band

Alamat: https://darl.langkahsuka.art

Folder `hub/` = halaman utama langkahsuka.art (projek Vercel berasingan, Root Directory `hub`). Lihat `hub/README.md`.

Next.js one-page site. Semua kandungan boleh ubah dalam 2 fail:

- `data/site.ts` — link Spotify/YouTube/Instagram/TikTok, album Spotify, video YouTube, link donation Sociabuzz, email booking, teks About, link mailing list


Gambar dalam `public/images/` (hero.jpg = gambar utama, og.jpg = preview bila link dikongsi di WhatsApp/IG).

## Jalankan di komputer
```
npm install
npm run dev
```
Buka http://localhost:3000

## Deploy ke Vercel
1. Push folder ini ke repo GitHub.
2. Vercel → Add New → Project → pilih repo → Deploy (tiada setting perlu ubah).
3. Project → Settings → Domains → tambah domain awak dan ikut arahan DNS.
4. Tukar `url` dalam `data/site.ts` kepada domain sebenar.
