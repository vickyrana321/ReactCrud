import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";
import Header from "./Header";


function Home() {

    useEffect(()=>{
        document.title="Home Page";
    })
   

    return (

        <div>
            
           
            <div class="jumbotron text-center">
                <h2 className="display-3">Neon Academy !!</h2>
                <p>
                    This is my first react app .It is part of my project development
                </p>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
            </div>




        </div>
    );
}

export default Home; 