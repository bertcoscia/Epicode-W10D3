import { Container } from "react-bootstrap";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";

const MyFooter = () => (
  <footer className="mt-5 pb-4">
    <Container>
      <FooterSocial />
      <FooterLinks />
    </Container>
  </footer>
);

export default MyFooter;
