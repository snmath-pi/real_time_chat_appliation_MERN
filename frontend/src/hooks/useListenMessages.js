import React, { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notif1 from '../assets/sounds/notification.mp3'
import notif2 from '../assets/sounds/ringnaruto.mp3'
const useListenMessages = (props) => {
    const {socket} = useSocketContext();
    const {messages, setMessage}  = useConversation();

    useEffect(()=>{
        socket?.on('newMessage', (newMessage)=>{
            newMessage.shouldShake =true;
            const sound = new Audio(notif1)

            sound.play();
            setMessage([...messages, newMessage])
        })

        return ()=>socket?.off('newMessage')
    },[socket, setMessage, messages])
}

export default useListenMessages
