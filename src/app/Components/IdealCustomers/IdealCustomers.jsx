import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/team1.json";
import Link from "next/link";
import Image from "next/image";

const IdealCustomers = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
              SubTitle="Our Customers"
              Title="Ideal Customers"
            ></SectionTitle>
          </div>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.slice(0, 4).map((item, i) => (
            <div key={i} className="col-xl-3 col-sm-6 wow fadeInDown">
              <div className="cs_team cs_style_1 position-relative">
                <div className="cs_team_thumbnail cs_mb_10">
                  <Image src={item.img} alt="img" width={242} height={336} />
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_fs_24 cs_semibold mb-0">{item.title}</h3>
                  <p className="cs_accent_color mb-0">{item.desc}</p>
                </div>
                <div className="cs_team_shape position-absolute">
                  <Image
                    src="/assets/img/shapes/DoorBG.png"
                    alt="img"
                    width={302}
                    height={476}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default IdealCustomers;
