function GridItems({ children, cols = 1, gap = 1.6 }) {
  const styles = `grid-cols-${cols} gap-[${gap}rem]`;

  return <div className={`grid ${styles} w-full`}>{children}</div>;
}

export default GridItems;
