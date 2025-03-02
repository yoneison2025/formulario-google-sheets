document.addEventListener("DOMContentLoaded", function() {
    const auth = firebase.auth();
    
    document.getElementById("googleLogin").addEventListener("click", function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => {
            document.getElementById("user").innerText = `Bienvenido, ${result.user.displayName}`;
        }).catch(error => {
            console.error(error);
        });
    });
});
