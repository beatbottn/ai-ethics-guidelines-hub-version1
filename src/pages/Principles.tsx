import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  AutonomyIcon,
  NonMaleficenceIcon,
  BeneficenceIcon,
  JusticeIcon,
} from "@/components/icons/NavIcons";
import ethicsPoster from "@/assets/ethics-poster.jpeg";

const principles = [
  {
    id: "autonomy",
    icon: AutonomyIcon,
    title: "אוטונומיה",
    titleEn: "Autonomy",
    definition:
      "כיבוד חירות ובחירת האדם: זכותו של אדם לקבל החלטות מתוך רצון חופשי, באופן עצמאי. עיקרון זה מחייב לכבד את הסכמה מדעת של אדם, המתבטא במחקר, בהשלכות. זהו עיקרון המצריך מידע מלא ובהבנה מלאה על ההשלכות.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconColor: "text-[#788EFF]",
  },
  {
    id: "nonmaleficence",
    icon: NonMaleficenceIcon,
    title: "אי-גרימת נזק",
    titleEn: "Non-Maleficence",
    definition:
      'זהו הכלל הבסיסי "קודם כל, אל תזיק" - להימנע מפגיעה או נזק, בין אם מכוון ובין אם בלתי מכוון. המשמעות במחקר היא לנקוט זהירות באמצעות חשיבה ביקורתית. יש להגן על משתתפי המחקר מפני נזק כלכלי, חברתי, פסיכולוגי או פיזי, ולמנוע שימוש לרעה או שגוי בנתונים, בפרטיות, או פגיעה במידע.',
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconColor: "text-[#4EC9EF]",
  },
  {
    id: "beneficence",
    icon: BeneficenceIcon,
    title: "תרומה לרווחה",
    titleEn: "Beneficence",
    definition:
      "עיקרון זה מחייב אותנו לפעול למען הרווחה, הבטיחות והאינטרסים המיטביים של האדם. המשמעות במחקר היא לוודא שיש תועלת פוטנציאלית מהמחקר, ושכלל הסיכונים ממוזער, כך שהתועלת עולה באופן ברור על הסיכונים למשתתפים ולחברה.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    iconColor: "text-[#05D9DA]",
  },
  {
    id: "justice",
    icon: JusticeIcon,
    title: "הוגנות וצדק",
    titleEn: "Fairness & Justice",
    definition:
      "עיקרון הצדק עוסק בהגינות, שוויון וחלוקה הוגנת של משאבים, הטבות ונטלים. בהקשר המחקר, זה אומר: הוגנות בבחירת משתתפים - לוודא שאין ניצול של קבוצות פגיעות או אפליה בלתי הוגנת; חלוקה הוגנת של תועלת - לוודא שהתועלת מהמחקר תגיע בצורה הוגנת גם לאוכלוסיות שנחקרו; שקיפות ואחריות - הקפדה על תהליך הוגן ושקוף.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    iconColor: "text-[#D056CF]",
  },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold text-foreground">על מה חשוב לשמור?</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            לכולנו יש מצפן מוסרי שמנחה אותנו לשמור על אנשים אחרים ועל עצמנו. כשאנחנו עובדים עם AI במחקר משתמשים, אותו
            מצפן הופך להיות קריטי עוד יותר. הנה ארבעה עקרונות אתיקה יסודיים שכדאי להכיר ולשמור עליהם - ההמלצות במדריך
            גובשו על בסיס העקרונות הללו:
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.id}
                className={`card-elevated ${principle.bgColor} p-8 space-y-4 hover:shadow-[var(--shadow-strong)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-lg bg-white/80 dark:bg-black/20 ${principle.iconColor}`}>
                    <Icon className="h-12 w-12" />
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

        {/* Two Side-by-Side Containers */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Right Container - Poster */}
          <div className="card-elevated p-8 bg-primary/5 flex flex-col h-full">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">שמרו על המצפן המוסרי תמיד במודעות</h2>
              <div className="flex gap-6 items-start">
                <img
                  src={ethicsPoster}
                  alt="פוסטר עקרונות אתיים למחקר משתמשים"
                  className="w-48 rounded-lg shadow-md flex-shrink-0"
                />
                <p className="text-foreground/90 leading-relaxed text-lg">
                  תרצו לשמור על העקרונות תמיד מול העיניים, וגם להתפנק במשהו יפה למשרד?
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="button"
                size="lg"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1pz5_uHE6fhjm9sXhWnvCHwcVeY9CfT9S/view?usp=sharing', '_blank');
                }}
                className="w-full gap-2"
              >
                <Download className="h-5 w-5" />
                הורידו את התמונה ברזולוציה מלאה
              </Button>
            </div>
          </div>

          {/* Left Container - CTA */}
          <div className="card-elevated p-8 bg-primary/5 flex flex-col h-full">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">מעקרונות ליישום</h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                ארבעת עקרונות אלו הם הבסיס לעבודה אחראית עם AI במחקר משתמשים.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                במדריך המעשי תמצאו כיצד ליישם אותם בכל שלב: מתכנון המחקר ועד הצגת הממצאים, עם המלצות קונקרטיות ופרומפטים
                לדוגמה.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="w-full gap-2">
                <Link to="/phases">
                  התחילו במדריך המעשי
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
