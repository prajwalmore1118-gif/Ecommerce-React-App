import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const registrationPayload = {
            username: username,
            email: email,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationPayload),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Account created successfully! Redirecting to login...");
                navigate("/login");
            } else {
                setError(data.message || "Registration failed. Try a different email.");
            }
        } catch (err) {
            console.error("Connection Error:", err);
            setError("Cannot connect to server. Verify Spring Boot is running on port 8080.");
        } finally {
            setLoading(false);
        }
    };

    return (
        /* Added pb-12 and mb-10 to force the page to scroll and prevent footers from hiding the button */
        <div className="w-[380px] px-2 pb-12 mb-10 block clear-both bg-white">
            <h2 className="text-4xl font-bold mb-2">
                Create Account 🚀
            </h2>

            <p className="text-gray-500 mb-6">
                Join ShopMe and start shopping.
            </p>

            {error && (
                <div className="mb-4 text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full block">
                
                {/* Full Name */}
                <div className="relative mb-5">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-violet-600 focus:ring-4 focus:ring-violet-200 transition-all duration-300 text-gray-900 bg-white"
                    />
                </div>

                {/* Email */}
                <div className="relative mb-5">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-violet-600 focus:ring-4 focus:ring-violet-200 transition-all duration-300 text-gray-900 bg-white"
                    />
                </div>

                {/* Password */}
                <div className="relative mb-6">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:border-violet-600 focus:ring-4 focus:ring-violet-200 transition-all duration-300 text-gray-900 bg-white"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                {/* Action Submit Button with a guaranteed solid color backup */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-violet-600 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer block text-center"
                    style={{ minHeight: "48px", display: "block" }}
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
