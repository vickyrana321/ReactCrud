import React from "react";
import Header from "./Header";
function MainBody(){

    return (
       
       <div style={{backgroundColor:'pink',padding:20}}>
       <Header name={'Main Header'} />
        <h1>This is Common body for all</h1>
       </div>
    );
}

export default MainBody;