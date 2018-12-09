


// Greek: "Zeus", "Poseidon", "Titans",  "hades", "ares", "athena", "apollo",
// Roman:
// Norse: "thor", "odin", "loke", "ratetosk", "Fenrir", "tyr",

var tarotkort = [
  {
    name: "Zeus",
    question: "Which 2 gods are Zeus'es brothers?",
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
    question: "Who caused the titans to fall?",
    answers: ["Zeus. Hades and Poseidon", "half gods toghter with the gods", "Titans destroyed themselfes"],
    correctAnswer: "Zeus. Hades and Poseidon"
  },

   {
    name: "Apollo",
    question: "What is Appollo god for?",
    answers: ["God of art, archery and medicine", "God of art, Martial art and sun", "God of husbandry, poetry and health"],
    correctAnswer: "God of art, archery and medicine"
  },
  {
    name: "Athena",
    question: "Which god became forgotten in the Roman Era?",
    answers: ["Ares?", "Apollo?", "Athena?"],
    correctAnswer: "Athena?"
  },
  {
    name: "RomanGods",
    question: "Where did the roman gods originate from?",
    answers: ["Greek Gods?", "Nordic Gods?", "Egyption Gods?"],
    correctAnswer: "Greek Gods?"
  },
  {
    name: "Bellona",
    question: "Which god became a substitude for Athena in the roman empire?",
    answers: ["Pluto?", "Bellona?", "Venus?"],
    correctAnswer: "Bellona?"
  },
  {
    name: "Roman_brothers",
    question: "What is the names of the 3 highest ranked gods in the roman era?",
    answers: ["Jupiter, Saturn, Mars?", "Neptune, Jupiter, Juno?", "Neptune, Pluto, Jupiter?"],
    correctAnswer: "Neptune, Jupiter, Juno?"
  },
  {
    name: "God_of_Wine",
    question: "What was the god of wines name in greek and roman?",
    answers: ["Dionysus and Bacchus?", "Eros and Bacchus?", "Pan and Bacchus?"],
    correctAnswer: "Dionysus and Bacchus?"
  },
  {
    name: "Heroes",
    question: "which of these where heroes in both the greek and roman empire?",
    answers: ["Heracles, Odysseus, hercules and Ulysses?", "Odysseus, Selene, Ulysses and Faunus?", "Heracles, Helios, Hercules and uranus?"],
    correctAnswer: "Heracles, Odysseus, hercules and Ulysses?"
  },
  {
    name: "Victoria",
    question: "Which of these gods are god of Victory?",
    answers: ["Nike, Victoria?", "Eos, Aurora?", "Eros, Ops?"],
    correctAnswer: "Nike, Victoria?"
  },
  {
    name: "NordicGods",
    question: "Which in norse mythology is god of magic and wisdom?",
    answers: ["Odin?", "Loke?", "Bor?"],
    correctAnswer: "Odin?"
  },
  {
    name: "Valkyries",
    question: "What are a Valkyrie?",
    answers: ["Beautiful women warriors?", "Beautiful women who carried dying warriors to Valhalla?", "Beautiful women warriors which are married?"],
    correctAnswer: "Beautiful women who carried dying warriors to Valhalla?"
  },
  {
    name: "Fenrir",
    question: "Which god lost him had to Fenrir?",
    answers: ["Thor?", "Tyr?", "Idun?"],
    correctAnswer: "Tyr?"
  },
  {
    name: "War",
    question: "Which gods had wars against each other?",
    answers: ["Asgaard and Alfheim?", "Alfheim and Helheim?", "Asgaard and Hvergelmir?"],
    correctAnswer: "Asgaard and Alfheim?"
  }

]


console.log(tarotkort[0].question);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

  //function myFunction()
  //"""console.log(tarotkort[kort].name);"""

