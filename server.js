const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 30,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLoaction': 'London, England'
    },
    'stormzy':{
        'age': 29,
        'birthName': 'Michael Ebenezer Kwadjo Omari Owuo Jr.',
        'birthLoaction': 'London, England'
    },
    'skepta':{
        'age': 40,
        'birthName': 'Joseph Olaitan Adenuga Jr.',
        'birthLoaction': 'London, England'
    },
    'dylan':{
        'age': 30,
        'birthName': 'Dylan',
        'birthLoaction': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})

