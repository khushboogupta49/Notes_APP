import React from "react";
import "./LNotesContent.css";

function LNotesContent({ note }) {
  
  return (
    <div className="notes_content_note">

<div className="notes_content_details">
        {note.content}
      </div>

      {/* <div className="notes_content_date_time_details">
      <div className="notes_content_time">{note.time}</div>
     
        <div className="notes_content_date">{note.date}</div>
      </div> */}


<div className="notes_content_date_time_details">
      <p className="notes_content_time">{note.date} - {note.time}</p>
     
        {/* <div className="notes_content_date">{note.date}</div> */}
      </div>


    </div>
  );
}

export default LNotesContent;
