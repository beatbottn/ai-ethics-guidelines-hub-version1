import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Planning = () => {
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const toggleTask = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">🧭 שלב 1: תכנון והגדרת מטרות</h1>
          <div className="card-elevated p-8">
            <p className="text-xl text-foreground/90 leading-relaxed">
              בשלב זה אנחנו מגדירים את מטרות המחקר, מנסחים שאלות מחקר, בוחרים את השיטות המתאימות,
              מגדירים את קהל היעד, ומתכננים את כל התהליך. זהו השלב הקריטי שקובע את יסודות המחקר
              והצלחתו. שלב זה כולל בחירת כלי AI, תכנון שיטות איסוף נתונים והטמעת שיקולים אתיים עוד לפני
              תחילת העבודה המעשית.
            </p>
          </div>
        </div>

        {/* Key Recommendation */}
        <div className="card-elevated p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">המלצה רוחבית</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            <strong>שלב תכנון המחקר הוא השלב הקריטי ביותר להטמעת עקרונות אתיים</strong>, שכן הוא קובע את
            מסגרת האחריותיות, הפרטיות והגיוון של המחקר כולו. האחריות שלנו כחוקרי וחוקרות חווית משתמשים
            בשלב זה היא: תכנון מחקר בעזרת AI אתי ומונע-הטיה.
          </p>
        </div>

        {/* Tasks Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">משימות נפוצות עם AI בשלב התכנון</h2>

          {/* Task 1 */}
          <div className="card-elevated overflow-hidden">
            <button
              onClick={() => toggleTask("task1")}
              className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div className="text-right">
                <h3 className="text-2xl font-bold text-foreground">מחקר מקדים וגילוי</h3>
                <p className="text-lg text-muted-foreground mt-1">Exploratory Research & Discovery</p>
              </div>
              {expandedTask === "task1" ? (
                <ChevronUp className="h-6 w-6 text-primary" />
              ) : (
                <ChevronDown className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
            {expandedTask === "task1" && (
              <div className="p-6 pt-0 border-t space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">תת-משימות:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/90">
                    <li>ניתוח מתחרים (Competitive Analysis)</li>
                    <li>יצירת פרסונות ראשוניות (Proto-Personas)</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 border-r-4 border-r-primary">
                  <h3 className="text-lg font-bold text-foreground mb-3">עקרונות אתיים מהותיים</h3>
                  <div className="flex flex-wrap gap-2">
                    {["עשיית טוב: תרומה לרווחה", "אי-גרימת נזק: הימנעות מפגיעה"].map((principle, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                        {principle}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg text-foreground">כיצד לפעול:</p>
                  <ul className="space-y-4 text-foreground/90">
                    <li>
                      <strong>• בדיקת הטיה בסיסית של המודל:</strong> לפני השימוש ב-AI ליצירת פרסונות או ניתוח מתחרים גלובלי, יש להכיר בכך שרוב המודלים מבוססים על תפיסות מערביות (צפון אמריקאיות) ולצפות מראש לפערים או אי-דיוקים תרבותיים.
                    </li>
                    <li>
                      <strong>• ניסוח פרומפטים מונעי-הטיה:</strong> בעת בקשת מידע מ-AI (כגון יצירת פרוטו-פרסונות או איסוף מגמות), יש לכלול בהנדסת הפרומפטים דרישה מפורשת להתייחסות למגוון אוכלוסיות רחב, כדי להבטיח שהתוצאות אינן מוטות (לדוגמה: "הצג גם חוויות של משתמשים עם מוגבלויות").
                    </li>
                    <li>
                      <strong>• תכנון צמצום מידע (Data Minimization):</strong> נאסוף ונזין ל-AI רק את הנתונים הנחוצים באמת למטרות המחקר שהוגדרו, על מנת למזער סיכונים בהמשך הדרך.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Task 2 */}
          <div className="card-elevated overflow-hidden">
            <button
              onClick={() => toggleTask("task2")}
              className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div className="text-right">
                <h3 className="text-2xl font-bold text-foreground">עיבוד מידע ממחקר שולחני</h3>
                <p className="text-lg text-muted-foreground mt-1">Secondary Research Synthesis</p>
              </div>
              {expandedTask === "task2" ? (
                <ChevronUp className="h-6 w-6 text-primary" />
              ) : (
                <ChevronDown className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
            {expandedTask === "task2" && (
              <div className="p-6 pt-0 border-t space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">תת-משימות:</p>
                  <p className="text-foreground/90">עיבוד מאמרים, דוחות, מסמכים או חומרים מוקלטים</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 border-r-4 border-r-primary">
                  <h3 className="text-lg font-bold text-foreground mb-3">עקרונות אתיים מהותיים</h3>
                  <div className="flex flex-wrap gap-2">
                    {["אי-גרימת נזק: הימנעות מפגיעה", "צדק: הגינות וחלוקה הוגנת של משאבים"].map((principle, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                        {principle}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg text-foreground">כיצד לפעול:</p>
                  <div className="text-foreground/90 space-y-3">
                    <p>
                      <strong>• ניסוח אובייקטיבי של פרומפטים לניתוח:</strong> נקפיד על ניסוח ניטרלי של הפרומפטים שנזין ל-AI, כדי למנוע ממנו להעצים דעות קדומות הקיימות בטקסט המקור שעליו הוא מתבסס.
                    </p>
                    <p className="pr-6">
                      לדוגמא: "נתח את המידע הבא (טקסט/מסמך). הקפד/הקפידי על ניתוח אובייקטיבי נטול דעה, והצג/הציגי באופן מפורש הטיות גלויות או סמויות (כגון הטיית מגדר, הטיה סוציו-אקונומית או הטיה תרבותית) הקיימות בטקסט המקור. אם נמצאת הטיה, אל תעצים/תעצימי אותה בסיכום, אלא ציין/צייני אותה כהערת אזהרה."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional tasks can be added here following the same pattern */}
          <div className="card-elevated p-6 text-center">
            <p className="text-muted-foreground">משימות נוספות יתווספו בקרוב...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
