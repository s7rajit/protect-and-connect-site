
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl opacity-0 animate-fade-in delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}
