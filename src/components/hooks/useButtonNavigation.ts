import { useNavigate } from "react-router-dom";

export const useCustomNav = () => {
    const navigation = useNavigate();

    const goTo = (to: string) => navigation(to);

    return {goTo};
  };
