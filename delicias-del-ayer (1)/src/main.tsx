import './index.css';

// Traditional Delicias Del Ayer Product Database
interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Pasteles fríos' | 'Pasteles calientes' | 'Ediciones especiales de recuerdo';
  image: string;
  sweetness: number; // Scale 1 to 5
}

const products: Product[] = [
  {
    id: 'velvet',
    name: 'Tarta de Terciopelo',
    description: 'Un suave abrazo de sabor que te transporta a las tardes de merienda inolvidables con sábanas limpias y sol de otoño.',
    category: 'Pasteles fríos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAHxSGjrM-yHHc0BYuqLgPrnvFBm03phiGw2ifsSlokBihXTdIhVEb5_SUAMvNZ0NG3jDET-s9aKpkkS-PGscGYOSlemJ_b3Q4J4Fya2HHiUGNRdYG9sSFVRoJn-GDu0vjB2xIGJ2GVg33_yHGsoKjd57WUvD84Jh54UTVT5FV9amb_LB_EwEr22cPG2HACxdUI-oH8MPZiv8uthoL-nBAFzQVuFiIwL8y21PxV-BdjNjS6guo-39GJpCSxram_rygCh52v9IGX0E',
    sweetness: 3
  },
  {
    id: 'abuelos',
    name: 'Tarta de los Abuelos',
    description: 'Capas de bizcocho húmedo con el aroma de los cumpleaños felices y las risas cálidas compartidas en las cocinas de antes.',
    category: 'Pasteles fríos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXyUmyoCO_8TIm1eXYUXQgrJqlvpYFN94GcNr2D3Gc6A2ustjBxcAYVTjVo_ZdpJ2FSoGBFShLN8toMOwc1Bwr74muFe2Sf11O4XTPu5WO7udsfXmRsH0SuGyR70nwkDzozIKFjbHev8OnRqcV5jUsNYLJfouUFYb3aHOIfxcQAdl9s0-x0j6DqYzOaO2d5LrhLSR2BpxgTPxh0eALAHouKraMt5qEbphrfy-zqSZ2UTMVAcEpPG9dW-70fqnspGWvLKxlOdmP_GA',
    sweetness: 4
  },
  {
    id: 'mousse',
    name: 'Mousse de Cacao',
    description: 'Textura etérea tan ligera como un soplo y profundamente reconfortante, evocando las tardes frías al cobijo del hogar.',
    category: 'Pasteles fríos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1DrdlIIWPBAC6zQZrYE4xkAONaHEGaO_DZ8MfMXzr4vAmUuu0-gmgA84HdoBtbNTeicUWrNC-d1c_zEfhaOnwZL8gooAEU7LyDvLebTNQ7aVRaD8HOcOdF6XFIAirQxhOonFqoF0B6d3SmLcUtWQtBD08IY9x7jMxJ3ja_xvquwI1tDtixo3W98A4Vj_urEac3xY7apKuVTTBlnu4ec5ot3zL_SeU6bS1rcz3aRIVEy3_td9NIhitYEnaFtjBJPxPshF1p650zmQ',
    sweetness: 2
  },
  {
    id: 'citrico',
    name: 'Bizcocho Cítrico',
    description: 'Un soplo de frescura cítrica y azahar que despierta las tardes radiantes de verano y limoneros bajo el sol de tu pueblo natal.',
    category: 'Pasteles calientes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgcY-jQDDJr3FTPO9rvF1KdcN0E7qzT_Iiq2Sk5Y08GPOI6oRhl4RC8ai3ttTZmbqfdscr4243Cs4AQhDEfKcELss0ij02e7LTnxjdCLKjZUuQezFBtNZaksjSS--SsLadSeIYz34UoIgcZ9g8W64HFYDgvXLIgnAhSdogn_4sgrWMSc_84sy0em9o4Bi20NkDvIdOjhe8djDdMheSmNJ01nPotzxItx-d-yoNQch6-h4TOGSnQ8zgw3-ft3yo8R_bhFMgK8bruyM',
    sweetness: 2
  },
  {
    id: 'tortitas',
    name: 'Tortitas del Ayer',
    description: 'Tan esponjosas y reconfortantes como las sábanas de domingo de tu infancia, con un toque suave de miel silvestre.',
    category: 'Pasteles calientes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9NjpCUUOG_Ao-9l8MqXX1DAeAF2msv0Whzq1CRW17lQ-3g9hrAc5hb_J0keX9-0vJKTRo8ajjahiiDYa-UgZDGTI6AvpaW5dSF9vVlhVBUuRzZBAwphDo6YpGWQYRoll0y-9v3XlLWOl5a46XjErRFyxcic_IAhWwGUFL3Z3QfcvUy72s3HXl350oWTu5KBI4bdF84_0ni-FxMLco5cRrV1fHqT3yT0jhsXn2nyIchp9WHEuKh_7oEHPIF6MupV3u-dgIK7mvedo',
    sweetness: 4
  },
  {
    id: 'brownie',
    name: 'Brownie de Herencia',
    description: 'Intenso, húmedo y profundamente fundente. Exhala toda la herencia familiar y los secretos dulces de generaciones.',
    category: 'Pasteles calientes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO054rTTr8SFSlbJ1FwU672mty2R9pszjmBY9Uoc1S0tlrGwmFYhxyncL6bQeZw9P18uHnI7-egbIeC_2T2yl9MnotkNvWLa2g7k_ouLdVuA89G3Jtp46w_IJQqzhH-HXMP6y5Xu3kBN3hluGqmUvPx7YISi2CwvFosrn6ee4j0_yMcTVLJzsNH9xRPLM0V1K4g_6fm8yUQnmryk9o5hM7m_u7Nb5S75TlNuuDNJuCIptrtB60HluhxO30-oP7EqCcxbq9UZ4c1e8',
    sweetness: 5
  },
  {
    id: 'confetti',
    name: 'Pastel Confetti',
    description: 'La pura alegría de la niñez materializada. Una celebración de risas de colores para iluminar cualquier instante.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlJxfgISqpyIYQ2bfdhHYu2aPIyvlDu4Qa9CW3JBFOBhUnEMT7aAh-BpIQr3p8n2y_ITWQ6Z_6J0wyJfVirYrf3Xa-COsDFG5iMXnB0gpjkEP7JLJDXiwWct8QkZ3cFTlZfN8-RvQtctz7XkgTiRJXK6IAbKFO-yY07NjIoZjGna6OyIR3UEGPz8NG_OjZ9bCuyP6XBUtXyhm_34Hijns8oUhFMoXZQXqn-fkLYA_o41Ny0r9l5ckOeVn6rLvyt1k38shTS321hyk',
    sweetness: 4
  },
  {
    id: 'rosquillas',
    name: 'Rosquillas de Pueblo',
    description: 'Aromáticas rosquillas fritas moldeadas a mano, con un toque sutil de canela y recuerdos de verbenas populares.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-M_V0FTHy_iLihE5ixPCxMQwqAlbxGIvZcCM2x-qp-7tZU0dYV-XE_iNxAWScfWMM7zYLdSpzXDwKbYyqXQQgXKNu5zh2IRvlqRYXnVbWHVYKvvP7ZsVG6Qrib-FLM5o_-T6JPw8V8IAdm4FomfBdwSlOkbq-AnCA199nqcnZQyoMHkNyOsds1TlkoiRQdYtfWBDN3oCO4AZrAfxXheubF1q8KsSbBq2l1UDh0Qb0J84QhZrhT5MSIoOSACTgm9xfCbyItQw7Bkc',
    sweetness: 3
  },
  {
    id: 'galletas',
    name: 'Galletas de la Abuela',
    description: 'Crujientes y perfectas, salpicadas de trocitos de chocolate que se deshacen en la boca evocando meriendas de sol.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj7X_QFHHO1xFY5JR3W7Djv9kxcJGdaOH4reVtmfSfsuPtVkhwSoqr3eaptPfiymsv2_jy-6HReWgzOBqp2grmS-UE3Srbs7LEOsr-eTva87XiqcDENqPm3n9XyxrGTwh3pOQortx657OoPQ5gCjYrZoUwd3Xp5hzrXMYKW59uTPkHbtHBaKTkQLIWUGzScDKfSUO7pTnTp5ZAQm3F-H1U4TGSYo2QXWKnErwmG0Dr123syo5nRpNH6FzUEc0f7JQXBpc9pxBP4_4',
    sweetness: 3
  },
  {
    id: 'macaron',
    name: 'Macaron de Rosas',
    description: 'Un suspiro crujiente con relleno aterciopelado de rosas silvestres, suave y primaveral como los viejos diarios.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy8DGxZVrueboY79e6zXNLB3LXnqguMPaI_v_8Rckx7xXmEF5Ti7anPXPr8JctqhTuSXb3vgQkGgvyb-oXaneWEW6oTsd4uC9ySiyzstTCgq41o32H7WisGY1ccwdP0QIQfXBbynayZ3B8fxA1pR1CEQkvCNV7604qZbYHsbRNOLRYkQue8QYeIPcW_QcO5gEfquddlCR_5I7ezZJ0MdZ4uZM7qxK-c22J-8iBG5TNamSRCA7pbvNZFZby8L20TCwkT_l_kHPkLDs',
    sweetness: 3
  },
  {
    id: 'tartaleta',
    name: 'Tartaleta Frutal',
    description: 'Crema pastelera infusionada en vainilla natural, coronada de frutas de estación que recuerdan las mañanas de campo.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3PQC0jlHE6wBTfXF___fjUxY-VHMaYvlbzOFvYZNyrT8K1RzdwieOy1fqcjwuYB9haGJapu5GSS_L-RolmFD3WcrxBfUnbt71RChDpIVbHLLvnO_2HDAEzCwyBmYEKnq9rVjaqetkkGOZVUrrcmQoYmqGPxXEaMhV3mvNwivH5yKN1HC20G0z9aFA1Kp9ASP7AHFb93r4egdH6H0_Tnw74p99dyhETAI7WoA8GOH3-iPRiuHO_yPmTFqQQ6dfqfzeY1LOwU_o_og',
    sweetness: 2
  },
  {
    id: 'cupcake',
    name: 'Cupcake de Vainilla',
    description: 'Bizcocho esponjoso con crema dulce acariciante. El capricho clásico hecho con esmero y amor artesano.',
    category: 'Ediciones especiales de recuerdo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChNM-dB8bfVm6dJqZABw_V-xf5B0Eo4X8zniLiMqsniyj-VnYoFp_JSABrppKNe6nlserGOAjtriUUfaR7Lzo_rdj247vDWuiD59GNVcRWVxXad0Y6Rpy437lgVAM4IYwkk3z2MTRYVG7YRMwlcdGZpwecFPNAiUzki034c6C_65zNOwGNSAJpmqsP6f73ZTTN9d7lOZe9QvgEXHQ7oEA0dq_qKmexecrt0lcgIEOOqDXB_tq5lAyN_n3hWgjqRPkJ4ypjCwnCqts',
    sweetness: 3
  }
];

