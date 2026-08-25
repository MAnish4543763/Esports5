# Manifest Esports Website

GitHub-ready static website structure.

## Folder structure

```text
manifest-esports/
├── index.html
├── login.html
├── signup.html
├── profile.html
├── settings.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── hero-background.jpg
    ├── tournament-1.jpg
    ├── tournament-2.jpg
    ├── tournament-3.jpg
    ├── tournament-4.jpg
    ├── tournament-5.jpg
    └── tournament-6.jpg
```

## Important

The `images` folder contains a placeholder file. Replace the image filenames with your actual images.

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders while preserving the structure.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.
7. GitHub will publish `index.html` as the website homepage.

## Authentication note

The current login/signup system is a front-end demonstration using `localStorage`.

It is NOT secure authentication and should not be used for real user accounts or sensitive information.

A real production login system will later need a backend/database and proper authentication.
