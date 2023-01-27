import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Full-Stuck Developer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">Data is an essential thing, but processing and presentation is another thing</p>
                    <a className="green" href="mailto:claudekwizera003@gmail.com">Let&#39;s talk!</a>
                </div>
                <Image src="/images/Eager.JPG" width={463} height={513} alt="Claude"  /> 
            </div>
        </header>
    )
}