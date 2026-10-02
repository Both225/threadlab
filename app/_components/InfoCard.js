"use client";

export default function InfoCard({ children, title, description }) {
  return (
    <div className="flex flex-col gap-[1.2rem] p-6 border rounded-md border-[#909aa68b]">
      {children}
      <div>
        <p className="text-[1.8rem] text-t-strong">{title}</p>
        <p className="text-t-weak font-normal">{description}</p>
      </div>
    </div>
  );
}
