import React from "react";

export default () => {
  return (
    <div className="footer-parent-holder">
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} John Lamprecht
      </footer>
    </div>
  );
};
