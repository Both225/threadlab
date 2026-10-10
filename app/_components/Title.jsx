function Title({ children, className }) {
  const styles = `${className}`;

  return (
    <h2 className={`text-[1.8rem] text-t-strong font-medium ${styles}`}>
      {children}
    </h2>
  );
}

export default Title;
