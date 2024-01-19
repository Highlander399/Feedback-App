


function MovieList() {
  const movie = [
    {id: 1, title: "On The Way"},
    {id: 2, title: "My Way"},
    {id: 3, title: "Go The Way"},
    {id: 4, title: "The Way"},
    {id: 5, title: "By The Way"},
  ];

  return (
    <div>
      <div className="card">
      
          <ul>
            {movie.map((move) => (
              <li key={move.id}>{move.title}</li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default MovieList;


