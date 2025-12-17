import { AlertTriangle, TrendingDown, Database, Lock, Brain, ShieldAlert } from "lucide-react";

const challenges = [
  {
    id: "bias",
    icon: TrendingDown,
    title: "הטיה אלגוריתמית",
    titleEn: "Algorithmic Bias",
    description:
      "מערכות AI מאומנות לעיתים קרובות על נתונים המשקפים הטיות חברתיות קיימות, שלעתים משקפות אי-שוויון חברתי, דעות קדומות גזעיות, מגדריות או תרבותיות. שימוש מודע בכלים אלו עלול להוביל להנצחת אפליה בניתוח, תמלול או סיכום נתונים, ועלול להוציא אוכלוסיות מסוימות 'מחוץ לתמונה'.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    id: "hallucinations",
    icon: AlertTriangle,
    title: '"הזיות"',
    titleEn: "Hallucinations",
    description:
      'מערכות AI עלולות לייצר תוכן שנשמע סביר אך שגוי לחלוטין, כגון מידע, ציטוטים או סיכומים שאינם מבוססים על נתונים אמיתיים (של המשתתפים). זה יכול להתבטא במחקר ביצירת ממצאים שקריים או ייחוס ציטוטים למשתתפים שלא אמרו אותם.',
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    id: "provenance",
    icon: Database,
    title: "כשל במקור הנתונים",
    titleEn: "Data Provenance",
    description:
      "קיימים חשש משמעותי מפני שימוש לא מורשה בנתונים אישיים רגישים, דליפות מידע ופרופיילינג (ניתוח וזיהוי פרטים אישיים נסתרים), במיוחד בהיעדר הסכמה מדעת מלאה ושקיפות לגבי אופן השימוש בנתונים ובזהות הגופים המעבדים ומשתפים אותם. במחקר שבו לא נשמרת הפרטיות של המשתתפים, המידע עלול לשמש לאימון מודלים או לחשיפה של המשתתפים באופן שעלול להזיק להם.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    id: "blackbox",
    icon: Lock,
    title: "חוסר שקיפות",
    titleEn: "Black Box",
    description:
      "חוסר יכול להבין כיצד ה-AI הגיע למסקנה מסוימת או לזהות דפוס מסוים. במחקר, זה הופך את המשימה לאתגר מאוד - לנתח 'בעין אנושי' את התובנות האמיתיות החבויות במידע שנאסף, ועלול בעיקר להקשות על זיהוי הטיות נסתרות בתהליך הניתוח.",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
  },
  {
    id: "judgment",
    icon: Brain,
    title: "החלשת השיפוט האנושי ופגיעה באיכות המחקר",
    titleEn: "Impact on Human Judgment",
    description:
      'הסתמכות יתרה על AI עלולה לשחוק מיומנויות מחקר קריטיות, לפגוע בעומק ההבנה ובניואנסים שעוזרים להבין את התוכן. במחקר, זה עלול לגרום ליצירת תוכן גנרי ולהגביר "שחיקת המידע" כאשר AI מתבסס על תוכן שנוצר בעצמו.',
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    id: "security",
    icon: ShieldAlert,
    title: "סיכוני אבטחה ובטיחות",
    titleEn: "Security & Safety Risks",
    description:
      "שימוש בכלי AI מעלה סיכוני אבטחה משמעותיים, כולל דליפות מידע רגיש, פרצות אבטחה בשירותי ענן, וחשיפה לא מכוונת של נתוני מחקר. במחקר משתמשים, מידע אישי ורגיש עלול להיחשף לספקי שירות צד שלישי או לשמש לאימון מודלים ללא הסכמה. יש לנקוט באמצעי זהירות כגון הצפנה, אנונימיזציה ובחירת כלים עם מדיניות פרטיות ברורה.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
  },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">ליקויים ידועים ונפוצים בבינה מלאכותית</h1>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
            <p className="text-xl leading-relaxed">
              מאז כניסתם המואצת של כלים מבוססי הבינה המלאכותית (AI) והבינה המלאכותית הגנרטיבית לחיינו
              ולעבודה היום-יומית, ובפרט בתחומי ההשכלה הגבוהה והמחקר, עלו חששות ואתגרים אתיים. למרות
              הפוטנציאל בהן - לקידום למידה, ייעול משימות וגילוי תובנות, טכנולוגיות אלו מציגות גם
              סיכונים ניכרים הדורשים התייחסות דחופה ואחראית.
            </p>
            <p className="text-xl leading-relaxed">
              בין האתגרים הבולטים, אלו שהוכיחו פגיעה באדם והדגישו את הצורך הדחוף בגיבוש הנחיות אתיות:
            </p>
          </div>
        </div>

        {/* Challenges List */}
        <div className="space-y-6">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.id}
                className={`challenge-card ${challenge.bgColor} hover:shadow-[var(--shadow-strong)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${challenge.color} text-white flex-shrink-0`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{challenge.title}</h2>
                      <p className="text-lg text-muted-foreground font-medium">({challenge.titleEn})</p>
                    </div>
                    <p className="text-foreground/90 leading-relaxed text-lg">{challenge.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="card-elevated p-8 bg-destructive/5 border-r-4 border-r-destructive">
          <h2 className="text-2xl font-bold text-foreground mb-4">חשיבות המודעות לאתגרים</h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            הכרת האתגרים הללו והבנתם מאפשרת לנו לפעול באופן מושכל ואחראי בעבודה עם כלי AI. במסגרת
            המדריך, נציג המלצות מעשיות כיצד להתמודד עם כל אחד מהאתגרים הללו בשלבי המחקר השונים.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
