import React from "react";
import "./DarkHeroB.css";
import PropTypes from  "prop-types";

function DarkHeroB(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://wepik.com/api/image/ai/9b0c907b-724d-468d-ae55-a4115d752846" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          </h1>
          <p className="leading-relaxed mb-8">
          </p>
        </div>
      </div>
    </section>
  );
}

DarkHeroB.defaultProps = {
  theme: 'indigo'
};

DarkHeroB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkHeroB;