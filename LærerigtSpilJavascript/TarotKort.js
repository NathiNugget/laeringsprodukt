


// Greek: "Zeus", "Poseidon", "Titans",  "hades", "ares", "athena", "apollo",
// Roman:
// Norse: "thor", "odin", "loke", "ratetosk", "Fenrir", "tyr",

var tarotkort = [
  {
    name: "Zeus",
    question: "Which 2 gods are zeuses brothers",
    answers: ["Ares and Apollo", "Poseidon and Hades", "Hermes and Janus"],
    correctAnswer: "Poseidon and Hades"
  },
  {
    name: "Poseidon",
    question: "What are Poseidon God for?",
    answers:["God of the Sea", "God of the skies", "God of the treeants"],
    correctAnswer: "God of the Sea"
  },
  {
    name: "Titansfall",
    question: "Who caused the titans to fall",
    answers: ["Zeus. Hades and Poseidon", "half gods toghter with the gods", "Titans destroyed themselfes"],
    correctAnswer: "Zeus. Hades and Poseidon"
  },
  {
    name: "Fenrir",
    question: "How did they cage Fenrir",
    answers: ["Fenrir was too strong?", "half gods toghter with the gods", "Titans destroyed themselfes"],
    correctAnswer: "Zeus. Hades and Poseidon"
  }
]


console.log(tarotkort[0].question);

  //function myFunction()
  """console.log(tarotkort[kort].name);"""


  myFunction(){
    var m = getRandomInt(5);
    if (m = 0){
      document.getElementById("tarotkort").innerHTML = ("zeus.png");
      document.getElementById("question").innerHTML = ("tarotkort[0].question")
      document.getElementById("answer").innerHTML = ()
    }
  else if (m = 1){
    document.getElementById("tarotkort").innerHTML = ("odin.png");

  }
}
