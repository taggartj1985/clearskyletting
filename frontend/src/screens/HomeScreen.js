import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function HomeScreen(props) {

  const [propertys, setProperty] = useState([]);
  const propertyList = useSelector(state => state.propertyList)
  // const { propertys, loading, error} = propertyList;

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/propertys");
      setProperty(data);
    }
    fetchData();
    return () => {

    };
  }, [])

  return   <ul className="propertys">
    {
      propertys.map(property =>
      <li key={property._id}>
        <div className="property">
          <Link to={'/property/' + property._id}>
          <img className="property-image" src={property.image}alt="property"/>
          </Link>
          <div className="property-location">
            <Link to={'/property/' + property._id}>Location: {property.location}</Link>
            </div>
          <div className="property-bedroom">Bedrooms: {property.bedrooms}</div>
          <div className="property-price">{property.price}</div>
          </div>
      </li>)
      }
    </ul>
  }
export default HomeScreen;
