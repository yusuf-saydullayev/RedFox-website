import Index from "./index.js";
import Link from "next/link";

export default function Categories({ data }) {
  const firsFilter = data.filter((item) => {
    return item.category_id == 1;
  });
  const secondFilter = data.filter((item) => {
    return item.category_id == 2;
  });
  const threeFilter = data.filter((item) => {
    return item.category_id == 3;
  });
  const fourFilter = data.filter((item) => {
    return item.category_id == 4;
  });

  return (
    <>
      <Index>
        <div className="categories">
          <div className="prime">
            <h3>
              Branding <span>({firsFilter.length})</span>
            </h3>
            <div className="row hide">
              {firsFilter.map((brand) => {
                return (
                  <Link href={`/portfolio/${brand.id}`}>
                    <div
                      className="col-lg-4 col-md-4 col-sm-6 col-12"
                      key={brand.id}
                    >
                      <img
                        rel="preload"
                        as="image"
                        src={`http://redfox.frilansus.com/frontend/images/${brand.img.slice(
                          8
                        )}`}
                        alt="work."
                        decoding="auto"
                      />
                      <p>{brand.title_uz}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Naming <span>({secondFilter.length})</span>
            </h3>
            <div className="row hide">
              {secondFilter.map((brand) => {
                return (
                  <Link href={`/portfolio/${brand.id}`}>
                    <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                      <img
                        rel="preload"
                        as="image"
                        src={`http://redfox.frilansus.com/frontend/images/${brand.img.slice(
                          8
                        )}`}
                        alt="work."
                        decoding="auto"
                      />
                      <p>{brand.title_uz}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Web & Mobile <span>({threeFilter.length})</span>
            </h3>
            <div className="row hide">
              {threeFilter.map((brand) => {
                return (
                  <Link href={`/portfolio/${brand.id}`}>
                    <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                      <img
                        rel="preload"
                        as="image"
                        src={`http://redfox.frilansus.com/frontend/images/${brand.img.slice(
                          8
                        )}`}
                        alt="work."
                        decoding="auto"
                      />
                      <p>{brand.title_uz}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="prime">
            <h3>
              Packaging <span>({fourFilter.length})</span>
            </h3>
            <div className="row hide">
              {fourFilter.map((brand) => {
                return (
                  <Link href={`/portfolio/${brand.id}`}>
                    <div className="col-lg-4 col-md-4 col-sm-6" key={brand.id}>
                      <img
                        rel="preload"
                        as="image"
                        src={`http://redfox.frilansus.com/frontend/images/${brand.img.slice(
                          8
                        )}`}
                        alt="work."
                        decoding="auto"
                      />
                      <p>{brand.title_uz}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <button className="btn_portfolio">Shu yerga bosing</button>
      </Index>
    </>
  );
}
// getServerSideProps
// getStaticProps
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://redfox.frilansus.com/api/apiportfolio`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
