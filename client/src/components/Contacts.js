import React from "react";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
export default function Contacts() {
  return (
    <div>
      <h3>Contact Us</h3>
      <p className="text-justify">
        If you are unhappy, or if you have any complaints about the research
        project in the first instance, please feel free to let us know by
        contacting the Researcher or Supervisor at the email addresses below,
        and we will try to help. If you remain unhappy or have a complaint which
        you feel you cannot come to either the Researcher or Supervisor, then,
        you can contact the Research Governance Officer or the University of Liverpool 
        directly at either of the following email addresses:
      </p>
      <p className="text-justify">Email: ethics@liv.ac.uk</p>
      <p className="text-justify">Email: liverpoolethics@ohecampus.com</p>
      <p className="text-justify">
        When contacting the Research Governance Officer or Liverpool Research 
        Participant Advocate, please provide details of the name of the Researcher and 
        Supervisor involved, and the particulars of the complaint you wish to 
        make.
      </p>
	    <p className="text-justify">Researcher: John Lamprecht</p>
      <p className="text-justify">Email: John.Lamprecht@online.liverpool.ac.uk</p>
      <p className="text-justify">Supervisor: Dr. Jim Hanly</p>
      <p className="text-justify">Email: Jim.Hanly@online.liverpool.ac.uk</p>
      <h3>Website Issues</h3>
	    <p className="text-justify">Researcher: John Lamprecht</p>
      <p className="text-justify">Email: jcl@consensusmetals.info</p>
    </div>
  );
}
