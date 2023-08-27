import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>To Travel Is To Live.. </p>

      <DestinationData
        className="first-des"
        heading="Manali, Himachal Pradesh, India"
        text="Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.
      It is situated in the northern end of the Kullu Valley, formed by the Beas River. 
      The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi.
     With a population of 8,096 people recorded in the 2011 Indian census Manali is the beginning of an ancient trade route through Lahaul (H.P) and Ladakh, over the Karakoram Pass and onto Yarkand and Hotan in the Tarim Basin of China.
      Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh."
        img1={
          "https://images.unsplash.com/photo-1606667544139-81e47935d769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 "
        }
        img2={
          "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      />

      <DestinationData
        className="first-des-reverse"
        heading="Goa, India"
        text="Goa is a state on the southwestern coast of India within the Konkan region,
        geographically separated from the Deccan highlands by the Western Ghats.
        It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west.
        It is India's smallest state by area and fourth-smallest by population.
        Goa has the highest GDP per capita among all Indian states, two and a half times as high as the GDP per capita of the country as a whole.
        Goa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed architecture."
        img1={
          "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
        img2={
          "https://images.unsplash.com/photo-1558960214-f4283a743867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
      />
    </div>
  );
};
export default Destination;
