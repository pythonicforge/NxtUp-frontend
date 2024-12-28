import React /*useEffect, useState*/ from "react";
import formatDate from "../utils/formatDate";
import { Link } from "react-router-dom";
/*import { useParams } from 'react-router-dom';
import { getEvent } from '../services/eventsService';*/

const EventDetails = () => {
  // TODO: fetch event details
  /*const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const data = await getEvent();
      const event = data.find(event => event.id === eventId);
      setEvent(event);
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="event-details container">
      <h1 className="event-details__title">{"NST Hackathon"}</h1>
      <p className="event-details__date">On {formatDate("2025-01-12")}</p>
      <p className="event-details__description">
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      </p>
      <Link to={`/events/${"nst-hackathon"}`} className="know-more-link">
        Register
      </Link>
    </div>
  );
};

export default EventDetails;
