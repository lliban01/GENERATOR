//import jest, inquiror
var jest        =  require("jest");
var inquirer    =  require("inquirer");
var fs          =  require("file-system");
var Employee    =  require("./lib/Employee");
var engineer    =  require("./lib/engineer");
var manager     =  require('./lib/manager');
var intern      =  require('./lib/intern');
var prompt      =  inquirer.createPromptModule();
var teamMates   =  [];
//generate questions
//var questions   = ["What is your name?","What is your Role?","What is your ID?","What is your School or github or office Number?"]
function myEngineer(){
    console.log("you have chosen an Engineer")
    teamMates.push("engineer");
}
function myManager(){
    var manQuestions   = [
        {
            type: "input",name: "manName",message: "What is your Manager's name?"
        },
        {
            type: "input",name: "manId",message: "What is your Manager's ID?"
        },
        {
            type: "input",name: "manEmail",message: "What is your Manager's email?"
        },
        {
            type: "input",name: "manNumber",message: "What is your Manager's office number?"
        }
    ]
    
    inquirer.prompt(manQuestions).then(function (data){
        var myManager = new manager(data.manName, data.manId, data.manEmail, data.manNumber);
        teamMates.push(myManager);
        // console.log(myManager.name + " : "+ teamMates.length) ;
    })
    addMore()
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
            console.log("Thats ALL FOLKS")
        }
    })
}
function myIntern(){
    var qIntern = [{type:"input",name:"iName",message:"What is the Intern's Name?"},
                   {type:"input",name:"iID",message:"What is the Intern's ID?"},
                   {type:"input",name:"iEmail",message:"What is the Intern's Email?"},
                   {type:"input",name:"iSchool",message:"What is the Intern's School?"}]
    inquirer.prompt(qIntern).then(function(data){
        var newIntern = new intern(data.name,data.iId,data.iEmail,data.iSchool);
        teamMates.push(newIntern);    
    })
}   
// starts code
myManager();

//myEngineer
//myIntern
//myEmployee
//generate html and css code (use css flex wrap and bootstrap cards)c