let sections = [
   {name : 'section1'},
   {name : 'section2'},
   {name : 'section3'},
   {name : 'section4'},
   {name : 'section5'}
];

let services = [
   {
      tab_name: 'élagage',
      title: "Nous réalisons <span class='text-orange-100 italic'>l'élagage</span> de vos arbre",
      content: "<p class='mt-4'>Bourbon Elagage dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><p class='mt-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>",
      images: [
         {
            img_url : require("@/assets/images/services/elagage_1.jpg"),
            title: "Elagage 1",
            legend: "Elagage legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_2.jpg"),
            title: "Elagage 2",
            legend: "Elagage legend 2 dffd fds fdsf dsfdsf sdf sdfds fsd fds fs fds fdds  df dsf dsf dsf dsf dsf dsf ",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_3.jpg"),
            title: "Elagage 3",
            legend: "Elagage legend 3",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/elagage_4.jpg"),
            title: "Elagage 4",
            legend: "Elagage legend 4",
            alt: "alt attr"
         }
      ]
   },
   {
      tab_name: "Abattage",
      title: 'title slide 2',
      content: 'content slide 2',
      images: [
         {
            img_url : require("@/assets/images/services/abattage_1.jpg"),
            title: "Abattage 1",
            legend: "Abattage legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/abattage_2.jpg"),
            title: "Abattage 2",
            legend: "Abattage legend 2",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/abattage_3.jpg"),
            title: "Abattage 3",
            legend: "Abattage legend 3",
            alt: "alt attr"
         },
      ]
   },
   {
      tab_name: 'Recyclage',
      title: 'title slide 3',
      content: 'content slide 3',
      images: [
         {
            img_url : require("@/assets/images/services/recyclage_1.jpg"),
            title: "Recyclage 1",
            legend: "Recyclage legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/recyclage_2.jpg"),
            title: "Recyclage 2",
            legend: "Recyclage legend 2",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/services/recyclage_3.jpg"),
            title: "Recyclage 3",
            legend: "Recyclage legend 3",
            alt: "alt attr"
         },
      ]
   }
]

let materiels = [
   {
      tab_name: 'De grimpe',
      title: "Notre materiel est <span class='text-orange-100'>controlé</span> chaque année",
      content: "<p class='mt-4'>Bourbon Elagage dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><p class='mt-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>",
      images: [
         {
            img_url : require("@/assets/images/materiels/grimpe_1.jpg"),
            title: "Grimpe 1",
            legend: "Grimpe legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/grimpe_2.jpg"),
            title: "Grimpe 2",
            legend: "Grimpe legend 2",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/grimpe_3.jpg"),
            title: "Grimpe 3",
            legend: "Grimpe legend 3",
            alt: "alt attr"
         },
      ]
   },
   {
      tab_name: "Engein",
      title: 'title slide 2',
      content: 'content slide 2',
      images: [
         {
            img_url : require("@/assets/images/materiels/engein_1.jpg"),
            title: "Engein 1",
            legend: "Engein legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/engein_2.jpg"),
            title: "Engein 2",
            legend: "Engein legend 2",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/engein_3.jpg"),
            title: "Engein 3",
            legend: "Engein legend 3",
            alt: "alt attr"
         },
      ]
   },
   {
      tab_name: "Coupe",
      title: 'title slide 3',
      content: 'content slide 3',
      images: [
         {
            img_url : require("@/assets/images/materiels/coupe_1.jpg"),
            title: "Coupe 1",
            legend: "Coupe legend 1",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/coupe_2.jpg"),
            title: "Coupe 2",
            legend: "Coupe legend 2",
            alt: "alt attr"
         },
         {
            img_url : require("@/assets/images/materiels/coupe_3.jpg"),
            title: "Coupe 3",
            legend: "Coupe legend 3",
            alt: "alt attr"
         },
      ]
   }
]

export default {sections, services, materiels}