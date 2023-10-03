const core = require("@actions/core")

try {

    const tag = core.getInput("tag")

    const tagComponents = tag.split(/([a-z]+)/)
        .filter(item => item.trim().length > 0)

    const target = tagComponents[0]

    const version = tagComponents[1]

    const sanitized = Number(version.split(".").join("")) + 1

    const converted = sanitized.toString().padStart(3, "0").split("").join(".")

    const prefixed = `${target}${converted}`

    core.setOutput("tag-version", prefixed)

} catch (error) {
    core.setFailed(error.message)
}