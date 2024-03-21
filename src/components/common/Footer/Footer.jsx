import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      © {new Date().getFullYear()}&nbsp;
      <a href="https://github.com/Kateryna-Borysenko" className="Link">
        &nbsp; PhoneBook
      </a>
      &nbsp; All rights reserved.
    </footer>
  );
};

export default Footer;
