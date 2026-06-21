"use client";

import { useEffect, useMemo, useState } from "react";

type TerminalLine = {
  command: string;
  response: string;
};

const terminalLines: TerminalLine[] = [
  {
    command: "whoami",
    response: "emilio-caballero",
  },
  {
    command: "focus --now",
    response: "AI-powered apps · Automation · Modern Web",
  },
  {
    command: "stack --core",
    response: "Next.js · TypeScript · Python · PyTorch",
  },
  {
    command: "status",
    response: "Building real-world software systems...",
  },
];

const TYPE_DELAY = 46;
const RESPONSE_DELAY = 420;
const NEXT_COMMAND_DELAY = 500;
const RESET_DELAY = 15000;

export function TerminalCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [showResponse, setShowResponse] = useState(false);

  const activeLine = terminalLines[lineIndex];
  const completedLines = useMemo(
    () => (showResponse ? [...visibleLines, activeLine] : visibleLines),
    [activeLine, showResponse, visibleLines],
  );

  useEffect(() => {
    if (typedCommand.length >= activeLine.command.length) {
      const responseTimer = window.setTimeout(() => {
        setShowResponse(true);
      }, RESPONSE_DELAY);

      return () => window.clearTimeout(responseTimer);
    }

    const typeTimer = window.setTimeout(() => {
      setTypedCommand(activeLine.command.slice(0, typedCommand.length + 1));
    }, TYPE_DELAY);

    return () => window.clearTimeout(typeTimer);
  }, [activeLine.command, typedCommand]);

  useEffect(() => {
    if (!showResponse) {
      return;
    }

    const nextTimer = window.setTimeout(() => {
      if (lineIndex === terminalLines.length - 1) {
        setVisibleLines([]);
        setLineIndex(0);
      } else {
        setVisibleLines((currentLines) => [...currentLines, activeLine]);
        setLineIndex((currentIndex) => currentIndex + 1);
      }

      setTypedCommand("");
      setShowResponse(false);
    }, lineIndex === terminalLines.length - 1 ? RESET_DELAY : NEXT_COMMAND_DELAY);

    return () => window.clearTimeout(nextTimer);
  }, [activeLine, lineIndex, showResponse]);

  return (
    <div className="relative w-full max-w-[35rem] lg:w-[35rem] lg:justify-self-end">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-transparent blur-2xl" />
      <div className="w-full overflow-hidden rounded-[1.75rem] border border-white/12 bg-zinc-950/55 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="min-h-[25rem] w-full bg-[#090b16]/90 p-5 font-mono text-sm leading-7 text-zinc-300 sm:p-7 sm:text-[0.95rem]">
          <div className="space-y-5">
            {completedLines.map((line) => (
              <div key={line.command}>
                <p className="text-violet-200">$ {line.command}</p>
                <p className="text-white">{line.response}</p>
              </div>
            ))}

            {!showResponse && (
              <div>
                <p className="text-violet-200">
                  $ {typedCommand}
                  <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse rounded-sm bg-violet-200/80" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
