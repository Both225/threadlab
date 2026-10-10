function TextBox({ text }) {
  return (
    <div className="px-[1.6rem] whitespace-nowrap py-[0.8rem] border border-stroke-weak">
      <p className="text-t-strong">{text}</p>
    </div>
  );
}

export default TextBox;
