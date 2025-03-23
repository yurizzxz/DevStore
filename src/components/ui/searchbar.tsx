import { Search } from "lucide-react";
import { InputRoot, InputField, InputIcon } from "./input";

export default function SearchBar() {
  return (
    <InputRoot>
      <InputField placeholder="O que você procura?" />
      <InputIcon>
        <Search />
      </InputIcon>
    </InputRoot>
  );
}
