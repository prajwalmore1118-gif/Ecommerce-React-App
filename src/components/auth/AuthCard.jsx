import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SlidingPanel from "./SlidingPanel";

const AuthCard = ({ isLogin, setIsLogin }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="relative w-[900px] h-[560px] overflow-hidden rounded-[35px] shadow-2xl"
        >

            {/* Left White Form */}
            <motion.div
                animate={{
                    x: isLogin ? "0%" : "100%",
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
                className="absolute left-0 top-0 w-1/2 h-full bg-white flex items-center justify-center z-20"
            >
                <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex justify-center"
                        >
                            <LoginForm />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex justify-center"
                        >
                            <RegisterForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Right Purple Panel */}
            <SlidingPanel
                isLogin={isLogin}
                setIsLogin={setIsLogin}
            />
        </motion.div>
    );
};

export default AuthCard;