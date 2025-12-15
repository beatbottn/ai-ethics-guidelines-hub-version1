import { Home, BookOpen, AlertTriangle, ClipboardList, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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

  return (
    <Sidebar side="right" dir="rtl" className="border-r-0 border-l border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible defaultOpen className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full">
                          <item.icon className="ml-2 h-4 w-4" />
                          {!isCollapsed && (
                            <>
                              <span>{item.title}</span>
                              <ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!isCollapsed && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.url}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      `flex items-center w-full transition-colors rounded-md ${isActive
                                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                                        : "hover:bg-sidebar-accent/50"
                                      }`
                                    }
                                  >
                                    <span>{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `flex items-center w-full transition-colors focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-1 rounded-md ${isActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                            : "hover:bg-sidebar-accent/50"
                          }`
                        }
                      >
                        <item.icon className="ml-2 h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
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
