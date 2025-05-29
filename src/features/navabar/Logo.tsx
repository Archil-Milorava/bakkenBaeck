import { Link } from "react-router-dom"

const Logo = () => {
  return (
     <Link
        to="/"
        className="flex gap-1 cursor-pointer hover:opacity-50 transition-opacity duration-500"
      >
        <span className="font-semibold border-2 rounded-full w-5 h-5 text-sm flex items-center justify-center">
          B
        </span>
        <span className="font-semibold border-2 rounded-full w-5 h-5 text-sm flex items-center justify-center">
          B
        </span>
      </Link>
  )
}

export default Logo