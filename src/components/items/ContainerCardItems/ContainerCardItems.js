import React from 'react'
import "./containerCardItems.css";
import CardItem from '../CardItem/CardItem';
import fetchSimultion from '../../utils/fetchSimulation';
import productos from '../../utils/products';
import { useState, useEffect } from 'react';

const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetchSimultion(productos, 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
    }, [])



    return (
        <div className="containerCardItems">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firtsImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItems