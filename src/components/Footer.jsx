const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 justify-between items-center">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7 sm:hidden">
                <a href="#beranda">Beranda</a>
                <a href="#tentang">Tentang</a>
                <a href="#proyek">Proyek</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/m.s_bintang/"><i className="ri-instagram-fill ri-lg"></i></a>
                <a href="https://www.facebook.com/satya.bintang.98"><i className="ri-facebook-fill ri-lg"></i></a>
                <a href="https://www.facebook.com/satya.bintang.98"><i className="ri-linkedin-fill ri-lg"></i></a>
                <a href="https://github.com/Indobin"><i className="ri-github-fill ri-lg"></i></a>
            </div>
        </div>
    )
}

export default Footer