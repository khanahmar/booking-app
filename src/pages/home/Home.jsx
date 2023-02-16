import React from "react"
import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import Property from "../../components/propertyList/Property"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browes by property type</h1>
        <Property />
        <h1>Homes guests love</h1>
        
      </div>
    </div>
  )
}

export default Home
