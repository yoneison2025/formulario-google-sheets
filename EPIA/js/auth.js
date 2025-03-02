document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("googleLogin").addEventListener("click", function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.signInWithPopup(provider).then(result => {
            const user = result.user;

            // Guardar usuario en Firestore
            db.collection("usuarios").doc(user.uid).set({
                nombre: user.displayName,
                email: user.email,
                foto: user.photoURL,
                uid: user.uid
            }).then(() => {
                console.log("Usuario guardado en Firestore");
                document.getElementById("user").innerText = `Bienvenido, ${user.displayName}`;
            }).catch(error => {
                console.error("Error guardando usuario:", error);
            });

        }).catch(error => {
            console.error(error);
        });
    });
});
