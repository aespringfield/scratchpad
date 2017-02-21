var firstVowel = function (word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var i in vowels) {
    if (word.charAt(0) === vowels[i]) {
      return true;
    }
  }
  return false;
};

var articleAgreement = function (noun) {
  if (noun.charAt(noun.length-1) !== "s") {
    if (firstVowel(noun)) {
      noun = "an " + noun;
    } else {
      noun = "a " + noun;
    }
  }
  return noun;
};

var capitalize = function (word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
};

var poopCute = function (animal) {
  animal = articleAgreement(animal);
  animal = capitalize(animal);
  return (animal + " " + verbAgreement(animal, "poop") + " everywhere, but no one cares because they're so darn cute!");
};

var poopCuteArray = function (animalArray) {
  for (var i in animalArray) {
    poopCute(animalArray[i]);
  }
};

var travelSocks = function (animal) {
  animal = articleAgreement(animal);
  animal = capitalize(animal);
  return (animal + " always " + verbAgreement(animal, "travel") + " with an extra pair of socks in a fanny pack--just in case!");
};

var hateOnions = function(animal) {
  animal = articleAgreement(animal);
  animal = capitalize(animal);
  return (animal + " " + verbAgreement(animal, "hate") + " onions.");
};

var giveGifts = function(animal) {
  animal = articleAgreement(animal);
  animal = capitalize(animal);
  return (animal + " " + verbAgreement(animal, "give") + " very bad Christmas gifts.");
};

var animals = ["lizard", "squids", "parakeet", "elephants", "impala", "baby", "weasel", "Eels", "Egret"];
//poopCuteArray(animals);

var userAnimal = prompt("Type a kind of animal to learn a fact about them!");

var pickFact = function (animal) {
  var randDec = Math.random();
  if (randDec < 0.25) {
    return poopCute(animal);
  } else if (randDec < 0.5) {
    return travelSocks(animal);
  } else if (randDec < 0.75) {
    return hateOnions(animal);
  } else {
    return giveGifts(animal);
  }
};

var elAnimalFact = document.getElementById("animalFact");
elAnimalFact.textContent = pickFact(userAnimal);

var elLikeIke = document.getElementById("ikeYes");

if (elLikeIke) {
  console.log(elLikeIke.value);
}
