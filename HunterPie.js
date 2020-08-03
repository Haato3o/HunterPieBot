'use strict'

const fs = require('fs');

module.exports = class HunterPie {

    Path = null;

    /**
     * Initializes a new HunterPie data exporter instance.
     * 
     * @param {String} path Absolute path for HunterPie root folder (where HunterPie.exe is located).
     */
    constructor(path) {
        if (!fs.existsSync(`${path}/HunterPie.exe`)) throw new Error(`${path} is not a valid path for HunterPie. Verify if your path is correctly pointing to where HunterPie.exe is located.`)
        this.Path = path;
    }

    /**
     * @typedef {Object} PlayerInfo
     * @property {String} Name - Current character name.
     * @property {Number} Playtime - Current character playtime.
     * @property {Number} HR - Current character high rank.
     * @property {Number} MR - Current character master rank.
     */
    /**
     * Gets basic character information.
     * 
     * @return {PlayerInfo} Player basic information.
     */
    async GetPlayerCharacter() {
        const data = await this.GetRawExportedData();
        return {
            Name: data.Name,
            Playtime: data.Playtime,
            HR: data.HR,
            MR: data.MR
        }
    }

    /**
     * @typedef {Object} BuildInfo
     * @property {String} BuildURL - Raw build URL for Honey Hunters World
     * @property {String} WeaponName - Current equipped weapon name in HunterPie's current localization.
     */
    /**
     * Gets the character build information.
     * 
     * @return {BuildInfo} Current character build information.
     */
    async GetPlayerBuild() {
        const data = await this.GetRawExportedData();
        return {
            BuildURL: data.BuildURL,
            WeaponName: data.WeaponName  
        }
    }

    /**
     * @typedef {Object} SessionInfo
     * @property {String} Session - The current Session Id used by Monster Hunter: World
     * @property {String} SteamSession - The current Session Link used by Steam. Only works if you are currently online on Steam. 
     */
    /**
     * Gets the current character session information.
     * 
     * @return {SessionInfo} The current session information
     */
    async GetPlayerSession() {
        const data = await this.GetRawExportedData();
        return {
            Session: data.Session,
            SteamSession: data.SteamSession
        }
    }

    /**
     * @typedef {Object} RawExportedData
     * @property {String} Name - Current character name.
     * @property {Number} HR - Current character High Rank.
     * @property {Number} MR - Current character Master Rank.
     * @property {String} BuildURL - Current character Honey Hunters Build link.
     * @property {String} Session - Current Session ID.
     * @property {Number} Playtime - Current character total playtime.
     * @property {String} WeaponName - Current character weapon name.
     */
    /**
     * Gets the exported data from HunterPie's folder
     * 
     * @return {RawExportedData} Exported data by HunterPie. See [Player Data Exporter](https://hunterpie.me/HunterPie/index.html?p=HunterPie/playerDataExporter.md) for more information.
     */
    GetRawExportedData() {
        return new Promise((res, rej) => {
            fs.readFile(`${this.Path}/DataExport/PlayerData.json`, 'utf-8', (err, data) => {
                if (err) rej(err); 
                else res(JSON.parse(data));
            });
        });
    }
}