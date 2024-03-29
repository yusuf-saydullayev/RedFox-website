import axios from "axios";
import Portfolio from "./index.js";
import Link from "next/link";
import Image from 'next/image';

const All = ({ data }) => {
  return (
    <Portfolio>
      <div className="all">
        <div className="row">
          {data.map((all) => {
            return (
              <Link href={`/portfolio/${all.id}`} key={all.id} passHref>
                <div className="col-lg-4 col-md-4 col-sm-6" >
                  <Image
                    src={`https://redfox.frilansus.com/${all.logo}`}
                    width={546}
                    height={431}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${all.logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                  />
                  <p className="portfoliop" >{all.title_uz}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <button className="btn_portfolio">Shu yerga bosing</button> */}
    </Portfolio>

  );
};

export async function getStaticProps() {
  const folio = await axios(`https://redfox.frilansus.com/api/portfolio`);
  const data = folio.data;
  return { props: { data } };
}
export default All;
