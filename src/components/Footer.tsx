import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © Made in 2024 by me 🚀
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/andreshugueth"
              className="hover:underline me-4 md:me-6"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andreshugueth/"
              className="hover:underline me-4 md:me-6"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@andreshugueth"
              className="hover:underline me-4 md:me-6"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