const testimonialsInit = [
  {
    name: 'María García',
    product: 'Tarta de los Abuelos',
    memory: 'Fue morder el pastel y por un instante viajar de vuelta a las meriendas de domingo en casa de mi abuela. Las lágrimas me brotaron solas al recordar su risa sabia.',
    rating: 5
  },
  {
    name: 'Juan Pérez',
    product: 'Galletas de la Abuela',
    memory: '¡Brillante! El aroma de canela y chocolate fundido impregnó mi hogar de igual manera que lo hacía el horno de leña de mi madre en aquel lejano 1985.',
    rating: 5
  },
  {
    name: 'Elena Martínez',
    product: 'Pastel Confetti',
    memory: 'Tienen un don especial para capturar momentos memorables. Se siente el cariño sincero, la calma e innovación en cada receta. Nada de aditivos, pura nostalgia.',
    rating: 5
  }
];

// In-Memory Testimonials and Orders Storage
let testimonials = [...testimonialsInit];
let activeSlideIndex = 0;

let datos: any[] = [];
let localTestimonials: any[] = [];

// Lista de claves de testimonios que han sido eliminados de la vista localmente
let deletedTestimonialsKeys: string[] = JSON.parse(localStorage.getItem('deletedTestimonialsKeys') || '[]');

function eliminarTestimonio(name: string, memory: string) {
  const key = `${name}::${memory}`;
  if (!deletedTestimonialsKeys.includes(key)) {
    deletedTestimonialsKeys.push(key);
    localStorage.setItem('deletedTestimonialsKeys', JSON.stringify(deletedTestimonialsKeys));
    rebuildTestimonials();
    showSuccessAlert(
      'Testimonio Eliminado',
      'El testimonio ha sido eliminado del mural con éxito.'
    );
  }
}

async function obtenerDatosSheets(): Promise<any[]> {
  const url = "https://docs.google.com/spreadsheets/d/1uPImOQJ1RJRv4Bl7ovHHQoestkBOG6GbnV0MUdh_414/gviz/tq?tqx=out.json&gid=0";
  try {
    const res = await fetch(url);
    const text = await res.text();

    // Limpiar wrapper de Google.
    const jsonString = text.replace("/*O_o*/", "")
      .replace("google.visualization.Query.setResponse(", "")
      .slice(0, -2);

    const json = JSON.parse(jsonString);

    // Convertir rows + cols -> array de objetos
    return json.table.rows.map((row: any) => {
      const obj: any = {};
      if (row && row.c) {
        row.c.forEach((cell: any, i: number) => {
          const col = json.table.cols[i];
          const val = cell ? cell.v : null;
          if (col) {
            if (col.label) {
              obj[col.label] = val;
              obj[col.label.toLowerCase()] = val;
              obj[col.label.toUpperCase()] = val;
            }
            // Fallback bindings based on indices
            if (i === 0) { obj.id = val; obj.ID = val; }
            if (i === 1) { obj.nombre = val; obj.NOMBRE = val; }
            if (i === 2) { obj.comentario = val; obj.COMENTARIO = val; }
          }
        });
      }
      return obj;
    });
  } catch (error) {
    console.error("Error al obtener datos de Google Sheets:", error);
    return [];
  }
}

function rebuildTestimonials() {
  const sheetsTestimonials = datos
    .map((item: any) => {
      const name = item.NOMBRE || item.nombre || '';
      const comment = item.COMENTARIO || item.comentario || '';
      if (!name && !comment) return null;
      
      // Asociar un producto de manera estable según el ID del comentario, para dar contexto nostálgico
      const idVal = item.ID || item.id || '1';
      const parsedId = parseInt(idVal);
      const productIndex = isNaN(parsedId) ? 0 : Math.abs(parsedId - 1) % products.length;
      const associatedProduct = products[productIndex]?.name || 'Bizcocho Cítrico';

      let rating = 5;
      const commentLower = comment.toLowerCase();
      if (commentLower.includes('cierren') || commentLower.includes('mejorar') || commentLower.includes('malo')) {
        rating = 4;
      }

      return {
        name: name || 'Cliente de Honor',
        product: associatedProduct,
        memory: comment || '¡Todo delicioso, como volver al ayer!',
        rating
      };
    })
    .filter((t: any) => t !== null);

  const combined = [...testimonialsInit, ...sheetsTestimonials, ...localTestimonials];
  testimonials = combined.filter((t: any) => {
    const key = `${t.name}::${t.memory}`;
    return !deletedTestimonialsKeys.includes(key);
  });

  renderTestimonials();
}

async function main() {
  try {
    datos = await obtenerDatosSheets();
    rebuildTestimonials();
    console.clear();
    console.log(datos);
  } catch (err) {
    console.error("Error: ", err);
  }
}


// Slideshow contents
const slides = [
  {
    title: 'Recetas con sabor a hogar',
    description: 'El cariño maternal y la calma de antaño, horneados a fuego lento para vestir tus recuerdos con el carisma más apetecible y tierno.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YgmBk3ARUDSCjrAdWZ5t33PlZyr_OWzbWK8rSw9BJDsBa8FKBRhiFSoeLgResi-hAJf2GbJjC1OmMz1-ALC2BMTYa6YB5xEj6BPGcpqckU4oME70IPG0f1Hbwgk9ezudusiQKxhfatCPj7T9pcij3SSb86XauKUYHRL2ANU_io1Wx5qmw7_20GFHi-0eeKFFEFa6DvylyK7UYikGdqGR_BFUrhQdVElskvoLqr9VVOOJPhLLdfuLRRKGiB7fF5SLgPlaZDFsn_4'
  },
  {
    title: 'Momentos que vuelven a brillar',
    description: 'Porque los mejores momentos de la infancia siempre huelen a vainilla suave, canela fresca y las risas entrañables de nuestra familia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiNuAVgNGrFMHdUyiUxVIzdHNdgJWTkiUlD4L_0Dyzi0VTI40rpFmz_lpKJ6-v6jThXt1uCgV2fU8HB2Sp6XwcEvoyI1wciYXor9i3YWTDN7H97ItFBLzM53a2tKUe9e1rnBq7daQ6TnCg5CbstHbTk2mD1OewCcMNkIpTIZc_N1AAuUhCek5iS9XEykGYMSK--4RsZMGE9ycbUBTCB7egLCRYEpBqpP_5iQrpguhwBxIbWCVwlyyzJZMZWVU1qW9T7zvFD2ju8w'
  },
  {
    title: 'La magia de lo artesanal',
    description: 'Cada pliegue es esculpido con devoción sincera, recuperando el sabor original y reconfortante de las meriendas de tu niñez.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw0ZDKX1G7578vyQ6BGhReRUkWI27aSeETJF0VSEZbZ-ThqLJ5K-F7vpixFtk5AZDQmtXHkZmpuyXGhW8QLVdMqO-SNXFkr0LucZM4PojUtW_fF6KQxRVxibdo5z2NbFZGlM1XTREBM-S4gjaR924q2luKwVjaZhSXtkieLsjsybAQelTdtsDEdWDQy9-7MHkX9teqR3Sp7erwCmFTwnrpRHNKaJ77R1J5HbkcUYg5g551UpuA4L_ZpiTTaHmlPbJtZBbBwUqLe-w'
  }
];

