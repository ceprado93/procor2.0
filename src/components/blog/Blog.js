import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blog.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    loadNews();
  });

  function loadNews() {
    axios
      .get("https://public-api.wordpress.com/rest/v1/sites/procorlab903697760.wordpress.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div id="blogs">
      <div id="politicas">
        <div className="columnaNoticias">
          {posts?.length > 0 ? (
            posts.map((elm, idx) => (
              <Link key={idx} to={`/info-covid/${elm.title}/${elm.ID}`} style={{ textDecoration: "none" }}>
                <div className="noticias-p">
                  <div style={{ position: "relative", textalign: "center" }} id="blog__destacadas">
                    <div className="newsCard" style={{ backgroundImage: `url(${elm.featured_image})` }}></div>
                    <div className="newsCardTitle">{elm.title}</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="noPosts"> No hay entradas relacionadas</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
