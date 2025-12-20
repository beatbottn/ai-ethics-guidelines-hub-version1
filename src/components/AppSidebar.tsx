import { Home, BookOpen, AlertTriangle, ClipboardList, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const navigationItems = [
  { title: "דף הבית", url: "/", icon: Home },
  { title: "אתגרי AI", url: "/challenges", icon: AlertTriangle },
  { title: "עקרונות אתיים", url: "/principles", icon: BookOpen },
  {
    title: "שלבי המחקר",
    url: "/phases",
    icon: ClipboardList,
    subItems: [
      { title: "שלב 1: תכנון והגדרת מטרות", url: "/phases/planning" },
      { title: "שלב 2: איסוף נתונים", url: "/phases/data-collection" },
      { title: "שלב 3: ניתוח התוצאות", url: "/phases/analysis" },
      { title: "שלב 4: הצגת ממצאים", url: "/phases/presentation" },
    ],
  },
  { title: "אודות", url: "/about", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();

  const isActive = (url: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === url;
    }
    return location.pathname === url || location.pathname.startsWith(url + "/");
  };

  return (
    <Sidebar side="right" dir="rtl" className="border-r-0 border-l border-sidebar-border min-w-[--sidebar-width]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible defaultOpen className="group/collapsible">
                      <div className="flex items-center">
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(item.url)}
                          className="flex-1"
                        >
                          <Link to={item.url}>
                            <item.icon className="ml-2 h-4 w-4" />
                            {!isCollapsed && <span>{item.title}</span>}
                          </Link>
                        </SidebarMenuButton>
                        {!isCollapsed && (
                          <CollapsibleTrigger asChild>
                            <button className="p-2 hover:bg-sidebar-accent/50 rounded-md">
                              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </button>
                          </CollapsibleTrigger>
                        )}
                      </div>
                      {!isCollapsed && (
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-r-0 mr-0 pr-0">
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.url}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive(subItem.url, true)}
                                >
                                  <Link to={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url, item.url === "/")}
                    >
                      <Link to={item.url}>
                        <item.icon className="ml-2 h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
