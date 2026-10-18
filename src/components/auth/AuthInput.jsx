import { motion } from "framer-motion";

const AuthInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.02 }}
      className="relative w-full mb-5"
    >
      {/* Left Icon */}
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-12 rounded-xl border border-gray-300 bg-white
        outline-none transition-all duration-300
        focus:border-violet-600 focus:ring-4 focus:ring-violet-200
        ${icon ? "pl-12 pr-4" : "px-4"}`}
      />
    </motion.div>
  );
};

export default AuthInput;