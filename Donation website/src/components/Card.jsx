import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Card({ item }) {
  const [open, setOpen] = useState(false);
motion
  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-[#071428] rounded-2xl overflow-hidden border border-white/6 shadow-lg"
      >
        <div className="relative">
          <img src={item.image} className="w-full h-56 object-cover" />
          
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-white font-semibold text-lg">
                {item.title}
              </div>
              <div className="text-gray-400 text-sm mt-1 line-clamp-2">
                {item.desc}
              </div>
            </div>
            <div className="text-[#9f7aea] font-bold">₹ {item.amount}</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setOpen(true)}
              className="flex-1 bg-gradient-to-r from-[#6d28d9] to-[#4f46e5] text-white py-2 rounded-lg"
            >
              Donate
            </button>
          </div>
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          ></div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative p-6 bg-[#071428] rounded-2xl border border-white/6 max-w-md w-full"
          >
            <img
              src={item.image}
              className="w-full h-44 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white font-semibold text-xl">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#6d28d9] to-[#4f46e5] text-white py-2 rounded-lg">
                Pay
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 bg-white/6 text-white py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