function generateHearts(count: number): string {
  let list = '';
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= count;
    list += `
      <svg class="w-5 h-5 ${isFilled ? 'text-primrose fill-primrose' : 'text-gray-300'}" xmlns="http://www.w3.org/2000/svg" fill="${isFilled ? '#F297A0' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    `;
  }
  return list;
}

function generateStars(count: number): string {
  let list = '';
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= count;
    list += `
      <svg class="w-5 h-5 ${isFilled ? 'text-[#B6BB79] fill-[#B6BB79]' : 'text-gray-300'}" xmlns="http://www.w3.org/2000/svg" fill="${isFilled ? '#B6BB79' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.88a1 1 0 00-1.176 0l-3.976 2.88c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.88c-.773-.564-.373-1.81.588-1.81h4.908a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    `;
  }
  return list;
}

// Master HTML Structure (One single, beautifully integrated view)
const appHtml = `
<div id="full-container" class="font-sans min-h-screen relative overflow-x-hidden antialiased selection:bg-primrose selection:text-white">
  
  <!-- 1. SPLASH SCREEN (Full Screen) -->
  <section id="splash-view" class="fixed inset-0 z-50 h-screen w-screen flex flex-col items-center justify-between p-8 bg-yucca overflow-hidden transition-all duration-1000 ease-in-out">
    
    <!-- Background Pastry Watermark -->
    <div class="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU6jXBoV8ygVxvX_-iAGqu_T6hpcsjrACQIzfl505w7kbdbAW6o3oCw_NqVMMMsawDXor4wjtdhFNZx5Q-5PzfZ6_N8leZoHiuQ7h4o8zQdDPj2JuelzvFhmEZ5kMA_d8GnDdzS_Kd-e4WzP1J6ZggcqwIMy87o-RRhLvXSlHu1N04v4iHmltX4qAQZzKTqr-g9j12f9V6jxHAEjNykSrIGvzDt-MSdGQDe9DnFqMJzmcmU8rl5pkMYofB-GahrpGj3JU4sToOzXs" 
           alt="Tarta vintage" 
           class="w-full max-w-4xl object-contain drop-shadow-sm rotate-6" />
    </div>

    <!-- Decorative Top Row -->
    <div class="w-full flex justify-between text-[#B6BB79] opacity-40 select-none z-10 max-w-5xl mx-auto">
      <span class="text-3xl">🌸</span>
      <span class="text-3xl">✨</span>
    </div>

    <!-- Main Content Panel (Emphasizing visual quality and spacing) -->
    <div class="relative z-10 flex flex-col items-center max-w-xl text-center my-auto transition-transform duration-1000 scale-95" id="splash-card">
      
      <!-- Circle Child Chef Illustration Logo Stilyzed -->
      <div class="mb-8 hover:scale-105 transition-transform duration-300">
        <div class="bg-white/80 p-5 rounded-full custom-shadow-lg flex items-center justify-center border-4 border-pinktone/40">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwvQbuBVHqiQAA5WYS-PkhduwgXdndnQ8GRVjwGvoHHQAWjEcznBsh18fKEL7d-fegZJUXuxz9Th3pvpUxdwjlNkcMsS1JjmQhERPBsqolF4FsDfY94tU7fYKKC21WocLiAX3NJ-qtH4zLRuuGnIjUKpmDJsy9mj8fucR8xsT2BGQMDI_uEVYu_xyxTQAVoDKzilUlKTh-P9z04hTO1KrA4ZWC4CmQVTfhG8XpX9JwqCbvSBwBuT1Ob5G5P_zFOEweMeRc1FC-rk" 
               alt="Delicias del Ayer Niño Chef" 
               class="h-40 w-40 md:h-52 md:w-52 object-contain" />
        </div>
      </div>

      <!-- Branding Headings -->
      <div class="space-y-4 mb-10">
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-[#924851] tracking-tight text-shadow-sm font-bold">
          DELICIAS DEL AYER
        </h1>
        <p class="font-sans text-lg md:text-xl text-[#5D544F] italic leading-relaxed max-w-lg mx-auto">
          “Sabores que despiertan los recuerdos más dulces de tu ayer.”
        </p>
      </div>

      <!-- Call to Action Button with Hover Ripple -->
      <button id="btn-enter" 
              class="group relative bg-[#F297A0] text-[#F3EBD8] hover:text-white px-10 py-5 rounded-full font-display text-lg font-semibold tracking-wide custom-shadow hover:scale-[1.05] active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer">
        <span class="relative z-10 flex items-center justify-center gap-2">
          Descubrir nuestros recuerdos dulces
          <svg class="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </span>
        <div class="absolute inset-0 bg-[#f07b87] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
      </button>

    </div>

    <!-- Decorative Bottom Row -->
    <div class="relative z-10 w-full flex justify-between items-center text-[#B6BB79] opacity-40 select-none z-10 max-w-5xl mx-auto">
      <span class="text-xs font-semibold tracking-widest font-display">PASTELERÍA ARTESANAL</span>
      <span class="text-xs font-semibold tracking-widest font-display">DESDE 1945</span>
    </div>

  </section>

  <!-- 2. MAIN WEBSITE COMPONENT (Initially hidden) -->
  <div id="desktop-home" class="hidden opacity-0 min-h-screen flex flex-col bg-yucca transition-all duration-1000 ease-in-out">
    
    <!-- Header Navigation -->
    <header class="sticky top-0 z-40 bg-yucca/90 backdrop-blur-md border-b border-pinktone/30 transition-all duration-300">
      <div class="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <!-- Logo Left -->
        <a href="#inicio" onclick="window.scrollTo({top:0, behavior:'smooth'}); return false;" class="flex items-center gap-3">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwvQbuBVHqiQAA5WYS-PkhduwgXdndnQ8GRVjwGvoHHQAWjEcznBsh18fKEL7d-fegZJUXuxz9Th3pvpUxdwjlNkcMsS1JjmQhERPBsqolF4FsDfY94tU7fYKKC21WocLiAX3NJ-qtH4zLRuuGnIjUKpmDJsy9mj8fucR8xsT2BGQMDI_uEVYu_xyxTQAVoDKzilUlKTh-P9z04hTO1KrA4ZWC4CmQVTfhG8XpX9JwqCbvSBwBuT1Ob5G5P_zFOEweMeRc1FC-rk" 
               alt="Mini Chef" 
               class="h-12 w-12 object-contain bg-white rounded-full p-0.5 border border-pinktone" />
          <span class="font-display text-xl tracking-tight text-[#924851] font-bold">DELICIAS DEL AYER</span>
        </a>

        <!-- Menu Desktop Right -->
        <nav class="hidden md:flex items-center gap-8">
          <a class="nav-link text-[#5D544F] font-semibold hover:text-[#924851] hover:scale-105 transition-all text-sm tracking-wide" href="#inicio">Inicio</a>
          <a class="nav-link text-[#5D544F] font-semibold hover:text-[#924851] hover:scale-105 transition-all text-sm tracking-wide" href="#sobre-nosotros">Sobre nosotros</a>
          <a class="nav-link text-[#5D544F] font-semibold hover:text-[#924851] hover:scale-105 transition-all text-sm tracking-wide" href="#catalogo">Catálogo</a>
          <a class="nav-link text-[#5D544F] font-semibold hover:text-[#924851] hover:scale-105 transition-all text-sm tracking-wide" href="#testimonios">Testimonios</a>
          <a class="nav-link text-[#5D544F] font-semibold hover:text-[#924851] hover:scale-105 transition-all text-sm tracking-wide" href="#contacto">Contacto</a>
          <button id="nav-btn-order" class="bg-[#F297A0] hover:bg-[#eb7d88] text-white px-5 py-2.5 rounded-full font-display text-sm font-semibold tracking-wide custom-shadow hover:scale-105 active:scale-95 transition-all cursor-pointer">
            Hacer un Pedido
          </button>
        </nav>

        <!-- Menu Burger Mobile -->
        <button id="mobile-menu-trigger" class="md:hidden text-[#924851] focus:outline-none p-2">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </header>

    <!-- Side Mobile Menu Cabinet -->
    <div id="mobile-drawer" class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex justify-end">
      <div class="bg-yucca w-72 h-full p-6 flex flex-col justify-between shadow-2xl relative translate-x-full transition-transform duration-300 overflow-y-auto rounded-l-2xl">
        
        <div>
          <!-- Header of Drawer -->
          <div class="flex justify-between items-center pb-6 border-b border-pinktone/30 mb-8">
            <span class="font-display font-medium text-lg text-[#924851]">Menú Tradicional</span>
            <button id="mobile-menu-close" class="text-[#924851] p-2 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Drawer Navigation list -->
          <ul class="space-y-5">
            <li><a class="mobile-nav-link text-lg font-display text-[#5D544F] hover:text-[#924851] block py-1" href="#inicio">Inicio</a></li>
            <li><a class="mobile-nav-link text-lg font-display text-[#5D544F] hover:text-[#924851] block py-1" href="#sobre-nosotros">Sobre nosotros</a></li>
            <li><a class="mobile-nav-link text-lg font-display text-[#5D544F] hover:text-[#924851] block py-1" href="#catalogo">Catálogo de Recuerdos</a></li>
            <li><a class="mobile-nav-link text-lg font-display text-[#5D544F] hover:text-[#924851] block py-1" href="#testimonios">Testimonios</a></li>
            <li><a class="mobile-nav-link text-lg font-display text-[#5D544F] hover:text-[#924851] block py-1" href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div class="border-t border-pinktone/30 pt-6">
          <button id="mobile-btn-order" class="w-full bg-[#F297A0] text-[#F3EBD8] hover:text-white py-4 rounded-full font-display text-sm font-semibold tracking-wide custom-shadow hover:scale-105 active:scale-95 transition-all text-center">
            Hacer un Pedido
          </button>
          <p class="text-xs text-center text-[#5D544F]/60 mt-4 font-sans italic">Delicias del Ayer desde 1945</p>
        </div>

      </div>
    </div>

    <!-- MAIN BODY CONTENT -->
    <main class="flex-grow">
      
      <!-- 2.2. BANNER PRINCIPAL (CARRUSEL) -->
      <section id="inicio" class="relative max-w-5xl mx-auto px-6 mt-6 select-none">
        <div class="relative w-full h-[320px] md:h-[480px] rounded-2xl overflow-hidden custom-shadow group">
          
          <!-- Slide Container -->
          <div id="carousel-images" class="w-full h-full relative">
            <!-- Renderized via Javascript -->
          </div>

          <!-- Slide Text Content Box -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/80 via-[#4A3E3D]/40 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 id="carousel-title" class="font-display text-2xl md:text-4xl text-[#F3EBD8] font-bold mb-2 transition-opacity duration-300">
              Cargando dulzura...
            </h2>
            <p id="carousel-description" class="font-sans text-sm md:text-lg text-[#F9D0CE] max-w-2xl mb-6 transition-opacity duration-300">
              Por favor espera.
            </p>
            <div>
              <button id="carousel-cta" class="bg-[#F297A0] hover:bg-[#eb7d88] text-white px-8 py-3 rounded-full font-display text-sm font-semibold tracking-wider custom-shadow hover:scale-[1.03] transition-all cursor-pointer">
                Ver Catálogo de Recuerdos
              </button>
            </div>
          </div>

          <!-- Carousel Controls -->
          <button id="carousel-prev" class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button id="carousel-next" class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Slides indicators -->
          <div class="absolute top-6 right-6 flex gap-2">
            <span class="carousel-dot block w-2.5 h-2.5 rounded-full bg-white/40 transition-all cursor-pointer"></span>
            <span class="carousel-dot block w-2.5 h-2.5 rounded-full bg-white/40 transition-all cursor-pointer"></span>
            <span class="carousel-dot block w-2.5 h-2.5 rounded-full bg-white/40 transition-all cursor-pointer"></span>
          </div>

        </div>
      </section>

      <!-- 2.3. TRES CATEGORÍAS SOBRE LA EMPRESA -->
      <section id="sobre-nosotros" class="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
          <span class="text-sm font-bold tracking-widest text-[#B6BB79] font-display uppercase block mb-1">Nuestra Filosofía</span>
          <h2 class="font-display text-3xl md:text-4xl text-[#924851] font-bold">Un viaje en el tiempo</h2>
          <div class="h-1 w-16 bg-[#F297A0] mx-auto mt-3 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Category Card 1 -->
          <div class="bg-[#F9D0CE] rounded-2xl p-8 flex flex-col items-center text-center custom-shadow group hover:scale-[1.03] transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-white/60 mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
              <svg class="w-8 h-8 text-[#924851]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="font-display text-xl text-[#924851] font-semibold mb-3">Tradición en cada bocado</h3>
            <p class="font-sans text-sm text-[#5D544F] leading-relaxed">
              Trabajamos con recetas ancestrales inspiradas en las abuelas, buscando evocar la calidez y el sosiego de memorias familiares perdidas en el tiempo.
            </p>
          </div>

          <!-- Category Card 2 -->
          <div class="bg-[#F9D0CE] rounded-2xl p-8 flex flex-col items-center text-center custom-shadow group hover:scale-[1.03] transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-white/60 mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
              <svg class="w-8 h-8 text-[#924851]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-display text-xl text-[#924851] font-semibold mb-3">Innovación con sabor a ayer</h3>
            <p class="font-sans text-sm text-[#5D544F] leading-relaxed">
              Combinamos técnicas de repostería moderna con ingredientes seleccionados de primera para resucitar el sabor puro y clásico, libre de artificios.
            </p>
          </div>

          <!-- Category Card 3 -->
          <div class="bg-[#F9D0CE] rounded-2xl p-8 flex flex-col items-center text-center custom-shadow group hover:scale-[1.03] transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-white/60 mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
              <svg class="w-8 h-8 text-[#924851]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-display text-xl text-[#924851] font-semibold mb-3">Momentos que vuelven</h3>
            <p class="font-sans text-sm text-[#5D544F] leading-relaxed">
              Cada pastel está ideado con espíritu artístico y tierno para despertar emociones puras y hacer de tus reuniones familiares un puente hacia la infancia.
            </p>
          </div>

        </div>
      </section>

      <!-- 3. CATÁLOGO EN LA PÁGINA PRINCIPAL -->
      <section id="catalogo" class="bg-[#F9D0CE]/40 py-16 scroll-mt-24">
        <div class="max-w-5xl mx-auto px-6">
          
          <!-- Title & Ver Más button -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div class="text-center md:text-left">
              <span class="text-sm font-bold tracking-widest text-[#B6BB79] font-display uppercase block mb-1">Especialidades</span>
              <h2 class="font-display text-3xl md:text-4xl text-[#924851] font-bold">Nuestro catálogo de recuerdos dulces</h2>
              <p class="font-sans text-[#5D544F] mt-2 italic">Pasteles tiernos, fríos y calientes, elaborados únicamente para evocar sensaciones verdaderas.</p>
            </div>
            <button id="btn-open-catalog" class="shrink-0 bg-[#F297A0] hover:bg-[#eb7d88] text-white px-8 py-4 rounded-full font-display text-sm font-semibold tracking-wider custom-shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
              Ver catálogo completo
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </button>
          </div>

          <!-- 6 Featured Items Grid -->
          <div id="featured-products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <!-- Rendered below dynamically -->
          </div>

        </div>
      </section>

      <!-- TESTIMONIALS SECTION -->
      <section id="testimonios" class="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <span class="text-sm font-bold tracking-widest text-[#B6BB79] font-display uppercase block mb-1">Mural de Memorias</span>
          <h2 class="font-display text-3xl md:text-4xl text-[#924851] font-bold">Lo que dicen los corazones contentos</h2>
          <div class="h-1 w-16 bg-[#F297A0] mx-auto mt-3 rounded-full"></div>
          <p class="font-sans text-sm text-[#5D544F] mt-3 italic max-w-lg mx-auto">
            Testimonios reales que celebran sensaciones y emociones puras nacidas con nuestros postres.
          </p>
        </div>

        <!-- 3 featured testimonials row -->
        <div id="testimonials-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Dynamically filled with initial testimonials and newly added ones -->
        </div>

        <div class="text-center">
          <button id="btn-open-testimonial" 
                  class="bg-white hover:bg-pinktone/20 text-[#924851] border-2 border-[#F297A0] px-8 py-3.5 rounded-full font-display text-sm font-semibold tracking-wider hover:scale-105 transition-all cursor-pointer">
            Dejar testimonio / Compartir mi recuerdo
          </button>
        </div>

      </section>

      <!-- SOBRE EL OBRADOR / INNOVACIÓN BRANDING SECT (Nostalgic context) -->
      <section class="bg-[#F3EBD8] border-t border-b border-pinktone/30 py-16">
        <div class="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div class="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform -rotate-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-YgmBk3ARUDSCjrAdWZ5t33PlZyr_OWzbWK8rSw9BJDsBa8FKBRhiFSoeLgResi-hAJf2GbJjC1OmMz1-ALC2BMTYa6YB5xEj6BPGcpqckU4oME70IPG0f1Hbwgk9ezudusiQKxhfatCPj7T9pcij3SSb86XauKUYHRL2ANU_io1Wx5qmw7_20GFHi-0eeKFFEFa6DvylyK7UYikGdqGR_BFUrhQdVElskvoLqr9VVOOJPhLLdfuLRRKGiB7fF5SLgPlaZDFsn_4" 
                 alt="Obrador Harina" 
                 class="w-full h-72 md:h-96 object-cover" />
            <div class="absolute inset-0 bg-[#4A3E3D]/20"></div>
          </div>

          <div class="space-y-6">
            <span class="text-xs font-bold tracking-widest text-[#B6BB79] font-display uppercase block">Calidad & Paciencia</span>
            <h2 class="font-display text-2xl md:text-3xl text-[#924851] font-bold">Un obrador suspendido en el ayer</h2>
            <p class="font-sans text-[#5D544F] leading-relaxed text-sm md:text-base">
              Nuestra masa reposa durante horas eternas. Infusionamos cada gota de leche en rama, seleccionamos canela pura de Ceilán y naranjas amargas de huertas vecinas. 
            </p>
            <p class="font-sans text-[#5D544F] leading-relaxed text-sm md:text-base italic">
              "No contamos minutos, contamos sonrisas. En nuestro taller, el tiempo se rinde al amor por el trabajo manual bien hecho."
            </p>
            <button id="btn-sidebar-order" class="bg-[#F297A0] hover:bg-[#eb7d88] text-white px-8 py-3.5 rounded-full font-display text-sm font-semibold tracking-wide custom-shadow hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Quiero un recuerdo dulce hoy
            </button>
          </div>

        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer id="contacto" class="bg-white/80 border-t border-pinktone/40 py-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <!-- Top Logo Branding -->
        <div class="flex flex-col items-center mb-8">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwvQbuBVHqiQAA5WYS-PkhduwgXdndnQ8GRVjwGvoHHQAWjEcznBsh18fKEL7d-fegZJUXuxz9Th3pvpUxdwjlNkcMsS1JjmQhERPBsqolF4FsDfY94tU7fYKKC21WocLiAX3NJ-qtH4zLRuuGnIjUKpmDJsy9mj8fucR8xsT2BGQMDI_uEVYu_xyxTQAVoDKzilUlKTh-P9z04hTO1KrA4ZWC4CmQVTfhG8XpX9JwqCbvSBwBuT1Ob5G5P_zFOEweMeRc1FC-rk" 
               alt="Circular niño chef" 
               class="h-24 w-24 object-contain bg-white rounded-full p-1 border border-pinktone mb-4" />
          <h2 class="font-display text-2xl font-bold tracking-tight text-[#924851]">DELICIAS DEL AYER</h2>
          <p class="font-sans text-xs text-[#5D544F] italic uppercase tracking-wider mt-1">El sabor artesanal de nuestra infancia</p>
        </div>

        <!-- Footer Grid Information -->
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-pinktone/20 py-8 mb-8 text-center md:text-left">
          
          <div class="space-y-3">
            <h4 class="font-display font-semibold text-[#924851] text-base">Contacto Dulce</h4>
            <ul class="text-sm font-sans space-y-2 text-[#5D544F]">
              <li class="flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-[#F297A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +34 900 000 000
              </li>
              <li class="flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-[#F297A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                hola@deliciasdelayer.com
              </li>
            </ul>
          </div>

          <div class="space-y-3">
            <h4 class="font-display font-semibold text-[#924851] text-base">Dirección &amp; Horarios</h4>
            <ul class="text-sm font-sans space-y-2 text-[#5D544F]">
              <li class="flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-[#F297A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Calle de la Dulzura 12 (Recuerdos)
              </li>
              <li class="flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-[#F297A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Lunes a Domingo: 9:00 — 20:00
              </li>
            </ul>
          </div>

          <div class="space-y-3 flex flex-col items-center md:items-start select-none">
            <h4 class="font-display font-semibold text-[#924851] text-base">Nuestros Enlaces</h4>
            <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-[#5D544F]">
              <a href="#inicio" class="hover:text-[#924851] hover:underline transition-colors block">Inicio</a>
              <a href="#sobre-nosotros" class="hover:text-[#924851] hover:underline transition-colors block">Nosotros</a>
              <a href="#catalogo" class="hover:text-[#924851] hover:underline transition-colors block">Catálogo</a>
              <a href="#testimonios" class="hover:text-[#924851] hover:underline transition-colors block">Testimonios</a>
            </div>
            <!-- Social media symbols -->
            <div class="flex gap-4 mt-2">
              <span class="text-xl hover:scale-110 transition-transform cursor-pointer">🎁</span>
              <span class="text-xl hover:scale-110 transition-transform cursor-pointer">🍪</span>
              <span class="text-xl hover:scale-110 transition-transform cursor-pointer">🥧</span>
            </div>
          </div>

        </div>

        <div class="text-center font-sans text-xs text-[#5D544F]/50">
          <p>© 2026 DELICIAS DEL AYER. Todos los derechos reservados.</p>
          <p class="mt-1">Hecho con el alma y amor por la repostería artesana pura.</p>
        </div>

      </div>
    </footer>

  </div>

  <!-- ==================== MODALS INJECTIONS ==================== -->

  <!-- A. MODAL CATÁLOGO COMPLETO -->
  <div id="modal-catalog" class="fixed inset-0 z-50 bg-[#4A3E3D]/50 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4">
    <div class="bg-yucca rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl relative flex flex-col transform scale-95 transition-transform duration-300">
      
      <!-- Modal Close header -->
      <div class="p-6 md:p-8 flex justify-between items-center bg-white border-b border-pinktone/30">
        <div>
          <h2 class="font-display text-2xl md:text-3xl text-[#924851] font-bold">Catálogo de Recuerdos de Delicias del Ayer</h2>
          <p class="text-xs text-[#5D544F] italic mt-1 font-sans">Dividido en nuestras categorías tradicionales auténticas</p>
        </div>
        <button id="modal-catalog-close" class="text-[#924851] p-2 hover:bg-[#F297A0]/10 rounded-full transition-colors focus:outline-none">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Category Filter Tabs Navigation -->
      <div class="bg-yucca flex border-b border-pinktone/30 overflow-x-auto">
        <button id="tab-all" class="tab-btn py-4 px-6 font-display text-sm font-semibold tracking-wide border-b-4 border-[#F297A0] text-[#924851] shrink-0 cursor-pointer">
          Todo el Obrador
        </button>
        <button id="tab-frios" class="tab-btn py-4 px-6 font-display text-sm font-semibold tracking-wide border-b-4 border-transparent text-[#5D544F] hover:text-[#924851] shrink-0 cursor-pointer">
          Pasteles fríos
        </button>
        <button id="tab-calientes" class="tab-btn py-4 px-6 font-display text-sm font-semibold tracking-wide border-b-4 border-transparent text-[#5D544F] hover:text-[#924851] shrink-0 cursor-pointer">
          Pasteles calientes
        </button>
        <button id="tab-ediciones" class="tab-btn py-4 px-6 font-display text-sm font-semibold tracking-wide border-b-4 border-transparent text-[#5D544F] hover:text-[#924851] shrink-0 cursor-pointer">
          Ediciones especiales de recuerdo
        </button>
      </div>

      <!-- Catalog Grid Content (Scrollable Container) -->
      <div class="p-6 md:p-8 overflow-y-auto flex-grow" id="catalog-modal-content">
        <!-- Filled with items below based on category tab -->
        <div id="catalog-modal-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"></div>
      </div>

      <!-- Action Footer -->
      <div class="p-6 bg-white border-t border-pinktone/30 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-sans text-xs text-[#5D544F] italic">No mostramos precios ni ingredientes para mantener viva la mística del recuerdo.</p>
        <button id="catalog-footer-order" class="bg-[#F297A0] hover:bg-[#eb7d88] text-white px-8 py-3 rounded-full font-display text-sm font-semibold tracking-wider custom-shadow">
          Solicitar encargo ahora
        </button>
      </div>

    </div>
  </div>

  <!-- B. FEEDBACK DIALOG SUCCESS (Confirmations) -->
  <div id="modal-success" class="fixed inset-0 z-50 bg-[#4A3E3D]/50 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative text-center transform scale-95 transition-transform duration-300">
      <div class="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#924851]">
        <svg class="w-12 h-12 text-[#924851]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 id="success-title" class="font-display text-2xl font-bold text-[#924851] mb-3">Recuerdo guardado</h3>
      <p id="success-message" class="font-sans text-[#5D544F] text-sm leading-relaxed mb-6">
        Tu mensaje se ha procesado con paciencia y amor.
      </p>
      <button id="success-close" class="w-full bg-[#F297A0] hover:bg-[#eb7d88] text-white py-3 rounded-full font-display font-medium tracking-wide">
        Entendido
      </button>
    </div>
  </div>

  <!-- C. MODAL FORMULARIO DE PEDIDO -->
  <div id="modal-order" class="fixed inset-0 z-50 bg-[#4A3E3D]/50 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-yucca rounded-3xl w-full max-w-lg shadow-2xl relative flex flex-col transform scale-95 transition-transform duration-300 max-h-[90vh]">
      
      <!-- Header -->
      <div class="p-6 md:p-8 flex justify-between items-center bg-white border-b border-pinktone/30 shrink-0">
        <div>
          <h2 class="font-display text-2xl text-[#924851] font-bold">Encarga tu recuerdo dulce</h2>
          <p class="text-xs text-[#5D544F] font-sans mt-1 italic">Dinos qué momento de tu vida te gustaría saborear hoy</p>
        </div>
        <button id="modal-order-close" class="text-[#924851] p-1.5 hover:bg-[#F297A0]/10 rounded-full transition-colors focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Scrollable Form Area -->
      <form id="order-form" class="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
        
        <!-- Nombre -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-name">Nombre completo</label>
          <input required id="order-name" name="name" type="text" placeholder="Ej: María García" 
                 class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all" />
        </div>

        <!-- Contacto Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-email">Correo electrónico</label>
            <input required id="order-email" name="email" type="email" placeholder="hola@ejemplo.com" 
                   class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all" />
          </div>
          <div class="space-y-1">
            <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-phone">Teléfono</label>
            <input required id="order-phone" name="phone" type="tel" placeholder="+34 600 000 000" 
                   class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all" />
          </div>
        </div>

        <!-- Producto Selector -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-product">¿Qué delicia te gustaría saborear?</label>
          <select required id="order-product" name="product" 
                  class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all text-[#5D544F]">
            <!-- Insert options dynamically -->
          </select>
        </div>

        <!-- Entrega / Fecha -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-delivery">Tipo de entrega</label>
            <select required id="order-delivery" name="delivery" 
                    class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all text-[#5D544F]">
              <option value="recogida">Recogida en Obrador (Calle Dulzura 12)</option>
              <option value="domicilio">Entrega a domicilio en carro artesano</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-date">Fecha de entrega deseada</label>
            <input required id="order-date" name="date" type="date" 
                   class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all text-[#5D544F]" />
          </div>
        </div>

        <!-- Mensaje Especial / Emocional -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="order-message">¿Qué recuerdos o sentimientos quieres revivir con este pastel?</label>
          <textarea id="order-message" name="message" rows="3" placeholder="Ej: Quiero celebrar el aniversario de bodas de mis padres recreando la tarta de su juventud..." 
                    class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all resize-none"></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="w-full bg-[#F297A0] hover:bg-[#eb7d88] text-white py-4 rounded-full font-display font-semibold tracking-wider custom-shadow hover:scale-[1.02] active:scale-95 transition-all text-center shrink-0 cursor-pointer">
          Confirmar mi Recuerdo Dulce
        </button>

      </form>

    </div>
  </div>

  <!-- D. MODAL FORMULARIO DE TESTIMONIO -->
  <div id="modal-testimonial" class="fixed inset-0 z-50 bg-[#4A3E3D]/50 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4">
    <div class="bg-yucca rounded-3xl w-full max-w-lg shadow-2xl relative flex flex-col transform scale-95 transition-transform duration-300 max-h-[90vh]">
      
      <!-- Header -->
      <div class="p-6 md:p-8 flex justify-between items-center bg-white border-b border-pinktone/30 shrink-0">
        <div>
          <h2 class="font-display text-2xl text-[#924851] font-bold">Compartir tu Recuerdo</h2>
          <p class="text-xs text-[#5D544F] font-sans mt-1 italic">Dinos qué sabor probaste y a dónde te llevó de viaje emocional</p>
        </div>
        <button id="modal-testimonial-close" class="text-[#924851] p-1.5 hover:bg-[#F297A0]/10 rounded-full transition-colors focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Testimonial Form content -->
      <form id="testimonial-form" class="p-6 md:p-8 space-y-6 flex-grow overflow-y-auto">
        
        <!-- Nombre -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="testi-name">Tu nombre (deja vacío para ser Anónimo)</label>
          <input id="testi-name" name="name" type="text" placeholder="Anónimo, Carmen R..." 
                 class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all" />
        </div>

        <!-- Producto selection dropdown -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1 font-semibold" for="testi-product">¿Qué sabor de Delicias del Ayer probaste?</label>
          <select required id="testi-product" name="product" 
                  class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all text-[#5D544F]">
            <!-- Insert options dynamically -->
          </select>
        </div>

        <!-- Stars selector (Evoking emotional intensity scale instead of pure taste notes) -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" id="label-stars">
            Intensidad de Nostalgia / Recuerdo despertado (1 a 5 estrellas)
          </label>
          <div class="flex gap-2 text-gray-300 select-none pb-2 pt-1 transition-all" id="star-selector-container">
            <button type="button" class="star-btn cursor-pointer p-0.5 focus:outline-none hover:scale-110" data-value="1">
              <svg class="w-8 h-8 pointer-events-none fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </button>
            <button type="button" class="star-btn cursor-pointer p-0.5 focus:outline-none hover:scale-110" data-value="2">
              <svg class="w-8 h-8 pointer-events-none fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </button>
            <button type="button" class="star-btn cursor-pointer p-0.5 focus:outline-none hover:scale-110" data-value="3">
              <svg class="w-8 h-8 pointer-events-none fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </button>
            <button type="button" class="star-btn cursor-pointer p-0.5 focus:outline-none hover:scale-110" data-value="4">
              <svg class="w-8 h-8 pointer-events-none fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </button>
            <button type="button" class="star-btn cursor-pointer p-0.5 focus:outline-none hover:scale-110" data-value="5">
              <svg class="w-8 h-8 pointer-events-none fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </button>
          </div>
          <!-- Hidden inputs or values -->
          <input type="hidden" name="rating" id="testi-rating-value" value="5" />
        </div>

        <!-- The story content (No flavor remarks strictly) -->
        <div class="space-y-1">
          <label class="block font-display text-sm font-semibold text-[#924851] px-1" for="testi-memory">Cuéntanos tu historia. ¿Qué recuerdos te trajeron las delicias?</label>
          <textarea required id="testi-memory" name="memory" rows="4" placeholder="..." 
                    class="w-full bg-white border border-pinktone/60 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F297A0] focus:border-transparent outline-none transition-all resize-none"></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="w-full bg-[#F297A0] hover:bg-[#eb7d88] text-white py-4 rounded-full font-display font-semibold tracking-wider custom-shadow hover:scale-[1.02] active:scale-95 transition-all text-center">
          Enviar mi historia dulce
        </button>

      </form>

    </div>
  </div>

</div>
`;

