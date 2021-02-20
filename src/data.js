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
      title: "Nous réalisons <span class='text-orange-100 italic'>l'élagage</span> de vos arbres à la Réunion.",
      content: "<p>L'élagage est notre passion et nous en avons fait <span class='font-bold'> notre unique métier</span> depuis 1994.</p><p>Chez Bourbon Élagage, nous maîtrisons les spécificités liées à l'<span class='font-bold'>élagage des arbres à la Réunion</span> où le climat tropical, la pousse rapide et les saisons cycloniques nécessitent l'apport régulier de <span class='font-bold'>soins aux arbres</span>.<p>Grâce à notre expérience du terrain, nous savons exactement quand et comment tailler les arbres pour <span class='font-bold'>les accompagner dans leur croissance</span>.<p>Nos équipes d'élagueurs grimpeurs s'appuient sur leurs <span class='font-bold'>savoir-faire</span>, leurs <span class='font-bold'>connaissances pointues</span> des arbres et leur rigueur pour exécuter <span class='font-bold'>en toute sécurité</span> des opérations de coupe de branches, troncs et houppiers.</p><p>Engagés dans une logique écoresponsable, nous pratiquons une <span class='font-bold'>taille douce et raisonnée</span>, 100% respectueuse de <span class='font-bold'>la physiologie de l'arbre</span> et de son développement naturel. C'est pourquoi nous ne réalisons jamais de tailles sévères ou inappropriées qui pourraient nuire à la santé de l'arbre. Pour nous, l'élagage doit se pratiquer <span class='font-bold'>dans les règles de l’art</span> et prendre soin des arbres comme de nos équipes est primordial.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/elagage_1.jpg"),
            title: "Avant/après d’une taille de Sang Dragon devant une magnifique case créole.",
            legend: "Avant/après d’une taille de Sang Dragon devant une magnifique case créole.",
            alt: "Photo avant/après d’une taille de Sang Dragon devant une magnifique case créole."
         },
         {
            img_url : require("@/assets/images/services/elagage_2.jpg"),
            title: "À deux sur un Araucaria; il faut se faire mutuellement confiance et beaucoup communiquer.",
            legend: "À deux sur un Araucaria; il faut se faire mutuellement confiance et beaucoup communiquer.",
            alt: "Photo à deux sur un Araucaria; il faut se faire mutuellement confiance et beaucoup communiquer."
         },
         {
            img_url : require("@/assets/images/services/elagage_3.jpg"),
            title: "Élagage de cocotier à Trou D’Eau, là où des années plus tard s’installera La Bodega.",
            legend: "Élagage de cocotier à Trou D’Eau, là où des années plus tard s’installera La Bodega.",
            alt: "Photo d'élagage de cocotier à Trou D’Eau, là où des années plus tard s’installera La Bodega."
         },
         {
            img_url : require("@/assets/images/services/elagage_4.jpg"),
            title: "Elagage d’un Terminalia Mentali de l’institut Robert Debré à Saint-Gilles les Hauts.",
            legend: "Elagage d’un Terminalia Mentali de l’institut Robert Debré à Saint-Gilles les Hauts.",
            alt: "Photo d'élagage d’un Terminalia Mentali de l’institut Robert Debré à Saint-Gilles les Hauts."
         }
      ]
   },
   {
      tab_name: "Abattage",
      title: "Abattage et démontage d'arbres</br><span class='text-orange-100'>en toute sécurité",
      content: "<p>Lorsqu'un arbre est en <span class='font-bold'>mauvaise santé</span>, qu'il présente un <span class='font-bold'>risque de rupture</span> et qu'il devient <span class='font-bold'>dangereux</span> pour l'homme et les infrastructures, il est parfois nécessaire de procéder à son <span class='font-bold'>abattage</span>.</p><p>Abattre un arbre n'est jamais un plaisir. Si l'abattage est sélectionné plutôt que la taille, c'est parce qu'une coupe radicale a des effets néfastes. En plus d'infliger un stress important au végétal, l'étêtage ou la taille sévère engendrent de fortes probabilités pour que l'arbre, s'il repousse, représente un danger sanitaire ou sécuritaire accru pour son environnement.</p><p>Lorsqu'un <span class='font-bold'>abattage simple</span> n'est pas possible, nos équipes procèdent à un <span class='font-bold'>abattage par démontage</span> qui consiste à débiter l'arbre morceau par morceau, en partant de sa cime. Nous pratiquons aussi la <span class='font-bold'>technique de la rétention</span> en accompagnant jusqu'au sol les branches ou troncs coupés, à l'aide de cordes.</p><p>L'abattage et le démontage étant des opérations dangereuses, nous prenons soin de <span class='font-bold'>sécuriser</span> les lieux afin de <span class='font-bold'>protéger</span> les constructions, nos équipes et les personnes alentour.</p><p>Bourbon Élagage est fière de ne compter aucun <span class='font-bold'>accident ou incident depuis 1994</span>.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/abattage_1.jpg"),
            title: "Démontage d’un Tamarin peï (Tamarindus Indica), débité en rondins et parfaitement contrôlés par le grimpeur.",
            legend: "Démontage d’un Tamarin peï (Tamarindus Indica), débité en rondins et parfaitement contrôlés par le grimpeur.",
            alt: "Photo de démontage d’un Tamarin peï (Tamarindus Indica), débité en rondins et parfaitement contrôlés par le grimpeur."
         },
         {
            img_url : require("@/assets/images/services/abattage_2.jpg"),
            title: "Présence d’une ligne haute tension : le quartier n’ayant plus de courant à chaque coup de vent, nous sommes dans l’obligation de procéder à l’abattage de ce beau dattier avec notre partenaire EDF",
            legend: "Présence d’une ligne haute tension : le quartier n’ayant plus de courant à chaque coup de vent, nous sommes dans l’obligation de procéder à l’abattage de ce beau dattier avec notre partenaire EDF.",
            alt: "Photo de la présence d’une ligne haute tension : le quartier n’ayant plus de courant à chaque coup de vent, nous sommes dans l’obligation de procéder à l’abattage de ce beau dattier avec notre partenaire EDF"
         },
         {
            img_url : require("@/assets/images/services/abattage_3.jpg"),
            title: "Nous pratiquons la technique de la rétention. La branche ou le tronc coupé est retenu par une corde, que le binôme au sol laisse glisser pour un atterrissage en douceur.",
            legend: "Nous pratiquons la technique de la rétention. La branche ou le tronc coupé est retenu par une corde, que le binôme au sol laisse glisser pour un atterrissage en douceur.",
            alt: "Photo de nous pratiquant la technique de la rétention. La branche ou le tronc coupé est retenu par une corde, que le binôme au sol laisse glisser pour un atterrissage en douceur."
         },
      ]
   },
   {
      tab_name: 'Recyclage',
      title: 'Évacuation et valorisation</br><span class="text-orange-100">des déchets végétaux</span>',
      content: "<p>Les soins aux arbres, leur entretien, leur taille, leur coupe ou leur abattage génèrent des résidus végétaux volumineux, souvent supérieurs aux 2m3 autorisés par les collectes des camions de ramassage à la Réunion. Sauf demande contraire du client, nous procédons à l'<span class='font-bold'>évacuation et au nettoyage des déchets végétaux de tous nos chantiers d'élagage</span>.</p><p>Longtemps considérés comme des déchets encombrants, ces résidus sont désormais <span class='font-bold'>recyclés et valorisés</span>.</p><p>Après avoir été transformées en copeaux par notre broyeur de végétaux, <span class='font-bold'>feuilles et branches</span> élaguées deviennent une <span class='font-bold'>ressource pour le milieu agricole</span> qui les utilise pour protéger et enrichir les sols. Les <span class='font-bold'>troncs</span> débités peuvent quant à eux être recyclés en <span class='font-bold'>bois d'ébénisterie</span> ou en <span class='font-bold'>bois de chauffe</span>, selon leur essence.</p><p>Sur demande du client (et une logique de réduction du coût total de l'intervention) nous pouvons ne pas évacuer les déchets verts et laisser branches et troncs débités entassés au pied de l’arbre.</p><p class='italic'>Les professionnels sont légalement responsables des déchets de leur activité. Respectueux de la loi et de notre environnement, nous nous refusons aux dépôts dits « sauvages » qui, outre l'incivilité qu'ils représentent, peuvent fragiliser l'entreprise d'un point de vue judiciaire et financier.</p>",
      images: [
         {
            img_url : require("@/assets/images/services/recyclage_1.jpg"),
            title: "Gros plan sur le tas de broyat.",
            legend: "Gros plan sur le tas de broyat.",
            alt: "Photo d'un gros plan sur le tas de broyat."
         },
         {
            img_url : require("@/assets/images/services/recyclage_2.jpg"),
            title: "Notre terrain de stockage au milieu des champs, suite à une convention avec un agriculteur local et dans le respect des normes en vigueur.",
            legend: "Notre terrain de stockage au milieu des champs, suite à une convention avec un agriculteur local et dans le respect des normes en vigueur.",
            alt: "Photo de notre terrain de stockage au milieu des champs, suite à une convention avec un agriculteur local et dans le respect des normes en vigueur."
         },
         {
            img_url : require("@/assets/images/services/recyclage_3.jpg"),
            title: "Le broyeur en action. Ici, le broyat sera laissé à disposition du client.",
            legend: "Le broyeur en action. Ici, le broyat sera laissé à disposition du client.",
            alt: "Photo d'un broyeur en action. Ici, le broyat sera laissé à disposition du client."
         },
      ]
   }
]

