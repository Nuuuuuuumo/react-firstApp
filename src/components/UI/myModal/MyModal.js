import React from "react";
import style from "../myModal/MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [style.Modal];

  if (visible) {
    rootClasses.push(style.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={style.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
