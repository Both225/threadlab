"use client";

export default function InfoCard({ icon, title, description }) {
  return (
    <div className="flex flex-col px-6">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