// Initialize the screen applet structures
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = appHtml;
}

// Global active modal references
const modalCatalog = document.getElementById('modal-catalog');
const modalSuccess = document.getElementById('modal-success');
const modalOrder = document.getElementById('modal-order');
const modalTestimonial = document.getElementById('modal-testimonial');
const splashView = document.getElementById('splash-view');
const desktopHome = document.getElementById('desktop-home');
const mobileDrawer = document.getElementById('mobile-drawer');

// Dropdowns pre-fill logic
const orderProductSelect = document.getElementById('order-product') as HTMLSelectElement;
const testiProductSelect = document.getElementById('testi-product') as HTMLSelectElement;

function fillDropdowns() {
  if (orderProductSelect && testiProductSelect) {
    let optionsHtml = '<option value="" disabled selected>Elige un pastel dulce...</option>';
    products.forEach(p => {
      optionsHtml += `<option value="${p.name}">${p.name}</option>`;
    });
    orderProductSelect.innerHTML = optionsHtml;
    testiProductSelect.innerHTML = optionsHtml;
  }
}

// Dynamic Carousel render
const carouselImages = document.getElementById('carousel-images');
const carouselTitle = document.getElementById('carousel-title');
const carouselDescription = document.getElementById('carousel-description');

function renderCarousel() {
  if (carouselImages && carouselTitle && carouselDescription) {
    let dotsHtml = '';
    let imgsHtml = '';
    
    slides.forEach((sl, idx) => {
      imgsHtml += `
        <div class="carousel-item-img absolute inset-0 bg-cover bg-center transition-all duration-1000 transform opacity-0 scale-105" 
             style="background-image: url('${sl.image}'); filter: brightness(0.95); opacity: ${idx === activeSlideIndex ? '1' : '0'}; transform: scale(${idx === activeSlideIndex ? '1' : '1.05'})">
        </div>
      `;
    });
    
    carouselImages.innerHTML = imgsHtml;
    
    // Set text contents
    carouselTitle.innerText = slides[activeSlideIndex].title;
    carouselDescription.innerText = slides[activeSlideIndex].description;

    // Update dots state
    const dotsList = document.querySelectorAll('.carousel-dot');
    dotsList.forEach((dt, idx) => {
      if (idx === activeSlideIndex) {
        dt.classList.add('bg-white', 'scale-125');
        dt.classList.remove('bg-white/40');
      } else {
        dt.classList.remove('bg-white', 'scale-125');
        dt.classList.add('bg-white/40');
      }
    });
  }
}

