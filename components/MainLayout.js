import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

export default function MainLayout({ children, title = "" }) {
  const router = useRouter();

  const [lang, setLang] = useState(router.locale);

  useEffect(() => {
    setLang(router.locale)
  }, [router.locale])


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Redfox agency website" />
        <meta name="keywords" content="redfox, design, web-development, naming" />
        <title>RedFox agency {title}</title>
        <link rel="icon" type="image/png" href="/Group.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a href={`/${router.locale}`} className="navbar-brand">
            <img src="/logo11111.svg" alt="logo." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupporftedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/blog/1?name=News">
                  <a
                    className={
                      router.pathname.startsWith("/blog/") == true
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio/all">
                  <a
                    className={
                      router.pathname.startsWith("/portfolio/") == true
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/agency/short">
                  <a
                    className={
                      router.pathname.startsWith("/agency/") == true
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Agency
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/academy/academylife">
                  <a
                    className={
                      router.pathname.startsWith("/academy/") == true
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Academy
                  </a>
                </Link>
              </li>
              {lang == "uz" ? (<Link href={router.asPath} locale={'ru'} passHref >
                <li className="nav-item" style={{ cursor: "pointer" }} >
                  <p className="nav-link">Ru</p>
                </li>
              </Link>) : ""}
              {lang == "ru" ? ((<Link href={router.asPath} locale={'uz'} passHref>
                <li className="nav-item" style={{ cursor: "pointer" }} >
                  <p className="nav-link">Uz</p>
                </li>
              </Link>)) : ""}
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
