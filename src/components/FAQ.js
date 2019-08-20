import React from "react";
import "./FAQ.css";

const Faq = props => {
  return (
    <div id="faq">
      <h1 className="header neon-green">FAQ</h1>
      <div className="faq-info">
        Check back closer to the event date for more information. If you don't
        see your question, email us at:
        <a className="email" href="mailto:h=hiHackathon@fordham.edu">
          hackathon@fordham.edu
        </a>
      </div>
      <h3 className="sub-header question neon-white">When is it?</h3>
      <p className="answer">
        Check-in will start at 10am on January 25, 2020, and the closing ceremony
        will end at 2pm on January 26, 2020 (with a full 24 hours allotted for hacking
        sandwiched between start and end). We will have the schedule available
        when the event draws closer!
      </p>
      <h3 className="sub-header question neon-white">Where is it?</h3>
      <p className="answer">
        Fordham University School of Law 150 W 62nd St, New York, NY 10023
      </p>
      <h3 className="sub-header question neon-white">Does this cost money?</h3>
      <p className="answer">
        Nope! We will provide space to hack/sleep, power/wifi access, food,
        snacks, drinks, swag, workshops, and memories of that time you spent a
        weekend learning with cool people at the center of the best city in the
        world.
      </p>
      <h3 className="sub-header question neon-white">What should I bring?</h3>
      <p className="answer">
        Just a government issued ID, student ID, laptop, chargers, and a change
        of clothing and toiletries (if you plan to stay overnight).
      </p>
      <h3 className="sub-header question neon-white">Who's coming?</h3>
      <p className="answer">Students in and around NYC!</p>
      <h3 className="sub-header question neon-white">How do I get there?</h3>
      <p className="answer">
        If you’re coming from the city, the closest train lines are the A, B, C,
        D, and 1 trains at 59th St Columbus Circle. Alternatively you can take
        the B, D, and E trains to 7th Ave, or N, Q, R, and W trains to 57th St
        and walk a couple of blocks. If you’re coming from outside of the NYC
        transit system’s reach, your commute may look different.
        Unfortunately, we will not be offering travel reimbursement at this
        time.
      </p>
      <h3 className="sub-header question neon-white">Do I need experience?</h3>
      <p className="answer">
        FordhamHacks welcomes students of all majors and skill levels so long as
        you’re coming with the openness to learn and build something cool with
        soon-to-be friends!
      </p>
      <h3 className="sub-header question neon-white">How do teams work?</h3>
      <p className="answer">
        Teams of up to 4 students can be formed - if you prefer working by
        yourself, that is allowed too!
      </p>
      <h3 className="sub-header question neon-white">
        What if I want to have a team but don’t know anyone?
      </h3>
      <p className="answer">
        No worries! We will have a Team Formation session at the start of the
        event so that anyone who wishes to work in a team has one.{" "}
      </p>
      <h3 className="sub-header question neon-white">What are the tracks?</h3>
      <p className="answer">
        The tracks are: Impact on Diversity & Social Good, Health Tech,
        Environment & Disaster Relief, Cybersecurity, and Fintech. FordhamHacks
        encourages hacking for impact and our team chose these tracks because
        they each have plenty of problems to solve and things that can be
        improved upon!
      </p>
    </div>
  );
};

export default Faq;
