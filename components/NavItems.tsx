import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link';
import React from 'react';
// method-1 to create type
// type NAVITEMS = {
//     src:string,
//     icon:JSX.Element,
//     text:string
// }

// m-2 to create type
interface NAVITEMS {
    src:string,
    icon:JSX.Element,
    text:string
}

const navItems:NAVITEMS[] = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <Users />,
        text: "My Network",
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness />,
        text: "Jobs",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging",
    },
    {
        src: "/notification",
        icon: <Bell />,
        text: "Notification",
    },
]

const NavItems = () => {
  return (
    <div className='flex gap-8'>
        {
            navItems.map((navItem, index)=>{
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black'>
                        <span>{navItem.icon}</span>
                        <Link className='text-xs' href={navItem.src}>{navItem.text}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NavItems