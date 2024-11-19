# Dev 100 - Day [91]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

🍳 Healthy Breakfast: [Meal description]
- [x] Morning Rountine: Clean Office, Rhythm Ready for School, Emails, Make Bed
- Woke up late, somehow the alarm didnt go off, still got rhythm on the bus. bus was late too, that helped but we were out on time anyway. suprised it worked out
- Deep Clean Day
- Education on class constructors still dont understand this stuff. Most of the morning working on this coding challenge

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: # Done

### 3. 📚 Learning

- 🔗 [New Sony A1 II - Watch This Before You Consider It...](https://www.youtube.com/watch?v=ogn16keUx8s)
- 🔗 [Manage large-scale updates with Content Releases](https://www.youtube.com/watch?v=ArAPmUG-oag)
- 🔗 [No more copy-paste with Sanity Create w/ Automatic Content Mapping](https://www.youtube.com/watch?v=mANqmSO_vDc)
- 🔗 [Visual Editing and structured content — you can have it all](https://www.youtube.com/watch?v=YxUulW_mjs0)
- 🔗 [Resource](URL)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Create a sophisticated state management store that supports middleware, state persistence, and time-travel debugging capabilities. This implementation should provide centralized state management similar to Redux or Vuex, with advanced features for debugging and state manipulation. WOW this one was hard. I am going to be doing an entire series on this sort of thing for a better understanding. phew glad this week of challenges is done. 
- 🦺 Project: EBT - Session managment.
- 📝 Code Snippet:

Did not undertstand at all but made it work -.- need mroe study time with this type of coding.
```javascript
const baseDispatch = (action) => {
      this._state = this._reducer(this._state, action);

      if (this._historyIndex !== -1) {
        this._history = this._history.slice(0, this._historyIndex + 1);
        this._history.push({ ...this._state });
        this._historyIndex = this._history.length - 1;
      }

      this._listeners.forEach((listener) => listener());
      return action;
    };
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ [Physical Activity]
- 🧘 [Relax and Reset Activity]

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: [Meal description]
- [Activity 1]
- [Activity 2]

### 7. 🤝 Community Support

- 🔗 [Sanity Winter Release 2024](https://www.skool.com/universityofcode/sanity-winter-release-2024)
- 🔗 [Facing OAuthAccountNotLinked Error for the New Users](https://www.skool.com/universityofcode/facing-oauthaccountnotlinked-error-for-the-new-users?p=f9da13c2) I am thinking he recently upgraded from 14 to 15 and something went wrong.
- 🔗 [Contribution](URL)

### 8. 📊 Progress Tracking

- 🏫 [Day-90](https://www.skool.com/universityofcode/dev-100-day-90)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Done/Week-13/Day-90/day90.md)
- 📄 [Notion Page](https://www.notion.so/Dev100-Challenge-13ecf2b3a539805eb584e1febd599205)

## Reflections and Notes

[Add any additional thoughts, challenges, or achievements from the day]
