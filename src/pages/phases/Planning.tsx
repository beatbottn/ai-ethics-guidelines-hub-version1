import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Planning = () => {
  const tasks = [
    {
      id: "exploratory-research",
      title: "מחקר מקדים וגילוי",
      titleEn: "Exploratory Research & Discovery",
      subtasks: ["ניתוח מתחרים (Competitive Analysis)"],
      principles: "עשיית טוב: תרומה לרווחה, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        'שימוש מושכל בטכנולוגיה: כאשר מתחילים מחקר מקדים, קיים פיתוי להשתמש ב-AI כדי לזרז תהליכים, אך לא כל משימה דורשת AI. שימוש מיותר בכלים גוזל אנרגיה ויוצר תלות מיותרת בכלים שעלולים להטות את החשיבה המחקרית המקורית שלנו. שאלו את עצמכם: האם המשימה דורשת עיבוד של כמות גדולה של מידע, או שמא אנחנו משתמשים ב-AI מתוך הרגל בלבד?',
        'הערכת צורך אמיתי: השתמשו ב-AI רק כאשר יש כמות גדולה של נתונים לעיבוד או כשהזמן קריטי. העדיפו עבודה ידנית במחקרים קטנים (3-5 מתחרים). פרומפט לדוגמה: "נתח את המאמרים/דוחות הבאים וזהה דפוסים מרכזיים. אל תוסיף מידע שאינו מופיע במקורות."',
        "צמצום חשיפת מידע: הימנעו מהעלאת מידע מזהה (שמות, אימיילים), נתונים כספיים, או שמות חברות ספציפיות אם לא נדרש. שאלו תמיד: האם אפשר לענות בלי לחשוף את המידע הזה?",
      ],
    },
    {
      id: "target-audience",
      title: "הגדרת אוכלוסיית היעד",
      titleEn: "Target Audience Definition",
      subtasks: ["בניית קריטריוני גיוס (Recruitment Criteria)", "הגדרת פרסונות ראשוניות (Proto-Personas)"],
      principles: "צדק: הגינות וחלוקה הוגנת של משאבים, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        "גיוון והכלה בייצוג: AI נוטה לשכפל דפוסים קיימים ולהחמיץ קבוצות מוחלשות או לא-מיוצגות. כאשר מגדירים קהלי יעד באמצעות AI, קיים סיכון שלא נכלול אוכלוסיות חשובות (בעלי מוגבלויות, קשישים, מיעוטים) מכיוון שהמודל מתבסס על מידע \"ממוצע\". שאלו את עצמכם: האם הגדרת קהל היעד שלנו מכילה רק את \"המשתמשים הטיפוסיים\" או שהיא מאפשרת לקולות מגוונים להישמע?",
        'בקשו מ-AI לאתגר את עצמו: השתמשו בפרומפטים שמחייבים את המודל לזהות קבוצות שהוא עלול להחמיץ. פרומפט לדוגמה: "לאחר יצירת הפרסונות, בדוק: אילו קבוצות משתמשים עלולות להיות לא-מיוצגות? הצע הרחבה של הקריטריונים כך שיכללו אוכלוסיות מגוונות יותר (כגון בעלי מוגבלויות, קשישים, או קבוצות מרקע סוציו-אקונומי שונה)."',
        "ביקורת אנושית מחייבת: כל פרסונה או קריטריון גיוס שנוצר על ידי AI חייב לעבור בדיקה אנושית שבודקת: האם יש כאן סטריאוטיפים? האם יש קבוצות שהוחמצו? האם הקריטריונים מאפשרים גיוון אמיתי?",
      ],
    },
    {
      id: "research-questions",
      title: "ניסוח שאלות מחקר",
      titleEn: "Research Questions Formulation",
      subtasks: ["זיהוי נושאים לחקירה (Research Topic Identification)", "ניסוח שאלות מחקר (Research Question Drafting)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        "הימנעות מהנחות סמויות: שאלות מחקר שנוסחו על ידי AI עלולות להכיל הנחות סמויות או הטיות שמשפיעות על כל המחקר. שאלו את עצמכם: האם השאלות שלנו מניחות תשובה מראש או שהן פתוחות באמת לגילוי?",
        'בקשו ניסוחים אלטרנטיביים: אל תסתפקו בגרסה הראשונה. בקשו מה-AI לנסח את אותה שאלה ממספר זוויות שונות. פרומפט לדוגמה: "נסח את שאלת המחקר הזו ב-3 דרכים שונות: אחת ניטרלית, אחת שמתמקדת בחוויות חיוביות, ואחת שמתמקדת באתגרים."',
        "זיהוי הנחות סמויות: בקשו מה-AI לזהות הנחות סמויות בשאלות המחקר שלכם, ולהציע ניסוחים חלופיים שמפחיתים הטיה. בדקו כל שאלה: האם היא מכוונת לתשובה מסוימת?",
      ],
    },
    {
      id: "methodology",
      title: "תכנון מתודולוגיית מחקר",
      titleEn: "Research Methodology Planning",
      subtasks: ["בחירת שיטות מחקר (Method Selection)", "עיצוב מחקר (Research Design)"],
      principles: "עשיית טוב: תרומה לרווחה, צדק: הגינות וחלוקה הוגנת של משאבים, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        "התאמת שיטה לשאלה: AI עשוי להמליץ על שיטות מחקר מבלי להתחשב בהקשר הספציפי. שאלו את עצמכם: האם השיטה שנבחרה מתאימה לשאלת המחקר שלנו, לאוכלוסיית היעד, ולמשאבים הזמינים?",
        'בקשו הצגת חלופות: אל תקבלו המלצה ראשונה. בקשו מה-AI להציג מספר אפשרויות עם יתרונות וחסרונות. פרומפט לדוגמה: "הצג 3 שיטות מחקר מתאימות לשאלה הזו. עבור כל שיטה, פרט: יתרונות, חסרונות, משאבים נדרשים, ומגבלות פוטנציאליות."',
        "שיקולי נגישות והכלה: בתכנון המתודולוגיה, וודאו שהשיטות שנבחרו נגישות לכלל אוכלוסיית היעד, כולל אנשים עם מוגבלויות או מרקע תרבותי מגוון.",
      ],
    },
    {
      id: "ai-tool-selection",
      title: "בחירת כלי AI",
      titleEn: "AI Tool Selection",
      subtasks: ["הערכת כלים (Tool Evaluation)", "בדיקת מדיניות פרטיות (Privacy Policy Review)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        "בדיקת מדיניות פרטיות ואבטחה: לפני שימוש בכל כלי AI, בדקו היכן הנתונים מאוחסנים, האם הם משמשים לאימון מודלים, ומה מדיניות המחיקה. שאלו: האם אנחנו מבינים מה יקרה לנתונים של המשתתפים שלנו?",
        "הימנעות מכלים לא מאובטחים: אל תשתמשו בכלי AI שלא עומדים בסטנדרטי אבטחה מינימליים (HTTPS, הצפנה, GDPR compliance). העדיפו כלים עם אפשרות לשליטה על הנתונים.",
        "תיעוד הכלים שנבחרו: תעדו את כל כלי ה-AI שתשתמשו בהם, כולל: שם הכלי, גרסה, מטרת השימוש, ומדיניות הפרטיות. מידע זה יידרש בדוח המחקר הסופי לצורך שקיפות.",
      ],
    },
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

        {/* Tasks */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">משימות נפוצות עם AI בשלב התכנון</h2>
          {tasks.map((task) => (
            <div key={task.id} className="card-elevated">
              <Accordion type="single" collapsible>
                <AccordionItem value={task.id} className="border-none">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="text-right">
                      <h2 className="text-2xl font-bold text-foreground">{task.title}</h2>
                      <p className="text-lg text-muted-foreground mt-1">({task.titleEn})</p>
                      {task.subtasks && (
                        <p className="text-base text-muted-foreground mt-2">
                          {task.subtasks.join(" • ")}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 space-y-6">
                    {/* Principles */}
                    <div className="bg-primary/5 rounded-lg p-6 border-r-4 border-r-primary">
                      <h3 className="text-lg font-bold text-foreground mb-3">עקרונות אתיים מהותיים</h3>
                      <div className="flex flex-wrap gap-2">
                        {task.principles.split(", ").map((principle, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                            {principle}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* How to Act */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-4">כיצד לפעול</h3>
                      <ul className="space-y-4">
                        {task.howToAct.map((action, index) => (
                          <li key={index} className="text-foreground/90 leading-relaxed pr-6 relative before:content-['•'] before:absolute before:right-0 before:text-primary before:font-bold">
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;
