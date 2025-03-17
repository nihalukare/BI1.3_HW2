import AddHotelData from "./components/AddHotelData";
import Hotels from "./components/Hotels";
import HotelsByName from "./components/HotelsByName";

function App() {
  return (
    <>
      <AddHotelData />
      <Hotels />
      <HotelsByName name="Grand Ocean Resort" />
    </>
  );
}

export default App;
