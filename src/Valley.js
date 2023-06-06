import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { Link, useLocation } from "react-router-dom";

function Valley() {
  const [plantList, setPlantList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPlantList = async () => {
      try {
        const plantCollectionRef = collection(db, 'plants');
        const q = query(plantCollectionRef, where('Location', '==', 'Valley'));
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
      <p><h1 className="Display-1 text-white">Valley</h1>
      <br></br>
      <font size="4"><i>This area by the stream used to be grazed by goats and as result there was no understorey because the goats would eat any seedlings that grew here. Now, without the goats, the native ferns and shrubs are thriving under the protection of the canopy trees. The bamboo on the opposite side of the stream provides the shelter required to prevent the wind from drying things out. Shade is essential to a healthy waterway as it regulates the temperature and allows native freshwater species such as koura to thrive. In turn the stream nourishes the surrounding trees.</i><br></br><br></br>
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
          <div style={{ display: 'inline-flex', justifyContent: 'left'}}>
            <img
              src={plant.Picture}
              alt={plant.Name}
              className="rounded shadow"
              style={{ "maxWidth": "50%", "maxHeight": "", "objectFit": "cover", "paddingRight": '20px', "paddingTop": '5px' }}
            />
          <p><strong>Description:</strong> {plant.Narrative}</p>
          </div>
          <p style={{"paddingTop": '10px',}}><strong>Authority:</strong> {plant.Authority}</p> 
          <p><strong>Family:</strong> {plant.Family}</p>
        </div>
      ))}
    </div>
  );
}


export default Valley;
