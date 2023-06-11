import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from './config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { Link, useLocation } from "react-router-dom";

function Glossary() {
  
        
    return (
        <div className="App">
        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Glossary</h1>
        <br></br>
        <font size="4"><i>Here you can find additional information, useful terminology and links relating to the plants here at Tiwaiwaka.</i><br></br><br></br>
        </font>
        </p>
        </div>

        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Harakeke</h1>
        <br></br>
        <font size="4">Harakeke (flax) is also a plant that tolerates wet feet. It is hugely significant to Māori. Harakeke represents the whānau (family) in Māori thought. The rito (shoot) is the child. It is protected by the awhi rito (parents) that surround the rito. The outside leaves represent the tūpuna (grandparents and ancestors). Because of this, there is tikanga (custom) relating to the harvesting of leaves. 
        <br></br><br></br>
        <Link to="https://teara.govt.nz/en/diagram/13162/harakeke-plant" target="_blank">Click here for more info!</Link>
        <br></br><br></br>
        There are two species of flax in New Zealand - common flax (harakeke) and mountain flax (wharariki). We all recognise the tall, green, sword-like leaves of flax that can be found growing throughout New Zealand. 
        Harakeke flax is found throughout the country, especially in wet areas, while wharariki is found both at higher altitudes and along exposed coastlines
        Flax bushes will often support a large community of animals, providing shelter and an abundant food resource with Tui, bellbirds/ korimako, saddlebacks/tīeke, short tailed bats/pekapeka, geckos and several types of insects  all benefiting from the plant. Although we still call it flax today, harakeke is really a lily. 
        Uses of flax
        <br></br><br></br>
        Flax was the most important fibre plant to early Māori. Each pā or marae typically had a ‘pā harakeke’, or flax plantation. Different varieties were specially grown for their strength, softness, colour and fibre content. The uses of the flax fibre were numerous and varied. Clothing, mats, plates, baskets, ropes, bird snares, lashings, fishing lines and nets were all made from flax leaves. 
        Flax also had many medicinal uses. The sticky sap or gum that flax produces was applied to boils and wounds and used for toothache. Flax leaves were used in binding broken bones and matted leaves were used as dressings. Flax root juice was routinely applied to wounds as a disinfectant.
        <br></br><br></br>
        Flax was also a valuable resource to Europeans during the nineteenth century because of its strength. It was New Zealand’s biggest export by far until wool and frozen mutton took over later in the century.
<br></br><br></br>
        </font>
        </p>
        </div>

        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Heteroblasty</h1>
        <br></br>
        <font size="4">Heteroblasty describes how plants can take on a different form as they age. This is not uncommon amongst our native pants, with horoeka/lancewood being one such example. The reasons for heteroblasty in Aotearoa are not conclusive, but there is evidence that would suggest that it is a protection mechanism against being browsed by moa. The aforementioned horoeka also has a mottled appearance making the seedlings look practically invisible to some birds.
        <br></br><br></br>
                       Here we have matai, one of our forest giants. It too is heteroblastic. You will see how the foliage is a tangled mess of branches, but if you look closely you can see where the foliage is changing to the adult form, which is totally different from the juvenile form.
        <br></br><br></br>
        <img src = "images/Prumnopitys taxifolia (CNI, Napier- Taupo Highway).JPG" 
               alt = "Matai"
               className="rounded shadow"
               style={{ "maxWidth": "80%", "maxHeight": "50vw", "objectFit": "cover", "paddingBottom": '10px'}}></img>
        <br></br><br></br>
        </font>
        </p>
        </div>

        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Podocarps</h1>
        <br></br>
        <font size="4">Podocarps are an ancient group of trees that belong to the conifer family. They evolved some 350 million years ago long before there were flowering plants. Podocarp literally means 'foot-seed'. This is because the seed lies below the fruit rather than enclosed by it, as is the case with other plants. In Aotearoa, we have 14 species of podocarp. They include the rimu, matai and miro that you can see here. The well known kahikatea and totara are also podocarps.
                          <br></br><br></br>
                          Podocarps are some of our longest living trees. Kaihikatea, totara and rimu can live between 500 - 2000 years and will eventually tower above the forest. They are all endemic meaning they exist nowhere else in the world.
                          <br></br><br></br>
                          Unfortunately, their timber was very much sought after, and as a result many of these forest giants were felled for timber, and to make way for farmland.
                          <br></br><br></br>
        </font>
        </p>
        </div>
        
        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <p><h1 className="Display-1 text-white">Rongoa</h1>
        <br></br>
        <font size="4">Rongoā Māori is the traditional healing system of Māori. It focuses on the oral transmission of knowledge, diversity of practice and the spiritual dimension of health. Rongoā Māori encompasses herbal remedies, physical therapies and spiritual healing. 
        <br></br><br></br>
        <Link to ="https://bpac.org.nz/bpj/2008/may/docs/bpj13_rongoa_pages_32-36.pdf">For more details on Rongoa, click here!</Link>
        <br></br><br></br>
        More than 30 uses have been listed for kawakawa by early Māori. The fruit, bark, leaves and roots were all considered to possess medicinal properties, but the species was of spiritual significance as well. The large, heart-shaped leaves were a Māori symbol for courage and fortitude, while a branch of kawakawa laid on the marae was regarded as an aituā, signifying mourning and death. Māori used various leaf preparations as dressings for bad wounds and remedies for a number of ailments, including serious bruises, rheumatic pains, coughs, colds, chest complaints such bronchitis, kidney troubles and boils. Leaf preparations were used as a general tonic to treat eczema and venereal disease, while the bitter root extract provided medicine for urinary complaints. The leaves contain myristicin, which is mildly antiseptic and has pain numbing properties, and so is used by Māori to allay toothache. Kawakawa also served as an insect deterrent. Green leaves and branches were gathered, laid in rows in plantations of kūmara, and burnt so that insects injuring the growing plants might be repulsed or destroyed by the disagreeable bitter smoke.
        <br></br><br></br>
        <Link to = "https://www.waikatoregion.govt.nz/assets/WRC/Services/regional-services/Beachcare/2012-Kawakawa.pdf">For more on the healing properties of Kawakawa, click here!</Link>
        <br></br><br></br>
        If you’re a keen kawakawa forager or lover of plants you may have noticed that more often than not the leaves of this plant are covered in holes. These are made by the hungry caterpillars of the kawakawa looper moth (Cleora scriptaria). But don’t be deterred, when it comes to choosing leaves, opt for the holey ones! Research has shown that the chewed leaves have more active compounds, triggered and released by the caterpillars munching!
        <br></br><br></br>
        Rongoā Māori is a taonga (gift). It is something that is highly valued, to be treasured, treated with the upmost care and respect." (Quote from Pa Ropata).
        <br></br><br></br>
        <Link to = "https://www.enrichwithnature.co.nz/Plants/Plant.cshtml?plant_id=730">For more details on Titoki and its healing properties, click here!</Link>
<br></br><br></br>
        </font>
        </p>
        </div>
    
    </div>
  );
}

export default Glossary;













