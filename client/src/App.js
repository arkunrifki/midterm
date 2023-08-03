import React from "react";
import Video from "./components/Video";

// function App() {
//   return (
//     <div className="App">
//       return(
//       <div>Hello World</div>)
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Videos</h1>
        <div className="video">
          {/* {Panggil component video} */}
          <Video />
        </div>
      </div>
    );
  }
}

export default App;
