import React from "react";

const Footer = props => {

  return (
    <section className="footer" ref={props.refC}>
      <div className="item-list-large">
        <div className="footer-buttons">
          <button className="round">Download Report</button>
          <button className="round">Join our Mailing List</button>
          <button className="round">2022 Charrete</button>
          <button className="round">Institute without Boundaries</button>
          <button className="round">Follow us on IG</button>
        </div>
      </div>
    </section>
  )
}

export default Footer;