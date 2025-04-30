"use client";

import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import styles from "./styles.module.css";
import Slider from "../components/Slider";
import CountryCard from "../components/CountryCard";

export default function Page() {
  const links = ["All", "Asia", "Europe", "Africa"];
  return (
    <Container>
      {/* <Navbar className=" mt-4">
        <div className=" d-flex justify-content-between w-100">
          <div>
            <h5 className=" fw-semibold ">Countries</h5>
          </div>

          <Nav>
            {links.map((item, index) => (
              <Nav.Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className={styles.navlinks}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      </Navbar> */}

      <Navbar expand="lg" className=" py-3 mt-4">
        <Container className=" d-flex justify-content-between align-items-start">
          <div>
            <Navbar.Brand href="#home">Countries</Navbar.Brand>
          </div>
          <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {links.map((item, index) => (
                  <Nav.Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className={styles.navlinks}
                  >
                    {item}
                  </Nav.Link>
                ))}
              </Nav>
            <Button className=" bg-black border-black px-4">Logout</Button>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      {/* Slider Component */}

      <section className="">
        <div className=" d-flex justify-content-center align-items-center text-center my-5">
          <div className={styles.lines}></div>
          <h1 className=" fw-bolder text-black w-100 m-0">WELCOME</h1>
          <div className={styles.lines}></div>
        </div>
        <div className=" row">
          <div className="col-lg-8 col-12">
            <Slider />
          </div>
          <div className="col-lg-4 col-12">
            <div className={styles.right_content}>
              <Image
                src="/login/sign-up.png"
                width={400}
                height={250}
                alt="Login Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Country Card*/}

      <CountryCard />
    </Container>
  );
}
