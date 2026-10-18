import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-[380px]">
            <h2 className="text-4xl font-bold mb-2">
                Create Account 🚀
            </h2>

            <p className="text-gray-500 mb-8">
                Join ShopMe and start shopping.
            </p>

            {/* Full Name */}
            <div className="relative mb-5">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                    type="text"
                    placeholder="Full Name"
                    className={"w-full h-12 rounded-xl border pl-12 pr-4 outline-none focus:border-violet-600 " +
                        "focus:ring-4 focus:ring-violet-200 transition-all duration-300"}
                />
            </div>

            {/* Email */}
            <div className="relative mb-5">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 rounded-xl border pl-12 pr-4 outline-none focus:border-violet-600
focus:ring-4
focus:ring-violet-200
transition-all duration-300"
                />
            </div>

            {/* Password */}
            <div className="relative mb-6">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-12 rounded-xl border pl-12 pr-12 outline-none focus:border-violet-600
focus:ring-4
focus:ring-violet-200
transition-all duration-300"
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
        bg-gradient-to-r
        from-violet-600
        to-pink-500
        text-white
        font-semibold"
            >
                Create Account
            </button>
        </div>
    );
};

export default RegisterForm;