import React from "react";

const Footer = props => {
  
  const sources = [
    "https://google.com",
    "https://google.com",
    "https://google.com",
    "https://google.com"
  ]

  return (
    <section className="footer" ref={props.refC}>
      <div className="item-list-large">
        <div className="footer-buttons">
          <a href={sources[0]} rel="noopener" target={"_blank"}><button className="round">Download Report</button></a>
          <a href={sources[1]} rel="noopener" target={"_blank"}><button className="round">Mailing List</button></a>
          <a href={sources[2]} rel="noopener" target={"_blank"}><button className="round">Institute without Boundaries</button></a>
          <a href={sources[3]} rel="noopener" target={"_blank"}><button className="round">Follow us on IG</button></a>
        </div>
      </div>
    </section>
  )
}

export default Footer;