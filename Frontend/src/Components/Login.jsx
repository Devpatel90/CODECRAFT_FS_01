import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        {/* <h1>Login</h1> */}
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card bg-white">
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-3 mb-0">
            Don’t have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  </div>

    </div>

    
  )
}
