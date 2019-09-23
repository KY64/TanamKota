import React, { Component } from "react";
import Media from "react-responsive";

class Navbar extends Component {
  viewText() {
    for (let i = 0; i < 4; i++) {
      let text = document.getElementsByClassName("text")[i];
      let navLink = document.getElementsByClassName("nav-link")[i];
      text.classList.toggle("view");
      navLink.classList.toggle("p-right");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Media query="(min-width: 769px)">
          <nav
            id={this.props.id}
            className="navbar"
            onMouseEnter={this.viewText}
            onMouseLeave={this.viewText}
          >
            <div className="nav-link">
              <i className="fas fa-list-alt" style={{ fontSize: "14pt" }} />
              <span className="text desc">Dashboard</span>
            </div>
            <div className="nav-link">
              <i className="fas fa-chart-bar" style={{ fontSize: "14pt" }} />
              <span className="text desc">Analytics</span>
            </div>
            <div className="nav-link">
              <i className="fas fa-archive" style={{ fontSize: "14pt" }} />
              <span className="text desc">Log</span>
            </div>
            <div className="nav-link">
              <i className="fas fa-cog" style={{ fontSize: "14pt" }} />
              <span className="text desc">Settings</span>
            </div>
          </nav>
        </Media>

        <Media query="(max-width: 768px)">
          <nav
            id={this.props.id}
            className="navbar-m"
          >
            <div className="nav-link-m">
              <i className="fas fa-list-alt" style={{ fontSize: "14pt" }} />
              <span className="text desc">Dashboard</span>
            </div>
            <div className="nav-link-m">
              <i className="fas fa-chart-bar" style={{ fontSize: "14pt" }} />
              <span className="text desc">Analytics</span>
            </div>
            <div className="nav-link-m">
              <i className="fas fa-archive" style={{ fontSize: "14pt" }} />
              <span className="text desc">Log</span>
            </div>
            <div className="nav-link-m">
              <i className="fas fa-cog" style={{ fontSize: "14pt" }} />
              <span className="text desc">Settings</span>
            </div>
          </nav>
        </Media>

        <style jsx>{`
          .navbar,
          .navbar-m {
            position: fixed;
            background: linear-gradient(0deg, #b9f75e, #77e681);
            color: white;
            display: flex;
            width: 65px;
            height: 100%;
            flex-direction: column;
            padding-top: 70px;
            z-index: 10;
            transition: 0.5s;
          }

          .navbar-m {
            width: 100%;
            height: 50px;
            flex-direction: row;
            padding: 0;
            justify-content: space-around;
            align-items: center;
            bottom: 0;
          }

          .navbar:hover {
            width: 250px;
          }

          .nav-link {
            padding: 18px 0;
            padding-left: 20px;
            transition: padding 0.5s, background 0.2s;
          }

          .nav-link-m {
            padding: 0 30px 0 30px;
          }

          .nav-link:hover {
            background: #5dcc66;
            cursor: pointer;
          }
          .nav-link.p-right {
            padding-left: 50px;
          }
          .desc {
            margin-top: 2px;
            opacity: 0;
            position: absolute;
            transition: opacity 0.35s, margin 0.5s;
          }
          .desc.view {
            opacity: 1;
            margin-left: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Navbar;
