import React, { Component } from "react";
import Head from "next/head";

class Login extends Component {
  componentDidMount() {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "'Nunito', sans-serif";
    document.body.style.background = "#f0f0f0";
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Login</title>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div id="card">
          <img
            src="/static/plant.jpeg"
            width="250"
            height="500"
            alt="plant"
          />
          <span className="overlay" />
          <div id="content">
            <h2 id="title">LOGIN</h2>
            <form method="post">
              <div className="form">
                <label>Email</label>
                <input type="email" name="email" id="form-email" />
              </div>
              <div className="form">
                <label>Password</label>
                <input type="password" name="password" id="form-password" />
                <a href="#" id="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <input type="submit" value="Login" id="login-btn" />
            </form>
            <div className="break">or</div>
            <h4>
              <a href="#" id="signup">
                Sign Up
              </a>
            </h4>
          </div>
          <style jsx>{`
            #title {
              font-weight: 300;
              letter-spacing: 4px;
              text-align: center;
              margin-bottom: 55px;
            }
            #content {
              display: inline-block;
              position: absolute;
              width: 450px;
            }
            #card {
              background: white;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
              width: 700px;
              height: 500px;
              margin: 50px auto 0 auto;
            }
            #forgot-password {
              display: inline;
              font-size: 9pt;
              float: right;
              color: #0ebd1c;
              text-decoration: none;
              margin-top: 3px;
            }
            #login-btn {
              background: #77e681;
              color: white;
              border-radius: 20px;
              display: block;
              border: none;
              width: 140px;
              height: 35px;
              margin: 80px auto 0 auto;
            }
            #login-btn:hover {
              cursor: pointer;
              background: #b9f75e;
            }
            .overlay {
              position: absolute;
              z-index: 10;
              margin-left: -250px;
              display: inline-block;
              background: rgba(119, 230, 129, 0.5);
              width: 250px;
              height: 500px;
            }
            .form {
              width: 300px;
              margin: 0 auto 30px auto;
            }
            .break {
              width: 200px;
              color: #aaa;
              margin: 15px auto;
              text-align: center;
            }
            .break:after,
            .break:before {
              display: inline-block;
              width: 50px;
              border-bottom: 1px solid #aaa;
              content: "";
              margin-bottom: 3px;
            }
            input {
              border: none;
              border-bottom: 1px solid #aaa;
              margin: 12px auto 0 auto;
              padding: 0 5px;
              width: 290px;
              font-size: 13pt;
              outline: none;
            }
            h4,
            #signup {
              text-align: center;
              text-decoration: none;
              color: #0ebd1c;
              margin: 0;
            }
          `}</style>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
