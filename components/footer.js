import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex flex-col items-center border-t">
          <div className="pt-10 pb-5">
            <div className="flex flex-row space-x-4">
              <a href="#">
                <FaLinkedin className="text-gray-500 dark:text-gray-400 text-2xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-gray-500 dark:text-gray-400 text-2xl" />
              </a>
              <a href="#">
                <FaGithub className="text-gray-500 dark:text-gray-400 text-2xl" />
              </a>
              <a href="#">
                <FaEnvelope className="text-gray-500 dark:text-gray-400 text-2xl" />
              </a>
            </div>
          </div>
          <div className="pt-5 pb-10">
            <p className="text-gray-500 dark:text-gray-400">
              &copy; 2023 Krisna Madani, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
