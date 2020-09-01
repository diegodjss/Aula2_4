import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/grades', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    console.log("Conectado.")
).catch((err) => {
    console.log("Error:" + err);
});

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    subject:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        require: true,
    },
    value:{
        type: Number,
        require: true,
    },
    lastModified:{
        type: Date,
        default: Date.now(),
    }
});

mongoose.model('student', studentSchema);

const student = mongoose.model('student');
new student({
    name:"Paulo Assis",
    subject:"Matematica",
    type: "Trabalho Pratico",
    value: 22
}).save().then( () => {
    console.log('Documento inserido');
}).catch((err) => {
    console.log("Error:" + err);
});

