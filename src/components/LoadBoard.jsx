import './loadBoard.scss';
import { motion } from 'framer-motion';

export const LoadBoard = () => {

    return (
        <motion.div id="loadBoard"
        initial={{
            "zIndex": 10000
        }}
        animate ={{
            opacity: 0,
            y: 0,
            transition: { duration: 0.2, delay: 1.8, ease: "easeInOut" },
            "zIndex": 0
        }}
        >
            <motion.p
            className="loading_str"
            initial={{
                opacity: 1,
                y: "100%",
            }}
            animate={{
                opacity: 0,
                y: 0,
                transition: { duration: 0.45, delay: 1.4, ease: "easeInOut" },
            }}
            >Relax?</motion.p>
        </motion.div>
    )
}