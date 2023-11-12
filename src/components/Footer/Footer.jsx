import { Link, Wrapper, WrapperContact } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <footer>
        <Wrapper>
          <WrapperContact>
            <p> Contact Us</p>
            <Link to="tel:+380730000000">+38 (073) 00 00 000</Link>
            <Link to="mailto:info@Car.com">info@Car.com</Link>
          </WrapperContact>
        </Wrapper>
      </footer>
    </>
  );
};

export default Footer;
