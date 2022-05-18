import { FC, ReactNode, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

export interface Props {
  children: ReactNode;
}

const ColorTheme: FC<Props> = ({ children }) => {
  const settings = useAppSelector((state) => state.settings);

  useEffect(() => {
    const rootHTMLclasses = document.getElementById("rootHTMLtag")?.classList;
    if (rootHTMLclasses) {
      rootHTMLclasses.remove("dark");
      if (settings.isDark) {
        rootHTMLclasses.add("dark");
      }
    }
  }, [settings.isDark]);

  return <>{children}</>;
};

export default ColorTheme;
