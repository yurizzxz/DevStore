import { Search } from "lucide-react";
import { InputRoot, InputField, InputIcon } from "./input";

export default function SearchBar() {
  return (
    <InputRoot>
      <InputIcon>
        <Search />
      </InputIcon>
      <InputField placeholder="O que você procura?" />
    </InputRoot>
  );
}
