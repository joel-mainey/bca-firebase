// Importing needed webhooks.
// import { useHref } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'


function Wetlands()
{

    const [plantList, setPlantList] = useState([]);

    useEffect(() => {
        
        const getPlantList = async () => {
        
            try {
        
                const plantCollectionRef = collection(db, 'plants');
        
                const q = query(plantCollectionRef, where('Location', '==', 'Wetlands'));
        
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

<p><h1 className="Display-1 text-white">Wetlands</h1>
<br></br>
<font size="4"><i>Within this wetland, you will see a range of plants that prefer to grow in wetter areas. Along with rushes, harakeke, sedges and mingimingi, the kahikatea also prefers wet feet. These kahikatea were planted in ?? amongst a nurse crop of mānuka. As a nurse crop, the manuka provided essential shelter for the kahikatea in the all important early years. Eventually, the kahikatea outgrew the manuka. This approach is common in restoration plantings, whereas nurse crops are planted to support the growth of the "forever" trees.</i><br></br><br></br>

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

export default Wetlands;













