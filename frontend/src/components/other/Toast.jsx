import React from "react";
import { toast } from "react-toastify";
import { CheckCircle } from "lucide-react";
import "./toast.css";
export const showSuccessToast = (message) => {
    toast.success(
        <div className="custom-toast">
            <div className="custom-toast-icon">
                <CheckCircle size={20} />
            </div>
            <div>{message}</div>
        </div>,
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );
};
