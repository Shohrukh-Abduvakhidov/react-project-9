import React from "react";
import rec1 from "./assets/Rectangle 44.png";
import rec2 from "./assets/Rectangle 45.png";
import rec3 from "./assets/Frame 1171275083.png";
import avatar from "./assets/Ellipse 15.png";
import logo from "./assets/Logo (9).png"
import socials from "./assets/Social media.png"
const Detail = () => {
  return (
    <div>
      <>
        <p className="text-center lg:text-start lg:ml-64 font-bold text-[32px] lg:text-[60px]">
          How we perform long- <br />
          running tasks using AWS <br /> services
        </p>
        <div className="w-[90%] m-auto mt-[50px] flex flex-col lg:flex-row justify-between items-center">
            <div className="flex gap-[20px] items-center">
                <img src={avatar} alt="" />
                <div className="">
                    <p className="font-bold">Renee Wells</p>
                    <p className="text-[gray]">Product Designer, Quotient</p>
                </div>
            </div>
            <p className="text-[gray] text-[18px]">10 min read  November 10, 2023</p> 
        </div>
        <div className="mt-10 font-sans">
          <div className="">
            <div className="mb-6 w-[90%] m-auto">
              <img src={rec1} alt="Featured" className="w-full rounded-lg" />
            </div>
            <article className="space-y-6 w-[90%] m-auto text-gray-500">
              <p>
                Depending on the input, this can result in using a lot of
                processing power and time. The whole process would take
                approximately 5 seconds to return a result to the client. Keep
                in mind we’re talking about 1 item, a contact from a contact
                book. After a while, a new requirement is added. Solution must
                support companies that manage their contacts organized in files.
                We agreed to develop a web application that would support upload
                of dataset files, like .csv. The new web application should
                support third party integrations...
              </p>
              <p>
                Our initial approach went like this: The web application would
                read a .csv file line-by-line and submit an array of entries to
                the backend REST API. Processing is in real time, immediately
                after the user makes a request for entries to the backend REST
                API...
              </p>
              <p className="text-3xl font-bold text-black">Initial approach</p>
              <p className="w-[90%]">
                Our initial approach went like this: The web application would
                read a .csv file line-by-line and submit an array of entries to
                the backend REST API. Processing is in real time, immediately
                after the user makes a request for the process to start, he
                expects a result. Another approach is to apply vertical scaling
                to AWS architecture. Meaning we used larger, more expensive
                instances that have more RAM and processing power. This system
                worked well for smaller datasets, maybe up to 5k entries, but
                for larger datasets multiple problems arose. This solution is
                prone to failure due to long request time. Also, because of some
                3rd party services that aren’t optimized for large scale loads
                or they don’t have batch endpoints. 3rd party services also tend
                to protect their architecture from making a huge bill on their
                end. The whole process was done in real-time. The request can
                take a lot of time hanging in there while the backend would do
                all the work and return the result to the client. The request
                was limited to 300 seconds (at time of writing the article)
                before AWS would cancel it… Also I need to mention that the user
                has to wait a few minutes to see the results. They can’t use the
                app during the process, which makes for a bad user experience.
              </p>
            </article>
            <div className="flex w-[90%] m-auto items-start mt-12 space-x-6">
              <img src={rec2} alt="Author" className="" />
              <div>
                <img src={rec3} alt="" />
                <h3 className="text-lg font-semibold pt-[10px]">Written by</h3>
                <p className="text-xl font-bold text-black py-[5px]">Renee Wells</p>
                <p className="text-sm text-gray-500">
                  Product Designer, Quotient
                </p>
                <p className="mt-2 w-[50%] text-gray-500">
                  Skilled in React Native, iOS and backend, Toni has a
                  demonstrated knowledge of the information technology and
                  services industry, with plenty of hands-on experience to back
                  it up.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 font-sans text-white bg-gray-900"></div>
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
      </>
    </div>
  );
};

export default Detail;
