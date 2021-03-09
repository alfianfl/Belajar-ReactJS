import React from 'react'
import Intro from '../components/Intro'
import Card from '../components/Card'
import {Link } from 'react-router-dom';

const intro = {
    content: 
    `Program pelatihan belajar pemrograman 
    dengan tatap muka secara offline dan 
    dengan bimbingan para instruktur profesional. 
    Peserta akan belajar dengan kurikulum yang 
    berorientasi pada industri dengan teknologi 
    terbaru dengan konsentrasi utama yaitu 
    pemrograman web dan Android. Saat ini 
    program diselenggarakan di 2 kota besar, 
    yaitu Bandung dan Jakarta.`
}

const cards = [
    {
        imageUrl: 'https://i2.wp.com/dekoruma.blog/wp-content/uploads/2018/06/S-I-House-15-850x910-1340442264-1527942362590.jpg?fit=850%2C566&ssl=1',
        title   : 'Weekend Bootcamp', 
        subtitle: 'Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta'
    },
    {
        imageUrl: 'https://i2.wp.com/dekoruma.blog/wp-content/uploads/2018/06/S-I-House-15-850x910-1340442264-1527942362590.jpg?fit=850%2C566&ssl=1',
        title   : 'Intensive Bootcamp', 
        subtitle: 'Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina'
    },
]

const DevSchool = () => (
    <div className="container mt-5">
        <h1 style={{ textAlign: 'center'}}>Padjadjaran Lab</h1>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <Intro content={intro.content}/>
                    <div className="col-md-6">
                        <img 
                            style={{maxWidth:"100%"}}
                            src="https://i1.wp.com/dekoruma.blog/wp-content/uploads/2018/05/decoist-3.jpg?w=750&ssl=1"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-5" style={{ marginBottom: 50}}>
        <Link className="nav-item nav-link text-secondary d-flex" to="/ReactAxios">
                {
                    cards.map(card => 
                        <Card 
                            imageUrl={card.imageUrl} 
                            title={card.title} 
                            subtitle={card.subtitle}
                        />
                    )
                }
        </Link>
        </div>
        
    </div>
)

export default DevSchool