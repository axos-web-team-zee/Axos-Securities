'use client'
import { Encode_Sans } from 'next/font/google';
const encodeSans = Encode_Sans({ weight: ['600'], subsets: ['latin'] });
import style from '../styles/search.module.css';

export default function SearchBar() {
   if (typeof window !== "undefined") {
      const form = document.getElementById("searchBar");
      const navigate = function () {
         const keyWords = (document.getElementById("keyWords") as HTMLInputElement).value;
         window.location.href = `https://careers-axosbank.icims.com/jobs/search?ss=1&searchKeyword=${keyWords}`;
      }
      const handleForm = function (event: any) {
         event.preventDefault();
         navigate();
      }
      form?.addEventListener("submit", handleForm);
   }
   return (
      <section className={`gray-theme section-pad`}>
         <div className="containment">
            <div className="section-header">
               <div className="text-center">
                  <img src="https://www.axossecurities.com/-/media/Axos/Company%20Logos/logo-axos-securities"
                     alt="" width="165" height="58" className={style.logo} />
               </div>
               <h2 className={`header-1 gradient-text push-up ${encodeSans.className}`}>
                  Explore your next career move here.
               </h2>
            </div>
            <div className={`text-center ${style.formWrapper}`}>
               <form id="searchBar" className={style.form}>
                  <div className={style.searchJob}>
                     <input type="text" id="keyWords" className={`${style.input} ${encodeSans.className}`} />
                  </div>
                  <input type='submit' 
                     className={`${style.searchBtn} ${encodeSans.className}`} 
                     id="searchBtn" role="button" 
                     aria-label='search jobs' value='Search Openings' 
                  />
               </form>
            </div>
         </div>
      </section>
   )
}