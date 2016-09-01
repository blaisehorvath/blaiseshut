/**
 * @file This file contains the Footer react component
 */
import React from "react";

/**
 * This stateless functional react component returns the Footer
 * @function Footer
 * @returns {XML}
 */
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="col-sm-4">
                    <h4>About me</h4>
                    <p>
                        For a muddy heated curry, add some lemon juice and oregano. Yellow, sweet pudding is best
                        garnished with clammy kefir.
                    </p>
                </div>
                {/* col-sm-4*/}

                <div className="col-sm-4">
                    <h4>See more</h4>
                    <ul>
                        <li><a>Github</a></li>
                        <li><a>LinkedIn</a></li>
                    </ul>
                </div>
                {/* col-sm-4*/}

                <div className="col-sm-4">
                    <h4>Copyright &copy; Balázs Horváth</h4>
                </div>
                {/* col-sm-4*/}

            </div>
            {/* container*/}
        </footer>
    );
};

export default Footer;

