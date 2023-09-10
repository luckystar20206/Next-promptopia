import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
  openGraph: {
    title: "Promptopia",
    description: "Discover and Share AI Prompts",
    images: [
      {
        url: "https://i.ibb.co/mtRSg6p/Screenshot-233.png",
      },
    ],
  },
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const RootLayout = ({ children }) => {
  // console.log(JSON.stringify(children));
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
