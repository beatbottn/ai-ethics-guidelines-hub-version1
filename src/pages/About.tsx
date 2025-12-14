import { Linkedin, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">אודות המדריך</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            מקור המידע, מתודולוגיה ופרטי יוצרות המדריך
          </p>
        </div>

        {/* Methodology Section */}
        <div className="card-elevated p-8 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">מתודולוגיה ומקורות</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
            <p className="text-lg leading-relaxed">
              המדריך מבוסס על עקרונות שגובשו מסקירה רוחבית וניתוח דוחות והנחיות ממארגונים אקדמיים,
              גופי מחקר וחברות טכנולוגיה.
            </p>
            <p className="text-lg leading-relaxed">
              בהמלצות בחרנו להתמקד בהנחיות מעשיות לממשקי צ'ט בהם נעשה רוב השימוש היומיומי במשימות
              בתהליך המחקר - בשל ריבוי הכלים והממשקים בהם ניתן להשתמש ביכולות של בינה מלאכותית.
            </p>
            <p className="text-lg leading-relaxed">
              העקרונות האתיים מבוססים על מסגרות אתיות מוכרות כמו דו"ח בלמונט (Belmont Report)
              ועקרונות אתיים מוכרים בתחום המחקר המדעי והרפואי, המותאמים לתחום מחקר המשתמשים.
            </p>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="card-elevated p-8 bg-primary/5 border-r-4 border-r-primary space-y-6">
          <h2 className="text-3xl font-bold text-foreground">מטרת המדריך</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            מדריך זה נועד לספק כלים מעשיים לחוקרות וחוקרי משתמשים, מעצבות ומעצבי UX ומנהלות ומנהלי
            צוותים לשימוש אתי ואחראי בכלי AI בכל שלבי המחקר. המדריך מדגיש את החשיבות של שמירה על
            המצפן האתי תוך כדי ניצול היתרונות שמציעה הטכנולוגיה.
          </p>
        </div>

        {/* Authors Section */}
        <div className="card-elevated p-8 space-y-8">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            יוצרות המדריך
          </h2>

          {/* Author 1 - Sivana */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="/images/sivana-enhanced.png"
              alt="סיונה שרלג"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shrink-0 shadow-lg"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">סיונה שרלג</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                חוקרת משתמשים ומעצבת חוויית משתמש עם ניסיון רב שנים בתחום. מתמחה במחקר משתמשים
                מתודולוגי ובאינטגרציה של טכנולוגיות חדשניות בתהליכי המחקר.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/sivana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Author 2 - Naama */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="/images/naama-enhanced.png"
              alt="נעמה שפירא"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shrink-0 shadow-lg"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">נעמה שפירא</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                מומחית בתחום מחקר משתמשים ועיצוב חוויית משתמש. תורמת להתפתחות מקצועית של קהילת ה-UX
                בישראל ומובילה יוזמות לקידום עבודה אתית ואחראית בתחום.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/nshapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
