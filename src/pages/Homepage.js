import React, { useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import user1 from "../assets/images/user1.jpg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user && user.role) {
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }
  // }, []);
  return (
    <body>
      {/* <!-- Topbar Start --> */}
      <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center text-white">
              <small>
                <i class="fa fa-phone-alt mr-2"></i>+250783836604
              </small>
              <small class="px-3">|</small>
              <small>
                <i class="fa fa-envelope mr-2"></i>skillstream@gmail.com
              </small>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-white px-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-white pl-2" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/" class="navbar-brand ml-lg-3">
            <h1 class="m-0 text-uppercase text-primary">
              <i class="fa fa-book-reader mr-3"></i>SkillStream
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav mx-auto py-0">
              <a href="/" class="nav-item nav-link active">
                Home
              </a>
              <a href="about" class="nav-item nav-link">
                About
              </a>
              <a href="courses" class="nav-item nav-link">
                Courses
              </a>
            </div>
            {localStorage.getItem("useremail") ? (
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="primary">
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="30"
                  ></img>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                class="btn btn-primary py-2 px-4 d-none d-lg-block"
                onClick={() => (window.location.href = "/login")}
              >
                Join Us
              </Link>
            )}
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}

      {/* <!-- Header Start --> */}
      <div
        class="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{
          marginBottom: "90px",
        }}
      >
        <div class="container text-center my-5 py-5">
          <h1 class="text-white mt-4 mb-4">Learn From Home</h1>
          <h1 class="text-white display-1 mb-5">Education Courses</h1>
          <div
            class="mx-auto mb-5"
            style={{
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Courses 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Courses 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Courses 3
                  </a>
                </div>
              </div>
              <input
                type="text"
                class="form-control border-light"
                style={{
                  padding: "30px 25px",
                }}
                placeholder="Keyword"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary px-4 px-lg-5">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- About Start --> */}
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row">
            <div
              class="col-lg-5 mb-5 mb-lg-0"
              style={{
                minHeight: "500px",
              }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100"
                  src="img/about.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 class="display-4">
                  First Choice For Online Education Anywhere
                </h1>
              </div>
              <p>
              Welcome to SkillStream! <br/>
              We are passionate about providing high-quality education to everyone, regardless of their location or background.<br/>
              Our platform offers a wide range of courses taught by experienced instructors, and we are committed to helping our <br/>
              students achieve their goals. Whether you’re looking to learn a new skill, advance your career, or simply explore new<br/>
              subjects, we have something for you. Join us today and start your learning journey!
              </p>
              <div class="row pt-3 mx-0">
                <div class="col-3 px-0">
                  <div class="bg-success text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Available<span class="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-primary text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Online<span class="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-secondary text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Skilled<span class="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-warning text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Happy<span class="d-block">Students</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Feature Start --> */}
      <div
        class="container-fluid bg-image"
        style={{
          marginTop: "90px",
          marginBottom: "90px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7 my-5 pt-5 pb-lg-5">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Why Choose Us?
                </h6>
                <h1 class="display-4">
                  Why You Should Start Learning with Us?
                </h1>
              </div>
              <p class="mb-4 pb-2">
              At SkillStream, we are passionate about providing high-quality education to everyone,<br/>
              regardless of their location or background. Our platform offers a wide range of courses<br/> 
              taught by experienced instructors, and we are committed to helping our students achieve<br/>
              their goals. Whether you’re looking to learn a new skill, advance your career, or simply <br/>
              explore new subjects, we have something for you. Join us today and start your learning journey!
              </p>
              <div class="d-flex mb-3">
                <div class="btn-icon bg-primary mr-4">
                  <i class="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>
                  On SkillStream, we are committed to providing high-quality education to everyone,
                  regardless of their location or background. Our courses are taught by experienced instructors
                   who are passionate about sharing their knowledge and expertise with others.
                  </p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <div class="btn-icon bg-secondary mr-4">
                  <i class="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>International Certificate</h4>
                  <p>
                  SkillStream offers a range of certificate programs that are designed to help you achieve your career goals. Our certificate programs are taught by experienced instructors who are passionate about sharing their knowledge and expertise with others.
                  </p>
                </div>
              </div>
              <div class="d-flex">
                <div class="btn-icon bg-warning mr-4">
                  <i class="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>Online Classes</h4>
                  <p class="m-0">
                  A variety of certificate programs from SkillStream are available to assist you in reaching your professional objectives. Our certificate programs are delivered by knowledgeable educators who have a strong desire to impart their skills and knowledge to others.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-5"
              style={{
                minHeight: "500px",
              }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Start --> */}

      {/* <!-- Contact Start --> */}
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <div
                class="bg-light d-flex flex-column justify-content-center px-5"
                style={{
                  height: "450px",
                }}
              >
                <div class="d-flex align-items-center mb-5">
                  <div class="btn-icon bg-primary mr-4">
                    <i class="fa fa-2x fa-map-marker-alt text-white"></i>
                  </div>
                  <div class="mt-n1">
                    <h4>Our Location</h4>
                    <p class="m-0">Kimihurura, Kigali, Rwanda</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-5">
                  <div class="btn-icon bg-secondary mr-4">
                    <i class="fa fa-2x fa-phone-alt text-white"></i>
                  </div>
                  <div class="mt-n1">
                    <h4>Call Us</h4>
                    <p class="m-0">+250783836604</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="btn-icon bg-warning mr-4">
                    <i class="fa fa-2x fa-envelope text-white"></i>
                  </div>
                  <div class="mt-n1">
                    <h4>Email Us</h4>
                    <p class="m-0">skillstream@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Need Help?
                </h6>
                <h1 class="display-4">Send Us A Message</h1>
              </div>
              <div class="contact-form">
                <form>
                  <div class="row">
                    <div class="col-6 form-group">
                      <input
                        type="text"
                        class="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div class="col-6 form-group">
                      <input
                        type="email"
                        class="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control border-top-0 border-right-0 border-left-0 p-0"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button class="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      {/* <!-- Footer Start --> */}
      <div
        class="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{
          marginTop: "90px",
        }}
      >
        <div class="container mt-5 pt-5">
          <div class="row">
            <div class="col-md-6 mb-5">
              <a href="/" class="navbar-brand">
                <h1 class="mt-n2 text-uppercase text-white">
                  <i class="fa fa-book-reader mr-3"></i>SkillStream
                </h1>
              </a>
              <p class="m-0">
              On SkillStream, we are committed to providing high-quality education to everyone, regardless of their location or background. Our courses are taught by experienced instructors who are passionate about sharing their knowledge and expertise with others. Our instructors are highly skilled and knowledgeable in their respective fields, and they are dedicated to helping our students achieve their goals. 
              </p>
            </div>
            <div class="col-md-6 mb-5">
              <h3 class="text-white mb-4">Newsletter</h3>
              <div class="w-100">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-light"
                    style={{
                      padding: "30px",
                    }}
                    placeholder="Your Email Address"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Get In Touch</h3>
              <p>
                <i class="fa fa-map-marker-alt mr-2"></i>Kimihurura, Kigali,
                Rwanda
              </p>
              <p>
                <i class="fa fa-phone-alt mr-2"></i>+250783836604
              </p>
              <p>
                <i class="fa fa-envelope mr-2"></i>skillstream@gmail.com
              </p>
              <div class="d-flex justify-content-start mt-4">
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-twitter"></i>
                </a>
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-facebook-f"></i>
                </a>
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a class="text-white" href="#">
                  <i class="fab fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Our Courses</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Web Design
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Apps Design
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Marketing
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Research
                </a>
                <a class="text-white-50" href="#">
                  <i class="fa fa-angle-right mr-2"></i>SEO
                </a>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Quick Links</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Privacy Policy
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Terms & Condition
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Regular FAQs
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Help & Support
                </a>
                <a class="text-white-50" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid bg-dark text-white-50 border-top py-4"
        style={{
          borderColor: "rgba(256, 256, 256, .1) !important",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p class="m-0">
                Copyright &copy;{" "}
                <a class="text-white" href="#">
                  SkillStream
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
              <p class="m-0"></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a
        href="#"
        class="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      >
        <i class="fa fa-angle-double-up"></i>
      </a>
    </body>
  );
};
