import React from "react";
import logo from "./assets/Logo (9).png";
import socials from "./assets/Social media.png";
const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <img
          className="flex items-center justify-center"
          src="/img/Badge base.png"
          alt=""
        />
        <p className=" text-[35px] lg:text-[60px]">
          Choose a plan for a more <br /> advanced business
        </p>
        <div className="flex">
          <img
            className="flex items-center justify-center"
            src="/img/_Toggle base.png"
            alt=""
          />
          <p>Annual pricing (save 20%)</p>
        </div>
      </div>
      <div className="mt-8 text-white">
        <div className="container px-4 py-16 mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
            <div className="relative flex-1 p-8  border rounded-lg top-10">
              <h2 className="text-2xl font-bold mb-4 text-[#1D1E25]">
                Starter
              </h2>
              <p className="mb-8 text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-4xl font-bold text-[#1D1E25]">
                $100 <span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-2 text-[#1D1E25]">
                <li>
                  <span className="text-green-500">✔️</span> Unlimited Upload
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Advanced Statistic
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Profile Badge
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Access to the
                  community
                </li>
                <li className="line-through">
                  <span className="text-gray-500">✖️</span> History of all Liked
                  Photos
                </li>
                <li className="line-through">
                  <span className="text-gray-500">✖️</span> Directory Listing
                </li>
                <li className="line-through">
                  <span className="text-gray-500">✖️</span> Customize Your
                  Profile
                </li>
                <li className="line-through">
                  <span className="text-gray-500">✖️</span> Display Your
                  Workshops
                </li>
              </ul>
              <button className=" py-[12px] mt-8  rounded-4xl cursor-pointer lg:ml-[70px] px-[20px] bg-white text-[black] border-1">
                Choose Plan
              </button>
            </div>
            <div className="relative flex-1 p-8 bg-gray-900 border rounded-2xl py-[40px] mb-[20px]">
              <span className="absolute top-[15px] px-3 py-1 text-sm bg-blue-700 rounded-full right-4">
                Best Offers 🔥
              </span>
              <h2 className="mb-4 text-2xl font-bold">Popular</h2>
              <p className="mb-8 text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-4xl font-bold">
                $1400 <span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-2">
                <li>
                  <span className="text-green-500">✔️</span> Unlimited Upload
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Advanced Statistic
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Profile Badge
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Access to the
                  community
                </li>
                <li className="line-through">
                  <span className="text-gray-500">✖️</span> History of all Liked
                  Photos
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Directory Listing
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Customize Your
                  Profile
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Display Your
                  Workshops
                </li>
              </ul>
              <button className=" py-[12px] mt-8  rounded-4xl cursor-pointer lg:ml-[100px] px-[20px] bg-white text-[black] border-1">
                Choose Plan
              </button>
            </div>
            <div className="relative flex-1 p-8 border rounded-lg top-10">
              <h2 className="text-2xl font-bold mb-4 text-[#1D1E25]">
                Enterprise
              </h2>
              <p className="mb-8 text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-4xl font-bold text-[#1D1E25]">
                $2100 <span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-2 text-[#1D1E25]">
                <li>
                <span className="text-green-500">✔️</span>Unlimited Upload
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Advanced Statistic
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Profile Badge
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Access to the
                  community
                </li>
                <li>
                  <span className="text-green-500">✔️</span> History of all
                  Liked Photos
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Directory Listing
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Customize Your
                  Profile
                </li>
                <li>
                  <span className="text-green-500">✔️</span> Display Your
                  Workshops
                </li>
              </ul>
              <button className=" py-[12px] mt-8  rounded-4xl cursor-pointer lg:ml-[70px] px-[20px] bg-white text-[black] border-1">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-[#1D1E25] font-sans">
        <div className="container px-4 py-12 mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <p className="mb-8 text-center text-gray-400">
            Everything you need to know about the product and billing.
          </p>
          <div className="w-[90%] m-auto">
            <div className="border-gray-700">
              <button className="flex items-center justify-between w-full py-4 text-left ">
                <span className="text-lg font-bold">
                  Is there a free trial available?
                </span>
                <span className="text-gray-900 text-[30px] font-bold">-</span>
              </button>
              <div className="pl-4 text-gray-400">
                <p className="lg:w-[500px]">
                  Yes, you can try us for free for 30 days. If you want, we'll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
            <div className="border-gray-700">
              <button className="flex items-center justify-between w-full py-4 text-left focus:outline-none">
                <span className="text-lg font-bold">
                  How Can I Add More Emails To My Account?
                </span>
                <span className="text-gray-900 text-[30px] font-bold">+</span>
              </button>
            </div>
            <div className=" border-gray-700">
              <button className="flex items-center justify-between w-full py-4 text-left ">
                <span className="text-lg font-bold">
                  Can I Change Plans Or Cancel My Subscription At Any Time
                </span>
                <span className="text-gray-900 text-[30px] font-bold">+</span>
              </button>
            </div>
            <div className=" border-gray-700">
              <button className="flex items-center justify-between w-full py-4 text-left ">
                <span className="text-lg font-bold">
                  How Secure Is My Data With Sans CRM
                </span>
                <span className="text-gray-900 text-[30px] font-bold">+</span>
              </button>
            </div>
            <div className=" border-gray-700">
              <button className="flex items-center justify-between w-full py-4 text-left ">
                <span className="text-lg font-bold">
                  What Is The Uptime Guarantee
                </span>
                <span className="text-gray-900 text-[30px] font-bold">+</span>
              </button>
            </div>
          </div>
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
      </footer>
    </div>
  );
};

export default Pricing;
