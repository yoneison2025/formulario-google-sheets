// Importar Firebase
document.write('<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"><\/script>');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDi814l8RdzuRvHGN6yKkVX9SkaXgA8uX8",
    authDomain: "bdatosnormas.firebaseapp.com",
    projectId: "bdatosnormas",
    storageBucket: "bdatosnormas.firebasestorage.app",
    messagingSenderId: "274260128540",
    appId: "1:274260128540:web:6afd65e70385efeb95c0d9",
    measurementId: "G-QDT3LFRJM4"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
