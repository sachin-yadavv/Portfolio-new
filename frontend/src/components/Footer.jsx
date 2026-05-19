import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* <a href="https://prebuiltui.com?utm_source=eliana">
          <img
            src="/assets/logo.png"
            alt=""
            className="w-36 mx-auto mb-2 dark:hidden"
          />
          <img
            src="/assets/logo_dark.png"
            alt=""
            className="w-36 mx-auto mb-2 hidden dark:block"
          />
        </a> */}

        {/* <div className="w-max flex items-center gap-2 mx-auto">
          <img
            src="./assets/mail_icon.png"
            alt=""
            className="w-5 dark:hidden"
          />
          <img
            src="./assets/mail_icon_dark.png"
            alt=""
            className="w-5 hidden dark:block"
          />

          <a href="mailto:ysachin120504@gmail.com">ysachin120504@gmail.com</a>
        </div> */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mx-auto px-5 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <FaEnvelope className="text-lg hover:text-pink-400" />

            <a
              href="mailto:ysachin120504@gmail.com"
              className="text-sm sm:text-base hover:text-pink-400 transition"
            >
              ysachin120504@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()} <a>All rights reserved</a>
        </p>
        {/* <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/sachin-yadavv">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sachin-ydvv">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/sachin_.ydvv">
              Instagram
            </a>
          </li>
        </ul> */}
        <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
          {/* GITHUB */}
          {/* <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sachin-yadavv"
              className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-gray-300 dark:border-white/20
        text-2xl
        transition-all duration-300
        hover:bg-gray-900
        hover:text-white
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-gray-500/40
      "
            >
              <FaGithub />
            </a>
          </li> */}

          {/* LINKEDIN */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sachin-ydvv"
              className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-gray-300 dark:border-white/20
        text-2xl
        transition-all duration-300
        hover:bg-blue-600
        hover:text-white
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-blue-500/40
      "
            >
              <FaLinkedin />
            </a>
          </li>

          {/* INSTAGRAM */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sachin_.ydvv"
              className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-gray-300 dark:border-white/20
        text-2xl
        transition-all duration-300
        hover:bg-gradient-to-r
        hover:from-pink-500
        hover:to-yellow-500
        hover:text-white
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-pink-500/40
      "
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
