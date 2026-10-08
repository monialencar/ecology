# Monielle Alencar — Personal Academic Website
**Complete Website & Deployment Guide**

This folder contains the complete, ready-to-deploy website files for **Monielle Alencar** (Ph.D. Student in Biology at Temple University, Sewall Conservation Ecology Lab).

---

## 🌟 Key Features

1. **🌐 Bilingual Support (English & Portuguese)**:
   - Includes an instant **`EN | PT`** language switcher button in the top menu bar.
   - Clicking **PT** instantly switches all text, headings, bios, research topics, and publications into Portuguese.
   - Clicking **EN** switches back to English.
   - Remembers the user's language choice as they navigate between pages.

2. **📱 100% Mobile & Tablet Responsive**:
   - Custom card layouts designed specifically to look clean and legible on smartphones and desktop screens.
   - Large, clear font size (`19.5px` desktop / `18px` mobile) and comfortable spacing.

3. **🎨 Botanical Emerald & Earth Gold Aesthetic**:
   - Designed around a plant community & conservation ecology palette (Deep Evergreen `#1C382B`, Leaf Green `#2D5442`, Earth Gold `#C29043`, Soft Cream `#F8F6F0`).

4. **📂 Pre-Packaged Assets & CV**:
   - Includes all high-resolution photos extracted from your PowerPoint mockup (`Photos/`).
   - Includes your current CV PDF (`Monielle_Alencar_CV.pdf`) with direct download buttons.
   - Hyperlinks to **Sewall Conservation Ecology Lab** (`https://sites.temple.edu/bjsewall/`), **LEB-UFMA**, and **Instagram** (`@ecologybymoni`).

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

Follow these simple steps to make your website live on the internet for free:

### Step 1: Create a Free GitHub Account
1. Go to [github.com](https://github.com/) and sign up for a free account.
2. Choose a professional username (e.g. `monielle-alencar` or `moniellealencar`).

### Step 2: Create a New Repository
1. Click the **`+`** icon in the top right corner and select **New repository**.
2. Name the repository: **`monielle-alencar.github.io`** (replace `monielle-alencar` with your exact GitHub username).
3. Make sure the repository is set to **Public**.
4. Click **Create repository**.

### Step 3: Upload Website Files
1. On your computer, open the folder: **`Monielle Website Materials` $\rightarrow$ `github website`**.
2. Select **all files and folders inside `github website`** (press `Cmd + A` on Mac or `Ctrl + A` on Windows to select `index.html`, `about.html`, `research.html`, `sharing.html`, `publications.html`, `contact.html`, `Monielle_Alencar_CV.pdf`, `css`, `js`, `Photos`).
3. On GitHub.com, click **Add file** $\rightarrow$ **Upload files**.
4. Drag and drop all those selected files directly into the browser upload box.
5. Scroll down and click the green **Commit changes** button.

### Step 4: Verify Deployment
1. Click **Settings** (top tab of your repository) $\rightarrow$ **Pages** (on the left menu).
2. Under **Build and deployment**, ensure **Source** is set to **Deploy from a branch** and **Branch** is set to **`main` / `(root)`**.
3. Wait 1–2 minutes, then visit your live website at:
   👉 **`https://monielle-alencar.github.io`**

---

## ✏️ How to Edit & Update Content in the Future

Whenever you want to add a new publication, update your CV, or edit text:

### 1. Updating Text (English & Portuguese)
Open any `.html` file (e.g., `about.html` or `publications.html`) in any text editor (like VS Code, TextEdit, or directly on GitHub.com by clicking the pencil icon):
- Text inside `<span class="lang-en">...</span>` is shown when **EN** is selected.
- Text inside `<span class="lang-pt" style="display:none;">...</span>` is shown when **PT** is selected.
- Simply edit the text in both language tags to keep them in sync!

### 2. Updating Your CV
1. Replace `Monielle_Alencar_CV.pdf` in the `github website` folder with your new PDF file (keep the exact filename `Monielle_Alencar_CV.pdf`).
2. Upload the new PDF file to your GitHub repository.

### 3. Adding New Publications
Open `publications.html` and copy one of the `<div class="pub-item">...</div>` blocks to add a new paper or book chapter!

---

## 📁 File Directory Overview

```
github website/
├── index.html              # Home Page (EN & PT)
├── about.html              # About Me & Skills (EN & PT)
├── research.html           # Current Ph.D. & Previous M.S./B.S. Research (EN & PT)
├── sharing.html            # Science Communication, Ribeirinho Outreach & Fellowships (EN & PT)
├── publications.html       # Peer-Reviewed Journal Articles & Book Chapters
├── contact.html            # Contact Details, Address & Social Links
├── Monielle_Alencar_CV.pdf # Current Academic CV
├── css/
│   └── style.css           # Styling, Colors & Mobile Responsiveness
├── js/
│   └── main.js            # Bilingual EN|PT Language Switcher Logic
└── Photos/                 # Optimized High-Res Website Photos
```
