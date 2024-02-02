import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [info,setinfo] = useState([])
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }}).then(data=>setinfo(data.data.books))
  },[])
  console.log(info)
  return (
    <div className="App">
      <div>
        {info.map(({title,authors,imageLinks,description})=>(
          <div className='list'>
            <div className='detail'>
              <h3>{title}</h3>
              <img src={imageLinks.smallThumbnail} />
              <h5>{authors}</h5>
            </div>
            <div className="desc">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
