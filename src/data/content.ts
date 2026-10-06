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
  "Depuis 2011, je travaille sur le terrain auprès des communautés rurales, des coopératives agricoles et des institutions publiques — 15 ans en République Démocratique du Congo, au Burundi, au Rwanda et en Tanzanie. Depuis plus de 10 ans, je conçois et pilote des systèmes de Suivi, Évaluation et Apprentissage (SEA) et je gère des projets multi-pays et multi-bailleurs en contexte fragile. Mon rôle : transformer des cadres logiques et des théories du changement en indicateurs fiables que les équipes terrain, les partenaires et les bailleurs peuvent réellement utiliser pour décider.",
  "J'ai construit ces systèmes aux côtés de bailleurs multilatéraux et de partenaires internationaux — Banque mondiale, Union européenne, USAID, Banque africaine de développement, Affaires mondiales Canada, Fonds Social de la RDC, Oxfam Novib, IFDC — en intégrant systématiquement la gouvernance, le genre, l'inclusion sociale et les sauvegardes environnementales et sociales (EIES, PGES, mécanismes de gestion des plaintes).",
  "Je complète aujourd'hui ce socle terrain par des compétences techniques en analyse de données (SQL, Python, R, Power BI, STATA), pour occuper des postes hybrides S&E-Data, à distance ou sur le terrain : la même rigueur méthodologique, appliquée avec des outils qui accélèrent la décision.",
];

export const heroStats = [
  { value: "15+", label: "ans de terrain" },
  { value: "307 070+", label: "ménages couverts" },
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
  { value: "15+", unit: "ans", label: "de terrain auprès des communautés et des coopératives" },
  { value: "10+", unit: "ans", label: "en Suivi-Évaluation, gestion de projets et analyse de données" },
  { value: "307 070+", unit: "", label: "ménages couverts par les systèmes S&E conçus" },
  { value: "4", unit: "pays", label: "d'intervention (RDC, Burundi, Rwanda, Tanzanie)" },
  { value: "6+", unit: "", label: "systèmes de S&E harmonisés, multi-bailleurs" },
  { value: "950+", unit: "ha", label: "aménagés ou reboisés avec plan de gestion environnementale et sociale" },
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
    title: "Sauvegardes environnementales & sociales",
    description:
      "Études d'impact, plans de gestion environnementale et sociale et dispositifs de redevabilité envers les communautés, selon les standards des bailleurs.",
    items: ["EIES", "PGES", "Gestion des plaintes", "Genre & VIH", "Plans de sécurité", "Normes Banque mondiale"],
  },
  {
    title: "Gestion de projets & partenariats",
    description:
      "Conception et planification de projets d'urgence et de développement, coordination multi-acteurs et reporting bailleurs en contexte multiculturel.",
    items: ["Cycle de projet", "Planification", "TDR", "Rapports bailleurs", "Coordination de partenaires", "Renforcement de capacités", "Français natif", "Swahili courant", "Anglais intermédiaire"],
  },
  {
    title: "Agronomie & développement rural",
    description:
      "Ingénieur agronome : accompagnement des producteurs et structuration des coopératives sur les filières riz, café et cacao.",
    items: ["Bonnes pratiques agricoles", "Champs-écoles paysans", "Chaînes de valeur", "Coopératives", "Gestion durable des sols"],
  },
];

