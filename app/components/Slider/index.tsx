import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import { Key, useEffect, useState } from "react";
import axios from "axios";

export default function Slider() {
  const [countries, setCountries] = useState<Country[]>([]);


  interface Country {
    name: string;
    region: string;
    flag: string;
    independent: boolean;
  }

  useEffect(() => {
    axios
      .get<Country[]>(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
      });
  }, []);



  return (
    <Container>
      <Carousel  slide={false} className=" bg-body-danger">
      {countries.map((country: any, index: Key | null | undefined) => (
          <Carousel.Item key={index}>
            <img
              src={country.flag}
              alt="flag"
              className={styles.flag__image}
            />
            <Carousel.Caption className=" d-flex justify-content-center align-items-center">
              <h3 className={styles.country_name}>{country.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
      </Carousel>

    </Container>
  );
}
