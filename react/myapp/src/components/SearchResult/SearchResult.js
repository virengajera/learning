import './SearchResult.css'

export default function SearchResult(props){
    return (
        <div className='search-result'>
        {
            props.films.map((film,idx)=>{
              return <p key={idx}>{film.title}</p>
            })
        }
        </div>

    )
}