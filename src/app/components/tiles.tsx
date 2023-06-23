import { Encode_Sans } from 'next/font/google';
import Link from 'next/link';
const encodeSans = Encode_Sans({ weight: ['600'],subsets: ['latin'] });
import style from '../styles/tiles.module.css';

// ──────────────────────────────────────────────────  DATA:  ───────────────────

let data = [
  {
    title: "Axos Clearing LLC",
    description: "Axos Clearing is a leading correspondent clearing firm serving independent broker-dealers in the retail, active-trading and institutional markets. Axos Clearing also offers flexible custody solutions for Registered Investment Advisers (RIA).",
    link: "https://axosclearing.com/"
  },
  {
    title: "Axos Invest",
    description: "Axos Invest is a digital financial advisor serving clients from its headquarters in Las Vegas, Nevada. Axos Invest empowers its clients to start investing earlier, provide the best advice after they do, and keep the Company’s interests fully aligned with their clients as they progress.",
    link: "https://www.axosinvest.com/"
  }
]

// ─────────────────────────────────────────────────  MARKUP:  ───────────────────


export default function Tiles() {
  return (
    <section className="section-pad-lg">
      <div className="containment">
          <div className="flex-row between mobile">
            {
              data.map((tile,id) => {
                return (
                  <div className={`${style.tile_item} gradient-bg-blue rounded framed flex-col between`} key={id}>
                    <div>
                      <h2 className={`${encodeSans.className} header-3`}>{tile.title}</h2>
                      <p className="push-up mobil-16">{tile.description}</p>
                    </div>
                    <div className="push-up-18">
                      <Link href={tile.link} className={`btn-secondary ${style.arrow}`}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
    </section>
  )
}