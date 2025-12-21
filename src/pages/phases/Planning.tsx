import { Badge } from "@/components/ui/badge";

const Planning = () => {
  const guidelines = [
    "לנסח הנחיות שיחייבו את המודל לכלול מגוון אוכלוסיות רחב (כגון בעלי מוגבלויות) ולזהות באופן מפורש הטיות, במקום לשכפל אותן",
    "להכניס את נושא הפרטיות כחלק אינטגרלי מהתכנון, תוך יישום עקרון צמצום המידע ובדיקה קפדנית של מדיניות האבטחה והפרטיות של כלי ה-AI הנבחרים",
    "להגדיר מראש נקודות עצירה אנושיות לבדיקת כל תוצר של ה-AI",
    "לתכנן את אופן הביצוע של התיעוד כך שיהיה שקוף ומדויק על מנת להבטיח את אמינות ויושרת המחקר כבר מההתחלה",
  ];

  return (
    <div className="min-h-screen bg-background py-spacing-xl px-spacing-lg md:px-spacing-xl" dir="rtl" lang="he">
      <div className="max-w-content-width mx-auto space-y-spacing-xl">
        {/* Header */}
        <div className="space-y-spacing-md">
          <h1 className="text-h1 font-bold text-foreground">🧭 שלב 1: תכנון והגדרת מטרות</h1>
          <div className="bg-card rounded-lg border border-border shadow-card p-spacing-lg">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              בשלב זה אנחנו מגדירים את מטרות המחקר, מנסחים שאלות מחקר, בוחרים את השיטות המתאימות,
              מגדירים את קהל היעד, ומתכננים את כל התהליך. זהו השלב הקריטי שקובע את יסודות המחקר
              והצלחתו. שלב זה כולל בחירת כלי AI, תכנון שיטות איסוף נתונים והטמעת שיקולים אתיים עוד לפני
              תחילת העבודה המעשית.
            </p>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="bg-card rounded-lg border border-border shadow-card p-spacing-lg space-y-spacing-lg">
          <div className="flex items-center gap-spacing-sm">
            <span className="text-h2">✨</span>
            <h2 className="text-h2 font-bold text-foreground">עקרונות מנחים לשלב זה</h2>
          </div>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            שלב תכנון המחקר הוא השלב הקריטי ביותר להטמעת עקרונות אתיים, שכן הוא קובע את
            מסגרת האחריותיות, הפרטיות והגיוון של המחקר כולו.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-spacing-lg">
          <h2 className="text-h2 font-bold text-primary">האחריות שלנו כחוקרי וחוקרות חווית משתמשים בשלב זה</h2>
          
          <div className="grid gap-spacing-md">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-card rounded-lg border border-border shadow-card p-spacing-lg border-r-4 border-r-primary">
                <div className="flex items-start gap-spacing-md">
                  <Badge variant="secondary" className="text-body-lg px-spacing-sm py-spacing-xs shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="text-body-lg text-text-secondary leading-relaxed">{guideline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-primary/5 rounded-lg border border-border shadow-card p-spacing-lg border-r-4 border-r-primary">
          <h2 className="text-h3 font-bold text-foreground mb-spacing-md">המלצה רוחבית</h2>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            <strong>תכנון מחקר בעזרת AI אתי ומונע-הטיה:</strong> שלב תכנון המחקר הוא השלב הקריטי ביותר להטמעת עקרונות אתיים, שכן הוא קובע את מסגרת האחריותיות, הפרטיות והגיוון של המחקר כולו.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planning;
