var conditions = [
    {
        "scenario": 1,
        "name_tempt": "Emma",
        "name_notempt": "Abby",
        "setup": "${name} lives in an apartment. She promised herself that she would clean the apartment before she left for the day. Then ${name} hears her friends talking outside.",
        "outcome_tempt": "She could go talk with her friends right now instead of cleaning her apartment, and she wants to do that.",
        "outcome_notempt": "She could go talk with her friends right now instead of cleaning her apartment, but she doesn't want to do that.",
        "conclusion": "${name} cleans her apartment.",
        "good_behav": "cleaning her apartment",
        "bad_behav": "talk with her friends"
    },
    {
        "scenario": 2,
        "name_tempt": "Adam",
        "name_notempt": "Mike",
        "setup": "${name} lives in an apartment. He thinks he spends too much time playing video games, and he has recently been trying to read more in his free time. One afternoon, ${name} sees his book and his video game controller on the table.",
        "outcome_tempt": "He could play video games instead of reading, and he wants to do that.",
        "outcome_notempt": "He could play video games instead of reading, but he doesn't want to do that.",
        "conclusion": "${name} reads his book.",
        "good_behav": "reading his book",
        "bad_behav": "play video games"
    }
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

var tempt_first_array = [true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, false]

shuffleArray(tempt_first_array)

for (let i = 0; i < conditions.length; i++) {
    let trial = conditions[i]
    trial.tempt_first = tempt_first_array[i]
}

const scenario_order = Math.floor(Math.random() * 3)

if (scenario_order == 0) {
    shuffleArray(conditions)
} else {
    let nonmoral_conditions = conditions.slice(0, 1)
    let moral_conditions = conditions.slice(1, 2)

    shuffleArray(nonmoral_conditions)
    shuffleArray(moral_conditions)

    if (scenario_order == 1) {
        conditions = nonmoral_conditions.concat(moral_conditions)
    } else if (scenario_order == 2) {
        conditions = moral_conditions.concat(nonmoral_conditions)
    }
}

function fillTemplate(template, name) {
    return template.replace(/\${(.*?)}/g, (_) => name || '');
}