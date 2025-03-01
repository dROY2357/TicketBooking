import { ToastContainer, toast, Slide } from "react-toastify";

const toastSuccess = (message) =>
  toast.success(message, {
    transition: Slide,
  });

const toastError = (message) => toast.error(message, { transition: Slide });

const toastInfo = (message) => toast.info(message, { transition: Slide });

export { toastSuccess, toastError, toastInfo, ToastContainer };
