import React, { useState,useEffect } from "react";
import Course from "./Course";

import axios from "axios";
import base_url from "../Api/SpringBoot_api";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";

const AllCourse = () => {

    // Hookes 
    // If you’re familiar with React class lifecycle methods,
    // you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.


    useEffect(()=>{ //passing one function

        document.title="All Courses";
    },[]);

    const [courses, setCourses] = useState([]);

    const updateCourseById=(id)=>{

        setCourses(courses.filter((c)=>c.id!=id));
    }

    const getAllCoursesFromServer=()=>{

        axios.get(`/courses`).then(
            (response)=>{
                //success
                console.log(response);
                toast.success("successfull !!");
                setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
                toast.error("something went Wrong!!")
            }
        );
    };

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
    
    return (

        <div className="text-center mt-5">
            <h2>All Courses</h2>
            <p>List of All Courses are as Follow</p>
            {
                courses.length > 0 ? courses.map((item) =>
                    <Course key={item.id} course={item} update={updateCourseById} /> ) : "No Courses Available"

            }


        </div>
    );
    
}
export default AllCourse;