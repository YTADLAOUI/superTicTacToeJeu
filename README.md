 # README - Jeu Tic-Tac-Toe 20x20 pour MediaGame
 ## Contexte du Projet
MediaGame est une start-up spécialisée dans les jeux en ligne. Ils souhaitent améliorer l'expérience de leurs utilisateurs en leur permettant de découvrir de nouveaux jeux. Dans cette optique, ils ont décidé de créer un jeu de Tic-Tac-Toe 20x20.

L'objectif de ce projet est d'implémenter un jeu de Tic-Tac-Toe en JavaScript, où deux joueurs s'affrontent tour à tour. Le premier joueur commence à jouer, et les joueurs placent leurs symboles (X ou O) sur un plateau de jeu de 20x20 cases. Le joueur qui parvient à former une série droite de 5 blocs remporte la partie. Le jeu se déroule entièrement sur le front-end en utilisant HTML et CSS pour l'interface utilisateur, et les données sont stockées localement à l'aide du localStorage.

## Interface de Jeu
Le jeu présente les caractéristiques suivantes :

- Un plateau de jeu de 20x20 cases est affiché.
- Deux joueurs peuvent jouer tour à tour en cliquant sur une case vide du plateau pour y placer un "X" ou un "O".
- L'interface indique clairement quel joueur (X ou O) doit jouer.
## Mécanique de Jeu
La mécanique du jeu fonctionne comme suit :

- Le jeu détecte et annonce un gagnant dès qu'un joueur parvient à aligner 5 de ses symboles (X ou O) en ligne, en colonne ou en diagonale.
- Si toutes les cases sont remplies et qu'aucun joueur n'a réussi à aligner 5 de ses symboles, le jeu annonce un match nul.
## Fonctions Supplémentaires
Le jeu propose également des fonctionnalités supplémentaires :

- Un bouton permet de recommencer une nouvelle partie sans avoir à rafraîchir la page.
- Un score des victoires pour chaque joueur est conservé et affiché à côté du plateau.
(Note optionnelle : Vous pouvez permettre aux joueurs de choisir leur symbole avant de commencer une partie.)

## Design et Réactivité
L'interface du jeu est conçue pour être conviviale et attrayante :

- Le jeu est jouable sur des appareils mobiles tels que des smartphones et des tablettes, ainsi que sur des ordinateurs de bureau.
- Des styles de base sont appliqués pour rendre le jeu visuellement attrayant.
## Code
Pour assurer la maintenabilité du code, suivez ces meilleures pratiques :

- Structurez votre code en utilisant des fonctions pour séparer les différentes logiques de jeu.
- Commentez votre code de manière à ce qu'une autre personne puisse le comprendre facilement.
- Effectuez des tests approfondis pour éliminer tout bug éventuel.
## Conclusion
Le jeu Tic-Tac-Toe 20x20 pour MediaGame est un projet passionnant qui offre une expérience de jeu améliorée à leurs utilisateurs. Nous espérons que ce README vous aidera à comprendre les objectifs, la mécanique et la structure du jeu. Bonne programmation et amusez-vous bien en jouant au Tic-Tac-Toe 20x20 !
