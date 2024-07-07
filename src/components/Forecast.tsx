import { motion } from "framer-motion";

function Forecast({ date, temp, tempmin, weatherImgs }: any) {
  return (
    <div className="mt-14 flex items-center justify-center">
      <div className="h-[6.5rem] w-[6.5rem] rounded flex-col items-center justify-center text-white max-sm:w-[4.5rem]">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div>
            <p>{date}</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={weatherImgs} width={50} height={50} />
          </div>
          <div>
            <p>
              {temp} &deg; <span className="text-gray-300">{tempmin} &deg;</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Forecast;
