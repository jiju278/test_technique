// Tache 1
// Fonction pour vérifier si un nombre est divisible par tous les diviseurs requis
const estMultiple = (nombre) => {
  return (
    nombre % 3 === 0 && nombre % 5 === 0 && nombre % 7 === 0 && nombre % 9 === 0
  );
};

// Fonction pour trouver le plus petit nombre supérieur ou égal à 100'000'000 qui soit multiple de 3, 5, 7 et 9
const trouverNombreN = () => {
  let nombre = 100000000;

  while (!estMultiple(nombre)) {
    nombre++;
  }

  return nombre;
};

const creerListeEncodee = (listeChiffres) => {
  const occurences = new Map();

  // Fonction pour obtenir l'encodage d'un élément
  const obtenirEncodage = (element, index) => {
    if (!occurences.has(element)) {
      occurences.set(element, index + 1);
      return `E${element}`;
    } else {
      const premiereApparition = occurences.get(element);
      return `R${premiereApparition}`;
    }
  };

  // Appliquer la fonction d'encodage à chaque élément de la liste
  const listeEncodee = listeChiffres.map((element, index) =>
    obtenirEncodage(element, index)
  );

  return listeEncodee;
};

const N = trouverNombreN();
const L = N.toString().split('').join(', ');
const listeEncodee = creerListeEncodee(L.split());

console.log(`N = ${N}`);
console.log(`L = ${L}`);
console.log(`L' = ${listeEncodee.join(', ')}`);
