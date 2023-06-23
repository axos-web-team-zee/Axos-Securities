import { Encode_Sans } from 'next/font/google'
const encodeSans = Encode_Sans({ weight: ['500','600'],subsets: ['latin'] });
import style from '../styles/hero.module.css'

// ──────────────────────────────────────────────────  DATA:  ───────────────────

let data = {
  title: 'Axos Securities, LLC',
  description: 'A subsidiary of Axos Financial® Inc.',
  url: 'https://www.axossecurities.com/-/media/Axos/Banners/Images/hero-axos-securities.jpg',
}

// ─────────────────────────────────────────────────  MARKUP:  ───────────────────

export default function HeroBanner() {
  return (
    <section className={`text-white ${style.hero}`}
      style={{backgroundImage: "url(" + data.url + ")"}}
      >
      <div className="containment">
          <div className={`flex-row center-all ${style.min_height}`}>
             <div className="section-header" style={{marginBottom:0}}>
                <h1 className={`${encodeSans.className} ${style.hero_h1} header-1`}>
                  {data.title}
               </h1>
                <p className={`push-top mobile ${style.hero_p}`}>
                  {data.description}
               </p>
             </div>
          </div>
      </div>
    </section>
  )
}