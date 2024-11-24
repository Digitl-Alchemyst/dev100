# Dev 100 - Day [95]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

🍳 Healthy Breakfast: Muffins
- [x] Morning Routine: Clean Office, Rhythm Ready for School, Emails, Make Bed
- Trying old video cards in my machine so I can run back ups on a few things. 
- Slept in today felt super nice 
- Finish organizing Camera ger & old Electronics 
- Setup Docker on backup PC

### 2. ✅ To-Dos & Completed Tasks


- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: 2 Done

### 3. 📚 Learning

- 🦸‍♂️ **Zero to Full Stack Hero**: JavaScript Essentials Mentor Call
- 🔗 [How I Sign Clients For My AI Automation Agency (Revealing My Secret Method)](https://www.youtube.com/watch?v=XomjbItJ-L0)
- 🔗 [🔴 Let’s build an AI NOTION Clone with NEXT.JS 14! (Realtime Collab, Cloudflare, Clerk, Firebase)](https://www.youtube.com/watch?v=shX6N1FOx-0&t=1187s&pp=ygUTbnRpb24gY2xvbmUgbmV4dCBqcw%3D%3D)
- 🔗 [Resource](URL)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Convert a JavaScript role-playing game character system to TypeScript, implementing proper class hierarchy, access modifiers, and abstract classes. Create a system that manages different types of game characters (warriors, mages, rogues) with specific abilities and attributes.
- 🦺 Project: Card Street: card databases, AI-Alchemy: add inital blogs
- 📝 Code Snippet:

```javascript
abstract class Character implements ICharacter {
    public readonly id: string;
    public name: string;
    public level: number;
    protected stats: CharacterStats;

    constructor(name: string) {
        // TODO: Initialize character properties
        this.id = Math.random().toString(36).substring(2, 9)
        this.name = name
        this.level = 1;
        this.stats = this.getInitialStats();
    }

    protected abstract getInitialStats(): CharacterStats;

    public getStats(): CharacterStats {
        return { ...this.stats };
    }

    public abstract attack(target: ICharacter): number;

    public levelUp(): void {
        this.level++
        this.updateStats();
    }

    protected abstract updateStats(): void;
}
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ Strech & rest
- 🧘 Story time with Pheonix

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Turkye Sandwich
- Starting to put all my organized Stuff Away
- Light work on AI alchemy

### 7. 🤝 Community Support

- Catching up on Skool Group
- Catching up on oTToDdev Group

### 8. 📊 Progress Tracking

- 🏫 [Day-94](https://www.skool.com/universityofcode/dev-100-day-94)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Done/Week-14/Day-94/day94.md)
- 📄 [Notion Page](https://www.notion.so/Dev100-Challenge-13ecf2b3a539805eb584e1febd599205)

## Reflections and Notes

