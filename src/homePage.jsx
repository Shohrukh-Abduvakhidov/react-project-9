import React from 'react'
import logo from "./assets/Logo (8).png"
import img1 from "./assets/Sales - Light.png"
import img2 from "./assets/Customer Growth - Light.png"
import img3 from "./assets/Statistic - Light.png"
import img5 from "./assets/Bar Chart.png"
import img4 from "./assets/Image (2).png"
import icon1 from "./assets/Icon (4).png"
import icon2 from "./assets/Icon (5).png"
import icon3 from "./assets/Icon (6).png"
import icon4 from "./assets/Icon (7).png"
import img6 from "./assets/Image (3).png"
import logo1 from "./assets/logo1.png"
import logo2 from "./assets/logo2.png"
import logo3 from "./assets/logo3.png"
import logo4 from "./assets/logo4.png"
import logo5 from "./assets/logo5.png"
import logo6 from "./assets/logo6.png"
import logo7 from "./assets/logo7.png"
import logo8 from "./assets/logo8.png"
import frame1 from "./assets/Frame 1171275175 (1).png"
import frame2 from "./assets/Frame 1171275176.png"
import frame3 from "./assets/Frame 1171275177.png"
import frame4 from "./assets/Frame 1171275178.png"
import rec1 from "./assets/Rectangle 5650.png"
import rec2 from "./assets/Rectangle 5651.png"
import rec3 from "./assets/Group 3260.png"
import stars from "./assets/Rating.png"
import avatar from "./assets/Ellipse 15.png"
import buttons from "./assets/Button Arrow.png"
const HomePage = () => {
  return (
    <>
    <>
  <header className="w-[90%] flex flex-col lg:flex-row items-center m-auto justify-between gap-20 lg:gap-10 mt-[100px]">
    <aside className="lg:w-[700px] m-0">
      <h1 className="text-[#1D1E25] text-[35px] lg:text-[70px] font-bold">
        Digitally forward creative
      </h1>
      <div className="lg:w-[471px] h-[56px] flex items-center gap-10 m-0 mt-[50px]">
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="border-b-2 outline-none py-[10px] px-[10px] w-[150px] lg:w-[280px]"
          />
          <button
            id="but-1"
            className="text-[#fff] bg-[#1D1E25] font-bold w-[175px] h-[56px] rounded-[100px]"
          >
            Try for free
          </button>
        </form>
      </div>
    </aside>
    <aside className="relative">
      <img src={img1} alt="" className="m-0 z-2" />
      <img
        src={img2}
        alt=""
        className="absolute z-2 m-0 top-[-85px] left-[140px] lg:top-[-50px] lg:left-[200px] w-[200px] lg:w-[300px]"
      />
      <img
        src={img3}
        alt=""
        className="absolute lg:absolute z-2 m-0 top-[250px] lg:top-[350px]"
      />
    </aside>
  </header>
  <main>
    <section className="w-full bg-[#1D1E25] pb-[50px] mt-[100px] pt-[50px]">
      <aside className="w-[90%] m-auto">
        <div className="lg:w-[816px] m-0">
          <h2 className="text-[#FFFFFF] text-[26px] lg:text-[56px] font-bold">
            Coca help our client solve complex customer problems with date that
            does more.
          </h2>
          <p className="text-[#7E8492] text-[18px] py-[20px]">
            Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions for
            identity, activation, and date collaboration
          </p>
        </div>
      </aside>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center mt-[50px] gap-20 lg:gap-[200px]">
        <aside className="m-0 lg:w-[453px]">
          <img src={icon1} alt="" className="m-0" />
          <h2 className="text-[32px] text-[#fff] lg:w-[390px] font-bold py-[10px] ">
            Build your date fundamental
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Build access to date, develop valuable business insights and drive
            revenue while maintaining full control over access and use of date
            at all times.
          </p>
          <img src={icon2} alt="" className="m-0 mt-[100px]" />
          <h2 className="text-[32px] text-[#fff] lg:w-[200px] font-bold py-[10px] ">
            Activate your date
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Accurately address your specific audiences at scale across any
            channel, platform, publisher or network and safely translate date
            between identity space to improve results.
          </p>
        </aside>
        <aside className="m-0 lg:w-[453px]">
          <img src={icon3} alt="" className="m-0" />
          <h2 className="text-[32px] text-[#fff] lg:w-[340px] font-bold py-[10px] ">
            Measure more effective
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Effectively measure people-based campaigns with the freedom to
            choose from best-of breed partners to optimize and drive media
            innovation.
          </p>
          <img src={icon4} alt="" className="m-0 mt-[100px]" />
          <h2 className="text-[32px] text-[#fff] lg:w-[300px] font-bold py-[10px] ">
            Strengthen consumer privacy
          </h2>
          <p className="text-[#7E8492] text-[16px] py-[10px]">
            Protect your customer date with leading privacy-preserving
            technologies and advanced techniques to minimize date movement while
            still enabling insight generation.
          </p>
        </aside>
      </section>
    </section>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-20 mt-[100px]">
      <aside className="lg:w-[585px] relative">
        <img src={img4} alt="" className="m-0" />
        <img
          src={img5}
          alt=""
          className="absolute m-0 top-[50%] left-[49%] lg:top-[50%] lg:left-[45%] w-[150px] lg:w-[290px]"
        />
      </aside>
      <aside className="lg:w-[557px]">
        <h2 className="text-[#1D1E25] text-[25px] lg:text-[56px] font-bold">
          Passion to increase company revenue up to 85%
        </h2>
        <p className="text-[#7E8492] text-[18px] lg:w-[360px] py-[20px]">
          Automate your sales, marketing and service in one platform. Avoid date
          leaks and enable consistent messaging
        </p>
        <div className="text-[#1D1E25] text-[18px] lg:w-[393px] m-0">
          <p className="flex items-center gap-[10px] py-[10px]">
            <img src="../images/galochca.png" alt="" className="m-0" />
            Close more deals with single - page contact managment
          </p>
          <p className="flex items-center gap-[10px] py-[10px]">
            <img src="../images/galochca.png" alt="" className="m-0" />
            Enjoy one-click calling, call scripts and voicemail automation
          </p>
          <p className="flex items-center gap-[10px] py-[10px]">
            <img src="../images/galochca.png" alt="" className="m-0" />
            Take stages and milestones of your deals to keep the sales process
            an track
          </p>
        </div>
      </aside>
    </section>
    <section className="w-[90%] m-auto grid grid-cols-2 lg:grid-cols-4 mt-[100px] gap-10">
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">17k</h2>
        <p className="text-[18px] text-[#7E8492]">
          happy customers on worldwide
        </p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">15+</h2>
        <p className="text-[18px] text-[#7E8492]">Hours of work experience</p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">50+</h2>
        <p className="text-[18px] text-[#7E8492]">
          Creativity &amp; passionate members
        </p>
      </aside>
      <aside className="lg:w-[176px]">
        <h2 className="text-[62px] text-[#1D1E25] font-bold">100+ </h2>
        <p className="text-[18px] text-[#7E8492]">
          Integrations lorem ipsum integrations
        </p>
      </aside>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className="">
        <img src={img6} alt="" className="m-0" />
      </aside>
    </section>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-20 mt-[50px] ">
      <aside className="lg:w-[700px]">
        <h2 className=" text-[24px] lg:text-[52px] text-[#1D1E25] font-bold">
          Lift your business to new heights with our digital marketing services
        </h2>
      </aside>
      <aside className="lg:w-[450px]">
        <p className="text-[18px] text-[#7E8492] pb-[60px]">
          To build software that gives customer facing teams in small and
          medium-sized businesses the ability to create rewarding and
          long-lasting relationships with customers
        </p>
      </aside>
    </section>
    <section className="w-[90%] mt-[100px] m-auto flex flex-col lg:flex-row items-center justify-between gap-0">
      <aside className="lg:w-[323px] m-0 ">
        <h2 className="text-[52px] text-[#1D1E25] font-bold">890+</h2>
        <p className="text-[#7E8492] text-[18px]">
          some big companies that we work with, and trust us very much
        </p>
      </aside>
      <aside className="lg:w-[730px] flex-row flex lg:flex-col">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <img src={logo1} alt="" className="m-0" />
          <img src={logo2} alt="" className="m-0" />
          <img src={logo3} alt="" className="m-0" />
          <img
            src={logo4}
            alt=""
            className="m-0 lg:w-[100px]"
          />
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row ml-[30px]">
          <img
            src={logo5}
            alt=""
            className="m-0 lg:w-[160px]"
          />
          <img src={logo6} alt="" className="m-0" />
          <img src={logo7} alt="" className="m-0" />
          <img src={logo8} alt="" className="m-0" />
        </div>
      </aside>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className="lg:w-[601px]  m-0">
        <h2 className="text-[#1D1E25] text-[56px] font-bold">
          Advertise, analyze, and optimize! We do it all for you
        </h2>
        <p className="text-[#7E8492] text-[18px lg:w-[442px] py-[20px]">
          Build more meaningful and lasting relationships - better understand
          their needs, identify new opportunities to help address any problems
          faster
        </p>
      </aside>
      <aside className="grid grid-rows-2 lg:grid-cols-2 mt-[50px] gap-[20px] lg:gap-10">
        <aside className="w-auto lg:w-[566px] flex gap-10 m-0 items-center">
          <img
            src={frame1}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[0px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Lead happiness for customers
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={frame2}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[40px]'>
            <h2 className="text-[#1D1E25] py-[20px] text-[16px] lg:text-[25px] font-bold">
              Mutually support each other
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[16px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={frame3}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[20px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Have fun growing together
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
        <aside className="w-auto lg:w-[500px] flex gap-0 m-0 items-center">
          <img
            src={frame4}
            alt=""
            className="m-0 w-[160px] lg:w-[240px]"
          />
          <div className='ml-[40px]'>
            <h2 className="text-[#1D1E25] text-[16px] lg:text-[32px] font-bold">
              Make Your Business Grow
            </h2>
            <p className="text-[#7E8492] text-[14px] lg:text-[18px]">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>
        </aside>
      </aside>
    </section>
    <aside className="lg:w-[671px] m-auto text-center mt-[100px]">
      <h2 className="text-[#1D1E25] text-[56px] font-bold">
        Trending news from Coca
      </h2>
      <p className="text-[#7E8492] text-[18px] py-[20px]">
        we have some new Service to pamper you
      </p>
    </aside>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center gap-[20px] mt-[50px] relative">
      <aside className="lg:w-[582px]">
        <img
          src={rec1}
          alt=""
          className="m-0 lg:w-[582] lg:h-[332px]"
        />
        <img src="../images/meta-1.png" alt="" className="m-0 py-[10px]" />
        <h2 className="text-[32px] text-[#1D1E25] font-bold">
          What makes an authentic employee profile, and why does it matter ?
        </h2>
      </aside>
      <img
        src={rec3}
        alt=""
        className="absolute m-0 hidden lg:block lg:top-[30%] lg:left-[46.5%]"
      />
      <aside className="hidden lg:block lg:w-[582px]">
        <img
          src={rec2}
          alt=""
          className="m-0 lg:w-[582] lg:h-[332px]"
        />
        <img src="../images/meta-2.png" alt="" className="m-0 py-[10px]" />
        <h2 className="text-[32px] text-[#1D1E25] font-bold">
          How to build a Kaylen relationship with a good company
        </h2>
      </aside>
    </section>
    <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 mt-[100px]">
      <h2 className="text-[#1D1E25] text-[30px] lg:text-[56px] font-bold lg:w-[530px]">
        What our customer are saying
      </h2>
      <p className="text-[#7E8492] text-[14px] lg:text-[18px] py-[20px] lg:w-[380px]">
        We are trusted numerous companies from different business to meet their
        needs
      </p>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className=" lg:w-[898px]">
        <img src={stars} alt="" className="m-0 py-[10px]" />
        <h2 className="text-[#1D1E25] text-[25px] lg:text-[47px]">
          “With Agency the results are very satisfying. wrapped with Hight
          quality and innovative design that makes a surge on my website”
        </h2>
      </aside>
      <aside className="lg:w-[90%] mt-[20px]  flex items-center lg:justify-between">
        <div className="flex gap-[15px] items-center m-0">
          <img src={avatar} alt="" className="m-0" />
          <div className="m-0">
            <p className="">Renee Wells</p>
            <p className="py-[5px]">Product Designer, Quotient</p>
          </div>
        </div>
        <img src={buttons} alt="" className="m-0" />
      </aside>
    </section>
  </main>
</>



    <footer className="mt-[200px]">
  <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    <aside className="lg:w-[720px] lg:ml-[20px] m-0">
      <h2 className="text-[24px] lg:ml-[20px] lg:text-[64px] text-[#1D1E25] font-bold">
        Think beyond the wave
      </h2>
      <div className="flex items-start gap-[20px] mt-[20px]">
        <img
          src="../images/Line.png"
          alt=""
          className=" m-0 w-[18px] lg:w-[76px] block pt-[15px] lg:pt-[20px]"
        />
        <h2 className="text-[16px] lg:text-[24px] text-[#1D1E25] font-bold">
          Ask about Sans products, pricing, implementation, or anything else.
          Our highly trained reps are standing by, ready to help
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

    </>
  )
}

export default HomePage
