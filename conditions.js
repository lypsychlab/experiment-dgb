var conditions = [
    {
        "scenario": 1,
        "moral": "moral",
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
        "moral": "moral",
        "name_tempt": "Adam",
        "name_notempt": "Mike",
        "setup": "${name} lives in an apartment. He thinks he spends too much time playing video games, and he has recently been trying to read more in his free time. One afternoon, ${name} sees his book and his video game controller on the table.",
        "outcome_tempt": "He could play video games instead of reading, and he wants to do that.",
        "outcome_notempt": "He could play video games instead of reading, but he doesn't want to do that.",
        "conclusion": "${name} reads his book.",
        "good_behav": "reading his book",
        "bad_behav": "play video games"
    },
    {
        "scenario": 3,
        "moral": "moral",
        "name_tempt": "Grace",
        "name_notempt": "Sara",
        "setup": "${name} works at a company. While in a meeting, ${name} gets a text notification from a friend on her computer.",
        "outcome_tempt": "She could text the friend instead of paying attention to the meeting, and she wants to do that.",
        "outcome_notempt": "She could text the friend instead of paying attention to the meeting, but she doesn't want to do that.",
        "conclusion": "${name} pays attention to the meeting.",
        "good_behav": "paying attention to the meeting",
        "bad_behav": "text her friend"
    },
    {
        "scenario": 4,
        "moral": "moral",
        "name_tempt": "Mason",
        "name_notempt": "Ian",
        "setup": "${name} is looking for a new job. He has an application due tomorrow morning that he needs to finish tonight. ${name} also sees that there are football games playing live on TV.",
        "outcome_tempt": "He could watch football instead of working on his application, and he wants to do that.",
        "outcome_notempt": "He could watch football instead of working on his application, but he doesn't want to do that.",
        "conclusion": "${name} works on his application.",
        "good_behav": "working on his application",
        "bad_behav": "watch football"
    },
    {
        "scenario": 5,
        "moral": "moral",
        "name_tempt": "Rose",
        "name_notempt": "Lia",
        "setup": "${name} lives in a big city. She orders a lot of takeout for dinner, but this is getting expensive, so she has been trying to learn how to cook recently. One day after work, ${name} is thinking about what to have for dinner.",
        "outcome_tempt": "She could order takeout instead of cooking, and she wants to do that.",
        "outcome_notempt": "She could order takeout instead of cooking, but she doesn't want to do that.",
        "conclusion": "${name} cooks dinner at home.",
        "good_behav": "cooking dinner at home",
        "bad_behav": "order takeout"
    },
    {
        "scenario": 6,
        "moral": "moral",
        "name_tempt": "Liam",
        "name_notempt": "Harry",
        "setup": "${name} lives in a small town. He has been trying to quit smoking, and has thrown away his cigarettes. However, one day while he is cleaning his apartment, he finds a single cigarette left behind the couch.",
        "outcome_tempt": "He could smoke the cigarette, and he wants to do that.",
        "outcome_notempt": "He could smoke the cigarette, but he doesn't want to do that.",
        "conclusion": "${name} does not smoke the cigarette.",
        "good_behav": "not smoking the cigarette",
        "bad_behav": "smoke the cigarette"
    },
    {
        "scenario": 7,
        "moral": "moral",
        "name_tempt": "Piper",
        "name_notempt": "Lucy",
        "setup": "${name} was recently diagnosed with celiac disease, and she needs to remove gluten from her diet. One day, one of her friends offers her a piece of cake that has gluten in it.",
        "outcome_tempt": "She could eat the cake, and she wants to do that.",
        "outcome_notempt": "She could eat the cake, but she doesn't want to do that.",
        "conclusion": "${name} does not eat the cake.",
        "good_behav": "not eating the cake",
        "bad_behav": "eat the cake"
    },
    {
        "scenario": 8,
        "moral": "moral",
        "name_tempt": "James",
        "name_notempt": "Richard",
        "setup": "${name} works at a company. He has a presentation tomorrow at work, and he needs to get a good night's sleep. When he is getting ready to go to sleep, his friends start texting in a group chat.",
        "outcome_tempt": "He could stay up late texting them, and he wants to do that.",
        "outcome_notempt": "He could stay up late texting them, but he doesn't want to do that.",
        "conclusion": "${name} goes to bed.",
        "good_behav": "going to bed",
        "bad_behav": "stay up late texting"
    },
    {
        "scenario": 9,
        "moral": "nonmoral",
        "name_tempt": "Thalia",
        "name_notempt": "Reagan",
        "setup": "${name} is very angry at a person she has encountered at a bar. The situation escalates to a physical altercation, and she has her opponent held down on the ground. If ${name} knocks out her opponent, it would really hurt them.",
        "outcome_tempt": "She could knock out her opponent, and she wants to do that.",
        "outcome_notempt": "She could knock out her opponent, but she doesn't want to do that.",
        "conclusion": "${name} does not knock out her opponent.",
        "good_behav": "not knocking out her opponent",
        "bad_behav": "knock out her opponent"
    },
    {
        "scenario": 10,
        "moral": "nonmoral",
        "name_tempt": "Mary",
        "name_notempt": "Alice",
        "setup": "${name} is an avid smoker. She is currently at a child's birthday party, and the birthday boy has asthma. If ${name} smokes, the boy at the party will likely have a negative reaction.",
        "outcome_tempt": "She could smoke now, and she wants to do that.",
        "outcome_notempt": "She could smoke now, but she doesn't want to do that.",
        "conclusion": "${name} waits until after the party to smoke.",
        "good_behav": "waiting to smoke until after the party",
        "bad_behav": "smoke at the party"
    },
    {
        "scenario": 11,
        "moral": "nonmoral",
        "name_tempt": "Sara",
        "name_notempt": "Ariana",
        "setup": "While ${name} is on a walk, she finds a wallet on the ground that does not belong to her. The wallet contains cash and the owner's ID card. ${name} knows that the wallet is not hers.",
        "outcome_tempt": "She could take the money from the wallet, and she wants to do that.",
        "outcome_notempt": "She could take the money from the wallet, but she doesn't want to do that.",
        "conclusion": "${name} returns the wallet and its contents to the owner.",
        "good_behav": "returning the wallet",
        "bad_behav": "take the money from the wallet"
    },
    {
        "scenario": 12,
        "moral": "nonmoral",
        "name_tempt": "Samantha",
        "name_notempt": "Audrey",
        "setup": "${name} is a physician, and she is on a plane. A nearby passenger passes out. The flight attendant asks if anybody on board has medical experience to help the passenger in distress. ${name} knows that not helping the person may cause them additional suffering.",
        "outcome_tempt": "She could lie to avoid the commitment, and she wants to do that.",
        "outcome_notempt": "She could lie to avoid the commitment, but she doesn't want to do that.",
        "conclusion": "${name} helps the passenger.",
        "good_behav": "helping the passenger",
        "bad_behav": "lie to avoid the commitment"
    },
    {
        "scenario": 13,
        "moral": "nonmoral",
        "name_tempt": "Kevin",
        "name_notempt": "Ben",
        "setup": "${name} works for a company. One day, he goes to the supply cabinet to get printer paper and sees an extra pair of scissors. He remembers that he needs a pair of scissors at home. ${name} knows that the scissors are not his.",
        "outcome_tempt": "He could steal the scissors, and he wants to do that.",
        "outcome_notempt": "He could steal the scissors, but he doesn't want to do that.",
        "conclusion": "${name} leaves the scissors in the cabinet.",
        "good_behav": "leaving the scissors",
        "bad_behav": "steal the scissors"
    },
    {
        "scenario": 14,
        "moral": "nonmoral",
        "name_tempt": "Oliver",
        "name_notempt": "Keith",
        "setup": "${name} works in a restaurant with a persistent pest problem. The restaurant would shut down if the pest problem were reported, causing ${name} to lose his job. If ${name} does not report the problem, the health of the customers who eat at the restaurant will be jeopardized.",
        "outcome_tempt": "He could stay silent about the pest problem, and he wants to do that.",
        "outcome_notempt": "He could stay silent about the pest problem, but he doesn't want to do that.",
        "conclusion": "${name} reports the pest problem.",
        "good_behav": "reporting the pest problem",
        "bad_behav": "stay silent about the pest problem"
    },
    {
        "scenario": 15,
        "moral": "nonmoral",
        "name_tempt": "Matthew",
        "name_notempt": "Edward",
        "setup": "${name} works in an office with a coworker who is careless and rude. One day, the careless coworker gets into trouble with paperwork and needs help. ${name} knows that his coworker may fall behind if they do not receive help.",
        "outcome_tempt": "He could leave the coworker to finish their work alone, and he wants to do that.",
        "outcome_notempt": "He could leave the coworker to finish their work alone, but he doesn't want to do that.",
        "conclusion": "${name} helps the coworker.",
        "good_behav": "helping the coworker",
        "bad_behav": "leave the coworker to finish their work alone"
    },
    {
        "scenario": 16,
        "moral": "nonmoral",
        "name_tempt": "Dylan",
        "name_notempt": "Jake",
        "setup": "${name}, a single man, is at a bar. He has been chatting and exchanging flirtatious looks with a woman all night. The woman tells him her husband is away, and she invites him to go back to her apartment to have sex. ${name} knows that the woman is married.",
        "outcome_tempt": "He could accept the invitation, and he wants to do that.",
        "outcome_notempt": "He could accept the invitation, but he doesn't want to do that.",
        "conclusion": "${name} declines the invitation.",
        "good_behav": "declining the invitation",
        "bad_behav": "accept the invitation"
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
    let nonmoral_conditions = conditions.slice(0, 8)
    let moral_conditions = conditions.slice(8, 16)

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