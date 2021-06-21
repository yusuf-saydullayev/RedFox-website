import Link from "next/link";
import React  from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";


export default function Portfoio({ children }) {
  const router = useRouter();
  
  
  

  return (
    <MainLayout title={"| Portfolio"}>
      <div className="portfolio">
        <div className="container">
        {constt}
            <h2>Portfolio</h2>
            <p>
              Jami Topshirilgan ishlar soni: <span>1078+</span>
            </p>
            <ul>
              <li>
                <Link href="/portfolio/all">
                  <a
                    className={
                      router.pathname == "/portfolio/all" ? "clik" : ""
                    }
                  >
                    Barchasi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/categories">
                  <a
                    className={
                      router.pathname == "/portfolio/categories" ? "clik" : ""
                    }
                  >
                    Kategoriyalar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/clients">
                  <a
                    className={
                      router.pathname == "/portfolio/clients" ? "clik" : ""
                    }
                  >
                    Mijozlar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/industry">
                  <a
                    className={
                      router.pathname == "/portfolio/industry" ? "clik" : ""
                    }
                  >
                    Industriya
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/tags">
                  <a
                    className={
                      router.pathname == "/portfolio/tags" ? "clik" : ""
                    }
                  >
                    Tags
                  </a>
                </Link>
              </li>
            </ul>
                    <hr className="hr1"/>
            {children}
          <button className="btn_portfolio">Shu yerga bosing</button>
        </div>
      </div>
    </MainLayout>
  );
}
