interface Movie {
    id: string;
    title: string;
    duration: number; 
    genre: string;
    hasWonOscar?: boolean; 
  }
  
  const movies: Movie[] = [];
  
  const addMovie = (title: string, duration: number, genre: string, hasWonOscar?: boolean) => {
    const id = Date.now().toString();
    const movie: Movie = {
      id,
      title,
      duration,
      genre,
      hasWonOscar
    };
    movies.push(movie);
    console.log(`Movie ${title} added with ID ${id}`);
  };
  
  addMovie('Inception', 148, 'action', true);
  addMovie('The Shawshank Redemption', 142, 'drama', true);

const printMovies = (moviesArray: Movie[], genre: string = 'action') => {
    const filteredMovies = moviesArray.filter(movie => movie.genre === genre);
    
    console.log(`Movies of genre ${genre}:`);
    filteredMovies.forEach(movie => {
      console.log(`Title: ${movie.title}, Duration: ${movie.duration} minutes`);
    });
  };
  
  printMovies(movies); 
  

  addMovie('Avatar', 162, 'action', false);
  addMovie('The Godfather', 175, 'drama', true);
  
  printMovies(movies); 
  
  printMovies(movies, 'drama'); 
  