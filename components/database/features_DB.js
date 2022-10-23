import logo from "../../assets/feature-icon.svg";

const featuresDb = [
  {
    id: 1,
    title: "CROSS PLATFORM",
    image: logo,
    items: [
      {
        itemId: 1,
        itemName: "Progressive Web Apps",
        itemDetails:
          "Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.",
      },
      {
        itemId: 2,
        itemName: "Native",
        itemDetails:
          "Build native mobile apps with strategies from Cordova, Ionic, or NativeScript.",
      },
      {
        itemId: 3,
        itemName: "Desktop",
        itemDetails:
          "Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you've learned for the web plus the ability to access native OS APIs.",
      },
    ],
  },
  {
    id: 2,
    title: "SPEED AND PERFORMANCE",
    image: logo,
    items: [
      {
        itemId: 1,
        itemName: "Code Generation",
        itemDetails:
          "Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.",
      },
      {
        itemId: 2,
        itemName: "Universal",
        itemDetails:
          "Serve the first view of your application on Node.js®, .NET, PHP, and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.",
      },
      {
        itemId: 3,
        itemName: "Code Splitting",
        itemDetails:
          "Angular apps load quickly with the new Component Router, which delivers automatic code-splitting so users only load code required to render the view they request.",
      },
    ],
  },
  {
    id: 3,
    title: "PRODUCTIVITY",
    image: logo,
    items: [
      {
        itemId: 1,
        itemName: "Templates",
        itemDetails:
          "Quickly create UI views with simple and powerful template syntax.",
      },
      {
        itemId: 2,
        itemName: "Angular CLI",
        itemDetails:
          "Command line tools: start building fast, add components and tests, then instantly deploy.",
      },
      {
        itemId: 3,
        itemName: "IDEs",
        itemDetails:
          "Get intelligent code completion, instant errors, and other feedback in popular editors and IDEs.",
      },
    ],
  },
  {
    id: 4,
    title: "FULL DEVELOPMENT STORY",
    image: logo,
    items: [
      {
        itemId: 1,
        itemName: "Testing",
        itemDetails:
          "With Karma for unit tests, you can know if you've broken things every time you save.",
      },
      {
        itemId: 2,
        itemName: "Animation",
        itemDetails:
          "Create high-performance, complex choreographies and animation timelines with very little code through Angular's intuitive API.",
      },
      {
        itemId: 3,
        itemName: "Accessibility",
        itemDetails:
          "Create accessible applications with ARIA-enabled components, developer guides, and built-in a11y test infrastructure.",
      },
    ],
  },
];

export default featuresDb;
