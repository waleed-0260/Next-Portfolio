import React from "react";
import { CiMail, CiLocationOn  } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[80vw] m-[20px]">
      <p className="font-bold text-2xl heading">CONTACT US</p>
      <div className="flex md:flex-row flex-col justify-between w-[80vw] mt-8">
        <div className="flex flex-col  md:w-[50%] ">
          <p className="text-3xl text">LET'S HAVE A CHAT</p>
          <form action="" className="flex flex-col">
            <input
              type="text"
              name="name"
              id=""
              className="bg-[#101624] border-[#232935] p-[10px] mt-6 rounded-md text-white"
              placeholder="name"
            />
            <input
              type="email"
              name="email"
              id=""
              className="bg-[#101624] border-[#232935] p-[10px] mt-6 rounded-md text-white"
              placeholder="email"
            />
            <input
              type="text"
              name="Subject"
              id=""
              className="bg-[#101624] border-[#232935] p-[10px] mt-6 rounded-md text-white"
              placeholder="Subject"
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-[#101624] border-[#232935] p-[10px] mt-6 rounded-md text-white"
              placeholder="Message"
            />
            <button type="submit" className="bg-white hover:bg-[#FEC544] border-none hover:text-black transition-all mt-4 rounded-3xl w-[170px] h-[50px]">Submit</button>
          </form>
        </div>

      <div className="flex flex-col md:w-[50%] md:mt-0 mt-3">
        <p className="text-2xl text">Contact Info</p>
        <div className="flex flex-row p-5">
        <p
              className="p-4 rounded-full text border border-black text-2xl shadow-2xl text hover:bg-[#FEC544] hover:text-black transition-all"
              >
              <CiMail/>
            </p>
            <div className="text p-1">
                <p className="text-white">Email</p>
                <p className="break-all overflow-wrap-break-word text-sm">muhamamdwaleedahsan43@gmail.com</p>
                </div>
        </div>

        <div className="flex flex-row p-5">
        <p
              className="p-4 rounded-full text border border-black text-2xl shadow-2xl text hover:bg-[#FEC544] hover:text-black transition-all"
              >
              <FaPhoneAlt/>
            </p>
            <div className="text p-1">
                <p className="text-white">Phone</p>
                <p className="text-sm">+923342987718</p>
            </div>
        </div>

        <div className="flex flex-row p-5">
        <p
              className="p-4 rounded-full text border border-black text-2xl shadow-2xl text hover:bg-[#FEC544] hover:text-black transition-all"
              >
              <CiLocationOn/>
            </p>
            <div className="text p-1">
                <p className="text-white">Location</p>
                <p className="text-sm">Multan, Pakistan</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
