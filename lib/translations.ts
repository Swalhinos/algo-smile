// Clinic identity for Algo Smile — Dr Hazem Tahoun, Nasr City, Cairo, Egypt.
// Phone / WhatsApp everywhere: +20 100 800 0172 (wa.me/201008000172).
// Address is the clinic's own published address (26 Ahmed Fakhry St, beside
// Hassabo Hospital, 2nd floor — coordinates 30.06605, 31.34954).
// NOTE: working hours are NOT published by the clinic anywhere — the hours
// below are a placeholder to be confirmed by the clinic.

export type Lang = 'fr' | 'ar' | 'en'

export const CLINIC = {
  name: 'Algo Smile',
  doctor: 'Dr Hazem Tahoun',
  phoneDisplay: '+20 100 800 0172',
  phone: '201008000172',
  whatsapp: 'https://wa.me/201008000172',
  address: '26 Ahmed Fakhry St, beside Hassabo Hospital, 2nd floor, Nasr City, Cairo',
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=30.06605,31.34954',
  mapsEmbed: 'https://www.google.com/maps?q=30.06605,31.34954&z=15&output=embed',
}

const fr = {
  nav: {
    about: 'À propos',
    services: 'Services',
    implants: 'Implants',
    social: 'Réseaux sociaux',
    whyUs: 'Pourquoi nous',
    results: 'Résultats',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Prendre rendez-vous',
  },
  hero: {
    badge: 'Dentisterie esthétique et implantologie — Nasr City, Le Caire',
    title: 'Votre sourire commence chez Algo Smile',
    subtitle:
      'Avec le Dr Hazem Tahoun, spécialiste en dentisterie esthétique et implantologie fort de plus de 20 ans d’expérience : implants, facettes et couronnes en 24 heures, au cœur de Nasr City — Le Caire.',
    cta: 'Prendre rendez-vous',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    directions: 'Itinéraire',
    stats: [
      { value: '20+', label: 'Années d’expérience' },
      { value: '24h', label: 'Couronnes en 24 heures' },
      { value: '1', label: 'Séance pour le traitement de racine numérique' },
    ],
  },
  about: {
    badge: 'À propos du docteur',
    title: 'Dr Hazem Tahoun',
    role: 'Spécialiste en dentisterie esthétique et implantologie · Université Ain Shams',
    p1: 'Le Dr Hazem Tahoun est spécialiste en dentisterie esthétique et implantologie (Université Ain Shams), avec plus de 20 ans d’expérience. Sa clinique Algo Smile, à Nasr City au Caire, allie les dernières technologies dentaires à une approche douce et centrée sur le patient.',
    p2: 'Qu’il s’agisse d’un contrôle de routine, d’une transformation esthétique ou d’un traitement complexe, le Dr Tahoun et son équipe veillent à ce que chaque visite soit confortable, transparente et adaptée à vos besoins. Notre devise : votre sourire, notre passion.',
    points: [
      'Équipements modernes et stérilisation rigoureuse',
      'Couronnes prêtes en 24 heures et traitement de racine numérique en une séance',
      'Soins en douceur pour adultes et enfants',
      'Plans de traitement et tarifs transparents',
    ],
  },
  services: {
    badge: 'Nos services',
    title: 'Des soins complets pour chaque sourire',
    subtitle: 'De la prévention aux transformations complètes du sourire, tout est réuni au même endroit.',
    items: [
      {
        title: 'Implants dentaires',
        desc: 'Des remplacements permanents et naturels pour les dents manquantes, posés avec précision.',
      },
      {
        title: 'Orthodontie',
        desc: 'Bagues et aligneurs transparents pour aligner vos dents à tout âge.',
      },
      {
        title: 'Blanchiment laser',
        desc: 'Blanchiment professionnel des dents et des gencives au laser, pour un sourire visiblement plus éclatant dès la première visite.',
      },
      {
        title: 'Couronnes et facettes',
        desc: 'Couronnes et facettes sur mesure, prêtes en 24 heures seulement, pour restaurer forme et fonction.',
      },
      {
        title: 'Traitement de racine numérique',
        desc: 'Un traitement endodontique numérique précis, réalisé en une seule séance et sans douleur.',
      },
      {
        title: 'Soins conservateurs',
        desc: 'Consultations, détartrage, composites et prévention pour garder des dents saines à vie.',
      },
    ],
  },
  implants: {
    badge: 'Implants dentaires',
    title: 'Retrouvez un sourire complet et naturel',
    subtitle: 'L’implant dentaire remplace la racine de la dent manquante par une solution fixe, stable et durable — sans toucher aux dents voisines.',
    benefits: [
      'Aspect et sensation naturels, comme vos propres dents',
      'Stabilité totale pour manger et parler en confiance',
      'Préserve l’os de la mâchoire et la structure du visage',
      'Solution durable, conçue pour durer de nombreuses années',
    ],
    cta: 'Discuter de mon implant sur WhatsApp',
  },
  why: {
    badge: 'Pourquoi nous choisir',
    title: 'La différence que l’on ressent',
    items: [
      {
        title: 'Technologie moderne',
        desc: 'Radiographies numériques, équipements modernes et protocoles de stérilisation avancés.',
      },
      {
        title: 'Approche sans douleur',
        desc: 'Techniques douces et anesthésie efficace pour une expérience sans stress.',
      },
      {
        title: 'Accueil chaleureux',
        desc: 'Des soins adaptés aux adultes, aux enfants et aux seniors, dans une ambiance bienveillante.',
      },
      {
        title: 'Emplacement idéal',
        desc: 'Au cœur de Nasr City, à côté de l’hôpital Hassabo et près de City Stars.',
      },
    ],
  },
  testimonials: {
    badge: 'Témoignages',
    title: 'Ce que disent nos patients',
    items: [
      {
        name: 'Ahmed M.',
        text: 'J’ai fait poser deux implants et l’expérience a été bien plus simple que prévu. Explications claires dès la première visite et suivi par WhatsApp après l’intervention.',
      },
      {
        name: 'Sara K.',
        text: 'Le résultat du blanchiment a dépassé mes attentes dès la première séance. Le cabinet est impeccable et l’accueil excellent. Je recommande à tous ceux qui veulent un plus beau sourire.',
      },
      {
        name: 'Mahmoud A.',
        text: 'Mon fils avait peur du dentiste, mais la façon dont l’équipe s’y est prise a tout changé. Il va désormais au cabinet avec le sourire.',
      },
    ],
  },
  beforeAfter: {
    badge: 'Avant / Après',
    title: 'Des résultats visibles',
    subtitle: 'Faites glisser le curseur pour comparer l\'avant et l\'après de chaque cas.',
    labels: { before: 'Avant', after: 'Après' },
    note: 'Exemples illustratifs des résultats de blanchiment et d’esthétique du sourire — retrouvez des centaines de cas réels sur l’Instagram du cabinet.',  videoTour: { heading: 'Visitez le cabinet en vidéo', subtitle: 'Découvrez le cabinet, ses équipements modernes et son ambiance chaleureuse, en images.' },
  },
  social: {
    badge: 'Réseaux sociaux',
    title: 'Suivez-nous',
    subtitle: 'Le Dr Hazem Tahoun partage chaque jour ses cas cliniques, ses conseils et les coulisses du cabinet. Rejoignez la communauté !',
    cta: 'Voir le profil',
    verified: 'Profil vérifié',
    facebookDesc: 'Actualités du cabinet, cas cliniques et conseils dentaires.',
    instagramDesc: 'Photos et vidéos : transformations de sourires et vie du cabinet.',
    tiktokDesc: 'Vidéos courtes : conseils, coulisses et résultats en images.',
    facebookNote: 'Page Facebook officielle du cabinet.',
  },
  faq: {
    badge: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Comment prendre rendez-vous ?',
        a: 'Vous pouvez réserver via le formulaire de cette page, nous appeler directement ou nous envoyer un message WhatsApp. Nous répondons rapidement pendant les heures d’ouverture.',
      },
      {
        q: 'Proposez-vous des implants dentaires ?',
        a: 'Oui. Le Dr Tahoun est spécialisé en implantologie : il remplace les dents manquantes par des implants fixes et naturels. Contactez-nous sur WhatsApp pour une première évaluation.',
      },
      {
        q: 'Le blanchiment dentaire est-il sûr ?',
        a: 'Absolument. Le blanchiment professionnel au laser, réalisé sous supervision dentaire, est sûr et offre des résultats supérieurs et plus durables que les kits à domicile.',
      },
      {
        q: 'Quelles langues parlez-vous ?',
        a: 'Notre équipe parle arabe et anglais, pour que vous puissiez communiquer confortablement.',
      },
      {
        q: 'Où se situe le cabinet ?',
        a: 'Au 26, rue Ahmed Fakhry, à côté de l’hôpital Hassabo, 2e étage, Nasr City, Le Caire — près de City Stars. Utilisez le bouton « Itinéraire » ci-dessous pour votre position exacte sur Google Maps.',
      },
      {
        q: 'Gérez-vous les urgences dentaires ?',
        a: 'Oui, nous faisons de notre mieux pour recevoir les urgences le jour même. Appelez-nous ou envoyez-nous un message WhatsApp immédiatement si vous avez mal.',
      },
    ],
  },
  appointment: {
    badge: 'Réservez votre visite',
    title: 'Prendre rendez-vous',
    subtitle: 'Remplissez le formulaire et nous confirmerons votre rendez-vous par téléphone ou WhatsApp.',
    name: 'Nom complet',
    namePh: 'Votre nom complet',
    phone: 'Téléphone',
    phonePh: '+20 XX XXX XXXX',
    service: 'Service',
    servicePh: 'Choisir un service',
    date: 'Date souhaitée',
    message: 'Message (optionnel)',
    messagePh: 'Parlez-nous de vos besoins…',
    submit: 'Envoyer via WhatsApp',
    note: 'Votre demande s’ouvre dans WhatsApp — nous confirmons pendant les heures d’ouverture.',
  },
  contact: {
    badge: 'Contact et accès',
    title: 'Visitez notre cabinet',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    hoursLabel: 'Horaires d’ouverture',
    hours: ['Samedi – Jeudi : 12:00 – 22:00'],
    directions: 'Itinéraire',
  },
  footer: {
    tagline: 'Des soins dentaires haut de gamme à Nasr City, au Caire.',
    quickLinks: 'Liens rapides',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
  },
}

