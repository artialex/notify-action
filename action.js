const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

async function run() {
  try {
    let INTEGROMAT_URL = 'https://hook.integromat.com/'
    let INTEGROMAT_KEY = core.getInput('integromat_key')
    let STATUS = core.getInput('status')
    let headers = {
      'Content-Type': 'application/json',
    }

    let message = ''
    message += `${STATUS} \n`
    message += github.context.payload.repository.url

    await axios.post(`${INTEGROMAT_URL}`, { message }, { headers })
  } catch (error) {
    core.setFailed(error.message)
  }
}

void run()
