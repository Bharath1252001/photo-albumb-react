import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarComponent from "./Components/NavbarComponent";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Photos from "./Components/Photos";

function App() {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
				<Route exact path="/"> 
        {/* if there is only / then it will route for below command */}
					<Photos />
				</Route>
				<Route path="/ABOUT">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
        <Route path="/photos/id">
          {/* in place of 2 you can write anything ex:'xyz','bharath' 
          https://picsum.photos/id/2/info  2 to change anything like 3,4,5,6,etc depending in the API */}
					<Photos />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;






