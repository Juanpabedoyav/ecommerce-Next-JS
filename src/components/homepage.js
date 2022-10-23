import { useEffect, useRef, useState } from "react";
import Card from "@components/card";

const HomePage = () =>{

    const [item, setItem] = useState([])
    let likeRef = useRef(null);
    const handleLike = () =>{
        likeRef.current;
        console.log(likeRef)
    }

    //get all data -> products
    const getAllData = async () => {
        try {
            const res =await fetch('https://api.escuelajs.co/api/v1/products')
            const result = await res.json()
            setItem(result)
        } catch (error) {
            throw error    
        }
    }  

    useEffect(() =>{
        getAllData()
     }),[];
    
    
        return(
            <div>
            {item.map( article =>(
                <>
                  <Card img={article.images[1]} title= {article.title} price= {article.price}/>
                </> 
                ))}
            </div>
        )
    }

export default HomePage;
