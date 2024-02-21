import React from "react";
import "./DarkHeroC.css";
import PropTypes from  "prop-types";

function DarkHeroD(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" alt="hero" src="https://wepik.com/api/image/ai/9b297f16-74a2-471f-b23a-38b3043f28ec?thumb=1" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
          </p>
        </div>
      </div>
    </section>
  );
}

DarkHeroD.defaultProps = {
  theme: 'indigo'
};

DarkHeroD.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkHeroD;