function GridItems({ children, cols = 1 }) {
  const styles = `grid-cols-${cols}`;

  return <div className={`grid ${styles} w-full gap-[1.6rem]`}>{children}</div>;
}

export default GridItems;
