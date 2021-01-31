const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

let map = {
  success: { emoji: '✓', text: 'Success' },
  failure: { emoji: '✗', text: 'Failure' },
}

async function run() {
  try {
    let INTEGROMAT_URL = 'https://hook.integromat.com/'
    let INTEGROMAT_KEY = core.getInput('integromat_key')
    let STATUS = core.getInput('status')
    let headers = {
      'Content-Type': 'application/json',
    }

    let message = ''
    message += `${map[STATUS].emoji} ${map[STATUS].text} \n`
    message += github.context.payload.repository.url

    await axios.post(INTEGROMAT_URL + INTEGROMAT_KEY, { message }, { headers })
  } catch (error) {
    core.setFailed(error.message)
  }
}

void run()
