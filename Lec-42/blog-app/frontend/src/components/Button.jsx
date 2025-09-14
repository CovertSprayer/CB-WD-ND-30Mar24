
const Button = ({children, className, onClick}) => {
  return (
    <span onClick={onClick} className={`${className} inline-block cursor-pointer me-3 px-4 py-2 rounded-lg border-white border-2 bg-[#2f3ab2f1] hover:bg-[#2F3AB2] text-white font-semibold`}>{children}</span>
  )
}

export default Button