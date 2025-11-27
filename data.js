const categories = [
  {
    id: '1',
    name: 'Tecnología',
    requirements: ['Prototipo funcional', 'Plan de negocio', 'Equipo técnico']
  },
  {
    id: '2',
    name: 'Arte y Cultura',
    requirements: ['Portfolio de trabajos', 'Cronograma del proyecto']
  },
  {
    id: '3',
    name: 'Salud',
    requirements: ['Documentación médica', 'Presupuesto detallado', 'Institución respaldante']
  },
  {
    id: '4',
    name: 'Educación',
    requirements: ['Plan educativo', 'Beneficiarios target', 'Métricas de impacto']
  },
  {
    id: '5',
    name: 'Medio Ambiente',
    requirements: ['Estudio de impacto', 'Plan de sostenibilidad']
  }
];

const users = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    role: 'user',
    isActive: true
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria.garcia@email.com',
    role: 'user',
    isActive: true
  },
  {
    id: '3',
    name: 'Admin Principal',
    email: 'admin@crowdfunding.com',
    role: 'admin',
    isActive: true
  },
  {
    id: '4',
    name: 'Carlos López',
    email: 'carlos.lopez@email.com',
    role: 'user',
    isActive: false
  }
];

const projects = [
  {
    id: '1',
    title: 'App de Delivery Ecológico',
    description: 'Una aplicación móvil que conecta restaurantes locales con deliverys en bicicleta para reducir la huella de carbono.',
    detailedDescription: 'EcoDelivery es una innovadora plataforma que revolucionará el sector de delivery de alimentos. Nuestro enfoque ecológico utiliza únicamente bicicletas y vehículos eléctricos para las entregas, reduciendo significativamente las emisiones de CO2. La aplicación incluirá funciones de seguimiento en tiempo real, calificación de restaurantes basada en criterios sostenibles, y un programa de puntos que recompensa a los usuarios por elegir opciones eco-friendly.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    category: 'Tecnología',
    fundingGoal: 50000,
    currentAmount: 32500,
    deadline: '2025-06-30',
    ownerId: '1',
    ownerName: 'Juan Pérez',
    status: 'published',
    campaignStatus: 'in_progress',
    createdAt: '2024-01-15',
    isFavorite: false
  },
  {
    id: '2',
    title: 'Murales Comunitarios',
    description: 'Proyecto para crear murales artísticos en barrios de escasos recursos, involucrando a la comunidad local.',
    detailedDescription: 'Los Murales Comunitarios buscan transformar espacios urbanos degradados en obras de arte que reflejen la identidad y esperanzas de cada barrio. Trabajaremos con artistas locales y residentes para diseñar y pintar murales que cuenten historias de la comunidad. El proyecto incluye talleres de arte para jóvenes, formación en técnicas de muralismo, y la creación de un circuito artístico que fomente el turismo cultural local.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    category: 'Arte y Cultura',
    fundingGoal: 25000,
    currentAmount: 18750,
    deadline: '2025-05-31',
    ownerId: '2',
    ownerName: 'María García',
    status: 'published',
    campaignStatus: 'in_progress',
    createdAt: '2024-02-10',
    isFavorite: true
  },
  {
    id: '3',
    title: 'Centro de Rehabilitación Rural',
    description: 'Construcción de un centro de rehabilitación física en una zona rural sin acceso a servicios de salud especializados.',
    detailedDescription: 'Este proyecto busca construir el primer centro de rehabilitación física en la región rural de San Miguel, donde más de 15,000 habitantes no tienen acceso a servicios de fisioterapia y rehabilitación. El centro contará con equipamiento moderno, piscina terapéutica, gimnasio de rehabilitación y un equipo de profesionales que atenderán desde lesiones deportivas hasta recuperación post-operatoria. Además, ofreceremos programas de prevención y educación en salud para la comunidad.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    category: 'Salud',
    fundingGoal: 100000,
    currentAmount: 45000,
    deadline: '2025-03-15',
    ownerId: '1',
    ownerName: 'Juan Pérez',
    status: 'published',
    campaignStatus: 'in_progress',
    createdAt: '2024-01-20'
  },
  {
    id: '4',
    title: 'Laboratorio de Robótica Educativa',
    description: 'Equipamiento de un laboratorio de robótica para estudiantes de secundaria en escuelas públicas.',
    detailedDescription: 'El Laboratorio de Robótica Educativa equipará a 5 escuelas públicas con kits de robótica, computadoras y software especializado para enseñar programación y robótica a estudiantes de 12 a 18 años. El proyecto incluye la capacitación de 20 profesores, desarrollo de currículum educativo adaptado, y la organización de competencias inter-escolares. Nuestro objetivo es despertar vocaciones científicas y tecnológicas en jóvenes de sectores vulnerables.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    category: 'Educación',
    fundingGoal: 75000,
    currentAmount: 22500,
    deadline: '2025-04-30',
    ownerId: '2',
    ownerName: 'María García',
    status: 'published',
    campaignStatus: 'in_progress',
    createdAt: '2024-03-01'
  },
  {
    id: '5',
    title: 'Parque Solar Comunitario',
    description: 'Instalación de paneles solares para generar energía limpia y reducir costos eléctricos en la comunidad.',
    detailedDescription: 'El Parque Solar Comunitario instalará 200 paneles solares en terrenos comunales para generar energía limpia que abastezca parcialmente las necesidades eléctricas de 150 familias. El proyecto reducirá las facturas de electricidad en un 40% y generará excedentes que serán vendidos a la red eléctrica nacional. Los ingresos adicionales se destinarán a un fondo comunitario para proyectos de desarrollo local.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    category: 'Medio Ambiente',
    fundingGoal: 120000,
    currentAmount: 65000,
    deadline: '2025-07-15',
    ownerId: '1',
    ownerName: 'Juan Pérez',
    status: 'published',
    campaignStatus: 'in_progress',
    createdAt: '2024-02-15'
  },
  {
    id: '6',
    title: 'Plataforma de E-learning',
    description: 'Desarrollo de una plataforma educativa online con cursos gratuitos para comunidades de bajos recursos.',
    detailedDescription: 'EduLibre es una plataforma de e-learning que ofrecerá cursos gratuitos de oficios, habilidades digitales y emprendimiento a comunidades de bajos recursos. La plataforma incluirá videos interactivos, evaluaciones gamificadas, certificaciones reconocidas y un sistema de mentoría virtual. Nuestro objetivo es democratizar el acceso a la educación de calidad y crear oportunidades de desarrollo económico en zonas marginadas.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    category: 'Educación',
    fundingGoal: 60000,
    currentAmount: 8500,
    deadline: '2025-01-31',
    ownerId: '2',
    ownerName: 'María García',
    status: 'observed',
    campaignStatus: 'not_started',
    observations: ['Falta especificar el modelo de sostenibilidad financiera', 'Requerimos más detalles sobre la metodología pedagógica'],
    createdAt: '2024-03-10'
  },
  {
    id: '7',
    title: 'Huerto Urbano Comunitario',
    description: 'Creación de espacios verdes productivos en la ciudad para fomentar la agricultura urbana y la alimentación saludable.',
    detailedDescription: 'El Huerto Urbano Comunitario transformará terrenos baldíos en espacios productivos donde las familias del barrio puedan cultivar sus propias verduras y hortalizas. El proyecto incluye la preparación del terreno, instalación de sistemas de riego por goteo, construcción de invernaderos pequeños y talleres de capacitación en agricultura urbana sostenible. Además, crearemos un programa de intercambio de semillas y productos entre vecinos.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    category: 'Medio Ambiente',
    fundingGoal: 35000,
    currentAmount: 12600,
    deadline: '2025-08-31',
    ownerId: '1',
    ownerName: 'Juan Pérez',
    status: 'published',
    campaignStatus: 'paused',
    createdAt: '2024-02-28'
  }
];

