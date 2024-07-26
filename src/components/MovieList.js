import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
return (
    <div>
        <div className='container'>
            {props.movies.map((movie) => {
                return <MovieCard movie = {movie}/>
            })}
        </div>
    </div>
)
}

export default MovieList
