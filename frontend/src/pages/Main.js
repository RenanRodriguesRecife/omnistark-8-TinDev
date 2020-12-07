import React , { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function loadUsers(){
            const response = await api.get(`/devs`, {
                headers: {
                    user: match.params.id,
                }
            })
            //console.log(response.data);
            setUsers(response.data);
        }

        loadUsers();
    },[match.params.id]);

    async function handleLike(id){
        await api.post(`/devs/${id}/like`,null,{headers: {user:match.params.id}});
        setUsers(users.filter(user=>user._id !== id));
    }

    async function handleDisLike(id){
        await api.post(`/devs/${id}/dislike`,null,{headers: {user:match.params.id}});
        setUsers(users.filter(user=>user._id !== id));
    }

    return(
        <div className = "main-container">
            <h1>{match.params.name}</h1>
            <Link to = '/'>
            <img src={logo} alt="Tindev"/>
            </Link>
            
                { users.length > 0 ? (

                <ul>
                    {users.map(user=>(
                        <li kay={user._id}>
                            <img src={user.avatar} alt={user.avatar}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p> {user.bio}</p>
                                
                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={() => handleDisLike(user._id)}>
                                    <img src={dislike} alt="Dislike"/>
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="like"/>
                                </button>
                            </div>
                        </li>
                        ))}
                    </ul>

                ): (<div className="empty">Acabou :( </div> )}
                
            
        </div>
    )

}