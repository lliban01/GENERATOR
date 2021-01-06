//import jest, inquiror
var jest        =  require("jest");
var inquirer    =  require("inquirer");
var fs          =  require("fs");
var path        =  require("path");
var render      =  require("./lib/htmlrender");
//var Employee    =  require("./lib/Employee");  ---- NOT USED AT ALL
var engineer    =  require("./lib/engineer");
var manager     =  require('./lib/manager');
var intern      =  require('./lib/intern');
const OUTPUT_DIR = path.resolve(__dirname, "output");

var prompt      =  inquirer.createPromptModule();
var teamMates   =  [];

function myEngineer(){
    var enQuestions    = [
        {type: "input",name: "enName",message: "What is your Engineers's name?"},
        {type: "input",name: "enId",message: "What is your Engineers's ID?"},
        {type: "input",name: "enEmail",message: "What is your Engineers's email?"},
        {type: "input",name: "enGithub",message: "What is your Engineers's github account?"}
    ]
    inquirer.prompt(enQuestions).then(function (data){
        var myEngineerGuy = new engineer(data.enName, data.enId, data.enEmail, data.enGithub);
        teamMates.push(myEngineerGuy);
        addMore()
    })
}
function myManager(){
    var manQuestions   = [
        {type: "input",name: "manName",message: "What is your Manager's name?"},
        {type: "input",name: "manId",message: "What is your Manager's ID?"},
        {type: "input",name: "manEmail",message: "What is your Manager's email?"},
        {type: "input",name: "manNumber",message: "What is your Manager's office number?"}
    ]
    inquirer.prompt(manQuestions).then(function (data){
        var myBoss = new manager(data.manName, data.manId, data.manEmail, data.manNumber);
        teamMates.push(myBoss);
        // console.log(myManager.name + " : "+ teamMates.length) ;
        addMore()
    })
    //addMore()
}

function addMore(){
    var moreQuestions = [
        {type:"list",name:"myChoice",message:"What kind of employee do you want to add?",
        choices: ["Intern", "Engineer", "Don't add anymore people"]},
    ]

    inquirer.prompt(moreQuestions).then(function(data){
        if (data.myChoice == "Intern"){
            myIntern();
        }else if (data.myChoice == "Engineer"){
            myEngineer();
        }else {
            console.log("Thats ALL FOLKS  " )
            createTeam("MyTeam");
        }
    })
}
function myIntern(){
    var qIntern = [{type:"input",name:"iName",message:"What is the Intern's Name?"},
                   {type:"input",name:"iID",message:"What is the Intern's ID?"},
                   {type:"input",name:"iEmail",message:"What is the Intern's Email?"},
                   {type:"input",name:"iSchool",message:"What is the Intern's School?"}]
    inquirer.prompt(qIntern).then(function(data){
        var newIntern = new intern(data.iName,data.iID,data.iEmail,data.iSchool);
        teamMates.push(newIntern); 
        addMore()   
    })
}   

var createTeam = function (teamName) {
    var outputPath = path.join(OUTPUT_DIR, teamName + ".html");

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }

    fs.writeFileSync(outputPath, render(teamMates), function(err) {
        if (err) {
            console.log(err);
            
        }
    })
}

// starts code here
myManager();

