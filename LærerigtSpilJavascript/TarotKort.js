


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
    name: "Apollo",
    question: "What are appollo god for?",
    answers: ["God of art, archery and medicine", "God of art, Martial art and sun", "God of husbandry, poetry and health"],
    correctAnswer: "God of art, archery and medicine"
  },
  {
    name: "Athena",
    question: "Which god became forgotten in the roman era?",
    answers: ["Ares?", "Apollo?", "Athena?"],
    correctAnswer: "Athena?"
  },
  {
    name: "RomenGods",
    question: "Where did the roman gods originate from?",
    answers: ["Greek Gods?", "Nordic Gods?", "Egyption Gods?"],
    correctAnswer: "Greek Gods?"
  },
  {
    name: "Bellona",
    question: "Which god became a substitude for Athena in the roman empire",
    answers: ["Pluto?", "Bellona?", "Venus?"],
    correctAnswer: "Athena?"
  },
  {
    name: "Roman brothers",
    question: "What is the names of the 3 highest ranked gods in the roman era",
    answers: ["Jupiter, Saturn, Mars?", "Neptune, Jupiter, Juno?", "Neptune, Pluto, Jupiter?"],
    correctAnswer: "Neptune, Jupiter, Juno?"
  },
  {
    name: "God of Wine",
    question: "What was the god of wines name in greek and roman",
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
    name: "GodofVictory",
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
    correctAnswer: "Asgaard and Alfheim??"
  }

]


console.log(tarotkort[0].question);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

  //function myFunction()
  //"""console.log(tarotkort[kort].name);"""

var m = getRandomInt(10);
console.log(m)
function myFunction(){
  console.log(m);

    if (m > 0 && m <5) {
    //  document.getElementById("Tarotkort").innerHTML = ("https://vignette.wikia.nocookie.net/robloxcreepypasta/images/d/d5/BOI.jpg/revision/latest?cb=20180102021626");
  //    document.getElementById("question").innerHTML = (tarotkort[0].question);
      console.log("Yeet");
  }
  else if (m > 5 && m < 10) {
    console.log("Ayy");
  }
      //  document.getElementById("Tarotkort").innerHTML = ("https://vignette.wikia.nocookie.net/robloxcreepypasta/images/d/d5/BOI.jpg/revision/latest?cb=20180102021626");

    else {
      console.log("Never mind");
    }
  }
