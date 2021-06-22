import React, { useState, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const BlogDetalles = (props) => {
  const [posts, setPosts] = useState(undefined);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    loadPrueba();
  });

  function loadPrueba() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/procorlab903697760.wordpress.com/posts/" + props.match.params.id
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  }

  function createMarkup() {
    return { __html: posts?.content };
  }

  return (
    <Container>
      <div id="blogs">
        <div id="politicas__detalles">
          <section>
            <div id="fotoblog">
              <img id="hoyozero" src={posts?.featured_image} alt="post__image" />
            </div>
            <p id="SemiBold" className="titulo">
              {posts?.title}
            </p>
          </section>
          <section dangerouslySetInnerHTML={createMarkup()} className="blog__text"></section>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetalles;
