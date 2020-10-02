import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function PropertyScreen(props) {
  const property = data.propertys.find(x => x._id === props.match.params.id);
  return <div>
          <div className="back-to-results">
          <Link to="/"> Back to results</Link>
          </div>
          <div className="details">
            <div className="details-image">
              <img src={property.image} alt="home"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>Location: {property.location}</h4>
                </li>
                <li>
                  <b>Bedrooms: {property.bedrooms}</b>
                </li>
                <li>
                  <h4>Description: {property.description}</h4>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>
                  Price: {property.price}
                </li>
                <li>
                  <button className="button">Add to favourties
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>
  }
export default PropertyScreen;
