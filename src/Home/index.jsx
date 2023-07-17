import React from "react";
import "./home-style.css";

export default function Home() {
  return (
    <>
      <div className="animate__animated animate__bounce">
        <h1 className="home-h1">UNIVERSITY</h1>
      </div>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h2>We are the world's largest university</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              culpa iure excepturi, cumque praesentium magni illum error ipsa
              voluptas alias nihil aperiam quam animi illo porro! Non adipisci
              rem cum!
            </p>

            <button>
              <a href="https://www.youtube.com" className="hero-btn red-btn">
                Explore now
              </a>
            </button>
          </div>
        </div>

        <footer>
          <h4>About us</h4>
          <p>
            This uneversity starded from 1990 by robert junier.from starting
            limited courses are available but now all types of <br />
            courses are open for national and internacional students as well as
            online courses are available.
          </p>
          <div className="icons">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <a href="" className="footer-link">
            <p>
              made with <i className="fa fa-heart-o"></i>by somesh mehandiratta
            </p>
          </a>
        </footer>
      </section>
    </>
  );
}
