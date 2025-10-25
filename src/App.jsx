import Body from "./components/Body";
import { NavProvider } from "./context/NavContext";


function App() {
  return (
    <NavProvider>
      <Body/>

    </NavProvider>
  )
}
export default App;