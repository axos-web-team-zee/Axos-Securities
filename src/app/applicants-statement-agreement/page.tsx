import { Metadata } from "next"
import HeroBannerSlim from "../components/hero-slim"
import style from "../styles/list.module.css"

export const metadata: Metadata = {
   title: "Applicants Statement & Agreement",
}

export default function ApplicationStatement() {
   return (
      <main>
         <HeroBannerSlim />
         <section className="section-pad-lg gray-theme">
            <div className="containment">
               <ol className={style.listWrapper}>
                  <li className={style.listItem}>
                     In the event of my employment in a position with Axos Clearing LLC or Axos Invest Inc. (the “Company”), I will comply with all rules and regulations of this Company. I understand that the Company may require me to submit to a test for the presence of drugs in my system prior to employment and at any time during my employment, to the extent permitted by law. I also understand that I may be required to take other tests such as personality and honesty tests, prior to and during my employment. I understand that should I decline to press “Submit” after reading this agreement, or take any of the above tests, my application for employment may be rejected or my employment may be terminated. I understand that bonding may be a condition of hire. If it is, I will be so advised either before or after hiring and a bond application will have to be completed.
                  </li>
                  <li className={style.listItem}>
                     further authorize any educational institution, credit bureau or agency, law enforcement agency, former employer and/or person having any records, data or information concerning my education background, previous work experience, credit, conviction information, or financial history to furnish such records, data or information as may be requested by the Company or their duly authorized representative. I also understand that the Company may obtain public records about me as part of a required background investigation. In making this application for employment I also understand that an investigative consumer report may be made whereby information is obtained through personal interviews with my neighbors, friends or others with whom I am acquainted. This inquiry may cover information as to my character, general reputation, and personal characteristics. I understand that I have the right to make a written request within a reasonable period of time to receive additional detailed information about the nature and scope of this investigative consumer report.
                  </li>
                  <li className={style.listItem}>
                     In addition to authorizing the release of any information regarding my background, I hereby waive any rights or claims I have or may have against my former employers, their agents, employees, and representatives, as well as other individuals who release information to the Company, and release them from any and all liability, claims, or damages that may directly or indirectly result from the use, disclosure, or release of any such information by any person or party, whether such information is favorable or unfavorable to me. I authorize the persons named herein as personal references, if contacted, to provide the Company with any pertinent information they may have regarding myself. I also authorize the Company to use social media and other Internet resources as part of the pre‐employment screening process to the extent permitted by law.
                  </li>
                  <li className={style.listItem}>
                     I hereby state that all the information that I have provided on this application or any other documents completed in connection with my employment, and in any interview, is true and accurate. I have withheld nothing that would, if disclosed, affect this application unfavorably. I understand that if I am employed and any information provided to the Company is found to be false or incomplete in any respect, I may be dismissed. I understand if selected for hire, it will be necessary for me to provide satisfactory evidence of my identity and legal authority to work in the United States, and that federal immigration laws require me to complete an I‐9 Form in this regard.
                  </li>
                  <li className={style.listItem}>
                     I understand that if I become employed, this employment application and any other company personnel manuals and policy statements are not contracts of employment and that I may terminate the employment with or without cause at any time, as may the Company.
                  </li>
                  <li className={style.listItem}>
                     If any term or provision, or portion of this Agreement is declared void or unenforceable it shall be severed, and the remainder of this Agreement shall be enforceable.
                  </li>
               </ol>
            </div>
         </section>
      </main>
   )
}