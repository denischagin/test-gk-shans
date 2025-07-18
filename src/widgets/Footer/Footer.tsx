import css from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__container}>
        <div className={css.footer__logo}>
          <span className={css.footer__logoText}>НАЗВАНИЕ МАГАЗИНА</span>
          <span className={css.footer__sublogo}>Магазин экипировки</span>
        </div>

        <div className={css.footer__contacts}>
          <a
            href="tel:+78005553535"
            className={css.footer__phone}
          >
            8 (800) 555-35-35
          </a>
          <p className={css.footer__hours}>Ежедневно с 9:00 до 21:00</p>
        </div>
      </div>

      <div className={css.footer__copyright}>
        © {new Date().getFullYear()} НАЗВАНИЕ МАГАЗИНА. Все права защищены.
      </div>
    </footer>
  )
}