// Carousel Next / Prev
function nextSlide() {
  activeSlideIndex = (activeSlideIndex + 1) % slides.length;
  renderCarousel();
}

function prevSlide() {
  activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
  renderCarousel();
}

// Autoplay slide interval
let carouselInterval = setInterval(nextSlide, 7000);

function resetCarouselTimer() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(nextSlide, 7000);
}

// Testimonials dynamic renderer
const testimonialsGrid = document.getElementById('testimonials-grid');

function renderTestimonials() {
  if (testimonialsGrid) {
    let html = '';
    // Show all testimonials in reverse order of submission (newest first)
    const featuredList = [...testimonials].reverse();
    
    featuredList.forEach(t => {
      // Escapar dobles comillas para evitar fallas en los atributos HTML
      const escName = (t.name || '').replace(/"/g, '&quot;');
      const escMemory = (t.memory || '').replace(/"/g, '&quot;');
      
      html += `
        <div class="bg-white rounded-2xl p-8 custom-shadow border-l-4 border-[#F297A0] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative group">
          <div>
            <div class="flex text-[#B6BB79] gap-0.5 mb-5 select-none font-sans">
              ${generateStars(t.rating)}
            </div>
            <p class="font-sans text-sm text-[#5D544F] italic leading-relaxed mb-6">
              "${t.memory}"
            </p>
          </div>
          <div class="flex justify-between items-end gap-4 mt-2">
            <div>
              <h5 class="font-display font-semibold text-[#924851] text-base">${t.name || 'Cliente anónimo'}</h5>
              <span class="text-xs text-cocoa/60 font-sans italic block mt-1">Probó: ${t.product}</span>
            </div>
            
            <button class="delete-testimonial-btn opacity-60 group-hover:opacity-100 hover:text-red-700 hover:bg-red-50 border border-red-100 hover:border-red-300 rounded-lg p-2 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    title="Eliminar este testimonio del mural"
                    data-name="${escName}" 
                    data-memory="${escMemory}">
              <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      `;
    });
    testimonialsGrid.innerHTML = html;

    // Vincular event listeners de eliminación
    const deleteBtns = testimonialsGrid.querySelectorAll('.delete-testimonial-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const name = target.getAttribute('data-name') || '';
        const memory = target.getAttribute('data-memory') || '';
        eliminarTestimonio(name, memory);
      });
    });
  }
}

