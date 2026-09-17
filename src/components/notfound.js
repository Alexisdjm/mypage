import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fingerprint from "../images/svgs/fingerprint";
import SEO from "./SEO.js";
import { SEO_PAGES } from "../config/seo";

const Error404 = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (navigator.userAgent === "ReactSnap") {
      return undefined;
    }

    let effect;
    let cancelled = false;

    const loadBackground = async () => {
      try {
        const THREE = await import("three");
        window.THREE = THREE;
        await import("vanta/dist/vanta.waves.min");

        if (cancelled || !vantaRef.current || !window.VANTA?.WAVES) {
          return;
        }

        effect = window.VANTA.WAVES({
          el: vantaRef.current,
          THREE,
          color: 0x0e0b16,
          shininess: 30,
          waveHeight: 20,
          waveSpeed: 0.5,
          zoom: 0.75,
        });
      } catch (error) {
        console.error("Failed to load 404 background:", error);
      }
    };

    loadBackground();

    return () => {
      cancelled = true;
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <>
      <SEO {...SEO_PAGES.notFound} />
      <div ref={vantaRef} className="not-found--bg">
        <div className="container-404">
          <h2 className="title-404--not-found">404</h2>
          <p className="text-404--not-found">It seems you got a little bit lost :(</p>
          <Link className="back-to--home" to="/">
            <Fingerprint color="#fff" stroke="1" width="50px" height="50px" />
            Go back to homepage
          </Link>
        </div>
        <span className="footer--404"></span>
      </div>
    </>
  );
};

export default Error404;
