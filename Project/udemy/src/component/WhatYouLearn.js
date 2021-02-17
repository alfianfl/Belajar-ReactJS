import React from 'react'

function WhatYouLearn() {
    return (
        <div>
                <div className="what-will-you-learn py-4 pr-4">
                  <h3 className="pl-4"> <strong>Yang akan Anda pelajari</strong> </h3>
                  <div className="row">
                    <div className="col-lg-6"> 
                      <ul className="check-list">
                        <li>Belajar fundamental react dan fitur - fitur terbaru react seperti hooks, context API, dll</li>
                        <li>Menggunakan CSS di Javascript dengan styled component</li>
                        <li>Membuat applikasi mulai dari yang sederhana seperti todo list, sampai aplikasi point of sales dan aplikasi kanban management board sepert</li>
                        <li>Belajar integrasi API</li>
                        <li>Testing API di postman</li>
                      </ul>
                    </div>
                    <div className="col-lg-6"> 
                      <ul className="check-list">
                          <li>Belajar berbagai teknik untuk styling appliksi react</li>
                          <li>Routing menggunakan react router</li>
                          <li>Belajar menggunakan library redux dan middlewarenya redux saga</li>
                          <li>Belajar bagaimana membaca dokumentasi API dari postman dan apiary</li>
                          <li>Belajar menggunakan UI library seperti Material UI dan Ant design</li>
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default WhatYouLearn
