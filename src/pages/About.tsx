import { Linkedin, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">אודות המדריך</h1>
          <p className="text-lg text-foreground/90 leading-relaxed">
            מדריך זה נועד לספק כלים מעשיים לחוקרות וחוקרי משתמשים, מעצבות ומעצבי UX ומנהלות ומנהלי צוותים לשימוש אתי
            ואחראי בכלי AI בכל שלבי המחקר. המדריך מדגיש את החשיבות של שמירה על המצפן האתי תוך כדי ניצול היתרונות שמציעה
            הטכנולוגיה.
          </p>
        </div>

        {/* Methodology Section */}
        <div className="card-elevated p-8 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">מתודולוגיה ומקורות</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
            <p className="text-lg leading-relaxed">
              המדריך נבנה על בסיס עקרונות אתיים מוכחים ממחקר אקדמי, הנחיות תעשייתיות ותקנים בינלאומיים לשמירה על אתיקה
              הוגנת, אבטחה ופרטיות ושימוש אחראי ב-AI. שילבנו תובנות ממגוון מקורות מובילים, כגון: .
            </p>
          </div>
        </div>

        {/* Authors Section */}
        <div className="card-elevated p-8 space-y-8">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            יוצרות המדריך
          </h2>

          {/* Author 1 - Sivana */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-lg bg-muted">
              <img
                src="/images/sivana-enhanced.png"
                alt="סיונה שרלג"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">סיונה שרלג</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                חוקרת משתמשים ומעצבת חוויית משתמש עם ניסיון רב שנים בתחום. מתמחה במחקר משתמשים מתודולוגי ובאינטגרציה של
                טכנולוגיות חדשניות בתהליכי המחקר.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/sivana/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Author 2 - Naama */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src="/images/naama-enhanced.png"
              alt="נעמה שפירא"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shrink-0 shadow-lg"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">נעמה שפירא</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                מומחית בתחום מחקר משתמשים ועיצוב חוויית משתמש. תורמת להתפתחות מקצועית של קהילת ה-UX בישראל ומובילה
                יוזמות לקידום עבודה אתית ואחראית בתחום.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/nshapi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Publication Date */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">
                <span className="font-semibold">תאריך פרסום:</span> ספטמבר 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
