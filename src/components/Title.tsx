function Title() {
  return (
    <div className="flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-[2.2rem] font-medium text-white">
          {" "}
          Your <span className="font-extralight text-gray-200">Weather</span>
        </h1>
      </div>
      <div>
        <p className="mx-16 text-gray-300 font-light">
          Enter below a place you want to know the weather of and select!
        </p>
      </div>
    </div>
  );
}

export default Title;
