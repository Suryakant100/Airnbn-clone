import React from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 px-32 py-14 gap-y-10 bg-gray-100">
      <div className="space-y-3 text-xs text-gray-700">
        <h5 className="font-bold">About</h5>
        <p>How airbub works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbub plus</p>
        <p>Airbub luxe</p>
        <p>Airbub 2021</p>
        <p>Hotel Tonight</p>
        <p>Airbnb foe Work</p>
        <p>Made possible by Hosts</p>
        <p>Careers</p>
        <p>Founder's Letter</p>
      </div>

      <div className="space-y-3 text-xs text-gray-700">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
        <p>Airbnb.org</p>
      </div>

      <div className="space-y-3 text-xs text-gray-700">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Centre</p>
        <p>Community Centre</p>
      </div>

      <div className="space-y-3 text-xs text-gray-700">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support</p>
        <p>Trust & Safety</p>
      </div>
      <hr className="flex md:flex-1" />
      <div className="hidden lg:block items-center">
        <div className="flex justify-around items-center">
          <div className="flex justify-between">
            <GlobeAltIcon className="h-8" />
            <p>English (IN)</p>
          </div>

          <p>₹ INR</p>
          <div className="flex items-center cursor-pointer space-x-3">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <p className="text-center ">© 2021 Airbnb, Inc.</p>
        <h3 className="text-center">Privacy·Terms·Sitemap·Company details</h3>
      </div>
    </div>
  );
};

export default Footer;
