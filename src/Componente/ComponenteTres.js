import React from 'react';

export const ComponenteTres = () => {
  // Lista de videos recomendados para profundizar
  const videosRelacionados = [
    { id: "Sqa8Zo2XWc4", title: "Sora: El futuro del video" },
    { id: "O2CAt9U_S6I", title: "Cómo funcionan los modelos de difusión" },
    { id: "28eP_Oas-u4", title: "IA en el cine y la animación" }
  ];

  return (
    <div className="card-ia" style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#61dafb' }}>
        Videos de la IA Generativa: Creatividad Computacional
      </h2>
      
      <p style={{ color: '#ccc', marginBottom: '20px' }}>
        La generación de video es el siguiente gran paso. A través de descripciones de texto (prompts), 
        la IA es capaz de crear escenas complejas con movimientos de cámara y personajes consistentes.
      </p>

      {/* VIDEO PRINCIPAL */}
      <div style={styles.mainVideoContainer}>
        <iframe 
          width="100%" 
          height="450" 
          src={`https://www.youtube.com/embed/${videosRelacionados[0].id}`}
          title={videosRelacionados[0].title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.5)' }}
        ></iframe>
      </div>

      {/* VIDEOS RELACIONADOS */}
      <div style={styles.videoGrid}>
        {videosRelacionados.slice(1).map((video) => (
          <div key={video.id} style={styles.videoItem}>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: '10px' }}
            ></iframe>
            <p style={{ color: '#ccc', marginTop: '10px' }}>
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos
const styles = {
  mainVideoContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '10px'
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  videoItem: {
    background: '#1e2227',
    padding: '10px',
    borderRadius: '12px',
    textAlign: 'center'
  }
};