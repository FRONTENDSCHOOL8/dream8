function DonaionFrom() {
  return (
  <div className="flex flex-col items-center justify-center w-[1024px] h-[1119px] m-auto border border-gray-200 rounded-[50px]"> 
    <h2 className="text-4xl">후원 신청</h2> 
    <form className="w-[600px] flex flex-col gap-5 bg-pink-300">
      <label>
        후원자 이름 : {""}
        <input 
          type="text" name="name" id="name" 
          className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-200" 
        />
      </label>
      <label>
        물품 종류 : {""}
        <select name="kind" id="kind" className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-200">
          <option value="clothes">의류</option>
          <option value="shoes">신발</option>
          <option value="miscellaneous">잡화</option>
        </select>
      </label>
      <p className="">물품 설명</p>
    </form>
  </div>
  );
}

export default DonaionFrom;