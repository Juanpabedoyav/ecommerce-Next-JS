import Image from "next/image"

const Card = ({title, price, img}) =>{

    return(
            <article style={{width:228, height: 420, border: "1px solid white"}}>
                <h2>{title}</h2>
                <p>$ {price}</p>   
                <img src={img} alt ={title} height= {228} width= {228}/>             
            </article>
    )
}

export default Card
