import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { Link, useLocation } from "react-router-dom";

function Wetlands() {
  const [plantList, setPlantList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPlantList = async () => {
      try {
        const plantCollectionRef = collection(db, 'plants');
        const q = query(plantCollectionRef, where('Location', '==', 'Wetlands'));
        const querySnapshot = await getDocs(q);
        const plants = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPlantList(plants);
        setIsDataLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    getPlantList();
  }, []);

  useEffect(() => {
    const scrollToCard = () => {
      const hash = location.hash;
      if (hash && isDataLoaded) {
        const cardId = hash.substring(1);
        let attempts = 0;
        const checkCardElement = setInterval(() => {
          const cardElement = document.getElementById(cardId);
          console.log("Attempt:", attempts);
          console.log("CardId:", cardId);
          console.log("CardElement:", cardElement);
          if (cardElement) {
            console.log("Scrolling...");
            cardElement.scrollIntoView({ behavior: "smooth" });
            clearInterval(checkCardElement);
          }
          attempts++;
          if (attempts > 10) {
            console.log("Card element not found");
            clearInterval(checkCardElement);
          }
        }, 500);
      }
    };

    scrollToCard();
  }, [location, isDataLoaded]);
        
    return (
        <div className="App">
        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Wetlands</h1>
        <br></br>
        <font size="4"><i>Within this wetland, you will see a range of plants that prefer to grow in wetter areas. Along with rushes, harakeke, sedges and mingimingi, the kahikatea also prefers wet feet. These kahikatea were planted in 2003 amongst a nurse crop of mānuka. As a nurse crop, the manuka provided essential shelter for the kahikatea in the all important early years. Eventually, the kahikatea outgrew the manuka. This approach is common in restoration plantings, whereas nurse crops are planted to support the growth of the "forever" trees.</i><br></br><br></br>
        </font>
        </p>
        </div>
        
    
        {plantList.map((plant) => (
        <div
          className="card-body mt-3 p-3 rounded border shadow text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          id={plant.Name.replace(/\s/g, "")} // Remove spaces from plant name to create the card ID
          key={plant.Name}
        >
          <h1>{plant.Name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img
              src={plant.Picture}
              alt={plant.Name}
              className="rounded shadow"
              style={{ "maxWidth": "80%", "maxHeight": "50vw", "objectFit": "cover", "paddingBottom": '10px'}}
            />
          </div>
          <p><strong>Description:</strong> {plant.Narrative}</p>
          <p><strong>Authority:</strong> {plant.Authority}</p> 
          <p><strong>Family:</strong> {plant.Family}</p>
        </div>
      ))}
    </div>
  );
}

export default Wetlands;













