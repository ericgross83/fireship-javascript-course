import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import {Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI
})

const openai = new OpenAIApi(configuration)

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/dream', async (req, res) => {

    const prompt = req.body.prompt;
    const aiResponse = await openai.createImage({
        prompt, 
        n: 1,
        size: '1024x1024'
    })

const image = aiResponse.data.data[0].url;
res.send({image})

});

app.listen(1234, ()=> console.log('make art on http://loclhost:1234/dream'))