// Home featured 6 items list (Tarta de Terciopelo, Galletas de la Abuela, Bizcocho Cítrico, Tortitas del Ayer, Brownie de Herencia, Pastel Confetti)
const featuredProductsGrid = document.getElementById('featured-products-grid');

function renderFeaturedProducts() {
  if (featuredProductsGrid) {
    let html = '';
    // Filter down exactly 6 featured items
    const featuredIds = ['velvet', 'galletas', 'citrico', 'tortitas', 'brownie', 'confetti'];
    const list = products.filter(p => featuredIds.includes(p.id));
    
    list.forEach(p => {
      html += `
        <div class="bg-white rounded-2xl overflow-hidden custom-shadow group hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
          <div class="relative h-64 overflow-hidden bg-[#F9D0CE]/20">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-4 left-4">
              <span class="bg-[#B6BB79] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-display">
                ${p.category}
              </span>
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h4 class="font-display text-lg font-bold text-[#924851] mb-2">${p.name}</h4>
              <p class="font-sans text-xs text-[#5D544F] leading-relaxed mb-5 italic">
                "${p.description}"
              </p>
            </div>
            <div>
              <div class="flex justify-between items-center pt-2 border-t border-pinktone/30 select-none">
                <div class="flex gap-1 items-center">
                  <span class="text-[11px] font-sans font-medium text-cocoa/60 mr-1 uppercase">Dulzura</span>
                  <div class="flex gap-0.5">
                    ${generateHearts(p.sweetness)}
                  </div>
                </div>
                <button class="btn-order-this bg-primrose hover:bg-[#eb7d88] text-white px-4 py-2 rounded-full font-display text-xs font-semibold hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer" data-product="${p.name}">
                  Encargar
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    featuredProductsGrid.innerHTML = html;
  }
}

// Render full categorized list for Catalog Modal
const catalogModalGrid = document.getElementById('catalog-modal-grid');

function renderCatalogModal(filterTab: string = 'all') {
  if (catalogModalGrid) {
    let filtered = products;
    if (filterTab === 'frios') {
      filtered = products.filter(p => p.category === 'Pasteles fríos');
    } else if (filterTab === 'calientes') {
      filtered = products.filter(p => p.category === 'Pasteles calientes');
    } else if (filterTab === 'ediciones') {
      filtered = products.filter(p => p.category === 'Ediciones especiales de recuerdo');
    }

    let html = '';
    filtered.forEach(p => {
      html += `
        <div class="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row hover:scale-[1.01] transition-transform duration-300">
          <div class="md:w-2/5 h-48 md:h-full relative overflow-hidden bg-[#F9D0CE]/10 shrink-0">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3">
              <span class="bg-[#B6BB79] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-display block">
                ${p.category}
              </span>
            </div>
          </div>
          <div class="p-5 flex flex-col justify-between flex-grow">
            <div>
              <h4 class="font-display text-base font-bold text-[#924851] mb-1.5">${p.name}</h4>
              <p class="font-sans text-[11px] leading-relaxed text-[#5D544F] italic mb-4">
                "${p.description}"
              </p>
            </div>
            
            <div class="pt-2 border-t border-pinktone/20 flex justify-between items-center select-none shrink-0">
              <div class="flex gap-0.5 items-center">
                <span class="text-[10px] font-sans font-semibold text-cocoa/40 uppercase mr-1">Dulzura</span>
                <div class="flex gap-0.5">
                  ${generateHearts(p.sweetness)}
                </div>
              </div>
              <button class="btn-order-this bg-primrose text-white px-3 py-1.5 rounded-full font-display text-[11px] font-semibold hover:scale-105 active:scale-95 transition-all text-center uppercase" data-product="${p.name}">
                Encargar
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    catalogModalGrid.innerHTML = html || `
      <div class="col-span-2 text-center py-12 text-[#5D544F]/50 italic">
        Sabor en proceso artesano... ¡Próximamente más recuerdos dulces!
      </div>
    `;

    // Intercept fresh order buttons inside catalog modal
    bindOrderTriggers();
  }
}

// Animation helper for modals
function toggleModal(modal: HTMLElement | null, open: boolean) {
  if (!modal) return;
  const innerCard = modal.querySelector('.transform');
  if (open) {
    modal.classList.remove('hidden', 'pointer-events-none');
    modal.classList.add('flex');
    setTimeout(() => {
      modal.classList.add('opacity-100');
      if (innerCard) {
        innerCard.classList.remove('scale-95');
        innerCard.classList.add('scale-100');
      }
    }, 10);
  } else {
    modal.classList.remove('opacity-100');
    if (innerCard) {
      innerCard.classList.add('scale-95');
      innerCard.classList.remove('scale-100');
    }
    setTimeout(() => {
      modal.classList.add('hidden', 'pointer-events-none');
      modal.classList.remove('flex');
    }, 300);
  }
}

// Trigger standard success feedback modal
function showSuccessAlert(title: string, message: string) {
  const successTitle = document.getElementById('success-title');
  const successMessage = document.getElementById('success-message');
  if (successTitle && successMessage) {
    successTitle.innerText = title;
    successMessage.innerText = message;
    toggleModal(modalSuccess, true);
  }
}

// Central triggers bind for "Encargar" button
function bindOrderTriggers() {
  document.querySelectorAll('.btn-order-this').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productName = (e.currentTarget as HTMLElement).getAttribute('data-product') || '';
      
      // Close the catalog modal if open to prevent stack confusion
      toggleModal(modalCatalog, false);
      
      // Select prefilled item and open order modal
      if (orderProductSelect) {
        orderProductSelect.value = productName;
      }
      toggleModal(modalOrder, true);
    });
  });
}

