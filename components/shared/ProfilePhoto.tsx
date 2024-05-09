import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({ src }: { src: string }) => {
    return (
        <div>
            <Avatar className='cursor-pointer'>
                <AvatarImage src={src} alt="banner" />
            </Avatar>
        </div>
    )
}

export default ProfilePhoto