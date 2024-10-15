import Link from 'next/link'
import React from 'react'
import {FaPlayCircle} from "react-icons/fa"

const Header = () => {
  return (
    <header>
        <div>
            <Link href="/">
            <FaPlayCircle size={50} /> MovieApp
            </Link>

            <nav>
            <Link href="/">Movies</Link>
            <Link href="/">Series</Link>
            <Link href="/">Kids</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
