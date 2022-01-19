import React from 'react'
import {useState} from "react";

export const SearchPanel = ({param,setParam,users}) =>{
    return <form>
        {/*相当于 Objecs.assion({},{param,name:event.target.value})*/}
        <input type="text" value={param.name} onChange={event => setParam({
            ...param,
            name:event.target.value
        })}/>
        <select value={param.personId} onChange={event => setParam({
            ...param,
            personId: event.target.value
        })}>
            <option value="">负责人</option>
            {
                users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)
            }
        </select>
    </form>
}
