import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg"
      data-src="assets/img/footer_bg.jpg"
    >
      <div className="cs_main_footer cs_white_color">
        <div className="container">
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  About
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <div className="cs_text_widget">
                  <p>
                    At Charoteco Doors, we specialize in crafting high-quality,
                    eco-friendly doors that blend durability, style, and
                    sustainability. Our doors are designed to enhance homes and
                    commercial spaces while promoting a greener future.
                  </p>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Explore
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  <li>
                    <Link href="/service/service-details">High Durability</Link>
                  </li>
                  <li>
                    <Link href="/service/service-details"> Eco-Friendly</Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Waterproof & Fire Retardant
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">Soundproof</Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Termite & Rot Resistant{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Contact Us
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    Lebu, Foziyana bldg, 4th floor Addis Ababa, Ethiopia
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:+251-90-868-6868">+251-90-868-6868</a> <br />
                    <a href="tel:+251-90-867-6767">+251-90-867-6767</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:info.charot@gmail.com">
                      info.charot@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Working Hours:
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  <li>
                    <span>Mon - Fri</span>
                    <span>2:30 AM - 12:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>2:30 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Close</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">
              Copyright © {new Date().getFullYear()}{" "}
              <a href="#">charotecodoors</a>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
