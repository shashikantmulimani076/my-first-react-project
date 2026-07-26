import Card from "./Card";
import BMW from "./assets/BMW.jfif";
import toyota from "./assets/toyota.jfif";
import Mercedes from "./assets/mercedes.jfif";
import Jaguar from "./assets/jaguar.jfif";

function  App(){
    return(
        <>
        <h1 style={{textAlign:"center" ,color:"white"}}><u>🔰Premium Cars</u></h1>
        <div style={{
            display:"flex", 
            gap:"20px",
            justifyContent:"center"}}>
        <Card backgroundColor="#111827" color= "white">
            <img 
            src={BMW} 
            alt="BMW M4" 
            width="250" 
            height="200"
            className="car-image"/>
            <h2 style={{color:"blue"}}>BMW M4</h2>
            <p><b>Category:</b>Sports Car</p>
            <p><b>Brand:</b>BMW</p>
            <p><b>Price:</b>$ 1.56 Cr</p>
            <p><b>Fuel:</b>Petrol</p> 
            <h3>⭐Features</h3>
            <ul>
                <li>299cc Twin Turbo Engine</li>
                <li>Leather Seats</li>
            </ul>
            <h3>Dealer Details</h3>
            <p>Name:BMW</p>
            <p>Location:Pune</p>
            <h3>Status</h3>
            <p>Available</p>
           
        </Card>
        <Card backgroundColor="#ECEFF1" color="gray">
            <img
             src={toyota} 
             alt="Toyota Fortuner"
              width="250" 
              height="200"
              className="car-image"/>
            <h2>Toyota Fortuner</h2>
            <p><b>Category:</b>SUV</p>
            <p><b>Brand:</b>Toyota</p>
            <p><b>Price:</b>$ 45 Lakh</p>
            <p><b>Fuel:</b>Diesel</p>
            <h3>⭐Features</h3>
            <ul>
                <li>7 Seater</li>
                <li>4*4 Drive</li>
                <li>Cruish Control</li>
            </ul>
            <h3>Dealer Details</h3>
            <p>Name:Toyota Showroom</p>
            <p>Location:Pune</p>
            <h3>Status</h3>
            <p>Available</p>
           
        </Card>
         <Card backgroundColor="#0F5132" color="white">
            <img 
            src={Mercedes} 
            alt=">Mercedes Benz" 
            width="250" 
            height="200"
            className="car-image"/>
            <h2>Mercedes Benz</h2>
            <p><b>Category:</b>Luxury Sedan</p>
            <p><b>Brand:</b>Mercedes-Benz</p>
            <p><b>Price:</b>$ 65 Lakh</p>
            <p><b>Fuel:</b>petrol</p>
            <h3>⭐Features</h3>
            <ul>
                <li>Panoramic Sunroof</li>
                <li>MBUX Touchscreen</li>
                <li>Wireless Charging</li>
            </ul>
            <h3>Dealer Details</h3>
            <p>Name:Mercedes-Benz Showroom</p>
            <p>Location:Mumbai</p>
            <h3>Status</h3>
            <p>Available</p>
           
        </Card>
        <Card backgroundColor="#6B7280" color="white">
            <img 
            src={Jaguar}
            alt="Jagaur"
            width="250" 
            height="200"
            className="car-image"/>
            <h2>Jagaur</h2>
            <p><b>Category:</b>Luxury SUV</p>
            <p><b>Brand:</b>Jaguar</p>
            <p><b>Price:</b>$ 80 Lakh</p>
            <p><b>Fuel:</b>Diesel</p>
            <h3>⭐Features</h3>
            <ul>
                <li>All Wheel Drive </li>
                <li>Panoramic Sunroof</li>
                <li>Premium Sound System</li>
            </ul>
            <h3>Dealer Details</h3>
            <p>Name:Jaguar Showroom</p>
            <p>Location:Delhi</p>
            <h3>Status</h3>
            <p>Available</p>
           
        </Card>
        </div>
        </>
    );
}

export default App;