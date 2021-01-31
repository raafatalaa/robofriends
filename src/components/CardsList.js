import React from 'react'; 
import Card from './Card';

const CardsArray =({robots}) => {
   const cardComponent=robots.map((user , i)=>{
   	return <Card key ={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
   })
   return (
   		<div>
   			{cardComponent}
   		</div>
   	);
}
export default CardsArray;
