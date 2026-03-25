import React from 'react';
import imagenPrincipal from '../assets/IMG.png'; 
const evidenciasIA = [
  {
    id: 1,
    title: "Retrato Fotorrealista",
    description: "Generado con Midjourney v6. Nivel de detalle epidérmico.",
    url: "https://png.pngtree.com/png-vector/20241231/ourlarge/pngtree-photorealistic-portrait-of-a-thoughtful-woman-png-image_14985451.png"
  },
  {
    id: 2,
    title: "Arte Abstracto Digital",
    description: "Composición de colores y formas sintetizada por DALL-E 3.",
    url: "https://www.shutterstock.com/image-vector/original-abstract-art-contemporary-digital-260nw-507095317.jpg"
  },
  {
    id: 3,
    title: "Concepto Arquitectónico Futurista",
    description: "Diseño de ciudad sostenible generado en segundos.",
    url: "https://arquitek.pe/wp-content/uploads/elementor/thumbs/3-qbvwafd6kdyx601iul1hzt3kxl1ssdtj7bs0ri3byo.png"
  },
  {
    id: 4,
    title: "Personaje de Videojuego (Stylized)",
    description: "Render tipo render 3D para concept art.",
    url: "https://marmoset.co/wp-content/uploads/2019/02/z_MAIN-1280x720-2.jpg"
  }
];

export const ComponenteDos = () => {
  return (
    <div className="card-ia evidences-section" style={{ textAlign: 'center', padding: '30px' }}>
      
      {/* Encabezado Principal */}
      <h2 style={{ color: '#61dafb', marginBottom: '10px' }}>
        Evidencias del Impacto de la IA Generativa
      </h2>
      <p style={{ color: '#aaa', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
        A continuación, presentamos una galería de activos sintéticos que demuestran la 
        capacidad de la IA para emular la creatividad humana en distintos estilos y formatos.
      </p>

      {/* Imagen de Portada (tu imagen original) */}
      <div style={{ marginBottom: '40px' }}>
        <img 
          src={imagenPrincipal}
          alt="Portada IA Generativa" 
          style={{ width: '100%', maxWidth: '700px', borderRadius: '15px', border: '2px solid #444' }} 
        />
      </div>

      {/* --- INICIO DE LA GALERÍA --- */}
      <div style={styles.galleryGrid}>
        
        {/* Mapeamos el array de evidencias para crear las tarjetas */}
        {evidenciasIA.map((evidencia) => (
          <div key={evidencia.id} style={styles.galleryCard}>
            <img 
              src={evidencia.url} 
              alt={evidencia.title} 
              style={styles.cardImage} 
            />
            <div style={styles.cardContent}>
              <h4 style={styles.cardTitle}>{evidencia.title}</h4>
              <p style={styles.cardDescription}>{evidencia.description}</p>
              <code style={styles.cardPrompt}>{evidencia.prompt}</code>
            </div>
          </div>
        ))}

      </div>
      {/* --- FIN DE LA GALERÍA --- */}

    </div>
  );
};

// 2. Estilos Inline organizados para la galería (simulando CSS Grid)
const styles = {
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Hace la galería responsiva
    gap: '25px',
    padding: '10px'
  },
  galleryCard: {
    background: '#1e2227', // Un tono más oscuro que la card principal
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    transition: 'transform 0.2s ease-in-out',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column'
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover', // Crucial para que todas las imágenes midan lo mismo sin deformarse
  },
  cardContent: {
    padding: '15px',
    flexGrow: 1, // Empuja el prompt al fondo si hay poco texto
  },
  cardTitle: {
    margin: '0 0 5px 0',
    color: '#fff',
    fontSize: '1.1rem'
  },
  cardDescription: {
    margin: '0 0 10px 0',
    color: '#ccc',
    fontSize: '0.9rem',
    lineHeight: '1.4'
  },
  cardPrompt: {
    display: 'block',
    background: '#111',
    color: '#4caf50', // Verde tipo consola
    padding: '8px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    wordBreak: 'break-word', // Evita que el prompt rompa la card si es muy largo
    marginTop: 'auto'
  }
};