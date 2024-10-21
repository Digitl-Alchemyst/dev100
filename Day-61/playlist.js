class Playlist {
  constructor() {
    this.songs = [];
  }

  addToBeginning(song) {
    this.songs.unshift(song);
  }

  addToEnd(song) {
    this.songs.push(song);
  }

  removeFromBeginning() {
    // TODO: Remove and return the first song from the playlist
  let removedSong = this.songs.shift();
  return removedSong;
}

  removeFromEnd() {
    // TODO: Remove and return the last song from the playlist
  let removedSong = this.songs.pop();
  return removedSong;
  }

  moveLastToFirst() {
    // TODO: Move the last song to the beginning of the playlist
  let movedSong = this.songs.pop();
   this.songs.unshift(movedSong);
  }

  shuffle() {
    // TODO: Shuffle the playlist
    this.songs.sort(() => Math.random() - 0.5);
  }

  printPlaylist() {
    console.log(this.songs);
  }
}

const myPlaylist = new Playlist();


myPlaylist.addToBeginning("Bohemian Rhapsody");
myPlaylist.addToBeginning("Stairway to Heaven");
myPlaylist.addToBeginning("Smells Like Teen Spirit");
myPlaylist.addToBeginning("Like a Rolling Stone");
myPlaylist.addToBeginning("Another One Bites the Dust");
myPlaylist.addToBeginning("Imagine");

console.log("Initial playlist:");
myPlaylist.printPlaylist();

console.log("Removed from beginning:", myPlaylist.removeFromBeginning());
console.log("After removing from beginning:");
myPlaylist.printPlaylist();

console.log("Removed from end:", myPlaylist.removeFromEnd());
console.log("After removing from end:");
myPlaylist.printPlaylist();

myPlaylist.addToEnd("Hotel California");
myPlaylist.addToBeginning("Billie Jean");
myPlaylist.addToEnd("Hey Jude");
myPlaylist.addToBeginning("Sweet Child O' Mine");

console.log("After adding more songs:");
myPlaylist.printPlaylist();

myPlaylist.moveLastToFirst();
console.log("After moving last to first:");
myPlaylist.printPlaylist();

// myPlaylist.shuffle();
// console.log("After shuffling:");
// myPlaylist.printPlaylist();