export type Project = {
  id: string;
  category: "terrain" | "data";
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
    id: "rikolto-cafe-cacao",
    category: "terrain",
    tag: "Power BI",
    title: "Café & Cacao — Rikolto RDC (2019-2025)",
    context: "Diagnostic de la base café consolidée (42 433 lignes, 4 coopératives) et de l'enquête revenu vital cacao (88 ménages) pour la direction de Rikolto RDC.",
    tools: ["Power BI", "DAX", "Python", "R Shiny", "Excel"],
    description:
      "Registre de 23 contrôles qualité pour le PV de validation, écart au revenu vital Anker ajusté à la taille des ménages, dashboards Power BI, Shiny, Excel et HTML, rapport de direction et deck générés par script. Données pseudonymisées avant publication.",
    result: "40 % des ménages cacao au revenu vital ajusté, contre 59 % au seuil de référence",
    liveUrl: "https://lucienbzr-debug.github.io/rikolto-cafe-cacao-2019-2025/",
    repoUrl: "https://github.com/lucienbzr-debug/rikolto-cafe-cacao-2019-2025",
  },
  {
    id: "aid-i",
    category: "terrain",
    tag: "STATA",
    title: "Ménages atteints — AID-I (Sud-Kivu)",
    context: "Consolidation des données de suivi du projet AID-I (Feed the Future / USAID), composante Rikolto au Sud-Kivu, RDC.",
    tools: ["STATA", "Python", "Pandas"],
    description:
      "Empilement et déduplication de 3 extractions terrain sur identifiant unique, pipeline STATA reproductible (.do), tableau de bord interactif et rapport de direction avec indicateurs d'équité genre/territoire/partenaire et d'effet de levier pour l'argumentaire bailleurs.",
    result: "261 765 ménages recoupés à 99,9996 % du chiffre officiel de clôture",
    liveUrl: "https://lucienbzr-debug.github.io/aid-i-menages-atteints/",
    repoUrl: "https://github.com/lucienbzr-debug/aid-i-menages-atteints",
  },
  {
    id: "datalendo",
    category: "data",
    tag: "SQL",
    title: "Analyse RH — DataLendo",
    context: "Analyse SQL complète des effectifs d'une entreprise de 1 500 employés répartis en 10 départements.",
    tools: ["SQL", "PostgreSQL", "Window Functions"],
    description:
      "15 requêtes business sur le turnover, la performance et les salaires, avec fonctions de fenêtrage (NTILE, RANK) et segmentation par tertiles de performance.",
    result: "15 requêtes business livrées sur 1 500 employés",
    liveUrl: "https://lucienbzr-debug.github.io/DataLendo-RH-SQL/",
    repoUrl: "https://github.com/lucienbzr-debug/DataLendo-RH-SQL",
  },
  {
    id: "afrimarket",
    category: "data",
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
    category: "data",
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
    category: "data",
    tag: "Excel",
    title: "Analyse retail — CongoTop Fashion",
    context: "Analyse retail complète menée en 7 phases, du nettoyage jusqu'au dashboard de direction.",
    tools: ["Excel avancé", "Tableaux croisés dynamiques", "Power Query"],
    description:
      "Nettoyage, modélisation, analyse descriptive, client, opérationnelle et avancée — une chaîne d'analyse complète livrée sous forme de dashboard de direction.",
    result: "7 phases d'analyse jusqu'au dashboard de direction",
    liveUrl: "https://lucienbzr-debug.github.io/CongoTopFashion-Excel/",
    repoUrl: "https://github.com/lucienbzr-debug/CongoTopFashion-Excel",
  },
  {
    id: "srp",
    category: "terrain",
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
    category: "data",
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
  place?: string;
  summary?: string;
  highlight?: string;
  type: "experience" | "education";
};

