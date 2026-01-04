//=================================
//           MediaItem
//=================================
class MediaItem {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }

  getSummary() {
    return `title : ${this.title} year : ${this.year} genre : ${this.genre} `;
  }
}

//=================================
//             Book
//=================================
class Book extends MediaItem {
  constructor(author, pageCount, title, year, genre) {
    super(title, year, genre);
    this.author = author;
    this.pageCount = pageCount;
  }

  getSummary() {
    return `Book: by ${this.author}, ${this.pageCount} pages`;
  }
}

//=================================
//             Movie
//=================================
class Movie extends MediaItem {
  constructor(director, durationMinutes, title, year, genre) {
    super(title, year, genre);
    this.director = director;
    this.durationMinutes = durationMinutes;
  }

  getSummary() {
    return `Movie : ${this.director}, Min ${this.durationMinutes}`;
  }
}

//=================================
//            Library
//=================================
class Library {
  constructor() {
    this.MediaItems = [];
  }

  addItem(item) {
    this.MediaItems.push(item);
  }

  search(term) {
    const item = this.MediaItems.find((item) => item.title.includes(term));
    return item;
  }

  listByGenre(genre) {
    const items = this.MediaItems.filter((item) => item.genre === genre);
    return items;
  }
}
