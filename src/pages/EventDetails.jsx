import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../utils/formatDate";
import Loader from "../components/Loader";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdGroups } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const sampleEvents = [
  {
    id: 1,
    type: "upcoming",
    date: "2025-01-01",
    time: "10:00 AM - 12:00 PM",
    location: "Main Auditorium",
    heading: "Techathon",
    details: "An exciting event about technology and innovation.",
    tag: "Tech",
  },
  {
    id: 2,
    type: "ongoing",
    date: "2024-12-30",
    time: "2:00 PM - 4:00 PM",
    location: "Conference Hall",
    heading: "Web Dev Bootcamp",
    details: "A workshop on modern web development practices.",
    tag: "Tech",
  },
  {
    id: 3,
    type: "past",
    date: "2024-12-25",
    time: "9:00 AM - 11:00 AM",
    location: "Campus Grounds",
    heading: "Christmans Celebration",
    details: "A Christmas celebration for all students and staff.",
    tag: "Social",
  },
  {
    id: 4,
    type: "ongoing",
    date: "2024-12-30",
    time: "2:00 PM - 4:00 PM",
    location: "Conference Hall",
    heading: "Web Dev Bootcamp",
    details: "A workshop on modern web development practices.",
    tag: "Tech",
  },
  {
    id: 5,
    type: "past",
    date: "2024-12-24",
    time: "9:00 AM - 11:00 AM",
    location: "Campus Grounds",
    heading: "Christmans Celebration",
    details: "A Christmas celebration for all students and staff.",
    tag: "Social",
  },
  {
    id: 6,
    type: "upcoming",
    date: "2024-12-15",
    time: "9:00 AM - 11:00 AM",
    location: "Campus Grounds",
    heading: "Christmans Celebration",
    details: "A Christmas celebration for all students and staff.",
    tag: "Social",
  },
];

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const eventDetails = sampleEvents.find(
      (event) => event.id === parseInt(eventId)
    );
    setEvent(eventDetails);
  }, [eventId]);

  if (!event) {
    return <Loader />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="tab-content">
            <h2>Event Description</h2>
            <p>{event.description}</p>
          </div>
        );
      case "rulebook":
        return (
          <div className="tab-content">
            <h2>Rule Book</h2>
            <ul>
              {event.rules?.map((rule, index) => (
                <li key={index}>{rule}</li>
              )) || <p>No rules available.</p>}
            </ul>
          </div>
        );
      case "memories":
        return (
          <div className="tab-content">
            <h2>Past Memories</h2>
            <div className="memories-gallery">
              {event.memories?.map((image, index) => (
                <img key={index} src={image} alt={`Memory ${index}`} />
              )) || <p>No memories available.</p>}
            </div>
          </div>
        );
      default:
        return <p>Select a tab to view information.</p>;
    }
  };

  return (
    <>
      <div className="event-details-container container">
        <div className="event-details-banner">
          <img src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/galaxy-header.jpg" alt="" className="banner-image" />
        </div>

      <div className="sub-container">
        <div className="event-info">
          <div className="event-details-info">
            <h2 className="event-details__title">{event.heading}</h2>
            <div className="date-container">
              <SlCalender />
              <p className="event-details__date">{formatDate(event.date)}</p>
            </div>
            <div className="location-container">
              <IoLocationOutline />
              <p className="event-details__location">{event.location}</p>
            </div>
            <p className="event-tag">{event.tag}</p>
          </div>

          <div className="event-details-description">
            <div className="tabs">
              <button
                className={`tab-button ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`tab-button ${
                  activeTab === "rulebook" ? "active" : ""
                }`}
                onClick={() => setActiveTab("rulebook")}
              >
                Rule Book
              </button>
              <button
                className={`tab-button ${
                  activeTab === "memories" ? "active" : ""
                }`}
                onClick={() => setActiveTab("memories")}
              >
                Past Memories
              </button>
            </div>
            {renderTabContent()}
          </div>
        </div>
        <div className="register-container">
          <div className="top">
            <p className="register-type">Free</p>
            <button className="register-button">Register</button>
          </div>
          <div className="bottom">
            <div className="info-container">
              <MdGroups />
              <div className="info-text">
                <p className="top">Registered</p>
                <p className="bottom">105</p>
              </div>
            </div>
            <div className="info-container">
              <BsFillPeopleFill />
              <div className="info-text">
                <p className="top">Team Size</p>
                <p className="bottom">2 - 3 Members</p>
              </div>
            </div>
            <div className="info-container">
              <FaTrophy />
              <div className="info-text">
                <p className="top">Prizes worth</p>
                <p className="bottom">₹ 10,000</p>
              </div>
            </div>
            <div className="info-container">
              <FaClock />
              <div className="info-text">
                <p className="top">Registration Deadline</p>
                <p className="bottom">8 Days left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EventDetails;
