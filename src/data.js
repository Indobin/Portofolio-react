import HeroImage from "/assets/profil.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools3 from "/assets/tools/reactjs.png";
import Tools2 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/git.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/fastApi.png";
import Tools10 from "/assets/tools/flutter.png";
import Tools11 from "/assets/tools/php.png";
import Tools12 from "/assets/tools/postgres.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Laravel PHP",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Git",
    ket: "Version Control",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "FastAPI",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Flutter",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Php",
    ket: "Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Postgres",
    ket: "Database",
    dad: "1200",
  }
];

import Proyek1 from "/assets/proyek/mobile.png";
import Proyek2 from "/assets/proyek/hydrosmart.png";
import Proyek3 from "/assets/proyek/sanocare.png";
import Proyek4 from "/assets/proyek/portofolio.png";
import Proyek5 from "/assets/proyek/pengaduan.png";
import Proyek6 from "/assets/proyek/launta.png";

export const listProyek = [
  {
  id: 1,
  gambar: Proyek1,
  nama: "Aplikasi Pengelolaan Event",
  desk: "Aplikasi mobile berbasis Flutter untuk membantu pengguna membuat, mengelola, dan memantau berbagai event secara real-time, terintegrasi dengan Supabase dan FastAPI.",
  tools: ["Dart", "Flutter", "Supabase", "FastApi"],
  dad: "200",
},
{
  id: 2,
  gambar: Proyek2,
  nama: "Website Monitoring Tumbuhan",
  desk: "Sebuah platform berbasis web yang digunakan untuk memantau pertumbuhan dan kondisi tanaman secara berkala dengan dashboard interaktif dan integrasi database real-time serta Iot.",
  tools: ["Laravel", "TailwindCSS", "Javascript", "Supabase"],
  dad: "300",
},
{
  id: 3,
  gambar: Proyek3,
  nama: "Website Monitoring Diabate",
  desk: "Website yang dirancang untuk membantu penderita prediabetes dan diabetes dalam memantau kondisi kesehatan mereka, dengan penyimpanan data aman dan antarmuka intuitif.",
  tools: ["Laravel", "TailwindCSS", "Javascript", "PostgreSQL"],
  dad: "400",
},
{
  id: 4,
  gambar: Proyek4,
  nama: "Website Portofolio",
  desk: "Website pribadi untuk menampilkan karya, pengalaman, dan keahlian saya dalam bidang pemrograman, dirancang dengan tampilan modern dan responsif.",
  tools: ["html", "TailwindCSS", "Javascript"],
  dad: "500",
},
{
  id: 5,
  gambar: Proyek5,
  nama: "Website Pengaduan Masyarakat",
  desk: "Platform online untuk masyarakat menyampaikan laporan atau pengaduan kepada instansi terkait, dengan sistem notifikasi dan manajemen aduan yang efisien.",
  tools: ["HTML", "CSS", "PHP", "Javascript", "Bootsrap"],
  dad: "600",
},
{
  id: 6,
  gambar: Proyek6,
  nama: "Website Pengelolaan Laundry",
  desk: "Aplikasi berbasis web untuk mempermudah proses manajemen laundry, mulai dari input pesanan, pelacakan status, hingga pencatatan keuangan secara otomatis.",
  tools: ["HTML", "CSS", "PHP", "Javascript", "Bootsrap"],
  dad: "700",
},

];