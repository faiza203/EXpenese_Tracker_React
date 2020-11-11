export function configureNotification(){
Notification.requestPermission().then((permission) => {console.log(permission)}
)}