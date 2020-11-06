import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Cities} from "../../const";

const Tabs = (props) => {
  const {activeCity, onTabClick} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city, i) => {
            const isActive = city === activeCity;
            const handleTabClick = () => {
              if (!isActive) {
                onTabClick(city);
              }
            };
            return (
              <li key={`${city}-${i}`} className="locations__item">
                <Link
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  to={isActive ? `/` : `#`}
                  onClick={handleTabClick}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  activeCity: PropTypes.oneOf(Cities).isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default Tabs;
