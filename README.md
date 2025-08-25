
#  Blog

A **modern blogging platform** built with **React, TailwindCSS, Appwrite, and Vercel**.
Blog-To allows users to **create, manage, and explore blogs seamlessly** with authentication and a clean, responsive UI.

🔗 **Live Demo:** [blog-to.vercel.app](https://blog-to.vercel.app/)

---

##  Features

* 🔐 **Authentication** – User login & signup powered by Appwrite.
* 📝 **Create & Edit Blogs** – Rich text editor for publishing posts.
* 📖 **View Blogs** – Explore all published blogs.
* 👤 **User Dashboard** – Manage your own blog posts.
* 🎨 **Responsive UI** – Clean design with TailwindCSS.
* ⚡ **Deployed on Vercel** – Fast, reliable hosting.

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Styling:** TailwindCSS
* **Backend / Auth:** Appwrite
* **Deployment:** Vercel

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/blog-to.git
cd blog
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Appwrite

1. Create an account on [Appwrite Cloud](https://appwrite.io/cloud).
2. Create a **new project** (e.g., `blog-to`).
3. Get your **Project ID** and **API endpoint**.
4. Create a **Database** for storing blog posts.
5. Create a **Collection** with attributes like:

   * `title` (string)
   * `content` (string / long text)
   * `featuredImg` (string)
   * `Status` (string)
   * `userId` (string)
6. Enable **Authentication (Email/Password)** in Appwrite.

### 4️⃣ Setup Environment Variables

Create a `.env` file in your root folder and add:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

*(Make sure not to commit this file to GitHub!)*

### 5️⃣ Run the Project Locally

```bash
npm run dev
```

App runs on: **[http://localhost:5173/](http://localhost:5173/)**

---


## 🖥️ Usage

1. **Signup/Login** to your account.
2. Create a **new blog post** from the dashboard.
3. Edit or delete your own blogs anytime.
4. Browse blogs created by others.


