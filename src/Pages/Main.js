import React from "react";
import { Routes, Route } from "react-router-dom";
import Homescreen from "./Homescreen/index";
import Customize from "./Customize";


export default function Main () {
    return (
        <Routes>
            <Route path="/" element={ <Homescreen />} />
            <Route path="/customize" element={ <Customize /> } />
        </Routes>
    )
}
