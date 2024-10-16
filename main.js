const readline = require('readline'); // toujours le garder

// Créer une interface de lecture pour le terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inventaire du joueur
let inventory = [];
let shipRepaired = false; // État du vaisseau

// Fonction principale pour démarrer le jeu
const startGame = () => {
    console.log("Bienvenue dans l'Aventure Spatiale !");
    console.log("Tu es le commandant d'un vaisseau spatial perdu dans l'immensité de l'espace.");
    gameLoop(); // Démarre la boucle de jeu
};

// Boucle de jeu principale
const gameLoop = () => {  // Vérifie si le vaisseau est réparé
    if (shipRepaired) {
        console.log("\nLe vaisseau est réparé ! Tu peux maintenant repartir vers la Terre. Bravo !");
        rl.close(); // Ferme l'interface
        return;
    }

// Affiche les options disponibles
    console.log("\nQue souhaites-tu faire ?");
    console.log("1. Scanner la zone à la recherche de planètes");
    console.log("2. Vérifier les systèmes du vaisseau");
    console.log("3. Établir un contact radio");
    console.log("4. explorer le vaisseau");
    console.log("5. Voir mon inventaire");

     // Pose la question au joueur
    rl.question('Choisis une option (1, 2, 3 ou 4) : ', (answer) => {
        switch(answer) {
            case '1':
                ScanPlanets(); // Scanner la zone
                break;
            case '2':
                checkSystems(); // Vérifier les systèmes du vaisseau
                break;
            case '3':
                SetUpContact(); // Établir un contact radio
                break;
            case '4':
                ExploreShip(); // explorer le vaisseau
                break;
            case '5':
                showInventory(); // Afficher l'inventaire
                break;
            default:
                console.log("Choix invalide. Essaie encore !");
                gameLoop(); // Recommencer la boucle
        }
    });
};

// Fonction pour scanner la zone
const ScanPlanets = () => {
    console.log("\nTu utilises le scanner et découvres une planète habitable !");
    console.log("1. Atterrir sur la planète");
    console.log("2. Continuer à explorer l'espace");

    rl.question('Choisis une option (1 ou 2) : ', (answer) => {
        if (answer === '1') {
            console.log("Tu as atterri sur la planète et découvert une forme de vie extraterrestre !");
            collectItem("Cristal Alien"); // Collecte un objet
            gameLoop(); // Recommencer la boucle
        } else {
            console.log("Tu continues à explorer l'espace.");
            gameLoop(); // Recommencer la boucle
        }
    });
};

// Fonction pour vérifier les systèmes du vaisseau
const checkSystems = () => {
    console.log("\nTu vérifies les systèmes du vaisseau.");
    console.log("1. Réparer le moteur");
    console.log("2. Vérifier les réserves d'oxygène");

    rl.question('Choisis une option (1 ou 2) : ', (answer) => {
        if (answer === '1') {
            if (inventory.includes("Outils de Réparation")) { // Vérifie si l'objet est dans l'inventaire
                console.log("Moteur réparé ! Tu peux maintenant naviguer vers la prochaine étoile !");
                shipRepaired = true; // Marque le vaisseau comme réparé
            } else {
                console.log("Tu as besoin d'outils de réparation pour réparer le moteur !");
            }
            gameLoop(); // Recommencer la boucle
        } else {
            console.log("Les réserves d'oxygène sont faibles. Tu dois agir rapidement !");
            gameLoop(); // Recommencer la boucle
        }
    });
};

// Fonction pour établir un contact radio
const SetUpContact = () => {
    console.log("\nTu établis un contact radio.");
    console.log("1. Appeler la Terre");
    console.log("2. Essayer de contacter un vaisseau voisin");

    rl.question('Choisis une option (1 ou 2) : ', (answer) => {
        if (answer === '1') {
            console.log("La Terre répond et envoie un vaisseau pour te secourir. Mais tu doit d'abord réparer le vaisseau pour éviter de te faire aspirer par l'espace!");
            gameLoop(); // Recommencer la boucle
        } else {
            console.log("Tu reçois un message d'un vaisseau voisin qui t'informe d'une tempête spatiale imminente !");
            collectItem("Panneau de Signalisation"); // Collecte un objet
            gameLoop(); // Recommencer la boucle
        }
    });
};

// Fonction pour explorer le vaisseau
const ExploreShip = () => {
    console.log("\nTu te balade dans le vaisseau et tu vois une piece que tu ne connais pas");
    console.log("1. Aller l'explorer");
    console.log("2. Continuer de se balader dans le vaisseau");

    rl.question('Choisis une option (1 ou 2) : ', (answer) => {
        if (answer === '1') {
            console.log("Tu as trouvé la salle ou se situe toute la mécanique et découvert un outils de réparation !");
            collectItem("Outils de Réparation"); // Collecte un objet
            gameLoop(); // Recommencer la boucle
        } else {
            console.log("Tu continues à explorer le vaisseau.");
            gameLoop(); // Recommencer la boucle
        }
    });
};
// Fonction pour collecter un objet
const collectItem = (item) => {
    console.log(`Tu as collecté un ${item} !`);
    inventory.push(item); // Ajoute l'objet à l'inventaire
    gameLoop(); // Recommencer la boucle
};

// Fonction pour afficher l'inventaire
const showInventory = () => {
    if (inventory.length === 0) {
        console.log("Ton inventaire est vide."); // Message si l'inventaire est vide
    } else {
        console.log("Inventaire : " + inventory.join(', ')); // Affiche les objets de l'inventaire
    }bvbvb
    gameLoop(); // Recommencer la boucle
};

// Démarre le jeu
startGame();
