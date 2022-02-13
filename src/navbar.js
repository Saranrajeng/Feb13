import React from "react";


window.name ="Lata Mangeshkar Ji ";
class Navbar extends React.Component{
    render(){
        
        return(
           <div className="Navbar">
               <h1>{window.name}</h1>
               <p> She was an Indian playback singer and occasional music composer</p>
           </div>
        );
    }
}
export default Navbar;