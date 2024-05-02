import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customToast = (message, type, isOrange = false) => {
  if (type === "success") {
    if (isOrange) {
      toast.success(message, {
        transition: Flip,
        className: "orange-toast",
        theme: "colored",
      });
    } else {
      toast.success(message, {
        transition: Flip,
        theme: "colored",
      });
    }
  } else if (type === "error") {
    toast.error(message, {
      transition: Flip,
      theme: "colored",
    });
  } else if (type === "info") {
    toast.info(message, {
      transition: Flip,
      theme: "colored",
    });
  }
};

export default customToast;
