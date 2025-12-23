import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CompassIcon, DangerTriangleIcon, ChecklistIcon } from "@/components/icons/NavIcons";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted" dir="rtl" lang="he">
      {/* Hero Section */}
      <section className="pt-10 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl text-foreground font-bold max-w-4xl mx-auto">
            שימוש אתי ב-AI במחקר משתמשים
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
            מדריך ידע מעשי עם כלים והמלצות למשימות מחקריות - לכל מי שעוסקות ועוסקים בחווית משתמשים
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            נכתב על ידי: <span className="font-semibold">סיונה שרלג</span> בשיתוף עם{" "}
            <span className="font-semibold">נעמה שפירא</span> | ספטמבר 2025
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="pt-8 md:pt-10 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="card-elevated p-8 space-y-6 mb-10 md:mb-12">
          <h2 className="text-3xl font-bold text-foreground">AI במחקר: ההזדמנות והאחריות</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              כלי בינה מלאכותית (AI) הפכו לחלק מעבודת חוקרי משתמשים – הם מסייעים בניתוח ראיונות, עיבוד נתונים והפקת
              תובנות. אבל עם ההזדמנויות מתעוררות גם שאלות אתיות חשובות:
            </p>
            <p>
              איך נוודא שהמחקר נשאר מהימן ואובייקטיבי? כיצד נגן על פרטיות המשתתפים והארגון? איך נמנע הטיות שעלולות לעוות
              את הממצאים?
            </p>
            <p>
              בכל שלב במחקר - מתכנון ועד הצגת ממצאים - נלמד להטמיע שיקולים אתיים ולשמור על אחריות מקצועית כלפינו כאנשי
              ונשות מקצוע, וכלפי משתמשי המוצרים שניצור.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Ethical Principles Card */}
          <Link to="/principles" className="group">
            <div className="bg-white border border-[#818df8] rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#D6FFFF] text-[#3f4555]">
                  <CompassIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">על מה חשוב שנשמור?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                אי-גרימת נזק, הוגנות וצדק, שמירה על אוטונומיה, ועשיית טוב: העקרונות שינחו אותנו בכל שלב בהבנת המשתמשים
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* AI Challenges Card */}
          <Link to="/challenges" className="group">
            <div className="bg-white border border-[#818df8] rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#D6FFFF] text-[#3f4555]">
                  <DangerTriangleIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">אתגרי AI</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                הסיכונים שחשוב להכיר: כאשר AI טועה, מטעה, או מחליש את המחקר
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>קראו עוד</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Research Phases Card */}
          <Link to="/phases/planning" className="group">
            <div className="bg-white border border-[#818df8] rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#D6FFFF] text-[#3f4555]">
                  <ChecklistIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">המדריך לפי שלבים</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                מתכנון מחקר ועד הצגת המלצות: איך לעבוד עם AI בצורה אחראית בכל שלב
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>התחילו כאן</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;