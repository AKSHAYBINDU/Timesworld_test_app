"use client";

import { Button, Col, Container, Form } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";

export default function Login() {
  const handleSubmit = () => {
    // handle form submit
  };
  return (
    <Container>
      <div className=" row d-flex justify-content-center align-items-center vh-100">
        <Col lg={6}>
          <section className={styles.form__section}>
            <h1 className=" fw-semibold">Sign In</h1>
            <p className=" fw-semibold">
              New User?{" "}
              <a href="" className=" text-decoration-none">
                <span className=" text-primary">Create an account</span>
              </a>
            </p>
            <Form
              onSubmit={handleSubmit}
              className=" d-flex flex-column gap-3 "
            >
              <input
                type="text"
                placeholder="Username or email"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />
              <Form.Check
                type="checkbox"
                label="Keep me logged in"
                id="keepMeLoggedIn"
                className={styles.form_checkbox}
              />
              <Button type="submit" className={styles.form_button}>
                Login
              </Button>
            </Form>

            <div>
              <div className=" d-flex justify-content-center align-items-center text-center my-5">
                <div className={styles.lines}></div>
                <p className=" fw-semibold text-black w-100 m-0">
                  Or Sign in with
                </p>
                <div className={styles.lines}></div>
              </div>

              {/* Social Media */}

              <div className=" d-flex w-100 justify-content-between align-items-center">
                <Image
                  src="/login/Facebook.png"
                  width={50}
                  height={50}
                  alt="facebook logo"
                  className=" bg-black rounded-5"
                />
                <Image
                  src="/login/Instagram.png"
                  width={50}
                  height={50}
                  alt="instagram logo"
                  className=" bg-black rounded-5"
                />
                <Image
                  src="/login/LinkedIn.png"
                  width={50}
                  height={50}
                  alt="linkedin logo"
                  className=" bg-black rounded-5"
                />
                <Image
                  src="/login/Facebook.png"
                  width={50}
                  height={50}
                  alt="facebook logo"
                  className=" bg-black rounded-5"
                />
              </div>
            </div>
          </section>
        </Col>
        <Col
          lg={6}
          className="d-none d-lg-flex justify-content-center align-items-center"
        >
          <Image
            src="/login/sign-up.png"
            width={550}
            height={400}
            alt="Login Illustration"
          />
        </Col>
      </div>
    </Container>
  );
}
