import { Shield, Heart, Scale, User } from "lucide-react";

const principles = [
  {
    id: "autonomy",
    icon: User,
    title: "אוטונומיה",
    titleEn: "Autonomy",
    definition:
      "כיבוד חירות ובחירת האדם: זכותו של אדם לקבל החלטות מתוך רצון חופשי, באופן עצמאי. עיקרון זה מחייב לכבד את הסכמה מדעת של אדם, המתבטא במחקר, בהשלכות. זהו עיקרון המצריך מידע מלא ובהבנה מלאה על ההשלכות.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    id: "nonmaleficence",
    icon: Shield,
    title: "הימנעות מפגיעה",
    titleEn: "Non-Maleficence",
    definition:
      'זהו הכלל הבסיסי "קודם כל, אל תזיק" - להימנע מפגיעה או נזק, בין אם מכוון ובין אם בלתי מכוון. המשמעות במחקר היא לנקוט זהירות באמצעות חשיבה ביקורתית. יש להגן על משתתפי המחקר מפני נזק כלכלי, חברתי, פסיכולוגי או פיזי, ולמנוע שימוש לרעה או שגוי בנתונים, בפרטיות, או פגיעה במידע.',
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    id: "beneficence",
    icon: Heart,
    title: "תרומה לרווחה",
    titleEn: "Beneficence",
    definition:
      "עיקרון זה מחייב אותנו לפעול למען הרווחה, הבטיחות והאינטרסים המיטביים של האדם. המשמעות במחקר היא לוודא שיש תועלת פוטנציאלית מהמחקר, ושכלל הסיכונים ממוזער, כך שהתועלת עולה באופן ברור על הסיכונים למשתתפים ולחברה.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    borderColor: "border-pink-200 dark:border-pink-800",
  },
  {
    id: "justice",
    icon: Scale,
    title: "צדק: הגינות וחלוקה הוגנת של משאבים",
    titleEn: "Justice",
    definition:
      "עיקרון הצדק עוסק בהגינות, שוויון וחלוקה הוגנת של משאבים, הטבות ונטלים. בהקשר המחקר, זה אומר: הוגנות בבחירת משתתפים - לוודא שאין ניצול של קבוצות פגיעות או אפליה בלתי הוגנת; חלוקה הוגנת של תועלת - לוודא שהתועלת מהמחקר תגיע בצורה הוגנת גם לאוכלוסיות שנחקרו; שקיפות ואחריות - הקפדה על תהליך הוגן ושקוף.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">ארבעה עקרונות אתיים יסוד</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
            לצורך בניית הבסיס המשותף, הנה סקירה קצרה של ארבעת עקרונות היסוד האוניברסליים: מרבית
            המסגרות האתיות מתבססות עליהם.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.id}
                className={`card-elevated ${principle.bgColor} border-r-4 ${principle.borderColor} p-8 space-y-4 hover:shadow-[var(--shadow-strong)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${principle.color} text-white`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-1">{principle.title}</h2>
                    <p className="text-lg text-muted-foreground font-medium">({principle.titleEn})</p>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed text-lg">{principle.definition}</p>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="card-elevated p-8 bg-primary/5 border-r-4 border-r-primary">
          <h2 className="text-2xl font-bold text-foreground mb-4">שמירה על המצפן האתי</h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            העקרונות הללו, והמצפן האתי מזמינים אותנו להפעיל חשיבה ביקורתית בכל אחד משלבי המחקר
            והעשייה שלנו בתחום החדשנות - לפעול מתוך כוונה ושמירה על העבודה בתהליך.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
