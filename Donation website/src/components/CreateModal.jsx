import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUploadCloud } from "react-icons/fi";

export default function CreateModal({ open, onClose, onCreate }) {
  const [form, setForm] = useState({ title: "", desc: "", amount: "" });
  const [image, setImage] = useState(null);

  const handle = (e) => {
    const f = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    f && reader.readAsDataURL(f);
  };

  const submit = () => {
    if (!form.title || !form.desc || !image)
      return alert("Please fill all fields and upload an image");
    onCreate({
      id: Date.now(),
      ...form,
      image,
      amount: form.amount || "Flexible",
    });
    setForm({ title: "", desc: "", amount: "" });
    setImage(null);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.16 }}
        className="relative w-full max-w-md p-6 bg-[#071428] border border-white/6 rounded-2xl shadow-2xl"
      >
        <h2 className="text-xl text-white font-semibold mb-3">
          New Donation Request
        </h2>
        <input
          className="w-full p-3 rounded-lg bg-[#05101a] border border-white/6 text-white mb-3"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="w-full p-3 rounded-lg bg-[#05101a] border border-white/6 text-white mb-3"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <input
          className="w-full p-3 rounded-lg bg-[#05101a] border border-white/6 text-white mb-3"
          placeholder="Amount (optional)"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <label className="flex items-center gap-3 p-3 bg-[#061223] border border-white/6 rounded-lg cursor-pointer hover:bg-[#071428]">
          <FiUploadCloud size={22} className="text-gray-300" />
          <span className="text-gray-300">Upload image</span>
          <input type="file" className="hidden" onChange={handle} />
        </label>

        {image && (
          <img
            src={image}
            className="w-28 h-28 object-cover rounded-lg mt-3 shadow-md"
          />
        )}

        <div className="flex gap-3 mt-5">
          <button
            onClick={submit}
            className="flex-1 bg-gradient-to-br from-[#6d28d9] to-[#4f46e5] text-white py-2 rounded-lg"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-white/6 text-white py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
