export default function CountryCard() {
  const countries = [
    {
      name: "Virgin Islands (U.S.)",
      region: "Americas",
      flag: "https://flagcdn.com/vi.svg",
      independent: false,
    },
    {
      name: "Åland Islands",
      region: "Europe",
      flag: "https://flagcdn.com/ax.svg",
      independent: false,
    },
    {
      name: "Albania",
      region: "Europe",
      flag: "https://flagcdn.com/al.svg",
      independent: false,
    },
    {
        name: "Virgin Islands (U.S.)",
        region: "Americas",
        flag: "https://flagcdn.com/vi.svg",
        independent: false,
      },
      {
        name: "Åland Islands",
        region: "Europe",
        flag: "https://flagcdn.com/ax.svg",
        independent: false,
      },
      {
        name: "Albania",
        region: "Europe",
        flag: "https://flagcdn.com/al.svg",
        independent: false,
      },
  ];
  return (
    <div className="container my-5">
      <div className="row ">
        {countries.map((country, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className={`d-flex border-2 border border-dark justify-content-center align-items-center gap-2 py-3`}>
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
    </div>
  );
}
