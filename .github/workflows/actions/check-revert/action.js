const core = require("@actions/core")
const github = require("@actions/github")

try {

    const prHeadRef = core.getInput("pr-head-ref")
    const ghHeadRef = core.getInput("gh-head-ref")
    const ghRef = core.getInput("gh-ref")
    const search = core.getInput("search")


    const source = prHeadRef || ghHeadRef || ghRef
    const eventType = github.context.payload.action || github.context.action

    console.log("Event Type: ", eventType)

    var regExp = new RegExp(search, "gi")

    const result = (source.match(regExp) || []).length

    core.setOutput("should-deploy", result === 0 || (result % 2 === 0 && eventType !== "opened"))

} catch (error) {
    core.setFailed(error.message)
}