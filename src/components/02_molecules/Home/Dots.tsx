function Dots ({ currentSection, sectionCount }) {
  return (
    <>
      <div className="fixed top-1/2 right-5 transform  -translate-y-1/2 z-30">
        {Array.from({ length: sectionCount-1 }).map((_, index) => (
          <div
          key={index}
          className={`w-2 h-2 rounded-full my-2 ${
            index === currentSection ? 'bg-blue-secondary' : 'bg-gray-300 bg-opacity-50'
          }`}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Dots;