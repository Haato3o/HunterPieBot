> **READ THIS:** This bot still works, however, HunterPie now supports plugins and it's highly recommended to use the [Twitch Integration plugin](https://github.com/Haato3o/HunterPie.Plugins/tree/master/TwitchIntegration) instead. It's faster, has the same features + have direct access to HunterPie and it's a lot easier to install.


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

This bot uses the variables in the `.env` file to connect to your bot. Example:

```py
# Your bot username
BOT_USERNAME = MyBotName

# Your bot OAuth prefixed by oauth:, you can get it here: https://twitchapps.com/tmi/
OAUTH_TOKEN = oauth:myBotOauthToken1234

# Channels where you want to run the bot, If there are more than one, they need to be comma separated
CHANNEL_NAMES = Haato__

# Absolute Path to HunterPie folder with foward slashes
HUNTERPIE_FOLDER_PATH = C:/Users/Documents/Haato/HunterPie
```

## Supported Commands

Here's a list of the current supported commands for this bot:

Command name | Description | Bot response
:-----------:|:--------------------------------------------------|:---------
!id          | Sends your current session ID to your Twitch chat. | `Session Id: 1@a2SdxK63aW`
!build       | Sends your current build to your Twitch chat, the link is to Honey Hunters World, but it's shortened using Tinyurl. | `My current Bow build: https://tinyurl.com/y6av65mw`
!rank        | Sends your current character basic information to your Twitch chat. | `Lyss \| HR: 308 \| MR: 129 \| Playtime: 1024:25:30`
