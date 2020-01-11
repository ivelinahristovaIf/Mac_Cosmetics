import React, { Component } from "react";
import "./home/header/Header.css";
import "./App.css";
import Header from "./home/header/Header";
import Mall_of_Sofia from "./stores/Mall_of_Sofia/Mall_of_Sofia";
import Paradise from "./stores/Paradise/Paradise";
import The_Mall from "./stores/The_Mall/The_Mall";
import HomePage from "./home/HomePage";
import NoPage from "./home/NoPage";
import Footer from "./home/footer/footer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Category from "./categorys/category";
import ContactsPage from "./ContactsPage";
import PrivacyPolicy from "./privacyPolicy";
import { Helmet } from "react-helmet";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  state = {
    form: null
  };

  close = () => {
    console.log("Close");
    this.setState({ form: null });
  };

  componentDidMount() {
    // let catalogue = require("./categorys/catalogue/catalogue.json");
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="./home/images/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#FFFFFF" />
          <meta property="og:title" content="Mac Cosmetics" />
          <meta property="og:type" content="mac.cosmetics" />
          <meta
            property="og:url"
            content="http://localhost:3000"
          />
          <meta
            property="og:image"
            content="./home/images/macLogo.png"
          />
        </Helmet>
        <React.Fragment>
          <Header />
          {this.state.form}
          <main className="main">
            <BrowserRouter>
              <ScrollToTop>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/Paradise Center" component={Paradise} />
                  <Route exact path="/Mall of Sofia" component={Mall_of_Sofia} />
                  <Route exact path="/The Mall" component={The_Mall} />

                  <Route
                    exact
                    path="/Paradise Center/1"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/Paradise Center/2"
                    render={() => <Category category={this.state.menu2} />}
                  />
                  <Route
                    exact
                    path="/Paradise Center/3"
                    render={() => <Category category={this.state.menu3} />}
                  />
                  <Route
                    exact
                    path="/Paradise Center/4"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/Paradise Center/5"
                    render={() => <Category category={this.state.menu2} />}
                  />

                  <Route
                    exact
                    path="/Mall of Sofia/1"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/Mall of Sofia/2"
                    render={() => <Category category={this.state.menu2} />}
                  />
                  <Route
                    exact
                    path="/Mall of Sofia/3"
                    render={() => <Category category={this.state.menu3} />}
                  />
                  <Route
                    exact
                    path="/Mall of Sofia/4"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/Mall of Sofia/5"
                    render={() => <Category category={this.state.menu2} />}
                  />

                  <Route
                    exact
                    path="/The Mall/1"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/The Mall/2"
                    render={() => <Category category={this.state.menu2} />}
                  />
                  <Route
                    exact
                    path="/The Mall/3"
                    render={() => <Category category={this.state.menu3} />}
                  />
                  <Route
                    exact
                    path="/The Mall/4"
                    render={() => <Category category={this.state.menu1} />}
                  />
                  <Route
                    exact
                    path="/The Mall/5"
                    render={() => <Category category={this.state.menu2} />}
                  />

                  <Route exact path="/Contacts" render={() => <ContactsPage />} />

                  <Route
                    exact
                    path="/privacy-policy"
                    render={() => <PrivacyPolicy />}
                  />

                  <Route component={NoPage} />
                </Switch>
              </ScrollToTop>
            </BrowserRouter>
          </main>
          <footer>
            <Footer />
          </footer>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
