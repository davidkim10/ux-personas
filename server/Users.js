const Utils = require("./utils/Utils");
const utils = new Utils();

class Users {
  constructor(csv) {
    this.csv = csv;
    this._initialize();
  }

  get userDataKeys() {
    return this._userDataKeys;
  }

  get userData() {
    return this._userData;
  }

  get data() {
    return this._data;
  }

  get users() {
    return this._users;
  }

  _createUser(id, userData) {
    const quantity_hobbies = Utils.minMax(8, 12);
    const quantity_social = Utils.minMax(2, 8);
    const hobbies = utils.getHobbies(quantity_hobbies);
    const socialMedia = utils.getSocial(quantity_social);
    const degrees = utils.getDegrees();
    const user = this.userDataKeys.reduce((user, userDataKey, i) => {
      const key = userDataKey.toLowerCase().replace(/ /g, "_");
      const value = userData[i];
      const dataItem = { [key]: value };
      return {
        id,
        ...user,
        ...dataItem,
      };
    }, {});
    return { ...user, degrees, hobbies, socialMedia };
  }

  _createUsers() {
    return this.userData.map((user, i) => this._createUser(i + 1, user));
  }

  _parseUserDataKeys() {
    return this.data?.slice(0, 1)?.flatMap((item) => item);
  }

  _parseUserData() {
    return this.data.slice(1);
  }

  _transformCSV() {
    return this.csv
      .trim()
      .split("\r")
      .map((line) => line.replace("\n", "").split(","));
  }

  _initialize() {
    this._data = this._transformCSV();
    this._userDataKeys = this._parseUserDataKeys();
    this._userData = this._parseUserData();
    this._users = this._createUsers();
  }
}

module.exports = Users;
