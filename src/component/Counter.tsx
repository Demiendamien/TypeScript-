import React, { Component } from 'react';

// Définir une interface pour l'état du composant
// Cette interface décrit la structure de l'état
interface CounterState {
  count: number; // L'état contient une propriété "count" de type number
}

// Définir une interface pour les props du composant
// Ici, les props sont vides, mais on les définit pour respecter les bonnes pratiques
interface CounterProps {}

// Composant de classe avec typage des props et de l'état
// Component<CounterProps, CounterState> indique que le composant utilise ces interfaces
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état avec le typage
  // L'état est défini comme un objet conforme à l'interface CounterState
  state: CounterState = {
    count: 0, // La valeur initiale de "count" est 0
  };

  // Méthode pour incrémenter le compteur
  // Cette méthode met à jour l'état en augmentant la valeur de "count" de 1
  increment = (): void => {
    // Utilisation de this.setState pour modifier l'état
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Méthode render : retourne l'interface utilisateur du composant
  render() {
    return (
      <div>
        {/* Affiche la valeur actuelle du compteur */}
        <p>Count: {this.state.count}</p>
        {/* Bouton pour incrémenter le compteur */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Exporter le composant pour qu'il puisse être utilisé dans d'autres fichiers
export default Counter;