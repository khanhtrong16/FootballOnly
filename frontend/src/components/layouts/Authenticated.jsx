import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import useOne from "../../hook/useOne";

const Authenticated = ({ children, fallBack }) => {
    const [isCheck, setIsCheck] = useState(false);
    const [isCheckedDone, setIsCheckedDone] = useState(false);
    const token = localStorage.getItem("token");

    let id = null;
    if (token) {
        try {
            const decoded = jwtDecode(token);
            id = decoded?.id;
        } catch (error) {
            console.error("Invalid token:", error);
        }
    }

    const { data, isLoading } = useOne("user", id);

    useEffect(() => {
        if (!isLoading) {
            if (data?.user?.role === "owner") {
                setIsCheck(true);
            }
            setIsCheckedDone(true);
        }
    }, [data, isLoading]);

    if (!isCheckedDone) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }
    return <>{isCheck ? children : fallBack}</>;
};

export default Authenticated;
