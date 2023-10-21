import {AiOutlineCopyright} from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright <AiOutlineCopyright className="inline" /> Ecommerce Shop 2022, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
