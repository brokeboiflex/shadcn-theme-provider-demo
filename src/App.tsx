import { useEffect, useRef } from "react";
import { useTheme } from "shadcn-theme-provider";
import type { ThemeMode } from "shadcn-theme-provider";
import {
  Sun,
  Moon,
  Monitor,
  Star,
  Bell,
  Mail,
  Send,
  Plus,
  Search,
  Settings,
  CreditCard,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M0 0v16h16V0H0zm13 13H8V5h-2v8H3V3h10v10z" />
    </svg>
  );
}

const modeOptions: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

// ─── Component Showcase ────────────────────────────────────────────

function PaymentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          All transactions are secure and encrypted
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name on Card</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 space-y-2">
            <Label>Card Number</Label>
            <Input placeholder="1234 5678 9012 3456" />
          </div>
          <div className="space-y-2">
            <Label>CVV</Label>
            <Input placeholder="123" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="billing" defaultChecked />
          <Label htmlFor="billing" className="font-normal">
            Same as shipping address
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

function TeamCard() {
  const members = [
    { name: "Sofia Davis", email: "sofia@example.com", initials: "SD" },
    { name: "Alex Chen", email: "alex@example.com", initials: "AC" },
    { name: "Jamie Lee", email: "jamie@example.com", initials: "JL" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Manage your team and permissions</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {members.map((m) => (
          <div key={m.email} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{m.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.email}</p>
              </div>
            </div>
            <Select defaultValue="member">
              <SelectTrigger className="w-[110px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[
          {
            icon: Mail,
            title: "Email notifications",
            desc: "Receive emails for new messages",
          },
          {
            icon: Bell,
            title: "Push notifications",
            desc: "Receive push on your device",
          },
          {
            icon: Star,
            title: "Activity updates",
            desc: "Weekly digest of activity",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium leading-none">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
            <Switch />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ChatCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Messages</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="text-xs">SD</AvatarFallback>
          </Avatar>
          <div className="rounded-lg bg-muted px-3 py-2 text-sm">
            Hey, can you review the PR?
          </div>
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="text-xs">You</AvatarFallback>
          </Avatar>
          <div className="rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
            Sure, looking at it now!
          </div>
        </div>
        <div className="flex gap-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="text-xs">SD</AvatarFallback>
          </Avatar>
          <div className="rounded-lg bg-muted px-3 py-2 text-sm">
            Great, no rush 🙌
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Input placeholder="Send a message..." className="flex-1" />
          <Button size="icon" variant="default">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SettingsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>Customize your workspace</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search settings..." className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Font size</Label>
          <Slider defaultValue={[16]} min={12} max={24} step={1} />
        </div>
        <div className="space-y-2">
          <Label>Sync progress</Label>
          <Progress value={68} />
          <p className="text-xs text-muted-foreground">68% complete</p>
        </div>
        <div className="space-y-3">
          <Label>Density</Label>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="compact" />
              <Label htmlFor="compact" className="font-normal">
                Compact
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="comfortable" />
              <Label htmlFor="comfortable" className="font-normal">
                Comfortable
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

const chartData = [
  { month: "Jan", revenue: 4200, expenses: 2800 },
  { month: "Feb", revenue: 3800, expenses: 2200 },
  { month: "Mar", revenue: 5100, expenses: 3100 },
  { month: "Apr", revenue: 4600, expenses: 2600 },
  { month: "May", revenue: 6200, expenses: 3400 },
  { month: "Jun", revenue: 7800, expenses: 3800 },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
} satisfies ChartConfig;

function RevenueChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Monthly revenue vs expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function FeedbackCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
        <CardDescription>Tell us what you think</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label>Subject</Label>
          <Input placeholder="What's this about?" />
        </div>
        <div className="space-y-2">
          <Label>Message</Label>
          <Textarea placeholder="Your feedback..." rows={3} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Bug Report</Badge>
          <Badge variant="secondary">Feature Request</Badge>
          <Badge variant="outline">Question</Badge>
          <Badge variant="destructive">Urgent</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Send className="mr-2 h-4 w-4" />
          Submit Feedback
        </Button>
      </CardFooter>
    </Card>
  );
}

function ActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {[
          { icon: Plus, label: "New project", variant: "default" as const },
          { icon: Users, label: "Invite team", variant: "secondary" as const },
          {
            icon: Settings,
            label: "Settings",
            variant: "outline" as const,
          },
          {
            icon: ArrowRight,
            label: "View docs",
            variant: "ghost" as const,
          },
        ].map(({ icon: Icon, label, variant }) => (
          <Button
            key={label}
            variant={variant}
            className="w-full justify-start"
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}

// ─── Main App ──────────────────────────────────────────────────────

function App() {
  const { mode, setMode, palette, setPalette, themes } = useTheme();
  const hasPickedRandom = useRef(false);

  // On mount: pick a random theme
  useEffect(() => {
    if (hasPickedRandom.current || themes.length < 2) return;
    hasPickedRandom.current = true;
    setPalette(themes[Math.floor(Math.random() * themes.length)]);
  }, [themes, setPalette]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-8">
        <div className="mb-10 text-center animate-fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="mx-auto mb-6 h-12 w-12" aria-hidden="true">
            <rect width="256" height="256" fill="none" />
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            Shadcn Theme Provider
          </h1>
          <p className="text-lg text-muted-foreground">
            Let your users personalize the UI without reloads or friction. This
            live theming solution for React and shadcn/ui supports instant theme
            switching, color customization, and system preference sync.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://github.com/brokeboiflex/shadcn-theme-provider"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/shadcn-theme-provider"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <NpmIcon className="h-4 w-4" />
              npm
            </a>
          </div>
        </div>

        {/* Theme controls */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <ToggleGroup
            value={[mode]}
            onValueChange={(newValue) => {
              if (newValue.length > 0) setMode(newValue[0] as ThemeMode);
            }}
            variant="outline"
          >
            {modeOptions.map(({ value, label, icon: Icon }) => (
              <ToggleGroupItem key={value} value={value}>
                <Icon className="h-3.5 w-3.5" />
                {label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Select value={palette} onValueChange={(v) => v && setPalette(v)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue className={"capitalize"} />
            </SelectTrigger>
            <SelectContent>
              {themes.map((t) => (
                <SelectItem key={t} value={t}>
                  <span className="capitalize">{t}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Component Showcase */}
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-3">
            <RevenueChartCard />
          </div>
          <div className="flex flex-col gap-4">
            <PaymentCard />
            <ActionsCard />
          </div>
          <div className="flex flex-col gap-4">
            <TeamCard />
            <ChatCard />
            <FeedbackCard />
          </div>
          <div className="flex flex-col gap-4">
            <NotificationsCard />
            <SettingsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
