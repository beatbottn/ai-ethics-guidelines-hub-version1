import { useState } from "react";
import { Linkedin, BookOpen, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const About = () => {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background py-spacing-xl px-spacing-lg md:px-spacing-xl" dir="rtl" lang="he">
      <div className="max-w-content-width mx-auto space-y-spacing-xl">
        {/* Header */}
        <div className="space-y-spacing-md">
          <h1 className="text-h1 font-bold text-foreground">אודות המדריך</h1>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            מדריך זה נועד לספק כלים מעשיים לחוקרות וחוקרי משתמשים, מעצבות ומעצבי UX ומנהלות ומנהלי צוותים לשימוש אתי
            ואחראי בכלי AI בכל שלבי המחקר. המדריך מדגיש את החשיבות של שמירה על המצפן האתי תוך כדי ניצול היתרונות שמציעה
            הטכנולוגיה.
          </p>
        </div>

        {/* Methodology Section */}
        <Collapsible open={isMethodologyOpen} onOpenChange={setIsMethodologyOpen} className="bg-card rounded-lg border border-border shadow-card p-spacing-lg">
          <div className="flex items-center gap-spacing-md">
            <div className="flex-1 space-y-spacing-md">
              <h2 className="text-h2 font-bold text-foreground">מתודולוגיה ומקורות</h2>
              <p className="text-body-lg leading-relaxed text-text-secondary">
                המדריך נבנה על בסיס עקרונות אתיים מוכחים ממחקר אקדמי, הנחיות תעשייתיות ותקנים בינלאומיים לשמירה על אתיקה
                הוגנת, אבטחה ופרטיות ושימוש אחראי ב-AI. שילבנו תובנות ממגוון מקורות מובילים: מסגרות אתיות, רגולציה,
                מתודולוגיות עיצוב ומחקרים אקדמיים.
              </p>
            </div>

            <CollapsibleTrigger
              type="button"
              className="p-spacing-xs hover:bg-muted rounded-lg transition-colors self-center"
              aria-label={isMethodologyOpen ? "סגור מקורות" : "פתח מקורות"}
            >
              <ChevronDown
                className={`h-5 w-5 text-text-muted transition-transform ${isMethodologyOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-spacing-lg pt-spacing-lg">
            {/* מסגרות אתיות */}
            <div className="space-y-spacing-sm">
              <h3 className="text-h4 font-semibold text-foreground">
                ✓ מסגרות אתיות מוכרות המתוות עקרונות אתיים אוניברסליים
              </h3>
              <ul className="list-disc list-inside space-y-spacing-xs text-text-secondary">
                <li>
                  <a
                    href="https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    Microsoft Responsible AI Standard (General Requirements)
                  </a>{" "}
                  | Microsoft | 2022
                </li>
              </ul>
            </div>

            {/* רגולציה ומדיניות */}
            <div className="space-y-spacing-sm">
              <h3 className="text-h4 font-semibold text-foreground">
                ✓ מסמכי רגולציה ומדיניות ממשלתית ובינלאומית (Global & Local Governance)
              </h3>
              <ul className="list-disc list-inside space-y-spacing-xs text-text-secondary">
                <li>
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    אדם, מכונה, מדינה: לקראת אסדרה של בינה מלאכותית
                  </a>{" "}
                  | המכון הישראלי לדמוקרטיה - עמיר כהנא, תהילה שוורץ אלטשולר | 2023
                </li>
              </ul>
            </div>

            {/* מחקר אתי ומתודולוגיות עיצוב */}
            <div className="space-y-spacing-sm">
              <h3 className="text-h4 font-semibold text-foreground">✓ מחקר אתי ומתודולוגיות עיצוב</h3>
              <ul className="list-disc list-inside space-y-spacing-xs text-text-secondary">
                <li>
                  <a
                    href="https://research-and-innovation.ec.europa.eu/document/download/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en?filename=ec_rtd_ai-guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    AI Ethics in UX Research: Guardrails and Best Practices
                  </a>{" "}
                  | Maze | 2024
                </li>
              </ul>
            </div>

            {/* מחקרים אקדמיים ותיאורטיים */}
            <div className="space-y-spacing-sm">
              <h3 className="text-h4 font-semibold text-foreground">✓ מחקרים אקדמיים ותיאורטיים</h3>
              <ul className="list-disc list-inside space-y-spacing-xs text-text-secondary">
                <li>
                  <a
                    href="https://lumivero.com/resources/blog/state-of-ai-in-qualitative-research/"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
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
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    Examining trends in AI ethics across countries (Quantitative Analysis)
                  </a>{" "}
                  | אושרי בר-גיל (אוניברסיטת בר-אילן) | 2025
                </li>
              </ul>
            </div>

            <p className="text-body-lg leading-relaxed text-text-secondary pt-spacing-md">
              ההמלצות מתמקדות בכלי AI מבוססי שיחה (LLMs) שבהם משתמשים חוקרי UX מדי יום, ומספקות הנחיות מעשיות ישימות לכל
              שלב במחקר.
            </p>
          </CollapsibleContent>
        </Collapsible>

        {/* Authors Section */}
        <div className="bg-card rounded-lg border border-border shadow-card p-spacing-lg space-y-spacing-lg">
          <h2 className="text-h2 font-bold text-foreground flex items-center gap-spacing-sm">
            <BookOpen className="h-8 w-8 text-primary" />
            יוצרות המדריך
          </h2>

          {/* Author 1 - Sivana */}
          <div className="flex flex-col md:flex-row gap-spacing-lg items-start">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-card bg-muted">
              <img
                src="/images/sivana-enhanced.png"
                alt="סיונה שרלג"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="space-y-spacing-sm">
              <h3 className="text-h3 font-semibold text-foreground">סיונה שרלג</h3>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                חוקרת משתמשים ומעצבת חוויית משתמש עם ניסיון רב שנים בתחום. מתמחה במחקר משתמשים מתודולוגי ובאינטגרציה של
                טכנולוגיות חדשניות בתהליכי המחקר.
              </p>
              <Button variant="outline" className="gap-spacing-xs" asChild>
                <a href="https://www.linkedin.com/in/sivana/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Author 2 - Naama */}
          <div className="flex flex-col md:flex-row gap-spacing-lg items-start">
            <img
              src="/images/naama-new.png"
              alt="נעמה שפירא"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shrink-0 shadow-card"
            />
            <div className="space-y-spacing-sm">
              <h3 className="text-h3 font-semibold text-foreground">נעמה שפירא</h3>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                מומחית בתחום מחקר משתמשים ועיצוב חוויית משתמש. תורמת להתפתחות מקצועית של קהילת ה-UX בישראל ומובילה
                יוזמות לקידום עבודה אתית ואחראית בתחום.
              </p>
              <Button variant="outline" className="gap-spacing-xs" asChild>
                <a href="https://www.linkedin.com/in/nshapi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Publication Date */}
          <div className="pt-spacing-lg border-t border-border">
            <div className="flex items-center gap-spacing-sm text-text-secondary">
              <Calendar className="h-5 w-5" />
              <span className="text-body-lg">
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
