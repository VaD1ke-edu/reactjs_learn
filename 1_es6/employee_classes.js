class Human {
    constructor() {
        this._name = this._age = this._dateOfBirth = null;
    }

    /**
     * @param {string} name
     * @returns {this}
     */
    setName(name) {
        this._name = name;
        return this;
    }

    /**
     * @param {number} age
     * @returns {this}
     */
    setAge(age) {
        this._age = age;
        return this;
    }

    /**
     * @param {string} date
     * @returns {this}
     */
    setDateOfBirth(date) {
        this._dateOfBirth = date;
        return this;
    }

    /**
     * @param {string} delimiter
     * @returns {string}
     */
    displayInfo(delimiter = "\n") {
        return this.getDisplayingData().join("\n");
    }

    /**
     * @returns {array}
     */
    getDisplayingData() {
        let params = this._getDisplayingParams();
        let result = [];

        for (let i in params) {
            const param = params[i];
            if (!this[param]) continue;
            result.push(this.constructor._beautifyParam(param) + ': ' + this[param]);
        }

        return result;
    }

    _getDisplayingParams() {
        return ['_name', '_age', '_dateOfBirth'];
    }

    static _beautifyParam(param) {
        param = param.replace('_', '');
        return param.charAt(0).toUpperCase() + param.slice(1);
    }
}


class Employee extends Human {
    constructor() {
        super();
        this._salary = this._department = null;
    }

    /**
     * @param {number} salary
     * @returns {this}
     */
    setSalary(salary) {
        this._salary = salary;
        return this;
    }

    /**
     * @param {string} department
     * @returns {this}
     */
    setDepartment(department) {
        this._department = department;
        return this;
    }


    _getDisplayingParams() {
        const parentParams = super._getDisplayingParams();
        const selfParams   = ['_salary', '_department'];
        return [...parentParams, ...selfParams];
    }
}


class Developer extends Employee {
    /**
     * @param {Manager} manager
     */
    constructor(manager = null) {
        super();
        this._manager = manager;
    }

    /**
     * @param {Manager|null} manager
     * @returns {this}
     */
    setManager(manager) {
        this._manager = manager;
        this._manager.addDeveloper(this);
        return this;
    }

    /**
     * @returns {Manager|null}
     */
    getManager() {
        return this._manager;
    }

    /**
     * @param {string} delimiter
     * @returns {string}
     */
    displayInfo(delimiter = "\n") {
        let info = `I am a developer${delimiter}` + super.displayInfo() + delimiter;

        info += this._manager ?
            'I have a manager: ' + this._manager.getDisplayingData().join(', ') :
            'I have no manager yet';
        return info;
    }
}

class Manager extends Employee {
    /**
     * @param {Developer[]} developers
     */
    constructor(developers = []) {
        super();
        this._developers = developers;
    }

    /**
     * @param {Developer[]} developers
     * @return {this}
     */
    setDevelopers(developers) {
        this._assignSelfToDevelopers(developers);
        this._developers = developers;
        return this;
    }

    getDevelopers() {
        return this._developers;
    }

    /**
     * @param {Developer} developer
     * @param {boolean}   assignSelf
     *
     * @return {this}
     */
    addDeveloper(developer, assignSelf = false) {
        if (assignSelf) {
            this._assignSelfToDevelopers([developer]);
        }
        this._developers.push(developer);
        return this;
    }

    /**
     * @param {Developer} developer
     */
    removeDeveloper(developer) {
        this._developers = this._developers.filter((_developer) => {
            if (_developer === developer) {
                developer.setManager(null);
                return false;
            }
            return true;
        });

        return this;
    }

    removeDevelopers() {
        this.setDevelopers([]);
        return this;
    }

    /**
     * @param {string} delimiter
     * @returns {string}
     */
    displayInfo(delimiter = "\n") {
        let info = `I am a manager${delimiter}` + super.displayInfo();
        if (!this._developers.length) {
            return info + delimiter + 'I have no developers yet';
        }

        info += `${delimiter}My developers:${delimiter}`;
        let number = 1;
        for (let i in this._developers) {
            info += `\t${number++}. ` + this._developers[i].getDisplayingData().join(', ') + delimiter;
        }
        return info;
    }

    _assignSelfToDevelopers(developers) {
        for (let i in developers) {
            developers[i].setManager(this);
        }
        return this;
    }
}


let backDevVlad = new Developer();
backDevVlad
    .setName('Vlad')
    .setAge(22)
    .setSalary(1000)
    .setDepartment('Project1');

let frontDevAlex = new Developer();
frontDevAlex
    .setName('Alex')
    .setAge(21)
    .setDateOfBirth('12-04-1997')
    .setSalary(800)
    .setDepartment('Project1');

let managerDenis = new Manager();
managerDenis.setName('Denis')
    .setAge(30)
    .setSalary(1200)
    .setDepartment('Project1')
    .addDeveloper(backDevVlad)
    .addDeveloper(frontDevAlex);

console.log(backDevVlad.displayInfo());
console.log(frontDevAlex.displayInfo());
console.log(managerDenis.displayInfo());

managerDenis.removeDeveloper(frontDevAlex);

console.log(managerDenis.displayInfo());
console.log(frontDevAlex.displayInfo());