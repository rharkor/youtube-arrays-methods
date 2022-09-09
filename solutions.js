// 1: Afficher les trois derniers éléments d'un tableau
const exo1Data = [0, 4, 5, "l", 7, "nano"];
console.log(exo1Data.slice(exo1Data.length - 3));

// 2: Afficher le tableau avec chaque élément au carré
const exo2Data = [1, 5, 2, 3];
console.log(
  exo2Data.map((el) => {
    return el ** 2;
  })
);

// 3: Afficher le tableau en n'affichant que les éléments supérieurs à 10
const exo3Data = [5, 18, 6, 10, 3];
console.log(
  exo3Data.filter((el) => {
    return el > 10;
  })
);

// 4: Calculer la somme des éléments du tableau
const exo4Data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  exo4Data.reduce((a, b) => {
    return a + b;
  }, 0)
);

// 5: Compte le nombre de voyelles d'une chaine
const exo5Data = "Vieux motard que jamais";
const vowels = ["a", "e", "i", "o", "u"];
let number = 0;
exo5Data.split("").forEach((el) => {
  if (vowels.indexOf(el) !== -1) {
    number++;
  }
});
console.log(number);

// 6: Met en majuscule la première lettre d'une chaîne et le reste en minuscule
const exo7Data = "voler c'est vOler, REpeindre ses vOleTS";
const exo7Lower = exo7Data.toLowerCase().split("");
const firstLetter = exo7Lower[0].toUpperCase();
exo7Lower.splice(0, 1, firstLetter);
console.log(exo7Lower.join(""));

// 7: Verifie si un tableau est symétrique
const exo8Data = [0, 5, 5, 0];
const exo8DataReversed = [...exo8Data].reverse();
let equal = true;
exo8Data.forEach((el, i) => {
  if (el !== exo8DataReversed[i]) {
    equal = false;
  }
});
console.log(equal);

// 8: Teste si une chaine est un palindrome ou non
const exo6Data = "kayak";
const exo6DataReversed = [...exo6Data.split("")].reverse();
console.log(exo6Data === exo6DataReversed.join(""));

// 9: Met en majuscule la première lettre de chaque mot
const exo9Data = "voler c'est voler, repeindre ses volets";
let exo9DataSplitted = exo9Data.split(" ");
exo9DataSplitted = exo9DataSplitted.map((el) => {
  return el[0].toUpperCase() + el.slice(1);
});
console.log(exo9DataSplitted.join(" "));
