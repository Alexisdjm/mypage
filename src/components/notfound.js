import React, {useEffect, useRef} from "react";
import Fingerprint from "../images/svgs/fingerprint";
import SEO from "./SEO.js";
import { SEO_PAGES } from "../config/seo";

const Error404 = () => {
    const vantaRef = useRef(null);

  useEffect(() => {
    const VANTA = window.VANTA;
    const effect = VANTA.WAVES({
      el: vantaRef.current,
      color: 0x0e0b16,
      shininess: 30,
      waveHeight: 20,
      waveSpeed: 0.5,
      zoom: 0.75,
    });

    return () => effect.destroy(); 
  }, []);

  return (
    <>
    <SEO {...SEO_PAGES.notFound} />
    <div ref={vantaRef} className="not-found--bg">
        <div className="container-404"> 
            <h2 className="title-404--not-found">404</h2>
            <h4 className="text-404--not-found">It seems you got a little bit lost :(</h4>
            <a className="back-to--home" href="/">
                <Fingerprint color="#fff" stroke="1" width='50px' height="50px"/>
                Go back to homepage
            </a>
        </div>
        <span className="footer--404"></span>
    </div>
    </>
  );
};

export default Error404
