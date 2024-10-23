# Dev 100 - Day [57]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

- 🍳 Healthy Breakfast: Turkey Sausage & Eggs
- [x] Morning Rountine: Clean Office, Rhythm Ready for School, Emails, Make Bed
- MTG matches
- Chores for mom & breakfast

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: 1 ToDo | 1 In Progress | 3 Done

### 3. 📚 Learning

- 🔗 [Don't Sleep on the ULTIMATE AI Agent Combo (n8n, LangChain, Python)](https://www.youtube.com/watch?v=8hAMASB-RpM)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: In this challenge, you will work with two fundamental array methods in JavaScript: `map()` and `filter()`. Your task is to transform an array of numbers by first squaring each number and then filtering out the odd results.
- 🦺 Project: EBT - Sanity CMS Overhaul
- 📝 Code Snippet: 

```javascript
*[_type == 'blog'] | order(_createdAt desc) {
    _type,
    titleImage,
    title,
    subtitle,
    "slug": slug.current,
    excerpt,
    intro,
    body1,
    midImage,
    body2,
    conclusion,
    "categories": categories[]->,
    "author": author->,
    publishedAt
  }
```

### 5. 🔄 Daily Reset

- 🧘 Political Debates on TikTok & News Catch up

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Tuna Sandwich
- ID Preperation
- Errands for Mom

### 7. 🤝 Community Support

- Shared my New Tailwind CSS plugin with the team I am working with on personal Project
- See code at bottom to try the theme plugin yourself

How it works The function can be placed in the tailwind config file, then you extend your tailwind colors where the color takes the function with a hex color code as a single arguement and returns light and dark shades 100-900. I am currently using this as a theming plugin so i have set 3 accent colors along with a light and dark color (near black and near white). So for the project I made this in I have 5 colors total 3 accents light and dark. in my code I use only these 5 colors bg-dark-800 text-light-400 border-accent1-500. So now if I want to change colors in my theme its as simple as a single hex value I do not have to go in and generate shades and swap out 50 colors to change the entire site, its as simple as 5 colors and the function handles the rest. 



### 8. 📊 Progress Tracking

- 🏫 [Day-56](https://www.skool.com/universityofcode/dev-100-day-56)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Day-56/day56.md)
- 📄 [Notion Page](https://liberating-galley-48d.notion.site/Dev100-Coding-Lifestyle-Challenge-a85ec9fba3ce41f3b29d581a1a85d92b?pvs=4)

## Reflections and Notes

```javascript
theme: {
    extend: {
      colors: {
        dark: generateShades('#1A102B'), // Example dark color
      },
    },
  },
```

```bash
npm i chroma-js
```

```ts
const chroma = require('chroma-js');

function generateShades(baseColor: string): { [key: number]: string } {
  const scale = chroma
    .scale([chroma(baseColor).brighten(2), baseColor, chroma(baseColor).darken(2)])
    .mode('lab')
    .colors(9); // Generates 9 shades from light to dark
  const shades = {
    100: scale[0],
    200: scale[1],
    300: scale[2],
    400: scale[3],
    500: scale[4], // main color
    600: scale[5],
    700: scale[6],
    800: scale[7],
    900: scale[8],
  };
  return shades;
}
```