import React, { useEffect } from 'react'
import axios from 'axios'
import Item from './Item'
import json from './json.json'
const FetchData = () => {
    const [count, setCount ] = React.useState(0)
    const [imagen, setImagen] = React.useState('')

    const url = 'https://dog.ceo/api/breeds/image/random'

    

    useEffect(() => {
        
        // Ejemplo con axios
        // const fetchData = () => {
        //     axios.get(url)
        //     .then((response) => {
        //         console.log(response.data.message)
        //         setImagen(response.data.message)
        //     })
        //     .catch(err => console.log(err))
        // }
        // fetchData()

        // Ejemplo con fetch
        
        //Ejemplo con async/await try and catch
        try{
            const fetchData = async () => {
                let response = await fetch(url)
                let data = await response.json()
                console.log(data)
                // Ejemplo con .then()
                // .then((res) => res.json())
                // .then((data) => console.log(data))
                // .catch(err => console.log(err))
            }
            fetchData()
        }
        catch(err) {
            console.log(err)
        }
    }, [count])

   const arr = [1,2,3,4,5]

  return (
    <div>
        <h1>FetchData</h1>

        <img src={imagen} alt=''/>
        {count}
        {json.map(coso => <p><img src={coso.img2} alt=''/>{coso.name}</p>)}
        {arr.map(item => <Item item={item}/>)}
        <button onClick={() => setCount(count +1)}>X</button>
    </div>
  )
}

export default FetchData