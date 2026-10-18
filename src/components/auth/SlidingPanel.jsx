import { motion } from "framer-motion";

const SlidingPanel = ({ isLogin, setIsLogin }) => {
    return (
        <motion.div
            animate={{
                x: isLogin ? "0%" : "-100%",
            }}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-1/2 h-full
      bg-gradient-to-br from-violet-700 via-purple-600 to-pink-500
      flex flex-col justify-center items-center
      text-white p-10 z-30"
        >
            <h1 className="text-4xl font-bold mb-4">
                {isLogin ? "Hello, Friend!" : "Welcome Back!"}
            </h1>

            <p className="text-center opacity-90 mb-10 max-w-xs">
                {isLogin
                    ? "Enter your personal details and start your shopping journey with ShopMe."
                    : "Already have an account? Sign in and continue shopping with us."}
            </p>

            <button
                onClick={() => setIsLogin(!isLogin)}
                className="px-10 py-3
rounded-full
border-2 border-white
font-semibold
hover:bg-white
hover:text-violet-700
hover:scale-105
active:scale-95
transition-all duration-300"
            >
                {isLogin ? "Create Account" : "Sign In"}
            </button>
        </motion.div>
    );
};

export default SlidingPanel;