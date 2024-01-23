import { Badge } from '@/components/ui/badge';
import { LinearGradient } from '@/components/ui/linear-gradient';

export function Hero() {
  return (
    <div className="h-[800px] relative">
      <Badge>Technology Evangelist | Advisor | Consultant</Badge>
      <LinearGradient className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
}
