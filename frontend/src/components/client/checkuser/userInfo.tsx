import React, { useState } from "react";
import { Popover, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../configs/axios"; 

const UserInfo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const roles = token ? JSON.parse(localStorage.getItem("roles") || '[]') : null; 
  const username = localStorage.getItem("username"); 


  const handleLogout = async () => {
    try {
      await axios.post("/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      localStorage.removeItem("username");

      message.success("Đăng xuất thành công!");
      navigate("/login");
    } catch (error) {
      message.error("Có lỗi xảy ra khi đăng xuất!");
      console.error("Logout error: ", error);
    }
  };

  const content = (
    <div className="flex flex-col">
      {username ? (
        <>
          <Link to="" className="mb-2">Thông tin tài khoản</Link>
          <Link to="" className="mb-2">Đơn hàng của tôi</Link>
          <Button onClick={handleLogout}>Đăng xuất</Button>
        </>
      ) : (
        <Link to="/login" className="mb-2">Vui lòng đăng nhập</Link>
      )}
    </div>
  );

  return (
    <div className="header-user-links flex items-center justify-center">
    {token ? (
      <Popover content={content} trigger="click">
        <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-1xl font-semibold text-center mt-5">Chào, {"Người dùng"}</span>

        </div>
      </Popover>
    ) : (
      <div className="flex space-x-2">
        <Link to="/register" className="mr-2">Đăng ký |</Link>
        <Link to="/login" className="mr-2">Đăng nhập</Link>
      </div>
    )}
  </div>
  
  );
};

export default UserInfo;
