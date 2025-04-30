
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
}

export function ProgramCard({ title, description, image, categories, link }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col opacity-0 animate-fade-in">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex gap-2 mb-2 flex-wrap">
          {categories.map((category) => (
            <span 
              key={category}
              className="text-xs font-medium px-2 py-1 rounded-full bg-prevented-blue-light/20 text-prevented-blue"
            >
              {category}
            </span>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Additional content can go here */}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full">
          <a href={link}>Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
