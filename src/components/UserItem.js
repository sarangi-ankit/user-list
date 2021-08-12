import React from "react";

const UserItem = ({ item }) => {
  return (
    <div className="user">
      <img className="user-img" src={item.avatar} alt="avatar.png" />
      <div className="uesr--info">
        <h2 className="user-first">{item.first_name}</h2>
        <h2 className="user-last">{item.last_name}</h2>
        <h3 className="user-email">{item.email}</h3>
      </div>
    </div>
  );
};
export default UserItem;
