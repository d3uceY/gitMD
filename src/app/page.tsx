"use client"
import { ReleaseForm } from "@/components/release-form";
import { ReleasePreview } from "@/components/release-result";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">gitMD</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <Card className="p-6 bg-card shadow-card">
            <ReleaseForm />
          </Card>

          <div className="lg:sticky lg:top-24 h-fit">
            <ReleasePreview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
