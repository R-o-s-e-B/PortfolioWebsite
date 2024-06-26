import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black flex flex-row p-5  md:px-20 sm:px-10 mt-10 lg:px-40">
      <div className="flex-auto mr-2">
        <p className="text-white text-xl">Rose Elizabeth Bobby</p>
      </div>
      <div className="flex ml-2">
        <p className="text-white text-xl">
          <a
            href="https://www.linkedin.com/in/rose-bobby-398411182/"
            target="blank"
          >
            {" "}
            LinkedIn |{" "}
          </a>
          <span>
            <a href="https://www.behance.net/rosebobby" target="_blank">
              Behance |
            </a>
          </span>{" "}
          <span>
            <a href="https://github.com/R-o-s-e-B">Github</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
