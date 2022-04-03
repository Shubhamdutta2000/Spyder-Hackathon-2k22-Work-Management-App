import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="bg-cover fixed z-40 w-full h-full flex items-center justify-center">
        <img src="/img/loading.svg" alt="Loading..." className="block h-24 w-24"/>
      </div> 
    </div>
  );
}
