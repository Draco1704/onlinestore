import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">Acerca de nosotros</h1>
      <p className="text">
        Somos una empresa que se dedica a desarrollar software.
        Nuestra misión es crear software que haga la vida más fácil a las personas.
        Nuestros valores son la innovación, la calidad y el servicio al cliente.
      </p>
      <img src="logo.png" alt="Logo de la empresa" />
      <div className="links">
        <a href="https://www.example.com/productos" className="link">Productos</a>
        <a href="https://www.example.com/servicios" className="link">Servicios</a>
        <a href="https://www.example.com/blog" className="link">Blog</a>
      </div>
    </div>
  );
};

export default About;