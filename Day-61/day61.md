# Dev 100 - Day [61]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

- 🍳 Healthy Breakfast: Turkey Sausage Hashbrowns Toast Eggs
- [x] Morning Rountine: Clean Office, Emails
- MTG Matches
- Working on Rhythms Halloween Costume

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: 3 ToDo | 1 In Progress | 3 Done

### 3. 📚 Learning

- 🦸‍♂️ **Zero to Full Stack Hero**: shift(), reverse(), pop()
- 🔗 Optimus Prime Costume tutorial on repeat all day.

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: In this challenge, you will create a Playlist class that simulates a music playlist. You'll use the array methods `shift()`, `pop()`, and `unshift()` to manipulate the order of songs in the playlist. This challenge will help you understand how these methods can be used to modify arrays in different ways.
- 🦺 Project: EBT - Collect user Info, Sanity fixes
- 📝 Code Snippet:

```javascript
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
```

### 5. 🔄 Daily Reset

- 🧘 Reading with Kids

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Pizza & Smoothie
- Working on Rhythms Costume

### 7. 🤝 Community Support

- Teaching my brother the basics of development, AI (bolt.new) has peaked his interest. I have actually been trying to get him into this for about a year now. 

### 8. 📊 Progress Tracking

- 🏫 [Day-60](https://www.skool.com/universityofcode/dev-100-day-60)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Day-60/day60.md)
- 📄 [Notion Page](https://liberating-galley-48d.notion.site/Dev100-Coding-Lifestyle-Challenge-a85ec9fba3ce41f3b29d581a1a85d92b?pvs=4)

## Reflections and Notes

Focus was on my sons halloween costume today, it is handmade and a big task. Dont have the materials or supplies to pull this off but going to make a miricle happen
