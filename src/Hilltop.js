import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './config/firebase'; 

function Hilltop() {

    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
      const getPlantList = async () => {
        try {
          const plantCollectionRef = collection(db, 'plants');
          const q = query(plantCollectionRef, where('Location', '==', 'Hilltop'));
          const querySnapshot = await getDocs(q);
          const plants = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPlantList(plants);
          } catch (err) {
          console.error(err);
        }
      };

      getPlantList();
    }, []);

 

  return (
      <div className="App">        
        <div className="row mb-5" key = "{plant.Name" >
          {plantList.map((plant) => (
          <div className="col-4">
            <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: 'Green'}}  >
            <h1 id={plant.Name}>{plant.Name}</h1>
            <p><img src={plant.Picture} alt= {plant.Name} className="rounded shadow" style={{"maxWidth" : "70%", "maxHeight" : "50%" }}></img></p>
            <p><h2>Authority: </h2><font size="4">{plant.Authority}</font></p>
            <p><h3>Family: </h3><font size="4">{plant.Family}</font></p>
            <p><h3>Description: </h3><font size="4">{plant.Narrative}</font></p> 
            </div>      
          </div>
          ))}
        </div>
      </div>
    );
}

export default Hilltop;