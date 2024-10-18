# Dev 100 - Day [53]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

- 🍳 Healthy Breakfast: Out of food really, skipped breakfast =/
- [x] Morning Rountine: Clean Office Emails
- Breakfast for Mom 
- Morning News

### 2. ✅ To-Dos & Completed Tasks

- [Checkmate AI](https://checkmate-ai.vercel.app/)
- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report:

### 3. 📚 Learning


- 🔗 [Get Qualified Leads While you Sleep with AI](https://www.youtube.com/watch?v=1I0PvfHjaRE)
- 🔗 [This n8n AI Agent will AUTOMATE your Social Media](https://www.youtube.com/watch?v=gEL0fFCdAJQ)
- 🔗 [Run ALL Your AI Locally in Minutes (LLMs, RAG, and more)](https://www.youtube.com/watch?v=V_0dNE-H2gw)

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: efactor the multi-step process from Day 2 using the modern async/await syntax. create a function that simulates fetching data from multiple sources concurrently using `Promise.all()`.
- 🦺 Project: [Project name and brief description]
- 📝 Code Snippet: RFD Looking into server action not firing, EBT refactor entire project

```javascript
n8n:
    <<: *service-n8n
    container_name: n8n
    restart: unless-stopped
    ports:
      - 5678:5678
    volumes:
      - n8n_storage:/home/node/.n8n
      - ./n8n/backup:/backup
      - ./shared:/data/shared
    environment:
      - N8N_ENCRYPTION_KEY=super-secret-key
    depends_on:
      postgres:
        condition: service_healthy
      n8n-import:
        condition: service_completed_successfully
```

### 5. 🔄 Daily Reset

- 🧘 Power Nap

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Chicken & Shrimp with boneless wings
- Window shopping AI work stations
- Set up my own LLM localy with RAG and long term memory
- Said Hello to my Local LLM and it crashed my PC :x

### 7. 🤝 Community Support

- Async Await Lesson
- [Welcome to the Papa Fam Kenji!](https://www.skool.com/universityofcode/welcome-to-the-papa-fam-kenji?p=772c3120)

### 8. 📊 Progress Tracking

- 🏫 [Day-52](https://www.skool.com/universityofcode/dev-100-day-52)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Day-52/day52.md)
- 📄 [Notion Page](https://liberating-galley-48d.notion.site/Dev100-Coding-Lifestyle-Challenge-a85ec9fba3ce41f3b29d581a1a85d92b?pvs=4)

## Reflections and Notes
