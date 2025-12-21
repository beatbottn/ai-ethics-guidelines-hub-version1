import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const DataCollection = () => {
  const guidelines = [
    "לשמור על שקיפות מלאה כלפי משתמשים לגבי השימוש ב-AI בתהליך המחקר, ולהבטיח הסכמה מדעת אמיתית שמסבירה בדיוק כיצד ומתי ייעשה שימוש בנתונים שלהם",
    "להגן על פרטיות המשתמשים באמצעות בחירת כלים בעלי תקני אבטחה והצפנה חזקים, הימנעות מהעלאת נתונים מזהים, ואנונימיזציה מלאה כאשר נדרש להזין מידע אמיתי",
    "למנוע הטיות בכלי האיסוף על ידי ניסוח פרומפטים נטרליים, ביקורת מגוונת של שאלות, והימנעות מניסוחים מכווני תשובה או מניפולטיביים",
    "לשמור על כבוד האוטונומיה של משתמשים באמצעות מתן אפשרות פרישה בכל עת, הימנעות מלחץ או כפייה, ושימוש בשפה נגישה ומכלילה",
    "להפעיל בקרה אנושית על כל תוצר AI ולא להסתמך באופן בלעדי על כלים אוטומטיים, במיוחד כאשר מדובר באינטראקציה ישירה עם משתמשים",
  ];

  const tasks = [
    {
      id: "survey-interview",
      title: "ניסוח שאלונים וראיונות",
      titleEn: "Survey & Interview",
      subtasks: ["ניסוח שאלות פתוחות/סגורות (Question Drafting)", "בדיקת ניסוחים להבנה וחדות (Wording Validation)"],
      principles: "אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, אוטונומיה: כיבוד חירות ובחירת האדם",
      context: "כאשר משתמשים ב-AI לניסוח שאלות מחקר, קיים סיכון שהמודל יכתיב נקודות מבט מוטות, ישתמש בשפה לא מכלילה, או יחמיץ רגישויות תרבותיות. שאלות שנוסחו בצורה לא מדויקת עלולות להטות את תשובות המשתתפים (Leading Questions), לפגוע באמון, ולהחמיץ נתונים קריטיים.",
      question: "האם השאלות שלנו נותנות מקום שווה לכל המשתתפים לבטא את חוויתם, או שהן מכוונות תשובות ופוגעות באוטונומיה שלהם?",
      howToAct: [
        {
          title: "Human In The Loop - בקרה אנושית מחייבת",
          content: "השתמשו ב-AI כנקודת פתיחה בלבד. כל שאלה חייבת לעבור ביקורת אנושית שבודקת: הנחות, שפה מכלילה, וכבוד לפרטיות.",
          prompt: '"צרי 10 שאלות פתוחות לראיון בנושא [נושא]. הקפידי על ניסוח אובייקטיבי ונטול דעות קדומות."',
        },
        {
          title: "בקרה על גיוון בניסוח",
          content: "גייסו peer review מגוון (תרבות/גיל/מגדר שונה) לבדיקת השאלות. אם אין אפשרות - השתמשו ב-AI כמבקר DEI.",
          prompt: '"בצעי ביקורת על השאלות כמומחית DEI. זהי ניסוחים מוטים, מעליבים, או בעלי הטיה תרבותית מערבית."',
        },
      ],
    },
    {
      id: "simulation",
      title: "סימולציות ראיונות עם משתמשים סינתטיים",
      titleEn: "Interview Simulation & Practice",
      subtasks: ["תרגול שאלות מול מודלי בינה מלאכותית (AI as Respondent)", "בדיקת זרימת שיחה (Conversation Flow Testing)"],
      principles: "אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים",
      context: "משתמשים סינתטיים (Synthetic Users) או \"תאומים דיגיטליים\" (Digital Twins) שנוצרו על ידי AI יכולים לסייע בשלבים מוקדמים של תכנון וסימולציה. שני הסוגים אינם יכולים לשקף את מלוא המורכבות של חוויה אנושית אמיתית. שימוש בהם כתחליף למחקר אמיתי עלול להוביל להחלטות עיצוב מוטעות ולפגיעה במשתמשים אמיתיים.",
      question: "האם אנחנו משתמשים במשתמשים סינתטיים או בתאומים דיגיטליים כנקודת פתיחה זמנית לתרגול וזיהוי פערים בשאלון, או שאנו מסתמכים עליהם כמקור יחיד לקבלת החלטות מחקריות?",
      howToAct: [
        {
          title: "הגדרת מטרה ברורה לסימולציה",
          content: "ציינו במפורש שהסימולציות הן לתרגול ולזיהוי פערים בלבד, ותכננו מראש את שלב האימות עם משתמשים אמיתיים.",
          prompt: '"צור 3 פרופילי משתמשים סינתטיים עבור [מוצר]. פרופילים אלו ישמשו לסימולציית ראיונות ראשונית בלבד, כדי לבדוק את זרימת השיחה ואת בהירות השאלות. הם יחייבו אימות מול משתמשים אמיתיים לפני קבלת החלטות עיצוב."',
        },
        {
          title: "הגנה על פרטיות – אנונימיזציה מלאה",
          content: "הימנעו מהעלאת PII, מידע קנייני או נתונים סודיים לכלי סימולציה חיצוניים. אם מוכרחים להזין נתונים אמיתיים, בצעו אנונימיזציה מלאה.",
        },
        {
          title: "בקשו מה-AI לזהות פערי ייצוג",
          content: "AI נוטה לשכפל סטריאוטיפים ולייצר פרופילים הומוגניים. בקשו זיהוי של קבוצות משתמשים חשובות שלא מיוצגות.",
          prompt: '"לאחר יצירת הפרופילים, בחן האם קיימות קבוצות משתמשים חשובות שלא מיוצגות. זהה פערים והצע פרופילים נוספים למילוי הפערים."',
        },
        {
          title: "אתגרו הנחות יסוד – ניטרול הטיית אישוש",
          content: "במקום לכוון את ה-AI לחפש תיקוף להצלחת העיצוב, חקרו איפה הוא עלול להיכשל.",
          prompt: '"בצע סימולציה של ראיון עם משתמש המנסה להשלים את תהליך הקנייה. חצי מהמשתמשים יגיעו להשלמה, וחצי יתקלו בכשל משמעותי. פרט את נקודות הכשל והתסכול שלהם."',
        },
      ],
    },
    {
      id: "survey-distribution",
      title: "הפצת סקרים",
      titleEn: "Survey Distribution",
      subtasks: ["אוטומציה של הפצה וניתוח ראשוני (Automated Distribution & Preview Analysis)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, עשיית טוב: תרומה לרווחה",
      context: "בשלב הפצת הסקר, משתתפים חשופים לסיכונים של כפייה, אי-הבנה, או גילוי מידע רגיש. חשוב להבטיח שההשתתפות היא וולונטרית לחלוטין, מדעת, ומכבדת את הצרכים והמגבלות של כל אוכלוסיית היעד.",
      question: "האם המשתתפים שלנו מרגישים חופשיים לסרב או לפרוש? האם כל אדם באוכלוסיית היעד יכול להבין את השאלות ולהשתתף באופן שווה?",
      howToAct: [
        {
          title: "הקפידו על הסכמה מדעת מלאה",
          content: "הציגו בעמוד הראשון פרטים שמבססים אמון ושקיפות: מטרת המחקר, זמן השלמה משוער, כיצד ייעשה שימוש בנתונים (כולל שימוש ב-AI), מי יוכל לגשת לנתונים, וזכות הפרישה בכל עת. דרשו אישור אקטיבי.",
        },
        {
          title: "אפשרו דילוג ופרישה בכל שלב",
          content: "הוסיפו כפתור \"דלג/י על שאלה זו\" בכל שאלה רגישה וכפתור \"פרוש/י מהסקר\" בכל עמוד. הבהירו: \"אם תבחרו לפרוש, כל הנתונים שנאספו עד כה יימחקו\".",
        },
        {
          title: "הוסיפו אפשרות סירוב מפורשת",
          content: "במיוחד לשימוש בנתונים לאימון מודלים. הוסיפו תיבות סימון (Opt-out) נפרדות לעיבוד באמצעות AI ולשיפור מודלים עתידיים.",
        },
      ],
    },
    {
      id: "ai-moderated",
      title: "מחקר מונחה AI",
      titleEn: "AI-Moderated Research",
      subtasks: ["ביצוע מחקר שבו מערכת AI מנהלת או מקיימת אינטראקציה ישירה עם המשתתפים (כגון ראיונות או בדיקות שימושיות אוטומטיות)"],
      principles: "אוטונומיה: כיבוד חירות ובחירת האדם, אי-גרימת נזק: הימנעות מפגיעה, צדק: הגינות וחלוקה הוגנת של משאבים, עשיית טוב: תרומה לרווחה",
      context: "כאשר AI מנהל אינטראקציה ישירה עם משתתפים, הסיכונים האתיים מתעצמים: חוסר שקיפות, העדר אמפתיה אנושית, פוטנציאל לאפליה, וחוסר יכולת של המשתתף לערער או לבקש עזרה. זהו השלב הרגיש ביותר בכל המחקר.",
      question: "האם המשתתפים יודעים שהם משוחחים עם מכונה? האם יש להם ערוץ אנושי פתוח אם הם חווים מצוקה?",
      howToAct: [
        {
          title: "גלו מיידית את זהות ה-AI",
          content: 'בתחילת האינטראקציה, ציינו בבירור שמדובר בעוזר דיגיטלי מבוסס AI. לדוגמה: "שלום! אני עוזר/ת דיגיטלי/ת המבוסס/ת על AI. אני כאן כדי לשאול אותך מספר שאלות על [נושא]. בכל שלב, אם תרצה/י לדבר עם חוקר/ת אנושי/ת, לחץ/י על \'צור קשר\'."',
        },
        {
          title: "כללו הצהרת שקיפות בכל כלי איסוף נתונים",
          content: 'בטופס סקר או בפתיחת ראיון, הסבירו בדיוק מה יקרה עם הנתונים. לדוגמה: "אנו נתמלל את שיחתך באמצעות [שם הכלי] ונעזר בו לזיהוי תמות ודפוסים. הפרטים המזהים שלך יוסרו לפני כל עיבוד. הנתונים לא ישמשו לאימון מודלים חיצוניים."',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-spacing-xl px-spacing-lg md:px-spacing-xl" dir="rtl" lang="he">
      <div className="max-w-content-width mx-auto space-y-spacing-xl">
        {/* Header */}
        <div className="space-y-spacing-md">
          <h1 className="text-h1 font-bold text-foreground">🔍 שלב 2: איסוף נתונים</h1>
          <div className="bg-card rounded-lg border border-border shadow-card p-spacing-lg">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              בשלב זה אנחנו אוספים את המידע הנדרש למחקר באמצעים שונים: ראיונות, שאלונים, תצפיות, ומבדקי שמישות. 
              זהו שלב עדין וקריטי מבחינת מהימנות הנתונים והאופן שבו אנו מייצגים את קולות המשתמשים.
              שילוב AI בשלב זה נועד להאיץ תהליכים, לחדד שאלות, ולתמוך באיסוף שיטתי, תוך שמירה על אמפתיה, שקיפות ופרטיות.
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
            שלב איסוף הנתונים הוא השלב שבו אנחנו באים במגע ישיר עם משתמשים אמיתיים, ולכן האחריות האתית שלנו כאן מוגברת.
          </p>
          <div className="space-y-spacing-sm">
            <p className="font-semibold text-foreground">האחריות שלנו כחוקרות וחוקרי חווית משתמשים בשלב זה:</p>
            <ul className="space-y-spacing-xs">
              {guidelines.map((guideline, index) => (
                <li key={index} className="text-text-secondary leading-relaxed pr-spacing-lg relative before:content-['✓'] before:absolute before:right-0 before:text-primary before:font-bold">
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-spacing-lg">
          <h2 className="text-h2 font-bold text-primary">משימות נפוצות עם AI בשלב איסוף הנתונים</h2>
          {tasks.map((task) => (
            <div key={task.id} className="bg-card rounded-lg border border-border shadow-card">
              <Accordion type="single" collapsible>
                <AccordionItem value={task.id} className="border-none">
                  <AccordionTrigger className="px-spacing-lg py-spacing-lg hover:no-underline">
                    <div className="text-right">
                      <h2 className="text-h3 font-bold text-foreground">{task.title}</h2>
                      <p className="text-body-lg text-text-muted mt-spacing-xs">({task.titleEn})</p>
                      {task.subtasks && (
                        <p className="text-body text-text-muted mt-spacing-sm">
                          {task.subtasks.join(" • ")}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-spacing-lg pb-spacing-lg space-y-spacing-lg">
                    {/* Context */}
                    {task.context && (
                      <div className="bg-muted rounded-lg p-spacing-lg">
                        <p className="text-text-secondary leading-relaxed">{task.context}</p>
                      </div>
                    )}

                    {/* Question */}
                    {task.question && (
                      <div className="bg-accent-warning/10 rounded-lg p-spacing-lg border-r-4 border-r-accent-warning">
                        <p className="font-semibold text-foreground mb-spacing-xs">שאלו את עצמכם:</p>
                        <p className="text-text-secondary leading-relaxed">{task.question}</p>
                      </div>
                    )}

                    {/* Principles */}
                    <div className="bg-primary/5 rounded-lg p-spacing-lg border-r-4 border-r-primary">
                      <h3 className="text-body-lg font-bold text-foreground mb-spacing-sm">עקרונות אתיים מהותיים</h3>
                      <div className="flex flex-wrap gap-spacing-xs">
                        {task.principles.split(", ").map((principle, idx) => (
                          <Badge key={idx} variant="secondary" className="text-body-sm px-spacing-sm py-spacing-xs">
                            {principle}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* How to Act */}
                    <div>
                      <h3 className="text-body-lg font-bold text-foreground mb-spacing-md">פעולות מעשיות</h3>
                      <div className="space-y-spacing-md">
                        {task.howToAct.map((action, index) => (
                          <div key={index} className="bg-muted/50 p-spacing-md rounded-lg space-y-spacing-sm">
                            <p className="font-semibold text-foreground">{index + 1}. {action.title}</p>
                            <p className="text-text-secondary leading-relaxed">{action.content}</p>
                            {action.prompt && (
                              <div className="bg-background p-spacing-md rounded-lg border-r-2 border-r-primary/50">
                                <p className="text-body-sm text-text-muted mb-spacing-xs">פרומפט לדוגמה:</p>
                                <p className="text-text-secondary font-mono text-body-sm">{action.prompt}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
