import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Database, BarChart3, Presentation, ArrowLeft } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "תכנון והגדרת מטרות",
    description: "שלב ההכנה הראשוני הכולל הגדרת מטרות המחקר, זיהוי קהל היעד ובחירת שיטות מחקר מתאימות.",
    icon: Target,
    url: "/phases/planning",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    number: 2,
    title: "איסוף נתונים",
    description: "ביצוע המחקר בפועל - ראיונות, סקרים, תצפיות ושיטות נוספות לאיסוף מידע מקהל היעד.",
    icon: Database,
    url: "/phases/data-collection",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    number: 3,
    title: "ניתוח נתונים",
    description: "עיבוד וניתוח המידע שנאסף, זיהוי דפוסים ותובנות, והפקת מסקנות מבוססות נתונים.",
    icon: BarChart3,
    url: "/phases/analysis",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
  },
  {
    number: 4,
    title: "הצגת ממצאים",
    description: "הכנת דוחות וסיכומים, הצגת התובנות לבעלי העניין והמלצות לפעולה.",
    icon: Presentation,
    url: "/phases/presentation",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
  },
];

const ResearchPhases = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        חזרה לדף הבית
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-foreground">יישום מעשי בארבעת שלבי המחקר</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          תחום מחקר המשתמשים (UXR) מורכב ממחזוריות מובנית הכוללת את השלבים העיקריים של תכנון המחקר, 
          איסוף נתונים, ניתוח והצגת ממצאים והמלצות.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          שימוש בבינה מלאכותית (ב״מ) אינו בא להחליף את עבודת החוקר.ת, אלא להעצים אותה על ידי שחרורו ממשימות שגרתיות חוזרות. 
          במקום ביצוע ידני, כלי הב״מ מאפשרים התמקדות בהסקת תובנות ובחשיבה אנושית.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          ניתן ליישם זאת כבר בשלב התכנון (כמו במיפוי וזיהוי נקודות בקרה מראש), דרך איסוף (כגון ניסוח שאלות ותרגולן לטובת דיוק) 
          וניתוח (בשימוש בכלי AI לאיתור תמות וסנטימנטים), ועד הצגת הממצאים (באמצעות יצירת אמצעים חזותיים להצגת מסקנות, 
          או יצירת אוטומציה בדיווח לבעלי עניין).
        </p>
        <p className="text-muted-foreground leading-relaxed font-medium">
          יחד עם זאת, ההמלצות לפעולה מדגישות כי השילוב האפקטיבי ביותר של ב״מ הוא כזה שנעשה מתוך חשיבה אסטרטגית ומוסרית, 
          מבלי לוותר על השיפוט האנושי, שמירה על ההקשר המחקרי ואחריות החוקר.ת לתוצרי הב״מ.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {phases.map((phase) => (
          <Link key={phase.number} to={phase.url} className="block group">
            <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br ${phase.color} ${phase.borderColor} border-2`}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-background/80 ${phase.borderColor} border-2`}>
                    <span className="text-xl font-bold text-foreground">{phase.number}</span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {phase.title}
                    </CardTitle>
                  </div>
                  <phase.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {phase.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-12 p-6 bg-muted/50 rounded-lg border">
        <h2 className="text-xl font-semibold mb-3 text-foreground">💡 טיפ חשוב</h2>
        <p className="text-muted-foreground leading-relaxed">
          בכל שלב במחקר, זכרו שה-AI הוא כלי עזר ולא תחליף לחשיבה ביקורתית ושיקול דעת מקצועי. 
          תמיד בדקו את הפלט, שמרו על פרטיות המשתתפים, והיו מודעים להטיות אפשריות.
        </p>
      </section>
    </div>
  );
};

export default ResearchPhases;