/*function myFunction(){
  console.log(m);
  //  var button1 = document.createElement("button").text;
   var currentButton = document.getElementById("button2");
    document.body.insertBefore(button1, currentButton);
    if (m > 0 && m < 2) {
    //  document.getElementById("Tarotkort").innerHTML = ("https://vignette.wikia.nocookie.net/robloxcreepypasta/images/d/d5/BOI.jpg/revision/latest?cb=20180102021626");
  //    document.getElementById("question").innerHTML = (tarotkort[0].question);
      console.log("Dette er kort 0");
      document.getElementById("Title").innerHTML = (tarotkort[0]).name;
      document.getElementById("Tarotkort").src = "images/" + tarotkort[0].name + ".png";
      document.getElementById("question1").value = tarotkort[0].answers[0];
      var q = document.getElementById("question1").value;
      console.log(q);
      document.getElementById("question1").innerHTML = tarotkort[0].answers[0];
      document.getElementById("question2").innerHTML = tarotkort[0].answers[1];
      document.getElementById("question3").innerHTML = tarotkort[0].answers[2];
  }
  else if (m > 1 && m < 3) {
    console.log("Dette er kort 1");
    document.getElementById("Title").innerHTML = (tarotkort[1]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[1].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[1].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[1].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[1].answers[2];
  }
  else if (m > 2 && m < 4) {
    console.log("Dette er kort 2");
    document.getElementById("Title").innerHTML = (tarotkort[2]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[2].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[2].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[2].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[2].answers[2];
  }
  else if (m > 3 && m < 5) {
    console.log("Dette kort er 3");
    document.getElementById("Title").innerHTML = (tarotkort[3]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[3].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[3].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[3].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[3].answers[2];
  }
  else if (m > 4 && m < 6) {
    console.log("Dette er kort 4");
    document.getElementById("Title").innerHTML = (tarotkort[4]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[4].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[4].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[4].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[4].answers[2];
  }
  else if (m > 5 && m < 7) {
    console.log("Dette er kort 5");
    document.getElementById("Title").innerHTML = (tarotkort[5]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[5].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[5].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[5].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[5].answers[2];
  }
  else if (m > 6 && m < 8) {
    console.log("Dette er kort 6");
    document.getElementById("Title").innerHTML = (tarotkort[6]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[6].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[6].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[6].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[6].answers[2];
  }
  else if (m > 7 && m < 9) {
    console.log("Dette er kort 7");
    document.getElementById("Title").innerHTML = (tarotkort[7]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[7].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[7].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[7].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[7].answers[2];
  }
  else if (m > 8 && m < 10) {
    console.log("Dette er kort 8");
    document.getElementById("Title").innerHTML = (tarotkort[8]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[8].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[8].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[8].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[8].answers[2];
  }
  else if (m > 9 && m < 11) {
    console.log("Dette er kort 9");
    document.getElementById("Title").innerHTML = (tarotkort[9]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[9].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[9].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[9].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[9].answers[2];
  }
  else if (m > 10 && m < 12) {
    console.log("Dette er kort 10");
    document.getElementById("Title").innerHTML = (tarotkort[10]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[10].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[10].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[10].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[10].answers[2];
  }
  else if (m > 11 && m < 13) {
    console.log("Dette er kort 11");
    document.getElementById("Title").innerHTML = (tarotkort[11]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[11].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[11].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[11].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[11].answers[2];
  }
  else if (m > 12 && m < 14) {
    console.log("Dette er kort 12");
    document.getElementById("Title").innerHTML = (tarotkort[12]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[12].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[12].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[12].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[12].answers[2];

  }
  else if (m > 13 && m < 15) {
    console.log("Dette er kort 13");
    document.getElementById("Title").innerHTML = (tarotkort[13]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[13].name + ".png";
    document.getElementById("question1").innerHTML = tarotkort[13].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[13].answers[1];
    document.getElementById("question3").innerHTML = tarotkort[13].answers[2];
  }
  else if (m > 14 && m < 16) {
    console.log("Dette er kort 14");
    document.getElementById("Title").innerHTML = (tarotkort[14]).name;
    document.getElementById("Tarotkort").src = "images/" + tarotkort[14].name + ".png";
    document.getElementById("question3").innerHTML = tarotkort[14].answers[2];
    document.getElementById("question1").innerHTML = tarotkort[14].answers[0];
    document.getElementById("question2").innerHTML = tarotkort[14].answers[1];
  }
  else {
      console.log("Du har ikke trukket et ordenligt kort");
    }
  }*/

var correctA = 0;
var p = 0;
// her defineres en funktion der
function notification(){
  window.alert("Du har klikket på mig")
}
function myFunction_short(){
  var m = getRandomInt(15);
  console.log(m);
  document.getElementById("question_title").value = tarotkort[m].question;
  document.getElementById("question_title").innerHTML = tarotkort[m].question;
  document.getElementById("Tarotkort").src = "images/" + tarotkort[m].name + ".png";
  document.getElementById("answer1").value = tarotkort[m].answers[0];
  document.getElementById("answer2").value = tarotkort[m].answers[1];
  document.getElementById("answer3").value = tarotkort[m].answers[2];
  var q = document.getElementById("answer1").value
  console.log(q);
  document.getElementById("answer1").innerHTML = tarotkort[m].answers[0];
  document.getElementById("answer2").innerHTML = tarotkort[m].answers[1];
  document.getElementById("answer3").innerHTML = tarotkort[m].answers[2];
  correctA = m;
}

function svar(clicked_id){

  var svar_klik = document.getElementById(clicked_id).value;
  if (svar_klik == tarotkort[correctA].correctAnswer) {
    p++;
    window.alert("Det var rigtigt");
    document.getElementsByTagName('title')[0].innerHTML = "Du har " + p + " points";
    document.getElementById('counter').innerHTML = "Du har " + p + " points";
    myFunction_short();
  }

  else if (svar_klik != tarotkort[correctA].correctAnswer) {
    p = p-1;
    window.alert("Det var ikke rigtigt");
    document.getElementsByTagName('title')[0].innerHTML = "Du har " + p + " points";
    document.getElementById('counter').innerHTML = "Du har " + p + " points";
    myFunction_short();
  }
  console.log(svar);
}
