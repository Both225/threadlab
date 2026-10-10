function Section({ children, colStart = 2, colEnd = 6, padding = "0px 0px" }) {
  return (
    <section
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        padding: padding,
      }}
    >
      {children}
    </section>
  );
}

export default Section;
