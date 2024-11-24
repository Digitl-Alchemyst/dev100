# Library Management System - JavaScript Coding Challenge

## Overview
Create a Library Management System using JavaScript/Node.js that demonstrates your ability to build a well-structured API with proper data handling and business logic implementation.

## Time Allocation
- Core Features: Day 1
- Advanced Features: Day 2
- Bonus Features: 2 hours (optional)

## Core Requirements

### 1. Database Schema
Design and implement using MongoDB or SQL database with the following collections/tables:

#### Required Entities
- Books (id, title, author(s), ISBN, publication_year, status, format, location, copies_available)
- Members (id, name, email, phone, address, membership_date, status, role)
- Staff (id, name, email, role, permissions, last_login)
- Borrowing Records (id, book_id, member_id, borrow_date, due_date, return_date, fine_amount)
- Categories (id, name, description, parent_category_id)
- Digital Resources (id, title, type, url, access_level, license_info)
- Books
  ```javascript
  {
    id: string
    title: string
    author: string
    ISBN: string
    publicationYear: number
    status: enum['available', 'borrowed', 'maintenance']
    category: string
    copies: number
  }
  ```
- Members
  ```javascript
  {
    id: string
    name: string
    email: string
    membershipDate: Date
    status: enum['active', 'suspended']
    borrowedBooks: number
  }
  ```
- Borrowing Records
  ```javascript
  {
    id: string
    bookId: string
    memberId: string
    borrowDate: Date
    dueDate: Date
    returnDate: Date
    status: enum['active', 'returned', 'overdue']
  }
  ```

### 2. Required Features

#### Catalog Management
- Complete CRUD operations for books and media
- Barcode generation and management
- Multi-format support (books, e-books, journals, DVDs)
- Location tracking (shelf, section, floor)
- Copy management and status tracking
- Book condition tracking

#### User Management
- Member registration and profile management
- Role-based access control (RBAC)
- Library card generation
- Password management and recovery
- Activity logging and history
- Fine/payment tracking

#### Circulation Management
- Check-out processing with validation
- Check-in processing with condition assessment
- Renewal handling
- Reservation system
- Due date management
- Overdue processing
- Fine calculation

#### Search and Discovery
- Basic search (title, author, ISBN)
- Advanced search with multiple criteria
- Category/genre browsing
- Recommendation system
- New acquisitions showcase
- Search history tracking

### 3. API Requirements

#### Book Management API
- POST /api/books - Add new book
- GET /api/books - List all books
- GET /api/books/:id - Get book details
- PUT /api/books/:id - Update book
- DELETE /api/books/:id - Remove book
- GET /api/books/search - Search books by title/author/ISBN

#### Member Management API
- POST /api/members - Register new member
- GET /api/members - List all members
- GET /api/members/:id - Get member details
- PUT /api/members/:id - Update member
- GET /api/members/:id/history - View borrowing history

#### Borrowing Operations API
- POST /api/borrow - Check out book
- PUT /api/borrow/:id/return - Return book
- GET /api/borrow/overdue - List overdue books
- GET /api/borrow/active - List active borrowings

### 3. Business Rules to Implement

- Members can borrow max 5 books at a time
- Loan period is 14 days
- Members with overdue books cannot borrow more books
- Books with 0 copies available cannot be borrowed
- Return date must be automatically set when book is returned
- Overdue status must be automatically calculated
#### Borrowing Rules
- Maximum items per member: 5
- Loan period: 14 days for books, 7 days for media
- Maximum renewals: 2
- No borrowing with overdue items
- No borrowing with unpaid fines > $10
- Reference materials cannot be borrowed

#### Membership Rules
- Membership valid for 1 year
- Grace period of 7 days for renewal
- Three membership tiers: Basic, Premium, Student
- Different borrowing limits per tier

#### Fine Structure
- Overdue fine: $0.50 per day
- Maximum fine per item: $20
- Damaged item: Replacement cost + $10
- Lost item: Replacement cost + $15

## Technical Requirements

