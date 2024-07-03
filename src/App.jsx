import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import PageHeading from "./components/PageHeading";
import SearchMovie from "./components/SearchMovie";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <div className="text-white" style={{ backgroundColor: "#141414" }}>
      <MyNavBar />
      <PageHeading />
      <SearchMovie />
      <Gallery query="Star Wars" />
      <Gallery query="Godzilla" />
      <Gallery query="The Lord of The Rings" />
      <Gallery query="Harry Potter" />
      <Gallery query="Scary Movie" />
      <AccountPage />
      <MyFooter />
    </div>
  );
}

export default App;
