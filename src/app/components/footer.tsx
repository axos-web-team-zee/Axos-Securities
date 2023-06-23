import style from '../styles/footer.module.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={`${style.footer} text-white`}>
      <div className="containment">
        <div className={`flex-col center-all ${style.footer_content}`}>
          <p style={{marginBottom:10}}>
              <strong>© {year} Axos Securities, LLC. All rights reserved</strong>
          </p>
          <p>Axos Securities, LLC. Is a wholly-owned subsidiary of Axos Financial, Inc.</p>
        </div>
      </div>
    </footer>
  )
}