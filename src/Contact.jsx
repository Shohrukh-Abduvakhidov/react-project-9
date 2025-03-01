import React from "react";
import map from "./assets/Map.png";
import pin from "./assets/Pin.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import office from "./assets/Image (4).png";
import logo from "./assets/Logo (9).png"
import socials from "./assets/Social media.png"
const Contact = () => {
  return (
    <div>
      <>
        <div className="ml-5 text-2xl font-bold text-center lg:text-start lg:mt-32 lg:text-5xl lg:ml-20">
          <h1>
            Contact our team to
            <br />
            find out more
          </h1>
        </div>
        <div className="flex-row items-center gap-20 m-10 mt-16 lg:flex">
          <div>
            <div className="relative z-0">
              <img src={map} alt="" />
              <img
                src={pin}
                alt=""
                className="hidden lg:block lg:absolute left-[82%] top-[70%]"
              />
              <div className="hidden lg:block lg:absolute top-58 bg-white p-3 rounded-lg left-[73%]">
                <h1 className="font-bold">Yogja, INA</h1>
                <p className="mt-2 text-[#7E8492]">
                  100 Smith Street <br /> Collingwood VIC 3066 AU
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 ml-20">
            <div>
              <h1 className="text-xl">Support</h1>
              <p className="text-[#7E8492]">
                Our friendly team is
                <br /> here to help.
              </p>
              <p className="mt-5 font-bold">support@sans.com</p>
            </div>
            <div className="mt-24">
              <h1 className="text-xl">Sales</h1>
              <p className="text-[#7E8492]">
                Questions or queries?
                <br /> Get in touch!
              </p>
              <p className="mt-5 font-bold">sales@sans.com</p>
            </div>
            <div className="mt-24">
              <h1 className="text-xl">Phone</h1>
              <p className="text-[#7E8492]">
                Mon-Fri from 8am to
                <br /> 5pm.
              </p>
              <p className="mt-5 font-bold">+1 (435) 345-7655</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-between w-[90%] m-auto lg:flex lg:flex-row mt-52">
          <div>
            <h1 className="text-5xl font-bold">890+</h1>
            <p className="text-[#7E8492] text-xl">
              Some big companies that we work
              <br /> with, and trust us very much
            </p>
          </div>
          <div>
            <div className="flex flex-col lg:flex lg:flex-row">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
            <div className="flex flex-col lg:flex lg:flex-row">
              <img src={logo5} alt="" />
              <img src={logo6} />
              <img src={logo7} alt="" />
              <img src={logo8} />
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mt-32">
          <div className="relative bg-white lg:w-[608px] h-[784px] top-[50%] left-[20%] lg:left-[10%] rounded-lg">
            <div className="p-10">
              <h1 className="text-2xl lg:text-5xl ">
                Let’s level up your brand
              </h1>
              <p className="text-[#7E8492] mt-5">
                You can reach us anytime{" "}
                <span className="text-[#1463FF]">
                  hellosansbrothers@gmail.com
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center lg:flex lg:flex-row">
              <div>
                <label htmlFor="inp1">First name</label>
                <br />
                <input
                  type="text"
                  id="inp1"
                  placeholder="First name"
                  className="p-2 border-[1px] border-[gray] mx-[20px] rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="inp2">Last name</label>
                <br />
                <input
                  type="text"
                  id="inp2"
                  placeholder="Last name"
                  className="p-2 border-[1px] border-[gray] rounded-lg"
                />
              </div>
            </div>
            <div className="mt-2 ml-5 lg:p-5 lg:ml-0">
              <label htmlFor="mail">Email</label>
              <br />
              <input
                type="text"
                id="mail"
                placeholder="you@company.com"
                className="w-[200px] border-[1px] border-[gray]  p-2 rounded-lg lg:border-[1px] lg:p-2 lg:rounded-lg  lg:w-[500px]"
              />
            </div>
            <div className="p-5">
              <p>Phone number</p>
              <div className="flex">
                <select
                  name=""
                  id="us"
                  className="p-3 border-[1px] border-[gray] rounded-l-lg "
                >
                  <option value="">US</option>
                </select>
                <p className="w-[200px] border-[1px] border-[gray] p-2 rounded-r-lg lg:w-[430px]">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
            <div className="p-5">
              <p>Message</p>
              <textarea
                name=""
                id="mes"
                placeholder="Leave us a message..."
                className="w-[300px] border-[1px] border-[gray] p-2 rounded-lg lg:w-[500px]"
                defaultValue={""}
              />
              <br />
            </div>
            <div className="p-10">
              <button className="p-2 bg-[#1D1E25] text-white rounded-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={office} className="h-[800px]" alt="" />
          </div>
        </div>
        <footer>
          <div className="bg-[#1D1E25] mt-52 w-full">
            <div className="w-[100%] flex justify-between flex-col p-20 text-white lg:flex lg:flex-row">
              <div className="text-start">
                <h1 className="text-3xl lg:text-5xl">Think beyond the wave</h1>
                <p className="mt-2 text-lg lg:text-xl">
                  Ask about Sans products, pricing, implementation, or anything
                  <br />
                  else. Our highly trained reps are standing by, ready to help
                </p>
              </div>
              <div>
                <button
                  id="but-1"
                  className="bg-white text-[#1D1E25] p-3 rounded-full mt-3"
                >
                  Try for free
                </button>
              </div>
            </div>
            <div className="mt-0 lg:flex lg:mt-[50px] justify-between  text-[#7E8492] p-10 items-center">
              <div className="text-start">
                <img src={logo} alt="" className="ml-10" />
                <p className="mt-2">
                  We built an elegant solution. Our team
                  <br />
                  created a fully integrated sales and
                  <br />
                  marketing solution for SMBs
                </p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Company</h1>
                <p className="mt-2">About</p>
                <p className="mt-2">Pricing</p>
                <p className="mt-2">Jobs</p>
                <p className="mt-2">Blog</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Product</h1>
                <p className="mt-2">Sales Software</p>
                <p className="mt-2">Marketplace</p>
                <p className="mt-2">Terms &amp; Conditions</p>
                <p className="mt-2">Privacy Policy</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Discover</h1>
                <p className="mt-2">CRM Comparision</p>
                <p className="mt-2">Partner Program</p>
                <p className="mt-2">What is CRM</p>
                <p className="mt-2">Resource</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Help Center</h1>
                <p className="mt-2">Community</p>
                <p className="mt-2">Knowledge Base</p>
                <p className="mt-2">Academy</p>
                <p className="mt-2">Support</p>
              </div>
            </div>
            <div className="flex flex-col text-white items-center justify-between lg:flex lg:flex-row mt-32 border-t-2 border-[#606060] lg:w-[1200]">
              <div className="flex flex-col lg:flex-row gap-10 items-center p-10">
                <img src={socials} alt="" />
                <div className="flex gap-3 lg:flex lg:gap-10">
                  <p>Privacy Policy</p>
                  <p>Terms &amp; Conditions</p>
                  <p>Support</p>
                </div>
              </div>
              <div>
                <p>© Copyright 2023,t All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>      </>
    </div>
  );
};

export default Contact;
