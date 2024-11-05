# Dev 100 - Day [76]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

Day-65 copy- 🍳 Healthy Breakfast: [Meal description]
- [x] Morning Rountine: Clean Office, Rhythm Ready for School, Emails, Wash Bed Sheets
- Next 15 Template
- Set up Sanity In Next 15

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: 3 ToDo | 3 In Progress | 11 Done

### 3. 📚 Learning

- 🦸‍♂️ **Zero to Full Stack Hero**: [🔴 Let's build a Full Stack E-Commerce App with NEXT.JS 15 (Sanity, Stripe, Clerk, Tailwind, TS)](https://www.youtube.com/watch?v=o-fgWea75O4&t=4567s)
- 🔗 [The ONLY Personal AI Assistant You’ll Ever Need (NO CODE!) 🚀](https://www.youtube.com/watch?v=UPCul37e-M0)

### 4. 💻 Coding Progress

- 🏫 **Zero to Full Stack Hero Homework**: Project Time Sanity Store
- 🦺 Project: Alchemy Collectibles: Trading Card & Comic store, EBT - Blog Display Layout
- 📝 Code Snippet:

```javascript
<nav className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 px-6 py-4'>
          {categories.map((category) => (
            <button
              key={category.slug.current}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-lg border border-accent2-700 px-3 py-1 text-sm text-accent3-600 ${
                selectedCategory?.slug.current === category.slug.current
                  ? 'bg-accent1-200'
                  : 'bg-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </nav>

        {isLoading ? (
          <div className='flex justify-center py-8'>
            <div className='flex flex-col space-y-3'>
              <Skeleton className='h-[125px] w-[250px] rounded-xl' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          </div>
        ) : (
          <div className='mx-auto grid max-w-6xl grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <BlogCard1 blogs={blogPosts} />
          </div>
        )}
```

### 5. 🔄 Daily Reset

- 🧘 Clean up Yard from Halloween

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Steak Fried Rice & General Tsou Chicken
- Set up Clerk in Sanity Project
- Branch project into Sanity, Clerk & Sanity + Clerk Templates
- Start Sanity Store Project from Sonnys Video

### 7. 🤝 Community Support

- Worked with Ciaran a little bit on our group project

### 8. 📊 Progress Tracking

- 🏫 [Day-75](https://www.skool.com/universityofcode/dev-100-day-75)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Day-75/day75.md)
- 📄 [Notion Page](https://liberating-galley-48d.notion.site/Dev100-Coding-Lifestyle-Challenge-a85ec9fba3ce41f3b29d581a1a85d92b?pvs=4)

## Reflections and Notes

Huge catch up day today, got stuck with this component passing the slug properly using shad cn's tabs component.
