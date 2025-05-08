"use client";

import { Button, Col, Container, Form } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const validatePassword = (pwd: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validatePassword(password)) {
      dispatch(login());
      console.log(`user name is ${name} and password is ${password}`);
      router.push("/home");
    } else {
      setError(
        "Password must be at least 8 characters, include 1 capital letter, 1 number, and 1 symbol."
      );
    }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Form.Check type="checkbox" id="keepMeLoggedIn">
                <Form.Check.Input className={styles.form_checkbox} />
                <Form.Check.Label>Keep me logged in</Form.Check.Label>
              </Form.Check>
              {error && <p className="text-danger">{error}</p>}
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
