const core = require("@actions/core")
const github = require("@actions/github")
const fs = require("fs")

try {
    const path = core.getInput("path");
    const exists = fs.existsSync(`${path}/extensions/`);
    var hasExtensions = false;
    if (exists) {
        hasExtensions = fs.readdirSync(`${path}/extensions/`, { withFileTypes: true })
            .find(item => item.isDirectory()) ? true : false;
    }
    const result = result ? "true" : "false";
    core.setOutput("ready", result);
} catch (error) {
    core.setFailed(error.message)
}