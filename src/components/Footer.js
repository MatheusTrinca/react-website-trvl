import React from 'react'
import './Footer.css'
import {Button} from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-subscription">
        <h2 className="footer-subscription-header">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, amet.</h2>
        <h2 className="footer-subscription-text">You can subscribe at any time</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter your best email"/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </div>
        </form>
      </div>
      <div className="links-container">
        <div className="links-wrapper">
          <div className="links">
          <h2>Link Block 1</h2>
          <ul className="links-block">
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
            <li><Link to="/">Link 5</Link></li>
          </ul>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="links">
          <h2>Link Block 2</h2>
          <ul className="links-block">
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
            <li><Link to="/">Link 5</Link></li>
          </ul>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="links">
          <h2>Link Block 3</h2>
          <ul className="links-block">
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
            <li><Link to="/">Link 5</Link></li>
          </ul>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="links">
          <h2>Link Block 4</h2>
          <ul className="links-block">
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
            <li><Link to="/">Link 5</Link></li>
          </ul>
          </div>
        </div>
  
      </div>
      <div className="social-footer">
        <Link to='/' className='footer-logo'>
          TRVL<i className="fab fa-typo3"></i>
        </Link>
        <div className="rights">
          <p>Copyright 2020</p>
        </div>
        <div className="social-links">
          <Link to="/"><i class="fab fa-facebook"></i></Link>
          <Link to="/"><i class="fab fa-twitter"></i></Link>
          <Link to="/"><i class="fab fa-instagram"></i></Link>
          <Link to="/"><i class="fab fa-youtube"></i></Link>
          <Link to="/"><i class="fab fa-linkedin"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
