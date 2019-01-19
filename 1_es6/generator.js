function* askProfile() {
    let answers = {};
    answers.name = prompt('Как тебя зовут?', '');
    yield answers;
    answers.age = prompt('Сколько тебе лет?', '');
    yield answers;
    answers.country = prompt('Где ты живешь?', '');
    return answers;
}

let profile = askProfile();
let answers;
for (let value of profile) {
    answers = value;
}
console.log(answers);