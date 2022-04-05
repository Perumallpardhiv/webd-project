import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "./Destination1.png";
import Destination2 from "./Destination2.png";
import Destination3 from "./Destination3.png";
import Destination4 from "./Destination4.png";
import Destination5 from "./Destination5.png";
import Destination6 from "./Destination6.jfif";
import Destination7 from "./Destination7.jfif";
import Destination8 from "./Destination8.jpg";
import Destination9 from "./Destination9.jfif";
import Destination10 from "./Destination10.jpg";
import Destination11 from "./Destination11.jfif";
import Destination12 from "./Destination12.webp";
import Destination13 from "./Destination13.jfif";
import Destination14 from "./Destination14.jfif";
import Destination15 from "./Destination15.jpg";
import info1 from "./info1.png";
import info2 from "./info2.png";
import info3 from "./info3.png";

const Recommend = () =>{
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, Southeast Asia",
      costFlight: "₹ 11,000",
      costShip: "₹ 48,000",
      durationFlight: "8 hrs",
      durationShip: "8-14 days",
      dist: "6,325 km"
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country",
      costFlight: "₹ 13,000",
      costShip: "₹ 18,000",
      durationFlight: "4 hrs",
      durationShip: "15-23 days",
      dist: "4,525 km"
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city",
      costFlight: "₹ 22,000",
      costShip: "₹ 65,000",
      durationFlight: "15 hrs",
      durationShip: "30-45 days",
      dist: "7,777 km"
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the Australia",
      costFlight: "₹ 54,997",
      costShip: "₹ 1,40,000",
      durationFlight: "32 hrs",
      durationShip: "14 days",
      dist: "11,551 km"
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is between South America and Australia in the Pacific Ocean",
      costFlight: "₹ 22,000",
      costShip: "₹ 65,000",
      durationFlight: "15 hrs",
      durationShip: "30-45 days",
      dist: "10,777 km"
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      costFlight: "₹ 79,056",
      costShip: "₹ 1,80,000",
      durationFlight: "26 hrs",
      durationShip: "26-30 days",
      dist: "7,480 km"
    },
    {
      image: Destination7,
      title: "Agra",
      subTitle: "Taj Mahal, Tajganj, Uttar Pradesh",
      costFlight: "₹ 47,000",
      costShip: "₹ 1,15,000",
      durationFlight: "11 hrs",
      durationShip: "20-27 days",
      dist: "2,999 km"
    },
    {
      image: Destination8,
      title: "China",
      subTitle: "Great wall of China, Huairou",
      costFlight: "₹ 34,000",
      costShip: "₹ 68,000",
      durationFlight: "23 hrs",
      durationShip: "30-38 days",
      dist: "8,920 km"
    },
    {
      image: Destination9,
      title: "Peru",
      subTitle: "Machu Picchu, Cuzco",
      costFlight: "₹ 72,000",
      costShip: "₹ 1,35,000",
      durationFlight: "37 hrs",
      durationShip: "35-48 days",
      dist: "9,345 km"
    },
    {
      image: Destination10,
      title: "Australia",
      subTitle: "Sydney Harbour Bridge, Sydney",
      costFlight: "₹ 62,000",
      costShip: "₹ 1,25,000",
      durationFlight: "31 hrs",
      durationShip: "35-45 days",
      dist: "12,235 km"
    },
    {
      image: Destination11,
      title: "India",
      subTitle: "Golden Temple, Punjab",
      costFlight: "₹ 42,000",
      costShip: "₹ 1,20,000",
      durationFlight: "8 hrs",
      durationShip: "30-40 days",
      dist: "1,269 km"
    },
    {
      image: Destination12,
      title: "United States",
      subTitle: "A Glass Beach, California",
      costFlight: "₹ 72,000",
      costShip: "₹ 1,65,000",
      durationFlight: "37 hrs",
      durationShip: "45-50 days",
      dist: "3,650 km"
    },
    {
      image: Destination13,
      title: "Italy",
      subTitle: "Roman Forum, Rome",
      costFlight: "₹ 62,000",
      costShip: "₹ 1,25,000",
      durationFlight: "27 hrs",
      durationShip: "35-45 days",
      dist: "2,047 km"
    },
    {
      image: Destination14,
      title: "Hawaii",
      subTitle: "A lush tropical beach on Maui, Maui",
      costFlight: "₹ 52,000",
      costShip: "₹ 1,25,000",
      durationFlight: "25 hrs",
      durationShip: "37-45 days",
      dist: "2,250 km"
    },
    {
      image: Destination15,
      title: "New York",
      subTitle: "Manhattan Island",
      costFlight: "₹ 70,000",
      costShip: "₹ 1,45,000",
      durationFlight: "32 hrs",
      durationShip: "32-48 days",
      dist: "3,147 km"
    },
  ];

  const packages = [
    "POPULAR PLACES"
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
    <br/>
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <a href="https://www.yatra.com/" target="_blank"><img src={destination.image} alt=""/></a>
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <div>
                <h6>Flight : {destination.costFlight}&nbsp;</h6>                
                <h6>Ship : {destination.costShip}</h6>
                </div>
              </div>
              <div className="distance">
                <span>Flght Duration <br/> {destination.durationFlight}</span>
                <span>Ship Duration <br/> {destination.durationShip}</span>
                <span>Total Distance <br/> {destination.dist}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 750px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 3vh;
          padding-bottom: 0rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 2fr;
      padding: 3;
    }
  }
  `;

  export default Recommend;
