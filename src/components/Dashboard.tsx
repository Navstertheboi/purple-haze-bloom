import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Download, Search, Filter, Building, MapPin, Users, Target, Award, TrendingUp, Globe } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dashboard-gradient text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-xl bg-background/10 sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-foreground tracking-tight">PE CFO Recruitment Dashboard</h1>
              <p className="text-muted-foreground text-lg mt-1">Finatal • AI-Powered CFO Search</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">0</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">candidates</div>
                </div>
                <div className="w-px h-8 bg-border/50"></div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-accent">3</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">active projects</div>
                </div>
              </div>
              <Button variant="outline" size="default" className="gap-2 hover:bg-secondary/50 transition-all duration-200">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in">
            {/* Current Project */}
            <Card className="bg-card-gradient border-border/30 backdrop-blur-sm shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              <div className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground text-lg">Current Project</h3>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/80 rounded-xl flex items-center justify-center ring-2 ring-primary/20">
                      <Building className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">TechMed Healthcare</h4>
                      <p className="text-sm text-muted-foreground">Summit Capital • Healthcare Technology</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="text-muted-foreground text-xs uppercase tracking-wider">Industry</div>
                      <div className="text-foreground font-medium">Healthcare Technology</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground text-xs uppercase tracking-wider">Locations</div>
                      <div className="text-foreground font-medium">45+</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">Atlanta, GA</span>
                    <Badge variant="outline" className="ml-auto text-xs">45+ locations</Badge>
                  </div>

                  <div className="p-4 bg-secondary/30 rounded-xl border border-border/20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Summit Capital owns 45-location healthcare system in Atlanta
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className="bg-success/20 text-success border-success/30 hover:bg-success/30 px-3 py-1">
                      <Award className="w-3 h-3 mr-2" />
                      AI Template Active
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Intelligent search parameters generated by GPT-4
                  </p>
                </div>

                <div className="space-y-3 mt-8">
                  <Button className="w-full bg-info hover:bg-info/90 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                    <Search className="w-4 h-4 mr-2" />
                    Search LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full py-3 hover:bg-secondary/50 transition-all duration-200">
                    <Filter className="w-4 h-4 mr-2" />
                    Edit Project
                  </Button>
                </div>
              </div>
            </Card>

            {/* Smart Filters */}
            <Card className="bg-card-gradient border-border/30 backdrop-blur-sm shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              <div className="p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Filter className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Smart Filters</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Min AI Score
                    </label>
                    <Slider
                      defaultValue={[0]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>0</span>
                      <span>100</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Qualification Level
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-secondary/50 border-border/50 hover:bg-secondary/70 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border/50 backdrop-blur-sm">
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Recommendation
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-secondary/50 border-border/50 hover:bg-secondary/70 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border/50 backdrop-blur-sm">
                        <SelectItem value="all">All Recommendations</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="weak">Weak</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            {/* Project Header */}
            <div className="flex items-center justify-between p-6 bg-card-gradient rounded-xl border border-border/30 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-medium">45+ locations • Atlanta, GA</span>
                <Badge className="bg-success/20 text-success border-success/30 hover:bg-success/30">
                  <Award className="w-3 h-3 mr-1" />
                  AI Template Active
                </Badge>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total", value: "0", color: "text-muted-foreground", icon: Users },
                { label: "High Priority", value: "0", color: "text-warning", icon: Target },
                { label: "Qualified", value: "0", color: "text-success", icon: Award },
                { label: "PE Exp", value: "0", color: "text-accent", icon: TrendingUp }
              ].map((metric, index) => (
                <Card key={metric.label} className="bg-card-gradient border-border/30 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="p-6 text-center space-y-3">
                    <div className="w-10 h-10 mx-auto bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
                      <metric.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className={`text-4xl font-bold ${metric.color} group-hover:scale-105 transition-transform`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main Content Area */}
            <Card className="bg-card-gradient border-border/30 backdrop-blur-sm min-h-[500px] shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl flex items-center justify-center mb-8 ring-4 ring-secondary/20">
                  <Users className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  No candidates yet
                </h3>
                <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed text-lg">
                  Start a LinkedIn search to find CFO candidates for your TechMed Healthcare project. Our AI will analyze profiles and provide intelligent recommendations.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 animate-glow px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-200">
                  <Search className="w-6 h-6 mr-3" />
                  Search LinkedIn Now
                </Button>
                
                {/* Additional helpful info */}
                <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>AI-powered matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Real-time results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <span>45+ location coverage</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;