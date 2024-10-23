# Code Challenge: Playlist Manipulation with shift(), pop(), and unshift()

## Problem Statement

In this challenge, you will create a Playlist class that simulates a music playlist. You'll use the array methods `shift()`, `pop()`, and `unshift()` to manipulate the order of songs in the playlist. This challenge will help you understand how these methods can be used to modify arrays in different ways.

The Playlist class should have the following functionality:
1. Add a song to the beginning of the playlist
2. Remove a song from the beginning of the playlist
3. Remove a song from the end of the playlist
4. Move the last song to the beginning of the playlist

This challenge will demonstrate practical uses of array manipulation methods in a real-world scenario that many people can relate to: managing a music playlist.

## Class Signature

```javascript
class Playlist {
  constructor() {
    this.songs = [];
  }

  addToBeginning(song) {
    // TODO: Add the song to the beginning of the playlist
  }

  removeFromBeginning() {
    // TODO: Remove and return the first song from the playlist
  }

  removeFromEnd() {
    // TODO: Remove and return the last song from the playlist
  }

  moveLastToFirst() {
    // TODO: Move the last song to the beginning of the playlist
  }

  printPlaylist() {
    console.log(this.songs);
  }
}
```

## Input/Output

- `addToBeginning(song)`: Adds a song to the beginning of the playlist. Returns nothing.
- `removeFromBeginning()`: Removes and returns the first song from the playlist. Returns `undefined` if the playlist is empty.
- `removeFromEnd()`: Removes and returns the last song from the playlist. Returns `undefined` if the playlist is empty.
- `moveLastToFirst()`: Moves the last song to the beginning of the playlist. Returns nothing. Does nothing if the playlist has fewer than 2 songs.

## Example

```javascript
const myPlaylist = new Playlist();

myPlaylist.addToBeginning("Song 1");
myPlaylist.addToBeginning("Song 2");
myPlaylist.addToBeginning("Song 3");

myPlaylist.printPlaylist();
// Expected output: ["Song 3", "Song 2", "Song 1"]

console.log(myPlaylist.removeFromBeginning());
// Expected output: Song 3

myPlaylist.printPlaylist();
// Expected output: ["Song 2", "Song 1"]

console.log(myPlaylist.removeFromEnd());
// Expected output: Song 1

myPlaylist.printPlaylist();
// Expected output: ["Song 2"]

myPlaylist.addToBeginning("Song 4");
myPlaylist.addToBeginning("Song 5");
myPlaylist.moveLastToFirst();

myPlaylist.printPlaylist();
// Expected output: ["Song 2", "Song 5", "Song 4"]
```

## Constraints

- You must use the array methods `shift()`, `pop()`, and `unshift()` to implement these operations.
- Do not use any other array methods like push(), splice(), etc.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const myPlaylist = new Playlist();

myPlaylist.addToBeginning("Bohemian Rhapsody");
myPlaylist.addToBeginning("Stairway to Heaven");
myPlaylist.addToBeginning("Imagine");

console.log("Initial playlist:");
myPlaylist.printPlaylist();

console.log("Removed from beginning:", myPlaylist.removeFromBeginning());
console.log("After removing from beginning:");
myPlaylist.printPlaylist();

console.log("Removed from end:", myPlaylist.removeFromEnd());
console.log("After removing from end:");
myPlaylist.printPlaylist();

myPlaylist.addToBeginning("Hotel California");
myPlaylist.addToBeginning("Sweet Child O' Mine");
console.log("After adding more songs:");
myPlaylist.printPlaylist();

myPlaylist.moveLastToFirst();
console.log("After moving last to first:");
myPlaylist.printPlaylist();
```

## Bonus Challenge

Implement an additional method:
- `shuffle()`: Randomly reorders the songs in the playlist.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge involves creating a Playlist class with methods that manipulate an array of songs using specific array methods:

- `shift()`: Removes the first element from an array and returns that removed element.
- `pop()`: Removes the last element from an array and returns that element.
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.

### Step 2: Implementing the Class

Here's a step-by-step implementation of the Playlist class:

```javascript
class Playlist {
  constructor() {
    this.songs = [];
  }

  addToBeginning(song) {
    this.songs.unshift(song);
  }

  removeFromBeginning() {
    return this.songs.shift();
  }

  removeFromEnd() {
    return this.songs.pop();
  }

  moveLastToFirst() {
    if (this.songs.length > 1) {
      const lastSong = this.songs.pop();
      this.songs.unshift(lastSong);
    }
  }

  printPlaylist() {
    console.log(this.songs);
  }
}
```

### Step 3: Testing the Class

You can test the class with the provided example code. Here's what each method does:

- `addToBeginning()`: Uses `unshift()` to add a song to the beginning of the array.
- `removeFromBeginning()`: Uses `shift()` to remove and return the first song.
- `removeFromEnd()`: Uses `pop()` to remove and return the last song.
- `moveLastToFirst()`: Uses `pop()` to remove the last song, then `unshift()` to add it to the beginning.

## Time and Space Complexity

- `addToBeginning()`: 
  - Time Complexity: O(n), where n is the number of elements in the playlist
  - Space Complexity: O(1)
- `removeFromBeginning()`: 
  - Time Complexity: O(n)
  - Space Complexity: O(1)
- `removeFromEnd()`: 
  - Time Complexity: O(1)
  - Space Complexity: O(1)
- `moveLastToFirst()`: 
  - Time Complexity: O(n)
  - Space Complexity: O(1)

Note: `unshift()` and `shift()` have O(n) time complexity because they need to shift all elements in the array.

## Key Takeaways

- `shift()`, `pop()`, and `unshift()` are powerful methods for manipulating arrays at their ends.
- These methods can be combined to create more complex operations, like moving an element from one end of an array to the other.
- Understanding the time complexity of these operations is crucial for writing efficient code, especially for large datasets.
- Real-world scenarios, like managing a playlist, can be modeled using simple data structures and array operations.

## Notes

While this implementation works well for small playlists, it may not be the most efficient for very large playlists due to the O(n) time complexity of `shift()` and `unshift()`. For large-scale applications, consider using more advanced data structures like linked lists or deques (double-ended queues) that offer O(1) time complexity for operations at both ends of the list.
