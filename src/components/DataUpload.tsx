import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileCheck, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const DataUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.name.endsWith(".csv") || file.name.endsWith(".json") || file.name.endsWith(".xlsx")) {
      setUploadedFile(file.name);
      toast({
        title: "File uploaded successfully!",
        description: `${file.name} is ready for analysis.`,
      });
    } else {
      toast({
        title: "Invalid file format",
        description: "Please upload CSV, JSON, or XLSX files only.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="upload" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Upload Crime Dataset
        </h2>
        
        <Card className="glass-effect max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Dataset Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                isDragging 
                  ? "border-primary bg-primary/10 scale-105" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {uploadedFile ? (
                <div className="animate-scale-in">
                  <FileCheck className="w-16 h-16 mx-auto mb-4 text-chart-4" />
                  <p className="text-lg font-semibold mb-2">{uploadedFile}</p>
                  <p className="text-sm text-muted-foreground mb-4">Ready for analysis</p>
                  <Button 
                    onClick={() => setUploadedFile(null)}
                    variant="outline"
                  >
                    Upload Different File
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold mb-2">
                    Drag & drop your dataset here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse
                  </p>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".csv,.json,.xlsx"
                    onChange={handleFileInput}
                  />
                  <Button 
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="gradient-primary"
                  >
                    Select File
                  </Button>
                </>
              )}
            </div>
            
            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>Supported formats: CSV, JSON, XLSX. Maximum file size: 10MB</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
