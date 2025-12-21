import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const challenges = [
  {
    id: "bias",
    title: "הטיה אלגוריתמית",
    titleEn: "Algorithmic Bias",
    description:
      "מערכות AI מאומנות על נתונים המשקפים לעיתים קרובות הטיות חברתיות קיימות, שלעתים משקפות אי-שוויון חברתי, דעות קדומות גזעיות, מגדריות או תרבותיות. שימוש לא מודע בכלים אלו עלול להוביל להנצחת אפליה בניתוח, תמלול או סיכום נתונים, ועלול להוציא אוכלוסיות מסוימות ״מחוץ לתמונה״.",
    realWorldExample:
      'בשנת 2018, אמזון גילתה שכלי הגיוס האוטומטי שלה מפלה באופן שיטתי נגד נשים במשרות טכנולוגיות. המערכת, שאומנה על קורות חיים שהוגשו בעבר (רובם של גברים), למדה "להעדיף" מועמדים גברים ואף הורידה ציון לקורות חיים שהכילו את המילה "women\'s" (למשל, "women\'s chess club captain").',
    additionalExample:
      "מחקר של MIT חשף שמערכות זיהוי פנים מזהות בצורה מדויקת גברים בעלי עור בהיר בשיעור שגיאה של 0.8%, אך עבור נשים כהות עור - שיעור השגיאה מזנק ל-34.7%.",
    links: [
      {
        text: "Reuters - Amazon scraps secret AI recruiting tool",
        url: "https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G",
      },
      {
        text: "MIT News - Gender and skin-type bias in AI systems",
        url: "https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212",
      },
    ],
    uxContext:
      "כאשר משתמשים ב-AI לסיכום ראיונות, קידוד תמות, או ניתוח סנטימנט - המודל עלול להעצים הטיות קיימות בנתונים ולהדיר קולות של קבוצות מוחלשות או מיעוט. לדוגמה: אם רוב המשתתפים במחקר היו בעלי פרופיל דמוגרפי דומה, ה-AI עלול להדיר או לפספס חוויות ייחודיות של משתמשים מרקע שונה.",
  },
  {
    id: "hallucinations",
    title: '"הזיות"',
    titleEn: "Hallucinations",
    description:
      "מערכות AI עלולות ליצור תוכן שנשמע סביר אך שגוי לחלוטין, כגון מידע, ציטוטים או סיכומים שאינם מבוססים על נתונים אמיתיים (של המשתתפים). במחקר, זה יכול להתבטא ביצירת ממצאים שקריים או ייחוס ציטוטים למשתתפים שלא אמרו אותם.",
    realWorldExample:
      "בשנת 2023, עורך דין בניו יורק הגיש לבית משפט פדרלי תצהיר שכלל 6 פסקי דין שהומצאו כליל על ידי ChatGPT. המודל יצר שמות של תיקים משפטיים, מספרי תיק, וציטוטים מדויקים- שאף אחד מהם לא התקיים. העורך דין התמודד עם סנקציות משפטיות, ומאז תועדו למעלה מ-50 מקרים דומים בחודש יולי 2025 בלבד.",
    links: [
      {
        text: "Stanford HAI - AI hallucinations in legal filings",
        url: "https://hai.stanford.edu/news/hallucinating-law-legal-mistakes-large-language-models-are-pervasive",
      },
      {
        text: "Damien Charlotin Database - Tracking AI hallucinations in court",
        url: "https://www.damiencharlotin.com/hallucinations/",
      },
    ],
    uxContext:
      'כאשר משתמשים ב-AI לסיכום ראיונות או יצירת מסעות משתמש, המודל עלול "למלא חסרים" בנתונים - לייחס ציטוטים שמשתתפים לא אמרו, ליצור "נקודות כאב" שלא עלו במחקר, או להמציא סטטיסטיקות תומכות. זה עלול להוביל להחלטות עיצוב מבוססות על נתונים פיקטיביים.',
  },
  {
    id: "blackbox",
    title: "קושי בהסברתיות",
    titleEn: "Black Box",
    description:
      "חוסר יכולת להבין כיצד ה-AI הגיע למסקנה מסוימת או לזהות דפוס מסוים (Black Box). במחקר, זה הופך את תהליך הניתוח למשימה שמאד מקשה על ניתוח ״בעין אנושי״ את התובנות האמיתיות החבויות במידע שנאסף, וזה בעיקר עלול להקשות על זיהוי הטיות נסתרות או איתור של תופעות השטחה כמו - Average washing.",
    realWorldExample:
      'אלגוריתם COMPAS, המשמש במערכת המשפט הפלילית בארה"ב לחיזוי סיכון לחזרה לפשע, נחקר על ידי ProPublica בשנת 2016. התחקיר חשף שהמערכת סיווגה באופן שיטתי נאשמים שחורים כ"סיכון גבוה" פי שניים מנאשמים לבנים - גם כאשר ההיסטוריה הפלילית הייתה זהה. הבעיה? אף אחד, כולל היוצרים, לא יכול היה להסביר בדיוק איך האלגוריתם הגיע להחלטות אלו.',
    links: [
      {
        text: "ProPublica - Machine Bias in Criminal Sentencing",
        url: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing",
      },
    ],
    uxContext:
      'כאשר משתמשים ב-AI לקידוד פתוח, זיהוי דפוסים, או אשכול תמות - אם הכלי לא מספק הסבר ברור (Explainability) למה הוא הציע קוד מסוים או חיבר תמות מסוימות, אנו מאבדים את היכולת לאמת את התהליך. זה פוגע באמינות המחקר ומקשה על זיהוי הטיות נסתרות או תופעות של "שטיפת ממוצעים" (Average Washing).',
  },
  {
    id: "security",
    title: "סיכוני אבטחה ובטיחות",
    titleEn: "Security & Safety Risks",
    description:
      "ערכות ה-AI לעיתים נכשלות בהגנה על הנתונים או על פרטיות המשתמשים. אחד הסיכונים הוא AI Shadowing - מונח המתאר עובדות.ים המשתמשות.ים בכלי AI לא מאושרים בעבודה (כמו גרסאות חינמיות של LLMs) או עובדים בכלי AI ללא פיקוח ובקרה. כאשר אנשי UX משתמשים בכלים שונים כדי לתמלל ראיונות, לסכם נתונים, או לנתח תמות - יש סיכון שייחשף בטעות מידע מזהה של משתתפים, תובנות עסקיות רגישות, או נתונים קנייניים. זה מהווה הפרה של הסכמה מדעת, חוזים עם לקוחות, ותקנות פרטיות (כמו GDPR).",
    realWorldExample:
      'במרץ 2023, מהנדסי סמסונג הזינו בטעות קוד מקור קנייני ופרוטוקולים של פגישות פנימיות ל-ChatGPT במטרה לדבג בעיה. המידע הרגיש נשלח לשרתים חיצוניים של OpenAI, ויצר חשש לדליפת טכנולוגיה קריטית. במקרה זה, עובדים השתמשו בגרסה הציבורית של הכלי ללא פיקוח ארגוני – תופעה המכונה "AI Shadowing".',
    links: [{ text: "Incident Database AI - Samsung case", url: "https://incidentdatabase.ai/cite/541/" }],
    uxContext:
      "כאשר חוקרי UX משתמשים בכלים חיצוניים (כמו גרסאות חינמיות של ChatGPT או Gemini) כדי לתמלל ראיונות, לסכם נתונים, או לנתח תמות - יש סיכון שייחשף בטעות מידע מזהה של משתתפים, תובנות עסקיות רגישות, או נתונים קנייניים. זה מהווה הפרה של הסכמה מדעת, חוזים עם לקוחות, ותקנות פרטיות (כמו GDPR).",
  },
  {
    id: "judgment",
    title: "החלשת השיפוט האנושי ופגיעה באיכות המחקר",
    titleEn: "Impact on Human Judgment",
    description:
      'הסתמכות יתר על AI עלולה לשחוק מיומנויות מחקר קריטיות, לפגוע בעומק ההבנה ובניואנסים משמעותיים שעוזרים להבין את התוכן. במחקר, זה עלול לגרום ליצירת תוכן גנרי ולהגביר "שחיקת מידע" כאשר AI מתבסס על תוכן שנוצר בעצמו.',
    realWorldExample:
      'מחקר שפורסם ב-2024 חשף שאנשים שקיבלו המלצות מערכות AI בתחום הרפואה הסתמכו עליהן יתר על המידה - גם כאשר ההמלצות היו שגויות באופן מוכח. התופעה, המכונה "Automation Bias" (הטיית אוטומציה), הובילה להחלטות רפואיות פחות מדויקות מאשר כאשר האנשים הסתמכו על שיפוט עצמי בלבד.',
    links: [
      {
        text: "Deusto University - Overreliance on biased AI in health decisions",
        url: "https://www.deusto.es/en/home/show-news?p_p_id=com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_RlbnzTjKMOoM&p_p_lifecycle=0&p_p_state=normal&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_RlbnzTjKMOoM_assetEntryId=1071714",
      },
      {
        text: "Microsoft Research - Overreliance on AI Review",
        url: "https://www.microsoft.com/en-us/research/publication/overreliance-on-ai-literature-review/",
      },
    ],
    uxContext:
      "כאשר חוקרים מסתמכים על AI למשימות הדורשות פרספקטיבה, חשיבה וביקורת אנושית - הם עלולים לאבד את האינטואיציה המחקרית. הסתמכות יתר עלולה להוביל ליצירת תובנות גנריות, להחמיץ חוויות ייחודיות, ולפגוע ביכולת לזהות סתירות או דפוסים חריגים שדורשים חשיבה מקורית.",
  },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background py-32 px-24 lg:px-64" dir="rtl" lang="he">
      <div className="max-w-page mx-auto space-y-32">
        {/* Header */}
        <div className="space-y-16">
          <h1 className="text-h1 text-foreground">אתגרי AI: מה חשוב להכיר כאשר טעויות גורמות לנזק אמיתי</h1>
          <div className="card-elevated p-24">
            <p className="text-body text-foreground/90 leading-relaxed">
              כלי AI מציעים יתרונות רבים למחקר משתמשים, אבל הם גם מסתירים סיכונים אמיתיים. כאשר AI טועה במחקר, ההשלכות
              לא נשארות על הנייר - הן יכולות להוביל להחלטות עיצוב שפוגעות בבריאות אנשים, מפספסות קבוצות פגיעות, או
              מעמיקות אי-שוויון חברתי. להלן חמישה סיכונים מרכזיים שחשוב להכיר- כי ההשפעה שלהם על המשתמשים שלנו היא
              ממשית:
            </p>
          </div>
        </div>

        {/* Challenges List */}
        <div className="space-y-24">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="card-elevated">
              <Accordion type="single" collapsible>
                <AccordionItem value={challenge.id} className="border-none">
                  <AccordionTrigger className="px-24 py-24 hover:no-underline">
                    <div className="text-right w-full">
                      <h2 className="text-h2 text-foreground">{challenge.title}</h2>
                      <p className="text-body text-muted-foreground mt-4">({challenge.titleEn})</p>
                      <p className="text-body text-muted-foreground mt-8">{challenge.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-24 pb-24 space-y-24 bg-section-background">
                    {/* Real World Example */}
                    <div className="bg-primary/5 rounded-card p-24 border-r-4 border-r-primary">
                      <h3 className="text-h3 text-foreground mb-12">דוגמא מהעולם האמיתי</h3>
                      <p className="text-foreground/80 leading-relaxed text-body">{challenge.realWorldExample}</p>

                      {challenge.additionalExample && (
                        <p className="text-foreground/80 leading-relaxed text-body mt-16">{challenge.additionalExample}</p>
                      )}

                      {/* Links */}
                      <div className="mt-16 space-y-8">
                        {challenge.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-caption text-primary hover:underline transition-colors"
                          >
                            {link.text} ↗
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* UX Context */}
                    <div>
                      <h3 className="text-h3 text-foreground mb-12">בהקשר מחקר UX</h3>
                      <p className="text-foreground/80 leading-relaxed text-body pr-24 relative before:content-['•'] before:absolute before:right-0 before:text-primary before:font-bold">
                        {challenge.uxContext}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="card-elevated p-24 bg-destructive/5 border-r-4 border-r-destructive">
          <h2 className="text-h2 text-foreground mb-16">ממודעות לפעולה</h2>
          <p className="text-foreground/90 leading-relaxed text-body">
            מודעות לאתגרים האלה אינה אמורה להרתיע - להפך, היא מעניקה לכם כוח לפעול בביטחון. במדריך שלנו תמצאו את הכלים
            המעשיים לעבוד עם AI בכל שלב מהמחקר: מתכנון ועד המלצות, תוך שמירה על אמינות, פרטיות והגינות.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;