import React, { useState, useEffect } from "react";
import Card from "./Card";

const load = () => JSON.parse(localStorage.getItem("donation_requests")) || [];

export default function Home() {
  const [items, setItems] = useState(load());

  useEffect(() => {
    const onStorage = () => setItems(load());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Support real causes
            </h1>
          </div>
          <div className="text-sm text-gray-400">
            Total requests:{" "}
            <span className="text-white font-semibold">{items.length}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-20 glass rounded-2xl">
              No requests yet — go to Manage → New Request
            </div>
          )}

          {items.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      </section>
    </div>
  );
}
