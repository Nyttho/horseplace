import Link from "next/link";
const APropos = () => {
  return (
    <>
      <section className="bg-secondary-light h-screen py-10 px-20 text-primary-dark ">
        <div className="w-3/4 mx-auto flex flex-col justify-around h-full">
          <h2 className="text-center  text-4xl font-extrabold">
            À propos de nous
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            inventore nam alias sint repellendus optio, temporibus officia
            quibusdam quis accusantium earum tempora, aut quod obcaecati ipsa in
            tenetur sapiente amet. Unde magnam fuga sit corrupti impedit
            ratione, laudantium eveniet dolorum nulla quam corporis iste
            consectetur temporibus officiis quod sapiente reprehenderit amet
            recusandae quis, voluptates repellendus voluptatibus incidunt
            asperiores. Inventore, ratione. Non iste, sint, ipsam quidem iure
            obcaecati vero nisi a veritatis nam, inventore sed cumque quaerat
            eaque nostrum. Sunt non accusamus delectus vitae optio sed in magnam
            velit ipsum repudiandae? Eos alias veniam libero magnam adipisci
            voluptates, sunt, vero totam consequuntur saepe corrupti explicabo
            maiores voluptate numquam tempore! Eos minus ipsa magni architecto
            amet asperiores consectetur tempora. Sunt, ullam consequuntur. Quam,
            possimus eos sit soluta reiciendis minus enim ducimus ipsam sint
            quibusdam, voluptatum consectetur vitae nobis inventore
            necessitatibus, natus voluptatibus animi at porro dolore voluptatem
            dolorum id? Quos, corporis ducimus.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            inventore nam alias sint repellendus optio, temporibus officia
            quibusdam quis accusantium earum tempora, aut quod obcaecati ipsa in
            tenetur sapiente amet. Unde magnam fuga sit corrupti impedit
            ratione, laudantium eveniet dolorum nulla quam corporis iste
            consectetur temporibus officiis quod sapiente reprehenderit amet
            recusandae quis, voluptates repellendus voluptatibus incidunt
            asperiores. Inventore, ratione. Non iste, sint, ipsam quidem iure
            obcaecati vero nisi a veritatis nam, inventore sed cumque quaerat
            eaque nostrum. Sunt non accusamus delectus vitae optio sed in magnam
            velit ipsum repudiandae? Eos alias veniam libero magnam adipisci
            voluptates, sunt, vero totam consequuntur saepe corrupti explicabo
            maiores voluptate numquam tempore! Eos minus ipsa magni architecto
            amet asperiores consectetur tempora. Sunt, ullam consequuntur. Quam,
            possimus eos sit soluta reiciendis minus enim ducimus ipsam sint
            quibusdam, voluptatum consectetur vitae nobis inventore
            necessitatibus, natus voluptatibus animi at porro dolore voluptatem
            dolorum id? Quos, corporis ducimus.
          </p>

          <Link href="/devis">
            <div className="bg-primary-dark text-white py-1 rounded-md text-center w-52  px-10 mx-auto">
              Demander un devis
            </div>
          </Link>
        </div>
      </section>
      <section className="text-primary-dark p-20 bg-secondary-light mt-1">
        <h3 className="uppercase text-lg font-bold">Horsplace</h3>
        <div className="flex w-3/4 mx-auto">
          <div className="flex flex-col justify-evenly border-r-[1px] border-primary-dark px-10 pb-10">
            <h4 className="font-bold mb-10">FAQ</h4>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div>
          <div className="flex flex-col justify-evenly px-10 pb-10">
          <div className="h-14"></div>

            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
