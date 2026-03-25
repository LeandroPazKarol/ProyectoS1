import React from 'react';

export const Componente1 = () => {
  return (
    <div className="card-ia" style={{ textAlign: 'left', padding: '20px', lineHeight: '1.6' }}>
      <h2 style={{ color: '#d0d5db', borderBottom: '2px solid #444', paddingBottom: '10px' }}>
        IA Generativa: La Frontera de la Creatividad Computacional
      </h2>

      <section>
        <h3>¿Qué es y cómo funciona?</h3>
        <p>
          La Inteligencia Artificial Generativa representa un cambio de paradigma en el aprendizaje profundo (*Deep Learning*). 
          A diferencia de la IA discriminativa, que se limita a clasificar datos existentes, los modelos generativos 
          utilizan arquitecturas avanzadas como los <strong>Transformers</strong> y las <strong>Redes Generativas Antagónicas (GANs)</strong> 
          para identificar patrones subyacentes en conjuntos de datos masivos y sintetizar contenido totalmente nuevo y original.
        </p>
      </section>

      <section>
        <h3>Impacto en el Desarrollo de Software</h3>
        <p>
          Para los ingenieros, esta tecnología no solo es una herramienta de consulta, sino un "copiloto" integral. 
          Desde la generación de código *boilerplate* y la refactorización automática hasta la creación de casos de prueba unitaria, 
          herramientas basadas en modelos de lenguaje extensos (LLMs) están optimizando el ciclo de vida de desarrollo (SDLC), 
          permitiendo que los programadores se enfoquen en la arquitectura de alto nivel y la resolución de problemas lógicos complejos.
        </p>
      </section>

      <section>
        <h3>Ética y Responsabilidad</h3>
        <p>
          A pesar de su potencial, la adopción de la IA generativa conlleva desafíos técnicos significativos, 
          incluyendo la gestión de "alucinaciones" del modelo, la protección de la propiedad intelectual y la 
          seguridad del código generado. El futuro de esta tecnología reside en la simbiosis responsable entre la 
          intuición humana y la eficiencia algorítmica.
        </p>
      </section>


    </div>
  );
};