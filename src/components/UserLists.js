import React, { useEffect, useState } from "react"
import axios from "axios"
import UserItem from "./UserItem"
import Pagination from "./Pagination"
import Loading from "./Loading"

const UserList=()=>{

    const [users,setUsers]=useState([])
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(true)

    const changePage=(pageno)=>{
        setPage(pageno)
        
    }

    const fetchApi=()=>{
    

    var config = {
        method: 'get',
        url: `https://reqres.in/api/users?page=${page}`,
        headers: { },
        
    };

    axios(config)
    .then(function (response) {
        const apiData=response.data;
        setUsers(apiData.data)
        setLoading(false)
        
    })
    .catch(function (error) {
        console.log(error);
    });
    } 

    useEffect(()=>{
    fetchApi()
    
    },[page])



    if (users===[]){
    return (
    <Loading />
    )
    }

    else{
    return (
        <>
        <h1>user list</h1>
        <div>
        {users.map((user,index)=>{
            return(
            <>
                <UserItem key={index} item={user} />
                
            </>
            
            )
        })}
        <Pagination changePage={changePage} />
            
        </div>
        
        </>
    )
    }

    
}

export default UserList