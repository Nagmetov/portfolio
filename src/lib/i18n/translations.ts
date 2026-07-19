export type Lang = "ru" | "en";

export type Translation = {
  nav: {
    about: string;
    achievements: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    description: string;
    frontend: string;
    backend: string;
    ai: string;
    systems: string;
    languages: string;
  };
  achievements: {
    title: string;
    description: string;
    items: { title: string; place: string; description: string }[];
  };
  projects: {
    title: string;
    description: string;
    repo: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      repoUrl: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    github: string;
    telegram: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  langToggle: string;
};

export const translations: Record<Lang, Translation> = {
  ru: {
    nav: {
      about: "Обо мне",
      achievements: "Достижения",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      badge: "Открыт для новых проектов",
      title1: "Full-stack разработчик, создающий ",
      titleAccent: "продуманные",
      title2: " и надёжные веб-продукты",
      subtitle:
        "Full-stack веб-разработка, ML/ИИ-решения и автоматизация — от интерфейса на React/Next.js и бэкенда до компьютерного зрения и системного кода на C/C++.",
      ctaProjects: "Смотреть проекты",
      ctaContact: "Связаться",
    },
    about: {
      title: "Обо мне",
      description:
        "Родился в 2003 году. Работаю на всех уровнях стека — от базы данных и ML-моделей до пиксель-перфектного интерфейса, что сокращает число согласований и ускоряет разработку. Отдельно занимаюсь разработкой ИИ-решений — компьютерным зрением и обучением моделей — и работой с ИИ как инструментом в собственных проектах. Помогаю коллегам разбираться со сложными задачами и работал в команде над практическими проектами.",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI / ML",
      systems: "Системное и инструменты",
      languages: "Языки: русский (родной), английский — Intermediate (B1)",
    },
    achievements: {
      title: "Достижения",
      description: "Проекты и конференции, в которых я принимал участие.",
      items: [
        {
          title: "Победа в конкурсе Robotics Laboratory",
          place: "Кавказский инвестиционный форум, 2024",
          description:
            "В составе команды из четырёх человек за три дня разработали робота-пастуха — комплекс из наземного колёсного модуля, дрона и удалённого сервера управления.",
        },
        {
          title: "Доклад на Универсиаде «Ломоносов»",
          place: "Секция «ИИ-стартапы и ИИ в сопровождении научных исследований»",
          description:
            "Выступил с докладом «ИИ и границы человеческого разума: пути к изучению мозга» в соавторстве с коллегой по университету.",
        },
      ],
    },
    projects: {
      title: "Проекты",
      description: "Реальные проекты — от учебных курсовых до full-stack сервисов и ML.",
      repo: "Репозиторий",
      items: [
        {
          title: "GOST Doc Generator",
          description:
            "Full-stack сервис генерации студенческих документов по ГОСТ: FastAPI-бэкенд, веб-интерфейс, REST API, автоформат сырого текста.",
          tags: ["Python", "FastAPI", "REST API", "pytest"],
          repoUrl: "https://github.com/Nagmetov/gost-doc-generator",
        },
        {
          title: "ML Breast Ultrasound",
          description:
            "U-Net модель для сегментации опухолей на УЗИ молочной железы: обучение, инференс на одном изображении, визуализация результатов.",
          tags: ["TensorFlow", "Keras", "OpenCV", "Jupyter"],
          repoUrl: "https://github.com/Nagmetov/ML_Breast_Ultrasound",
        },
        {
          title: "Dobot Tic-Tac-Toe",
          description:
            "Компьютерное зрение (YOLO) + роборука Dobot: распознавание игрового поля и физическая игра в крестики-нолики в реальном мире.",
          tags: ["Python", "YOLO", "OpenCV", "Robotics"],
          repoUrl: "https://github.com/Nagmetov/Dobot_tik_tak_toe",
        },
        {
          title: "Cute Room — OpenGL 3D Renderer",
          description:
            "3D-рендерер сцены на C++/OpenGL: загрузка моделей через Assimp, свои GLSL-шейдеры, FPS-камера с управлением от мыши и клавиатуры.",
          tags: ["C++", "OpenGL", "Assimp", "GLSL"],
          repoUrl: "https://github.com/Nagmetov/cute-room-opengl",
        },
        {
          title: "Code Translators",
          description:
            "Три транслятора кода между языками программирования (Python↔C++, JS→Python, Python→Go) на связке Flex+Bison.",
          tags: ["C", "Flex", "Bison", "Compilers"],
          repoUrl: "https://github.com/Nagmetov/code-translators",
        },
        {
          title: "GoLang CLI",
          description:
            "Консольная утилита на Go с меню: конвертер температур, калькулятор и вычисление факториала.",
          tags: ["Go", "CLI"],
          repoUrl: "https://github.com/Nagmetov/GoLangCLi",
        },
        {
          title: "Number Guessing Game",
          description:
            "Консольная игра «угадай число» на Java с подсказками «больше/меньше» и ограничением попыток.",
          tags: ["Java"],
          repoUrl: "https://github.com/Nagmetov/NumberGuessingGame-Java",
        },
        {
          title: "Currency Converter",
          description:
            "Консольное приложение на Java для конвертации валют в реальном времени через ExchangeRate-API.",
          tags: ["Java", "REST API"],
          repoUrl: "https://github.com/Nagmetov/currency-converter-java",
        },
      ],
    },
    contact: {
      title: "Связаться со мной",
      description:
        "Открыт к интересным задачам и сотрудничеству — напишите, если хотите обсудить проект.",
      github: "GitHub",
      telegram: "@nagmetov05",
    },
    footer: {
      rights: "Все права защищены.",
      builtWith: "Сделано на Next.js и Tailwind CSS",
    },
    langToggle: "EN",
  },
  en: {
    nav: {
      about: "About",
      achievements: "Achievements",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Open for new projects",
      title1: "Full-stack developer building ",
      titleAccent: "thoughtful",
      title2: ", reliable web products",
      subtitle:
        "Full-stack web development, ML/AI solutions, and automation — from React/Next.js interfaces and backends to computer vision and low-level systems code in C/C++.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    about: {
      title: "About",
      description:
        "Born in 2003. I work across the full stack — from the database and ML models to pixel-perfect UI — which means fewer handoffs and faster delivery. I also work on AI development specifically — computer vision and model training — and use AI as a tool within my own projects. I help others work through complex problems and have worked in a team on hands-on projects.",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI / ML",
      systems: "Systems & Tools",
      languages: "Languages: Russian (native), English — Intermediate (B1)",
    },
    achievements: {
      title: "Achievements",
      description: "Projects and conferences I've taken part in.",
      items: [
        {
          title: "Winner, Robotics Laboratory competition",
          place: "Caucasus Investment Forum, 2024",
          description:
            "As part of a four-person team, built a shepherd robot in three days — a ground rover, a drone, and a remote control server.",
        },
        {
          title: "Speaker at the Lomonosov Universiade",
          place: "\"AI Startups & AI in Research\" track",
          description:
            "Presented \"AI and the boundaries of human consciousness: paths to studying the brain\" together with a university colleague.",
        },
      ],
    },
    projects: {
      title: "Projects",
      description: "Real projects — from university coursework to full-stack services and ML.",
      repo: "Repo",
      items: [
        {
          title: "GOST Doc Generator",
          description:
            "Full-stack service for generating student documents formatted to the Russian GOST standard: FastAPI backend, web UI, REST API, raw-text autoformatting.",
          tags: ["Python", "FastAPI", "REST API", "pytest"],
          repoUrl: "https://github.com/Nagmetov/gost-doc-generator",
        },
        {
          title: "ML Breast Ultrasound",
          description:
            "U-Net model for tumor segmentation in breast ultrasound images: training, single-image inference, and result visualization.",
          tags: ["TensorFlow", "Keras", "OpenCV", "Jupyter"],
          repoUrl: "https://github.com/Nagmetov/ML_Breast_Ultrasound",
        },
        {
          title: "Dobot Tic-Tac-Toe",
          description:
            "Computer vision (YOLO) + a Dobot robotic arm: detects the game board and physically plays tic-tac-toe in the real world.",
          tags: ["Python", "YOLO", "OpenCV", "Robotics"],
          repoUrl: "https://github.com/Nagmetov/Dobot_tik_tak_toe",
        },
        {
          title: "Cute Room — OpenGL 3D Renderer",
          description:
            "3D scene renderer in C++/OpenGL: model loading via Assimp, custom GLSL shaders, and a mouse/keyboard-driven FPS camera.",
          tags: ["C++", "OpenGL", "Assimp", "GLSL"],
          repoUrl: "https://github.com/Nagmetov/cute-room-opengl",
        },
        {
          title: "Code Translators",
          description:
            "Three source-to-source code translators (Python↔C++, JS→Python, Python→Go) built with Flex+Bison.",
          tags: ["C", "Flex", "Bison", "Compilers"],
          repoUrl: "https://github.com/Nagmetov/code-translators",
        },
        {
          title: "GoLang CLI",
          description:
            "Menu-driven Go console utility: temperature converter, calculator, and factorial calculation.",
          tags: ["Go", "CLI"],
          repoUrl: "https://github.com/Nagmetov/GoLangCLi",
        },
        {
          title: "Number Guessing Game",
          description:
            "Console number-guessing game in Java with higher/lower hints and a limited number of attempts.",
          tags: ["Java"],
          repoUrl: "https://github.com/Nagmetov/NumberGuessingGame-Java",
        },
        {
          title: "Currency Converter",
          description:
            "Java console app for real-time currency conversion via the ExchangeRate-API.",
          tags: ["Java", "REST API"],
          repoUrl: "https://github.com/Nagmetov/currency-converter-java",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      description:
        "Open to interesting projects and collaboration — reach out if you'd like to talk.",
      github: "GitHub",
      telegram: "@nagmetov05",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    langToggle: "RU",
  },
};
