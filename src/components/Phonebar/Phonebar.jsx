import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Phonebar = () => {
    const [data, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => loadPhones(data.data.data))

        const loadPhones = (phones) =>{
            // console.log(phones);

            const phonesByAxios = phones.map(phone => {
                // console.log(phone);
                const parse = phone.slug.split('-');
                // console.log(parse)
                const price = parseInt(parse[1]);
                const phoneInfo ={
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            });
            // console.log(phonesByAxios);
            setPhones(phonesByAxios);
        }
    },[])
// console.log(phones);
    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     }];
    return (
        <div>
           <BarChart width={150} height={40} data={data}>
          <Bar dataKey="name" fill="#8884d8" />
        </BarChart>
        {/* <BarChart width={150} height={40} phones={phones}>
            <XAxis dataKey="name" />
            <YAxis />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart> */}
        </div>
    );
};

export default Phonebar;