import "./TripStyles.css";
import TripData from "./TripData";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>A good traveler has no fixed plans, and is not intent on arriving</p>
      <div className="tripcard">
        <TripData
          image={
            "https://images.unsplash.com/photo-1606586965628-2f024caa60af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtlZGFya2FudGhhJTIwdHJla3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          heading="Kedarkantha, Uttarakhand, India"
          text="Kedarkantha (not to be confused with the popular Temple Kedarnath) is a 6-day long trek in Govind Pashu Vihar National Park in Uttarakhand (6 when including the travel days from Dehradun to the base camp and back).
           Kedarkantha is easily one of the most popular treks in India — popular amongst seasoned trekkers and beginners alike.
           There are many reasons why it is a very popular trek to do in the Indian Himalayas.  
           The third biggest reason this trek is unique is its beautiful forests.  All three routes have beautiful diverse forests that will immerse you.  
           If you are not careful, you will get lost in them (in a good way)."
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1599997207140-c9c5c1f5f458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          }
          heading="Kasol,Himachal pardesh India"
          text="Kasol is a quaint little village in Himachal situated along the banks of the river Parvati. 
          Commonly known as the 'Amsterdam of India', Kasol is a tourist attraction that is rapidly gaining fame as a popular hub for trekkers, backpackers, and nature lovers. 
          The valley is situated 23 kms from Bhuntar and next to the religious town of Manikaran and is one of the best places in the country just to sit back and chill in the panorama of snow-clad mountains, pine trees and serene river.
          Famous for its trekking trails,
          Kasol is popular for several treks to Kheerganga, Yanker Pass, Sar Pass, and Pin Parbati Pass."
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          }
          heading="Rishikesh,Uttarakhand, India"
          text="Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. 
        It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge.
        There are numerous temples and ashrams built along the banks of the river.
        It is known as the Gateway to the Garhwal Himalayas and Yoga Capital of the World. The city has hosted the annual International Yoga Festival on the first week of March since 1999.
        Rishikesh is a vegetarian-only and alcohol-free city."
        />
      </div>
    </div>
  );
}

export default Trip;
