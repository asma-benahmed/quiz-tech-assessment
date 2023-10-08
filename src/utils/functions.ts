/* istanbul ignore file */

import { toast } from "react-toastify";

export const showToast = (
  message: string,
  type: "info" | "success" | "error"
) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
