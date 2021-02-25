import React, { useState } from 'react'

function Deskripsi() {
    const text = `React js adalah salah satu library javascript yang paling populer saat ini. Ada banyak perusahaan besar yang menggunakan react js untuk membangun aplikasi mereka. Sebut saja facebook, instagram, airbnd dan udemy.Di Indonesia sendiri, react js digunakan oleh startup seperti tokopedia, ruang guru, dan shopee.  Tidak heran kalau react js menjadi salah satu teknologi yang wajib dikuasai khususnya seorang frontend developer. Dan jika kamu melihat postingan lowongan pekerjaan di platform manapun, pasti akan mensyaratkan kemampuan react js. Jadi jika kamu berniat menjadi seorang frontend developer atau fullstack developer, maka wajib, pake banget kamu belajar react js. Hmmm….Aku mau dong belajar react js !!! Mas Yudi, ada referensi gak ???? Sekarang mah kalau mau belajar gampang.Kamu tinggal googling, dan …Boommmm!!!Ratusan bahkan ribuan tutorial akan muncul disitu.Gampang dan gratis.Namun, ada sedikit masalah kecil disini. Pertama, karna saking banyaknya tutorial, kita jadi bingung harus mulai atau belajar yang mana, akibatnya belajarnya jadi gak terarah. Kedua, tutorialnya kebanyakan bahasa Inggris. Nah, ini jadi masalah bagi yang gak bisa bahasa Inggris kan ??? Ketiga, karna gratis. Nah, looohh…. Mental gratisan memang menjadi salah satu penghalang untuk maju. Tanya kenapa ??? Karna gratis kita jadi kurang menghargai sesuatu itu. Kan kita dapat gratis, kalau hilang ya biarin aja, kita gak rugi apa — apa kan ??? Jadi apa yang kita dapat gratis, secara psikologis terkesan gak berharga. Benar gak ??? Lalu gimana dong mas solusinya ??? Ada gak react js tutorial yang materinya terstruktur, sesuai dengan standard industri dan berbahasa Indonesia ??? Ada dong! Tada…. Memperkenalkan react masterclass untuk semua. React masterclass untuk semua adalah tutorial react js berbahasa Indonesia yang aku buat. Memang gak gratis, tapi gak sampai membuat jiwa misqueen meronta — ronta kok. Dan paling penting adalah support grup telegram, sehingga kamu gak bakal belajar sendirian. Kamu bebas berdiskusi dan nanya — nanya di group. `
    const [isTruncated, setIsTruncated] = useState(true)
    const[showmore, setShowmore] = useState('Tampilkan lebih banyak')

    const resultTruncated = isTruncated ? text.slice(0,500) : text;

    const toggleTruncated = () =>{
        setIsTruncated(!isTruncated)
        if(showmore=='Tampilkan lebih banyak'){
            setShowmore('Tampilkan lebih sedikit')
        }else{
            setShowmore('Tampilkan lebih banyak')
        }
    }
    return (
        <div>
                 <h4><strong>Deskripsi</strong></h4>
                  <p className="mt-3">
                    {resultTruncated}
                    <strong className="ml-2 show-more" onClick={toggleTruncated}>{showmore} <span></span></strong>     
                  </p>             
        </div>
    )
}

export default Deskripsi
