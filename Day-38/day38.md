# Dev 100 - Day [38]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

- 🍳 Healthy Breakfast: Big Bowl of cereal
- [x] Morning Rountine: Make Bed, Clean Office, Rhythm Ready for School, Emails
- Interview React Engineer

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [X] [Update To-Dos]
- [X] [Clear Complete Task]
- Daily To-Do Report: 8 To-Dos, 1 in Progress, 3 Done

### 3. 📚 Learning

- 🔗 Various Docs: Next Auth / Auth js , claude
- 🔗 [A Scrum Master's Guide to Jira | Atlassian Jira](https://www.youtube.com/watch?v=Jzfo2r-ah5I) [Part-1]

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Create a prototype-based inheritance structure for different types of vehicles in JavaScript. This challenge aims to reinforce understanding of prototypal inheritance, a fundamental concept in JavaScript's object-oriented programming model. You'll start with a base Vehicle prototype, then create Car and Motorcycle prototypes that inherit from Vehicle. Each should have unique properties and methods, demonstrating how inheritance and prototype chains work in JavaScript.
- 🦺 Project: RFD - Auth flow refactor, Created daily coding lessons for website

```javascript
function createCar(make, model, year, doors) {
  // Your code here
  const car = Object.create(createVehicle('car', make, model, year));
  car.doors = doors;
  car.info = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model} with ${this.doors} doors.`);
  };
  car.honk = function () {
    console.log('Beep Beep!');
  };
  return car;
}
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ Deep Streches
- 🧘 Play time with kids

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Microwave crap and snacks wife was shopping
- Lots of project refactoring
- Reading time with Rhythm

### 7. 🤝 Community Support

- Helping Ben with email verification in auth.js

### 8. 📊 Progress Tracking

- 🏫 [Day-37]([URL-to-daily-log](https://www.skool.com/universityofcode/dev-100-day-37))
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Day-37/day37.md)
- 📄 [Notion Page](https://liberating-galley-48d.notion.site/Dev100-Coding-Lifestyle-Challenge-a85ec9fba3ce41f3b29d581a1a85d92b?pvs=4)

## Reflections and Notes

Son stuck a toy up his nose spent the evening and night in the ER to get it out. Kind of derailed my day, but finishing up left over task in the monring. All thats left is my daily coding challenge, so I will ahve 2 for Saturday to stay on track. Finished my daily coding challenge, Jira video from yesterday in the morning. Onto Day-39 Now
