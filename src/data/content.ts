// Contenu central du site — modifie ces données pour mettre le portfolio à jour
// sans toucher aux composants.

export const contact = {
  name: "Lucien Buzera",
  role: "Spécialiste Suivi, Évaluation & Apprentissage (SEA) · Data",
  phone: "+243998108086",
  phoneDisplay: "+243 998 108 086",
  email: "lucienbzr@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucien-buzera-msc-2839b374/",
  github: "https://github.com/lucienbzr-debug",
  location: "Beni, Nord-Kivu, RDC",
  availability: "Disponible à distance · Réponse sous 24h",
  cvPath: "/cv-lucien-buzera.pdf",
};

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "Depuis plus de 10 ans, je conçois et pilote des systèmes de Suivi, Évaluation et Apprentissage (SEA) pour des programmes multi-pays et multi-bailleurs en contexte fragile — République Démocratique du Congo, Burundi, Tanzanie. Mon rôle : transformer des cadres logiques et des théories du changement en indicateurs fiables que les équipes terrain, les partenaires et les bailleurs peuvent réellement utiliser pour décider.",
  "J'ai construit ces systèmes aux côtés d'institutions publiques, de coopératives agricoles et de bailleurs multilatéraux — Banque mondiale, Union européenne, USAID, Banque africaine de développement, Affaires mondiales Canada — en intégrant systématiquement les dimensions de gouvernance, genre, inclusion sociale et durabilité environnementale.",
  "Je complète aujourd'hui ce socle terrain par des compétences techniques en analyse de données (SQL, Python, R, Power BI), pour occuper des postes hybrides S&E-Data à distance : la même rigueur méthodologique, appliquée avec des outils qui accélèrent la décision.",
];

export const heroStats = [
  { value: "10+", label: "ans d'expérience S&E" },
  { value: "36 700+", label: "ménages couverts" },
  { value: "4", label: "pays d'intervention" },
];

export const partners = [
  "Banque mondiale",
  "USAID",
  "Union européenne",
  "Banque africaine de développement",
  "Affaires mondiales Canada",
];

export const stats = [
  { value: "10+", unit: "ans", label: "d'expérience en Suivi-Évaluation" },
  { value: "36 700+", unit: "", label: "ménages couverts par les systèmes S&E conçus" },
  { value: "6+", unit: "", label: "systèmes de S&E harmonisés, multi-bailleurs" },
  { value: "4", unit: "pays", label: "d'intervention (RDC, Burundi, Tanzanie)" },
  { value: "300+", unit: "", label: "agents et volontaires formés" },
  { value: "16", unit: "", label: "partenaires coordonnés" },
];

export const skillBlocks = [
  {
    title: "Suivi, Évaluation & GAR",
    description:
      "Cadres logiques, théories du changement, indicateurs SMART, harmonisation multi-bailleurs, redevabilité, capitalisation.",
    items: [
      "Cadres logiques",
      "Théories du changement",
      "Indicateurs SMART",
      "Harmonisation multi-bailleurs",
      "Redevabilité",
      "Capitalisation",
    ],
  },
  {
    title: "Collecte & gestion de données terrain",
    description:
      "Déploiement d'outils mobiles, coordination de collectes systématiques et renforcement des capacités des équipes de terrain.",
    items: ["Kobo Toolbox", "ONA", "ODK", "Coordination de collectes", "Formation d'équipes"],
  },
  {
    title: "Analyse & visualisation de données",
    description:
      "Du nettoyage de données à la restitution : requêtes, statistiques et tableaux de bord actionnables pour la décision.",
    items: ["SQL", "Python", "R", "Power BI", "STATA", "SPSS", "Excel avancé", "ArcGIS"],
  },
  {
    title: "Partenariats & reporting",
    description:
      "Rapports bailleurs, gestion de partenariats institutionnels et coordination multi-acteurs en contexte multiculturel.",
    items: ["Rapports bailleurs", "Partenariats institutionnels", "Français natif", "Anglais intermédiaire", "Swahili courant"],
  },
];

