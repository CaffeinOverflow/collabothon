import React from "react";

function Footer() {
  return (
    <div className="text-center text-slate-500 py-5 opacity-70">
      Copyright {(new Date()).getFullYear()} CaffeinOverflow. All rights reserved.
    </div>
  );
}

export default Footer;
