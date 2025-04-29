"use client";

import { Container, Image, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import Slider from "../components/Slider";
import CountryCard from "../components/CountryCard";

export default function Page() {
  const links = ["All", "Asia", "Europe", "Africa"];
  return (
    <Container>
      <Navbar className=" mt-4">
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
      </Navbar>

      {/* Slider Component */}

      <section className=" my-5">
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

      <CountryCard/>

      
    </Container>
  );
}
