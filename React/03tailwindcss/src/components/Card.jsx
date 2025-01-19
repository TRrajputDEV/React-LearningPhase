import React from "react";
function Card(props){
    console.log("Props", props.username);
    return(
        <>
        <h1 className="text-red-500">This is a Card Data: {props.cardno}</h1>
        <p className="p-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum dolores sint neque quisquam dolorum odit! Illum nobis inventore aliquam possimus voluptatibus dolores, harum ipsam magni nulla libero tempora eligendi?</p>
        <h1 className="mt-3">There Goes Writer Name: {props.username}</h1>
        </>
    )
}

export default Card;