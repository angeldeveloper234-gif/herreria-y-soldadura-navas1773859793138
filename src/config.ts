// Interfaces defined here to ensure zero-dependency errors in this file replacement
// Re-defining interfaces here to ensure zero-dependency errors in this file replacement
export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    landingClientId: string;
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Herreria y Soldadura Nava's",
        slogan: "Protegemos lo que más quieres",
        logo: "NAVA'S",
        trade: "Herrería y Soldadura",
    },

    landingClientId: "b5ef0556-1cbb-4608-a88b-0d38f9fd933f",

    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    bookingUrl: "#contact",
    paymentLink: "https://buy.stripe.com/",
    googleMapsReviewUrl: "",

    dynamicContent: {
        city: "Tijuana",
        localAnchor: "Jardines del Rubi",
        stats: {
            projectsDone: 1200,
            experienceYears: 25,
            happyClients: 950
        },
        specialization: {
            title: "Soldadura",
            pain: "Estructuras Inseguras",
            ego: "Expertos en Acero",
            hook: "HERRERÍA Y SOLDADURA NAVA'S"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico",
                desc: "Visitamos tu domicilio en Tijuana para evaluar el espacio y entender tus necesidades de seguridad y diseño."
            },
            {
                step: "02",
                title: "Estrategia",
                desc: "Diseñamos la estructura ideal (reja, portón o techo) seleccionando los materiales más resistentes y económicos."
            },
            {
                step: "03",
                title: "Resolución",
                desc: "Fabricamos e instalamos con soldadura de alta penetración. Entregamos pintado, limpio y funcionando."
            }
        ],
        pricing: {
            basic: "Reparaciones desde $800 MXN",
            comprehensive: "Portones: Cotización a medida",
            retainer: "Estructuras industriales: Consultar"
        }
    },

    services: [
        {
            id: "01",
            icon: "🛡️",
            title: "Rejas y Portones",
            problem: "¿Te sientes inseguro en tu propia casa?",
            agitation: "La delincuencia no avisa. Una entrada vulnerable es una invitación abierta a perder tu patrimonio.",
            solve: "Instalamos rejas de acero sólido y portones automatizados imposibles de vulnerar.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "🏗️",
            title: "Estructuras Metálicas",
            problem: "¿Necesitas techar tu patio o cochera?",
            agitation: "El sol y la lluvia dañan tus vehículos y limitan el uso de tus espacios exteriores.",
            solve: "Fabricación de techumbres, pérgolas y estructuras ligeras duraderas.",
            price: "pricing.comprehensive"
        },
        {
            id: "03",
            icon: "🔥",
            title: "Soldadura General",
            problem: "¿Piezas rotas o bisagras vencidas?",
            agitation: "Ignorar una rotura pequeña puede causar el colapso total de una estructura pesada.",
            solve: "Reparación urgente con soldadura de arco y microalambre.",
            price: "pricing.basic"
        }
    ],

    testimonials: [
        {
            name: "Ing. Marco Antonio",
            role: "Contratista",
            text: "Nava's es mi proveedor de confianza para toda la herrería de mis obras. La calidad de la soldadura es impecable.",
            tags: ["Calidad", "Resistencia"]
        },
        {
            name: "Sra. Guadalupe R.",
            role: "Residente en Jardines del Rubi",
            text: "Me instalaron el portón eléctrico y unas protecciones para las ventanas. Muy limpios para trabajar y cumplidos con el tiempo.",
            tags: ["Seguridad", "Confianza"]
        },
        {
            name: "Taller Mecánico X",
            role: "Cliente Comercial",
            text: "Nos fabricaron una rampa y mesas de trabajo a medida. Acero de buen calibre, nada de materiales delgados.",
            tags: ["Uso Rudo", "Durabilidad"]
        }
    ],

    demoUser: {
        name: "Nava's Admin",
        email: "contacto@navas.com",
        whatsapp: "+526648527585"
    },

    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: false,
        showStats: true
    },

    gallery: [
        {
            title: "Portón Moderno",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Estructura Industrial",
            category: "Techumbres",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Protecciones Ventana",
            category: "Seguridad",
            image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Escalera Caracol",
            category: "Diseño",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
        }
    ],

    products: []
};
