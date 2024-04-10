import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { discover, jcb, mastercard, paypal, visa } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="wrapper pt-16 pb-4 ">
        <div className="flex flex-wrap justify-between gap-6 pb-24">
          <div>
            <p className="font-bold">Support</p>
            <ul className="flex flex-col gap-2 text-sm mt-4">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancelation options</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <ul className="flex flex-col gap-2  text-sm mt-4">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Community blog</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="flex flex-col gap-2  text-sm mt-2">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Socials</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="text-gray-950 flex items-center justify-center bg-snow w-8 h-8 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-950 flex items-center justify-center bg-snow w-8 h-8 rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-950 flex items-center justify-center bg-snow w-8 h-8 rounded-full"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="text-gray-950 flex items-center justify-center bg-snow w-8 h-8 rounded-full"
              >
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4 border-t border-t-white py-8">
          <p className="text-xs font-thin">&#169; Copyright Tatiana 2024</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-10">
              <img
                src={visa}
                className="w-12 h-10 object-cover"
              />
            </div>
            <div className="w-12 h-10">
              <img
                src={mastercard}
                className="w-12 h-10 object-cover"
              />
            </div>
            <div className="w-12 h-10">
              <img
                src={discover}
                className="w-12 h-10 object-cover"
              />
            </div>
            <div className="w-12 h-10">
              <img
                src={paypal}
                className="w-12 h-10 object-cover"
              />
            </div>
            <div className="w-12 h-10">
              <img
                src={jcb}
                className="w-12 h-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
