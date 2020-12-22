const RootComponent = {
  data() {
    return {
      title: "CAROUSEL",
      listeImg: [
        "../ressources/christmas-sweater.jpg",
        "../ressources/masque-moustache.jpg",
        "../ressources/tetris-lamp.jpg",
        "../ressources/ressources.jpeg",
      ],
    };
  },
  methods: {},
};
const app = Vue.createApp(RootComponent);

// Etape pour rajouter un composant :
// 1 --- Le crée dans une page js à part
// 2 --- Mettre une balise script dans le html pour le lier : <script src="moncomposant">
// 3 --- Ajouter la balise <script> const vm = app.mount("#app");</script>
