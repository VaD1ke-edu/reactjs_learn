export default class Developer {
    /**
     * @param {string} name
     * @param {string} level
     */
    constructor(name, level = 'junior') {
        this._name  = name;
        this._level = level;
    }

    /**
     * @param {string} name
     * @return {this}
     */
    setName(name) {
        this._name = name;
        return this;
    }

    /**
     * @return {string}
     */
    getName() {
        return this._name;
    }

    /**
     * @param {string} level
     * @return {this}
     */
    setLevel(level) {
        this._level = level;
        return this;
    }

    /**
     * @return {string}
     */
    getLevel() {
        return this._level;
    }

    /**
     * @return {string}
     */
    getInfo() {
        return `I am a developer.\nMy name is ${this._name}.\nMy level is ${this._level}`;
    }
}
