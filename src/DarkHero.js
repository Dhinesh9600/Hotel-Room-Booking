import React from "react";
import "./DarkHero.css";
import PropTypes from  "prop-types";

function DarkHeroA(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <br className="hidden lg:inline-block" />

          </h1>
          <p className="mb-8 leading-relaxed">

          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://wepik.com/api/image/ai/9b0c90b7-4c5c-42a5-b2ba-0c0df21da3e2" />
        </div>
      </div>
    </section>
  );
}

DarkHeroA.defaultProps = {
  theme: 'indigo'
};

DarkHeroA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkHeroA;