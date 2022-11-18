import { Warning } from "phosphor-react";
import { MessageErrorContainer } from "./styles";

interface MessageErrorProps {
  message?: string;
}

export function MessageError({ message }: MessageErrorProps) {
  const isErrorMensagem = message;
  return (
    <MessageErrorContainer>
      <Warning size={32} />
      <span>{message}</span>
    </MessageErrorContainer>
  );
}
