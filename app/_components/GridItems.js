function GridItems({ children, cols = 1, gap }) {
  const styles = `grid-cols-${cols} gap-[${gap}]`;

  return <div className={`grid ${styles} w-full`}>{children}</div>;
}

export default GridItems;
