import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link href="/">Home</Link>

      </li>
       <li>
        <Link href="/about">About Us</Link>
        
      </li>
      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        
      </li>

      <li >
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Project
        </Link>

      </li>
 <li>
        <Link href="/Productgallery" onClick={() => setMobileToggle(false)}>Products</Link>
        
      </li>
     

      
    </ul>
  );
}
