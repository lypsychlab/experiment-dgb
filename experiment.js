///// SETUP /////

// initialize jsPsych
const jsPsych = initJsPsych({
    on_finish: function() {
        jsPsych.data.displayData()
    }
})

// data pipe variables
const subject_id = jsPsych.randomization.randomID(10)

const url_pid = jsPsych.data.getURLVariable("PROLIFIC_PID")

const mgm_first = Math.random() < 0.5

jsPsych.data.addProperties({
    subject_id: subject_id, 
    prolific_id: url_pid, 
    scenario_order: scenario_order, 
    mgm_first: mgm_first
})

var scenario_counter = 0

var question_order = [0, 1, 2, 3]

shuffleArray(question_order)

///// TRIALS /////

// consent form
const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ["Consent NOT given", "Consent given"],
    button_html: [
        `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=C18LAPRX', '_blank')">%choice%</button>`,
        `<button class="jspsych-btn">%choice%</button>`
    ],
    on_finish: function(data) {
        // if no consent, send back to prolific with no consent code
        if (data.response == 0) {
            document.getElementById("jspsych-content").style.margin = "auto"

            jsPsych.endExperiment(
                "You chose not to consent to participate.<br>If you were not automatically directed back to Prolific, please go back and enter the completion code C18LAPRX"
            )
        }
    },
    data: {
        type_of_trial: "consent"
    }
}

// prolific id, instructions
const prolific_id = {
    type: jsPsychSurveyText,
    questions: [
        {
            prompt: "Please copy and paste your Prolific ID here.",
            name: "prolific_id",
            required: true
        }
    ],
    data: {
        type_of_trial: "prolific"
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"

        if (url_pid) {
            jsPsych.finishTrial()
        }
    },
    on_finish: function(data) {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        if (data.response) {
            data.prolific_id_man = data.response["prolific_id"]
        }
    }
}

const instructions = {
    type: jsPsychInstructions,
    pages: function() {
        var instructions_pages = []

        instructions_pages.push(
            instructions_page1
        )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        type_of_trial: "instructions"
    }
}

const mgm = {
    type: jsPsychSurveyHtmlForm,
    html: mgm_html,
    data: {
        type_of_trial: "mgm"
    },
    on_finish: function(data) {
        data.mgm_q1 = data.response.mgm_q1
        data.mgm_q2 = data.response.mgm_q2
        data.mgm_q3 = data.response.mgm_q3
        data.mgm_q4 = data.response.mgm_q4
    }
}

// attention check
const attention = {
    type: jsPsychSurveyHtmlForm,
    html: attention_question,
    on_load: function() {
        scenario_counter += 1

        if (scenario_counter != 8) {
            jsPsych.finishTrial()
        }
    },
    on_finish: function(data) {
        if (data.response) {
            data.response = data.response.attention
        }
    },
    data: {
        type_of_trial: "attention"
    }
}

// scenarios
const scenario = {
    type: jsPsychSurveyHtmlForm,
    preamble: function() {
        return scenario_description(
            jsPsych.timelineVariable("tempt_first"),
            jsPsych.timelineVariable("name_tempt"),
            jsPsych.timelineVariable("name_notempt"),
            jsPsych.timelineVariable("setup"),
            jsPsych.timelineVariable("outcome_tempt"),
            jsPsych.timelineVariable("outcome_notempt"),
            jsPsych.timelineVariable("conclusion")
        )
    },
    html: function() {
        return scenario_questions(
            jsPsych.timelineVariable("tempt_first"),
            jsPsych.timelineVariable("name_tempt"),
            jsPsych.timelineVariable("name_notempt"),
            jsPsych.timelineVariable("good_behav"),
            jsPsych.timelineVariable("bad_behav")
        )
    },
    data: {
        type_of_trial: "scenario",
        scenario: jsPsych.timelineVariable("scenario"),
        moral: jsPsych.timelineVariable("moral")
    },
    on_finish: function(data) {
        data.relmoral = data.response.relmoral
        data.whotempt = data.response.whotempt
        data.praise_tempt = data.response.praise_tempt
        data.praise_notempt = data.response.praise_notempt
        data.char_tempt = data.response.char_tempt
        data.char_notempt = data.response.char_notempt
    }
}

const scenario_timeline = {
    timeline: [scenario, attention],
    timeline_variables: conditions,
    randomize_order: false
}

// demographics, debrief

const demographics = {
    type: jsPsychSurveyHtmlForm,
    preamble: "The following questions are optional, but should be answered thruthfully.",
    html: function() {
        return demographics_questions
    },
    data: {
        type_of_trial: "demographics"
    },
    on_finish: function(data) {
        // populate data
        data.age = data.response.age

        data.gender = data.response.gender
        if (data.response.unlisted_gender != "") {
            data.gender = data.response.unlisted_gender
        }

        let re_keys = Object.keys(data.response).filter(key => data.response[key] === "on")
        if (data.response.other_race_ethnicity_text != "") {
            re_keys.push(data.response.other_race_ethnicity_text)
        }
        data.race_ethnicity = re_keys

        data.income = data.response.income
        data.education = data.response.education
        data.ses = data.response.ses

        data.party = data.response.party
        if (data.response.other_party_text != "") {
            data.party = data.response.other_party_text
        }

        data.politics = data.response.politics
        data.religiosity = data.response.religiosity
    }
}

const debrief_to_prolific = {
    type: jsPsychHtmlButtonResponse,
    stimulus: debrief_html,
    choices: ["Back to Prolific"],
    button_html: `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=CZ3OYB7F', '_blank')">%choice%</button>`,
    on_finish: function() {
        document.getElementById("jspsych-content").style.margin = "auto"

        jsPsych.endExperiment(
            "Thank you for your participation!.<br>Your completion code is CZ3OYB7F"
        )
    },
    data: {
        type_of_trial: "back_to_prolific"
    }
}

// data pipe
const save_data_all_trials = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "Keh7Op7zyr5B",
    filename: `${subject_id}_all_trials.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe"
    }
}

const save_data_final = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "Keh7Op7zyr5B",
    filename: `${subject_id}_final.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe"
    }
}


///// COMPILE AND RUN /////
var experiment = []

experiment.push(
    consent,
    prolific_id,
    instructions,
    mgm_first ? mgm : scenario_timeline,
    mgm_first ? scenario_timeline : mgm,
    save_data_all_trials,
    demographics,
    save_data_final,
    debrief_to_prolific
)

jsPsych.run(experiment)