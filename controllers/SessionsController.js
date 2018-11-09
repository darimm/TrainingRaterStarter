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

const get = (req, res) => {
    let sessionId = parseInt(req.params.sessionId);
    res.setHeader('Content-Type','application/json');
    let err, sessions;
    sessions = [{ Id: 1, Name: 'John Teaches Angular', Location: 'Miles-U 1' },
    { Id: 2, Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
    { Id: 3, Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },];
    let session = sessions.find(obj => {obj.Id === sessionId});
    console.log('Session:',session)
}

module.exports.get = get;