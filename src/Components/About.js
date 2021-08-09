import React from "react";
import { Link } from "react-router-dom"

export const About = () => {
  return (
      <>
    <div className="columns notification is-info mt-6">
      <div className="column is-8 has-text-centered">
        <h3 className="title">ABOUT US</h3>
        <hr/>
        <p className="content has-text-justified mt-6">
        There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable. If youmany variations
        of passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you many variations of passages
        of Lorem Ipsum available, but the majority have suffered alteration in
        some form, byinjected humour, or randomised words which don't look even
        slightly believable.
        </p>
      </div>
      <div className="column is-4 mb-6 has-text-centered">
        <figure className="image is-128x128 is-hidden-mobile" style={{float: 'right'}}>
            <img src="https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="about" />
        </figure>
        <figure className="image is-128x128 mx-6 is-hidden-desktop">
            <img src="https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="about" />
        </figure>
      </div>
    </div>

    <div className="notification is-info is-light has-text-centered mt-6 mb-0">
        <h2 className="title">We aim further!</h2>
        <p>
          A little contribution from your side to save our indigenous
          communities would be highly appreciable.
        </p>
        <Link to="/donate" className="button is-success is-light my-4" style={{border: '1px solid'}}>
          Donate Now
        </Link>
      </div>
    </>
  );
};
