import { Container } from "@nextui-org/react";
import { Content } from "./Content";

export const Layout = ({ children }) => (
  <Container fluid>
    {children}
    <Content />
  </Container>
);
