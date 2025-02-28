import React from "react";
import logo from "./assets/Logo (8).png";
import img1 from "./assets/Image (5).png";
import img2 from "./assets/Image (6).png";
import img3 from "./assets/Image (7).png";
import rec1 from "./assets/Rectangle 34.png";
import rec2 from "./assets/Rectangle 35.png";
import rec3 from "./assets/Rectangle 36.png";
import rec4 from "./assets/Rectangle 37 (1).png";
import img4 from "./assets/Image (8).png"
import img5 from "./assets/Image (9).png"
import img6 from "./assets/Image (10).png"
const BlogPage = () => {
  return (
    <div>
      <ul>
        <li className="mt-10 text-[35px] text-center lg:text-start lg:ml-20 lg:text-[50px] font-bold">
          Activity &amp; Updates
        </li>
        <li className="lg:ml-60 text-start  mt-10 text-[16px] ml-5 font-bold">
          Our biggest challenge is making sure we're <br />
          always designing and building products that <br /> will help you run
          your business better.
        </li>
      </ul>
      <div className="flex mt-20 ml-2 text-lg text-gray-500 lg:ml-20 gap-x-10">
        <p className="text-black underline">View all</p>
        <p className="text-gray-500">Design</p>
        <p>Articles</p>
        <p>Product</p>
        <p className="hidden lg:block">Software Development</p>
        <p className="hidden lg:block">Customer Success</p>
      </div>
      <div className="flex mt-10 justify-evenly">
        <div>
          <img className="w-[400px]" src={img1} alt="" />
          <p className="mt-5 text-gray-500">
            Published in Insight Jan 30, 2021
          </p>
          <p className="mt-5 text-lg font-bold">Practice making User Flow</p>
          <p className="mt-5 text-gray-500">
            In this article, we'll cover how to <br /> create user flows
          </p>
        </div>
        <div>
          <img className="w-[400px]" src={img2} alt="" />
          <p className="mt-5 text-gray-500">
            Published in Insight Jan 30, 2021
          </p>
          <p className="mt-5 text-xl font-bold">Practice making User Flow</p>
          <p className="mt-5 text-gray-500">
            In this article, we'll cover how to <br /> create user flows
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            className="h-[500px] mt-2 w-[200px] relative"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-900 text-white mt-[100px]">
        <div className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden  rounded-lg shadow-md">
              <img src={rec1} alt="Laptop" className="object-cover w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  How we perform long-running tasks using AWS services
                </h3>
                <p className="mt-2 text-gray-400">
                  Webflow is a web design tool as well as a hosting platform and
                  CMS all in one. While you are probably familiar with all of
                  these, they are usually entirely separate tools.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={rec2} alt="Meeting" className="object-cover w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  How to ask when doing User Research
                </h3>
                <p className="mt-2 text-gray-400">
                  Bro, the story is that you want to make an application for
                  buying and selling goods on the market. During user research,
                  what do you think you will ask people?
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden  rounded-lg shadow-md">
              <img
                src={rec3}
                alt="Discussion"
                className="object-cover w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Layout Exploration — Simple exercise but big effect
                </h3>
                <p className="mt-2 text-gray-400">
                  Make alternatives or other options for the design we are
                  making. For example, we are creating a website design. Then
                  there is the testimonial section.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={rec4}
                alt="Presentation"
                className="object-cover w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Webflow Break the Coding Barrier
                </h3>
                <p className="mt-2 text-gray-400">
                  Webflow is a web design tool as well as a hosting platform and
                  CMS all in one. While you are probably familiar with all of
                  these, they are usually entirely separate tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between  w-[100%]">
        <div className="p-6 m-0 max-w-7xl">
          <h1 className="text-4xl font-bold">Articles</h1>
          <p className="mt-2 text-gray-400">
            Complex tech decoded by engineers, business trends analyzed by
            experts.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 p-6 m-0 max-w-7xl">
          <button className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full">
            <span className="text-gray-400">←</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full">
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>
      <div className="grid gap-6 p-6 mx-auto max-w-7xl lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={img4}
            alt="Article Image"
            className="object-cover w-full h-96"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              List of UX Designer Portfolio / Case Studies where you can make
              money
            </h2>
            <p className="mt-2 text-gray-400">
              Here are some portfolios / Case Studies from UX Designers that you
              can use as a reference for creating a portfolio.
            </p>
            <button className="inline-block px-4 py-2 mt-4 text-sm text-gray-400 border border-gray-600 rounded ">
              Read More
            </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg -mt-[1px]">
          <img
            src={img5}
            alt="Article Image"
            className="relative object-cover w-full"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Skyrocketing in The Designing Career, Why Not?
            </h2>
            <p className="mt-2 text-gray-400">
              Ever thought of jumping into the world of design as a career?
              Design is a method of creating aesthetic actions.
            </p>
            <button className="inline-block px-4 py-2 mt-4 text-sm text-gray-400 border border-gray-600 rounded ">
              Read More
            </button>
          </div>
        </div>
        <div className="-mt-1 overflow-hidden rounded-lg shadow-lg">
          <img
            src={img6}
            alt="Article Image"
            className="object-cover w-full h-96"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Elements that may be missed when designing the UI
            </h2>
            <p className="mt-2 text-gray-400">
              This is an article that talks about the little elements that are
              often overlooked when designing UI.
            </p>
            <button className="inline-block px-4 py-2 mt-4 text-sm text-gray-400 border border-gray-600 rounded ">
              Read More
            </button>
          </div>
        </div>
      </div>
      <footer className="mt-[200px]">
        <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <aside className="lg:w-[720px] lg:ml-[20px] m-0">
            <h2 className="text-[24px] lg:ml-[0px] lg:text-[64px] text-[#1D1E25] font-bold">
              Think beyond the wave
            </h2>
            <div className="flex items-start gap-[20px] mt-[20px]">
              <img
                src="../images/Line.png"
                alt=""
                className=" m-0 w-[18px] lg:w-[76px] block pt-[15px] lg:pt-[20px]"
              />
              <h2 className="text-[16px] lg:text-[24px] text-[#1D1E25] font-bold">
                Ask about Sans products, pricing, implementation, or anything
                else. Our highly trained reps are standing by, ready to help
              </h2>
            </div>
          </aside>
          <aside className="m-0">
            <button
              id="but-1"
              className="text-[#fff] bg-[#1D1E25] font-bold w-[175px] h-[56px] rounded-[100px]"
            >
              Try for free
            </button>
          </aside>
        </section>
        <section className="">
          <div className="hidden mt-10 lg:flex justify-evenly">
            <div>
              <img src={logo} alt="" className="m-0" />
              <p>
                We built an elegant solution. Our team <br /> created a fully
                integrated sales and <br /> marketing solution for SMBs
              </p>
            </div>
            <div className="mt-10 text-gray-500">
              <p className="text-black">Company</p>
              <p className="mt-2">About</p>
              <p className="mt-2">Pricing</p>
              <p className="mt-2">Jobs</p>
              <p className="mt-2">Blog</p>
            </div>
            <div className="mt-10 text-gray-500">
              <p className="text-black">Product</p>
              <p className="mt-2">Sales Software</p>
              <p className="mt-2">Marketplace</p>
              <p className="mt-2">Terms &amp; Conditions</p>
              <p className="mt-2">Privacy Policy</p>
            </div>
            <div className="mt-10 text-gray-500">
              <p className="text-black">Discover</p>
              <p className="mt-2">CRM Comparision</p>
              <p className="mt-2">Partner Program</p>
              <p className="mt-2">What is CRM</p>
              <p className="mt-2">Resource</p>
            </div>
            <div className="mt-10 text-gray-500">
              <p className="text-black">Help Center</p>
              <p className="mt-2">Community</p>
              <p className="mt-2">Knowledge Base</p>
              <p className="mt-2">Academy</p>
              <p className="mt-2">Support</p>
            </div>
          </div>
          <div className="border-t-2 w-[90%] mt-[20px] border-[#CED1D8] pb-[20px] ">
            <div className="block lg:hidden pt-[50px] ">
              <img src="../images/content-social.png" alt="" className="" />
            </div>
            <p className="mt-5 text-center text-gray-500">
              © Copyright 2023 All Rights Reserved
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default BlogPage;
