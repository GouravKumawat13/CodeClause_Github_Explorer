# GitHub Explorer 🔍

GitHub Explorer is a simple web-based application that allows users to search for GitHub profiles and view basic user information in real time using the GitHub REST API.

---

## 🚀 Features

- Search GitHub users by username
- Fetch real-time data using GitHub REST API
- Display user profile details:
  - Username with profile link
  - Profile picture (avatar)
  - Full name
  - Followers count
  - Public repositories count
- Clean and responsive user interface
- Lightweight and easy to use

---

## 🛠️ Technologies Used

- **HTML** – Page structure  
- **CSS** – Styling and layout  
- **JavaScript** – Logic and API handling  
- **GitHub REST API** – Fetching user data  

---

## 📁 Project Structure
```
GitHub-Explorer/
│
├── index.html # Main HTML file
├── styles.css # Styling file
├── script.js # JavaScript logic
└── back3.jpg # Background image (optional)
```

---

## ⚙️ How It Works

1. User enters a GitHub username in the input field.
2. On clicking the **Search** button, a request is sent to the GitHub REST API.
3. The API returns user data in JSON format.
4. JavaScript dynamically updates the DOM to display user details on the page.

---

## ▶️ How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/GouravKumawat13/CodeClause_Github_Explorer.git
   
2. Navigate to the project folder:
    - cd Github explorer

3. Open index.html in your browser OR use Live Server in VS Code.

---

## 📌 Example API Used
- https://api.github.com/users/{username}

---

## 🔮 Future Enhancements

- Display user repositories list
- Add loading spinner and error messages
- Handle API rate limits
- Improve UI with dark mode
- Add input validation

---

## 🙌 Acknowledgements

- GitHub REST API Documentation
- Open-source community
