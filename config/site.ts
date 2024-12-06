export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TPC EXPRESS - Mensajería Guatemala",
  description: "La mejor Mensajería de Guatemala para enviar tus paquetes",
  navItems: [
    {
      label: "Nosotros",
      href: "/about",
    },
    {
      label: "Cotiza",
      href: "/quote",
    },
    {
      label: "Contacto",
      href: "/contact",
    }
  ],
  navMenuItems: [
    {
      label: "Nosotros",
      href: "/about",
    },
  ],
  links: {
    instagram: "https://github.com/nextui-org/nextui",
    facebook: "https://twitter.com/getnextui",
    whatssapp: "https://wa.me/50238997113/?text=Como%20podemos%20ayudarte%20hoy%20?",
  },
  companyInfo:
  {
    address: "2 calle A 42-62 zona 3 de Mixco",
    phone: "2298-1217",
    email: "info@tpcexpress.com",
  },

  interestArea: [
    {
      label: "Empresarial"
    },
    {
      label: "E-commerce"
    },
    {
      label: "Información"
    },
    {
      label: "Emprendedor"
    }
  ]

};
