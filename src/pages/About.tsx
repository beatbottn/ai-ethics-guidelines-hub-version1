import { useState } from "react";
import { Linkedin, BookOpen, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  useSEO({
    title: "אודות המדריך | AI UXR Ethics Guidelines",
    description: "מידע על יוצרות המדריך, מתודולוגיה ומקורות המחקר. מדריך אתי לשימוש ב-AI במחקר משתמשים."
  });
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-6 md:px-12" dir="rtl" lang="he">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold text-foreground">אודות המדריך</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            מדריך זה נועד לספק כלים מעשיים לחוקרות וחוקרי משתמשים, מעצבות ומעצבי UX ומנהלות ומנהלי צוותים לשימוש אתי
            ואחראי בכלי AI בכל שלבי המחקר. המדריך מדגיש את החשיבות של שמירה על המצפן האתי תוך כדי ניצול היתרונות שמציעה
            הטכנולוגיה.
          </p>
        </div>

        {/* Methodology Section */}
        <Collapsible open={isMethodologyOpen} onOpenChange={setIsMethodologyOpen} className="card-elevated p-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">מתודולוגיה ומקורות</h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                המדריך נבנה על בסיס עקרונות אתיים מוכחים ממחקר אקדמי, הנחיות תעשייתיות ותקנים בינלאומיים לשמירה על אתיקה
                הוגנת, אבטחה ופרטיות ושימוש אחראי ב-AI. שילבנו תובנות ממגוון מקורות מובילים: מסגרות אתיות, רגולציה,
                מתודולוגיות עיצוב ומחקרים אקדמיים.
              </p>
            </div>

            <CollapsibleTrigger
              type="button"
              className="p-1 hover:bg-muted rounded transition-colors self-center"
              aria-label={isMethodologyOpen ? "סגור מקורות" : "פתח מקורות"}
            >
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${isMethodologyOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-6 pt-6">
            {/* מסגרות אתיות */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                ✓ מסגרות אתיות מוכרות המתוות עקרונות אתיים אוניברסליים
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <a
                    href="https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Belmont Report
                  </a>{" "}
                  | The National Commission | 1976
                </li>
                <li>
                  <a
                    href="https://www.turing.ac.uk/sites/default/files/2019-08/understanding_artificial_intelligence_ethics_and_safety.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Understanding artificial intelligence ethics and safety
                  </a>{" "}
                  | The Alan Turing Institute | 2019
                </li>
                <li>
                  <a
                    href="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Microsoft-Responsible-AI-Standard-General-Requirements.pdf?culture=en-us&country=us"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Responsible AI Standard (General Requirements)
                  </a>{" "}
                  | Microsoft | 2022
                </li>
              </ul>
            </div>

            {/* רגולציה ומדיניות */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                ✓ מסמכי רגולציה ומדיניות ממשלתית ובינלאומית (Global & Local Governance)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    AI Act (Regulation (EU) 2024/1689)
                  </a>{" "}
                  | European Commission (EU) | 2024
                </li>
                <li>
                  <a
                    href="https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Recommendation of the Council on Artificial Intelligence (OECD AI Principles)
                  </a>{" "}
                  | OECD | 2019 (מעודכן ל-2024)
                </li>
                <li>
                  <a
                    href="https://www.idi.org.il/media/21222/human-machine-state.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    אדם, מכונה, מדינה: לקראת אסדרה של בינה מלאכותית
                  </a>{" "}
                  | המכון הישראלי לדמוקרטיה - עמיר כהנא, תהילה שוורץ אלטשולר | 2023
                </li>
              </ul>
            </div>

            {/* מחקר אתי ומתודולוגיות עיצוב */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">✓ מחקר אתי ומתודולוגיות עיצוב</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <a
                    href="https://research-and-innovation.ec.europa.eu/document/download/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en?filename=ec_rtd_ai-guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Living guidelines on the responsible use of generative AI in research
                  </a>{" "}
                  | European Commission | 2025
                </li>
                <li>
                  <a
                    href="https://www.york.ac.uk/staff/research/governance/research-policies/generative-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Responsible AI Use in Research Policy
                  </a>{" "}
                  | University of York | 2024
                </li>
                <li>
                  <a
                    href="https://www.ibm.com/design/practices/#ibm-design-for-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    IBM Design for AI: Ethics & Practices
                  </a>{" "}
                  | IBM | 2024
                </li>
                <li>
                  <a
                    href="https://maze.co/collections/ai/ethics-user-research/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    AI Ethics in UX Research: Guardrails and Best Practices
                  </a>{" "}
                  | Maze | 2024
                </li>
              </ul>
            </div>

            {/* מחקרים אקדמיים ותיאורטיים */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">✓ מחקרים אקדמיים ותיאורטיים</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <a
                    href="https://lumivero.com/resources/blog/state-of-ai-in-qualitative-research/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    AI Ethical Guidelines
                  </a>{" "}
                  | EDUCAUSE Working Group | 2025
                </li>
                <li>
                  <a
                    href="https://lumivero.com/resources/blog/state-of-ai-in-qualitative-research/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    The state of AI in qualitative research in 2025
                  </a>{" "}
                  | Lumivero | 2025
                </li>
                <li>
                  <a
                    href="https://rfkhumanrights.org/our-voices/bias-in-code-algorithm-discrimination-in-financial-systems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Bias in Code: Algorithm Discrimination in Financial Systems
                  </a>{" "}
                  | Writer: Spencer Wang, Robert & Ethel Kennedy Human Rights Center | 2025
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1007/s00146-025-02673-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:underline"
                  >
                    Examining trends in AI ethics across countries (Quantitative Analysis)
                  </a>{" "}
                  | אושרי בר-גיל (אוניברסיטת בר-אילן) | 2025
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 pt-4">
              ההמלצות מתמקדות בכלי AI מבוססי שיחה (LLMs) שבהם משתמשים חוקרי UX מדי יום, ומספקות הנחיות מעשיות ישימות לכל
              שלב במחקר.
            </p>
          </CollapsibleContent>
        </Collapsible>

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
                כבר קרוב לשני עשורים עוסקת בחווית אנשים בפתרונות טכנולוגיים ושירותים. מובילה בתחום חדשנות ממוקדת-אנשים
                ו-Responsible AI ומלווה צוותים מגוונים (מגזר פרטי, ציבורי ושלישי) בפתרון בעיות מורכבות, בצורה ממוקדת
                אנשים, קולוברטיבית ואחראית. אני מלווה תהליכי יצירת פתרונות חדשניים, תוך התאמת הכלים והתהליכים לאופי
                הייחודי ולצרכים של כל צוות. מנחת סדנאות Design Thinking ו-Design sprints לקיים שיח מקדם ולקבל החלטות מהר
                וביחד.
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
              src="/images/naama-new.png"
              alt="נעמה שפירא"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shrink-0 shadow-lg"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">נעמה שפירא</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                אשת חווית משתמש עם ניסיון של מעל ל-20 שנה במחקר, אפיון וגיבוש אסטרטגיה למוצרים מורכבים בסביבות עתירות
                טכנולוגיה מתקדמת (למשל ב- Intel, Dropbox ו-Microsoft). הגישה של נעמה ל-UX נשענת על תואר שני בפסיכולוגיה
                של האינטרנט, ניסיון רחב בעיצוב ומחקר, והבנה מעמיקה של אסטרטגיה עסקית. היא מתמחה ביישום פרקטי של תובנות
                מחקר, שעוזרות להתוות את הדרך לעיצוב, טקטיקה ואסטרטגיה במוצרים חדשניים. כשהיא לא עושה UX, נעמה מתנדבת
                במיזמים שמשפרים את העולם באמצעות טכנולוגיה מתקדמת..
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
                <span className="font-semibold">תאריך פרסום:</span> דצמבר 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
