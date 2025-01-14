import {BrowserRouter as  Router,Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <>
    {/* <Router>
      <Route path="/search/:searchterm" Component={SearchPage} />
      <Route path="/"/>
    </Router> */}
      <SearchPage />
    </>
  );
}

export default App;
