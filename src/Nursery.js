// Importing needed webhooks.
// import { useHref } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

function Nursery()
{
    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
        
        const getPlantList = async () => {
        
            try {
        
                const plantCollectionRef = collection(db, 'plants');
        
                const q = query(plantCollectionRef, where('Location', '==', 'Nursery'));
        
                const querySnapshot = await getDocs(q);
        
                const plants = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                    
                setPlantList(plants);
        
            }   catch (err) {
                    console.error(err);
                }
        
    };
        
    getPlantList();
        
    }, []);
        
    return (
        <div className="App">

<div className='row mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>

<p><h1 className="Display-1 text-white">Nursery</h1>
<br></br>
<font size="4"><i>Aotearoa/NZ evolved isolated from the rest of the world and as a result the vast majority of our native species exist nowhere else in the world. Some 84% of our plants are unique and grow nowhere else on earth. They have adapted over millennia to thrive and occupy most parts of the landscape from the driest of sand dunes, through temperate forest, and all the way to the alpine regions where they can survive being buried in snow.<br></br><br></br> 
Unfortunately, nearly half of our native plants are at risk due to introduced pests and habitat loss. In this nursery area you can find some of these threatened plants that have been collected from around the country. These plants are used to provide a seed source so more plants can be grown. During your walk around, take note of how varied the plants are in appearance, and often they can be clues to the sort of environment they grow in naturally
.</i><br></br><br></br>

</font>
</p>


        </div>
        
            <div className="row mb-5" key = "{plant.Name}" >
        
                {plantList.map((plant) => (
        
                <div className="col-6">
        
                    <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: "rgba(0,0,0,0.92)"}} >
        
                        <p><h1 id={plant.Name}>{plant.Name}</h1></p>
        
                        <p><img src={plant.Picture} alt= {plant.Name} className="rounded shadow" style={{"maxWidth" : "100%", "maxHeight" : "90%" }}></img></p>
        
                        <p><h4>Authority: </h4><font size="4">{plant.Authority}</font></p>
                    
                        <p><h4>Family: </h4><font size="4">{plant.Family}</font></p>
        
                        <p><h4>Description: </h4><font size="4">{plant.Narrative}</font></p>
        
                    </div> 
        
                </div>
        
                ))}
        
            </div>
        
        </div>
    );
        
}

export default Nursery;