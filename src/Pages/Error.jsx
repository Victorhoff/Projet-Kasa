import React from "react";

const Error = () => {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__msg">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a className="error__link" href="/kasa/">
        Retourner sur la page d'accueil
      </a>
    </main>
  );
};

export default Error;
