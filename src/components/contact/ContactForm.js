import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-[500px] bg-black border-none rounded-xl p-6 mx-auto">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-white">
          Get In <span className="text-[#00FF00]">Touch</span>
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-800 border-none text-white placeholder:text-zinc-400 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-zinc-800 border-none text-white placeholder:text-zinc-400 p-3 rounded"
            />
            <input
              type="tel"
              placeholder="Your Number"
              className="bg-zinc-800 border-none text-white placeholder:text-zinc-400 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="bg-zinc-800 border-none text-white placeholder:text-zinc-400 p-3 rounded"
            />
          </div>
          <textarea
            placeholder="Type your message"
            className="min-h-[120px] bg-zinc-800 border-none text-white placeholder:text-zinc-400 p-3 rounded w-full"
          />
          <button className="w-full bg-[#00FF00] hover:bg-[#00DD00] text-black font-semibold py-3 rounded mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
