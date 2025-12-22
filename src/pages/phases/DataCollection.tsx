import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const DataCollection = () => {
  const tasks = [
    {
      id: "survey-interview",
      title: "ניסוח שאלונים וראיונות",
      titleEn: "Survey & Interview",
      subtasks: ["ניסוח שאלות פתוחות/סגורות (Question Drafting)", "בדיקת ניסוחים להבנה וחדות (Wording Validation)"],
      principles: "אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, אוטונומיה: כיבוד חירות ובחירת האדם",
      howToAct: [
        'Human In The Loop - בקרה אנושית מחייבת: השתמשו ב-AI כנקודת פתיחה בלבד. כל שאלה חייבת לעבור ביקורת אנושית שבודקת: הנחות, שפה מכלילה, וכבוד לפרטיות. פרומפט לדוגמה: "צרי 10 שאלות פתוחות לראיון בנושא [נושא]. הקפידי על ניסוח אובייקטיבי ונטול דעות קדומות."',
        'בקרה על גיוון בניסוח: גייסו peer review מגוון (תרבות/גיל/מגדר שונה) לבדיקת השאלות. אם אין אפשרות - השתמשו ב-AI כמבקר DEI. פרומפט לדוגמה: "בצעי ביקורת על השאלות כמומחית DEI. זהי ניסוחים מוטים, מעליבים, או בעלי הטיה תרבותית מערבית."',
        "הימנעות משאלות מכוונות: וודאו שהשאלות אינן מכוונות תשובות מסוימות (Leading Questions). בקשו מה-AI לזהות ניסוחים שעלולים להטות את תשובות המשתתפים.",
      ],
    },
    {
      id: "simulation",
      title: "סימולציות ראיונות עם משתמשים סינתטיים",
      titleEn: "Interview Simulation & Practice",
      subtasks: ["תרגול שאלות מול מודלי בינה מלאכותית (AI as Respondent)", "בדיקת זרימת שיחה (Conversation Flow Testing)"],
      principles: "אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים",
      howToAct: [
        'הגדרת מטרה ברורה לסימולציה: ציינו במפורש שהסימולציות הן לתרגול ולזיהוי פערים בלבד, ותכננו מראש את שלב האימות עם משתמשים אמיתיים. פרומפט לדוגמה: "צור 3 פרופילי משתמשים סינתטיים עבור [מוצר]. פרופילים אלו ישמשו לסימולציית ראיונות ראשונית בלבד, כדי לבדוק את זרימת השיחה ואת בהירות השאלות. הם יחייבו אימות מול משתמשים אמיתיים לפני קבלת החלטות עיצוב."',
        "הגנה על פרטיות – אנונימיזציה מלאה: הימנעו מהעלאת PII, מידע קנייני או נתונים סודיים לכלי סימולציה חיצוניים. אם מוכרחים להזין נתונים אמיתיים, בצעו אנונימיזציה מלאה.",
        'בקשו מה-AI לזהות פערי ייצוג: AI נוטה לשכפל סטריאוטיפים ולייצר פרופילים הומוגניים. בקשו זיהוי של קבוצות משתמשים חשובות שלא מיוצגות. פרומפט לדוגמה: "לאחר יצירת הפרופילים, בחן האם קיימות קבוצות משתמשים חשובות שלא מיוצגות. זהה פערים והצע פרופילים נוספים למילוי הפערים."',
        'אתגרו הנחות יסוד – ניטרול הטיית אישוש: במקום לכוון את ה-AI לחפש תיקוף להצלחת העיצוב, חקרו איפה הוא עלול להיכשל. פרומפט לדוגמה: "בצע סימולציה של ראיון עם משתמש המנסה להשלים את תהליך הקנייה. חצי מהמשתמשים יגיעו להשלמה, וחצי יתקלו בכשל משמעותי. פרט את נקודות הכשל והתסכול שלהם."',
      ],
    },
    {
      id: "survey-distribution",
      title: "הפצת סקרים",
      titleEn: "Survey Distribution",
      subtasks: ["אוטומציה של הפצה וניתוח ראשוני (Automated Distribution & Preview Analysis)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, עשיית טוב: תרומה לרווחה",
      howToAct: [
        "הקפידו על הסכמה מדעת מלאה: הציגו בעמוד הראשון פרטים שמבססים אמון ושקיפות: מטרת המחקר, זמן השלמה משוער, כיצד ייעשה שימוש בנתונים (כולל שימוש ב-AI), מי יוכל לגשת לנתונים, וזכות הפרישה בכל עת. דרשו אישור אקטיבי.",
        'אפשרו דילוג ופרישה בכל שלב: הוסיפו כפתור "דלג/י על שאלה זו" בכל שאלה רגישה וכפתור "פרוש/י מהסקר" בכל עמוד. הבהירו: "אם תבחרו לפרוש, כל הנתונים שנאספו עד כה יימחקו".',
        "הוסיפו אפשרות סירוב מפורשת: במיוחד לשימוש בנתונים לאימון מודלים. הוסיפו תיבות סימון (Opt-out) נפרדות לעיבוד באמצעות AI ולשיפור מודלים עתידיים.",
      ],
    },
    {
      id: "ai-moderated",
      title: "מחקר מונחה AI",
      titleEn: "AI-Moderated Research",
      subtasks: ["ביצוע מחקר שבו מערכת AI מנהלת או מקיימת אינטראקציה ישירה עם המשתתפים (כגון ראיונות או בדיקות שימושיות אוטומטיות)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, עשיית טוב: תרומה לרווחה",
      howToAct: [
        'גלו מיידית את זהות ה-AI: בתחילת האינטראקציה, ציינו בבירור שמדובר בעוזר דיגיטלי מבוסס AI. לדוגמה: "שלום! אני עוזר/ת דיגיטלי/ת המבוסס/ת על AI. אני כאן כדי לשאול אותך מספר שאלות על [נושא]. בכל שלב, אם תרצה/י לדבר עם חוקר/ת אנושי/ת, לחץ/י על \'צור קשר\'."',
        'כללו הצהרת שקיפות בכל כלי איסוף נתונים: בטופס סקר או בפתיחת ראיון, הסבירו בדיוק מה יקרה עם הנתונים. לדוגמה: "אנו נתמלל את שיחתך באמצעות [שם הכלי] ונעזר בו לזיהוי תמות ודפוסים. הפרטים המזהים שלך יוסרו לפני כל עיבוד. הנתונים לא ישמשו לאימון מודלים חיצוניים."',
        "ספקו ערוץ אנושי פתוח: וודאו שמשתתפים יכולים לבקש עזרה אנושית בכל שלב של האינטראקציה עם ה-AI, במיוחד אם הם חווים מצוקה או אי-נוחות.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">🔍 שלב 2: איסוף נתונים</h1>
          <div className="card-elevated p-8">
            <p className="text-xl text-foreground/90 leading-relaxed">
              בשלב זה אנחנו אוספים את המידע הנדרש למחקר באמצעים שונים: ראיונות, שאלונים, תצפיות, ומבדקי שמישות. 
              זהו שלב עדין וקריטי מבחינת מהימנות הנתונים והאופן שבו אנו מייצגים את קולות המשתמשים.
              שילוב AI בשלב זה נועד להאיץ תהליכים, לחדד שאלות, ולתמוך באיסוף שיטתי, תוך שמירה על אמפתיה, שקיפות ופרטיות.
            </p>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">משימות נפוצות עם AI בשלב איסוף הנתונים</h2>
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
                    <div className="bg-primary/5 rounded-lg p-6">
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

export default DataCollection;
