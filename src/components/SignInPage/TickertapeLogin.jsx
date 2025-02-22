import React from "react";

import { motion } from "framer-motion";

export default function TickertapeLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        {/* Left Side - App Promo */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col items-center justify-center text-center">
          <img
            src="https://via.placeholder.com/100" // Replace with actual QR Code
            alt="QR Code"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-700">
            Redefine your <span className="text-blue-500">investing experience</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Install the Tickertape app and enjoy analysis on the go.
          </p>
          <motion.img
            src="https://via.placeholder.com/250x500" // Replace with actual app image
            alt="App"
            className="w-40 mt-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 flex items-center mb-2">
            <img
              src="https://via.placeholder.com/40" // Replace with actual logo
              alt="Tickertape Logo"
              className="w-6 h-6 mr-2"
            />
            tickertape
          </h2>
          <p className="text-gray-500 text-sm mb-4">from smallcase</p>

          {/* Phone Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Enter your phone number
            </label>
            <div className="flex mt-2 border rounded-lg overflow-hidden shadow-sm">
              <select className="p-3 bg-gray-200 border-r focus:outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 w-full focus:outline-none"
              />
            </div>
          </div>

          {/* OTP Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Get OTP
          </motion.button>

          {/* Terms & Conditions */}
          <p className="text-gray-400 text-xs text-center mt-3">
            By logging in, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


// import { motion } from "framer-motion";
// import { useState } from "react";
// import { X } from "lucide-react";

// export default function TickertapeLogin() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-2xl"
//           >
//             {/* Left Side - QR & App */}
//             <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col items-center justify-center text-center">
//               <img
//                 src="https://via.placeholder.com/80"
//                 alt="QR Code"
//                 className="w-16 h-16 mb-3"
//               />
//               <h2 className="text-xl font-bold text-gray-700">
//                 Redefine your <span className="text-blue-500">investing experience</span>
//               </h2>
//               <p className="text-gray-500 text-sm mt-2">
//                 Install the Tickertape app and enjoy analysis on the go.
//               </p>
//               <motion.img
//                 src="https://via.placeholder.com/200x400"
//                 alt="App Preview"
//                 className="w-32 mt-4"
//                 initial={{ y: 10 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>

//             {/* Right Side - Login Form */}
//             <div className="w-full md:w-1/2 p-6 flex flex-col justify-center relative">
//               {/* Close Button */}
//               <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3">
//                 <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
//               </button>

//               {/* Logo & Text */}
//               <h2 className="text-xl font-bold text-gray-700 flex items-center mb-1">
//                 <img
//                   src="https://via.placeholder.com/30"
//                   alt="Tickertape Logo"
//                   className="w-5 h-5 mr-2"
//                 />
//                 tickertape
//               </h2>
//               <p className="text-gray-500 text-sm mb-3">from smallcase</p>

//               {/* Phone Input */}
//               <div>
//                 <label className="block text-gray-600 text-sm font-medium">
//                   Enter your phone number
//                 </label>
//                 <div className="flex mt-2 border rounded-lg overflow-hidden shadow-sm">
//                   <select className="p-3 bg-gray-200 border-r focus:outline-none">
//                     <option>+91</option>
//                     <option>+1</option>
//                     <option>+44</option>
//                   </select>
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="p-3 w-full focus:outline-none"
//                   />
//                 </div>
//               </div>

//               {/* OTP Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
//               >
//                 Get OTP
//               </motion.button>

//               {/* Terms & Conditions */}
//               <p className="text-gray-400 text-xs text-center mt-3">
//                 By logging in, you agree to our{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Terms & Conditions
//                 </a>
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// }
