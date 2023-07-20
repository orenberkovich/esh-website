import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/Home";
import { Header } from "./components/header/Header";
import Post from "./pages/post/Post";
import { Footer } from "./components/footer/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation(["nav"]);
  return (
    <div className={i18n.language === "he" ? "rtl" : ""}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/posts/:id" component={Post} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
