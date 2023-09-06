import React from "react";

interface ModalProperties {
  type: string;
  source: string;
  onCloseIcon: (value: boolean) => void;
}

const Modal = ({ type, source, onCloseIcon }: ModalProperties) => {
  const closeModal = (value: boolean) => {
    onCloseIcon(value);
  };

  return (
    <div className="fixed overflow-auto w-screen h-screen top-0 left-0 bg-gray-800 bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-lg min-w-[500px] min-h-[350px] w-4/6 h-4/5">
        {type === "iframe" ? (
          <>
            <iframe src={source} className="w-full h-full" />
          </>
        ) : null}

        {type === "image" ? (
          <div className="w-full h-full relative">
            <img src={source} className="w-full h-full block object-contain" />
          </div>
        ) : null}
        <span
          className="absolute right-0 top-0 bg-white z-10 rounded-full h-12 w-12 shadow-lg flex items-center justify-center p-3 cursor-pointer"
          style={{ transform: "translate(50%,-50%)" }}
          onClick={(event) => closeModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Modal;
