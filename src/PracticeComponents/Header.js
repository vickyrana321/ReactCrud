import React from "react";

function Header({name}){
return(
    <div style={{background:'black',color:'white',padding:20}}>
        <h1>
            This is {name}
        </h1>
    </div>
)
}

export default Header;