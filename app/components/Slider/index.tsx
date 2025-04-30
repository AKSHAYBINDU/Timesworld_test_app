import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";

export default function Slider() {
  return (
    <Container>
      
      <Carousel slide={false} className=" bg-body-tertiary">
        <Carousel.Item>
          <img
            src="https://flagcdn.com/in.svg"
            alt="flag"
            className={styles.flag__image}
          />
          <Carousel.Caption>
            <h3>Country One</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://flagcdn.com/bz.svg"
            alt="flag"
            className={styles.flag__image}
          />
          <Carousel.Caption>
            <h3>Country Two</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://flagcdn.com/au.svg"
            alt="flag"
            className={styles.flag__image}
          />
          <Carousel.Caption>
            <h3>Country Three</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
