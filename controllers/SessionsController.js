const Sessions = require('../models').Sessions;

const getAll = (req,res) => {
    res.setHeader('Content-Type','application/json');
    let err, sessions;
    sessions = [{ Name: 'John Teaches Angular', Location: 'Miles-U 1' },
    { Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
    { Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },];
    return res.json(sessions);
}


module.exports.getAll = getAll;