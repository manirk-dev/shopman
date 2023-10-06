const core = require("@actions/core")
const github = require("@actions/github")

try {

    const source = core.getInput("source")
    const search = core.getInput("search")

    const eventType = github.context.payload.action

    console.log("Event Type: ", eventType)

    var regExp = new RegExp(search, "gi")

    const result = (source.match(regExp) || []).length

    core.setOutput("should-deploy", result === 0 || (result % 2 === 0 && eventType !== "opened"))

} catch (error) {
    core.setFailed(error.message)
}