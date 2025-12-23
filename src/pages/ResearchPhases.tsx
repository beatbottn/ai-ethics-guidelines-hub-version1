import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Phase1Icon, Phase2Icon, Phase3Icon, Phase4Icon } from "@/components/icons/NavIcons";

const phases = [
  {
    number: 1,
    title: "תכנון והגדרת מטרות",
    description: "שלב ההכנה הראשוני הכולל הגדרת מטרות המחקר, זיהוי קהל היעד ובחירת שיטות מחקר מתאימות.",
    icon: Phase1Icon,
    url: "/phases/planning",
  },
  {
    number: 2,
    title: "איסוף נתונים",
    description: "ביצוע המחקר בפועל - ראיונות, סקרים, תצפיות ושיטות נוספות לאיסוף מידע מקהל היעד.",
    icon: Phase2Icon,
    url: "/phases/data-collection",
  },
  {
    number: 3,
    title: "ניתוח נתונים",
    description: "עיבוד וניתוח המידע שנאסף, זיהוי דפוסים ותובנות, והפקת מסקנות מבוססות נתונים.",
    icon: Phase3Icon,
    url: "/phases/analysis",
  },
  {
    number: 4,
    title: "הצגת ממצאים",
    description: "הכנת דוחות וסיכומים, הצגת התובנות לבעלי העניין והמלצות לפעולה.",
    icon: Phase4Icon,
    url: "/phases/presentation",
  },
];

const ResearchPhases = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">

      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-foreground">יישום מעשי בארבעת שלבי המחקר</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
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
          <Link key={phase.number} to={phase.url} className="group">
            <div className="bg-white border border-[#818df8] rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#D6FFFF] text-[#3f4555] flex items-center justify-center">
                  <phase.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground">{phase.number}.</span>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {phase.description}
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
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
