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
  },
  {
    number: 2,
    title: "איסוף נתונים",
    description: "ביצוע המחקר בפועל - ראיונות, סקרים, תצפיות ושיטות נוספות לאיסוף מידע מקהל היעד.",
    icon: Database,
    url: "/phases/data-collection",
  },
  {
    number: 3,
    title: "ניתוח נתונים",
    description: "עיבוד וניתוח המידע שנאסף, זיהוי דפוסים ותובנות, והפקת מסקנות מבוססות נתונים.",
    icon: BarChart3,
    url: "/phases/analysis",
  },
  {
    number: 4,
    title: "הצגת ממצאים",
    description: "הכנת דוחות וסיכומים, הצגת התובנות לבעלי העניין והמלצות לפעולה.",
    icon: Presentation,
    url: "/phases/presentation",
  },
];

const ResearchPhases = () => {
  return (
    <div className="min-h-screen bg-background py-spacing-lg px-spacing-md" dir="rtl" lang="he">
      <div className="max-w-content-width mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-spacing-xs text-text-secondary hover:text-foreground transition-colors mb-spacing-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          חזרה לדף הבית
        </Link>

        <header className="mb-spacing-xl">
          <h1 className="text-h1 font-bold mb-spacing-md text-foreground">יישום מעשי בארבעת שלבי המחקר</h1>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            תחום מחקר המשתמשים (UXR) מורכב ממחזוריות מובנית הכוללת את השלבים העיקריים של תכנון המחקר, 
            איסוף נתונים, ניתוח והצגת ממצאים והמלצות.
          </p>
        </header>

        <section className="mb-spacing-xl space-y-spacing-md">
          <p className="text-text-secondary leading-relaxed">
            שימוש בבינה מלאכותית (ב״מ) אינו בא להחליף את עבודת החוקר.ת, אלא להעצים אותה על ידי שחרורו ממשימות שגרתיות חוזרות. 
            במקום ביצוע ידני, כלי הב״מ מאפשרים התמקדות בהסקת תובנות ובחשיבה אנושית.
          </p>
          <p className="text-text-secondary leading-relaxed">
            ניתן ליישם זאת כבר בשלב התכנון (כמו במיפוי וזיהוי נקודות בקרה מראש), דרך איסוף (כגון ניסוח שאלות ותרגולן לטובת דיוק) 
            וניתוח (בשימוש בכלי AI לאיתור תמות וסנטימנטים), ועד הצגת הממצאים (באמצעות יצירת אמצעים חזותיים להצגת מסקנות, 
            או יצירת אוטומציה בדיווח לבעלי עניין).
          </p>
          <p className="text-text-secondary leading-relaxed font-medium">
            יחד עם זאת, ההמלצות לפעולה מדגישות כי השילוב האפקטיבי ביותר של ב״מ הוא כזה שנעשה מתוך חשיבה אסטרטגית ומוסרית, 
            מבלי לוותר על השיפוט האנושי, שמירה על ההקשר המחקרי ואחריות החוקר.ת לתוצרי הב״מ.
          </p>
        </section>

        <div className="grid gap-spacing-lg md:grid-cols-2">
          {phases.map((phase) => (
            <Link key={phase.number} to={phase.url} className="block group">
              <Card className="h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-spacing-md">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30">
                      <span className="text-h4 font-bold text-primary">{phase.number}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-h4 group-hover:text-primary transition-colors">
                        {phase.title}
                      </CardTitle>
                    </div>
                    <phase.icon className="h-8 w-8 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <section className="mt-spacing-xl p-spacing-lg bg-sidebar rounded-lg border border-border">
          <h2 className="text-h4 font-semibold mb-spacing-sm text-foreground">💡 טיפ חשוב</h2>
          <p className="text-text-secondary leading-relaxed">
            בכל שלב במחקר, זכרו שה-AI הוא כלי עזר ולא תחליף לחשיבה ביקורתית ושיקול דעת מקצועי. 
            תמיד בדקו את הפלט, שמרו על פרטיות המשתתפים, והיו מודעים להטיות אפשריות.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ResearchPhases;
