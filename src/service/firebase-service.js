export function configureNotification() {
    Notification.requestPermission().then((permission) => {
       if(permission === "granted"){
        messaging.getToken({ vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
            if (currentToken) {
                 console.log("TOKEN =>" , currentToken);
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        })
       }
    })
}