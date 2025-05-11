import * as React from 'react'
import NavLink from '../NavLink'
import Image from 'next/image'
import styles from './landingPage.module.scss'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* top section */}
      <div 
        style={{ 
          position: "relative", 
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        {/* Video background */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0
          }}
        >
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            src='/assets/lp-bg.mp4'
            style={{objectFit: "cover", pointerEvents: "none"}}

            />
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/mOFoh9FUR8w?autoplay=1&mute=1&controls=0&loop=1&playlist=mOFoh9FUR8w&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              pointerEvents: "none",
              objectFit: "cover"
            }}
          /> */}
        </div>
        <div 
          className="container text-center pb-5"
          style={{ 
            position: "relative", 
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "white",
            padding: "40px",
            borderRadius: "10px",
            backdropFilter: "blur(0.1px)",
          }}
        >
          <div className="row justify-center mt-5">
            <div className="col-md-8 offset-md-2">
              <h1 
                className="display-3 fw-bold text-center"
                style={{
                  color:"white"
                }}
              >
                PATHACKS
              </h1>
            </div>
          </div>
          <div className="row justify-center mt-4">
            <div className="col-md-10 offset-md-1">
              <h1
                style={{
                  fontSize: window.innerWidth < 768 ? "28px" : "32px",
                  fontWeight:"lighter",
                  color:"rgb(84,64,216)"
                }}
              >
                FORGE YOUR DIGITAL DESTINY THE HARD WAY
              </h1>
            </div>
          </div>
          <div className="row justify-center mt-4">
            <div className="col-md-10 offset-md-1">
              <h3
                style={{
                  fontSize: window.innerWidth < 768 ? "19px" : "20px",
                  color:"white"
                }}
              >
                TRANSCEND CODE. MASTER DIGITAL REALITY.
              </h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 offset-md-3 mb-5">
              <NavLink path="/curriculum" className="btn btn-primary py-3 px-5">
                Get Started
              </NavLink>
            </div>
          </div>
        </div>

      </div>
      
      {/* become a software engineer */}
      <div className="container text-center pt-5 pb-5">

        <div 
          className="col-md-6 offset-md-3 mt-5"
        >
            <Image
              height="360"
              width="440"
              alt="Hero image"
              src="/assets/landing/software engineer.svg"
            />
        </div>
        <div className="row justify-center">
          <div className="col-md-10 offset-md-1 mt-5">
            <h1 className="display-3 fw-bold text-center">
              BECOME A SOFTWARE ENGINEER THE QUANTUM WAY
            </h1>
          </div>
        </div>
        <div className="row justify-center mt-4">
          <div className="col-md-10 offset-md-1">
            <p className={`${styles.p__large} fw-light`}>
              PathHacks isn't just another learning platform—it's a challenging journey through the
              digital dimensions of code. We take no shortcuts and effectively train students with no
              technical background to become great software engineers through intentionally difficult
              challenges and dedicated mentorship.
            </p>
          </div>
        </div>

      </div>

      {/* Your Learning Journey */}
      <div
        className="container-fluid py-5"
        style={{ 
          background: 'rgb(84,64,216)', 
          color: 'white',
        }}
      >
        <div className="container mt-5">
          <h1 id="journey" className="mt-5 display-4 fw-bold text-center">
            Your Learning Journey
          </h1>
          <p
            className={`${styles.p__large} mt-5 fw-light col-md-8 offset-md-2 pb-5 text-center`}
          >
            Our learning process is interactive and follows the same practice as a well-functioning
            engineering team. From the first line of code you write, you will receive Code Resonance
            (peer review) from experienced engineers to ensure you are always following industry
            best practices.
          </p>
          <div className="row mt-5 pb-5">
            <div className="col-md-5 order-md-2 text-center">
              <Image
                src="/assets/landing/journey-01.svg"
                alt="Creating an account"
                layout="intrinsic"
                width="403"
                height="293"
              />
            </div>
            <div className="col-md-5 offset-md-1 order-md-1 align-self-center">
              <h2 className="fw-bold">DIGITAL GENESIS</h2>
              <p className={`${styles.p__regular} mt-3 fw-light`}>
              After creating an account, you will gain access to our code-reviewed curriculum and our
              Neural Network community.
              </p>
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col-md-5 offset-md-1 text-center">
              <Image
                height="449"
                width="419"
                alt="Curriculum"
                src="/assets/landing/journey-02.svg"
                layout="intrinsic"
              />
            </div>
            <div className="col-md-5 align-self-center">
              <h2 className="fw-bold">PATH ACCESS</h2>
              <p className={`${styles.p__regular} mt-3 fw-light`}>
              Each dimension in our curriculum is designed to be hands-on, and you will learn by
              working through Reality Challenges. All hosting is provided so you can proudly share
              your accomplishments without spending a penny. The challenges are intentionally
              difficult to force you to ask questions and grow.

              </p>
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col-md-5 order-md-2 text-center">
              <Image
                src="/assets/landing/journey-03.svg"
                alt="Pay it forward"
                layout="intrinsic"
                height="437"
                width="419"
              />
            </div>
            <div className="col-md-5 order-md-1 offset-md-1 align-self-center">
              <h2 className="fw-bold">PATH ILLUMINATION</h2>
              <p className={`${styles.p__regular} mt-3 fw-light`}>
              When you complete a dimension, you will have the opportunity to help new students
              who are starting their journey. By reviewing others' code to the same standard that you
              were reviewed, you help ensure new students are writing good code while deepening
              your own understanding.
              </p>
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col-md-5 offset-md-1 text-center">
              <Image
                src="/assets/landing/journey-04.svg"
                layout="intrinsic"
                width="316"
                height="418"
                alt="Work Experience"
              />
            </div>
            <div className="col-md-5 align-self-center">
              <h2 className="fw-bold">DIMENSIONAL CONTRIBUTION</h2>
              <p className={`${styles.p__regular} mt-3 fw-light`}>
              After completing our curriculum, you will gain access to our internal code repository
              that powers pathacks.com and have the opportunity to work with our engineers to
              experience the entire workflow of a full stack software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Paths */}
      <div className="container text-center py-5">
      
          <div className="row mt-5">
            <div className="col-12 col-md-8 offset-md-2">
              <h1   className="display-4 fw-bold" id="learning">
                QUANTUM PATHS
              </h1>
            </div>
        </div>
        <div 
          className="row"
          style={{
            marginTop: window.innerWidth < 768 ? "25px" : "50px",
          }}
        >
          <div className="col-md-10 offset-md-1">
            <p className={`${styles.p__large} fw-light`}>
            Our structured progression takes you through increasingly complex dimensions of
            programming knowledge, with each path building on the previous one.
            </p>
          </div>
        </div>
        <div className="row align-items-start">
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/source.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="230"
                style={{
                  paddingBottom:"10px"
                }}
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P0: SOURCE MODE</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Foundations of Programming
                  </p>
                <p 
                  className="fw-light"
                >
                  Connect with the fundamental source code of programming concepts. Begin your
                  journey by establishing a strong foundation in computational thinking and basic syntax.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    10 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/logic.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="200"
                style={{
                  paddingBottom:"10px"
                }}
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P1: LOGIC CIRCUITS</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Variables & Functions
                  </p>
                <p 
                  className="fw-light"
                >
                  Learn how to solve simple algorithm problems recursively with exercises that develop
                  your ability to create and manipulate the basic building blocks of all programs.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    12 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/data.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="210"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P2: DATA STREAMS</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Arrays & Data Structures
                  </p>
                <p 
                  className="fw-light"
                >
                  These exercises will help you gain a better understanding of what it means for a data
                  structure to be non-primitive and how to manipulate collections of data effectively.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    11 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/reality.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="220"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P3: REALITY MAPPING</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Objects & Complex Structures
                  </p>
                <p 
                  className="fw-light"
                >
                  These exercises will test your understanding of objects, which includes linked lists and
                  trees—essential structures for modeling real-world relationships in code.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    10 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/interface.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="163"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P4: INTERFACE DIMENSION</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Front End Engineering
                  </p>
                <p 
                  className="fw-light"
                >
                  Create challenging front-end mini-projects and build an understanding of Web
                  Development. Covers the last fundamental JavaScript concept: Complex Objects.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    7 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/system.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="180"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P5: SYSTEM NEXUS</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  End to End Development
                  </p>
                <p 
                  className="fw-light"
                >
                  These exercises will help you build a strong understanding of how the web works,
                  connecting front-end interfaces with back-end systems to create complete applications.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    9 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              padding:"0px",
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/framework.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="220"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P6: QUANTUM FRAMEWORK</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Modern Web Technologies
                  </p>
                <p 
                  className="fw-light"
                >
                  Master React, GraphQL, and SocketIO to build dynamic, data-driven applications with
                  real-time capabilities that represent the current industry standard.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    8 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div 
            className="col-md-6 col-lg-4"
            style={{
              marginTop:"100px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <div
              style={{
                width:"90%",
              }}
            >
              <Image
                src="/assets/landing/algorithm.svg"
                height="170"
                layout="fixed"
                alt="Modern curriculum"
                width="290"
              />
              <div
                style={{
                  backgroundColor:"#5440d8",
                  color:"white",
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                <p className="mt-3 fw-bold h3">P7: ALGORITHMIC ALCHEMY</p>
                <p 
                  className="mt-3"
                  style={{
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Advanced Algorithms
                  </p>
                <p 
                  className="fw-light"
                >
                  Transform complex problems into elegant, efficient solutions with these algorithm
                  challenges commonly asked in technical interviews at top companies.
                </p>
                <p className="mt-3">
                  <b
                    style={{
                      backgroundColor:"white",
                      color:"#5440d8",
                      fontSize:"12px",
                      width:"fit-content",
                      textAlign:"center",
                      padding: "2px 6px 2px 6px"
                    }}
                  >
                    11 CHALLENGES
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </div>

      {/* Neural Network */}
      <div 
        className="container-fluid text-center"
        style={{
          marginTop: window.innerWidth < 768 ? "40px" : "75px",
          paddingTop: window.innerWidth < 768 ? "40px" : "100px",
          paddingBottom: window.innerWidth < 768 ? "40px" : "100px",
          backgroundColor: "#5440d8",
          color:"white"
        }}
      >
          <div className="container text-center">
          
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <h1   className="display-4 fw-bold" id="learning">
                  NEURAL NETWORK
                </h1>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-10 offset-md-1">
                <p className={`${styles.p__large} fw-light`}>
                Join our interconnected community of learners who strengthen each other through
                collaboration and knowledge sharing. Our Discord server is where you can ask
                questions, share insights, and connect with fellow Path Hackers.
                </p>
              </div>
            </div>
            <div className="row mt-5 align-items-start">
              <div className="col-md-4">
                <Image
                  src="/assets/landing/choose-01.svg"
                  height="170"
                  layout="fixed"
                  alt="Modern curriculum"
                  width="163"
                />
                <p className="mt-3 fw-bold h3">CODE RESONANCE</p>
                <p className="mt-4 fw-light">
                Participate in peer review processes where experienced engineers analyze your code to
                identify patterns of brilliance and opportunities for optimization, ensuring you're always
                following industry best practices.
                </p>
              </div>
              <div className="col-md-4">
                <Image
                  src="/assets/landing/choose-02.svg"
                  height="170"
                  layout="fixed"
                  alt="Support"
                  width="259"
                />
                <p className="mt-3 fw-bold h3">QUANTUM DIFFICULTY</p>
                <p className="mt-4 fw-light">
                Our curriculum is intentionally difficult to force you to ask questions and develop
                problem-solving skills. With the exception of System Nexus, all challenges are questions
                and exercises taken from real interviews.
                </p>
              </div>
              <div className="col-md-4">
                <Image
                  src="/assets/landing/choose-03.svg"
                  height="170"
                  width="93"
                  alt="Work Experience"
                  layout="fixed"
                />
                <p className="mt-3 fw-bold h3">REALITY TESTING</p>
                <p className="mt-4 fw-light">
                Take each challenge seriously and do them over and over again until you can solve
                them. These lessons will not only prepare you for interviews but will also help teach you
                the skills needed to become an effective engineer.
                </p>
              </div>
            </div>

        </div>

      </div>

      {/* ready to hack your path */}
      <div 
        className="container text-center"
        style={{
          marginTop: window.innerWidth < 768 ? "40px" : "75px",
          marginBottom: window.innerWidth < 768 ? "40px" : "90px",
        }}
      >
        
        <div className="row justify-center">
          <div className="col-md-10 offset-md-1">
            <h1 className="display-3 fw-bold text-center">
            READY TO HACK YOUR PATH?
            </h1>
          </div>
        </div>
          
        <div className="row justify-center mt-4">
          <div className="col-md-10 offset-md-1">
            <p className={`${styles.p__large} fw-light`}>
            Join thousands of programmers who are forging their digital destiny the hard way and
            discovering optimal solutions that others miss. Our curriculum takes no shortcuts and
            effectively trains students with no technical background to become great software
            engineers.
            </p>
          </div>
        </div>

        <div 
          className="row justify-center"
          style={{
            marginTop: window.innerWidth < 768 ? "40px" : "75px",
          }}
        >
          <div className="col-md-10 offset-md-1">
            <h1
              style={{
                fontSize: window.innerWidth < 768 ? "32px" : "32px",
                fontWeight:"lighter",
                color:"rgb(84,64,216)"
              }}
            >
              BEGIN YOUR JOURNEY
            </h1>
          </div>
        </div>

        <div className="row justify-center mt-4">
          <div className="col-md-10 offset-md-1">
            <p className={`${styles.p__large} fw-light`}>
            Whether you're a curious novice or an experienced developer looking to transcend your
            current limitations, PathHacks offers you a personalized path to digital mastery through
            intentionally challenging curriculum and supportive community.
            </p>
          </div>
        </div>

      </div>

      {/* our revolutionary approach */}
      <div 
        className="container-fluid text-center"
        style={{
          marginTop: window.innerWidth < 768 ? "40px" : "75px",
          paddingTop: window.innerWidth < 768 ? "40px" : "100px",
          paddingBottom: window.innerWidth < 768 ? "40px" : "100px",
          backgroundColor: "#5440d8",
          color:"white"
        }}
      >
          <div className="container text-center">
          
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <h1 className="display-3 fw-bold" id="learning">
                OUR REVOLUTIONARY APPROACH
                </h1>
              </div>
            </div>

            <div className="row mt-5 align-items-start pt-5 mb-5">
              <div className="col-md-6 pb-5">
                <Image
                  src="/assets/landing/challenge.svg"
                  height="170"
                  layout="fixed"
                  alt="Modern curriculum"
                  width="200"
                />
                <p className="mt-3 fw-bold h3">QUANTUM MASTERY</p>

                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                > 
                  <p className="mt-4 fw-light">
                  No shortcuts to mastery. Our curriculum is intentionally difficult and designed to build
                  true understanding through challenging exercises and real-world problems.
                  </p>
                </div>
              </div>

              <div className="col-md-6 pb-5">
                <Image
                  src="/assets/landing/connection.svg"
                  height="170"
                  layout="fixed"
                  alt="Support"
                  width="245"
                />
                <p className="mt-3 fw-bold h3">NEURAL CONNECTIONS</p>

                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                > 
                  <p className="mt-4 fw-light">
                  Community support through an interconnected network of learners and mentors who
                  provide guidance, code reviews, and collaborative learning opportunities.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <Image
                  src="/assets/landing/coding.svg"
                  height="170"
                  width="200"
                  alt="Work Experience"
                  layout="fixed"
                />
                <p className="mt-3 fw-bold h3">REALITY STANDARDS</p>
                
                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                > 
                  <p className="mt-4 fw-light">
                  Adherence to industry best practices and professional coding standards through
                  rigorous code review and feedback from experienced engineers.
                  </p>
                </div>
              </div>
              
              <div className="col-md-6">
                <Image
                  src="/assets/landing/progress.svg"
                  height="170"
                  width="240"
                  alt="Work Experience"
                  layout="fixed"
                />
                <p className="mt-3 fw-bold h3">DIMENSIONAL PROGRESSION</p>
              
                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                >   
                  <p className="mt-4 fw-light">
                  Advancement through increasingly complex conceptual dimensions, from basic
                  programming concepts to advanced frameworks and algorithms.
                  </p>
                </div>
              </div>
            </div>

        </div>

      </div>
      
      {/* begin your code odyssey */}
      <div 
        className="container-fluid text-center"
        style={{
          paddingTop: window.innerWidth < 768 ? "40px" : "80px",
          paddingBottom: window.innerWidth < 768 ? "0px" : "45px",
        }}
      >
          <div className="container text-center">
          
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <h1 className="display-3 fw-bold" id="learning">
                BEGIN YOUR CODE ODYSSEY
                </h1>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-10 offset-md-1">
                <p className={`${styles.p__large} fw-light`}>
                Ready to transcend the conventional boundaries of programming education? Join
                PathHacks today and start forging your digital destiny the hard way.
                </p>
              </div>
            </div>

            <div className="row mt-5 align-items-start pt-5 mb-5">
              <div className="col-md-6 pb-5">
                <Image
                  src="/assets/landing/start.svg"
                  height="170"
                  layout="fixed"
                  alt="Modern curriculum"
                  width="240"
                />
                <p 
                  className="mt-3 pt-5 fw-bold h3"
                  // style={{
                  //   color:"rgb(84,64,216)"
                  // }}
                >
                  SETUP DEVELOPMENT ENVIRONMENT
                </p>

                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                > 
                  <p className="mt-4 fw-light">
                    Start by setting up your development environment and then follow the dimensions in
                    the course.
                  </p>
                </div>
              </div>

              <div className="col-md-6 pb-5">
                <Image
                  src="/assets/landing/network.svg"
                  height="170"
                  layout="fixed"
                  alt="Support"
                  width="250"
                />
                <p 
                  className="mt-3 pt-5 fw-bold h3"
                  // style={{
                  //   color:"rgb(84,64,216)"
                  // }}
                >
                  JOIN THE NEURAL NETWORK
                </p>

                <div 
                  style={{ 
                    maxWidth: "75%",
                    margin: "0 auto"
                  }}
                > 
                  <p className="mt-4 fw-light">
                  Connect with fellow Path Hackers on Discord to ask questions, share insights, and
                  collaborate on challenges that accelerate your development.
                  </p>
                </div>
              </div>
            </div>

        </div>

      </div>

      {/* Forge Your Digital Destiny */}
      <div 
        className="container-fluid text-center"
        style={{
          marginTop: window.innerWidth < 768 ? "30px" : "30px",
          padding: "50px 0 45px 0",
        }}
      >
        <div className="container text-center">
        
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h1 className="display-3 fw-bold" id="learning">
                FORGE YOUR DIGITAL DESTINY
              </h1>
            </div>
          </div>

          <div className="row justify-center mt-5 pb-5">
            <div className="col-md-12 offset-md-0">
              <h1
                style={{
                  fontSize: window.innerWidth < 768 ? "28px" : "36px",
                  fontWeight:"lighter",
                  color:"rgb(84,64,216)"
                }}
              >
                PathHacks.com — Transcend Code. Master Digital Reality. The Hard Way.
              </h1>
            </div>
          </div>

        </div>

      </div>

      {/* <div className="container text-center">
        <h1 className="display-4 fw-bold">Start Your Journey</h1>
        <p className={`${styles.p__large} mt-3 fw-light`}>
          Become a full stack software engineer - 100% Free!
        </p>
        <NavLink path="/curriculum" className="btn btn-primary py-3 px-5 mt-4">
          Get Started
        </NavLink>
      </div> */}
    
    </div>
  )
}

export default LandingPage
