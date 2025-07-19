import { Button as ButtonComponent } from '@repo/ui/components/ui/button';
import {
  Card as CardComponent,
  CardContent as CardContentComponent,
  CardDescription as CardDescriptionComponent,
  CardFooter as CardFooterComponent,
  CardHeader as CardHeaderComponent,
  CardTitle as CardTitleComponent,
} from '@repo/ui/components/ui/card';

// React 19 compatibility - temporary until ecosystem catches up
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const Button = ButtonComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const Card = CardComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const CardContent = CardContentComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const CardDescription = CardDescriptionComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const CardFooter = CardFooterComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const CardHeader = CardHeaderComponent as any;
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const CardTitle = CardTitleComponent as any;

interface WelcomeCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function WelcomeCard({
  title = 'Welcome',
  description = 'Thanks for checking out the template!',
  buttonText = 'Get Started',
}: Readonly<WelcomeCardProps>) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-2">
        <div aria-label="Welcome Emoji" className="text-6xl" role="img">
          👋
        </div>
        <div className="text-center">
          <CardTitle className="text-sm">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 text-center">
        <p className="text-sm">
          We hope you find this useful. If you have any questions, don't
          hesitate to reach out.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center p-4 border-t">
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
