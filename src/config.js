import {io} from 'socket.io-client'

// export const SOCKET = io('https://note-app-server-i.onrender.com',{transports: ['websocket']})



export const SOCKET = io('ws://localhost:5050')