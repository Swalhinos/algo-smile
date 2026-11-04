// Instant FAQ engine for the Algo Smile chat assistant.
// Runs 100% in the browser: no API call, no external service, no waiting.
// Answers come only from approved clinic facts (same content the old
// server FAQ used), prices and medical questions are always deflected
// to WhatsApp by construction, and anything off-list falls back to a
// WhatsApp invitation — the robot can never hang or show an API error.

import type { Lang } from '@/lib/translations'

export type FaqAnswer = { text: string; cards: string[]; answerLang: Lang }

const ARABIC_SCRIPT = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/

type FaqItem = {
  id: string
  cards?: string[]
  match: RegExp
  answers: Record<Lang, string>
}

const FAQ: FaqItem[] = [
  {
    id: 'emergency',
    cards: ['phone', 'whatsapp'],
    match: /(ألم|وجع|يوجع|كيضر|طوارئ|ضرني|سنّي كتوجع|douleur|mal aux dents|mal de dent|urgence|dental pain|toothache|emergency|hurts|in pain)/i,
    answers: {
      fr: "Je suis navré pour votre douleur. Je ne peux pas poser de diagnostic ni recommander de médicament : pour une douleur ou une urgence, contactez le cabinet au plus vite sur WhatsApp au +20 100 800 0172 ou par téléphone, l'équipe vous prendra en charge rapidement.",
      ar: 'آسف لسماع ذلك. لا أستطيع تقديم تشخيص أو وصف دواء: في حالة الألم أو الطوارئ، تواصل مع العيادة في أقرب وقت عبر واتساب على +20 100 800 0172 أو بالهاتف، وسيهتم بكم الفريق بسرعة.',
      en: 'I am sorry you are in pain. I cannot give a diagnosis or recommend medication: for pain or an emergency, please contact the clinic as soon as possible on WhatsApp at +20 100 800 0172 or by phone, and the team will take care of you quickly.',
    },
  },
  {
    id: 'price',
    cards: ['whatsapp'],
    match: /(ثمن|سعر|أسعار|بشحال|بكم|كم تكلفة|تكلفة|prix|tarif|coût|combien|price|cost|how much|fees)/i,
    answers: {
      fr: "Les tarifs dépendent de votre plan de traitement personnalisé, établi après un examen au cabinet avec le Dr Hazem Tahoun. Pour un devis précis, contactez-nous sur WhatsApp au +20 100 800 0172, nous vous répondrons rapidement.",
      ar: 'تختلف الأسعار حسب خطة العلاج الخاصة بكم، والتي تُحدَّد بعد الفحص في العيادة مع الدكتور حازم طاحون. للحصول على ثمن دقيق، تواصلوا معنا عبر واتساب على +20 100 800 0172 وسنرد عليكم بسرعة.',
      en: 'Prices depend on your personalised treatment plan, which is set after an examination at the clinic with Dr Hazem Tahoun. For an exact quote, contact us on WhatsApp at +20 100 800 0172 and we will reply quickly.',
    },
  },
  {
    id: 'payment',
    cards: ['whatsapp'],
    match: /(تقسيط|أقساط|طرق الدفع|وسائل الدفع|كاش|نقداً|بطاقة بنكية|paiement|payment|installment|pay in|credit card|cash)/i,
    answers: {
      fr: "Pour les modalités de paiement, le cabinet vous confirmera les options disponibles directement sur WhatsApp au +20 100 800 0172, selon votre plan de traitement.",
      ar: 'بخصوص طرق الدفع، ستؤكد لكم العيادة الخيارات المتاحة مباشرة عبر واتساب على +20 100 800 0172، حسب خطة علاجكم.',
      en: 'For payment options, the clinic will confirm what is available directly on WhatsApp at +20 100 800 0172, according to your treatment plan.',
    },
  },
  {
    id: 'insurance',
    cards: ['whatsapp'],
    match: /(تأمين|ضمان صحي|assurance|mutuelle|insurance|coverage|covered)/i,
    answers: {
      fr: "Je ne peux pas vous confirmer ici la prise en charge par une assurance : posez la question au cabinet sur WhatsApp au +20 100 800 0172 avec le nom de votre assurance, l'équipe vous répondra précisément.",
      ar: 'لا أستطيع تأكيد تغطية التأمين هنا: اسألوا العيادة عبر واتساب على +20 100 800 0172 مع ذكر اسم التأمين، وسيرد عليكم الفريق بدقة.',
      en: 'I cannot confirm insurance coverage here: ask the clinic on WhatsApp at +20 100 800 0172 with the name of your insurer, and the team will answer precisely.',
    },
  },
  {
    id: 'hours',
    cards: ['booking'],
    match: /(ساعات العمل|أوقات|وقتاش تفتحو|وقتاش تسكرو|متى تفتح|متى تغلق|horaire|heures d'ouverture|ouvert|quand ouvrez|opening hours|when.*open|what time)/i,
    answers: {
      fr: 'Le cabinet est ouvert du samedi au jeudi de 12:00 à 22:00. Pour réserver, écrivez-nous sur WhatsApp au +20 100 800 0172.',
      ar: 'العيادة مفتوحة من السبت إلى الخميس من 12:00 ظهراً إلى 22:00. للحجز، راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'The clinic is open Saturday to Thursday from 12:00 to 22:00. To book, message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'booking',
    cards: ['booking', 'whatsapp'],
    match: /(حجز|احجز|موعد|نبغي نجي|نحب نجي|rendez-vous|rendez vous|réserv|prendre rendez|book|appointment|booking|rdv)/i,
    answers: {
      fr: 'Vous pouvez réserver de trois façons : le formulaire de rendez-vous sur ce site, par téléphone, ou sur WhatsApp au +20 100 800 0172. Le cabinet confirmera votre rendez-vous par téléphone ou WhatsApp.',
      ar: 'يمكنكم الحجز بثلاث طرق: عبر نموذج المواعيد في هذا الموقع، أو بالهاتف، أو عبر واتساب على +20 100 800 0172. وستؤكد لكم العيادة الموعد بالهاتف أو واتساب.',
      en: 'You can book in three ways: the appointment form on this website, by phone, or on WhatsApp at +20 100 800 0172. The clinic will confirm your appointment by phone or WhatsApp.',
    },
  },
  {
    id: 'location',
    cards: ['maps'],
    match: /(أين|فين|العنوان|الموقع|تقع|يقع|كاين|كاينة|البلاصة|بلاصة|لوكيشن|كيفاش نوصل|نوصل|adresse|localisation|emplacement|où se trouve|où êtes-vous|où|comment venir|address|where|location|directions|how to get|position|gps)/i,
    answers: {
      fr: 'Le cabinet Algo Smile du Dr Hazem Tahoun se trouve au 26, rue Ahmed Fakhry, à côté de l\'hôpital Hassabo, 2e étage, Nasr City, Le Caire (près de City Stars). Vous trouverez sur ce site une carte et un bouton « Itinéraire » pour vous guider facilement jusqu\'à nous.',
      ar: 'توجد عيادة ألجو سمايل للدكتور حازم طاحون في 26 شارع أحمد فخري، بجوار مستشفى حسبو، الدور الثاني، مدينة نصر، القاهرة (قريب من سيتي ستارز). ستجدون في هذا الموقع خريطة وزر الاتجاهات ليدلكم على الطريق بسهولة.',
      en: "Algo Smile clinic is at 26 Ahmed Fakhry Street, beside Hassabo Hospital, 2nd floor, Nasr City, Cairo (near City Stars). This site has a map and a directions button to guide you to us easily.",
    },
  },
  {
    id: 'doctor',
    cards: ['whatsapp'],
    match: /(من هو الدكتور|مين الدكتور|خبرة الدكتور|الدكتور حازم|نبذة|qui est le docteur|qui est le dr|le docteur hazem|expérience du|who is the doctor|who is dr|doctor's experience|about the doctor)/i,
    answers: {
      fr: "Le Dr Hazem Tahoun est spécialiste en dentisterie esthétique et en implantologie (Université Ain Shams), avec plus de 20 ans d'expérience. Sa devise : « Your Smile, Our Passion ». Pour toute question sur votre cas, écrivez-nous sur WhatsApp au +20 100 800 0172.",
      ar: 'الدكتور حازم طاحون متخصص في تجميل وزراعة الأسنان (جامعة عين شمس)، بخبرة تزيد عن 20 عاماً. شعاره: «ابتسامتك تبدأ من Algo Smile». لأي سؤال عن حالتكم، راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'Dr Hazem Tahoun is a specialist in cosmetic and implant dentistry (Ain Shams University), with over 20 years of experience. His motto: "Your Smile, Our Passion". For any question about your case, message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'implants',
    cards: ['whatsapp'],
    match: /(زراعة|غرسة|implant)/i,
    answers: {
      fr: "L'implant dentaire remplace la racine d'une dent manquante par une solution fixe, stable et durable, sans toucher aux dents voisines. Pour savoir si c'est adapté à votre cas, le Dr Tahoun doit vous examiner : écrivez-nous sur WhatsApp au +20 100 800 0172.",
      ar: 'زراعة الأسنان تعوّض جذر السن المفقودة بحل ثابت ومستقر ودائم، دون المساس بالأسنان المجاورة. لمعرفة ما إذا كانت مناسبة لحالتكم، يجب أن يفحصكم الدكتور طاحون: راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'A dental implant replaces the root of a missing tooth with a fixed, stable and long-lasting solution, without touching the neighbouring teeth. To know if it suits your case, Dr Tahoun needs to examine you: message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'crowns',
    cards: ['whatsapp'],
    match: /(تيجان|تاج |تركيبات|تركيبة|فينير|عدسات الأسنان|قشرة|couronne|facette|veneer|crown)/i,
    answers: {
      fr: 'Le cabinet réalise couronnes et facettes prêtes en 24 heures, pour restaurer ou embellir votre sourire rapidement. Pour savoir ce qui convient à votre cas, le Dr Tahoun doit vous examiner : écrivez-nous sur WhatsApp au +20 100 800 0172.',
      ar: 'تقدم العيادة التيجان والفينير الجاهزة خلال 24 ساعة، لترميم ابتسامتكم أو تجميلها بسرعة. لمعرفة الأنسب لحالتكم، يجب أن يفحصكم الدكتور طاحون: راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'The clinic makes crowns and veneers ready in 24 hours, to restore or beautify your smile quickly. To know what suits your case, Dr Tahoun needs to examine you: message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'rootcanal',
    cards: ['whatsapp'],
    match: /(علاج جذور|علاج عصب|حشو عصب|traitement de racine|dévitalisation|root canal|endodont)/i,
    answers: {
      fr: 'Le cabinet propose le traitement de racine numérique en une seule séance, avec une technologie qui rend le soin plus rapide et plus confortable. Pour une évaluation de votre cas, écrivez-nous sur WhatsApp au +20 100 800 0172.',
      ar: 'توفر العيادة علاج الجذور الرقمي في جلسة واحدة، بتقنية تجعل العلاج أسرع وأكثر راحة. لتقييم حالتكم، راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'The clinic offers single-visit digital root canal treatment, with technology that makes the care faster and more comfortable. For an assessment of your case, message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'whitening',
    cards: ['whatsapp'],
    match: /(تبييض|بياض|blanchiment|whitening|whiter teeth)/i,
    answers: {
      fr: 'Nous proposons un blanchiment dentaire professionnel pour un sourire visiblement plus éclatant dès la première visite. Pour les détails et un rendez-vous, contactez-nous sur WhatsApp au +20 100 800 0172.',
      ar: 'نوفر تبييضاً احترافياً للأسنان لابتسامة أكثر إشراقاً بشكل ملحوظ منذ الزيارة الأولى. للتفاصيل وحجز موعد، تواصلوا معنا عبر واتساب على +20 100 800 0172.',
      en: 'We offer professional teeth whitening for a visibly brighter smile from the first visit. For details and an appointment, contact us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'gum',
    cards: ['whatsapp'],
    match: /(تبييض اللثة|توريد اللثة|تصبغ اللثة|blanchiment des gencives|gum whitening|gum depigmentation|dark gums)/i,
    answers: {
      fr: 'Le cabinet propose le blanchiment des gencives au laser, pour un sourire harmonieux et des gencives visiblement plus claires. Pour les détails, contactez-nous sur WhatsApp au +20 100 800 0172.',
      ar: 'توفر العيادة تبييض اللثة بالليزر، لابتسامة متناسقة ولثة أفتح بشكل ملحوظ. للتفاصيل، تواصلوا معنا عبر واتساب على +20 100 800 0172.',
      en: 'The clinic offers laser gum whitening, for a harmonious smile and visibly lighter gums. For details, contact us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'ortho',
    cards: ['whatsapp'],
    match: /(تقويم|أقواس|orthodont|appareil dentaire|braces|aligner|aligneur|invisalign)/i,
    answers: {
      fr: "Le cabinet propose l'orthodontie pour enfants et adultes : appareils classiques et aligneurs transparents pour aligner vos dents à tout âge. Pour une première évaluation, écrivez-nous sur WhatsApp au +20 100 800 0172.",
      ar: 'توفر العيادة تقويم الأسنان للأطفال والبالغين: أجهزة تقليدية ومصففات شفافة لتقويم أسنانكم في أي عمر. لتقييم أول، راسلونا عبر واتساب على +20 100 800 0172.',
      en: 'The clinic offers orthodontics for children and adults: classic braces and clear aligners to straighten your teeth at any age. For a first assessment, message us on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'kids',
    cards: ['whatsapp'],
    match: /(أطفال|طفلي|طفل |ابني|ابنتي|enfants|pour enfant|kids|children|my child|my son|my daughter)/i,
    answers: {
      fr: "Le cabinet accueille les enfants, notamment pour l'orthodontie (appareils et aligneurs adaptés à leur âge). Pour un soin précis pour votre enfant, décrivez-nous le besoin sur WhatsApp au +20 100 800 0172, l'équipe vous orientera.",
      ar: 'تستقبل العيادة الأطفال، خاصة في تقويم الأسنان (أجهزة ومصففات مناسبة لأعمارهم). لعلاج محدد لطفلكم، صفوا لنا الحاجة عبر واتساب على +20 100 800 0172، وسيرشدكم الفريق.',
      en: 'The clinic welcomes children, especially for orthodontics (braces and aligners suited to their age). For a specific treatment for your child, describe the need on WhatsApp at +20 100 800 0172 and the team will guide you.',
    },
  },
  {
    id: 'services',
    match: /(خدمات|علاجات|تخصصات|شنو كتديرو|اش كتديرو|services|soins|traitements|spécialités|treatments|what do you (do|offer)|your services)/i,
    answers: {
      fr: 'Le Dr Hazem Tahoun et son équipe proposent : implants dentaires, orthodontie, blanchiment laser des dents et des gencives, couronnes et facettes prêtes en 24 heures, traitement de racine numérique en une seule séance, et soins conservateurs (contrôles, détartrage, prévention). Que puis-je vous expliquer en détail ?',
      ar: 'يقدم الدكتور حازم طاحون وفريقه: زراعة الأسنان، تقويم الأسنان، تبييض الأسنان واللثة بالليزر، التيجان والفينير الجاهزة خلال 24 ساعة، علاج الجذور الرقمي في جلسة واحدة، والعلاجات التحفظية (فحوصات، تنظيف، وقاية). ما الذي تريدون أن أشرحه لكم بالتفصيل؟',
      en: 'Dr Hazem Tahoun and his team offer: dental implants, orthodontics, laser teeth and gum whitening, crowns and veneers ready in 24 hours, single-visit digital root canal treatment, and conservative care (check-ups, scaling, prevention). What would you like me to explain in detail?',
    },
  },
  {
    id: 'social',
    cards: ['facebook', 'instagram'],
    match: /(فيسبوك|انستغرام|انستا|تيك توك|سناب|facebook|instagram|tiktok|snapchat|r[ée]seaux|social|follow)/i,
    answers: {
      fr: 'Suivez le Dr Hazem Tahoun sur Facebook et Instagram : il y partage ses cas, ses conseils et les coulisses du cabinet. Touchez une carte ci-dessous pour ouvrir la page.',
      ar: 'تابعوا الدكتور حازم طاحون على فيسبوك وإنستغرام: ينشر هناك حالاته ونصائحه وكواليس العيادة. اضغطوا على إحدى البطاقتين أسفله لفتح الصفحة.',
      en: 'Follow Dr Hazem Tahoun on Facebook and Instagram: he shares his cases, tips and behind-the-scenes of the clinic there. Tap a card below to open the page.',
    },
  },
  {
    id: 'human',
    cards: ['phone', 'whatsapp'],
    match: /(أكلم شخص|اكلم شخص|موظف|شخص حقيقي|بشري|الدكتور نفسه|كلمني|parler à quelqu|un humain|une personne|real person|human|talk to someone|speak to the)/i,
    answers: {
      fr: "Bien sûr ! Je suis l'assistant automatique du cabinet, mais l'équipe vous répond directement sur WhatsApp au +20 100 800 0172 ou par téléphone — touchez une carte ci-dessous.",
      ar: 'بالطبع! أنا المساعد الآلي للعيادة، لكن الفريق يرد عليكم مباشرة عبر واتساب على +20 100 800 0172 أو بالهاتف — اضغطوا على إحدى البطاقتين أسفله.',
      en: 'Of course! I am the clinic\'s automated assistant, but the team replies to you directly on WhatsApp at +20 100 800 0172 or by phone — tap a card below.',
    },
  },
  {
    id: 'thanks',
    match: /(شكرا|مشكور|بارك الله|merci|thank|شكراً)/i,
    answers: {
      fr: "Avec grand plaisir ! N'hésitez pas si vous avez une autre question sur nos services, les horaires ou la réservation. Au plaisir de vous accueillir au cabinet.",
      ar: 'بكل سرور! لا تترددوا إن كان لديكم أي سؤال آخر عن خدماتنا أو أوقات العمل أو الحجز. نتطلع لاستقبالكم في العيادة.',
      en: 'You are very welcome! Do not hesitate if you have another question about our services, hours or booking. We look forward to welcoming you to the clinic.',
    },
  },
  {
    id: 'bye',
    match: /(مع السلامة|إلى اللقاء|الى اللقاء|باي|تصبح على خير|au revoir|à bientôt|bye|goodbye|see you)/i,
    answers: {
      fr: "Au revoir et merci de votre visite ! Pour réserver ou poser une question, le cabinet reste joignable sur WhatsApp au +20 100 800 0172.",
      ar: 'إلى اللقاء، وشكراً لزيارتكم! للحجز أو أي سؤال، تبقى العيادة رهن إشارتكم عبر واتساب على +20 100 800 0172.',
      en: 'Goodbye and thank you for visiting! To book or ask a question, the clinic stays reachable on WhatsApp at +20 100 800 0172.',
    },
  },
  {
    id: 'greeting',
    match: /(^\s*(سلام|السلام عليكم|مرحبا|صباح الخير|مساء الخير|أهلا|اهلا)[\s!.,،]*$)|(^\s*(bonjour|bonsoir|salut|hello|hi|hey)\b)/i,
    answers: {
      fr: 'Bonjour et bienvenue au cabinet du Dr Hazem Tahoun ! Je peux vous renseigner sur nos services, les implants, les horaires ou la prise de rendez-vous. Comment puis-je vous aider ?',
      ar: 'مرحباً بكم في عيادة الدكتور حازم طاحون! يمكنني إخباركم بخدماتنا، زراعة الأسنان، أوقات العمل أو كيفية حجز موعد. كيف يمكنني مساعدتكم؟',
      en: "Hello and welcome to Dr Hazem Tahoun's clinic! I can tell you about our services, implants, opening hours or how to book an appointment. How can I help you?",
    },
  },
]

const OFFLIST: Record<Lang, string> = {
  fr: "Merci pour votre message ! Pour cette question précise, l'équipe du cabinet vous répondra directement et rapidement sur WhatsApp au +20 100 800 0172 — touchez la carte ci-dessous. Je peux aussi vous renseigner ici sur nos services, les horaires, l'adresse ou la réservation.",
  ar: 'شكراً لرسالتكم! بخصوص هذا السؤال بالذات، سيرد عليكم فريق العيادة مباشرة وبسرعة عبر واتساب على +20 100 800 0172 — اضغطوا على البطاقة أسفله. ويمكنني أيضاً إخباركم هنا بخدماتنا أو أوقات العمل أو العنوان أو كيفية الحجز.',
  en: 'Thank you for your message! For this specific question, the clinic team will reply to you directly and quickly on WhatsApp at +20 100 800 0172 — tap the card below. I can also help you here with our services, hours, address or booking.',
}

export function faqAnswer(text: string, siteLang: Lang): FaqAnswer {
  const lang: Lang = ARABIC_SCRIPT.test(text) ? 'ar' : siteLang
  for (const item of FAQ) {
    if (item.match.test(text)) {
      return { text: item.answers[lang] || item.answers.fr, cards: item.cards || [], answerLang: lang }
    }
  }
  return { text: OFFLIST[lang], cards: ['whatsapp'], answerLang: lang }
}
