import React from 'react';

// Définir une interface pour les props
interface GreetingProps {
  name: string; // La prop "name" est une chaîne de caractères
}

// Composant fonctionnel avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Vérifiez que "name" est bien passé et non null ou undefined
  if (!name) {
    return (
        <div>Error: Name is required!</div>
    );
  }

  // Retourne un élément JSX qui affiche un message de salutation
  return (
  <div>Hello, {name}!</div>
);
};

// Exporter le composant pour qu'il puisse être utilisé dans d'autres fichiers
export default Greeting;