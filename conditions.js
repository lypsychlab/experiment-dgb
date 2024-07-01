var conditions = [
    {
        "scenario": 1,
        "dilemma": "Mike is a college student. He is hanging out in his dorm room and thinking about writing an important paper for class. He notices that there are a bunch of football games on TV. He knows he needs to turn off the television and focus on his paper. He can either slack off and watch TV or turn off the TV and focus on writing his paper.",
        "dg": "Mike feels very conflicted about this decision, and he gives it some thought. He decides to turn off the television and focus on his paper.",
        "db": "Mike feels very conflicted about this decision, and he gives it some thought. He decides to watch football.",
        "ndg": "Mike does not feel conflicted about this decision, and he does not give it any thought. He decides to turn off the television and focus on his paper.",
        "ndb": "Mike does not feel conflicted about this decision, and he does not give it any thought. He decides to watch football.",
        "name": "Mike",
        "good_out": "to be finished with the paper",
        "bad_out": "to be watching the game",
        "good_verb": "turn off the television and focus on his paper",
        "bad_verb": "slack off and watch TV",
        "virtue": "long term benefit over short term gain",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 2,
        "dilemma": "Lucas has been diagnosed with Type II Diabetes, and he tries to manage his calorie and sugar intake to maintain his health and lose some weight. He is currently at a dinner banquet for work. After the main course, the waiter announces that there is chocolate cake for dessert. Lucas knows it is healthier to skip dessert. He can either order a piece of chocolate cake or he can pass and not order dessert.",
        "dg": "Lucas feels very conflicted about this decision, and he gives it some thought. He decides to pass and not order dessert.",
        "db": "Lucas feels very conflicted about this decision, and he gives it some thought. He decides to order the chocolate cake.",
        "ndg": "Lucas does not feel conflicted about this decision, and he does not give it any thought. He decides to pass and not order dessert.",
        "ndb": "Lucas does not feel conflicted about this decision, and he does not give it any thought. He decides to order the chocolate cake.",
        "name": "Lucas",
        "good_out": "to maintain his diet",
        "bad_out": "to eat chocolate cake",
        "good_verb": "pass and not order dessert",
        "bad_verb": "order a piece of chocolate cake",
        "virtue": "long term benefit over short term gain",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 3,
        "dilemma": "Grant is at a party. He has a history of a drinking problem. At the party, someone approaches him and offers him an alcoholic drink. He knows that taking the drink could lead him to relapse. He can either take the drink or decline it.",
        "dg": "Grant feels very conflicted about this decision, and he gives it some thought. He decides to decline the drink.",
        "db": "Grant feels very conflicted about this decision, and he gives it some thought. He decides to take the drink.",
        "ndg": "Grant does not feel conflicted about this decision, and he does not give it any thought. He decides to decline the drink.",
        "ndb": "Grant does not feel conflicted about this decision, and he does not give it any thought. He decides to take the drink.",
        "name": "Grant",
        "good_out": "to stay sober",
        "bad_out": "to drink",
        "good_verb": "decline the drink",
        "bad_verb": "take the drink",
        "virtue": "long term benefit over short term gain",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 4,
        "dilemma": "Mary is diagnosed with hypertension and has to follow strict dietary restrictions. While preparing for Halloween festivities in their respective neighborhoods, she goes to the supermarket and buys a bowl and some candy. She knows that eating the candy is against her dietary restrictions. She can either eat all the candy from the bowl or leave the bowl outside.",
        "dg": "Mary feels very conflicted about this decision, and she gives it some thought. She decides to leave the bowl outside.",
        "db": "Mary feels very conflicted about this decision, and she gives it some thought. She decides to eat all the candy.",
        "ndg": "Mary does not feel conflicted about this decision, and she does not give it any thought. She decides to leave the bowl outside.",
        "ndb": "Mary does not feel conflicted about this decision, and she does not give it any thought. She decides to eat all the candy.",
        "name": "Mary",
        "good_out": "to maintain her diet",
        "bad_out": "to eat all the candy",
        "good_verb": "leave the bowl outside",
        "bad_verb": "eat all the candy",
        "virtue": "long term benefit over short term gain",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 5,
        "dilemma": "Rose works at a company. She learns that her boss is planning on giving her a promotion. She is aware that she is not qualified for the job and that there are other people in the company who would better fulfill the role. Rose knows that accepting the promotion would prevent a deserving colleague from moving up in the company. She can either accept or decline the promotion.",
        "dg": "Rose feels very conflicted about this decision, and she gives it some thought. She decides to decline the promotion.",
        "db": "Rose feels very conflicted about this decision, and she gives it some thought. She decides to accept the promotion.",
        "ndg": "Rose does not feel conflicted about this decision, and she does not give it any thought. She decides to decline the promotion.",
        "ndb": "Rose does not feel conflicted about this decision, and she does not give it any thought. She decides to accept the promotion.",
        "name": "Rose",
        "good_out": "to stay in her current position",
        "bad_out": "to move up in the company",
        "good_verb": "decline the promotion",
        "bad_verb": "accept the promotion",
        "virtue": "equity",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 6,
        "dilemma": "Colin is in high school. In his biology lab, he breaks a glass pipet. His teacher blames the bad kid in the classroom for the incident. Colin knows that if he does not claim responsibility, the bad kid may receive punishment for something he did not do. He can either claim responsibility or let the classmate take the blame.",
        "dg": "Colin feels very conflicted about this decision, and he gives it some thought. He decides to claim responsibility.",
        "db": "Colin feels very conflicted about this decision, and he gives it some thought. He decides to let his classmate take the blame.",
        "ndg": "Colin does not feel conflicted about this decision, and he does not give it any thought. He decides to claim responsibility.",
        "ndb": "Colin does not feel conflicted about this decision, and he does not give it any thought. He decides to let his classmate take the blame.",
        "name": "Colin",
        "good_out": "to be punished for breaking the pipet",
        "bad_out": "to avoid punishment for breaking the pipet",
        "good_verb": "claim responsibility",
        "bad_verb": "let his classmate take the blame",
        "virtue": "fairness",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 7,
        "dilemma": "Anthony plays football at his high school. It is the end of the season, and his team is about to play in the state championship game. Anthony finds a playbook with all the plays of the opposing team. He knows that using the playbook would give his team an unfair advantage. He can either use the playbook or leave it where it was.",
        "dg": "Anthony feels very conflicted about this decision, and he gives it some thought. He decides to leave the playbook where it was.",
        "db": "Anthony feels very conflicted about this decision, and he gives it some thought. He decides to use the playbook.",
        "ndg": "Anthony does not feel conflicted about this decision, and he does not give it any thought. He decides to leave the playbook where it was.",
        "ndb": "Anthony does not feel conflicted about this decision, and he does not give it any thought. He decides to use the playbook.",
        "name": "Anthony",
        "good_out": "the game to be fair",
        "bad_out": "an advantage in the game",
        "good_verb": "leave the playbook where it was",
        "bad_verb": "use the playbook",
        "virtue": "fairness",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 8,
        "dilemma": "Mark is at a wedding. Due to budget constraints, the wedding has a limited amount of cake for each guest. Mark finds a tray with all the cake slices at the wedding. He knows that taking more slices of cake will prevent other guests from having their own cake. He can either take extra cake from the tray or leave it for the other guests.",
        "dg": "Mark feels very conflicted about this decision, and he gives it some thought. He decides to leave the cake for the other guests.",
        "db": "Mark feels very conflicted about this decision, and he gives it some thought. He decides to take extra cake from the tray.",
        "ndg": "Mark does not feel conflicted about this decision, and he does not give it any thought. He decides to leave the cake for the other guests.",
        "ndb": "Mark does not feel conflicted about this decision, and he does not give it any thought. He decides to take extra cake from the tray.",
        "name": "Mark",
        "good_out": "other guests to have cake",
        "bad_out": "to have more than one serving of cake",
        "good_verb": "leave the cake for the other guests",
        "bad_verb": "take extra cake from the tray",
        "virtue": "fairness",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 9,
        "dilemma": "Ben has a brother who is sick with a rare disease that causes kidney failure. Ben is tested and finds out that he is a match for his brother. He knows that in order to fully recover, his brother needs a kidney transplant. He can either donate their kidney or refuse to do so.",
        "dg": "Ben feels very conflicted about this decision, and he gives it some thought. He decides to donate his kidney.",
        "db": "Ben feels very conflicted about this decision, and he gives it some thought. He decides to refuse to donate his kidney.",
        "ndg": "Ben does not feel conflicted about this decision, and he does not give it any thought. He decides to donate his kidney.",
        "ndb": "Ben does not feel conflicted about this decision, and he does not give it any thought. He decides to refuse to donate his kidney.",
        "name": "Ben",
        "good_out": "his brother to fully recover",
        "bad_out": "to keep his kidney",
        "good_verb": "donate his kidney",
        "bad_verb": "refuse to donate his kidney",
        "virtue": "helping others",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 10,
        "dilemma": "Madeline works in an office with a coworker who is careless and rude. One day, the careless coworker gets into trouble with paperwork and needs help. Madeline knows that her coworker may fall behind if they do not receive help. She can either help the coworker or leave them to finish their work alone.",
        "dg": "Madeline feels very conflicted about this decision, and she gives it some thought. She decides to help the coworker.",
        "db": "Madeline feels very conflicted about this decision, and she gives it some thought. She decides to leave the coworker to finish their work alone.",
        "ndg": "Madeline does not feel conflicted about this decision, and she does not give it any thought. She decides to help the coworker.",
        "ndb": "Madeline does not feel conflicted about this decision, and she does not give it any thought. She decides to leave the coworker to finish their work alone.",
        "name": "Madeline",
        "good_out": "the coworker to stay on schedule",
        "bad_out": "to go home and relax",
        "good_verb": "help the coworker",
        "bad_verb": "leave the coworker to finish their work alone",
        "virtue": "helping others",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 11,
        "dilemma": "Eric works at a company where employees compete for monetary bonuses based on performance. Eric has a new coworker who just transferred from another office location. It is clear from hearing the coworker’s phone calls that they need the bonus due to personal issues. Eric knows that outperforming his coworker will prevent them from getting the bonus money that they need. He can either work to get the bonus for himself or let the coworker outperform him.",
        "dg": "Eric feels very conflicted about this decision, and he gives it some thought. He decides to let the coworker outperform him.",
        "db": "Eric feels very conflicted about this decision, and he gives it some thought. He decides to work to get the bonus for himself.",
        "ndg": "Eric does not feel conflicted about this decision, and he does not give it any thought. He decides to let the coworker outperform him.",
        "ndb": "Eric does not feel conflicted about this decision, and he does not give it any thought. He decides to work to get the bonus for himself.",
        "name": "Eric",
        "good_out": "the coworker to have the bonus",
        "bad_out": "to have the bonus",
        "good_verb": "let the coworker outperform him",
        "bad_verb": "work to get the bonus for himself",
        "virtue": "equity",
        "pronoun": "he",
        "pos_pronoun": "his"
    },
    {
        "scenario": 12,
        "dilemma": "Sara is a physician, and she is flying on a plane. One of the passengers on the plane begins to pass out. The flight attendant asks if anybody on board has medical experience to aid the passenger in distress. Sara knows that not helping the person may cause them additional suffering. She can either assist the passenger in need or lie to avoid the commitment.",
        "dg": "Sara feels very conflicted about this decision, and she gives it some thought. She decides to assist the passenger.",
        "db": "Sara feels very conflicted about this decision, and she gives it some thought. She decides to lie to avoid the commitment.",
        "ndg": "Sara does not feel conflicted about this decision, and she does not give it any thought. She decides to assist the passenger.",
        "ndb": "Sara does not feel conflicted about this decision, and she does not give it any thought. She decides to lie to avoid the commitment.",
        "name": "Sara",
        "good_out": "to assist the passenger",
        "bad_out": "to keep to herself on the flight",
        "good_verb": "assist the passenger",
        "bad_verb": "lie to avoid the commitment",
        "virtue": "helping others",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 13,
        "dilemma": "Olivia works in a restaurant with a persistent pest problem. Olivia knows that if she does not report the problem, the health of the customers who eat at the restaurant will be jeopardized. She can either stay silent or report the problem, shutting down the restaurant and losing her job.",
        "dg": "Olivia feels very conflicted about this decision, and she gives it some thought. She decides to report the problem.",
        "db": "Olivia feels very conflicted about this decision, and she gives it some thought. She decides to stay silent.",
        "ndg": "Olivia does not feel conflicted about this decision, and she does not give it any thought. She decides to report the problem.",
        "ndb": "Olivia does not feel conflicted about this decision, and she does not give it any thought. She decides to stay silent.",
        "name": "Olivia",
        "good_out": "to shut down the restaurant",
        "bad_out": "to keep her job",
        "good_verb": "report the problem",
        "bad_verb": "stay silent",
        "virtue": "reducing harm to others",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 14,
        "dilemma": "Mary is an avid smoker. She is currently at a child’s birthday party, and the birthday boy has asthma. Mary knows that if she smokes, the boy at the party will likely have a negative reaction. She can either smoke now or wait until after the party.",
        "dg": "Mary feels very conflicted about this decision, and she gives it some thought. She decides to wait until after the party.",
        "db": "Mary feels very conflicted about this decision, and she gives it some thought. She decides to smoke now.",
        "ndg": "Mary does not feel conflicted about this decision, and she does not give it any thought. She decides to wait until after the party.",
        "ndb": "Mary does not feel conflicted about this decision, and she does not give it any thought. She decides to smoke now.",
        "name": "Mary",
        "good_out": "the birthday boy not to be around smoke",
        "bad_out": "to smoke",
        "good_verb": "wait until after the party",
        "bad_verb": "smoke now",
        "virtue": "reducing harm to others",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 15,
        "dilemma": "Thalia is very angry at a person she has encountered at a bar. The situation escalates to the point where the altercation becomes physical, and she has her opponent held down on the ground. Thalia knows that if she knocks out her opponent, it would really hurt them. She can either knock the opponent out or try to de-escalate the situation.",
        "dg": "Thalia feels very conflicted about this decision, and she gives it some thought. She decides to try to de-escalate the situation.",
        "db": "Thalia feels very conflicted about this decision, and she gives it some thought. She decides to knock out her opponent.",
        "ndg": "Thalia does not feel conflicted about this decision, and she does not give it any thought. She decides to try to de-escalate the situation.",
        "ndb": "Thalia does not feel conflicted about this decision, and she does not give it any thought. She decides to knock out her opponent.",
        "name": "Thalia",
        "good_out": "the situation to be calmer",
        "bad_out": "the altercation to be over",
        "good_verb": "try to de-escalate the situation",
        "bad_verb": "knock out her opponent",
        "virtue": "reducing harm to others",
        "pronoun": "she",
        "pos_pronoun": "her"
    },
    {
        "scenario": 16,
        "dilemma": "Monica is an Uber driver, and she is driving a car with one person in the passenger seat. She is running late to the passenger’s destination. She knows that if she speeds to get there on time, there is a higher risk that she ends up in a car crash with the passenger in the car. She can either speed to get there on time or safely drive the limit and arrive late.",
        "dg": "Monica feels very conflicted about this decision, and she gives it some thought. She decides to safely drive the limit and arrive late.",
        "db": "Monica feels very conflicted about this decision, and she gives it some thought. She decides to speed to get there on time.",
        "ndg": "Monica does not feel conflicted about this decision, and she does not give it any thought. She decides to safely drive the limit and arrive late.",
        "ndb": "Monica does not feel conflicted about this decision, and she does not give it any thought. She decides to speed to get there on time.",
        "name": "Monica",
        "good_out": "to ensure her passenger was safe",
        "bad_out": "to ensure her passenger arrived on time",
        "good_verb": "safely drive the limit and arrive late",
        "bad_verb": "speed to get there on time",
        "virtue": "reducing harm to others",
        "pronoun": "she",
        "pos_pronoun": "her"
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

var outcomes = ["dg", "dg", "dg", "dg", "db", "db", "db", "db", "ndg", "ndg", "ndg", "ndg", "ndb", "ndb", "ndb", "ndb"]

shuffleArray(outcomes)

for (let i = 0; i < conditions.length; i++) {
    let trial = conditions[i]
    trial.outcome = outcomes[i]
}