"use client";

import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import Slider from "../components/Slider";
import CountryCard from "../components/CountryCard";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setRegion } from "../store/regionSlice";
import { RootState } from "../store/store";

const links = ["All", "Asia", "Europe", "Africa"];

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const activeRegion = useSelector((state: RootState) => state.region.value);

  const handleLogout = () => {
    console.log("user logout");
    dispatch(logout());
    router.push("/");
  };

  return (
    <Container>
      <Navbar expand="lg" className=" py-3 mt-4">
        <Container className=" d-flex justify-content-between align-items-start">
          <div>
            <Navbar.Brand href="#home">Countries</Navbar.Brand>
          </div>
          <div className=" d-flex justify-content-end align-items-end flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" py-4 py-lg-0" activeKey={activeRegion} onSelect={(selectedKey) => dispatch(setRegion(selectedKey!))}>
                {links.map((region) => (
                  <Nav.Item key={region}>
                    <Nav.Link
                      eventKey={region}
                      href={`#${region.toLowerCase()}`}
                      className={styles.navlinks}
                    >
                      {region}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Button
                className=" bg-black border-black px-4"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      {/* Slider Component */}

      <section className="">
        <div className=" d-lg-flex  align-items-start text-center my-5">
          <div className={styles.lineOne}></div>
          <h1 className=" fw-bolder text-black w-100 m-0">WELCOME</h1>
          <div className={styles.lineTwo}></div>
        </div>
        <div className=" row">
          <div className="col-lg-8 col-12 pb-5">
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
