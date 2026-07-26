import { useState } from "react";
function Card({ children, backgroundColor, color }) {
    const [booked, setBooked] = useState(false);
    return(
        <div 
        style={{
            backgroundColor,
            color,
            border:"2px solid gray",
            borderRadius:"10px",
            padding:"15px",
            width:"240px",
            margin:"10px",
            boxShadow:"0px 0px 20px black",
           
        }}
        >
            {children}
             <button
               className={booked ? "booked-btn" : "book-btn"}
               onClick={() => setBooked(true)}
              >
             {booked ? "Thanks for Booking" : "Book Now"}
             </button>
        </div>
    );
}

export default Card;