const en = {
  nav: {
    about: 'About',
    services: 'Services',
    implants: 'Implants',
    social: 'Social media',
    whyUs: 'Why Us',
    results: 'Results',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book Appointment',
  },
  hero: {
    badge: 'Cosmetic dentistry and implantology — Nasr City, Cairo',
    title: 'Your Smile Starts at Algo Smile',
    subtitle:
      'Experience premium dental care with Dr Hazem Tahoun, cosmetic and implant specialist with 20+ years of experience: implants, veneers and crowns in 24 hours, in the heart of Nasr City — Cairo.',
    cta: 'Book Appointment',
    call: 'Call Now',
    whatsapp: 'WhatsApp',
    directions: 'Get Directions',
    stats: [
      { value: '20+', label: 'Years of Experience' },
      { value: '24h', label: 'Crowns in 24 Hours' },
      { value: '1', label: 'Visit for Digital Root Canal' },
    ],
  },
  about: {
    badge: 'About the Doctor',
    title: 'Dr Hazem Tahoun',
    role: 'Cosmetic & Implant Dentistry Specialist · Ain Shams University',
    p1: 'Dr Hazem Tahoun is a cosmetic and implant dentistry specialist (Ain Shams University) with over 20 years of experience. His clinic, Algo Smile, in Nasr City, Cairo, combines the latest dental technology with a gentle, patient-centred approach.',
    p2: 'Whether you need a routine check-up, a smile transformation or complex treatment, Dr Tahoun and his team make sure every visit is comfortable, transparent and tailored to your needs. Our motto: Your Smile, Our Passion.',
    points: [
      'Modern equipment and rigorous sterilization',
      'Crowns ready in 24 hours and single-visit digital root canal',
      'Gentle care for adults and children',
      'Transparent treatment plans and pricing',
    ],
  },
  services: {
    badge: 'Our Services',
    title: 'Complete Care for Every Smile',
    subtitle: 'From prevention to full smile transformations, everything is in one place.',
    items: [
      {
        title: 'Dental Implants',
        desc: 'Permanent, natural-looking replacements for missing teeth, placed with precision.',
      },
      {
        title: 'Orthodontics',
        desc: 'Braces and clear aligners to align your teeth at any age.',
      },
      {
        title: 'Laser Whitening',
        desc: 'Professional laser whitening for teeth and gums — a visibly brighter smile in a single visit.',
      },
      {
        title: 'Crowns and Veneers',
        desc: 'Custom crowns and veneers, ready in just 24 hours, to restore shape and function.',
      },
      {
        title: 'Digital Root Canal',
        desc: 'Precise digital root canal treatment completed in a single visit — pain-free.',
      },
      {
        title: 'Conservative Care',
        desc: 'Check-ups, scaling, fillings and prevention to keep your teeth healthy for life.',
      },
    ],
  },
  implants: {
    badge: 'Dental Implants',
    title: 'A Complete, Natural-Looking Smile Again',
    subtitle: 'A dental implant replaces the root of a missing tooth with a fixed, stable and long-lasting solution — without touching neighbouring teeth.',
    benefits: [
      'Natural look and feel, just like your own teeth',
      'Full stability to eat and speak with confidence',
      'Preserves the jawbone and facial structure',
      'A durable solution built to last for many years',
    ],
    cta: 'Discuss My Implant on WhatsApp',
  },
  why: {
    badge: 'Why Choose Us',
    title: 'The Difference You Can Feel',
    items: [
      {
        title: 'Modern Technology',
        desc: 'Digital X-rays, modern equipment, and advanced sterilization protocols.',
      },
      {
        title: 'Pain-Free Approach',
        desc: 'Gentle techniques and effective anesthesia for a stress-free experience.',
      },
      {
        title: 'Warm Welcome',
        desc: 'Tailored care for adults, children, and seniors in a warm atmosphere.',
      },
      {
        title: 'Prime Location',
        desc: 'In the heart of Nasr City, beside Hassabo Hospital and near City Stars.',
      },
    ],
  },
  testimonials: {
    badge: 'Patient Testimonials',
    title: 'What Our Patients Say',
    items: [
      {
        name: 'Ahmed M.',
        text: 'I had two implants done and it was far easier than I expected. Clear explanation from the first visit and follow-up on WhatsApp after the procedure.',
      },
      {
        name: 'Sara K.',
        text: 'The whitening result exceeded my expectations from the first session. The place is spotless and the care is excellent. I recommend them to anyone looking for a better smile.',
      },
      {
        name: 'Mahmoud A.',
        text: 'My son used to fear the dentist, but the team\u2019s way with him changed everything. Now he goes happily.',
      },
    ],
  },
  beforeAfter: {
    badge: 'Before and After',
    title: 'Visible Results',
    subtitle: 'Drag the slider to compare the before and after of each case.',
    labels: { before: 'Before', after: 'After' },
    note: 'Illustrative examples of whitening and smile-design results — see hundreds of real cases on the clinic\u2019s Instagram.',  videoTour: { heading: 'A look inside the clinic', subtitle: 'Step inside the clinic and discover the space, the equipment and the care behind every smile.' },
  },
  social: {
    badge: 'Social Media',
    title: 'Follow Us',
    subtitle: 'Dr Hazem Tahoun shares clinical cases, tips and behind-the-scenes moments from the clinic every day. Join the community!',
    cta: 'View Profile',
    verified: 'Verified profile',
    facebookDesc: 'Clinic news, clinical cases and dental tips.',
    instagramDesc: 'Photos and videos: smile transformations and clinic life.',
    tiktokDesc: 'Short videos: tips, behind the scenes and results in pictures.',
    facebookNote: 'The clinic\u2019s official Facebook page.',
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book via the form on this page, by calling us directly, or by sending a WhatsApp message. We respond quickly during working hours.',
      },
      {
        q: 'Do you offer dental implants?',
        a: 'Yes. Dr Tahoun specializes in implantology: he replaces missing teeth with fixed, natural-looking implants. Contact us on WhatsApp for an initial assessment.',
      },
      {
        q: 'Is teeth whitening safe?',
        a: 'Absolutely. Professional laser whitening under dental supervision is safe and delivers superior, longer-lasting results compared to home kits.',
      },
      {
        q: 'What languages do you speak?',
        a: 'Our team speaks Arabic and English so you can communicate comfortably.',
      },
      {
        q: 'Where is the clinic located?',
        a: 'At 26 Ahmed Fakhry Street, beside Hassabo Hospital, 2nd floor, Nasr City, Cairo — near City Stars. Use the Get Directions button below for our exact location on Google Maps.',
      },
      {
        q: 'Do you handle dental emergencies?',
        a: 'Yes, we do our best to see emergency cases the same day. Call or WhatsApp us immediately if you are in pain.',
      },
    ],
  },
  appointment: {
    badge: 'Book Your Visit',
    title: 'Request an Appointment',
    subtitle: 'Fill in the form and we will confirm your appointment by phone or WhatsApp.',
    name: 'Full Name',
    namePh: 'Your full name',
    phone: 'Phone Number',
    phonePh: '+20 XX XXX XXXX',
    service: 'Service',
    servicePh: 'Select a service',
    date: 'Preferred Date',
    message: 'Message (optional)',
    messagePh: 'Tell us about your needs…',
    submit: 'Send via WhatsApp',
    note: 'Your request opens in WhatsApp — we confirm within working hours.',
  },
  contact: {
    badge: 'Contact and Location',
    title: 'Visit Our Clinic',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Opening Hours',
    hours: ['Saturday – Thursday: 12:00 PM – 10:00 PM'],
    directions: 'Get Directions',
  },
  footer: {
    tagline: 'Premium dental care in Nasr City, Cairo.',
    quickLinks: 'Quick Links',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
  },
}

