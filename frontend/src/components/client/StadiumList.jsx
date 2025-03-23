import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useList from "../../hook/useList";
const StadiumList = () => {
  const { data, isLoading } = useList("court");
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">Danh sách sân bóng</h2>

      <div className="row">
        {data.court.map((item, index) => {
          return (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <Link to={`/detailstadium/${item._id}`}>
                <div className="card">
                  <img
                    src="https://atsport.vn/wp-content/uploads/2021/08/kich-thuoc-san-bong-da-7-nguoi-co-nhan-tao-1-1-960x960-960x960-960x960.jpg"
                    className="card-img-top"
                    alt="Sân bóng"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title nav-link">{item.location}</h5>
                    <p className="card-text">Địa chỉ: {item.location}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default StadiumList;
