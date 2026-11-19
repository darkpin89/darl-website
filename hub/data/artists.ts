// ⭐ SENARAI ARTIS ⭐
// Nak tambah artis baru? Salin satu blok { ... } di bawah, tampal di hujung senarai, dan tukar maklumatnya.
// Letak gambar artis dalam folder public/artists/ (contoh: public/artists/namaartis.jpg).
export type Artist = {
  name: string;
  url: string; // alamat website artis, contoh https://namaartis.langkahsuka.art
  image: string; // gambar dalam public/artists/
  genres: string[];
  bio: string;
  spotify?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
};

export const artists: Artist[] = [
  {
    name: "DARL",
    url: "https://darl.langkahsuka.art",
    image: "/artists/darl.jpg",
    genres: ["Indie", "Psychedelic", "Dream Pop"],
    bio: "Songs for the late nights and daydreams. Inspired by the sounds of the 60s, shoegaze and late night drives.",
    spotify: "https://open.spotify.com/artist/3cQ5kRxMkaMGi2vjz5hQnB",
    youtube: "https://youtube.com/@darl-official",
    instagram: "https://www.instagram.com/darlorigin",
    tiktok: "https://www.tiktok.com/@officialdarl",
  },
];
