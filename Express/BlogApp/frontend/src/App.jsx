import { RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./component/pages/Signup";
import { Myrouter } from "./component/router/Myrouter";


function App() {
  return (
    <div>
      {/* <h1 className="text-[50px]">hello world</h1> */}
      {/* <Signup/> */}
      <RouterProvider router={Myrouter}/>
    </div>
  );
}

export default App;
