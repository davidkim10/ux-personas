const getDegrees = require("./getDegrees");
const getHobbies = require("./getHobbies");
const getSocialMedia = require("./getSocialMedia");
class Utils {
  constructor() {
    this._hobbies = getHobbies();
    this._degrees = getDegrees();
    this._social = getSocialMedia();
  }

  getHobbies = (quantity) => {
    return this.randomSort(this._hobbies, quantity);
  };

  getDegrees = (quantity) => {
    return this.randomSort(this._degrees, quantity);
  };

  getSocial = (quantity) => {
    return this.randomSort(this._social, quantity);
  };

  randomSort(list, quantity = 1) {
    return list.sort(() => Math.random() - Math.random()).slice(0, quantity);
  }
}

module.exports = Utils;
