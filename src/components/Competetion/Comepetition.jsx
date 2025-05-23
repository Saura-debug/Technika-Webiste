import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
gsap.registerPlugin(ScrollTrigger);
main
gsap.registerPlugin(SplitText)
import Popupform from "./Popupform";

function Comepetition() {
    const [windowopen, setwindowopen] = useState(false)
    const [windowinfo, setwindowinfo] = useState({})
    const[displayform,setdisplayform]=useState(false)
    const competitionInfo = [
        {
            name: "Code Sprint",
            img: "/clay-banks-0VfnZbQd98c-unsplash.jpg",
            quote: "Code fast, think faster!",
            prize: "₹25,000",
            registrationFee: "₹200",
            instructions: [
                "Each team can have up to 3 members.",
                "You will be given a problem statement at the start.",
                "You must submit your solution within the given time limit.",
                "Use of AI tools is not allowed.",
            ],
            accentColor:"white"
        },
        {
            name: "Hackathon",
            img: "/c-f-photography-iV_oBbfZNmg-unsplash.jpg",
            quote: "Innovate, build, disrupt.",
            prize: "₹50,000",
            registrationFee: "₹500",
            instructions: [
                "Maximum team size: 4 members.",
                "Projects must be developed during the event.",
                "Judging criteria include innovation, feasibility, and presentation.",
                "You must present a working prototype.",
            ],
            accentColor:"amber"
        },
        {
            name: "Tech Quiz",
            img: "/safar-safarov-koOdUvfGr4c-unsplash.jpg",
            quote: "Knowledge is power—prove it!",
            prize: "₹10,000",
            registrationFee: "₹100",
            instructions: [
                "Individual or team participation (max 2 per team).",
                "The quiz will have 3 rounds: MCQs, rapid-fire, and buzzer round.",
                "Negative marking is applicable.",
                "Use of mobile phones is strictly prohibited.",
            ],
            accentColor:"blue"
        },
        {
            name: "App Development Challenge",
            img: "/jason-leung-1DjbGRDh7-E-unsplash.jpg",
            quote: "Turning ideas into apps!",
            prize: "₹30,000",
            registrationFee: "₹300",
            instructions: [
                "Solo or team participation (max 3 members).",
                "The app must be developed during the competition.",
                "Judging criteria include UI/UX, functionality, and originality.",
                "Apps must be deployed and demonstrated at the end.",
            ],
            accentColor:"orange"
        },
    ];
    

gsap.registerPlugin(SplitText);

function Comepetition() {
  const [windowopen, setwindowopen] = useState(false);
  const [windowinfo, setwindowinfo] = useState({});
  const competitionInfo = [
    {
      name: "Code Sprint",
      img: "/clay-banks-0VfnZbQd98c-unsplash.jpg",
      quote: "Code fast, think faster!",
      prize: "₹25,000",
      registrationFee: "₹200",
      instructions: [
        "Each team can have up to 3 members.",
        "You will be given a problem statement at the start.",
        "You must submit your solution within the given time limit.",
        "Use of AI tools is not allowed.",
      ],
      bgColor:"bg-yellow-300",
      accentColor: "text-yellow-200",
    },
    {
      name: "Hackathon",
      img: "/c-f-photography-iV_oBbfZNmg-unsplash.jpg",
      quote: "Innovate, build, disrupt.",
      prize: "₹50,000",
      registrationFee: "₹500",
      instructions: [
        "Maximum team size: 4 members.",
        "Projects must be developed during the event.",
        "Judging criteria include innovation, feasibility, and presentation.",
        "You must present a working prototype.",
      ],
      bgColor:"bg-green-800",
      accentColor: "text-green-700",
    },
    {
      name: "Tech Quiz",
      img: "/safar-safarov-koOdUvfGr4c-unsplash.jpg",
      quote: "Knowledge is power—prove it!",
      prize: "₹10,000",
      registrationFee: "₹100",
      instructions: [
        "Individual or team participation (max 2 per team).",
        "The quiz will have 3 rounds: MCQs, rapid-fire, and buzzer round.",
        "Negative marking is applicable.",
        "Use of mobile phones is strictly prohibited.",
      ],
      bgColor:"bg-sky-500",
      accentColor: "text-sky-400",
    },
    {
      name: "App Development Challenge",
      img: "/jason-leung-1DjbGRDh7-E-unsplash.jpg",
      quote: "Turning ideas into apps!",
      prize: "₹30,000",
      registrationFee: "₹300",
      instructions: [
        "Solo or team participation (max 3 members).",
        "The app must be developed during the competition.",
        "Judging criteria include UI/UX, functionality, and originality.",
        "Apps must be deployed and demonstrated at the end.",
      ],
      bgColor:"bg-amber-500",
      accentColor: "text-amber-400",
    },
  ];

 main
  const pageref = useRef();
  const sectionref = useRef([]);
  const cursorRef = useRef();
  const targetImgRef = useRef(null);
  const windowref = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const windowopenning = (e) => {
    const targetImg = targetImgRef.current;
    if (!targetImg) return;
    // Get the bounding rectangles for the clicked image and the target image
    const clickedRect = e.getBoundingClientRect();
    const targetRect = targetImg.getBoundingClientRect();

    // Calculate the differences
    const deltaX = targetRect.left - clickedRect.left;
    const deltaY = targetRect.top - clickedRect.top;

    // Animate the clicked image to move to the target position
    gsap.to(e, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  const SearchImageForWindow = (e) => {
    const searchimg = e.src.split("http://localhost:5173")[1];
    setwindowinfo(competitionInfo.find((e) => e.img == searchimg));
  };

  // --- Track Mouse Position and Update Custom Cursor ---
  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) return;

    const moveCursor = (e) => {
      // Use GSAP to smoothly follow the mouse
      gsap.to(cursorElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Small duration for smoothing, use 0 for instant
        ease: "power1.out",
        // To center the cursor on the pointer:
        xPercent: -50,
        yPercent: -50,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []); // Empty dependency array ensures this runs only once

  // --- Effect to Show/Hide Custom Cursor based on Hover State ---
  useEffect(() => {
    const cursorElement = cursorRef.current;
    const containerElement = pageref.current; // The element where default cursor needs hiding
    if (!cursorElement || !containerElement) return;

    if (isHoveringCard) {
      // Animate custom cursor in
      gsap.to(cursorElement, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
        opacity: 0.8,
      });
      // Hide default cursor on the container
      containerElement.style.cursor = "none";
    } else {
      // Animate custom cursor out
      gsap.to(cursorElement, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power1.out",
      });
      // Restore default cursor on the container
      containerElement.style.cursor = "auto";
    }
  }, [isHoveringCard]);

  useEffect(() => {
    if (windowopen == true) {
      const windowtimeline = gsap.timeline();
      windowtimeline
        .fromTo(
          windowref.current,
          { scaleX: 0, transformOrigin: "left", opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          targetImgRef.current,
          { scaleX: 0, transformOrigin: "left", opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out" }
        );
    }
  }, [windowopen, windowinfo]);

  useEffect(() => {
    if (windowopen) {
      const handleClickOutside = (event) => {
        if (windowref.current && !windowref.current.contains(event.target)) {
          setwindowopen(false); // Close the modal
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [windowopen]);

  const handleMouseEnterCard = (e) => {
    setIsHoveringCard(true);
    // Optional: Keep or remove the card scaling effect
    gsap.to(e.currentTarget, {
      scale: 1.2,
      duration: 0.3,
      ease: "power1.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeaveCard = (e) => {
    setIsHoveringCard(false);
    // Optional: Keep or remove the card scaling effect
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
      overwrite: "auto",
    });
  };

  useGSAP(
    () => {
      const length = sectionref.current.length;
      const cards = document.querySelectorAll(".card");

      gsap.set(sectionref.current[0], { y: "0%" });

      for (let i = 1; i < length; i++) {
        gsap.set(sectionref.current[i], { y: "100%" });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: pageref.current,
          start: "top top",
          end: `+=${window.innerHeight * (length - 1)}`,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (length - 1), // Snaps to each section
            ease: "power1.inOut",
            duration: { min: 0.2, max: 0.4 }, // Control snap animation duration
            delay: 0,
          },
          // markers:true,
        },
      });
      const splitInstances = [];
      for (let i = 0; i < length - 1; i++) {
        let current = cards[i];
        let nextcard = cards[i + 1];
        let currentimg = current.children[1];
        let nextimg = nextcard.children[1];
        let prevheading = current.children[0];
        let previnfo = current.children[2];
        let nextheading = current.children[0];
        let nextinfo = current.children[2];

        // scrollTimeline.to(currentimg, {
        //     y: "-100%",
        //     opacity: 0
        // }, i);

        const nameElement = prevheading;
        const infoElement = previnfo;
        if (nameElement) {
          const infoSplit = new SplitText(infoElement, { type: "lines" });
          const nameSplit = new SplitText(nameElement, { type: "lines" });

          splitInstances.push(nameSplit, infoSplit); // Store for cleanup

          scrollTimeline.to(
            [nameSplit.lines, infoSplit.lines],
            {
              opacity: 0,
              y: "-100%",
              // duration: 0.4,
              stagger: 0.05,
            },
            i
          );
        }

        scrollTimeline.to(
          nextcard,
          {
            y: "0%",
            opacity: 1,
            duration: 0.5,
          },
          i
        );
      }
      return () => {
        splitInstances.forEach((split) => split.revert()); // Revert SplitText changes
        scrollTimeline.kill(); // Kill the timeline
        ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill associated ScrollTriggers
        // Optionally clear GSAP properties if needed
        gsap.set(cards, { clearProps: "all" });
      };
    },
    { scope: pageref }
  );

  return (
    <div className="w-full h-full bg-gray-900 font-[main-font] main-color ">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-24 h-24 bg-gray-600 rounded-full flex justify-center items-center text-white text-sm font-semibold pointer-events-none opacity-0 scale-0 z-50" // Style the cursor
        style={{ opacity: 0, scale: 0 }} // Initial GSAP state (redundant but safe)
      >
        View More
      </div>
      <div className="w-full h-screen font-[team-font] text-white flex justify-center items-center bg-blur">
        <h1 className="text-[4.5vw] font-black">Competetions</h1>
      </div>
      <div
        ref={pageref}
        className="w-full h-screen flex flex-col justify-center items-center px-40 bg-blur gap-40 relative"
        style={{
          backgroundImage: `url('/2cbc84d3-7541-40fa-99a9-69234be52e94.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {windowopen && windowinfo && (
main
            <div ref={windowref} className={`flex h-[70vh] w-[65vw] justify-center items-center bg-gray-800 rounded-3xl shadow-lg overflow-hidden z-50 backdrop-blur-lg`}>
                <div className={`w-1/3`}>
                    <div ref={targetImgRef} className={`w-full h-full`}>
                        <img
                            src={`${windowinfo.img}`} // Replace with your image path
                            alt="Random Info"
                            className={`w-[19vw] h-[26vw] bg-${windowinfo.accentColor}-400 hover:scale-125 rounded-xl transition duration-500 cursor-pointer ease-in-out overflow-hidden`}
                        />
                    </div>
                </div>
                <div className={`flex flex-col gap-4 text-white`}>
                <h2 className={`text-[2.5vw] font-extrabold text-${windowinfo.accentColor}-400 uppercase`}>
                    {windowinfo.name}
                </h2>
                <p className={`text-gray-300 text-lg leading-relaxed`}>
                    Participate in this thrilling competition and stand a chance to win exciting prizes!
                </p>

                {/* Prize Money */}
                <div className={`text-${windowinfo.accentColor}-400 text-xl font-semibold`}>
                    🏆 Prize Money: <span className={`text-white`}>{windowinfo.prize}</span>
                </div>

                {/* Instructions */}
                <ul className={`list-disc pl-5 text-gray-300 text-lg space-y-2`}>
                    {windowinfo.instructions.map((instruction, index) => (
                        <li key={index} className={`hover:text-${windowinfo.accentColor}-400 transition duration-300`}>
                            {instruction}
                        </li>
                    ))}
                </ul>

                {/* Apply Button */}
                <button
                    className={`mt-4 px-6 py-2 text-lg font-bold text-white bg-${windowinfo.accentColor}-500 rounded-lg shadow-lg hover:bg-${windowinfo.accentColor}-600 transition-all duration-300`} onClick={() => {setdisplayform(true)}}
                >
                    Apply Now
                    
                </button>
               
               

               

          <div
            ref={windowref}
            className={`flex h-[70vh] w-[65vw] justify-center items-center bg-gray-800 rounded-3xl shadow-lg overflow-hidden z-50 backdrop-blur-lg`}
          >
            <div className={`w-1/3`}>
              <div ref={targetImgRef} className={`w-full h-full`}>
                <img
                  src={`${windowinfo.img}`} // Replace with your image path
                  alt="Random Info"
                  className={`w-[19vw] h-[26vw] bg-${windowinfo.accentColor}-400 hover:scale-125 rounded-xl transition duration-500 cursor-pointer ease-in-out overflow-hidden`}
                />
              </div>
 main
            </div>
            <div className={`flex flex-col gap-4`}>
              <h2
                className={`text-[2.5vw] font-extrabold ${windowinfo.accentColor} uppercase`}
              >
                {windowinfo.name}
              </h2>
              <p className={`text-gray-300 text-lg leading-relaxed`}>
                Participate in this thrilling competition and stand a chance to
                win exciting prizes!
              </p>

              {/* Prize Money */}
              <div
                className={`${windowinfo.accentColor} text-xl font-semibold`}
              >
                🏆 Prize Money:{" "}
                <span className={`text-white`}>{windowinfo.prize}</span>
              </div>

              {/* Instructions */}
              <ul className={`list-disc pl-5 text-gray-300 text-lg space-y-2`}>
                {windowinfo.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className={`hover:${windowinfo.accentColor} transition duration-300`}
                  >
                    {instruction}
                  </li>
                ))}
              </ul>

              {/* Apply Button */}
              <button
                className={`mt-4 px-6 py-2 text-white text-lg font-bold ${windowinfo.bgColor} rounded-lg shadow-lg hover:bg-${windowinfo.accentColor}-600 transition-all duration-300`}
              >
                Apply Now
              </button>
            </div>
main
          
            
        )}
       
        {competitionInfo.map((e,index) => (

          </div>
        )}
        {competitionInfo.map((e, index) => (
 


main
          <>
            <div
              ref={(el) => (sectionref.current[index] = el)}
              key={index}
              className="w-full h-full flex justify-center items-center gap-20 absolute card overflow-hidden"
            >
              <h1 className="text-white text-[4vw] w-[30%] font-black flex flex-col justify-center items-center text-center leading-normal gap-3 sm:leading-[65px]">
                {e.name}
              </h1>
              <Tilt>
                <img
                  src={e.img}
                  onMouseEnter={handleMouseEnterCard}
                  onMouseLeave={handleMouseLeaveCard}
                  onClick={(e) => {
                    setwindowopen(true);
                    windowopenning(e.currentTarget);
                    SearchImageForWindow(e.currentTarget);
                  }}
                  className="w-[20vw] h-[25vw] bg-orange-400 hover:scale-125 rounded-2xl transition duration-500 cursor-pointer ease-in-out overflow-hidden"
                  alt=""
                />
              </Tilt>
              <h1 className="text-white sm:text-[4vw] w-[30%] font-black flex flex-col justify-center items-center text-center leading-normal sm:leading-[65px]">
                {e.quote}
              </h1>
            </div>
          </>
        ))}
        {displayform && (
          <Popupform onClose={() => setdisplayform(false) } />
        )}
      </div>
      <div className="w-full h-[50vh] flex justify-center items-center"></div>
    </div>
    
    
  );
}

export default Comepetition;