export const timeline: TimelineItem[] = [
  {
    period: "Janvier 2024 – présent",
    title: "Chargé de Suivi, Évaluation et Apprentissage — programme multi-pays",
    org: "Rikolto International",
    place: "RDC, Burundi, Rwanda, Tanzanie",
    summary:
      "Pilotage du système SEA d'un programme multi-pays : harmonisation des indicateurs entre pays et bailleurs, consolidation des données, tableaux de bord et reporting de direction.",
    highlight: "Diagnostic café & cacao : 42 433 lignes, 23 contrôles qualité, écart au revenu vital",
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
    place: "Sud-Kivu, RDC",
    summary:
      "Suivi-évaluation des programmes, dont le projet AID-I (Feed the Future / USAID) : pipeline STATA reproductible, indicateurs d'équité et d'effet de levier pour les bailleurs.",
    highlight: "261 765 ménages consolidés, à 99,9996 % du chiffre officiel",
    type: "experience",
  },
  {
    period: "Juin 2019 – Janvier 2022",
    title: "Agronome de terrain — Chargé de S&E des coopératives",
    org: "Rikolto International",
    place: "Fizi, Sud-Kivu, RDC",
    summary:
      "Bonnes pratiques agricoles par l'approche champs-écoles paysans, chaîne de valeur riz, structuration des coopératives (business plans, marketing) et appui aux partenaires du projet PICAGL (Banque mondiale).",
    type: "experience",
  },
  {
    period: "Mars 2018 – Mai 2019",
    title: "Chargé de programme et expert environnementaliste",
    org: "ARPS — Actions pour la Réhabilitation et la Promotion Sociale",
    place: "Bukavu, Uvira, Fizi, Walungu, RDC",
    summary:
      "Aménagement et reboisement du site Milima sur la Ruzizi (Banque mondiale via le Fonds Social de la RDC) : EIES, PGES, comités locaux de gestion des plaintes, outils de collecte et rapportage.",
    highlight: "450+ ha aménagés et reboisés",
    type: "experience",
  },
  {
    period: "Juin 2017 – Novembre 2018",
    title: "Chargé de programmes",
    org: "COUD — Collectif des ONG Unies pour le Développement Durable",
    place: "Sud-Kivu, Nord-Kivu, Tanganyika, RDC",
    summary:
      "Mise en œuvre terrain, TDR et rapports, renforcement des comités d'usagers des services sociaux de base, formation professionnelle et autonomisation économique des jeunes.",
    type: "experience",
  },
  {
    period: "Novembre 2016 – Février 2017",
    title: "Responsable du programme réinsertion professionnelle & sécurité alimentaire",
    org: "ATUA — Association Tujenge Umoja Afrika",
    place: "Bujumbura rural, Burundi",
    summary:
      "Coordination de la phase 1 du programme, études de base, outils de S&E et enquêtes sur les 5 piliers du programme, analyse des indicateurs pour le Kivu et le Nord-Katanga.",
    type: "experience",
  },
  {
    period: "Janvier 2015 – Octobre 2016",
    title: "Assistant chargé de programme",
    org: "ADCI — Développement Communautaire Intégré",
    place: "Uvira, Fizi, Mwenga, RDC",
    summary:
      "Programmes agricoles au service de la cohésion sociale et de la gouvernance (USAID via CARE International, Search for Common Ground) : évaluations de terrain, enquêtes de base, ateliers de paix.",
    type: "experience",
  },
  {
    period: "Juin 2013 – Décembre 2014",
    title: "Chargé de programmes et suivi environnemental",
    org: "AID — Assistance Internationale pour le Développement",
    place: "Bukavu, Uvira, Walungu, RDC",
    summary:
      "Évaluation des besoins, ciblage, conception de projets d'urgence et de relèvement, suivi-évaluation de projets multi-bailleurs (IFDC, Oxfam Novib, MCC Canada) et modules de formation.",
    type: "experience",
  },
  {
    period: "Avril 2012 – Février 2013",
    title: "Directeur de production — Chef de site",
    org: "VACNET-RDC",
    place: "Nyangezi, Walungu, RDC",
    summary:
      "Aménagement communautaire du marais de Nyamubanda (Food for the Hungry) : EIES, PGES et plan local de pérennisation.",
    highlight: "500+ ha rendus à la communauté, 17 km de rivière curés",
    type: "experience",
  },
  {
    period: "Octobre 2011 – Avril 2012",
    title: "Assistant programme environnement & sécurité alimentaire",
    org: "PLD — Pain Pour les Déshérités",
    place: "Bukavu, Walungu, Kabare, Kalehe, RDC",
    summary:
      "Conception de projets agricoles et environnementaux, outils de collecte, formation des enquêteurs, analyse des impacts et risques environnementaux.",
    type: "experience",
  },
  {
    period: "2006 – 2010",
    title: "Ingénieur Agronome (Bac+5) — sciences agronomiques et environnement",
    org: "Université Évangélique en Afrique (UEA), RDC",
    type: "education",
  },
];
