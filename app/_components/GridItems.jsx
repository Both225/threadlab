function GridItems({ children, cols = 1 }) {
  const styles = `grid-cols-${cols}`;

  return <ul className={`grid ${styles} w-full gap-[1.6rem]`}>{children}</ul>;
}

export default GridItems;
