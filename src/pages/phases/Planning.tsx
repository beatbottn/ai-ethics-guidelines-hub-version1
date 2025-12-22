import { Badge } from "@/components/ui/badge";

const Planning = () => {
  const guidelines = [
    "לנסח הנחיות שיחייבו את המודל לכלול מגוון אוכלוסיות רחב (כגון בעלי מוגבלויות) ולזהות באופן מפורש הטיות, במקום לשכפל אותן",
    "להכניס את נושא הפרטיות כחלק אינטגרלי מהתכנון, תוך יישום עקרון צמצום המידע ובדיקה קפדנית של מדיניות האבטחה והפרטיות של כלי ה-AI הנבחרים",
    "להגדיר מראש נקודות עצירה אנושיות לבדיקת כל תוצר של ה-AI",
    "לתכנן את אופן הביצוע של התיעוד כך שיהיה שקוף ומדויק על מנת להבטיח את אמינות ויושרת המחקר כבר מההתחלה",
  ];

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

        {/* Guiding Principles */}
        <div className="card-elevated p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✨</span>
            <h2 className="text-3xl font-bold text-foreground">עקרונות מנחים לשלב זה</h2>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed">
            שלב תכנון המחקר הוא השלב הקריטי ביותר להטמעת עקרונות אתיים, שכן הוא קובע את
            מסגרת האחריותיות, הפרטיות והגיוון של המחקר כולו.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">האחריות שלנו כחוקרי וחוקרות חווית משתמשים בשלב זה</h2>
          
          <div className="grid gap-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="card-elevated p-6 border-r-4 border-r-primary">
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1 shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="text-lg text-foreground/90 leading-relaxed">{guideline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="card-elevated p-8 bg-primary/5 border-r-4 border-r-primary">
          <h2 className="text-2xl font-bold text-foreground mb-4">המלצה רוחבית</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            <strong>תכנון מחקר בעזרת AI אתי ומונע-הטיה:</strong> שלב תכנון המחקר הוא השלב הקריטי ביותר להטמעת עקרונות אתיים, שכן הוא קובע את מסגרת האחריותיות, הפרטיות והגיוון של המחקר כולו.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planning;