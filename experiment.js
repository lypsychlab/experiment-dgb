///// SETUP /////

// initialize jsPsych
const jsPsych = initJsPsych({
    // on_finish: function() {
    //     jsPsych.data.displayData()
    // }
})

// data pipe variables
const subject_id = jsPsych.randomization.randomID(10)

var scenario_counter = 0


///// TRIALS /////

// consent form
const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ["Consent not given", "Consent given"],
    button_html: [
        `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=C1LS4DJ1', '_blank')">%choice%</button>`,
        `<button class="jspsych-btn">%choice%</button>`
    ],
    on_finish: function(data) {
        // if no consent, send back to prolific with no consent code
        if (data.response == 0) {
            document.getElementById("jspsych-content").style.margin = "auto"

            jsPsych.endExperiment(
                "You chose not to consent to participate.<br>If you were not automatically directed back to Prolific, please go back and enter the completion code C1LS4DJ1"
            )
        }
    },
    data: {
        type_of_trial: "consent",
        subject_id: subject_id
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
        type_of_trial: "prolific",
        subject_id: subject_id
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function(data) {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        data.prolific_id = data.response["prolific_id"]
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
        type_of_trial: "instructions",
        subject_id: subject_id
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
            data.response = data.response.attention_check
        }
    },
    data: {
        type_of_trial: "attention",
        subject_id: subject_id
    }
}

// scenarios
const scenario = {
    type: jsPsychSurveyHtmlForm,
    preamble: function() {
        return scenario_description(jsPsych.timelineVariable("dilemma"), jsPsych.timelineVariable(jsPsych.timelineVariable("outcome")))
    },
    html: function() {
        return scenario_questions(
            jsPsych.timelineVariable("name"),
            jsPsych.timelineVariable("good_out"),
            jsPsych.timelineVariable("bad_out"),
            jsPsych.timelineVariable("good_verb"),
            jsPsych.timelineVariable("bad_verb"),
            jsPsych.timelineVariable("virtue"),
            jsPsych.timelineVariable("pronoun"),
            jsPsych.timelineVariable("pos_pronoun")
        )
    },
    data: {
        type_of_trial: "scenario",
        subject_id: subject_id,
        agent_type: jsPsych.timelineVariable("outcome"),
        scenario: jsPsych.timelineVariable("scenario")
    },
    on_finish: function(data) {
        data.moral = data.response.moral
        data.stakes = data.response.stakes
        data.average = data.response.average
        data.tempt_bad = data.response.tempt_bad
        data.want_bad = data.response.want_bad
        data.tempt_good = data.response.tempt_good
        data.want_good = data.response.want_good
        data.value = data.response.value
        data.control_thoughts = data.response.control_thoughts
        data.control_actions = data.response.control_actions
        data.future = data.response.future
        data.time = data.response.time
    }
}

const scenario_timeline = {
    timeline: [scenario, attention],
    timeline_variables: conditions,
    randomize_order: true
}

// demographics, debrief

const demographics = {
    type: jsPsychSurveyHtmlForm,
    preamble: "The following questions are optional, but should be answered thruthfully.",
    html: function() {
        return demographics_questions
    },
    data: {
        type_of_trial: "demographics",
        subject_id: subject_id
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
    button_html: `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=CUVG196A', '_blank')">%choice%</button>`,
    on_finish: function() {
        document.getElementById("jspsych-content").style.margin = "auto"

        jsPsych.endExperiment(
            "Thank you for your participation!.<br>Your completion code is CUVG196A"
        )
    },
    data: {
        type_of_trial: "back_to_prolific",
        subject_id: subject_id
    }
}

// data pipe
const save_data_all_trials = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "5Bt0VLCLRfBU",
    filename: `${subject_id}_all_trials.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}

const save_data_final = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "5Bt0VLCLRfBU",
    filename: `${subject_id}_final.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}


///// COMPILE AND RUN /////
var experiment = []

experiment.push(
    consent,
    prolific_id,
    instructions,
    scenario_timeline,
    save_data_all_trials,
    demographics,
    save_data_final,
    debrief_to_prolific
)

jsPsych.run(experiment)