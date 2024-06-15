import { useState } from "react";
import Image from "next/image";

import BumppyLogo from "../public/images1/Bumppy_logo.png";
import media from "../public/images1/video-play.png";
import travel from "../public/images1/travel.png";
import food from "../public/images1/fOOD.png";
import payments from "../public/images1/Payment.png";
import ecom from "../public/images1/E- commerce.png";
import edtech from "../public/images1/Ed-Tech.png";
import search from "../public/images1/Search (1).svg";
const Login = () => {

  const [mobile, setmobile] = useState(""); // State for mobile input
  const [password, setPassword] = useState(""); // State for password input

  const handleSignIn = () => {
    // Implement your sign-in logic here using 'mobile' and 'password' states
    // For example, you can make an API call to authenticate the user
    console.log("Signing in with:", mobile, password);
  };

  return (
    
    <>
      <div className="parent-login  p-2 p-lg-4">
        <div className=" row justify-content-center">
          {" "}
          <Image src={BumppyLogo} alt="Bumppy Logo" width={130} height={20} />
        </div>
        {/* All products list Desktop */}
        <div className=" p-4 row d-none d-lg-flex ">
          <div
            className=" py-2  d-flex justify-content-center "
            style={{ width: "100%" }}
          >
            <div className="py-2 py-lg-0   align-center custom-column hover-effect2">
              <Image
                src={media}
                alt="Bumppy Logo"
                width={20}
                height={20}
                className=""
              />
              <span className=" ml-2 gap mobileFontSize1 ">Media</span>
            </div>
            <div className="py-1 py-lg-0   align-center custom-column hover-effect2">
              <Image
                className=""
                src={travel}
                alt="Bumppy Logo"
                width={20} // adjust width according to your design
                height={20} // adjust height according to your design
              />
              <span
                className=" ml-2 gap mobileFontSize1"
                onClick={() => handleLinkClick("https://flights.bumppy.com/")}
              >
                Travel
              </span>
            </div>
            <div className="py-1 py-lg-0    align-center custom-column hover-effect2">
              <Image
                className=""
                src={food}
                alt="Bumppy Logo"
                width={20}
                height={20}
              />{" "}
              <span
                className=" ml-2 gap mobileFontSize1"
                onClick={() => handleLinkClick("https://chaafo.com/")}
              >
                Food
              </span>
            </div>

            <div
              className="   align-center custom-column hover-effect2"
              style={{ marginRight: "1.5rem" }}
            >
              <Image
                className=""
                src={payments}
                alt="Bumppy Logo"
                width={20}
                height={20}
              />{" "}
              <span
                className=" ml-2 gap mobileFontSize1"
                onClick={() => handleLinkClick("https://payments.bumppy.com/")}
              >
                Payment
              </span>
            </div>
            <div className="  align-center custom-column hover-effect2">
              <Image
                className=""
                src={ecom}
                alt="Bumppy Logo"
                width={20}
                height={20}
              />
              <span
                className=" ml-2 gap mobileFontSize1"
                onClick={() => handleLinkClick("https://Shoppek.bumppy.com/")}
              >
                E-Com
              </span>{" "}
            </div>

            <div className="py-1 py-lg-0   align-center custom-column hover-effect2">
              <Image
                className=""
                src={edtech}
                alt="Bumppy Logo"
                width={20} // adjust width according to your design
                height={20} // adjust height according to your design
              />
              <span
                className="ml-2 gap mobileFontSize1"
                style={{ whiteSpace: "nowrap" }}
                onClick={() => handleLinkClick("https://examsnotice.com/")}
              >
                ED-Tech
              </span>
            </div>
          </div>
        </div>
         {/* All products list Mobile */}
        <div className="py-4 d-lg-none ">
        <div
          className="d-flex justify-content-between "
          
        >
          <div className=" font-size d-flex  align-items-center">
            <Image
              src={media}
              alt="Bumppy Logo"
              width={13}
              height={13}
              className=""
            />
            <span className="  p-1 " style={{ fontSize: "9px" }}>
              Media
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image src={travel} alt="Bumppy Logo" width={13} height={13} />
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://flights.bumppy.com/")}
            >
              Travel
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image src={food} alt="Bumppy Logo" width={13} height={13} />{" "}
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://chaafo.com/")}
            >
              Food
            </span>
          </div>

          <div className="font-size d-flex  align-items-center">
            <Image src={payments} alt="Bumppy Logo" width={13} height={13} />{" "}
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://payments.bumppy.com/")}
            >
              Payment
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              src={ecom}
              alt="Bumppy Logo"
              width={13}
              height={13}
              className=""
            />
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://examsnotice.com/")}
            >
              E-Com
            </span>{" "}
          </div>

          <div className="font-size d-flex  align-items-center">
            <Image
              src={edtech}
              alt="Bumppy Logo"
              width={13} // adjust width according to your design
              height={13} // adjust height according to your design
            />
            <span
              className="  p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://Shoppek.bumppy.com/")}
            >
              ED-Tech
            </span>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className=" d-flex justify-content-center">
        <div className="card-login bg-white p-lg-4  p-2">
          <div className="text-bold1 text-center">Sign in to continue</div>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="mobile"
                id="mobile"
                className="form-control"
                placeholder="Username"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="  login-button1 mt-3 btn-success"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              type="button"
              className="  login-button2 mt-3 "
              onClick={handleSignIn}
            >
              Sign Up
            </button>
         
          </form>
         
        </div>
   
      </div>
      <p className="copy mt-5">© 2023 Bumppy. All rights reserved. Bumppy, Payments, Chaafo, Travel, Media are registered trademarks of Bumppy Inc.</p>
<p  className="copy">Terms and conditions, features, support, pricing, and service options subject to change without notice.</p>
      
      </div>
    </>
  );
};

export default Login;
