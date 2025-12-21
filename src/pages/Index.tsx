import { Link } from "react-router-dom";
import { BookOpen, AlertTriangle, ClipboardList, ArrowLeft } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="he">
      {/* Hero Section */}
      <section className="py-64 px-24 lg:px-64 max-w-page mx-auto">
        <div className="text-center space-y-24">
          <h1 className="text-h1 text-foreground max-w-content mx-auto">
            שימוש אתי ב-AI במחקר משתמשים
          </h1>
          <p className="text-body text-muted-foreground max-w-content mx-auto leading-relaxed">
            מדריך ידע מעשי עם כלים והמלצות למשימות מחקריות - לכל מי שעוסקות ועוסקים בחווית משתמשים
          </p>
          <div className="pt-16 text-caption text-muted-foreground">
            נכתב על ידי: <span className="font-semibold">סיונה שרלג</span> בשיתוף עם{" "}
            <span className="font-semibold">נעמה שפירא</span> | ספטמבר 2025
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-24 lg:px-64 max-w-content-max mx-auto">
        <div className="card-elevated p-24 space-y-24">
          <h2 className="text-h2 text-foreground">AI במחקר: ההזדמנות והאחריות</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-16">
            <p className="text-body">
              כלי בינה מלאכותית (AI) הפכו לחלק מעבודת חוקרי משתמשים – הם מסייעים בניתוח ראיונות, עיבוד נתונים והפקת
              תובנות. אבל עם ההזדמנויות מתעוררות גם שאלות אתיות חשובות:
            </p>
            <p className="text-body">
              איך נוודא שהמחקר נשאר מהימן ואובייקטיבי? כיצד נגן על פרטיות המשתתפים והארגון? איך נמנע הטיות שעלולות לעוות
              את הממצאים?
            </p>
            <p className="text-body">
              בכל שלב במחקר - מתכנון ועד הצגת ממצאים - נלמד להטמיע שיקולים אתיים ולשמור על אחריות מקצועית כלפינו כאנשי
              ונשות מקצוע, וכלפי משתמשי המוצרים שניצור.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-32 px-24 lg:px-64 max-w-page mx-auto">
        <div className="grid md:grid-cols-3 gap-24">
          {/* Ethical Principles Card */}
          <Link to="/principles" className="group">
            <div className="principle-card h-full flex flex-col">
              <div className="flex items-center gap-12 mb-16">
                <div className="p-12 rounded-card bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-h3">על מה חשוב שנשמור?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow text-body">
                אי-גרימת נזק, הוגנות וצדק, שמירה על אוטונומיה, ועשיית טוב: העקרונות שינחו אותנו בכל שלב בהבנת המשתמשים
              </p>
              <div className="mt-16 flex items-center text-primary font-medium group-hover:gap-8 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* AI Challenges Card */}
          <Link to="/challenges" className="group">
            <div className="challenge-card h-full flex flex-col">
              <div className="flex items-center gap-12 mb-16">
                <div className="p-12 rounded-card bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-h3">אתגרי AI</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow text-body">
                הסיכונים שחשוב להכיר: כאשר AI טועה, מטעה, או מחליש את המחקר{" "}
              </p>
              <div className="mt-16 flex items-center text-destructive font-medium group-hover:gap-8 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Research Phases Card */}
          <Link to="/phases/planning" className="group">
            <div className="principle-card h-full flex flex-col">
              <div className="flex items-center gap-12 mb-16">
                <div className="p-12 rounded-card bg-accent/10 text-accent">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="text-h3">המדריך לפי שלבים</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow text-body">
                מתכנון מחקר ועד הצגת המלצות: איך לעבוד עם AI בצורה אחראית בכל שלב
              </p>
              <div className="mt-16 flex items-center text-accent font-medium group-hover:gap-8 transition-all">
                <span>התחילו כאן</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;