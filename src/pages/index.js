import { Header } from "@/components/Header";
import { Left } from "@/components/Left";
import { Right } from "@/components/Right";
import { NumberProvider } from "@/context/NumChangeContext";
import ThemeProvider from "@/context/ThemeChangeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <NumberProvider>
        <div className="px-20 py-20 bg-red-200">
          <Header />
          <div className="flex gap-5">
            <Left />
            <Right />
          </div>
        </div>
      </NumberProvider>
    </ThemeProvider>
  );
}
