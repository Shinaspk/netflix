import React, { useEffect, useState,isPosture } from 'react'
import instance from '../instance';
import'./Row.css';

function Row({tittle,fetchURL,isPosture}) {
  const [allMovies,setAllMovies] =useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

   // console.log(fetchURL);
    const fetchData=async()=>{
const {data}=await instance.get(fetchURL)
setAllMovies(data.results)
//console.log(data.results);
    }

   // console.log(allMovies);

    useEffect(()=>{
      fetchData() 
    },[])
  return (
    <div className='row'>
        <p><h1>{tittle}</h1></p>
        <div className="movie_row">
          {
            allMovies?.map(item=>(
             <img className={`movies ${isPosture && 'movie-poster'}`} src={`${ base_url}/${isPosture?item?.poster_path:item?.backdrop_path}`} alt="no image" /> 
            ))
          }
        </div>
    </div>
  )
}

export default Row