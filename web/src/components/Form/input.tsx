import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps) {
    return(
        <input   
        {...props}           
        className='bg-zinc-900 p-3 px-4 rounded-[4px] text-small placeholder:text-zinc-500 focus:outline-none'
        />
    )
}