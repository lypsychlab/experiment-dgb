const consent_html = `
    <p style="text-align:left;">
        You are being asked to participate in a research study titled "Moral Dilemmas." 
        You were selected to participate in this project because you are an adult over age 18. 
        This study is sponsored by Boston College and the John Templeton Foundation.
    </p>
    <p style="text-align: left;">
        The purpose of this study is to understand how we weigh information what other people say. 
        This study will be conducted through this online survey. 
        The survey should take you about <span style="font-weight: bold;">18 minutes</span> to complete. 
        There are no direct benefits to you, 
        but you may feel gratified knowing that you helped further the scholarly work in this research area, 
        and you will be compensated <span style="font-weight: bold;">$3.60</span> for your participation. 
        There are no costs to you associated with your participation.
    </p>
    <p style="text-align: left;">
        The researchers do not believe participation would entail any risks or discomforts beyond those ordinarily encountered in everyday life.
    </p>
    <p style="text-align: left;">
        This Principal Investigator, Dr. Liane Young, will exert all reasonable efforts to keep your responses and your identity confidential. 
        We will not maintain within our research data any information that uniquely identifies you, such as your name, location, or Internet Protocol (IP) address. 
        In any report we publish, we will not include any information that will make it possible to identify a participant. 
        Data collected from the experiment will be coded to remove your name and any other personal identifiers. 
        All records will be secured in a locked cabinet in our lab. 
        The Institutional Review Board at Boston College and internal Boston College auditors may review the research records. 
        State or federal laws or court orders may also require that information from research study records be released. 
        Otherwise, the researchers will not release to others any information that could indicate your identity unless you give your permission, 
        or unless the researchers become legally required to do so.
    </p>
    <p style="text-align: left;">
        Although the survey will not prompt you directly to identify yourself by name, email address or the like, 
        the survey will include several items that would prompt you to provide certain demographic information, 
        such as your age, gender, ethnicity, education level and the like. 
        In combination, responses to such questions could suggest your identity. 
        Regardless, please know that the researchers will make no purposeful effort to discern your identity based on such information. 
        Additionally, please note that you may opt to leave any such questions blank.
    </p>
    <p style="text-align: left;">
        Your participation is voluntary. If you choose not to participate it will not affect your relations with Boston College. 
        Some questions on the survey, such as comprehension questions, may be required in order to complete the survey and receive compensation. 
        However, you may still choose to end your participation in the study at any time. 
        If you have questions or concerns concerning this research you may contact the Principal Investigator at 
        <a href="tel:16175520240">+1 (617) 552-0240</a> or <a href="mailto:liane.young@bc.edu">liane.young@bc.edu</a>. 
        If you have questions about your rights as a research participant, you may contact the Office for Research Protections, Boston College, at 
        <a href="tel:16175524778">+1 (617) 552-4778</a> or <a href="mailto:irb@bc.edu">irb@bc.edu</a>.
    </p>
    <p style="text-align: left;">
        If you agree to the statements above and agree to participate in this study, please select the "Consent given" button below to continue.
    </p>
`

const instructions_page1 = `
    <p style="text-align: left;">
        In this survey, you will read a series of scenarios in which a person is faced with a moral dilemma. 
        For each scenario, you will first read the setup for the dilemma, and then you will read about what the person did. 
        Then, you will be asked a series of questions about the scenario itself and the person that you read about.
        <br>
        <br>
        There are 16 scenarios. The first scenario will be presented as soon as you click the button below. 
        Then, the scenarios will follow one another until you have seen all 16. After the scenarios, there will be a short demographics survey.
    </p>
`

