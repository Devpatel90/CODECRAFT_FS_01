import React, { useEffect } from 'react'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);
  return (
  <>
  <div className='j1'>
     <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">MyApp</a>
      <div className="ms-auto">
        <button className="btn btn-danger btn-logout"  onClick={()=>navigate("/")}>Logout</button>
      </div>
    </div>
  </nav>

  <div className="main-content">
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p class="lead">You are successfully logged in.</p>
    </div>
  </div>
  </div>

    {/* <div>Dashboard</div> */}
    {/* <button onClick={()=>navigate("/")}>Logout</button> */}
    </>
  )
}
