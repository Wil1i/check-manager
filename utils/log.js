const Log = require("../models/Log")

const submit = async (type, user, title, description) => {
  await Log.create({
    type,
    user,
    title,
    description
  })

  console.log(`[LOG] ${user} -> ${title}`)
}

module.exports = {
  submit
}