let materiels = [
   {
      // LE CONTENU DE LA SECTION GRIMPE
     tab_name: 'De grimpe',
     title: "Bien s'équiper pour exercer son métier en <span class='text-orange-100'>toute sécurité</span>",
     content: "<p>En tête des métiers les plus dangereux, l'élagueur est soumis à de <span class='font-bold'>nombreux risques</span> : <span class='font-bold'>chutes</span> de hauteur, <span class='font-bold'>coupures</span> liées à l'utilisation d'outils tranchants, chutes de branches, proximité des lignes haute tension, <span class='font-bold'>TMS</span> (Troubles Musculo Squelettiques), etc.</p><p>Chez Bourbon Élagage, pas question de rogner sur la qualité pour <span class='font-bold'>assurer la sécurité de nos salariés</span>. Plusieurs milliers d'euros sont investis pour doter chacun de nos élagueurs d'<span class='font-bold'>Équipements de Protection Individuelle</span> (EPI) leur assurant une <span class='font-bold'>protection physique</span> contre les éléments et leur permettant de <span class='font-bold'>grimper à toutes hauteurs</span>, en toute sécurité. Cordes, harnais, connecteurs, griffes, gants, pantalons, chaussures anti-coupures, casques : du matériel adapté, aux normes, régulièrement renouvelé et vérifié annuellement par un organisme certifié.</p>",
     images: [
        // LES IMAGES DE LA SECTION GRIMPE
        {
           img_url : require("@/assets/images/materiels/grimpe_1.jpg"),
           title: "Ce qui se trouve dans la caisse de chaque grimpeur.",
           legend: "Ce qui se trouve dans la caisse de chaque grimpeur.",
           alt: "Photo de ce qui se trouve dans la caisse de chaque grimpeur."
        },
        {
           img_url : require("@/assets/images/materiels/grimpe_2.jpg"),
           title: "L’équipement en cours d’utilisation.",
           legend: "L’équipement en cours d’utilisation.",
           alt: "Photo de l’équipement en cours d’utilisation."
        }
     ]
  },
   {
      tab_name: "De Coupe",
      title: 'Tronçonneuses d’élagage</br> <span class="text-orange-100">et d’abattage</span>',
      content: "<p>Pour réaliser nos travaux d'élagage et d'abattage, nous nous appuyons sur la robustesse des tronçonneuses thermiques STHILL et HUSQVARNA.<br>De la tronçonneuse d'élagage à la tronçonneuse d'abattage, nous utilisons un éventail de machines nous permettant d'entretenir, tailler, couper, étêter ou encore éhouper efficacement vos arbres.</p><p>Notre souhait ? Voir arriver sur le marché des tronçonneuses électriques silencieuses et sans odeurs aussi robustes et performantes que les thermiques, afin de gagner en confort de travail.</p>",
      images: [
         {
            img_url : require("@/assets/images/materiels/coupe_1.jpg"),
            title: "Difficile de faire de l’art avec des tronçonneuses…le calendrier Sthill s’y essaye avec plus de réussite.",
            legend: "Difficile de faire de l’art avec des tronçonneuses…le calendrier Sthill s’y essaye avec plus de réussite.",
            alt: "Photo de la difficulté à faire de l’art avec des tronçonneuses…le calendrier Sthill s’y essaye avec plus de réussite."
         },
         {
            img_url : require("@/assets/images/materiels/coupe_2.jpg"),
            title: "Les tronçonneuses d’élagage, manipulables à une main avec leur prise « fer à repasser » ; notre outil principal.",
            legend: "Les tronçonneuses d’élagage, manipulables à une main avec leur prise « fer à repasser » ; notre outil principal.",
            alt: "Photo des tronçonneuses d’élagage, manipulables à une main avec leur prise « fer à repasser » ; notre outil principal."
         },
         {
            img_url : require("@/assets/images/materiels/coupe_3.jpg"),
            title: "Les tronçonneuses d’abattage(dont la  3120, 119 cm 3 !)",
            legend: "Les tronçonneuses d’abattage(dont la  3120, 119 cm 3 !)",
            alt: "Photo des tronçonneuses d’abattage(dont la  3120, 119 cm 3 !)"
         },
      ]
   },
   {
      //  SECTION ENGIN 
      tab_name: "Roulant",
      title: "Une flotte adaptée à <br><span class='text-orange-100'>l'élagage tout-terrain</span>",
      content: "<p>Les quatre types de véhicules que compte notre flotte nous permettent d'être <span class='font-bold'>réactifs</span> et d'intervenir <span class='font-bold'>rapidement</span>, même dans les lieux les plus reculés de l'île.</p><p>Fourgonette Peugeot Expert, pickups Hilux, camions 3.5T et nacelle Iveco.<br>Nous sommes toujours prêts pour établir un devis, transporter le personnel, les rémanents ou le matériel <span class='font-bold'>en tous lieux</span>. Bien pratique pour intervenir partout sur notre belle île de la Réunion et arriver rapidement sur des <span class='font-bold'>lieux difficiles d'accès</span>, notamment après le passage d'un cyclone.</p>",
      images: [
         // LES IMAGES DE LA SECTION ENGEIN
         {
            img_url : require("@/assets/images/materiels/engein_1.jpg"),
            title: "Les pick-up et la nacelle devant le site historique de l’usine Vue Belle.",
            legend: "Les pick-up et la nacelle devant le site historique de l’usine Vue Belle.",
            alt: "Photo des pick-up et de la nacelle devant le site historique de l’usine Vue Belle."
         },
         {
            img_url : require("@/assets/images/materiels/engein_2.jpg"),
            title: "Notre broyeur de la marque Bandit. Sûr, robuste et très efficace quoiqu'un peu lourd; de l'américain pur jus !",
            legend: "Notre broyeur de la marque Bandit. Sûr, robuste et très efficace quoiqu'un peu lourd; de l'américain pur jus !",
            alt: "Photo de notre broyeur de la marque Bandit. Sûr, robuste et très efficace quoiqu'un peu lourd; de l'américain pur jus !"
         },
         {
            img_url : require("@/assets/images/materiels/engein_3.jpg"),
            title: "Un de nos Iveco pour le transport des rémanents.",
            legend: "Un de nos Iveco pour le transport des rémanents.",
            alt: "Photo d'un de nos Iveco pour le transport des rémanents."
         },
      ]
   },
]

export default {sections, services, materiels}