import express from 'express'
import { data } from './dog_facts.js'

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/dogfacts', (req, res) => {
    if ('number' in req.query && req.query.number < data.length) {
        const num = req.query.number < data.length && req.query.number >= 0 ? req.query.number : -1
        const facts = []

            for (let i = 0; i < num; i++) {
                facts.push(data[i])
            }

            if (num >= 0) {
                res.send(facts)
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