import express from 'express'
import { data } from './dog_facts.js'

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/dogfacts', (req, res) => {
    if ('number' in req.query && req.query.number < data.facts.length) {
        const num = req.query.number
        const factList = {"facts" : []}
        console.log(num)

            for (let i = 0; i < num; i++) {
                factList.facts.push(data.facts[i])
            }

            if (num >= 0) {
                res.send(factList)
            } else {
                res.send('Invalid Number Query')
            }
            
    } else {
        res.send(data)
    }
    
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
})

app.listen(app.get('port'), () => {
    console.log("Express server is running!")
});