const attention_question = `
    <div class="prevent-select" style="text-align: left;">
        Sometimes respondents to our surveys are bots rather than real people. 
        We need to remove those responses from our data to make sure our research findings are valid. 
        To help us know who is actually a real person, please ignore the question wording below and select the option with the label '2.' 
        This is not intended to trick you and will not affect your payment. Thank you!
        <br>
        <br>
        How likely is it that the average person would be tempted to call out of work without being sick?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_0">1<br>not likely at all</label>
                <br>
                <input name="attention_check" type="radio" value="0" id="attention_check_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_1">2</label>
                <br>
                <input name="attention_check" type="radio" value="1" id="attention_check_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_2">3</label>
                <br>
                <input name="attention_check" type="radio" value="2" id="attention_check_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_3">4</label>
                <br>
                <input name="attention_check" type="radio" value="3" id="attention_check_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_4">5</label>
                <br>
                <input name="attention_check" type="radio" value="4" id="attention_check_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_5">6</label>
                <br>
                <input name="attention_check" type="radio" value="5" id="attention_check_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="attention_check_6">7<br>very likely</label>
                <br>
                <input name="attention_check" type="radio" value="6" id="attention_check_6" />
            </div>
        </div>
        <br>
        <br>
        You are halfway through the scenarios!
        <br>
        <br>
    </div>
`

function scenario_description(setup, outcome) {
    let scenario_text = `
        <div style="text-align: left;">
            ${setup}
            <br>
            <br>
            ${outcome}
        </div>
        <br>
        <hr>
    `

    return scenario_text
}

