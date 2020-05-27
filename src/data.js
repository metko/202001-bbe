let sections = [
   {name : 'accueil'},
   {name : 'services'},
   {name : 'entreprise'},
   {name : 'materiels'},
   {name : 'contact'}
];

let services = [
   {
      tab_name: 'élagage',
      title: "Nous réalisons <span class='text-orange-100 italic'>l'élagage</span> de vos arbre",
      content: "<p>L'élagage consiste à la taille d’un arbre pour adapter ses branches à la présence de l’activité humaine dans son environnement immédiat. Exemple : présence d'une maison, d'une route, de panneaux solaires, de fils électriques, etc. Le but final est de le faire dans les règles de l’art pour conserver une forme générale harmonieuse dans le respect de sa physiologie, et bien sûr en toute maitrise et sécurité.</p><p> N’est pas élagueur qui ne respecte pas ces principes.</p><p>Très technique et très réglementé car très dangereux, l'élagage est un métier demandant beaucoup  de matériel, d'expérience et de rigueur ; c'est un métier de spécialiste qui ne se pratique pas à la légère. Etant une activité de spécialiste:<span class='font-bold'> LES ARBRES SONT NOTRE UNIQUE MÉTIER.</p>Nous ne pratiquons donc pas toutes les autres activités du paysage. Dans ce site nous vous présenterons, entre autre, notre matériels spécifique et quelques un de nos chantiers.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/elagage_1.jpg"),
            title: "Elagage 1",
            legend: "Avant/après d’une taille de Sang Dragon devant une magnifique case créole.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_2.jpg"),
            title: "Elagage 2",
            legend: "À deux sur un Araucaria; il faut se faire mutuellement confiance et beaucoup communiquer.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_3.jpg"),
            title: "Elagage 3",
            legend: "Élagage de cocotier à Trou D’Eau, là où des années plus tard s’installera La Bodega.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_4.jpg"),
            title: "Elagage 4",
            legend: "Elagage d’un Terminalia Mentali de l’institut Robert Debré à Saint-Gilles les Hauts.",
            alt: "alt attr"
         }
      ]
   },
   {
      tab_name: "Abattage",
      title: "Abattage et démontage</br><span class='text-orange-100'>en toute sécurité",
      content: "<p>Parfois hélas, la présence humaine oblige à l'<span class='font-bold'>abattage de l'arbre.</span></br>Exemple : cocotier planté trop près d'une arbre devenu trop grand avec le temps, nouvelle construction en attente, présence de réseau aérien, etc.</br>Nous pratiquons cette <span class='font-bold'>intervention en toute sécurité</span> pour les habitations, les intervenants et les personnes alentours.</p><p>Si l’environnement immédiat du chantier ne permet pas un abattage simple, nous maitrisons toute une panoplie de techniques appelées <span class='font-bold'>démontage</span>, où l’on découpe l’arbre bout par bout en partant du haut et en en dirigeant les chutes. On peut si nécessaire retenir les branches avec une corde : c’est le démontage avec rétention.</p><p><span class='font-bold'>Depuis 1994, nous n’avons eu aucun incident ou accident pendant ces opérations.</span></p><p>Malheureusement, il vaut mieux procéder à l’abattage d’un sujet qui est dangereux pour son environnement que réaliser sur celui-ci une taille trop radicale, car l’agression que cela représente pour l’arbre est égale à un abattage et lors de sa repousse(s’il repousse), il présentera un danger accru pour son environnement.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/abattage_1.jpg"),
            title: "Abattage 1",
            legend: "Démontage d’un Tamarin peï (Tamarindus Indica), débité en rondin et parfaitement contrôlés par le grimpeur.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/abattage_2.jpg"),
            title: "Abattage 2",
            legend: "Présence d’une ligne haute tension : le quartier n’ayant plus de courant à chaque coup de vent, nous sommes dans l’obligation de procéder à l’abattage de ce beau dattier avec notre partenaire EDF.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/abattage_3.jpg"),
            title: "Abattage 3",
            legend: "Nous pratiquons la technique de la rétention. La branche ou le tronc coupé est retenu par une corde, que le binôme au sol laisse glisser pour un atterrissage en douceur. ",
            alt: "alt attr"
         },
      ]
   },
   {
      tab_name: 'Recyclage',
      title: 'Évacuation et recyclage</br><span class="text-orange-100">des végétaux</span>',
      content: "<p>Nous proposons l'<span class='font-bold'>évacuation et le nettoyage de tous nos chantiers</span>.</br>En effet, notre activité produit des restes végétaux volumineux qui peuvent être difficile à évacuer et éliminer pour les particuliers. Le volume produit dépasse de beaucoup la quantité de dépôt autorisée par foyer (2m3 par collecte), à déposer sur la voie publique obligatoirement la veille de la date de passage du camion de ramassage.</p><p>Longtemps appelées « <span class='font-bold'>déchets verts</span> », feuilles et branches sont réduits en copeaux par le broyeur. C'est désormais une <span class='font-bold'>ressource valorisée dans le milieu agricole</span> pour protéger et enrichir les sols, garder l'humidité, etc.</br>Quant au tronc, il est débité pour en faire du <span class='font-bold'>bois de chauffage</span> ou de cuisine.</p><p>Pour réduire le coût de l’intervention, nous pouvons ne pas effectuer l’évacuation (pouvant parfois représenter jusqu’à 50% du devis), mais les branches et troncs sont alors laissés débités et entassés au pied de l’arbre.</p><p><span class='text-sm italic'>Les professionnels étant légalement responsables des déchets de leur activité, nous nous refusons au dépôt dit « sauvage ». Outre l’incivilité qu’elles représentent, ces pratiques peuvent être sanctionnée par une amende et devenir un délit en cas de récidive.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/recyclage_1.jpg"),
            title: "Recyclage 1",
            legend: "Gros plan sur le tas de broyat.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/recyclage_2.jpg"),
            title: "Recyclage 2",
            legend: "Notre terrain de stockage au milieu des champs, suite à une convention avec un agriculteur local et dans le respect des normes en vigueur.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/recyclage_3.jpg"),
            title: "Recyclage 3",
            legend: "Le broyeur en action. Ici, le broyat sera laissé à disposition du client. ",
            alt: "alt attr"
         },
      ]
   }
]

