import React from 'react'
import './contact.css'
const ContactPage = () => {
  return (
    <div className="body">
    <div className='Cotanier-contact'>
      <div className="title">Contact us </div>
      <form action="#">
        <div className="row">
          <div className="form-group">
            <input type="text" required id="name" />
            <div className="underline"></div>
            <label htmlFor="name">First Name</label>
          </div>
          <div className="form-group">
            <input type="text" required id="lastname" />
            <div className="underline"></div>
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <input type="email" required id="mail" />
            <div className="underline"></div>
            <label htmlFor="mail">Email</label>
          </div>
          <div className="form-group">
            <input type="number" required id="number" />
            <div className="underline"></div>
            <label htmlFor="number">Contact No</label>
          </div>
        </div>
        <div className="row">
          <div className="form-group textarea">
            <textarea   id="mess"></textarea>
            <div className="underline"></div>
            <label htmlFor="mess">write your message</label>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
          <input type="submit" className='btn-con'  value='Send Message'/>

          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactPage
