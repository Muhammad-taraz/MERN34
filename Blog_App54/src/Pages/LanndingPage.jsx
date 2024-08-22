import React from "react";
import "../App.css";

function LandingPage() {
  return (
    <div>
      <header className="header">
        <div className="container header-content">
          <h1 className="title">SEO Blog</h1>
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">SEO Tips</a>
            <a href="#">Tools</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <div className="first-image">
        <img src="https://imgs.search.brave.com/Jd3y6frzbxg_PPPoMPyEUT8CPzstgmEvChtFq2we3Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg3/MzE5LmpwZw" />
        <div className="image-text">
          5 What are impacts of <br /> Artificial Intellence
        </div>
        <div className="author">
          BY <strong>JOHN DOE</strong> JANUARY 20, 2024
        </div>
      </div>

      <div className="content-section">
        <div className="left-section">
          <img
            src="https://imgs.search.brave.com/N9CK81ObsWsaaar6vcXjBrxO6rs8PojZt_NzmPJZtvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDM5/Nzg5LmpwZw"
            alt="Image 1"
            className="left-image-single"
          />
          <div className="image-group">
            <img
              src="https://imgs.search.brave.com/lAEFc4alOnVVjAqcmKOKqbqIZ2ICRsLoZWyc7Y8fiyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ub3J0/aHdlc3RtZWRpYWNv/bGxlY3RpdmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA4L2lTdG9jay0x/MTQwNjkxMDk5Lmpw/Zw"
              alt="Image 2"
            />
            <img
              src="https://imgs.search.brave.com/R8j9CgccL16DHJeneR63drfTNT6yo2hmTPZkVETpF6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bG9nZ2luZy1nb25l/LXZpcmFsLWNhbWVy/YS1jb25jZXB0XzUz/ODc2LTEyNzYxOC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
              alt="Image 3"
            />
          </div>
        </div>
        <div className="right-section">
          <h2>Popular Articles</h2>
          <hr />
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Article Image"
                />
                <div className="article-content">
                  <h3>Article 1</h3>
                  <p>Brief description of the article.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Article Image"
                />
                <div className="article-content">
                  <h3>Article 2</h3>
                  <p>Brief description of the article.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Article Image"
                />
                <div className="article-content">
                  <h3>Article 3</h3>
                  <p>Brief description of the article.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Article Image"
                />
                <div className="article-content">
                  <h3>Article 4</h3>
                  <p>Brief description of the article.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Article Image"
                />
                <div className="article-content">
                  <h3>Article 5</h3>
                  <p>Brief description of the article.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="call-to-action">
        <img src="https://imgs.search.brave.com/yGaUxCDcoXInDBnpzNFo781BhCZ7Ra0U798T3TwRO6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wb3NpdGlv/bi1ibHVlLXBhcGVy/LXNoZWV0cy1iYWNr/Z3JvdW5kXzE5ODA2/Ny03MjA5ODguanBn/P3NpemU9NjI2JmV4/dD1qcGc" />
        <div className="cta-content">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SEO Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
