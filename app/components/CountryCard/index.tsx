"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function CountryCard() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [visibleCount, setVisibleCount] = useState(15);

  interface Country {
    name: string;
    region: string;
    flag: string;
    independent: boolean;
  }

  const activeRegion = useSelector((state: RootState) => state.region.value);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filtered =
    activeRegion === "All"
      ? countries
      : countries.filter((c) => c.region === activeRegion);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <div className="container my-5">
      <div className="row ">
        {filtered.slice(0, visibleCount).map((country, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div
              className={`d-flex border-2 border border-dark shadow justify-content-center align-items-center gap-2 py-3`}
            >
              <div
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
                className=" p-2 overflow-hidden d-flex justify-content-center align-items-center"
              >
                <img
                  src={country.flag}
                  className="card-img-top"
                  alt={`Flag of ${country.name}`}
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title fw-semibold">{country.name}</h5>
                <p className=" text-secondary">{country.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" d-flex justify-content-center align-items-center">
        {visibleCount < countries.length && (
          <Button className={styles.loadmore} onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}
