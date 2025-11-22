export const projects = [
  {
    id: "p1",
    title: "Fashion Hub — E-Commerce Platform",
    short: "Complete E-Commerce UI with cart, filters, product view & checkout.",
    desc:
      "A modern E-commerce store built using React + Vite. Includes product filters, dynamic cart system, login/signup flow, wishlist, and Stripe mock checkout UI. Optimized for performance with lazy-loading and smooth page transitions.",
    tags: ["React", "Vite", "Stripe API", "Tailwind", "Redux Toolkit"],
    category: "E-commerce",
    difficulty: "Advanced",
    image: "/src/assets/project1.jpg",

    /* gallery for modal popup */
    gallery: [
      "/src/assets/fashion/main.png",
      "/src/assets/fashion/product.png",
      "/src/assets/fashion/cart.png",
      "/src/assets/fashion/checkout.png"
    ],

    techIcons: ["react", "vite", "tailwind", ],

    live: "https://musical-scone-fc1b82.netlify.app/",
    repo: "https://github.com/AmitMakwana1204/men-fashion-hub",

    featured: true,
    year: 2024,
    color: "#00E1FF", // neon accent color
  }
];
