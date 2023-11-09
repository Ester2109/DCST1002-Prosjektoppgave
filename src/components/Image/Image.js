const Image = ({ style, ...props }) => {
  return (
    <img
      style={{
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        fontStyle: "italic",
        shapeMargin: "1rem",
        borderRadius: ".5rem",
        ...style,
      }}
      {...props}
    />
  );
};
export default Image;
