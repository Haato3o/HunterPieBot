# HunterPieBot
A simple Twitch Bot example for HunterPie-related commands.

## Requirements

- [Node.Js >= 14.7.0](https://nodejs.org/dist/v14.7.0/node-v14.7.0-x64.msi)

# Getting Started

1. **Install Node.Js on your computer if you still don't have it yet.**
2. Download or clone this repository by clicking on the green "Code" button and then on "Download ZIP".
3. Extract the files anywhere you want.
4. Open your command prompt in the folder where you extracted the files and run the following command to install all dependencies: `npm install`. If you did everything right, a `node_modules` folder should appear.
5. Open the `.env` file with a text editor and [follow these instructions](#Environmental-Variables).
6. Run `run.bat`.

## Environmental Variables

This bot uses the variables in the `.env` file to connect to your bot.

```py
# Your bot username
BOT_USERNAME =

# Your bot OAuth prefixed by oauth:, you can get it here: https://twitchapps.com/tmi/
OAUTH_TOKEN =

# Channels where you want to run the bot, If there are more than one, they need to be comma separated
CHANNEL_NAMES =

# Absolute Path to HunterPie folder
HUNTERPIE_FOLDER_PATH =
```

