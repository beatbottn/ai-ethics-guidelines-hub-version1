import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import autonomyIcon from "@/assets/icons/autonomy.svg";
import nonHarmIcon from "@/assets/icons/non-harm.svg";
import justiceIcon from "@/assets/icons/justice.svg";
import beneficenceIcon from "@/assets/icons/beneficence.svg";

const principles = [
  {
    id: "autonomy",
    icon: autonomyIcon,
    title: "אוטונומיה",
    titleEn: "Autonomy",
    definition:
      "כיבוד חירות ובחירת האדם: זכותו של אדם לקבל החלטות מתוך רצון חופשי, באופן עצמאי. עיקרון זה מחייב לכבד את הסכמה מדעת של אדם, המתבטא במחקר, בהשלכות. זהו עיקרון המצריך מידע מלא ובהבנה מלאה על ההשלכות.",
    color: "#788EFF",
    bgColor: "bg-[#788EFF]/10",
    borderColor: "border-[#788EFF]",
  },
  {
    id: "nonmaleficence",
    icon: nonHarmIcon,
    title: "אי-גרימת נזק",
    titleEn: "Non-Maleficence",
    definition:
      'זהו הכלל הבסיסי "קודם כל, אל תזיק" - להימנע מפגיעה או נזק, בין אם מכוון ובין אם בלתי מכוון. המשמעות במחקר היא לנקוט זהירות באמצעות חשיבה ביקורתית. יש להגן על משתתפי המחקר מפני נזק כלכלי, חברתי, פסיכולוגי או פיזי, ולמנוע שימוש לרעה או שגוי בנתונים, בפרטיות, או פגיעה במידע.',
    color: "#4EC9EF",
    bgColor: "bg-[#4EC9EF]/10",
    borderColor: "border-[#4EC9EF]",
  },
  {
    id: "beneficence",
    icon: beneficenceIcon,
    title: "תרומה לרווחה",
    titleEn: "Beneficence",
    definition:
      "עיקרון זה מחייב אותנו לפעול למען הרווחה, הבטיחות והאינטרסים המיטביים של האדם. המשמעות במחקר היא לוודא שיש תועלת פוטנציאלית מהמחקר, ושכלל הסיכונים ממוזער, כך שהתועלת עולה באופן ברור על הסיכונים למשתתפים ולחברה.",
    color: "#05D9DA",
    bgColor: "bg-[#05D9DA]/10",
    borderColor: "border-[#05D9DA]",
  },
  {
    id: "justice",
    icon: justiceIcon,
    title: "הוגנות וצדק",
    titleEn: "Fairness & Justice",
    definition:
      "עיקרון הצדק עוסק בהגינות, שוויון וחלוקה הוגנת של משאבים, הטבות ונטלים. בהקשר המחקר, זה אומר: הוגנות בבחירת משתתפים - לוודא שאין ניצול של קבוצות פגיעות או אפליה בלתי הוגנת; חלוקה הוגנת של תועלת - לוודא שהתועלת מהמחקר תגיע בצורה הוגנת גם לאוכלוסיות שנחקרו; שקיפות ואחריות - הקפדה על תהליך הוגן ושקוף.",
    color: "#cd56cc",
    bgColor: "bg-ethics/10",
    borderColor: "border-ethics",
  },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-background py-32 px-24 lg:px-64" dir="rtl" lang="he">
      <div className="max-w-page mx-auto space-y-32">
        {/* Header */}
        <div className="space-y-16">
          <h1 className="text-h1 text-foreground">על מה חשוב לשמור?</h1>
          <p className="text-body text-muted-foreground leading-relaxed max-w-content">
            לכולנו יש מצפן מוסרי שמנחה אותנו לשמור על אנשים אחרים ועל עצמנו. כשאנחנו עובדים עם AI במחקר משתמשים, אותו
            מצפן הופך להיות קריטי עוד יותר. הנה ארבעה עקרונות אתיקה יסודיים שכדאי להכיר ולשמור עליהם - ההמלצות במדריך
            גובשו על בסיס העקרונות הללו:
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-24">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className={`card-elevated ${principle.bgColor} border-r-4 ${principle.borderColor} p-24 space-y-16 hover:shadow-[var(--shadow-strong)] transition-all duration-300`}
            >
              <div className="flex items-start gap-16">
                <div 
                  className="p-16 rounded-card flex items-center justify-center"
                  style={{ backgroundColor: `${principle.color}20` }}
                >
                  <img src={principle.icon} alt={principle.title} className="h-40 w-40" />
                </div>
                <div className="flex-1">
                  <h2 className="text-h2 text-foreground mb-4">{principle.title}</h2>
                  <p className="text-body text-muted-foreground font-medium">({principle.titleEn})</p>
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed text-body">{principle.definition}</p>
            </div>
          ))}
        </div>

        {/* Two Side-by-Side Containers */}
        <div className="grid md:grid-cols-2 gap-24 items-stretch">
          {/* Right Container - Poster */}
          <div className="card-elevated p-24 bg-primary/5 border-r-4 border-r-primary flex flex-col h-full">
            <div className="flex-1 space-y-16">
              <h2 className="text-h2 text-foreground">שמרו על המצפן המוסרי תמיד במודעות</h2>
              <div className="flex gap-24 items-start">
                <img
                  src="/images/sivana-poster.png"
                  alt="פוסטר עקרונות אתיים למחקר משתמשים"
                  className="w-48 rounded-card shadow-md flex-shrink-0"
                />
                <p className="text-foreground/90 leading-relaxed text-body">
                  תרצו לשמור על העקרונות תמיד מול העיניים, וגם להתפנק במשהו יפה למשרד?
                </p>
              </div>
            </div>

            <div className="pt-16">
              <Button
                type="button"
                size="lg"
                onClick={async () => {
                  const res = await fetch("/images/sivana-poster.png");
                  const blob = await res.blob();
                  const url = URL.createObjectURL(blob);

                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "ethical-principles-poster.png";
                  document.body.appendChild(link);
                  link.click();
                  link.remove();

                  URL.revokeObjectURL(url);
                }}
                className="w-full gap-8"
              >
                <Download className="h-5 w-5" />
                הורידו את התמונה ברזולוציה מלאה
              </Button>
            </div>
          </div>

          {/* Left Container - CTA */}
          <div className="card-elevated p-24 bg-primary/5 border-r-4 border-r-primary flex flex-col h-full">
            <div className="flex-1 space-y-16">
              <h2 className="text-h2 text-foreground">מעקרונות ליישום</h2>
              <p className="text-foreground/90 leading-relaxed text-body">
                ארבעת עקרונות אלו הם הבסיס לעבודה אחראית עם AI במחקר משתמשים.
              </p>
              <p className="text-foreground/90 leading-relaxed text-body">
                במדריך המעשי תמצאו כיצד ליישם אותם בכל שלב: מתכנון המחקר ועד הצגת הממצאים, עם המלצות קונקרטיות ופרומפטים
                לדוגמה.
              </p>
            </div>

            <div className="pt-16">
              <Button asChild size="lg" className="w-full gap-8">
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