const donations = [
  {
    id: '1',
    projectId: '1',
    projectTitle: 'App de Delivery Ecológico',
    userId: '2',
    userName: 'María García',
    amount: 500,
    date: '2024-03-15',
    message: '¡Excelente idea! Necesitamos más iniciativas verdes.'
  },
  {
    id: '2',
    projectId: '1',
    projectTitle: 'App de Delivery Ecológico',
    userId: '4',
    userName: 'Carlos López',
    amount: 1000,
    date: '2024-03-10'
  },
  {
    id: '3',
    projectId: '2',
    projectTitle: 'Murales Comunitarios',
    userId: '1',
    userName: 'Juan Pérez',
    amount: 250,
    date: '2024-03-12',
    message: 'El arte transforma comunidades.'
  },
  {
    id: '4',
    projectId: '5',
    projectTitle: 'Parque Solar Comunitario',
    userId: '2',
    userName: 'María García',
    amount: 2000,
    date: '2024-03-08',
    message: 'Apoyo total a la energía renovable.'
  },
  {
    id: '5',
    projectId: '3',
    projectTitle: 'Centro de Rehabilitación Rural',
    userId: '1',
    userName: 'Juan Pérez',
    amount: 1500,
    date: '2024-03-05'
  }
];

let currentUser = null;

function setCurrentUser(user) {
  currentUser = user;
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
}

function getCurrentUser() {
  if (!currentUser) {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      currentUser = JSON.parse(stored);
    }
  }
  return currentUser;
}

function logout() {
  setCurrentUser(null);
  window.location.href = 'index.html';
}
