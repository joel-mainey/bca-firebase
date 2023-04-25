import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';

function Valley()
{
      const [plantList, setPlantList] = useState([]);

      useEffect(() => {
        const getPlantList = async () => {
          try {
            const plantCollectionRef = collection(db, 'plants');
            const q = query(plantCollectionRef, where('Location', '==', 'Valley'));
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
    
              {plantList.map((plant) => (
    
                <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: "green"}} key={plant.Name}>
    
                  <h1 id={plant.Name}>{plant.Name}</h1>    
                  <div style={{display: 'flex', justifyContent: 'center'}}>
    
                    <img src={plant.Picture} alt={plant.Name} className="rounded shadow" style={{"maxWidth" : "100%", "maxHeight" : "40vw", "objectFit": "cover" }} />    
                  </div>    
                  <p><strong>Authority:</strong> {plant.Authority}</p>   
                  <p><strong>Family:</strong> {plant.Family}</p>    
                  <p><strong>Description:</strong> {plant.Narrative}</p>    
                </div>    
              ))}    
            </div>
          );
}

export default Valley;