// const movie = {
//     title: "Alone At home",
//     author: "mem. me",
//     year: 1925,
//     Rate: 5.5
// }
// console.log(movie.title , "The Author of movie is", movie.author , "Movie Created at", movie.year, "also movie have", movie.Rate, "Rate")

// console.log(movie.title)
// console.lop(movie.author)
// console.log(movie.year)
// console.log(movie.Rate)
// movie.year = 2021
// console.log(movie.year)
// movie.year = 2021
// console.log(movie.year)

// (ფილმის დასახელება)  - ის ავტორია (ფილმის ავტორი), ეს ფილმი გამოიშვა (გამოშვების წელი) და ამ ფილმს აქვს (შეფასება)'

function movie2(Title, Author, year, Rate) {
  this.Title = Title;
  this.Author = Author;
  this.year = year;
  this.Rate = Rate;
  this.getSummery = function(){
        console.log(this.Title+ 'The Author of movie is' + this.Author+ 'Movie Created at'+ this.year + 'also movie have', this.Rate ,)
  }
}

console.log(movie2)
