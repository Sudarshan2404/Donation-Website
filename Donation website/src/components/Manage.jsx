import React, { useState } from "react";
import CreateModal from "./CreateModal";

const load = () => JSON.parse(localStorage.getItem("donation_requests")) || [];
const save = (d) =>
  localStorage.setItem("donation_requests", JSON.stringify(d));

export default function Manage() {
  const [items, setItems] = useState(load());
  const [open, setOpen] = useState(false);

  const add = (req) => {
    const next = [req, ...items];
    setItems(next);
    save(next);
    setOpen(false);
  };

  const remove = (id) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    save(next);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white">
            Manage your requests
          </h1>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#6d28d9] to-[#4f46e5] text-white px-4 py-2 rounded-xl shadow-lg"
          >
            + New Request
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.length === 0 && (
          <div className="glass p-8 rounded-2xl text-gray-400">
            No requests yet. Create one.
          </div>
        )}
        {items.map((it) => (
          <div
            key={it.id}
            className="bg-[#071428] p-4 rounded-2xl border border-[#111827] shadow-inner"
          >
            <img
              src={it.image}
              className="h-44 w-full object-cover rounded-lg mb-3"
            />
            <div className="flex justify-between items-start">
              <div>
                <div className="text-white font-semibold text-lg">
                  {it.title}
                </div>
                <div className="text-gray-400 text-sm mt-1">{it.desc}</div>
                <div className="mt-2 text-gray-200 font-medium">
                  Amount: {it.amount}
                </div>
              </div>
              <div>
                <button
                  onClick={() => remove(it.id)}
                  className="text-red-400 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/7"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateModal open={open} onClose={() => setOpen(false)} onCreate={add} />
    </div>
  );
}
