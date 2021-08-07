import Head from "next/head";
import Banner from "../components/Banner";
import BottomCard from "../components/BottomCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main componet of page(landing page) */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull the data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData.map((item, i) => (
              <SmallCard
                key={i}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex  space-x-5 overflow-scroll scrollbar-hide p-3 -mx-3 ">
            {cardData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* <LargCard img="https://links.papareact.com/4cj" /> */}
        <BottomCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlist created by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
