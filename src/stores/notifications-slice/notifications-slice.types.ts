 export type Notification = {
    text: string,
    error: boolean,
    show: boolean
 }
 
 export type NotificationsSlice = {
    notification: Notification,
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
    closeNotification: () => void,

 }