# Telegram Mini App

## Overview

The **Telegram Mini App** is a web application built with React, Vite, and TypeScript. This project demonstrates a mini Telegram bot interface. The app integrates with Telegram to offer various features and utilities, enhancing user interaction with Telegram content.

## Features

- **Telegram Bot Integration**: Access and interact with the Telegram bot directly within the app. The bot can be accessed via [@zodiac_react_bot](https://t.me/zodiac_react_bot).

## Technologies

- **Frontend**: React, Vite, TypeScript
- **Styling**: CSS
- **Deployment**: GitHub Pages for hosting the live version

## Live Demo

You can view the live version of the application at: [https://kichukegor.github.io/telegram-mini-app/](https://kichukegor.github.io/telegram-mini-app/)
https://core.telegram.org/bots/webapps
##Links
Official docs: [https://core.telegram.org/bots/webapps](https://core.telegram.org/bots/webapps)

## Quick setup

#### 0. Host the Web App in GitHub Pages

The Web App must be hosted somewhere. Hosting it on a GitHub repository is a quick, free way to do it:

1. Create a repository (or fork this one)
2. On the repository: Settings > Pages:
    - Source: Deploy from a branch
    - Branch: master, / (root), Save
3. Wait a few minutes for the web to be deployed. It will be available at: `https://{github-username}.github.io/{repository-name}/{location-inside-repository}`

#### 1. Show the user a button to open a Web App. There are two ways:

1. Show the user a special menu button (near the message input field):
    1. Go to [Bot Father](https://t.me/BotFather)
    2. Select your bot
    3. `Bot Settings` — `Menu Button` — `Specify..`/`Edit menu button URL`
    4. Send a URL to your Web App (in this case, `https://{github-username}.github.io/{repository-name}/index.html`)

2. The second way is to send a button with the data that contains field `web_app` with a URL to a Web App:
    ```json
    {
        "text": "Test web_app",
        "web_app": {
            "url": "https://{github-username}.github.io/{repository-name}/index.html"
        }
    }
    ```

#### 2. Add script to your Web App

To connect a Web App to the Telegram client, place the script `telegram-web-app.js` in the `<head>` tag before any other scripts, using this code ([more info](https://core.telegram.org/bots/webapps#initializing-web-apps)):
```html
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

Once the script is connected, a `window.Telegram.WebApp` object will become available.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

