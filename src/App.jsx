import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-36 xl:gap-0 gap-6 grid-cols-1 ">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image"  className="w-10 rounded-md" loading="lazy"/>
            <p>Logika yang indah. Lahir dari hasil berpikir sendiri</p>
          </div>
          <h1 className="text-/tight font-bold mb-6">
            Hi, Saya Satya Bintang
          </h1>
          <p className="text-base mb-6 opacity-50">
            Saya memiliki ketertarikan di bidang Programming, terutama dalam pengembangan Website yang telah saya tekuni selama lebih dari 3 tahun, 
            serta Aplikasi Android yang mulai saya fokuskan dalam 1 tahun terakhir.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl
            hover:bg-violet-600 transition-all">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
             <a href="#proyek" className="bg-violet-700 p-4 rounded-2xl
            hover:bg-zinc-600 transition-all">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image"  className="w-[500px] md:ml-auto
        animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>
      {/* Tentang */}
      <div className="tentang mt-32 py-10 pt-20" id="tentang">
        <div className="w-full lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
        {/* <img src={DataImage.HeroImage} className="w-12 rounded-md mb-10 sm:hidden" alt="Profile Image" loading="lazy"/> */}
          <p className="text-base/loose mb-10">
           Hi, perkenalkan saya Satya Bintang, seorang Web Developer yang berfokus pada pengembangan Website menggunakan Laravel dan terbiasa menggunakan Git dalam pengelolaan proyek.
            Saya juga mulai mendalami pengembangan Aplikasi Android. Bagi saya, sebuah produk digital tidak hanya harus berfungsi dengan baik, 
           tetapi juga mampu memberikan pengalaman pengguna yang efisien dan menyenangkan.
          </p>
          <div className="flex items-center justify-between">
            {/* <img src={DataImage.HeroImage} className="w-12 rounded-md sm:block hidden" alt="Image" loading="lazy"/> */}
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose
          opacity-50">
            Berikut ini beberapa tools yang pernah saya gunakan untuk membangun proyek yang pernah saya kerjakan
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
              hover:bg-zinc-800 group" key={tool.id}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1
                group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10 pt-20" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
          <p className="text-base/loose text-center opacity-50">
            Berikut ini beberapa proyek yang pernah saya kerjakan
          </p>
          <div className="proyek-bov mt-14 grid lg:gird-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
                <img src={proyek.gambar} className="lg:w-full lg:h-90" alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md
                    font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              </div>
            ))}
          </div>
      </div>
      {/* Kontak */}
      <div className="kontak mt-32 p-10 pt-20" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center">
            Kontak
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
            Mari terhubung dengan saya.
        </p>
       <form
        action="https://formsubmit.co/satyabr147@gmail.com"
        method="POST"
        className="bg-zinc-800 w-full max-w-2xl p-10 mx-auto rounded-md"
        autoComplete="off"
      >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="name" placeholder="Masukan Nama..."
              className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..."
              className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Pesan</label>
              <textarea name="pesan" placeholder="Masukan Pesan..." 
              className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg
              block border border-zinc-600 hover:bg-violet-600 w-full">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
