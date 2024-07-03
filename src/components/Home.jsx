import Gallery from "./Gallery";
import PageHeading from "./PageHeading";
import SearchMovie from "./SearchMovie";

const Home = () => {
  return (
    <>
      <PageHeading heading="Movies" />
      {/* <SearchMovie /> */}
      <Gallery query="Star Wars" searchParam="movie" />
      <Gallery query="Godzilla" searchParam="movie" />
      <Gallery query="The Lord of The Rings" searchParam="movie" />
      <Gallery query="Harry Potter" searchParam="movie" />
      <Gallery query="Scary Movie" searchParam="movie" />
    </>
  );
};

export default Home;
