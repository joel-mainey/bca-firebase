import { useEffect, useState } from 'react';
import { db, storage } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

function Valley()
{
    const [plantsList, setPlantsList] = useState([]);
    const plantsColectionRef = collection(db, "plants");

    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
  
    useEffect(() => {
        const getPlantsList = async () => {
          try {
          const data = await getDocs(plantsColectionRef);
          const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}));
          setPlantsList(filteredData);
          } catch (err) {
            console.error(err);
          }
      };
  
      getPlantsList();
    }, []);

   useEffect(() => {
     listAll(imageListRef).then((response) => {
       response.items.forEach((item) => {
         getDownloadURL(item).then((url) => {
           setImageList((prev) => [...prev, url]);
         });
       });
     });
   }, []);

    return (
      <div className="App">        
        <div className="row mb-5" key = "{plant.Name" >
          {plantsList.map((plant) => (
          <div className="col-4">
            <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: 'Green'}}  >
            <h1 id={plant.Name}>{plant.Name}</h1>
            <p><img src={plant.Picture} alt= {plant.Name} className="rounded shadow" style={{"maxWidth" : "70%", "maxHeight" : "50%" }}></img></p>

            {/* {imageList.map((url) => {
              return <img src={url} className="rounded shadow" style={{"maxWidth" : "70%", "maxHeight" : "50%" }}/>
            })} */}

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

export default Valley;