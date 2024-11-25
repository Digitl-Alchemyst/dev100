# Dev 100 - Day [96]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

🍳 Healthy Breakfast: Hashbrowns,Sausage,Toast,Eggs
- [x] Morning Routine: Clean Office, Emails, Make Bed
- Shopping for hosuehold items
- MTG Matches 2-1

### 2. ✅ To-Dos & Completed Tasks

- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: # Done

### 3. 📚 Learning

- 🔗 [How I Built It: $37K/Month Notion App](https://www.youtube.com/watch?v=WuzxmeUP6ro)
- 🔗 [How I create McKinsey Visuals in SECONDS with AI](https://www.youtube.com/watch?v=Xv_aYCt-Vco)
- 🔗 [Build and Deploy Full Stack AI GitHub SaaS | Next JS 15, Google Gemini AI, Assembly AI, Stripe](https://www.youtube.com/watch?v=OqlI2766LCk)
- 🔗 [Addition of Two Variables using C](https://www.youtube.com/watch?v=b3OCED4aBmI)
- 🔗 [My Framework For Signing AI Automation Clients](https://www.youtube.com/watch?v=XomjbItJ-L0)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Create a generic repository pattern implementation that can handle different types of entities while maintaining type safety. This system should provide basic CRUD (Create, Read, Update, Delete) operations and support custom filtering and sorting capabilities.
- 🦺 Project: Docubot - Add github intergation
- 📝 Code Snippet:

```typescript
    create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
        const id = this.generateId();
        const timestamp = new Date();

        const newItem = {
            ...item,
            id,
            createdAt: timestamp,
            updatedAt: timestamp,
        } as T;
        this.items.set(id, newItem);
        return newItem;
    }
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ Yoga
- 🧘 Play time with kids

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Turkey Sandwich Peanut butter Crackers
- Grocery Run for Mom
- Finish Super Deep Clean of office

### 7. 🤝 Community Support

- 🔗 [Help! require style import is forbidden](https://www.skool.com/universityofcode/help-require-style-import-is-forbidden)
- 🔗 [Upload an image to Sanity](https://www.skool.com/universityofcode/upload-an-image-to-sanity)


### 8. 📊 Progress Tracking

- 🏫 [Day-95](https://www.skool.com/universityofcode/dev-100-day-95)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Done/Week-14/Day-95/day95.md)
- 📄 [Notion Page](https://www.notion.so/Dev100-Challenge-13ecf2b3a539805eb584e1febd599205)

## Reflections and Notes

Smooth day today, came in with a solid plan to maximize the day despite the PC situation.
