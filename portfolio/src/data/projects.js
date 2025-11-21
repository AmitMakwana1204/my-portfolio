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
    image: "/src/assets/fashion/main.png",

    /* gallery for modal popup */
    gallery: [
      "/src/assets/fashion/main.png",
      "/src/assets/fashion/product.png",
      "/src/assets/fashion/cart.png",
      "/src/assets/fashion/checkout.png"
    ],

    techIcons: ["react", "vite", "tailwind", "stripe"],

    live: "https://example-live-link.com",
    repo: "https://github.com/AmitMakwana1204/Fashion-Hub",

    featured: true,
    year: 2024,
    color: "#00E1FF", // neon accent color
  },

  {
    id: "p2",
    title: "Portfolio CMS — Headless Blog System",
    short: "MDX-powered blog + project CMS with animations.",
    desc:
      "A fully customizable headless CMS portfolio where all content is managed via MDX files. Includes blog system, dynamic project pages, theme toggle, SEO meta tags, and animated transitions.",
    tags: ["MDX", "CMS", "Animations", "Netlify"],
    category: "Portfolio System",
    difficulty: "Intermediate",
    image: "/src/assets/portfolio/main.png",

    gallery: [
      "/src/assets/portfolio/main.png",
      "/src/assets/portfolio/blog.png",
      "/src/assets/portfolio/post.png"
    ],

    techIcons: ["mdx", "react", "netlify"],

    live: "https://example-cms-live.com",
    repo: "https://github.com/AmitMakwana1204/Portfolio-CMS",

    featured: false,
    year: 2024,
    color: "#9A4DFF",
  },

  {
    id: "p3",
    title: "AI Chat App — Real-Time Messaging",
    short: "ChatGPT-style real-time chat UI with typing effects.",
    desc:
      "A real-time AI chat interface powered by React & Node. Includes chat bubbles, typing animation, message history, dark mode, and a neon-glass UI theme.",
    tags: ["React", "Node", "Socket.io", "Tailwind"],
    category: "Real-Time App",
    difficulty: "Advanced",
    image: "/src/assets/ai/chat.png",

    gallery: [
      "/src/assets/ai/chat.png",
      "/src/assets/ai/input.png",
      "/src/assets/ai/darkmode.png"
    ],

    techIcons: ["react", "socket", "nodejs"],

    live: "#",
    repo: "#",

    featured: true,
    year: 2025,
    color: "#00FFC8",
  }
];
