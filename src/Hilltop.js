// Importing needed webhooks.
// import {useEffect, useState} from 'react';
// import { useHref } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'


function Hilltop()
{

    const [plantList, setPlantList] = useState([]);




    useEffect(() => {
        
    const getPlantList = async () => {
        
    try {
        
    const plantCollectionRef = collection(db, 'plants');
        
    const q = query(plantCollectionRef, where('Location', '==', 'Hilltop'));
        
    const querySnapshot = await getDocs(q);
        
    const plants = querySnapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()
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
            <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: "rgba(0,0,0,0.92)"}} key={plant.Name}>
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
        
        
        
        
        
    // return (
    //     <div className="App">
        
    //         <div className="row mb-5" key = "{plant.Name}" >
        
    //             {plantList.map((plant) => (
        
    //             <div className="col-6">
        
    //                 <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: "rgba(0,0,0,0.92)"}} >
        
    //                     <p><h1 id={plant.Name}>{plant.Name}</h1></p>
        
    //                     <p><img src={plant.Picture} alt= {plant.Name} className="rounded shadow" style={{"maxWidth" : "100%", "maxHeight" : "90%" }}></img></p>
        
    //                     <p><h4>Authority: </h4><font size="4">{plant.Authority}</font></p>
                    
    //                     <p><h4>Family: </h4><font size="4">{plant.Family}</font></p>
        
    //                     <p><h4>Description: </h4><font size="4">{plant.Narrative}</font></p>
        
    //                 </div> 
        
    //             </div>
        
    //             ))}
        
    //         </div>
        
    //     </div>
    // );
        
    }


    //
    //
    //Add const variables here
//     const [state, setState] = useState([])

//     function getData()
//     {
//     //API data from restDB
//     var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://bcaspecieslist-bbda.restdb.io/rest/specieslist");
// xhr.setRequestHeader("content-type", "application/json");
// xhr.setRequestHeader("x-apikey", "49d7afd2dfe76921b78d77960e8828d02c273");
// xhr.setRequestHeader("cache-control", "no-cache");

// xhr.send(data);
//     }

//     //Using the useEffect webhook we can now tell the DOM to display the data
//     //First parameter is a function to grab data, second is to update state variable with data.
//     useEffect
//     (
//         ()=>{
//             getData();
//         }, [state]
//     );



    


export default Hilltop;