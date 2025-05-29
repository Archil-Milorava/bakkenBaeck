import Button from '../../components/Button'

const ListItems = () => {
  return (
     <div className="w-full h-[20rem] sm:h-[30rem] flex items-center justify-center">
        <ul className="w-full max-w-[50%] text-xl lg:text-5xl flex flex-col items-start gap-1">
          <li className="opacity-50">We design + build</li>
          <li>○ Software systems</li>
          <li>○ AI-powered tools</li>
          <li>○ Product websites</li>
          <li>○ Design systems</li>
          <li>○ Digital strategies</li>
          <li>○ Brand narratives</li>
          <Button className="mt-4">Add More</Button>
        </ul>
      </div>
  )
}

export default ListItems