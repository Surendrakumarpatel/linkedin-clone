import React from 'react'
import { Input } from './ui/input'

const SearchInput = () => {
  return (
    <div>
        <Input 
        type="text" 
        placeholder="Search" 
        className="bg-[#EDF3F8] w-80 rounded-lg border-none"
        />
    </div>
  )
}

export default SearchInput