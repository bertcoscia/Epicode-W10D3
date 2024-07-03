import Gallery from "./Gallery";
import PageHeading from "./PageHeading";
import SearchMovie from "./SearchMovie";

const Home = () => {
  return (
    <>
      <PageHeading />
      <SearchMovie />
      <Gallery query="Star Wars" />
      <Gallery query="Godzilla" />
      <Gallery query="The Lord of The Rings" />
      <Gallery query="Harry Potter" />
      <Gallery query="Scary Movie" />
    </>
  );
};

export default Home;