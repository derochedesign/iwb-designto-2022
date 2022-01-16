import React from "react";

const Footer = props => {

  return (
    <section className="footer" ref={props.refC}>
      <div className="item-list">
        <h2>How can designers and non-designers alike help facilitate the introduction of climate ready communities?</h2>
        <ol>
          <li>Read our report here.</li>
          <li>Participate in our design charrette next month</li>
          <li>Provide feedback for what you'd like to see in a climate ready community.</li>
        </ol>
        <div className="footer-buttons">
          <button>IG Account</button>
          <button>Mailing List</button>
        </div>
      </div>
    </section>
  )
}

export default Footer;