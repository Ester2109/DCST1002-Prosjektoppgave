const Paragraph = ({ children, topSpacing, style, ...props }) => {
  return (
    <p
      style={{
        marginTop: topSpacing ? "2rem" : "unset",
        textWrap: "balance",
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
