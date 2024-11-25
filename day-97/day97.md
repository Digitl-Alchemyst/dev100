# Dev 100 - Day [Number]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

🍳 Healthy Breakfast: Skipped for early lunch turkey Sandwich & Chips from favorite deli
- [x] Morning Routine: Clean Office, Emails
- Mom Doc Appointment
- Interview for advisorycloud
- Dusting office PC build prep

### 2. ✅ To-Dos & Completed Tasks

- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: # Done

### 3. 📚 Learning

- 🔗 [This Folder Structure Makes Me 100% More Productive](https://www.youtube.com/watch?v=xyxrB2Aa7KE)
- 🔗 [Web Developer Looking Job Live](https://www.youtube.com/watch?v=FiLgomQeOM0)
- 🔗 [Do we really need NPUs now?](https://www.youtube.com/watch?v=a9NprGqBr54)
- 🔗 [How To Handle Permissions Like A Senior Dev](https://www.youtube.com/watch?v=5GG-VUvruzE)
- 🔗 [Building AI-powered Resume App](https://www.youtube.com/watch?v=e8w_PJLKHuM)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Create a flexible content management system that can handle different types of content (articles, videos, podcasts) with shared and unique properties. Use union and intersection types to create a type-safe system for managing mixed content types while maintaining specific type information.
- 🦺 Project: Ai-Alchemy - Add content to Sanity
- 📝 Code Snippet:

```javascript
    create<T extends Content['type']>(content: CreateContentPayload<T>): Content {
        const id = this.generateId();
        const timestamp = new Date();

        const newContent = {
            ...content,
            id,
            created: timestamp,
            modified: timestamp
        } as Content;

        this.contents.set(id, newContent);
        return newContent;
    };
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ [Physical Activity]
- 🧘 Power nap with some learning videos in the background, rewatched when I woke up

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: [Meal description]
- Work on Cleaning out garage
- [Activity 2]

### 7. 🤝 Community Support

- Active in Lazars live this morning
- Active in Coding Phase live stream today
- All missed Skool post caught up

### 8. 📊 Progress Tracking

- 🏫 [Day-96](https://www.skool.com/universityofcode/dev-100-day-96)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Done/Week-14/Day-96/day96.md)
- 📄 [Notion Page](https://www.notion.so/Dev100-Challenge-13ecf2b3a539805eb584e1febd599205)

## Reflections and Notes

[Add any additional thoughts, challenges, or achievements from the day]
