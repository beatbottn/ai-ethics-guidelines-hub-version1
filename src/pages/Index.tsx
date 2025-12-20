import { Link } from "react-router-dom";
import { BookOpen, AlertTriangle, ClipboardList, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted" dir="rtl" lang="he">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl text-foreground font-bold max-w-4xl mx-auto">
            שימוש אתי ב-AI במחקר משתמשים
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            מדריך ידע מעשי עם כלים והמלצות למשימות מחקריות - לכל מי שעוסקות ועוסקים בחווית משתמשים
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            נכתב על ידי: <span className="font-semibold">סיונה שרלג</span> בשיתוף עם{" "}
            <span className="font-semibold">נעמה שפירא</span> | ספטמבר 2025
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="card-elevated p-8 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">מבוא</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              בעידן הדיגיטלי המתפתח, כלי הבינה המלאכותית (AI) הופכים לחלק בלתי נפרד מעבודת חוקרי המשתמשים. AI מציע
              יכולות חדשות לייעול המחקר והעמקת התובנות - מ-ChatGPT לניתוח ראיונות ועד לכלים מתקדמים לויזואליזציה של
              נתונים.
            </p>
            <p>
              עם זאת, השימוש בטכנולוגיות אלו מעלה שאלות אתיות חשובות: כיצד נוודא שהמחקר שלנו נשאר מהימן ואובייקטיבי? איך
              נמנע מהטיות שעלולות להשפיע על תוצרי המחקר? כיצד נגן על פרטיות משתתפי המחקר והארגון שמטעמו מבוצע המחקר?
            </p>
            <p>
              מדריך זה נועד לספק כלים מעשיים לחוקרות וחוקרי משתמשים, מעצבות ומעצבי UX ומנהלות ומנהלי צוותים לשימוש אתי
              ואחראי בכלי AI בכל שלבי המחקר.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Ethical Principles Card */}
          <Link to="/principles" className="group">
            <div className="principle-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">עקרונות אתיים</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                ארבעה עקרונות יסוד אוניברסליים: אוטונומיה, אי-גרימת נזק, עשיית טוב וצדק
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* AI Challenges Card */}
          <Link to="/challenges" className="group">
            <div className="challenge-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">אתגרי AI</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                חמישה אתגרים מרכזיים: הטיה אלגוריתמית, הזיות, כשל במקור נתונים, חוסר שקיפות והחלשת השיפוט האנושי
              </p>
              <div className="mt-4 flex items-center text-destructive font-medium group-hover:gap-2 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Research Phases Card */}
          <Link to="/phases/planning" className="group">
            <div className="principle-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">שלבי המחקר</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                המלצות מפורטות לארבעה שלבים: תכנון, איסוף נתונים, ניתוח והצגת ממצאים
              </p>
              <div className="mt-4 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                <span>התחילו כאן</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="card-elevated bg-gradient-to-bl from-primary/5 to-accent/5 p-8 border-r-4 border-r-primary">
          <h2 className="text-2xl font-bold text-foreground mb-4">עקרונות המנחים את השימוש ב-AI במחקר</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              <strong>שימוש ב-AI</strong> במחקר משתמשים בא להעצים את עבודת החוקר.ת ידי שחרורו מהמשימות שגרתיות וחוזרות,
              ובכך מאפשרים התמקדות בהסקת תובנות ובחשיבה אנושית.
            </p>
            <p>
              <strong>AI משמש ככלי משלים</strong> ולא כמחליף לעבודת החוקר.ת. כדי לפעול מהמצפן המוסרי שלנו, ולשמירה על
              עקרונות האתיקה - אוטונומיה, אי גרימת פגיעה, עשיית טוב וצדק - עלינו להבטיח שהשימוש ב-AI נשאר כלי עזר ותמיכה
              בלבד.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/principles">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                קראו על העקרונות המלאים
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
