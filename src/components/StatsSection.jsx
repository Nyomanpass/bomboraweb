import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "1B+", label: "AI images created, and counting", desc: "AI-powered generation happening in real-time like never before.", color: "text-teal-500" },
  { value: "64M+", label: "Happy creatives", desc: "Join a growing community of innovators shaping the future of creativity.", color: "text-red-500" },
  { value: "247M+", label: "Ready-to-use stock assets", desc: "Icons, videos, audio, images, vectors, and more all ready for your next project.", color: "text-blue-500" },
  { value: "600K+", label: "Subscribers", desc: "Unlocking creativity with Premium features and limitless possibilities.", color: "text-purple-500" },
];

const StatsSection = () => {
  return (
    <div className="text-center py-16 container px-16 mx-auto">
      <p className="text-footer font-semibold">BOMBORA TEMPLATES WEBISTE</p>
      <h2 className="text-4xl font-bold mt-2">Tumbuh setiap detiknya</h2>
      <p className="text-gray-600 mt-2">Kreativitas tidak pernah berhenti, begitu pula kita.</p>
      <Link to={`/templates/list`} className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800">Mulai Sekarang</Link>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center max-w-2xl">
            <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className={`font-semibold ${stat.color} mt-1`}>{stat.label}</p>
            <p className="text-gray-600 mt-2 text-sm">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
