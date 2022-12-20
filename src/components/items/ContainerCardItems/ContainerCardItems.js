import React from 'react'
import "./containerCardItems.css";
import CardItem from '../CardItem/CardItem';
import fetchSimultion from '../../utils/fetchSimultion';
import productos from '../../utils/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    let {idCategory} = useParams()

    useEffect(() => {
            if(idCategory === undefined){
                fetchSimultion(productos, 1000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            } else {
                fetchSimultion(productos.filter(filter => filter.type === idCategory ), 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            }
    }, [idCategory])
    

    return(
        <div className="containerCardItems">
            {
                datos.map( product => (
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

export default ContainerCardItems;