import React from "react"

const UserItem=({item})=>{
  return (
    <div>
      <img src={item.avatar} alt="avatar.png" />
      <h2>{item.first_name}</h2>
      <h2>{item.last_name}</h2>
      <h3>{item.email}</h3>
    </div>
  )
}
export default UserItem