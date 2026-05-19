import { useState, useEffect } from "react";

export default function CodingProfiles() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div
      id="CodingProfiles"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* HEADING */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Problem Solving</h4>

      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
        Coding Profiles
      </h2>

      <p className="text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-sm sm:text-base leading-7">
        Passionate about Data Structures & Algorithms, competitive programming,
        and continuously improving my problem-solving skills through coding
        platforms.
      </p>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch ">
        {/* LEETCODE CARD */}

        <a
          href="https://leetcode.com/u/sachin_yadavv/"
          target="_blank"
          rel="noopener noreferrer"
          className="
  group 
  rounded-3xl
  overflow-hidden
  border border-gray-200 dark:border-white/10
  bg-gray-100 dark:bg-white/[0.03]
  backdrop-blur-sm
  p-3
  hover:-translate-y-2
  duration-300
  hover:shadow-2xl hover:shadow-yellow-500/10
  block
"
        >
          <p className="text-sm sm:text-base text-yellow-400 mb-3 font-medium px-2">
            LeetCode Profile
          </p>

          <img
            src={`https://leetcard.jacoblin.cool/sachin_yadavv?theme=${
              isDark ? "dark" : "light"
            }&font=Karma&ext=contest`}
            alt="LeetCode Stats"
            className="w-full rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
        </a>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">
          {/* GITHUB STATS */}
          <a
            href="https://github.com/sachin-yadavv"
            target="_blank"
            rel="noopener noreferrer"
            className="
  group
  rounded-3xl
  overflow-hidden
  border border-gray-200 dark:border-white/10
  bg-gray-100 dark:bg-white/[0.03]
  backdrop-blur-sm
  p-3
  hover:-translate-y-2
  duration-300
  hover:shadow-2xl hover:shadow-purple-500/10
  block
"
          >
            <p className="text-sm sm:text-base text-purple-400 mb-3 font-medium px-2">
              GitHub Activity
            </p>
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sachin-yadavv&theme=${
                isDark ? "tokyonight" : "default"
              }`}
              alt="GitHub Stats"
              className="w-full rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>

          {/* GITHUB STREAK */}
          <a
            href="https://github.com/sachin-yadavv"
            target="_blank"
            rel="noopener noreferrer"
            className="
  group
  rounded-3xl
  overflow-hidden
  border border-gray-200 dark:border-white/10
  bg-gray-100 dark:bg-white/[0.03]
  backdrop-blur-sm
  p-3
  hover:-translate-y-2
  duration-300
  hover:shadow-2xl hover:shadow-pink-500/10
  block
"
          >
            <p className="text-sm sm:text-base text-pink-400 mb-3 font-medium px-2">
              Contribution Streak
            </p>
            <img
              src={`https://streak-stats.demolab.com?user=sachin-yadavv&theme=${
                isDark ? "tokyonight" : "default"
              }&hide_border=true`}
              alt="GitHub Streak"
              className="w-full rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
