import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 flex items-center">
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap mx-10">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              Online
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              Learning
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
              Platform
            </span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-blue-600 transition-colors" />
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Online Learning Platform. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