function scenario_questions(name, good_out, bad_out, good_verb, bad_verb, virtue, pronoun, pos_pronoun) {
    let q_moral = `
        How moral was ${name} in this situation?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="moral_0">1<br>very morally bad</label>
                <br>
                <input name="moral" type="radio" value="0" id="moral_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_1">2</label>
                <br>
                <input name="moral" type="radio" value="1" id="moral_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_2">3</label>
                <br>
                <input name="moral" type="radio" value="2" id="moral_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_3">4</label>
                <br>
                <input name="moral" type="radio" value="3" id="moral_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_4">5</label>
                <br>
                <input name="moral" type="radio" value="4" id="moral_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_5">6</label>
                <br>
                <input name="moral" type="radio" value="5" id="moral_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="moral_6">7<br>very morally good</label>
                <br>
                <input name="moral" type="radio" value="6" id="moral_6" />
            </div>
        </div>
        <br>
    `

    let q_stakes = `
        How high were the stakes of the decision that ${name} had to make?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_0">1<br>very low</label>
                <br>
                <input name="stakes" type="radio" value="0" id="stakes_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_1">2</label>
                <br>
                <input name="stakes" type="radio" value="1" id="stakes_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_2">3</label>
                <br>
                <input name="stakes" type="radio" value="2" id="stakes_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_3">4</label>
                <br>
                <input name="stakes" type="radio" value="3" id="stakes_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_4">5</label>
                <br>
                <input name="stakes" type="radio" value="4" id="stakes_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_5">6</label>
                <br>
                <input name="stakes" type="radio" value="5" id="stakes_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="stakes_6">7<br>very high</label>
                <br>
                <input name="stakes" type="radio" value="6" id="stakes_6" />
            </div>
        </div>
        <br>
    `

    let q_average = `
        How likely is it that the average person would be tempted to ${bad_verb} in this situation?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="average_0">1<br>not likely at all</label>
                <br>
                <input name="average" type="radio" value="0" id="average_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_1">2</label>
                <br>
                <input name="average" type="radio" value="1" id="average_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_2">3</label>
                <br>
                <input name="average" type="radio" value="2" id="average_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_3">4</label>
                <br>
                <input name="average" type="radio" value="3" id="average_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_4">5</label>
                <br>
                <input name="average" type="radio" value="4" id="average_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_5">6</label>
                <br>
                <input name="average" type="radio" value="5" id="average_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="average_6">7<br>very likely</label>
                <br>
                <input name="average" type="radio" value="6" id="average_6" />
            </div>
        </div>
        <br>
    `

    let q_ms_inferences_1 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">feel tempted to ${bad_verb}?</div>
            <label class="mtable-statement-point" for="tempt_bad_0">
                <input name="tempt_bad" type="radio" value="0" id="tempt_bad_0" required />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_1">
                <input name="tempt_bad" type="radio" value="1" id="tempt_bad_1" />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_2">
                <input name="tempt_bad" type="radio" value="2" id="tempt_bad_2" />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_3">
                <input name="tempt_bad" type="radio" value="3" id="tempt_bad_3" />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_4">
                <input name="tempt_bad" type="radio" value="4" id="tempt_bad_4" />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_5">
                <input name="tempt_bad" type="radio" value="5" id="tempt_bad_5" />
            </label>
            <label class="mtable-statement-point" for="tempt_bad_6">
                <input name="tempt_bad" type="radio" value="6" id="tempt_bad_6" />
            </label>
        </div>
    `

    let q_ms_inferences_2 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">feel tempted to ${good_verb}?</div>
            <label class="mtable-statement-point" for="tempt_good_0">
                <input name="tempt_good" type="radio" value="0" id="tempt_good_0" required />
            </label>
            <label class="mtable-statement-point" for="tempt_good_1">
                <input name="tempt_good" type="radio" value="1" id="tempt_good_1" />
            </label>
            <label class="mtable-statement-point" for="tempt_good_2">
                <input name="tempt_good" type="radio" value="2" id="tempt_good_2" />
            </label>
            <label class="mtable-statement-point" for="tempt_good_3">
                <input name="tempt_good" type="radio" value="3" id="tempt_good_3" />
            </label>
            <label class="mtable-statement-point" for="tempt_good_4">
                <input name="tempt_good" type="radio" value="4" id="tempt_good_4" />
            </label>
            <label class="mtable-statement-point" for="tempt_good_5">
                <input name="tempt_good" type="radio" value="5" id="tempt_good_5" />
            </label>
            <label class="mtable-statement-point" for="tempt_good_6">
                <input name="tempt_good" type="radio" value="6" id="tempt_good_6" />
            </label>
        </div>
    `

    let q_ms_inferences_3 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">want ${bad_out}?</div>
            <label class="mtable-statement-point" for="want_bad_0">
                <input name="want_bad" type="radio" value="0" id="want_bad_0" required />
            </label>
            <label class="mtable-statement-point" for="want_bad_1">
                <input name="want_bad" type="radio" value="1" id="want_bad_1" />
            </label>
            <label class="mtable-statement-point" for="want_bad_2">
                <input name="want_bad" type="radio" value="2" id="want_bad_2" />
            </label>
            <label class="mtable-statement-point" for="want_bad_3">
                <input name="want_bad" type="radio" value="3" id="want_bad_3" />
            </label>
            <label class="mtable-statement-point" for="want_bad_4">
                <input name="want_bad" type="radio" value="4" id="want_bad_4" />
            </label>
            <label class="mtable-statement-point" for="want_bad_5">
                <input name="want_bad" type="radio" value="5" id="want_bad_5" />
            </label>
            <label class="mtable-statement-point" for="want_bad_6">
                <input name="want_bad" type="radio" value="6" id="want_bad_6" />
            </label>
        </div>
    `

    let q_ms_inferences_4 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">want ${good_out}?</div>
            <label class="mtable-statement-point" for="want_good_0">
                <input name="want_good" type="radio" value="0" id="want_good_0" required />
            </label>
            <label class="mtable-statement-point" for="want_good_1">
                <input name="want_good" type="radio" value="1" id="want_good_1" />
            </label>
            <label class="mtable-statement-point" for="want_good_2">
                <input name="want_good" type="radio" value="2" id="want_good_2" />
            </label>
            <label class="mtable-statement-point" for="want_good_3">
                <input name="want_good" type="radio" value="3" id="want_good_3" />
            </label>
            <label class="mtable-statement-point" for="want_good_4">
                <input name="want_good" type="radio" value="4" id="want_good_4" />
            </label>
            <label class="mtable-statement-point" for="want_good_5">
                <input name="want_good" type="radio" value="5" id="want_good_5" />
            </label>
            <label class="mtable-statement-point" for="want_good_6">
                <input name="want_good" type="radio" value="6" id="want_good_6" />
            </label>
        </div>
    `

    let ms_inferences_array = [q_ms_inferences_1, q_ms_inferences_2, q_ms_inferences_3, q_ms_inferences_4]

    shuffleArray(ms_inferences_array)

    let q_ms_inferences = `
        How much did ${name}. . . 
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>not at all</div>
                <div class="mtable-scale-point">2</div>
                <div class="mtable-scale-point">3</div>
                <div class="mtable-scale-point">4</div>
                <div class="mtable-scale-point">5</div>
                <div class="mtable-scale-point">6</div>
                <div class="mtable-scale-point">7<br>very much</div>
            </div>
            ${ms_inferences_array[0]}
            ${ms_inferences_array[1]}
            ${ms_inferences_array[2]}
            ${ms_inferences_array[3]}
        </div>
        <br>
    `

    let q_value = `
        How much does ${name} value ${virtue}?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="value_0">1<br>not at all</label>
                <br>
                <input name="value" type="radio" value="0" id="value_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_1">2</label>
                <br>
                <input name="value" type="radio" value="1" id="value_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_2">3</label>
                <br>
                <input name="value" type="radio" value="2" id="value_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_3">4</label>
                <br>
                <input name="value" type="radio" value="3" id="value_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_4">5</label>
                <br>
                <input name="value" type="radio" value="4" id="value_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_5">6</label>
                <br>
                <input name="value" type="radio" value="5" id="value_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="value_6">7<br>very much</label>
                <br>
                <input name="value" type="radio" value="6" id="value_6" />
            </div>
        </div>
        <br>
    `

    let q_control_1 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">the thoughts ${pronoun} had in the situation?</div>
            <label class="mtable-statement-point" for="control_thoughts_0">
                <input name="control_thoughts" type="radio" value="0" id="control_thoughts_0" required />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_1">
                <input name="control_thoughts" type="radio" value="1" id="control_thoughts_1" />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_2">
                <input name="control_thoughts" type="radio" value="2" id="control_thoughts_2" />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_3">
                <input name="control_thoughts" type="radio" value="3" id="control_thoughts_3" />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_4">
                <input name="control_thoughts" type="radio" value="4" id="control_thoughts_4" />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_5">
                <input name="control_thoughts" type="radio" value="5" id="control_thoughts_5" />
            </label>
            <label class="mtable-statement-point" for="control_thoughts_6">
                <input name="control_thoughts" type="radio" value="6" id="control_thoughts_6" />
            </label>
        </div>
    `

    let q_control_2 = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">the way ${pronoun} acted in the situation?</div>
            <label class="mtable-statement-point" for="control_actions_0">
                <input name="control_actions" type="radio" value="0" id="control_actions_0" required />
            </label>
            <label class="mtable-statement-point" for="control_actions_1">
                <input name="control_actions" type="radio" value="1" id="control_actions_1" />
            </label>
            <label class="mtable-statement-point" for="control_actions_2">
                <input name="control_actions" type="radio" value="2" id="control_actions_2" />
            </label>
            <label class="mtable-statement-point" for="control_actions_3">
                <input name="control_actions" type="radio" value="3" id="control_actions_3" />
            </label>
            <label class="mtable-statement-point" for="control_actions_4">
                <input name="control_actions" type="radio" value="4" id="control_actions_4" />
            </label>
            <label class="mtable-statement-point" for="control_actions_5">
                <input name="control_actions" type="radio" value="5" id="control_actions_5" />
            </label>
            <label class="mtable-statement-point" for="control_actions_6">
                <input name="control_actions" type="radio" value="6" id="control_actions_6" />
            </label>
        </div>
    `

    let control_array = [q_control_1, q_control_2]

    shuffleArray(control_array)

    let q_control = `
        How much control did ${name} have over. . . 
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>no control</div>
                <div class="mtable-scale-point">2</div>
                <div class="mtable-scale-point">3</div>
                <div class="mtable-scale-point">4</div>
                <div class="mtable-scale-point">5</div>
                <div class="mtable-scale-point">6</div>
                <div class="mtable-scale-point">7<br>complete control</div>
            </div>
            ${control_array[0]}
            ${control_array[1]}
        </div>
        <br>
    `

    let q_future = `
        If this were to happen again, how likely is it that ${name} would act the same way?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="future_0">1<br>not likely at all</label>
                <br>
                <input name="future" type="radio" value="0" id="future_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_1">2</label>
                <br>
                <input name="future" type="radio" value="1" id="future_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_2">3</label>
                <br>
                <input name="future" type="radio" value="2" id="future_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_3">4</label>
                <br>
                <input name="future" type="radio" value="3" id="future_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_4">5</label>
                <br>
                <input name="future" type="radio" value="4" id="future_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_5">6</label>
                <br>
                <input name="future" type="radio" value="5" id="future_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="future_6">7<br>very likely</label>
                <br>
                <input name="future" type="radio" value="6" id="future_6" />
            </div>
        </div>
        <br>
    `

    let q_time = `
        How long do you think ${name} took to make ${pos_pronoun} decision?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="time_0">1<br>not long at all</label>
                <br>
                <input name="time" type="radio" value="0" id="time_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_1">2</label>
                <br>
                <input name="time" type="radio" value="1" id="time_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_2">3</label>
                <br>
                <input name="time" type="radio" value="2" id="time_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_3">4</label>
                <br>
                <input name="time" type="radio" value="3" id="time_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_4">5</label>
                <br>
                <input name="time" type="radio" value="4" id="time_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_5">6</label>
                <br>
                <input name="time" type="radio" value="5" id="time_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="time_6">7<br>a very long time</label>
                <br>
                <input name="time" type="radio" value="6" id="time_6" />
            </div>
        </div>
        <br>
    `

    let questions_array = [q_moral, q_stakes, q_average, q_ms_inferences, q_value, q_control, q_future, q_time]

    shuffleArray(questions_array)

    let all_questions = `
        <div class="prevent-select" style="text-align: left;">
            <br>
            ${questions_array[0]}
            ${questions_array[1]}
            ${questions_array[2]}
            ${questions_array[3]}
            ${questions_array[4]}
            ${questions_array[5]}
            ${questions_array[6]}
            ${questions_array[7]}
        </div>
    `

    return all_questions
}

