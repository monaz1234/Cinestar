export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "cinestar-black": "#1c1c1e", // Màu nền chính
        "cinestar-gold": "#ffd700", // Màu vàng
        "cinestar-gray": "#f8f8f8", // Màu xám nhạt
        "cinestar-blue": "#0056b3", // Màu xanh
        "cinestar-red": "#e50914", // Màu đỏ
        "cinestar-purple": "#663399", //Màu tím
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase, addComponents, addUtilities }) {
    //   addBase({});
    //   addComponents({
    //     ".button": {
    //       "@apply text-[]": {},
    //     },
    //   });
    // }),
  ],
};
