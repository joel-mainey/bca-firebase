import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { Link, useLocation } from "react-router-dom";

function Hilltop() {
  const [plantList, setPlantList] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPlantList = async () => {
      try {
        const plantCollectionRef = collection(db, 'plants');
        const q = query(plantCollectionRef, where('Location', '==', 'Hilltop'));
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
      <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}>
        <p>
          <h1 className="Display-1 text-white">Hilltop</h1>
          <br></br>
          <font size="4">
            <i>
              The kauri on this hillside were planted in 2003. As with the kahikatea in the wetland, these kauri were
              planted amongst a nurse crop, only this time kanuka was used as opposed to manuka. As you can see, they
              have grown so much in such a short space of time. Kauri need light to grow, and in the early years grow
              quickly in order for the crowns to reach above the canopy. The kanuka is slowly dying off leaving a canopy
              of kauri in its place. These trees are part of a research project and are monitored and measured
              periodically to better understand growth habits of planted kauri. It is a misconception that native trees
              grow slowly. In fact, if the right tree is planted in the right place, growth can be rapid, as is
              demonstrated here with the kauri. Elsewhere in here you can see titoki, whau, and rimu.
            </i>
            <br></br>
            <br></br>
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

export default Hilltop;



