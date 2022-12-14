import React, { useEffect, useState } from "react";
import "./resourcepage.css";

const Resources = ({ user }) => {
  const [resource, setResource] = useState([]);

  const getResource = async () => {
    const response = await fetch("/api/resources");
    const resource = await response.json();
    setResource(resource);
  };

  useEffect(() => {
    getResource();
  }, []);

  return (
    <div className="resources">

      <h1 className="resources-h1">
        Mental Health <br></br>Hotlines
      </h1>
      <br></br>
      <br></br>

      <ul className="reso-ul">
         {resource.map((reso, index) => {
          return (
            <div className="reso-cards">
              <li key={index} className="reso-index">
                <img className="reso-image" src={reso.image}></img>
                <div className="reso-name">{reso.name} </div>
                <div className="reso-note">{reso.note}</div>
                <br></br>
                <div className="reso-phone">{reso.phone}</div>
                <br></br>
                <a target="_blank" href={reso.website}>
                  <button className="reso-btn">Visit</button>
                </a>

              </li>
            </div>
          );
        })}
      </ul>
      <h2 className="resources-h2">
        {" "}

        <div className="h2-top">
          This website is not intended for use as an emergency service. If
          you're in a life-threatening situation, do not use this site. Call the
          National Suicide Prevention Lifeline, a free, 24-hour hotline, at
          1-800-273-8255 or text "NAMI" TO 741741. Your call will be routed to
          the crisis center near you. If you are experiencing a crisis, go to
          your nearest emergency room.{" "}
        </div>
        <br></br>
        <br></br>
        <div className="h2-bottom">
          This website is not intended for use as an emergency service. If
          you're in a life-threatening situation, do not use this site. Call the
          National Suicide Prevention Lifeline, a free, 24-hour hotline, at
          1-800-273-8255 or text "NAMI" TO 741741. Your call will be routed to
          the crisis center near you. If you are experiencing a crisis, go to
          your nearest emergency room. If you choose to call the police, please
          be aware that they are not equipped to offer mental health support and
          may even pose danger to BIPOC individuals, Non-English speakers, our
          Undocumented community, Neurodivergent people and Disabled folks. When
          calling the police, you should also contact the people in your
          community that are most likely to support and advocate for you. If you
          choose to call the police, please be aware that they are not equipped
          to offer mental health support and may even pose danger to BIPOC
          individuals, Non-English speakers, our Undocumented community,
          Neurodivergent people and Disabled folks. When calling the police, you
          should also contact the people in your community that are most likely
          to support and advocate for you.
        </div>

      </h2>
    </div>
  );
};

export default Resources;
