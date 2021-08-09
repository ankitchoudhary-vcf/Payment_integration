import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';


export const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper has-background-info-light" style={{width: 'auto'}}>
      <Carousel centerMode label infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img
            alt="carouselImage"
            src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxwb29yJTIwY2hpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <div
            className=" notification mx-6 is-info title is-3"
            style={{ position: "relative", bottom: "100px" }}
          >
            <p className="title is-size-6-touch is-size-5-desktop notification is-info is-light">HELP POOR CHILD</p>
            <p className="subtitle is-size-7-touch is-size-6-desktop mt-4 ">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
            <Link to="/donate" className="button is-success is-light mx-2">
                Donate Now
            </Link>
          </div>
        </div>
        <div>
          <img
            alt="carouselImage"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <div
            className=" notification mx-6 is-info title is-3"
            style={{ position: "relative", bottom: "100px" }}
          >
            <p className="title is-size-6-touch is-size-5-desktop notification is-info is-light">HELP POOR CHILD</p>
            <p className="subtitle is-size-7-touch is-size-6-desktop mt-4 ">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
            <Link to="/donate" className="button is-success is-light mx-2">
                Donate Now
            </Link>
          </div>
        </div>
        <div>
          <img
            alt="carouselImage"
            src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <div
            className=" notification mx-6 my-0 is-info title is-3"
            style={{ position: "relative", bottom: "100px" }}
          >
            <p className="title is-size-6-touch is-size-5-desktop notification is-info is-light">HELP POOR CHILD</p>
            <p className="subtitle is-size-7-touch is-size-6-desktop mt-4 ">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
            <Link to="/donate" className="button is-success is-light mx-2">
                Donate Now
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
