import Link from 'next/link'
import style from '../styles/navBar.module.css'

export default function NavBar() {
  return (
    <header>
      <div className={`containment ${style.container}`}>
         <div className={`${style.wrapper} flex-row`}>
            <Link href="/" className={style.logoWrapper}>
               <img src="https://www.axossecurities.com/-/media/Axos/Company%20Logos/logo-axos-securities"
               alt="" width="165" height="58" className={style.logo} />
            </Link>
         </div>
      </div>
    </header>
  )
}