// Binds All Master Events
function initApplet() {
  
  // Enter Page button link from splash
  const btnEnter = document.getElementById('btn-enter');
  if (btnEnter && splashView && desktopHome) {
    btnEnter.addEventListener('click', () => {
      // Smooth fade splash container
      splashView.classList.add('opacity-0');
      splashView.classList.add('scale-105');
      
      setTimeout(() => {
        splashView.classList.add('hidden');
        
        // Show Home View seamlessly
        desktopHome.classList.remove('hidden');
        setTimeout(() => {
          desktopHome.classList.add('opacity-100');
        }, 50);

        // Smooth scroll to top of Page
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 1000);
    });
  }

  // Carousel indicators slide actions click
  document.querySelectorAll('.carousel-dot').forEach((dt, idx) => {
    dt.addEventListener('click', () => {
      activeSlideIndex = idx;
      renderCarousel();
      resetCarouselTimer();
    });
  });

  // Carousel Buttons Left/Right
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
      prevSlide();
      resetCarouselTimer();
    });
  }
  if (carouselNext) {
    carouselNext.addEventListener('click', () => {
      nextSlide();
      resetCarouselTimer();
    });
  }

  // CTA button carousel Ver Catálogo
  const carouselCta = document.getElementById('carousel-cta');
  if (carouselCta) {
    carouselCta.addEventListener('click', () => {
      toggleModal(modalCatalog, true);
    });
  }

  // Tabs on Catalog Modal
  const tabs = {
    all: document.getElementById('tab-all'),
    frios: document.getElementById('tab-frios'),
    calientes: document.getElementById('tab-calientes'),
    ediciones: document.getElementById('tab-ediciones')
  };

  Object.entries(tabs).forEach(([key, btn]) => {
    if (btn) {
      btn.addEventListener('click', () => {
        // Toggle selected styling classes
        Object.values(tabs).forEach(t => t?.classList.remove('border-[#F297A0]', 'text-[#924851]'));
        Object.values(tabs).forEach(t => t?.classList.add('border-transparent', 'text-[#5D544F]'));
        
        btn.classList.add('border-[#F297A0]', 'text-[#924851]');
        btn.classList.remove('border-transparent', 'text-[#5D544F]');
        
        renderCatalogModal(key);
      });
    }
  });

  // Open modals buttons
  const btnOpenCatalog = document.getElementById('btn-open-catalog');
  if (btnOpenCatalog) {
    btnOpenCatalog.addEventListener('click', () => {
      toggleModal(modalCatalog, true);
    });
  }

  const btnOpenTestimonial = document.getElementById('btn-open-testimonial');
  if (btnOpenTestimonial) {
    btnOpenTestimonial.addEventListener('click', () => {
      toggleModal(modalTestimonial, true);
    });
  }

  // Top header button to open order form
  const navBtnOrder = document.getElementById('nav-btn-order');
  if (navBtnOrder) {
    navBtnOrder.addEventListener('click', () => {
      toggleModal(modalOrder, true);
    });
  }

  // Mobile Drawer elements
  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileBtnOrder = document.getElementById('mobile-btn-order');
  
  if (mobileMenuTrigger && mobileDrawer) {
    mobileMenuTrigger.addEventListener('click', () => {
      mobileDrawer.classList.remove('pointer-events-none');
      mobileDrawer.classList.add('opacity-100');
      const drawerPanel = mobileDrawer.querySelector('.bg-yucca');
      if (drawerPanel) drawerPanel.classList.remove('translate-x-full');
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      const drawerPanel = mobileDrawer.querySelector('.bg-yucca');
      if (drawerPanel) drawerPanel.classList.add('translate-x-full');
      mobileDrawer.classList.remove('opacity-100');
      mobileDrawer.classList.add('pointer-events-none');
    }
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileDrawer);
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMobileDrawer();
      }
    });
  }

  // Handle anchor navigation link tap on mobile to close drawer
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  if (mobileBtnOrder) {
    mobileBtnOrder.addEventListener('click', () => {
      closeMobileDrawer();
      toggleModal(modalOrder, true);
    });
  }

  // Footer order action button
  const btnSidebarOrder = document.getElementById('btn-sidebar-order');
  if (btnSidebarOrder) {
    btnSidebarOrder.addEventListener('click', () => {
      toggleModal(modalOrder, true);
    });
  }
  
  const catalogFooterOrder = document.getElementById('catalog-footer-order');
  if (catalogFooterOrder) {
    catalogFooterOrder.addEventListener('click', () => {
      toggleModal(modalCatalog, false);
      toggleModal(modalOrder, true);
    });
  }

  // Success Modal close handler
  const successClose = document.getElementById('success-close');
  if (successClose) {
    successClose.addEventListener('click', () => {
      toggleModal(modalSuccess, false);
    });
  }

  // Modals Close handlers click
  const modalCatalogClose = document.getElementById('modal-catalog-close');
  if (modalCatalogClose) {
    modalCatalogClose.addEventListener('click', () => toggleModal(modalCatalog, false));
  }

  const modalOrderClose = document.getElementById('modal-order-close');
  if (modalOrderClose) {
    modalOrderClose.addEventListener('click', () => toggleModal(modalOrder, false));
  }

  const modalTestimonialClose = document.getElementById('modal-testimonial-close');
  if (modalTestimonialClose) {
    modalTestimonialClose.addEventListener('click', () => toggleModal(modalTestimonial, false));
  }

  // Close modals when tapping outside card
  [modalCatalog, modalOrder, modalTestimonial, modalSuccess].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          toggleModal(modal, false);
        }
      });
    }
  });

  // Star Rating Interactive logic
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedValue = parseInt((e.currentTarget as HTMLElement).getAttribute('data-value') || '5');
      const ratingInput = document.getElementById('testi-rating-value') as HTMLInputElement;
      if (ratingInput) {
        ratingInput.value = selectedValue.toString();
      }

      // Re-style stars filling
      const starsList = document.querySelectorAll('.star-btn');
      starsList.forEach((st, idx) => {
        if (idx < selectedValue) {
          st.classList.add('text-[#B6BB79]');
          st.classList.remove('text-gray-300');
        } else {
          st.classList.remove('text-[#B6BB79]');
          st.classList.add('text-gray-300');
        }
      });
    });
  });

  // Order form submissions
  const orderForm = document.getElementById('order-form') as HTMLFormElement;
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(orderForm);
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const product = formData.get('product') as string;

      toggleModal(modalOrder, false);
      orderForm.reset();

      // Show beautiful success
      showSuccessAlert(
        '¡Pedido de Recuerdo Recibido!',
        `Estimado/a ${name}, nos pondremos en contacto contigo de inmediato al ${phone} para coordinar la entrega de tu magnífico/a "${product}". ¡Gracias por revivir este tierno recuerdo con nosotros!`
      );
    });
  }

  // Testimonial Form submission
  const testimonialForm = document.getElementById('testimonial-form') as HTMLFormElement;
  if (testimonialForm) {
    testimonialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(testimonialForm);
      const nameInput = (formData.get('name') as string).trim();
      const name = nameInput === '' ? 'Cliente anónimo' : nameInput;
      const product = formData.get('product') as string;
      const memory = formData.get('memory') as string;
      const rating = parseInt((document.getElementById('testi-rating-value') as HTMLInputElement).value || '5');

      // Append new memory record
      localTestimonials.push({
        name,
        product,
        memory,
        rating
      });

      toggleModal(modalTestimonial, false);
      testimonialForm.reset();

      // Reset stars state to 5
      const starsList = document.querySelectorAll('.star-btn');
      starsList.forEach(st => {
        st.classList.add('text-[#B6BB79]');
        st.classList.remove('text-gray-300');
      });
      const ratingInput = document.getElementById('testi-rating-value') as HTMLInputElement;
      if (ratingInput) ratingInput.value = '5';

      // Redraw list dynamically with new entry!
      rebuildTestimonials();

      // Notify User
      showSuccessAlert(
        '¡Gracias por tu Recuerdo!',
        'Tu pasaje de nostalgia ha sido añadido al mural de Delicias del Ayer. Compartir tus memorias endulza la vida de toda nuestra gran familia.'
      );
    });
  }

}

// Start up routines
fillDropdowns();
renderCarousel();
renderFeaturedProducts();
renderCatalogModal();
renderTestimonials();
initApplet();
bindOrderTriggers();

// Google Sheets sync intervals
main();
setInterval(main, 5000);

