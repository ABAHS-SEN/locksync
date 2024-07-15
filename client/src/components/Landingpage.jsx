import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutUs from './landing-components/about';
import Contact from './landing-components/contact';
import Usage from './landing-components/usage';
import Copyrights from './landing-components/copyright';
import Contribute from './landing-components/contribute';
import Vediosection from './landing-components/videosection';
import './css/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + horizontal.offsetWidth,
      }
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  return (
    <div>
      <div className="p-4 mx-auto text-center max-w-full max-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-semibold mb-4 font-poppins text-[8vw] uppercase leading-[8.5vw]">WELCOME TO LOCKSYNC</h1>
          <h2 className="lg:text-4xl font-semibold mb-6 text-xl">The best place to sync and share your Account securely.</h2>
          <div className="mb-6">
            <a
              href="/register"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Register
            </a>
            <a
              href="/login"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </a>
          </div>
          <img
            className="h-40 w-40 lg:h-48 lg:w-48 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_1280.png"
            alt="example"
          />
          <div id="moving-div" className='mt-5 relative'>
            <div className="blur-left"></div>
            <span className="move mb-6 font-poppins text-3xl">
              Locksync is your ultimate file syncing and sharing solution. Secure, fast, and reliable.
            </span>
            <span className="move mb-6 font-poppins text-3xl">
              Locksync is your ultimate file syncing and sharing solution. Secure, fast, and reliable.
            </span>
            <div className="blur-right"></div>
          </div>
        </div>
      </div>

      

      <div className='w-full h-[1px] bg-gray-700'></div>
      <Usage />
      <div className='w-full h-[1px] bg-gray-700'></div>
      <AboutUs />
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Contribute/>
      <div className='w-full h-[1px] bg-gray-700'></div>

      <div ref={horizontalRef} className="horizontal-scroll-section overflow-hidden">
        <div className="horizontal-scroll-container flex">
          <section ref={addToRefs} className="panel bg-green-200 w-screen h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Welcome to our Horizontal Scroll Section</h2>
          </section>
          <section ref={addToRefs} className="panel bg-blue-200 w-screen h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Scroll Horizontally to see more</h2>
          </section>
          <section ref={addToRefs} className="panel bg-purple-200 w-screen h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Another Horizontal Section</h2>
          </section>
        </div>
      </div>
      
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Vediosection/>
      <div className='w-full h-[1px] bg-gray-700'></div>
      <Contact />
      <div className='w-full h-[1px] bg-gray-700'></div>
      
      
      <Copyrights />
    </div>
  );
};

export default LandingPage;