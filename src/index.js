const estMultiple = (nombre) => {
  return (
    nombre % 3 === 0 && nombre % 5 === 0 && nombre % 7 === 0 && nombre % 9 === 0
  );
};

const trouverNombreN = () => {
  let nombre = 100000000;

  while (!estMultiple(nombre)) {
    nombre++;
  }

  return nombre;
};

const creerListeEncodeeAPartirDeTableau = (tableau) => {
  const occurences = new Map();

  const obtenirEncodage = (element, index) => {
    if (!occurences.has(element)) {
      occurences.set(element, index + 1);
      return `E${element}`;
    } else {
      const premiereApparition = occurences.get(element);
      occurences.set(element, premiereApparition + 1); // Mettre à jour la position
      return `R${premiereApparition}`;
    }
  };

  // Appliquer la fonction d'encodage à chaque élément du tableau
  const listeEncodee = tableau.map((element, index) =>
    obtenirEncodage(element, index)
  );

  return listeEncodee;
};

const N = trouverNombreN();
const L = N.toString().split('');
const L2 = creerListeEncodeeAPartirDeTableau(L);

console.log(`N = ${N}`);
console.log(`L = ${L.join(', ')}`);
console.log(`L' = ${L2.join(', ')}`);
