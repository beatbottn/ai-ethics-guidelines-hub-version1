import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Presentation = () => {
  const tasks = [
    {
      id: "research-report",
      title: "הכנת דוחות מחקר",
      titleEn: "Research Report",
      subtasks: ["בניית שלד לדו״ח", "ניסוח מתודולוגיות וממצאים", "כתיבת תקציר מנהלות"],
      principles: "אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, עשיית טוב: תרומה לרווחה, אוטונומיה: כיבוד חירות ובחירת האדם",
      howToAct: [
        "שקיפות שיטתית: נציין במסמכי התוצאות ובדיווח לבעלי העניין באופן ברור ומופרד (Disclosure), את היקף ואופי השימוש ב-AI (כלי, גרסה, והמשימה שה-AI עזר לנו לבצע: ניתוח סנטימנט, קידוד, סיכום).",
        "תיעוד פרומפטים: נכלול תיעוד פרומפטים (Prompt Documentation) מלא וממוספר גרסה (Versioning) כחלק מנספחי הדוח, כדי לאפשר שחזור (Reproducibility) של תהליך ניתוח ה-AI על ידי גורם שלישי.",
        "אימות אנושי קפדני: נפעיל בקרה אנושית (Human-in-the-loop) כדי לוודא דיוק, אמינות והקשר של כל ממצא שנוצר או סוכם על ידי AI, טרם כניסתו לדוח הסופי, כדי למנוע טעויות או הטיה.",
        'שמירה על הצגת פרספקטיבות/דעות: נתייחס בכתיבת הדוח במפורש לחוויה של משתמשים חריגים/קולות מיעוט (Outliers) שזוהו בנתונים, כדי למנוע "שטיפת ממוצעים" (Average Washing) או הכללה שגויה בסיכום ה-AI.',
      ],
    },
    {
      id: "peer-review",
      title: "סקירת עמיתים - דוחות מחקר",
      titleEn: "Peer Review of Research Reports",
      subtasks: ["זיהוי הטיות או חוסרים", "ביקורת על בהירות וסגנון"],
      principles: "צדק: הגינות וחלוקה הוגנת של משאבים, אי-גרימת נזק: הימנעות מפגיעה",
      howToAct: [
        'בדיקת עמיתים (peer review): כל סיכום או תובנה שנוצרו על ידי AI במסגרת סיכום ממצאים ממחקר - חייבים לעבור בדיקה יסודית ואימות עובדתי אנושי על מנת לוודא שה-AI לא יצר "הזיות" או מסקנות שגויות.',
        "גיוון בביקורת: ננסה לגייס אדם נוסף שיכול לייצג קבוצת תרבות, גיל או מגדר שונה לבדיקת הניסוחים של הסיכומים של הממצאים בדוח לפני הצגה לבעלי עניין.",
        'שימוש ב-AI כמומחה DEI: אם אין אפשרות לביקורת אנושית מגוונת, נוכל לבקש מה-AI לתפקד כמומחה DEI (Diversity, Equity, and Inclusion) כדי לזהות הטיות בתוך הניסוח. פרומפט לדוגמה: "בצע/י ביקורת על הדוח הבא כמומחה לגיוון והכלה (DEI). זהה/י ניסוחים שעלולים להיות מוטים או לא מכילים כלפי קבוצות מוחלשות."',
      ],
    },
    {
      id: "recommendations",
      title: "ניסוח המלצות",
      titleEn: "UX Recommendations Development",
      subtasks: ["הפקת מסקנות ישימות", "התאמה לתרחישים שונים"],
      principles: "צדק: הגינות וחלוקה הוגנת של משאבים, אי-גרימת נזק: הימנעות מפגיעה, אוטונומיה: כיבוד חירות ובחירת האדם, עשיית טוב: תרומה לרווחה",
      howToAct: [
        'שיפוט אנושי סופי (Accountability): נשתמש בשיקול דעת מקצועי אנושי כ"שומר סף" לפני הצגת כל המלצה שנוצרה או סוכמה על ידי AI, כדי לשמור על אחריותיות מקצועית ולמנוע סיכונים שעלולים לפגוע במשתמשים.',
        "אימות אמינות הממצאים: נבצע בדיקות אימות (Verification) על מקורות המידע והממצאים שה-AI השתמש בהם להפקת המסקנות (למשל, בדיקת ציטוטים), כדי להבטיח אמינות ושלמות של המסקנות הישימות.",
        "בחינה צולבת (Intersectional Review): נוודא כי פרסונות ותרחישים שנוצרו על ידי AI מייצגים במובהק את המורכבות החברתית (Intersectionality) של קבוצות משתמשים שונות, כדי למנוע יצירת המלצות מפלות המבוססות על נתונים הומוגניים.",
        "אחריות סביבתית וחברתית: בניסוח ההמלצות, נשקול את ההשפעה החברתית והסביבתית הרחבה של המלצות ה-UX (למשל, צמצום צריכת אנרגיה של המערכת או השלכות חברתיות של אוטומציה) כשיקול אתי לגיבוש ההמלצות הסופיות.",
        "פירוש והסבר להמלצה: נספק הסבר ברור (Explainability) לכל המלצת UX ישימה שמקורה בניתוח AI, ונדגים כיצד הנתונים הספציפיים (ולא רק האלגוריתם) הובילו למסקנה, כדי לאפשר אמון ובקרה.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">📊 שלב 4: הצגת ממצאים והמלצות</h1>
          <div className="card-elevated p-8">
            <p className="text-xl text-foreground/90 leading-relaxed">
              בשלב זה אנחנו הופכים נתונים לתובנות שניתן להעביר הלאה: לעיצוב, לפיתוח, ולבעלי עניין.
              זהו שלב בו חשוב לא רק לדייק את המסקנות, אלא גם להעביר אותן באופן אפקטיבי, שקוף, ורלוונטי.
              שימוש ב-AI כאן מאפשר ניסוח חד, הפקה ויזואלית מהירה, וביקורת עצמית – אך מחייב הקפדה יתרה על פרטיות, ייצוג הוגן, והימנעות מהשטחה של עומק המחקר.
            </p>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">משימות נפוצות עם AI בשלב ההצגה</h2>
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

export default Presentation;
