import { Link } from "react-router-dom";

function About()
{
    return(
        <>
        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <h1 className="Display-1 text-white">About Us - Mr Rob McGowan & Tiwaiwaka</h1>

            <figure className="portrait-container">
                <img className="p-0 rounded border shadow container" style={{ maxWidth: '75%', maxHeight: '75%', objectFit: 'cover' }} src="images/RobMcGowan.jpg" alt="Mr Rob McGowan"/>
                <figcaption>
                    Mr Rob Mcgowan <br></br><br></br>
                    <i>“It’s guiding principles represent a different set of priorities to how the world operates today. 
                        The number one priority is not profit but caring for the whenua. That’s the only way to ensure long 
                        term sustainability. The Earth’s resources are finite. They are already beginning to run out.”<br></br><br></br>

                        “We are very scientific these days, we have all sorts of experts to refer to, we have Doctor Google 
                        who knows everything… Do we ever ask the land what we should put there...instead of imposing on the 
                        land what we think is right, what we think is best? ... really, it's representative of that whole issue 
                        of trying to get us people who live in New Zealand to actually respect much more the mana of the whenua 
                        (land) here and to be taught by it…that’s the reversal of thinking, isn’t it?"
                    </i>
                </figcaption>
            </figure>
         
            <br></br>
            <br></br>
            
            <font size="4">Mr Robert McGowan, also known as Pa Ropata, is a Rongoā Māori Practitioner and has run courses and workshops to keep this taonga alive by teaching thousands of students over past 20+ years. He has written many books about plants, trees and birds, is a repository of knowledge, and has dedicated himself 
            to preserving and restoring the bush as the healing cloak of the land to which this has become a life mission. <br></br> <br></br> Rob has been a plant person for as long as he can remember but it was in the 1960’s during his 1st posting in Whanganui, whilst training for the priesthood and working with the locals, that 
            he was introduced to Te Ao Māori, the Māori world view, and it was then that his real education around the bush began. Under the ’wing’ of Whanganui kuia “Aunty” Rua Henare he learnt to speak Te Reo Māori, learnt how to harvest and plant flax for the Piupiu, and how to harvest the bark for the dye. 
            <br></br> <br></br>He was entrusted with the job of collecting leaves for Aunty Rua to make <Link to ="https://bpac.org.nz/bpj/2008/may/docs/bpj13_rongoa_pages_32-36.pdf">Rongoā</Link> since he had a good understanding of the bush and the plants. Gradually Rua Henare began to teach Rob the sacred knowledge of the river 
            people, mainly because he was a priest and understood the spiritual side of the world, understanding the foundation of traditional Māori medicine is not plants but wairua. 
            Which led to the birth of The Tīwaiwaka movement, a collective of people bringing together gifts and abilities, Mātauranga, skills and experience, and networks throughout Aotearoa. A voice for the earth, a message of hope and survival and learning to live in harmony with Papatūānuku so that all may thrive.<br></br><br></br>
            Rob also focuses his energy on Ngā Whenua Rahui, a contestable Ministerial fund established to fund the protection of indigenous ecosystems on Māori land. He is a co-initiator and trustee of the non-profit Tane’s Tree Trust, which encourages landowners to sustainably plant and manage indigenous trees. He was the founding Chair of the Kaimai-Mamaku Catchments Forum and is a member and past Chairman of the Bay of Plenty Conservation Board. 
            Mr Robert McGowan has also been awarded a QSM (Queens Service Medal), for services to Māori and conservation and is the recipient of the Te Papa Atawhai Champion, the Supreme Matariki Award 2023. 
            </font>
            
        </div>

        <div className='card-body mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.92)'}}>
        <h1 className="Display-1 text-white">Why is Tiwaiwaka Important?</h1>

            <figure className="portrait-container">
            <img className="p-0 rounded border shadow container" style={{ maxWidth: '75%', maxHeight: '75%', objectFit: 'cover' }} src="images/RobsHouse.png" alt="Tiwaiwaka Site"/>
            <figcaption>Rob's Home // Tiwaiwaka Site</figcaption>
            </figure>
         
            <br></br>
            <br></br>
            
            <font size="4">
                With native plants disappearing at an alarming rate it is here on this 2.4Ha block of land where he lives with his family, in the back blocks of Welcome Bay, 
                that Rob carries out plant propagation either for his own work or in order to share his knowledge with Rongoā Māori students, conservation cadets, schools, 
                or anyone prepared to listen and learn. <br></br><br></br> Other reasons for the site are:<br></br><br></br> 
                <ol>
                    <li>
                        To re-vegetate the whenua.
                    </li>
                    <li>
                        To grow what he needs for medicine that he doesn’t have the time to go elsewhere to get.
                    </li>
                    <li>
                        To grow plants for the Waitao Care Group.
                    </li>
                    <li>
                        To plant as many different species he can fit in, some common and some extremely rare, so people can learn to get to know them, see the differences, 
                        and so people can recognise them.
                    </li>
                </ol>

                3 kms away on the top of the valley are the Kaiate Falls, a spectacular set of waterfalls which feed into the Waitao Stream with its big aim being to clean 
                it up so it is safe enough for the kids to swim in. His own “back-yard” kind of way of buying into the bigger vision to bring back the birds, the whitebait, 
                the things we treasure while also bringing back the whole idea of a rural community.
                <br></br><br></br>
                It's all about connection. Connection to the whenua-to Papatūānuku. “The fundamental sickness of the human race stems from its loss of connection to the whenua. 
                If we don’t look after her (Papatūānuku) we have no future”. Matua McGowan wants all New Zealanders to be more connected to the land, more ‘literate’, to the trees, 
                plants, birds and animals. It has been his mission for decades and with the ‘Tīwaiwaka’ movement and this piece of paradise that he calls home, will continue to be 
                for many more.


            </font>
            
        </div>
        </>
        

        
        
    );
}

export default About;