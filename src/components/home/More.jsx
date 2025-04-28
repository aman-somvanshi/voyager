import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCreditCard, faPlaneCircleCheck, faTaxi, faSuitcaseMedical,faUsersLine  } from '@fortawesome/free-solid-svg-icons';
import './More.css';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const More = () => {
  const features = [
    { icon: faPlaneCircleCheck, text: 'Flight Tracker',url:'#' }, //sabko url dene hai
    { icon: faCcVisa, text: 'Book Visa',url:'#' },
    { icon: faSuitcaseMedical, text: 'Travel Insurance',url:'#' },
    { icon: faCreditCard, text: 'Credit card',url:'#' },
    { icon: faUsersLine, text: 'Group Booking',url:'#' },
    { icon: faTaxi, text: 'Airport Cabs',url:'#' },
    { icon: faBell, text: 'Plan',url:'#' },
    { icon: faBed, text: 'Special Beds',url:'#' },
  ];

  return (
    <div>
      <p className="moretext">Do More With Voyager</p>
      <div className="morecontainer">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
           <a href={feature.url}> <FontAwesomeIcon icon={feature.icon} className="moreicons" /> </a>{/*have to add anchor and url*/}
            <p className="icon-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;