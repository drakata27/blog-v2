import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">About</h3>
            <p className="text-gray-400">
              I am a passionate Computer Science student interested in web
              development and the cloud
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/drakata27"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/aleksandar-drakaliyski/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aleksdraka.online/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="blank"
                >
                  Website
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Aleksandar Drakaliyski. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