### Required Stack
- Frontend: React or Next
- Backend: Node.js with Express
- Database: MongoDB or PostgreSQL
- Testing: Jest
- API Documentation: Swagger/OpenAPI

### Expected Deliverables
1. Source code in a GitHub repository
2. README with:
   - Setup instructions
   - API documentation
   - Database schema
   - Assumptions made
3. Basic test suite
4. Postman collection for API testing

### Code Quality Requirements
- Proper error handling with appropriate status codes
- Input validation using a validation library
- Consistent code style (ESLint + Prettier)
- Modular design with separate routes, controllers, and services
- Environment variable configuration
- Basic logging implementation

## Choose 1-2 Bonus Features (Optional)

1. Search & Filter System
   - Advanced search with multiple criteria
   - Filter by category, status, availability
   - Sort results by different fields
   - Pagination implementation

2. Reservation System
   - Reserve unavailable books
   - Waitlist management
   - Automatic notification when book is available
   - Reserve expiration after 24 hours

3. Fine Calculator
   - Calculate overdue fines
   - Fine rate: $0.50 per day
   - Maximum fine cap at $20
   - Fine payment tracking

4. Basic Analytics
   - Most borrowed books
   - Active members report
   - Overdue statistics
   - Daily/weekly borrowing trends

2. Smart Recommendations
   - ML-based book recommendations
   - Reading pattern analysis
   - Personalized suggestions
   - Similar book finder

3. Digital Library Integration
   - E-book management
   - Digital content delivery
   - Online reading interface
   - Digital rights management

4. Mobile Experience
   - Progressive Web App
   - Mobile-first design
   - Barcode scanner integration
   - Offline capability

5. Advanced Analytics
   - Reading trends analysis
   - Popular books dashboard
   - Member engagement metrics
   - Predictive analytics

6. Social Features
   - Book reviews and ratings
   - Reading groups
   - Book discussions
   - Social sharing

7. Inventory Management
   - RFID integration
   - Automated inventory
   - Loss prevention
   - Condition tracking

8. Event Management
   - Library events calendar
   - Event registration
   - Room booking system
   - Equipment reservation

9. Multi-language Support
   - UI internationalization
   - Multi-language catalog
   - RTL support
   - Language detection

10. Advanced Communication
   - Email notifications
   - SMS alerts
   - Push notifications
   - Chat support system

11. Financial Management
   - Payment processing
   - Subscription handling
   - Fine management
   - Budget tracking

12. Inter-library Network
   - Book sharing network
   - Universal search
   - Transfer requests
   - Network analytics

13. Accessibility Features
   - Screen reader support
   - High contrast mode
   - Keyboard navigation
   - Audio descriptions
## Evaluation Criteria

1. Code Quality (40%)
   - Clean, readable code
   - Proper error handling
   - Good separation of concerns
   - Consistent coding style

2. Functionality (30%)
   - All core features working
   - Business rules properly implemented
   - API endpoints working as expected
   - Edge cases handled

3. Testing (15%)
   - Basic test coverage
   - Edge case testing
   - API endpoint testing
   - Business logic testing

4. Documentation (15%)
   - Clear README
   - API documentation
   - Code comments
   - Setup instructions

## Submission Guidelines

1. Share GitHub repository link
2. Include clear setup instructions
3. Provide test data or seed script
4. Document any known limitations

1. Code Repository
   - Public GitHub repository
   - Well-documented commits
   - Branch strategy
   - PR templates

2. Documentation
   - Markdown format
   - Clear structure
   - Examples included
   - Troubleshooting guide

3. Demo
   - Live demo URL
   - Demo credentials
   - Test data
   - Feature walkthrough

4. Presentation
   - Architecture overview
   - Technical decisions
   - Challenges faced
   - Future improvements
   
## Tips for Success

1. Focus on core features first
2. Use async/await for database operations
3. Implement proper validation
4. Handle edge cases
5. Write clear error messages
6. Keep the code modular
7. Add basic logging
8. Test main functionality
