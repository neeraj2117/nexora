// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 py-24 px-12 md:px-20 lg:px-30 xl:px-56">
//       <div className="border border-gray-700 rounded-xl p-10 flex flex-wrap justify-center lg:justify-between gap-10 md:gap-20">
//         {/* Left / Main Sections */}
//         <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
//           <a href="#" className="flex flex-row gap-3">
//             <h1 className="text-4xl text-white font-medium hover:underline">
//               Nexora
//             </h1>
//           </a>

//           {/* Product Section */}
//           <div>
//             <p className="text-slate-100 font-semibold text-lg">Product</p>
//             <ul className="mt-4 space-y-2">
//               {["Home", "Support", "Pricing", "Affiliate"].map((item) => (
//                 <li key={item}>
//                   <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources Section */}
//           <div>
//             <p className="text-slate-100 font-semibold text-lg">Resources</p>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   Company
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   Blogs
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   Community
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/"
//                   className="hover:text-indigo-400 hover:underline text-sm transition flex items-center gap-2"
//                 >
//                   Careers
//                   <span className="text-xs text-white bg-indigo-600 rounded-md px-2 py-1">
//                     We’re hiring!
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   About
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Legal Section */}
//           <div>
//             <p className="text-slate-100 font-semibold text-lg">Legal</p>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   Privacy
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-indigo-400 hover:underline text-sm transition">
//                   Terms
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end text-[15px]">
//           <p className="max-w-60">
//             Making every customer feel valued—no matter the size of your
//             audience.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 mt-4">
//             {/* Icons */}
//             <a href="#" target="_blank" rel="noreferrer">
//               <svg
//                 className="w-6 h-6 hover:text-indigo-400"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
//                 <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
//                 <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
//               </svg>
//             </a>

//             <a href="#" target="_blank" rel="noreferrer">
//               <svg
//                 className="w-6 h-6 hover:text-indigo-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                 <rect width="4" height="12" x="2" y="9"></rect>
//                 <circle cx="4" cy="4" r="2"></circle>
//               </svg>
//             </a>

//             <a href="#" target="_blank" rel="noreferrer">
//               <svg
//                 className="w-6 h-6 hover:text-indigo-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//               </svg>
//             </a>

//             <a href="#" target="_blank" rel="noreferrer">
//               <svg
//                 className="w-7 h-7 hover:text-indigo-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
//                 <path d="m10 15 5-3-5-3z"></path>
//               </svg>
//             </a>
//           </div>

//           <p className="mt-4 text-[14px] text-gray-400">
//             © 2025{" "}
//             <a href="#" className="hover:text-indigo-400 hover:underline">
//               Nexora
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-48">
      <div className="border border-gray-700 rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left / Main Sections */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start justify-center lg:justify-start gap-10 sm:gap-14 xl:gap-[120px] text-center sm:text-left w-full lg:w-auto">
          {/* Logo */}
          <a href="#" className="flex justify-center sm:justify-start">
            <h1 className="text-4xl text-white font-medium hover:underline">
              Nexora
            </h1>
          </a>

          {/* Product Section */}
          <div>
            <p className="text-slate-100 font-semibold text-lg">Product</p>
            <ul className="mt-4 space-y-2">
              {["Home", "Support", "Pricing", "Affiliate"].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="hover:text-indigo-400 hover:underline text-sm transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <p className="text-slate-100 font-semibold text-lg">Resources</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition flex items-center justify-center sm:justify-start gap-2"
                >
                  Careers
                  <span className="text-xs text-white bg-indigo-600 rounded-md px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <p className="text-slate-100 font-semibold text-lg">Legal</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-indigo-400 hover:underline text-sm transition"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-3 w-full lg:w-auto">
          <p className="max-w-60 text-sm">
            Making every customer feel valued—no matter the size of your
            audience.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-end gap-4 mt-4">
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                className="w-6 h-6 hover:text-indigo-400"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                className="w-6 h-6 hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                className="w-6 h-6 hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <svg
                className="w-7 h-7 hover:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>

          <p className="mt-4 text-[13px] text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:text-indigo-400 hover:underline">
              Nexora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
