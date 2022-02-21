import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <table>
      <th> 
        
      <nav style={{backgroundColor:"lightgray", height:"300px", width:"2200px" }}>
      <td>
        <ul style={{marginLeft:"200px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>          
          <li>
            <Link to="/Audi">Audi</Link>
          </li>
          <li>
            <Link to="/VW">VW</Link>
          </li>
          <li>
            <Link to="/SKODA">SKODA</Link>
          </li>
          <li>
            <Link to="/KIA">KIA</Link>
          </li>
          <li>
            <Link to="/Okno">Okno</Link>
          </li>
          <li>
            <Link to="/Form2">Form2</Link>
          </li>
          <li>
            <Link to="/Callback">Callback</Link>
          </li>
          <li>
            <Link to="/Material">Material</Link>
          </li>
          <li>
            <Link to="/Textarea">Textarea</Link>
          </li>
          <li>
            <Link to="/Options">Options</Link>
          </li>

        </ul>
        </td>
      </nav>
      </th>
      </table>
      <div style={{paddingLeft: "250px", backgroundColor: "lightgray", height:"750px"}}>
      <Outlet  />
      </div>
    </>
  );
}

export default Layout;