const demographics_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        What is your age in years?
        <br>
        <input name="age" type="number" />
        <br>
        <br>
        With which gender do you identify?
        <div>
            <input name="gender" type="radio" value="man" id="man" />
            <label for="man">Man</label>
        </div>
        <div>
            <input name="gender" type="radio" value="woman" id="woman" />
            <label for="woman">Woman</label>
        </div>
        <div>
            <input name="gender" type="radio" value="nonbinary" id="nonbinary" />
            <label for="nonbinary">Nonbinary person</label>
        </div>
        <div>
            <input name="gender" type="radio" value="not_listed" id="not_listed" />
            <label for="not_listed">An identity not listed</label>
            <input name="unlisted_gender" type="text" />
        </div>
        <div>
            <input name="gender" type="radio" value="not_disclose_gender" id="not_disclose_gender" />
            <label for="not_disclose_gender">Prefer not to disclose</label>
        </div>
        <br>
        Please indicate how you identify yourself (Choose all that apply).
        <div>
            <input name="black_african_american" id="black_african_american" type="checkbox" />
            <label for="black_african_american">Black or African American</label>
        </div>
        <div>
            <input name="east_asian" id="east_asian" type="checkbox" />
            <label for="east_asian">East Asian</label>
        </div>
        <div>
            <input name="hispanic_latinx" id="hispanic_latinx" type="checkbox" />
            <label for="hispanic_latinx">Hispanic or Latina/o/x/e</label>
        </div>
        <div>
            <input name="ind_amer_amer_indian_alaska" id="ind_amer_amer_indian_alaska" type="checkbox" />
            <label for="ind_amer_amer_indian_alaska">Indigenous American, American Indian, or Alaska Native</label>
        </div>
        <div>
            <input name="middle_eastern_north_african" id="middle_eastern_north_african" type="checkbox" />
            <label for="middle_eastern_north_african">Middle Eastern or North African</label>
        </div>
        <div>
            <input name="native_hawaiian_pacific_islander" id="native_hawaiian_pacific_islander" type="checkbox" />
            <label for="native_hawaiian_pacific_islander">Native Hawaiian or other Pacific Islander</label>
        </div>
        <div>
            <input name="south_asian" id="south_asian" type="checkbox" />
            <label for="south_asian">South Asian</label>
        </div>
        <div>
            <input name="southeast_asian" id="southeast_asian" type="checkbox" />
            <label for="southeast_asian">Southeast Asian</label>
        </div>
        <div>
            <input name="white" id="white" type="checkbox" />
            <label for="white">White</label>
        </div>
        <div>
            <input name="other_race_ethnicity" id="other_race_ethnicity" type="checkbox" />
            <label for="other_race_ethnicity">Other</label>
            <input name="other_race_ethnicity_text" type="text" />
        </div>
        <div>
            <input name="not_disclose_race_ethnicity" id="not_disclose_race_ethnicity" type="checkbox" />
            <label for="not_disclose_race_ethnicity">Prefer not to disclose</label>
        </div>
        <br>
        What is your household income per year?
        <div>
            <input name="income" type="radio" id="00000" value="00000" />
            <label for="00000">< $10,000</label>
        </div>
        <div>
            <input name="income" type="radio" id="10000" value="10000" />
            <label for="10000">$10,000 to $19,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="20000" value="20000" />
            <label for="20000">$20,000 to $29,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="30000" value="30000" />
            <label for="30000">$30,000 to $39,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="40000" value="40000" />
            <label for="40000">$40,000 to $49,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="50000" value="50000" />
            <label for="50000">$50,000 to $59,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="60000" value="60000" />
            <label for="60000">$60,000 to $69,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="70000" value="70000" />
            <label for="70000">$70,000 to $79,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="80000" value="80000" />
            <label for="80000">$80,000 to $89,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="90000" value="90000" />
            <label for="90000">$90,000 to $99,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="100000" value="100000" />
            <label for="100000">$100,000 to $109,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="110000" value="110000" />
            <label for="110000">$110,000 to $119,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="120000" value="120000" />
            <label for="120000">$120,000 to $129,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="130000" value="130000" />
            <label for="130000">$130,000 to $139,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="140000" value="140000" />
            <label for="140000">$140,000 to $149,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="150000" value="150000" />
            <label for="150000">$150,000 to $159,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="160000" value="160000" />
            <label for="160000">$160,000 to $169,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="170000" value="170000" />
            <label for="170000">$170,000 to $179,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="180000" value="180000" />
            <label for="180000">$180,000 to $189,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="190000" value="190000" />
            <label for="190000">$190,000 to $199,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="200000" value="200000" />
            <label for="200000">> $200,000</label>
        </div>
        <br>
        What is the highest level of education you have received? (If you're currently enrolled in school, please indicate the highest degree you have received.)
        <div>
            <input name="education" type="radio" id="less_hs" value="0" />
            <label for="less_hs">Less than a high school diploma</label>
        </div>
        <div>
            <input name="education" type="radio" id="hs" value="1" />
            <label for="hs">High school degree or equivalent (e.g., GED)</label>
        </div>
        <div>
            <input name="education" type="radio" id="some_college" value="2" />
            <label for="some_college">Some college, no degree</label>
        </div>
        <div>
            <input name="education" type="radio" id="assoc" value="3" />
            <label for="assoc">Associate Degree (e.g., AA, AS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="bachelor" value="4" />
            <label for="bachelor">Bachelor's Degree (e.g., BA, BS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="post_grad" value="5" />
            <label for="post_grad">Postgraduate Degree (e.g., Master's Degree, Professional Degree, Doctorate Degree)</label>
        </div>
        <br>
        Think of this ladder as representing where people stand in the United States. 
        At the top of the ladder are the people who have the most money, most education, and most respected jobs. 
        At the bottom are the people who have the least money, least education, and least respected jobs/ no job. 
        The higher up you are on this ladder, the closer you are to the people at the very top. 
        The lower you are, the closer you are to the people at the very bottom.
        <img src="Macarthur_subjective_SES" alt="Socio-economic ladder">
        <br>
        Please indicate below where you would place yourself on this ladder.
        <div>
            <input name="ses" type="radio" id="1" value="1" />
            <label for="1">1 (bottom rung)</label>
        </div>
        <div>
            <input name="ses" type="radio" id="2" value="2" />
            <label for="2">2</label>
        </div>
        <div>
            <input name="ses" type="radio" id="3" value="3" />
            <label for="3">3</label>
        </div>
        <div>
            <input name="ses" type="radio" id="4" value="4" />
            <label for="4">4</label>
        </div>
        <div>
            <input name="ses" type="radio" id="5" value="5" />
            <label for="5">5</label>
        </div>
        <div>
            <input name="ses" type="radio" id="6" value="6" />
            <label for="6">6</label>
        </div>
        <div>
            <input name="ses" type="radio" id="7" value="7" />
            <label for="7">7</label>
        </div>
        <div>
            <input name="ses" type="radio" id="8" value="8" />
            <label for="8">8</label>
        </div>
        <div>
            <input name="ses" type="radio" id="9" value="9" />
            <label for="9">9</label>
        </div>
        <div>
            <input name="ses" type="radio" id="10" value="10" />
            <label for="10">10 (top rung)</label>
        </div>
        <br>
        In politics today, do you consider yourself a:
        <div>
            <input name="party" type="radio" id="rep" value="rep" />
            <label for="rep">Republican</label>
        </div>
        <div>
            <input name="party" type="radio" id="dem" value="dem" />
            <label for="dem">Democrat</label>
        </div>
        <div>
            <input name="party" type="radio" id="ind" value="ind" />
            <label for="ind">Independent</label>
        </div>
        <div>
            <input name="party" type="radio" id="other_party" value="other_party" />
            <label for="other_party">Something else</label>
            <input name="other_party_text" type="text" />
        </div>
        <br>
        Politically, how liberal or conservative are you?
        <div>
            <input name="politics" type="radio" id="vlib" value="0" />
            <label for="vlib">Very liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="lib" value="1" />
            <label for="lib">Liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="slib" value="2" />
            <label for="slib">Somewhat liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="mod" value="3" />
            <label for="mod">Moderate</label>
        </div>
        <div>
            <input name="politics" type="radio" id="scon" value="4" />
            <label for="scon">Somewhat conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="con" value="5" />
            <label for="con">Conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="vcon" value="6" />
            <label for="vcon">Very conservative</label>
        </div>
        <br>
        To what extent do you consider yourself to be religious?
        <div>
            <input name="religiosity" type="radio" id="nonrel" value="0" />
            <label for="nonrel">Not at all religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="srel" value="1" />
            <label for="srel">Slightly religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="mrel" value="2" />
            <label for="mrel">Moderately religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="vrel" value="3" />
            <label for="vrel">Very religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="unknown_rel" value="4" />
            <label for="unknown_rel">Don't know</label>
        </div>
        <br>
    </div>
`

const debrief_html = `
<div style="text-align: left;">
    <strong>What was this study about?</strong>
    <br>
    In this study, we were trying to better understand how people evaluate the morality behind being tempted and having to put effort into making moral decisions.
    <br>
    <br>
    <strong>Why does it matter?</strong>
    <br>
    Your participation helps us answer research questions, which in turn has implications for public figures, policy, and law.
    We are committed to sharing our research findings in ways that are accessible and relevant to the public.
    <br>
    <br>    
    <strong>How to contact us:</strong>
    <br>
    Feel free to visit our <a href="https://moralitylab.bc.edu/" target="_blank">website</a> to learn more about our research.
    If you have any concerns or questions about the study you just completed, please reach out to the lab at lypsychlab@gmail.com.
    <br>
    <br>
    <strong>To learn more about your rights as a research participant:</strong>
    <br>
    If you have any concerns about research-related ethics or harm, or would like to learn more about the ethical constraints under which this study was conducted, 
    please contact the Boston College Office for Research Protections at irb@bc.edu or 617-552-4778.
    <br>
    <br>
    <strong>Completion Code:</strong>
    <br>
    Thank you for participating in this study. Your response has been recorded.
    <br>
    <br>
    If the button below does not automatically enter your completion code, please copy and paste this code into Prolific: CUVG196A
    <br>
    <br>
</div>
`