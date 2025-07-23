// src/components/ScrollToTop/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // `useLocation` é um hook do React Router que retorna o objeto de localização atual.
  // `pathname` muda toda vez que a rota muda.
  const { pathname } = useLocation();

  useEffect(() => {
    // Quando `pathname` muda (ou seja, a rota muda), rola a janela para o topo.
    // `window.scrollTo(0, 0)` define a posição de scroll para o topo (0 no eixo X e 0 no eixo Y).
    // Opcional: `behavior: 'smooth'` para um scroll suave, ou `behavior: 'instant'` para ir instantaneamente.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Usar 'instant' para uma transição mais natural como se fosse uma página nova.
    });
  }, [pathname]); // O efeito é re-executado sempre que `pathname` muda.

  return null; // Este componente não renderiza nada no DOM. Ele apenas executa um efeito colateral.
};

export default ScrollToTop;
