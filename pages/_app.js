import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/mian.css";
import "../styles/footer.css";
import "../styles/blog.css";
import "../styles/portfolio.css";
import "../styles/view.css";
import "../styles/agency.css";
import "../styles/academy.css";
import "../styles/servic.css";
import "animate.css/source/animate.css";
import '@popperjs/core';
import NPprogress from "nprogress";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? import('bootstrap/dist/js/bootstrap.bundle.min.js') : null
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])
  NPprogress.configure({ showSpinner: false });

  return (
    <>
      <NextNprogress
        color="#ff7300"
        startPosition={0.5}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