let materiels = [
   {
      // LE CONTENU DE LA SECTION GRIMPE
     tab_name: 'De grimpe',
     title: "Notre matériel de grimpe,</br> <span class='text-orange-100'>controlé  chaque année</span>",
     content: "<p><span class='font-bold'>Les EPI (Équipements Individuels de Sécurité) sont tout ce qui nous permet de grimper en sécurité</span> dans un arbre (harnais, cordes, connecteurs, griffes, etc.) et qui nous protègent (pantalons et chaussures anti-coupures, casques, etc.).</p><p>Car nous cumulons trois risques graves dans notre métier :<ul><li>- Les chutes de hauteur</li><li>- Les coupures</li><li>- Les risques TMS (Troubles Musculo Squelettiques)</li></ul><p><span class='font-bold'>Tout ce matériel est normé, annuellement inspecté par un vérificateur certifié extérieur à l'entreprise, et régulièrement renouvelé</span>.</p><p>Total pour un grimpeur : plus de 5 000€.  Et nous sommes 5 !</p>",
     images: [
        // LES IMAGES DE LA SECTION GRIMPE
        {
           img_url : require("@/assets/images/materiels/grimpe_1.jpg"),
           title: "Grimpe 1",
           legend: "Ce qui se trouve dans la caisse de chaque grimpeur.",
           alt: "alt attr"
        },
        {
           img_url : require("@/assets/images/materiels/grimpe_2.jpg"),
           title: "Grimpe 2",
           legend: "L’équipement en cours d’utilisation.",
           alt: "alt attr"
        }
     ]
  },
   {
      tab_name: "De Coupe",
      title: 'Tronçonneuses d’élagage</br> <span class="text-orange-100">et d’abattage</span>',
      content: "<p>Nous travaillons avec des tronçonneuses <span class='font-bold'>STHILL</span> et <span class='font-bold'>HUSQVARNA</span>. Pour l’instant elles sont toutes thermiques (c’est à dire à moteur). Mais dans un avenir proche, les tronçonneuses électrique seront réellement au point, tant en matière d’autonomie que de fonctionnement et de robustesse. Et ce sera avec plaisir que nous pourrons enfin travailler dans le silence et sans un pot d’échappement collé sous notre nez en permanence.</p>",
      images: [
         {
            img_url : require("@/assets/images/materiels/coupe_1.jpg"),
            title: "Coupe 1",
            legend: "Difficile de faire de l’art avec des tronçonneuses…le calendrier Sthill s’y essaye avec plus de réussite.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/coupe_2.jpg"),
            title: "Coupe 2",
            legend: "Les tronçonneuses d’élagage, manipulable à une main avec leur prise « fer à repasser » ; notre outil principal.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/coupe_3.jpg"),
            title: "Coupe 3",
            legend: "Les tronçonneuses d’abattage(dont la  3120, 119 cm 3 !)",
            alt: "alt attr"
         },
      ]
   },
   {
      //  SECTION ENGIN 
      tab_name: "Roulant",
      title: 'Une flotte <span class="text-orange-100">de véhicule</span> ',
      content: "<p>Pour un service efficace et réactif, notre flotte se compose de plusieurs éléments :<ul><li>- Une fourgonnette Peugeot Expert pour le transport et pour l'établissement des devis.</li><li>- Des camions 3.5T Iveco pour le transport des rémanents (troncs, branches, broyat)</li><li>- Des pickups Hilux pour le transport du personnel, de leur matériel et du broyeur.</li><li>- Une nacelle Iveco pour soulager les grimpeurs et réaliser certains chantiers spécifiques.</li></ul></p><p>Nous pouvons ainsi intervenir dans les lieux les plus reculés, <span class='font-bold'>notamment pour rétablir rapidement le courant après les cyclones</span> (chantiers avenotre partenaire EDF depuis 2006).</p>",
      images: [
         // LES IMAGES DE LA SECTION ENGEIN
         {
            img_url : require("@/assets/images/materiels/engein_1.jpg"),
            title: "Engein 1",
            legend: "Les pick-up et la nacelle devant le site historique de l’usine Vue Belle.",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/engein_2.jpg"),
            title: "Engein 2",
            legend: "Notre broyeur de la marque Bandit. Sûr, robuste et très efficace quoiqu'un peu lourd; de l'américain pur jus !",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/engein_3.jpg"),
            title: "Engein 3",
            legend: "Un de nos Iveco pour le transport des rémanents.",
            alt: "alt attr"
         },
      ]
   },
]

export default {sections, services, materiels}