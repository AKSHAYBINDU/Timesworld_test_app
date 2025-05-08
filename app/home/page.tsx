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
import { useEffect } from "react";

const links = ["All", "Asia", "Europe", "Africa"];

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const activeRegion = useSelector((state: RootState) => state.region.value);
  const isLoggedIn = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);
  if (!isLoggedIn) return null;

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
            <Navbar.Brand href="/home">Countries</Navbar.Brand>
          </div>
          <div className=" d-flex justify-content-end align-items-end flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className=" py-4 py-lg-0"
                activeKey={activeRegion}
                onSelect={(selectedKey) => dispatch(setRegion(selectedKey!))}
              >
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
        <div className=" d-flex flex-column flex-lg-row gap-2  align-items-start text-center my-5">
          <div className={styles.lineOne}></div>
          <h1 className=" fw-bolder text-black w-100 m-0">WELCOME</h1>
          <div className={styles.lineTwo}></div>
        </div>
        <div className=" row">
          <div className="col-lg-8 col-12 pb-5 pb-lg-0">
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

      <section className={styles.footer_section}>
        <div className=" d-flex justify-content-between align-items-center gap-3">
          <Image
            src="/login/Facebook.png"
            width={50}
            height={50}
            alt="facebook logo"
            className={styles.social_media_icons}
          />
          <Image
            src="/login/Instagram.png"
            width={50}
            height={50}
            alt="instagram logo"
            className={styles.social_media_icons}
          />
          <Image
            src="/login/LinkedIn.png"
            width={50}
            height={50}
            alt="linkedin logo"
            className={styles.social_media_icons}
          />
          <Image
            src="/login/Facebook.png"
            width={50}
            height={50}
            alt="facebook logo"
            className={styles.social_media_icons}
          />
        </div>

        <div className=" text-center py-5">
          <a href="mailto:example.com" className={styles.footer_text}>example.com</a>

          <p className={styles.footer_text}>Copyright © 2025 Akshay. All rights reserved.</p>
        </div>
      </section>
    </Container>
  );
}
