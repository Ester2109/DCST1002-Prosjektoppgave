import Button from "../Button/Button";

const Modal = ({ children, open, onClose, style, ...props }) => {
  return (
    <dialog
      open={open}
      {...props}
      style={{
        maxWidth: "50vw",
        borderRadius: "1rem",
        border: "none",
        padding: "2rem",
        boxShadow: `0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12)`,
        testAlign: "left",
        ...style,
      }}
    >
      {children}
      <form method="dialog" onSubmit={onClose}>
        <Button
          style={{
            color: "black",
            marginTop: '1rem',
          }}
        >
          Lukk
        </Button>
      </form>
    </dialog>
  );
};

export default Modal;
