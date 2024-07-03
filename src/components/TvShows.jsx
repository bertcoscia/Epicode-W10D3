import Gallery from "./Gallery";
import PageHeading from "./PageHeading";

const TvShows = () => (
  <>
    <PageHeading heading="TV Shows" />
    <Gallery query="Rick and Morty" searchParam="series" />
    <Gallery query="Breaking Bad" searchParam="series" />
    <Gallery query="Grey's Anatomy" searchParam="series" />
  </>
);

export default TvShows;
