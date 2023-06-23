import { Encode_Sans } from 'next/font/google'
const encodeSans = Encode_Sans({ weight: ['500', '600'], subsets: ['latin'] });
import style from '../styles/hero-slim.module.css'

// ──────────────────────────────────────────────────  DATA:  ───────────────────

let data = {
   title: "Applicant's Statement & Agreement",
   url: 'https://www.axosbank.com/-/media/Axos/Banners/Images/securities.jpg',
}

// ─────────────────────────────────────────────────  MARKUP:  ───────────────────

export default function HeroBannerSlim() {
   return (
      <section className={`text-white ${style.hero}`} style={{ backgroundImage: "url(" + data.url + ")" }}>
         <div className="containment">
            <div className={`flex-row center-all text-center ${style.min_height}`}>
               <h1 className={`${encodeSans.className} ${style.hero_h1} header-1`}>{data.title}</h1>
            </div>
         </div>
      </section>
   )
}