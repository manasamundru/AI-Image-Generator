import { assets, stepsData } from "../assets/assets";
import {motion} from "framer-motion";
function Steps(){
    return(
        <motion.div 
        initial={{opacity:0.2,y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="flex flex-col items-center justify-center my-32">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            How it works
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Transform Words Into Stunning Images
            </p>
            <div className="space-y-4 w-full max-w-3xl text-sm">
                {stepsData.map((step,index)=>(
                    <div key={index} className="flex items-center gap-4 p-5 px-8 bg-hite/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg">
                        <img src={step.icon} width={40} alt=""/>
                        <div>
                            <h2 className="text-xl font-medium">{step.title}</h2>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
export default Steps;