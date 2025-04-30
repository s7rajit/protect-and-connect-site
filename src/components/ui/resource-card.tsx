
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  downloadLink: string;
}

export function ResourceCard({ title, description, fileType, downloadLink }: ResourceCardProps) {
  return (
    <Card className="h-full flex flex-col opacity-0 animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-prevented-blue-light/20 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prevented-blue">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-prevented-blue-light/10 text-prevented-blue mb-2">
          {fileType}
        </span>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          asChild
          variant="outline" 
          className="w-full"
        >
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            Download Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