export type Project = {
  id: string;
  tag: string;
  title: string;
  context: string;
  tools: string[];
  description: string;
  result: string;
  liveUrl?: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "datalendo",
    tag: "SQL",
    title: "Analyse RH — DataLendo",
    context: "Analyse SQL complète des effectifs d'une entreprise de 1 500 employés répartis en 10 départements.",
    tools: ["SQL", "PostgreSQL", "Window Functions"],
    description:
      "15 requêtes business sur le turnover, la performance et les salaires, avec fonctions de fenêtrage (NTILE, RANK) et segmentation par tertiles de performance.",
    result: "15 requêtes business livrées sur 1 500 employés",
    repoUrl: "https://github.com/lucienbzr-debug/DataLendo-RH-SQL",
  },
  {
    id: "afrimarket",
    tag: "Python",
    title: "Dashboard e-commerce — AfriMarket",
    context: "Analyse stratégique de 10 100 commandes e-commerce dans 8 villes d'Afrique francophone sur 6 mois.",
    tools: ["Python", "Pandas", "Streamlit"],
    description:
      "Nettoyage de données, calcul de KPIs (chiffre d'affaires, panier moyen, taux de retour) et dashboard Streamlit interactif à 5 onglets, avec livrables direction générés automatiquement (PDF, PowerPoint, Word).",
    result: "2,51 M$ de CA analysé sur 10 100 commandes",
    liveUrl: "https://afrimarketprojet01-w9qub78xuzvsht3pkrkya3.streamlit.app/",
    repoUrl: "https://github.com/lucienbzr-debug/AfriMarket_Ecommerce_Python",
  },
  {
    id: "sante-cameroun",
    tag: "R",
    title: "Dashboard santé publique — Cameroun",
    context: "Pipeline R sur un jeu de données volontairement sale : 10 300 consultations dans 150 centres de santé.",
    tools: ["R", "Shiny", "tidyverse"],
    description:
      "Nettoyage complet des données, dashboard Shiny à 5 onglets mettant en évidence des ruptures de médicaments inégales et une couverture d'assurance faible entre centres.",
    result: "Jusqu'à 32,8% de ruptures de médicaments révélées",
    liveUrl: "https://connect.posit.cloud/lucienbzr/content/01a07ff4-7289-2c37-f035-117be4e45cb6",
    repoUrl: "https://github.com/lucienbzr-debug/Sante_Publique_Cameroun-R",
  },
  {
    id: "congotop",
    tag: "Excel",
    title: "Analyse retail — CongoTop Fashion",
    context: "Analyse retail complète menée en 7 phases, du nettoyage jusqu'au dashboard de direction.",
    tools: ["Excel avancé", "Tableaux croisés dynamiques", "Power Query"],
    description:
      "Nettoyage, modélisation, analyse descriptive, client, opérationnelle et avancée — une chaîne d'analyse complète livrée sous forme de dashboard de direction.",
    result: "7 phases d'analyse jusqu'au dashboard de direction",
    repoUrl: "https://github.com/lucienbzr-debug/CongoTopFashion-Excel",
  },
  {
    id: "srp",
    tag: "Python",
    title: "Dashboard SRP — Tanganyika & Sud-Kivu",
    context: "Application Streamlit multi-pages d'analyse des données SRP (Sustainable Rice Platform).",
    tools: ["Python", "Streamlit", "Plotly"],
    description:
      "Performance des exploitants (revenu, productivité, eau, pesticides, genre), conformité au référentiel SRP et suivi de tendance 2020 → 2023 → 2024. Données anonymisées avant publication.",
    result: "Tendance suivie sur 3 campagnes agricoles",
    liveUrl: "https://srp-dashboard-c.streamlit.app/",
    repoUrl: "https://github.com/lucienbzr-debug/SRP-dashboard",
  },
  {
    id: "agriespoir",
    tag: "Power BI",
    title: "Dashboard AgriEspoir — RDC",
    context: "Suivi de la performance d'un programme agricole en République Démocratique du Congo.",
    tools: ["Power BI", "DAX", "Power Query"],
    description:
      "Pilotage de la sécurité alimentaire des ménages, de la performance des centres et de la chaîne d'approvisionnement, sur une couverture passée de 470 k$ en 2021 à 1,42 M$ en 2025.",
    result: "Couverture passée de 470 k$ à 1,42 M$ (2021 → 2025)",
    liveUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNWQ4Yzg2NzctMDg0Yy00N2NkLTkzMjAtNTIyYjU3YWIzODM1IiwidCI6ImRlM2ZkYjcwLWI0ZWEtNDdkOS1hM2M3LWI5NGEyMTM3M2RjMiIsImMiOjh9",
    repoUrl: "https://github.com/lucienbzr-debug/AgriEspoir",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  type: "experience" | "education";
};

export const timeline: TimelineItem[] = [
  {
    period: "Janvier 2024 – présent",
    title: "Chargé de Suivi, Évaluation et Apprentissage",
    org: "Programme multi-pays, Rikolto International (RDC, Burundi, Tanzanie)",
    type: "experience",
  },
  {
    period: "2024",
    title: "MSc Environnement — spécialisation S&E de la Gestion Durable des Sols",
    org: "Université Évangélique en Afrique (UEA), RDC",
    type: "education",
  },
  {
    period: "Janvier 2022 – Décembre 2023",
    title: "Chargé de Suivi, Évaluation et Apprentissage",
    org: "Rikolto International",
    type: "experience",
  },
  {
    period: "Juin 2019 – Janvier 2022",
    title: "Agronome de terrain — Chargé de S&E des coopératives",
    org: "Rikolto International (Fizi, Sud-Kivu)",
    type: "experience",
  },
  {
    period: "2013 – 2019",
    title: "Chargé de Programme S&E",
    org: "ARPS, AID, VACNET-RDC",
    type: "experience",
  },
  {
    period: "2010",
    title: "Ingénieur Agronome (Bac+5)",
    org: "Université Évangélique en Afrique (UEA), RDC",
    type: "education",
  },
];
