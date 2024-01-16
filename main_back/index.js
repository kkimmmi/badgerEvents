const express = require('express')
const cors = require('cors')
const app = express();
const mongosse = require('mongoose');
app.use(express.json())
app.use(cors())

const mongoUrl = "mongodb+srv://silvgab:E0hrR58G6SP5FxIJ@badgerevents.iddi8iy.mongodb.net/?retryWrites=true&w=majority"

mongosse.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected");
}).catch(e=>console.log(e))


require('./userInfoSchema');

const user = mongosse.model("userInfo");

app.post('/register', async(req, res) => {
    const uname = req.body.name;
    const upassward = req.body.passward;
    const uemail = req.body.email;
    await user.create({
        name: uname,
        passward: upassward,
        email: uemail,

    });

    res.send({status:"OK"});
})



const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

app.get('/', (req, res) => {
    res.send('Hello World!!')
})


app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send('The course with the given ID was not found')
    } 
    res.send(course)
})

app.post('/api/courses', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters')
        return
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)
    res.send(courses)
})


const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`))


