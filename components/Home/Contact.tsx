import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebook, FaGithub  } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi optio quo commodi nisi suscipit, nobis nemo. Ipsam labore ut distinctio, consectetur, deleniti veniam doloremque similique vel error itaque quam.</p>
        <div className=' flex flex-row justify-around'>
            <div>
                <FaLinkedinIn/>
                <b>Phone</b>
                <p>+923342987718</p>
            </div>
            <div>
                <FaInstagram/>
                <b>Email</b>
                <p>muhammadwaleedahsan43@gmail.com</p>
            </div>
            <div>
                <FaFacebook/>
                <b>Address</b>
                <p>Multan</p>
            </div>
        </div>
    </div>
  )
}

export default Contact