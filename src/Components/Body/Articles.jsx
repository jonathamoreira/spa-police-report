import React from "react";

const articles = [
  { id: 1, title: "Artigo 1", content: "Conteúdo do artigo 1." },
  { id: 2, title: "Artigo 2", content: "Conteúdo do artigo 2." },
  { id: 3, title: "Artigo 3", content: "Conteúdo do artigo 3." },
  { id: 1, title: "Artigo 1", content: "Conteúdo do artigo 1." },
  { id: 2, title: "Artigo 2", content: "Conteúdo do artigo 2." },
  { id: 3, title: "Artigo 3", content: "Conteúdo do artigo 3." },
];

const Articles = () => {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            width: "300px",
          }}
        >
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
