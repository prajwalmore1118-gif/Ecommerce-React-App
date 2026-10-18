import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-[380px]">
            <h2 className="text-4xl font-bold mb-2">
                Welcome Back 👋
            </h2>

            <p className="text-gray-500 mb-8">
                Login to continue shopping.
            </p>

            {/* Email */}

            <div className="relative mb-5">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 rounded-xl border pl-12 pr-4 outline-none focus:border-violet-600"
                />
            </div>

            {/* Password */}

            <div className="relative mb-6">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-12 rounded-xl border pl-12 pr-12 outline-none focus:border-violet-600"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            <button
                className="w-full h-12 rounded-xl
bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500
text-white font-semibold
shadow-lg hover:shadow-violet-500/50
hover:scale-[1.02]
active:scale-95
transition-all duration-300"
            >
                Login
            </button>
        </div>
    );
};

export default LoginForm;