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
import {
  HomeIcon,
  DangerTriangleIcon,
  CompassIcon,
  ChecklistIcon,
  Phase1Icon,
  Phase2Icon,
  Phase3Icon,
  Phase4Icon,
  UsersIcon,
  ChevronDownIcon,
} from "@/components/icons/NavIcons";

const navigationItems = [
  { title: "דף הבית", url: "/", icon: HomeIcon },
  { title: "אתגרי AI", url: "/challenges", icon: DangerTriangleIcon },
  { title: "עקרונות אתיים", url: "/principles", icon: CompassIcon },
  {
    title: "שלבי המחקר",
    url: "/phases",
    icon: ChecklistIcon,
    subItems: [
      { title: "שלב 1: תכנון והגדרת מטרות", url: "/phases/planning", icon: Phase1Icon },
      { title: "שלב 2: איסוף נתונים", url: "/phases/data-collection", icon: Phase2Icon },
      { title: "שלב 3: ניתוח התוצאות", url: "/phases/analysis", icon: Phase3Icon },
      { title: "שלב 4: הצגת ממצאים", url: "/phases/presentation", icon: Phase4Icon },
    ],
  },
  { title: "אודות", url: "/about", icon: UsersIcon },
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
    <Sidebar side="right" dir="rtl" className="border-r-0 border-l border-sidebar-border bg-muted/30">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible defaultOpen className="group/collapsible w-full">
                      <div className="flex w-full items-center">
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(item.url)}
                          className="flex-1 h-12"
                        >
                          <Link to={item.url}>
                            <item.icon className="ml-2 h-6 w-6" />
                            {!isCollapsed && <span>{item.title}</span>}
                          </Link>
                        </SidebarMenuButton>
                        {!isCollapsed && (
                          <CollapsibleTrigger asChild>
                            <button className="p-2 hover:bg-sidebar-accent/50 rounded-md">
                              <ChevronDownIcon className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
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
                                  className="h-10 px-3"
                                >
                                  <Link to={subItem.url} className="flex items-center gap-2">
                                    <subItem.icon className="h-5 w-5" />
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
                      className="h-12"
                    >
                      <Link to={item.url}>
                        <item.icon className="ml-2 h-6 w-6" />
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