const ar = {
  nav: {
    about: 'من نحن',
    services: 'خدماتنا',
    implants: 'زراعة الأسنان',
    social: 'تابعنا',
    whyUs: 'لماذا نحن',
    results: 'النتائج',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    book: 'حجز موعد',
  },
  hero: {
    badge: 'طب وتجميل وزراعة الأسنان — مدينة نصر، القاهرة',
    title: 'ابتسامتك تبدأ من Algo Smile',
    subtitle: 'اكتشف تجربة طب أسنان راقية مع الدكتور حازم طاحون — أخصائي تجميل وزراعة الأسنان بخبرة تتجاوز 20 عاماً: زراعة وفينير وتركيبات خلال 24 ساعة، في قلب مدينة نصر — القاهرة.',
    cta: 'حجز موعد',
    call: 'اتصل الآن',
    whatsapp: 'واتساب',
    directions: 'الاتجاهات',
    stats: [
      { value: '+20', label: 'عاماً من الخبرة' },
      { value: '24', label: 'ساعة للتركيبات' },
      { value: '1', label: 'جلسة واحدة لعلاج الجذور الرقمي' },
    ],
  },
  about: {
    badge: 'عن الطبيب',
    title: 'الدكتور حازم طاحون',
    role: 'أخصائي تجميل وزراعة الأسنان · جامعة عين شمس',
    p1: 'الدكتور حازم طاحون أخصائي تجميل وزراعة الأسنان بجامعة عين شمس، وصاحب خبرة تتجاوز 20 عاماً. تجمع عيادته ألجو سمايل في مدينة نصر بالقاهرة بين أحدث تقنيات طب الأسنان ونهج لطيف يركّز على المريض.',
    p2: 'سواء أكنت بحاجة إلى فحص روتيني أو تحويل تجميلي للابتسامة أو علاج معقّد، يحرص الدكتور حازم وفريقه على أن تكون كل زيارة مريحة وشفافة ومصمّمة وفق احتياجاتك. شعارنا الدائم: ابتسامتك… شغفنا.',
    points: [
      'معدّات حديثة وتعقيم صارم',
      'تركيبات جاهزة خلال 24 ساعة وعلاج جذور رقمي في جلسة واحدة',
      'رعاية لطيفة للبالغين والأطفال',
      'خطط علاج وأسعار شفافة',
    ],
  },
  services: {
    badge: 'خدماتنا',
    title: 'رعاية متكاملة لكل ابتسامة',
    subtitle: 'من الوقاية إلى التحويل الكامل للابتسامة، كل شيء متوفر في مكان واحد.',
    items: [
      {
        title: 'زراعة الأسنان',
        desc: 'بدائل دائمة وطبيعية المظهر للأسنان المفقودة، تُزرع بدقّة.',
      },
      {
        title: 'تقويم الأسنان',
        desc: 'أجهزة تقويم ومصفّفات شفافة لمحاذاة أسنانك في أي عمر.',
      },
      {
        title: 'التبييض بالليزر',
        desc: 'تبييض احترافي للأسنان واللثة بالليزر، لابتسامة أكثر إشراقًا بشكل واضح من الزيارة الأولى.',
      },
      {
        title: 'التيجان والفينير',
        desc: 'تيجان وفينير مصمّمة خصيصًا وجاهزة خلال 24 ساعة فقط، لاستعادة الشكل والوظيفة.',
      },
      {
        title: 'علاج الجذور الرقمي',
        desc: 'علاج جذور رقمي دقيق يُنجز في جلسة واحدة فقط — وبدون ألم.',
      },
      {
        title: 'العلاجات المحافظة',
        desc: 'فحوصات وتنظيف وحشوات ووقاية للحفاظ على أسنان سليمة مدى الحياة.',
      },
    ],
  },
  implants: {
    badge: 'زراعة الأسنان',
    title: 'ابتسامة كاملة وطبيعية من جديد',
    subtitle: 'تُعوّض زرعة الأسنان جذر السنّ المفقود بحلّ ثابت ومستقرّ وطويل الأمد — دون المساس بالأسنان المجاورة.',
    benefits: [
      'مظهر وإحساس طبيعيان، مثل أسنانك تمامًا',
      'ثبات كامل للأكل والتحدث بثقة',
      'تحافظ على عظم الفك وبنية الوجه',
      'حلّ متين مصمّم ليدوم سنوات عديدة',
    ],
    cta: 'ناقش زرعتك عبر واتساب',
  },
  why: {
    badge: 'لماذا تختارنا',
    title: 'الفرق الذي تشعر به',
    items: [
      {
        title: 'تقنيات حديثة',
        desc: 'أشعة رقمية ومعدّات حديثة وبروتوكولات تعقيم متقدّمة.',
      },
      {
        title: 'نهج بلا ألم',
        desc: 'تقنيات لطيفة وتخدير فعّال لتجربة خالية من التوتر.',
      },
      {
        title: 'استقبال دافئ',
        desc: 'رعاية مصمّمة للبالغين والأطفال وكبار السن في أجواء دافئة.',
      },
      {
        title: 'موقع مثالي',
        desc: 'في قلب مدينة نصر، بجوار مستشفى حسبو وقريب من سيتي ستارز.',
      },
    ],
  },
  testimonials: {
    badge: 'شهادات المرضى',
    title: 'ماذا يقول مرضانا',
    items: [
      {
        name: 'أحمد م.',
        text: 'عملت زراعة لضرسين وكانت التجربة أسهل مما توقعت بكثير. شرح واضح من أول زيارة ومتابعة بعد العملية على واتساب.',
      },
      {
        name: 'سارة خ.',
        text: 'نتيجة التبييض فاقت توقعاتي من أول جلسة، والمكان نظيف جداً والتعامل راقٍ. أنصح بهم كل من يبحث عن ابتسامة أجمل.',
      },
      {
        name: 'محمود ع.',
        text: 'ابني كان يخاف من طبيب الأسنان، لكن أسلوب الفريق معه غيّر كل شيء. صار يروح العيادة وهو مبسوط.',
      },
    ],
  },
  beforeAfter: {
    badge: 'قبل وبعد',
    title: 'نتائج مرئية',
    subtitle: 'حرّكوا المؤشر لمقارنة قبل وبعد كل حالة.',
    labels: { before: 'قبل', after: 'بعد' },
    note: 'أمثلة توضيحية لنتائج التبييض وتجميل الابتسامة — وشاهد مئات الحالات الحقيقية على إنستغرام العيادة.',  videoTour: { heading: 'جولة داخل العيادة', subtitle: 'اكتشف العيادة وتجهيزاتها الحديثة وأجواءها الدافئة من خلال هذا الفيديو.' },
  },
  social: {
    badge: 'وسائل التواصل الاجتماعي',
    title: 'تابعنا',
    subtitle: 'يشارك الدكتور حازم طاحون يوميًا حالاته السريرية ونصائحه وكواليس العيادة. انضم إلى المجتمع!',
    cta: 'عرض الملف الشخصي',
    verified: 'ملف موثّق',
    facebookDesc: 'أخبار العيادة وحالات سريرية ونصائح للأسنان.',
    instagramDesc: 'صور وفيديوهات: تحويلات الابتسامة وحياة العيادة.',
    tiktokDesc: 'فيديوهات قصيرة: نصائح وكواليس ونتائج بالصور.',
    facebookNote: 'صفحة فيسبوك الرسمية للعيادة.',
  },
  faq: {
    badge: 'الأسئلة الشائعة',
    title: 'الأسئلة الأكثر شيوعًا',
    items: [
      {
        q: 'كيف أحجز موعدًا؟',
        a: 'يمكنك الحجز عبر نموذج هذه الصفحة، أو بالاتصال بنا مباشرة، أو بإرسال رسالة واتساب. نردّ بسرعة خلال ساعات العمل.',
      },
      {
        q: 'هل تقدّمون زراعة الأسنان؟',
        a: 'نعم. يتخصص الدكتور حازم في زراعة الأسنان: فهو يعوّض الأسنان المفقودة بزرعات ثابتة وطبيعية المظهر. تواصل معنا عبر واتساب لتقييم أولي.',
      },
      {
        q: 'هل تبييض الأسنان آمن؟',
        a: 'بالتأكيد. التبييض الاحترافي بالليزر تحت إشراف طبيب الأسنان آمن ويعطي نتائج أفضل وتدوم أطول مقارنة بالمنتجات المنزلية.',
      },
      {
        q: 'ما اللغات التي تتحدثونها؟',
        a: 'يتحدث فريقنا العربية والإنجليزية لتتواصل براحة.',
      },
      {
        q: 'أين تقع العيادة؟',
        a: 'في 26 شارع أحمد فخري، بجوار مستشفى حسبو، الدور الثاني، مدينة نصر، القاهرة — قريب من سيتي ستارز. استخدم زر الاتجاهات أدناه لموقعنا الدقيق على خرائط غوغل.',
      },
      {
        q: 'هل تعالجون طوارئ الأسنان؟',
        a: 'نعم، نبذل قصارى جهدنا لاستقبال حالات الطوارئ في اليوم نفسه. اتصل بنا أو راسلنا عبر واتساب فورًا إذا كنت تشعر بالألم.',
      },
    ],
  },
  appointment: {
    badge: 'احجز زيارتك',
    title: 'طلب موعد',
    subtitle: 'املأ النموذج وسنؤكد موعدك عبر الهاتف أو واتساب.',
    name: 'الاسم الكامل',
    namePh: 'اسمك الكامل',
    phone: 'رقم الهاتف',
    phonePh: '+20 XX XXX XXXX',
    service: 'الخدمة',
    servicePh: 'اختر خدمة',
    date: 'التاريخ المفضّل',
    message: 'رسالة (اختياري)',
    messagePh: 'أخبرنا عن احتياجاتك…',
    submit: 'إرسال عبر واتساب',
    note: 'يُفتح طلبك في واتساب — نؤكد خلال ساعات العمل.',
  },
  contact: {
    badge: 'اتصل بنا والموقع',
    title: 'زوروا عيادتنا',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    hoursLabel: 'ساعات العمل',
    hours: ['السبت – الخميس: 12:00 ظهراً – 10:00 مساءً'],
    directions: 'الاتجاهات',
  },
  footer: {
    tagline: 'رعاية أسنان راقية في مدينة نصر، القاهرة.',
    quickLinks: 'روابط سريعة',
    contactTitle: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
  },
}

export const translations = { fr, ar, en }

export type Translation = typeof translations.fr
