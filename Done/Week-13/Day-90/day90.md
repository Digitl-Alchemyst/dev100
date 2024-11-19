# Dev 100 - Day [Number]

## Today's Accomplishments

### 1. 🌅 Morning Productivity

🍳 Healthy Breakfast: hasbrowns eggs toast & sasusage
- [x] Morning Rountine: Clean Office, Rhythm Ready for School, Emails, Make Bed
- Couple of magic matches then straight into work.
- PR Review for oTTo-Dev

### 2. ✅ To-Dos & Completed Tasks

- [x] [Update To-Dos]
- [x] [Clear Complete Task]
- Daily To-Do Report: 4 Done from Main project BIG hang ups ive been avoiding 8 Done from other projects and errands and important chores

### 3. 📚 Learning

- 🔗 [🔴 Let's build a Full Stack E-Commerce App with NEXT.JS 15 (Sanity, Stripe, Clerk, Tailwind, TS)](https://www.youtube.com/watch?v=o-fgWea75O4&t=5424s) Specifically the Sanity TypeGen
Low education material consumption today. heavy on the work side. 

### 4. 💻 Coding Progress

- 🧠 Warm-up Exercise: Create a component-based state system that allows for state management within components, state inheritance between parent and child components, and state sharing between sibling components.
- 🏫 **Zero to Full Stack Hero Homework**:
- 🦺 Project: AI - Alchemy - Sanity Intergration. EBT - Auth Refactor reset password & email verify
- 📝 Code Snippet:

```javascript
try {
    const body = await req.json();
    console.log('📦 Password Reset Request:', body);

    const validationResult = RequestResetSchema.safeParse(body);
    console.log('✅ Schema Validation:', validationResult);

    if (!validationResult.success) {
      console.log('❌ Validation Failed:', validationResult.error.errors);
      throw new ApiError(validationResult.error.errors[0].message, 400);
    }

    const { email } = validationResult.data;
    console.log('📧 Processing Reset for:', email);

    // Check if user exists
    const usersRef = adminDb.collection('users');
    const querySnapshot = await usersRef.where('email', '==', email.toLowerCase()).get();
    console.log('🔍 User Found:', !querySnapshot.empty);

    if (querySnapshot.empty) {
      console.log('⚠️ User Not Found:', email);
      throw new ApiError('User not found', 404);
    }

    // Send reset email
    await emailService.sendPasswordResetEmail(email.toLowerCase());
    console.log('📬 Reset Email Sent Successfully');

    return sendSuccessResponse({
      message: 'Password reset instructions have been sent to your email',
    });
  }
```

### 5. 🔄 Daily Reset

- 🏋️‍♂️ Still hurting so Resting up =/
- 🧘 Chill and smoke with some news catch up

### 6. 🌤️ Afternoon Productivity

- 🍱 Healthy Lunch: Skipped Lunch =/
- Interview Prep call for wordpress job
- Chores for mom

### 7. 🤝 Community Support

- Created coding challenge for Cairan who is applying for jobs
- Talked with Fiazan about his work project it was a little outside of my knowledge scope ( his too ) but I helped him get set up with claude and gave him an overview of the projects feature. Thinking it will help him out a lot at work with the things he has little knowledge about. Honestly wish I knew more about what he was doing I would love to help him out more, and its a very cool project. 

### 8. 📊 Progress Tracking

- 🏫 [Day-89](https://www.skool.com/universityofcode/dev-100-day-89)
- 📦 [GitHub Repo](https://github.com/Digitl-Alchemyst/dev100/blob/main/Done/Week-13/Day-89/day89.md)
- 📄 [Notion Page](https://www.notion.so/Dev100-Challenge-13ecf2b3a539805eb584e1febd599205)

## Reflections and Notes

Hard day with work. couldnt solve the auth issue with the app im working, but claude had my back. I need to wrap up these last few issues and take the time to document the code. it got a little complex and I have lost track of the overall flow of both the auth system and the calculator features. Going back through and documenting and refactoring a little should help me out a lot so I dont continue to get lost in the future.
