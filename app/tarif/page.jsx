import Offer from "../components/Offer";
import avatar from "@/public/static/images/avatar.jpeg"
import Estimation from "../components/Estimation";

export default function Tarif (){
  const fakeOffers = [
    {
      id: 1,
      title: "Title",
      subtitle: "Subtitle",
      img: avatar,
      feature1: "Feature1",
      feature2: "Feature2",
      feature3: "Feature3"

    },
    {
      id: 2,
      title: "Title",
      subtitle: "Subtitle",
      img: avatar,
      feature1: "Feature1",
      feature2: "Feature2",
      feature3: "Feature3"

    },
    {
      id: 3,
      title: "Title",
      subtitle: "Subtitle",
      img: avatar,
      feature1: "Feature1",
      feature2: "Feature2",
      feature3: "Feature3"

    },
  ]
  return( 
<>
    <section>
        <div className="flex gap-14 w-3/5 mx-auto">
          {fakeOffers.map(fake => (
            <Offer key={fake.id} offer={fake}/>
          ))}
        </div>
    </section>
    <section>
      <Estimation />
    </section>
</>

);
};


