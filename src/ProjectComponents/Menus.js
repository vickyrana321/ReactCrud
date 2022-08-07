import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { BrowserRouter, Link, Routes } from "react-router-dom"
const Menus = () => {
    return (

        <div>


            <ListGroup >
                
                    <Link className="list-group-item list-group-item-action" to="/" action>Home</Link>
                

            
                    <Link className="list-group-item list-group-item-action" to="/add-courses" action>Add Course</Link>
                

            
                    <Link className="list-group-item list-group-item-action" to="/view-courses" action>View Course</Link>
                

            
                    <Link className="list-group-item list-group-item-action" to="#!" action>About</Link>
                

            
                    <Link className="list-group-item list-group-item-action" to="#!" action>Contacts</Link>
                

            </ListGroup>
        </div>
    )
}

export default Menus;