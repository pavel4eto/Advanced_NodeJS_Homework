// Create an array named movies of type array of Movie
var movies = [];
// Function to add a movie
var addMovie = function (title, duration, genre, hasWonOscar) {
    var id = Date.now().toString(); // Generate unique id
    var movie = {
        id: id,
        title: title,
        duration: duration,
        genre: genre,
        hasWonOscar: hasWonOscar
    };
    movies.push(movie);
    console.log("Movie ".concat(title, " added with ID ").concat(id));
};
// Example usage
addMovie('Inception', 148, 'action', true);
addMovie('The Shawshank Redemption', 142, 'drama', true);
// Function to print movies based on genre
var printMovies = function (moviesArray, genre) {
    if (genre === void 0) { genre = 'action'; }
    var filteredMovies = moviesArray.filter(function (movie) { return movie.genre === genre; });
    console.log("Movies of genre ".concat(genre, ":"));
    filteredMovies.forEach(function (movie) {
        console.log("Title: ".concat(movie.title, ", Duration: ").concat(movie.duration, " minutes"));
    });
};
// Example usage
printMovies(movies); // Prints action movies by default
// Add more movies
addMovie('Avatar', 162, 'action', false);
addMovie('The Godfather', 175, 'drama', true);
printMovies(movies); // Prints all action movies
printMovies(movies, 'drama'); // Prints drama movies
