import { responsiveFontSizes } from '@material-ui/core';
import React from 'react';

let token = '8ccf785406fac80bd79fc3ccaac77d7fc0971bb80e789775';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory1776.herokuapp.com/api/cars`,{
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `Bearer ${token}`  
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch(`https://car-inventory1776.herokuapp.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to post new data to the server')
        }
        return await response.json()

    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-inventory1776.herokuapp.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to post new data to the server')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory1776.herokuapp.com/api/cars/${id}`, {
           method: 'DELETE',
           headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
           } 
        })
    }
}