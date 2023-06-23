
import { Encode_Sans } from 'next/font/google';
const encodeSans = Encode_Sans({ weight: ['600'],subsets: ['latin'] });
import style from '../styles/about.module.css';
import Link from 'next/link';


export default function About() {
  return (
    <section className={`section-pad-lg gradient-bg-blue ${style.about}`}>
      <div className="containment">
         <div className="section-header" style={{marginBottom:0}}>
            <img src="http://www.axosbank.com/-/media/Axos/Company-Logos/axos-transparent" alt="" width="36" height="36" />
            <h2 className={`push-up header-1 ${encodeSans.className}`}>About Axos Financial, Inc.</h2>
            <p className={`push-up ${style.about_p}`}>
               Axos Financial, Inc. is the holding company for Axos Bank, a nationwide bank that provides consumer and business banking products through its low-cost distribution channels and affinity partners. With over $18.4 billion in assets, Axos Bank provides financing for single and multifamily residential properties, small-to-medium size businesses in target sectors, and selected specialty finance receivables. Its subsidiaries, Axos Clearing LLC and Axos Invest, Inc., provide comprehensive securities clearing services to introducing broker-dealers and registered investment advisor correspondents and digital investment advisory services to retail investors, respectively. Axos Financial, Inc.’s common stock is listed on the NYSE under the symbol “AX” and is a component of the Russell 2000<sup>®</sup>  Index and the S&P SmallCap 600<sup>®</sup> Index. For more information about Axos Financial, Inc., please visit <a href='https://www.axosfinancial.com' className={style.about_link}>www.axosfinancial.com</a>
            </p>
            <Link href="/applicants-statement-agreement">View Agreement</Link>
         </div>
      </div>
    </section>
  )
}